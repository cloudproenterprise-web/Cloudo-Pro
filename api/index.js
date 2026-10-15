/* CLOUDO PRO — Vercel Serverless API (/api/index)
   Satu file = seluruh endpoint REST. Data demo in-memory
   (di serverless tidak ada disk permanen — untuk produksi
   sambungkan ke Vercel KV / Postgres / Supabase). */
const crypto = require("crypto");

const SEED_USERS = [
  { email: "admin@cloudo.pro", pass: "demo1234", role: "admin", name: "Rizky Pratama" },
  { email: "budi@tokoberkah.com", pass: "demo1234", role: "client", name: "Budi Santoso" }
];
let MEM = null;
function mem() {
  if (!MEM) MEM = { sessions: {}, phpDefault: "8.2", panels: { cpanel: { status: "disconnected" }, directadmin: { status: "disconnected" } } };
  return MEM;
}
function send(res, code, obj) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.statusCode = code;
  res.end(JSON.stringify(obj));
}
function readBody(req) {
  return new Promise((resolve) => {
    let d = "";
    req.on("data", (c) => { d += c; });
    req.on("end", () => { try { resolve(d ? JSON.parse(d) : {}); } catch (e) { resolve({}); } });
  });
}
module.exports = async (req, res) => {
  const m = req.method;
  const full = new URL(req.url, "http://x");
  const sub = (full.searchParams.get("path") || full.pathname.replace(/^\/api(\/index)?/, "") || "/");
  const p = "/api" + (sub.startsWith("/") ? sub : "/" + sub);
  if (m === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
    res.statusCode = 204; res.end(); return;
  }
  if (p === "/api/health") return send(res, 200, { ok: true, mode: "vercel-serverless", time: new Date().toISOString() });
  if (p === "/api/php") return send(res, 200, { available: false, version: null, extensions: [], versions: ["7.2", "7.4", "8.0", "8.1", "8.2", "8.3"], note: "php -m dibaca dari server lokal; di edge tampil panduan" });
  if (p === "/api/login" && m === "POST") {
    const b = await readBody(req);
    const u = SEED_USERS.find((x) => x.email === String(b.email || "").toLowerCase() && x.pass === b.pass);
    if (!u) return send(res, 401, { error: "Email/password salah" });
    const token = crypto.randomBytes(24).toString("hex");
    mem().sessions[token] = { email: u.email, role: u.role, name: u.name };
    return send(res, 200, { token, role: u.role, name: u.name });
  }
  return send(res, 404, { error: "Endpoint demo di Vercel: /api/health, /api/login, /api/php. CRUD penuh jalan di server lokal (server.js)." });
};
