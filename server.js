/* ============================================================
   CLOUDO PRO - App Server + REST API (zero-dependency)
   Static + /api/* (auth, CRUD, panels, php). Data -> db.json
   Bind 0.0.0.0 agar bisa dibuka dari HP Android se-WiFi.
   ============================================================ */
const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = __dirname;
const PORT = process.env.PORT || 8080;
const HOST = "0.0.0.0";
const DB_FILE = path.join(ROOT, "db.json");
const MIME = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8", ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml", ".png": "image/png", ".ico": "image/x-icon",
  ".md": "text/markdown; charset=utf-8", ".webmanifest": "application/manifest+json"
};
function detectPHP() {
  const info = { available: false, version: null, extensions: [], versions: ["7.2", "7.4", "8.0", "8.1", "8.2", "8.3"] };
  try {
    const v = execSync("php -v", { timeout: 4000 }).toString().split("\n")[0];
    const m = v.match(/PHP\s+([\d.]+)/);
    info.available = true; info.version = m ? m[1] : v;
    try {
      info.extensions = execSync("php -m", { timeout: 4000 }).toString().split(/\r?\n/)
        .map(function (s) { return s.trim(); }).filter(function (s) { return s && s.charAt(0) !== "["; }).slice(0, 90);
    } catch (e) {}
  } catch (e) {}
  return info;
}
let PHP_INFO = detectPHP();
function defaultDB() {
  return {
    users: [
      { email: "admin@cloudo.pro", pass: "demo1234", role: "admin", name: "Rizky Pratama" },
      { email: "budi@tokoberkah.com", pass: "demo1234", role: "client", name: "Budi Santoso" }
    ],
    sessions: {}, vps: [], hosting: [], invoices: [], tickets: [], clients: [],
    panels: {
      cpanel: { host: "", user: "", token: "", status: "disconnected" },
      directadmin: { host: "", user: "", key: "", status: "disconnected" }
    },
    phpDefault: "8.2", seededAt: null
  };
}


let DBX = defaultDB();
function loadDB() {
  try {
    if (fs.existsSync(DB_FILE)) DBX = Object.assign(defaultDB(), JSON.parse(fs.readFileSync(DB_FILE, "utf8")));
    else saveDB();
  } catch (e) { DBX = defaultDB(); }
}
function saveDB() { try { fs.writeFileSync(DB_FILE, JSON.stringify(DBX, null, 2)); } catch (e) {} }
function seedFromMock() {
  if (DBX.seededAt) return;
  try {
    const vm = require("vm");
    const src = fs.readFileSync(path.join(ROOT, "js", "data.js"), "utf8");
    const box = {};
    vm.createContext(box);
    vm.runInContext(src + "\nthis.__mock = DB;", box);
    const mock = box.__mock || {};
    DBX.vps = mock.vps || []; DBX.hosting = mock.hosting || [];
    DBX.invoices = mock.invoices || []; DBX.tickets = mock.tickets || [];
    DBX.clients = mock.clients || [];
    if (DBX.vps.length) { DBX.seededAt = new Date().toISOString(); saveDB(); }
  } catch (e) {}
}
loadDB(); seedFromMock();
setInterval(function () { PHP_INFO = detectPHP(); }, 60000);
function send(res, code, obj) {
  res.writeHead(code, { "Content-Type": "application/json; charset=utf-8", "Access-Control-Allow-Origin": "*" });
  res.end(JSON.stringify(obj));
}
function readBody(req) {
  return new Promise(function (resolve) {
    let d = "";
    req.on("data", function (c) { d += c; if (d.length > 2e6) req.destroy(); });
    req.on("end", function () { try { resolve(d ? JSON.parse(d) : {}); } catch (e) { resolve({}); } });
  });
}
function getSession(req) {
  const h = req.headers["authorization"] || "";
  const t = h.indexOf("Bearer ") === 0 ? h.slice(7) : null;
  return t && DBX.sessions[t] ? DBX.sessions[t] : null;
}
async function proxyPanel(kind, apiPath, method, payload) {
  const cfg = DBX.panels[kind];
  if (!cfg || !cfg.host) throw new Error("Panel belum dikonfigurasi - isi host/user/token di menu Panels");
  const url = cfg.host.replace(/\/$/, "") + apiPath;
  const headers = { "Content-Type": "application/json" };
  if (kind === "cpanel") headers["Authorization"] = "cpanel " + cfg.user + ":" + cfg.token;
  else headers["Authorization"] = "Basic " + Buffer.from(cfg.user + ":" + cfg.key).toString("base64");
  const r = await fetch(url, { method: method || "GET", headers: headers, body: method === "GET" ? undefined : JSON.stringify(payload || {}) });
  const t = await r.text();
  try { return JSON.parse(t); } catch (e) { return { raw: t.slice(0, 2000) }; }
}
async function handleApi(req, res) {
  const u = new URL(req.url, "http://x");
  const p = u.pathname; const m = req.method;
  if (m === "OPTIONS") {
    res.writeHead(204, { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS", "Access-Control-Allow-Headers": "Content-Type,Authorization" });
    res.end(); return true;
  }
  if (p.indexOf("/api/") !== 0) return false;
  if (p === "/api/health") { send(res, 200, { ok: true, time: new Date().toISOString(), php: PHP_INFO.available ? PHP_INFO.version : "not-installed" }); return true; }
  if (p === "/api/php") { send(res, 200, PHP_INFO); return true; }
  if (p === "/api/login" && m === "POST") {
    const b = await readBody(req);
    const u0 = DBX.users.find(function (x) { return x.email === String(b.email || "").toLowerCase() && x.pass === b.pass; });
    if (!u0) { send(res, 401, { error: "Email/password salah" }); return true; }
    const token = crypto.randomBytes(24).toString("hex");
    DBX.sessions[token] = { email: u0.email, role: u0.role, name: u0.name }; saveDB();
    send(res, 200, { token: token, role: u0.role, name: u0.name }); return true;
  }
  if (p === "/api/logout" && m === "POST") {
    const h = req.headers["authorization"] || "";
    if (h.indexOf("Bearer ") === 0) { delete DBX.sessions[h.slice(7)]; saveDB(); }
    send(res, 200, { ok: true }); return true;
  }
  const s = getSession(req);
  if (!s) { send(res, 401, { error: "unauthorized" }); return true; }
  const R = p.match(/^\/api\/(vps|hosting|invoices|tickets|clients)(\/(.+))?$/);
  if (R) {
    const key = R[1]; const id = R[3] ? decodeURIComponent(R[3]) : null;
    if (m === "GET" && !id) { send(res, 200, DBX[key]); return true; }
    if (m === "GET" && id) {
      const it = DBX[key].find(function (x) { return String(x.id) === String(id); });
      send(res, it ? 200 : 404, it || { error: "not found" }); return true;
    }
    if (m === "POST") {
      const b = await readBody(req);
      b.id = b.id || (key.toUpperCase().slice(0, 3) + "-" + Date.now().toString().slice(-4));
      DBX[key].unshift(b); saveDB(); send(res, 201, b); return true;
    }
    if ((m === "PUT" || m === "PATCH") && id) {
      const b = await readBody(req);
      const i = DBX[key].findIndex(function (x) { return String(x.id) === String(id); });
      if (i < 0) { send(res, 404, { error: "not found" }); return true; }
      DBX[key][i] = Object.assign(DBX[key][i], b); saveDB(); send(res, 200, DBX[key][i]); return true;
    }
    if (m === "DELETE" && id) {
      const i = DBX[key].findIndex(function (x) { return String(x.id) === String(id); });
      if (i < 0) { send(res, 404, { error: "not found" }); return true; }
      DBX[key].splice(i, 1); saveDB(); send(res, 200, { ok: true }); return true;
    }
    send(res, 405, { error: "method" }); return true;
  }
  const act = p.match(/^\/api\/vps\/(.+)\/(start|stop|restart)$/);
  if (act && m === "POST") {
    const v = DBX.vps.find(function (x) { return String(x.id) === decodeURIComponent(act[1]); });
    if (!v) { send(res, 404, { error: "not found" }); return true; }
    if (act[2] === "start") { v.status = "running"; v.cpuUse = 25 + Math.floor(Math.random() * 30); }
    if (act[2] === "stop") { v.status = "stopped"; v.cpuUse = 0; }
    saveDB(); send(res, 200, v); return true;
  }
  if (p === "/api/panels" && m === "GET") {
    send(res, 200, {
      cpanel: { host: DBX.panels.cpanel.host, user: DBX.panels.cpanel.user, status: DBX.panels.cpanel.status, apiGratis: true },
      directadmin: { host: DBX.panels.directadmin.host, user: DBX.panels.directadmin.user, status: DBX.panels.directadmin.status, apiGratis: true }
    }); return true;
  }
  if (p === "/api/panels/cpanel" && m === "POST") {
    const b = await readBody(req);
    DBX.panels.cpanel = { host: b.host || "", user: b.user || "", token: b.token || "", status: b.host ? "configured" : "disconnected" };
    saveDB(); send(res, 200, { ok: true, status: DBX.panels.cpanel.status }); return true;
  }
  if (p === "/api/panels/directadmin" && m === "POST") {
    const b = await readBody(req);
    DBX.panels.directadmin = { host: b.host || "", user: b.user || "", key: b.key || "", status: b.host ? "configured" : "disconnected" };
    saveDB(); send(res, 200, { ok: true, status: DBX.panels.directadmin.status }); return true;
  }
  if (p === "/api/panels/cpanel/test" && m === "POST") {
    try { const r = await proxyPanel("cpanel", "/execute/Version/get_version", "GET"); DBX.panels.cpanel.status = "connected"; saveDB(); send(res, 200, { ok: true, result: r }); }
    catch (e) { send(res, 400, { ok: false, error: e.message }); }
    return true;
  }
  if (p === "/api/panels/directadmin/test" && m === "POST") {
    try { const r = await proxyPanel("directadmin", "/api/version", "GET"); DBX.panels.directadmin.status = "connected"; saveDB(); send(res, 200, { ok: true, result: r }); }
    catch (e) { send(res, 400, { ok: false, error: e.message }); }
    return true;
  }
  const px = p.match(/^\/api\/panels\/(cpanel|directadmin)\/proxy$/);
  if (px && m === "POST") {
    try { const b = await readBody(req); const r = await proxyPanel(px[1], b.path || "/", b.method || "GET", b.payload); send(res, 200, { ok: true, result: r }); }
    catch (e) { send(res, 400, { ok: false, error: e.message }); }
    return true;
  }
  if (p === "/api/php/default" && m === "POST") {
    const b = await readBody(req);
    DBX.phpDefault = b.version || DBX.phpDefault; saveDB();
    send(res, 200, { ok: true, version: DBX.phpDefault }); return true;
  }
  send(res, 404, { error: "unknown endpoint" }); return true;
}
http.createServer(async function (req, res) {
  try { if (await handleApi(req, res)) return; }
  catch (e) { send(res, 500, { error: e.message }); return; }
  let urlPath = decodeURIComponent(req.url.split("?")[0]);
  if (urlPath === "/") urlPath = "/index.html";
  if (urlPath === "/db.json" || urlPath === "/server.static.bak.js" || urlPath.indexOf(".tmp.js") >= 0) { res.writeHead(403); res.end("Forbidden"); return; }
  const filePath = path.normalize(path.join(ROOT, urlPath));
  if (filePath.indexOf(ROOT) !== 0) { res.writeHead(403); res.end("Forbidden"); return; }
  fs.readFile(filePath, function (err, data) {
    if (err) { res.writeHead(404); res.end("Not Found: " + urlPath); return; }
    res.writeHead(200, { "Content-Type": MIME[path.extname(filePath).toLowerCase()] || "application/octet-stream" });
    res.end(data);
  });
}).listen(PORT, HOST, function () { console.log("CLOUDO PRO running at http://" + HOST + ":" + PORT); });
