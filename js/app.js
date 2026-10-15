/* ============================================================
   CLOUDO PRO — Application Logic & Views
   ============================================================ */
const I = {
  dashboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>',
  server: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19a4.5 4.5 0 0 0 .5-8.98A6 6 0 0 0 6.2 9.2A4 4 0 0 0 7 19z"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  db: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
  archive: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="5" rx="1"/><path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9"/><path d="M10 13h4"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  card: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>',
  ticket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="M13 5v14"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  cpu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></svg>',
  memory: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 17v2M18 17v2M6 5v2M18 5v2M8 11h2M14 11h2"/></svg>',
  hdd: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12H2M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
  stop: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="1"/></svg>',
  reload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9 9 0 0 0-6.36 2.64L3 8"/><path d="M3 3v5h5"/></svg>',
  terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 17 6-6-6-6M12 19h8"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg>',
  trend: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m23 6-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
  key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14 21 3"/></svg>',
  wifi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/></svg>',
  activity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
  folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>',
  terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 17 6-6-6-6M12 19h8"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></svg>',
};

/* ---------- UTILITIES ---------- */
const $ = (s, el) => (el || document).querySelector(s);
const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));

function fmtRp(n) {
  if (n >= 1e9) return "Rp " + (n / 1e9).toFixed(1).replace(".", ",") + " M";
  if (n >= 1e6) return "Rp " + (n / 1e6).toFixed(1).replace(".", ",") + " jt";
  if (n >= 1e3) return "Rp " + (n / 1e3).toFixed(0) + " rb";
  return "Rp " + n;
}
function badge(text, cls) { return '<span class="badge ' + cls + '"><span class="dot"></span>' + text + "</span>"; }
function statusBadge(s) {
  const map = {
    running: ["Running", "green"], active: ["Aktif", "green"], paid: ["Lunas", "green"],
    success: ["Sukses", "green"], online: ["Online", "green"], answered: ["Dibalas", "blue"],
    stopped: ["Stopped", "red"], suspended: ["Suspend", "red"], failed: ["Gagal", "red"],
    overdue: ["Jatuh Tempo", "red"], open: ["Terbuka", "orange"], unpaid: ["Belum Bayar", "red"],
    expiring: ["Akan Habis", "orange"], maintenance: ["Maintenance", "orange"],
    pending: ["Pending", "orange"], closed: ["Ditutup", "gray"]
  };
  const m = map[s] || [s, "gray"];
  return badge(m[0], m[1]);
}
function prioBadge(p) {
  const map = { high: ["High", "red"], medium: ["Medium", "orange"], low: ["Low", "blue"] };
  return badge(map[p][0], map[p][1]);
}

/* ---------- TOAST ---------- */
function toast(title, sub, type) {
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = '<div class="t-ico ' + (type || "ok") + '">' + (type === "warn" ? I.alert : I.check) + "</div>" +
    '<div><div class="t-txt">' + title + "</div>" + (sub ? '<div class="t-sub">' + sub + "</div>" : "") + "</div>";
  $("#toasts").appendChild(el);
  setTimeout(() => { el.classList.add("hide"); setTimeout(() => el.remove(), 320); }, 3400);
}

/* ---------- MODAL ---------- */
function openModal(html) { $("#modal").innerHTML = html; $("#modalOverlay").classList.add("open"); }
function closeModal() { $("#modalOverlay").classList.remove("open"); $("#modal").innerHTML = ""; }
$("#modalOverlay").addEventListener("click", (e) => { if (e.target.id === "modalOverlay") closeModal(); });
/* ---------- CHART HELPERS (SVG) ---------- */
function _gradId() { return "g_" + Math.random().toString(36).slice(2, 8); }
function lineChart(values, labels, opts) {
  opts = opts || {};
  const w = 720, h = 220, pad = 30, padB = 28;
  const max = Math.max.apply(null, values) * 1.15, min = 0;
  const stepX = (w - pad * 2) / (values.length - 1);
  const pts = values.map((v, i) => [pad + i * stepX, h - padB - ((v - min) / (max - min)) * (h - pad - padB)]);
  const path = "M" + pts.map(p => p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" L");
  const area = path + " L" + (pad + (values.length - 1) * stepX).toFixed(1) + " " + (h - padB) + " L" + pad + " " + (h - padB) + " Z";
  let grid = "";
  for (let g = 0; g <= 4; g++) {
    const y = pad + (g / 4) * (h - pad - padB);
    grid += '<line x1="' + pad + '" y1="' + y + '" x2="' + (w - pad) + '" y2="' + y + '" stroke="rgba(255,255,255,0.06)"/>';
  }
  let xl = "";
  const every = Math.ceil(labels.length / 8);
  labels.forEach((lb, i) => { if (i % every === 0) xl += '<text x="' + (pad + i * stepX) + '" y="' + (h - 6) + '" fill="#6b7590" font-size="10" text-anchor="middle">' + lb + "</text>"; });
  const gid = _gradId();
  const accent = opts.grad === "accent";
  const stops = accent ? '<stop offset="0%" stop-color="#00e5a0" stop-opacity="0.35"/><stop offset="100%" stop-color="#00e5a0" stop-opacity="0"/>' : '<stop offset="0%" stop-color="#7c5cff" stop-opacity="0.35"/><stop offset="100%" stop-color="#4dd4ff" stop-opacity="0"/>';
  const stroke = accent ? "#00e5a0" : "#7c5cff";
  return '<svg class="chart-svg" viewBox="0 0 ' + w + " " + h + '" preserveAspectRatio="none">' +
    '<defs><linearGradient id="' + gid + '" x1="0" y1="0" x2="0" y2="1">' + stops + "</linearGradient></defs>" +
    grid + '<path d="' + area + '" fill="url(#' + gid + ')"/>' +
    '<path d="' + path + '" fill="none" stroke="' + stroke + '" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>' +
    pts.map(p => '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="2.5" fill="' + stroke + '"/>').join("") + xl + "</svg>";
}
function dualLine(values2, labels) {
  const w = 720, h = 220, pad = 30, padB = 28;
  const all = [].concat.apply([], values2.map(v => v.values));
  const max = Math.max.apply(null, all) * 1.15;
  const stepX = (w - pad * 2) / (labels.length - 1);
  function mk(vals, color) {
    const pts = vals.map((v, i) => [pad + i * stepX, h - padB - (v / max) * (h - pad - padB)]);
    const path = "M" + pts.map(p => p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" L");
    const dots = pts.map(p => '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="2" fill="' + color + '"/>').join("");
    return '<path d="' + path + '" fill="none" stroke="' + color + '" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>' + dots;
  }
  let grid = "";
  for (let g = 0; g <= 4; g++) {
    const y = pad + (g / 4) * (h - pad - padB);
    grid += '<line x1="' + pad + '" y1="' + y + '" x2="' + (w - pad) + '" y2="' + y + '" stroke="rgba(255,255,255,0.06)"/>';
  }
  return '<svg class="chart-svg" viewBox="0 0 ' + w + " " + h + '" preserveAspectRatio="none">' + grid + mk(values2[0].values, "#7c5cff") + mk(values2[1].values, "#00e5a0") + "</svg>";
}
function sparkline(values, color) {
  const w = 160, h = 56, max = Math.max.apply(null, values), min = Math.min.apply(null, values);
  const stepX = w / (values.length - 1);
  const pts = values.map((v, i) => [i * stepX, h - 4 - ((v - min) / (max - min || 1)) * (h - 8)]);
  const path = "M" + pts.map(p => p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" L");
  return '<svg class="spark" viewBox="0 0 ' + w + " " + h + '" preserveAspectRatio="none"><path d="' + path + '" fill="none" stroke="' + color + '" stroke-width="2" stroke-linecap="round"/></svg>';
}
/* ---------- NAVIGATION CONFIG ---------- */
const NAV = [
  { section: "Ringkasan" },
  { id: "dashboard", label: "Dashboard", icon: "dashboard" },
  { section: "Infrastruktur" },
  { id: "vps", label: "VPS / Cloud Server", icon: "server", badge: "28" },
  { id: "hosting", label: "Shared Hosting", icon: "cloud" },
  { id: "panels", label: "Control Panels", icon: "grid" },
  { id: "domains", label: "Domain & DNS", icon: "globe" },
  { section: "Layanan" },
  { id: "email", label: "Email Hosting", icon: "mail" },
  { id: "database", label: "Database", icon: "db" },
  { id: "phpmyadmin", label: "phpMyAdmin", icon: "db" },
  { id: "phpmanager", label: "PHP Manager", icon: "code" },
  { id: "ssl", label: "SSL & Keamanan", icon: "shield" },
  { id: "backup", label: "Backup", icon: "archive" },
  { section: "Tools" },
  { id: "cloner", label: "Website Cloner", icon: "copy" },
  { id: "nameserver", label: "Nameserver Cloudo", icon: "globe" },
  { section: "Bisnis" },
  { id: "reseller", label: "Reseller", icon: "users", badge: "18" },
  { id: "whitelabel", label: "White Label", icon: "zap" },
  { id: "billing", label: "Billing & Invoice", icon: "card" },
  { id: "clients", label: "Manajemen Klien", icon: "users", badge: "7" },
  { id: "support", label: "Support Ticket", icon: "ticket", badge: DB.stats.openTickets, dot: true },
  { section: "Sistem" },
  { id: "analytics", label: "Laporan & Analitik", icon: "trend" },
  { id: "monitoring", label: "Monitoring", icon: "activity" },
  { id: "settings", label: "Pengaturan", icon: "settings" }
];

function renderNav(active, asClient) {
  const isClient = asClient || AUTH.role === "client";
  const items = isClient ? CLIENT_NAV : NAV;
  let html = "";
  items.forEach(item => {
    if (item.section) { html += '<div class="nav-section">' + item.section + "</div>"; return; }
    if (item.action) {
      html += '<button class="nav-item" onclick="' + item.action + '()">' + I[item.icon] + "<span>" + item.label + "</span></button>";
      return;
    }
    if (item.panel) {
      html += '<button class="nav-item" onclick="openPanel(\'HST-2041\')">' + I[item.icon] + "<span>" + item.label + "</span></button>";
      return;
    }
    const isActive = item.id === active;
    let b = "";
    if (item.badge) b = '<span class="badge' + (item.dot ? " dot" : "") + '">' + item.badge + "</span>";
    html += '<a href="#' + item.id + '" class="nav-item' + (isActive ? " active" : "") + '">' + I[item.icon] + "<span>" + item.label + "</span>" + b + "</a>";
  });
  $("#nav").innerHTML = html;
}

/* ---------- PAGE HEAD ---------- */
function pageHead(title, sub, crumb, actions) {
  return '<div class="page-head"><div><div class="breadcrumb">CLOUDO PRO &nbsp;/&nbsp; <b>' + crumb + "</b></div>" +
    "<h2>" + title + "</h2><p>" + sub + "</p></div>" +
    (actions ? '<div class="flex gap8">' + actions + "</div>" : "") + "</div>";
}

/* ---------- CARD ---------- */
function card(title, sub, body, actions) {
  return '<div class="card"><div class="card-head"><div><h3>' + title + "</h3>" +
    (sub ? '<div class="sub">' + sub + "</div>" : "") + "</div>" +
    (actions ? '<div class="flex gap8">' + actions + "</div>" : "") + "</div>" + body + "</div>";
}

/* ---------- STAT CARD ---------- */
function statCard(icon, iconCls, glowColor, label, value, trend, foot) {
  return '<div class="stat"><div class="s-glow" style="background:' + glowColor + '"></div>' +
    '<div class="s-top"><div class="s-icon ' + iconCls + '">' + I[icon] + "</div>" +
    (trend ? '<span class="s-trend ' + (trend > 0 ? "trend-up" : "trend-down") + '">' + (trend > 0 ? "▲" : "▼") + " " + Math.abs(trend) + "%</span>" : "") + "</div>" +
    '<div class="s-label">' + label + '</div><div class="s-value">' + value + '</div>' +
    (foot ? '<div class="s-foot">' + foot + "</div>" : "") + "</div>";
}
/* ============================================================
   VIEW: DASHBOARD
   ============================================================ */
function viewDashboard() {
  const s = DB.stats;
  const stats = '<div class="grid g-4 mb24">' +
    statCard("server", "i-brand", "#7c5cff", "VPS Aktif", s.activeVPS + "/" + s.totalVPS, 8.3, "3 instance baru bulan ini") +
    statCard("cloud", "i-accent", "#00e5a0", "Shared Hosting", s.sharedHosting, 5.1, "142 akun di 5 region") +
    statCard("card", "i-info", "#4d9dff", "MRR (Bulanan)", fmtRp(s.mrr), s.mrrGrowth, "Recurring revenue bulanan") +
    statCard("users", "i-warn", "#ffb020", "Reseller Aktif", s.resellers, s.resellerGrowth, "Total komisi " + fmtRp(41100000)) +
    "</div>";

  const revenueChart = card("Pendapatan Tahunan", "Total revenue 12 bulan (juta IDR)",
    '<div class="chart-legend mb16"><div class="legend-item"><span class="sw" style="background:#7c5cff"></span>Revenue bersih</div>' +
    '<div class="legend-item" style="margin-left:auto"><span class="badge green"><span class="dot"></span>+' + s.mrrGrowth + '% YoY</span></div></div>' +
    lineChart(DB.revenue, DB.revenueLabels));

  const resourceChart = card("Utilisasi Resource", "Rata-rata CPU & RAM 14 hari terakhir",
    '<div class="chart-legend mb16"><div class="legend-item"><span class="sw" style="background:#7c5cff"></span>CPU</div>' +
    '<div class="legend-item"><span class="sw" style="background:#00e5a0"></span>RAM</div></div>' +
    dualLine([{ values: DB.cpu }, { values: DB.ram }], DB.resourceDays));

  const recentVPS = card("Server Terbaru", "Status VPS terkini",
    '<div class="table-wrap"><table><thead><tr><th>Server</th><th>Region</th><th>Status</th><th>CPU</th><th></th></tr></thead><tbody>' +
    DB.vps.slice(0, 5).map(v =>
      '<tr><td><div class="cell-main"><div class="cell-ico" style="color:#a78bff">' + I.server + '</div><div><div class="cell-title">' + v.name + '</div><div class="cell-sub">' + v.id + " · " + v.os + '</div></div></div></td>' +
      '<td><span class="mono">' + v.region + '</span></td><td>' + statusBadge(v.status) + "</td>" +
      '<td><div style="width:90px"><div class="pg-label"><span>' + v.cpuUse + '%</span></div><div class="progress' + (v.cpuUse > 70 ? " orange" : "") + '"><div style="width:' + v.cpuUse + '%"></div></div></div></td>' +
      '<td class="row-actions"><a href="#vps" class="act" title="Kelola">' + I.eye + "</a></td></tr>"
    ).join("") + "</tbody></table></div>");

  const activity = card("Aktivitas Sistem", "Log real-time",
    '<div class="timeline">' +
    DB.activity.map(a => {
      const colors = { accent: ["rgba(0,229,160,0.14)", "#00e5a0"], info: ["rgba(77,157,255,0.14)", "#4d9dff"], brand: ["rgba(124,92,255,0.16)", "#a78bff"], warn: ["rgba(255,176,32,0.14)", "#ffb020"] };
      const c = colors[a.color] || colors.brand;
      return '<div class="tl-item"><div class="tl-ico" style="background:' + c[0] + ";color:" + c[1] + '">' + (I[a.icon] || I.user) + '</div><div class="tl-body"><div class="tl-title">' + a.title + '</div><div class="tl-time">' + a.time + "</div></div></div>";
    }).join("") + "</div>");

  const regionCard = card("Status Data Center", "Latency & ketersediaan node",
    '<div class="grid" style="gap:12px">' +
    DB.regions.map(r =>
      '<div class="flex aic jcb" style="padding:10px 12px;background:var(--surface-2);border-radius:10px;border:1px solid var(--border)">' +
      '<div class="flex aic gap12"><span style="font-size:20px">' + r.flag + '</span><div><div class="fw7" style="font-size:13px">' + r.code + ' · ' + r.city + '</div><div class="cell-sub">' + r.latency + " ms</div></div></div>" +
      statusBadge(r.status) + "</div>"
    ).join("") + "</div>");

  const quickActions = card("Aksi Cepat", "Operasional umum",
    '<div class="grid g-2" style="gap:10px">' +
    '<button class="btn btn-ghost" onclick="go(\'vps\');setTimeout(openNewVPS,50)">' + I.plus + " Buat VPS</button>" +
    '<button class="btn btn-ghost" onclick="go(\'hosting\');setTimeout(openNewHosting,50)">' + I.plus + " Hosting Baru</button>" +
    '<button class="btn btn-ghost" onclick="go(\'backup\')">' + I.archive + " Backup</button>" +
    '<button class="btn btn-ghost" onclick="go(\'support\')">' + I.ticket + " Tiket Baru</button>" +
    "</div>");

  return pageHead("Dashboard", "Selamat datang kembali, Rizky. Semua sistem berjalan optimal.", "Dashboard") +
    stats +
    '<div class="grid g-23 mb24">' + revenueChart + activity + "</div>" +
    '<div class="grid g-23 mb24">' + resourceChart + regionCard + "</div>" +
    '<div class="grid g-23">' + recentVPS + quickActions + "</div>";
}
/* ============================================================
   VIEW: VPS MANAGER
   ============================================================ */
function viewVPS() {
  const rows = DB.vps.map(v =>
    "<tr>" +
    '<td><div class="cell-main"><div class="cell-ico" style="color:#a78bff">' + I.server + '</div><div><div class="cell-title">' + v.name + '</div><div class="cell-sub mono">' + v.ip + "</div></div></div></td>" +
    '<td><span class="fw7">' + v.plan + '</span><div class="cell-sub">' + v.os + "</div></td>" +
    '<td><span class="mono">' + v.region + "</span></td>" +
    '<td><span class="mono">' + v.cpu + " vCPU · " + v.ram + " GB</span></td>" +
    '<td><div style="width:70px"><div class="pg-label"><span>' + v.cpuUse + '%</span></div><div class="progress' + (v.cpuUse > 70 ? " orange" : "") + '"><div style="width:' + v.cpuUse + '%"></div></div></div></td>' +
    "<td>" + statusBadge(v.status) + "</td>" +
    '<td class="row-actions">' +
    (v.status === "running"
      ? '<button class="act stop" title="Stop" onclick="vpsAction(\'' + v.id + "','stop')\">" + I.stop + "</button>" +
        '<button class="act reload" title="Restart" onclick="vpsAction(\'' + v.id + "','restart')\">" + I.reload + "</button>"
      : '<button class="act play" title="Start" onclick="vpsAction(\'' + v.id + "','start')\">" + I.play + "</button>") +
    '<button class="act" title="Console" onclick="vpsConsole(\'' + v.id + "')\">" + I.terminal + "</button>" +
    '<button class="act" title="Detail" onclick="vpsDetail(\'' + v.id + "')\">" + I.eye + "</button>" +
    "</td></tr>"
  ).join("");

  const table = '<div class="table-wrap"><table><thead><tr><th>Server</th><th>Paket / OS</th><th>Region</th><th>Resource</th><th>CPU</th><th>Status</th><th style="text-align:right">Aksi</th></tr></thead><tbody>' + rows + "</tbody></table></div>";

  const overview = '<div class="grid g-4 mb24">' +
    statCard("server", "i-brand", "#7c5cff", "Total VPS", DB.stats.totalVPS, null, DB.stats.activeVPS + " berjalan") +
    statCard("cpu", "i-accent", "#00e5a0", "Rata CPU", "52%", 3.2, "Load seimbang") +
    statCard("memory", "i-info", "#4d9dff", "Rata RAM", "58%", -1.1, "Headroom cukup") +
    statCard("wifi", "i-warn", "#ffb020", "Uptime", DB.stats.uptime + "%", null, "30 hari terakhir") +
    "</div>";

  return pageHead("VPS / Cloud Server", "Kelola seluruh instance virtual private server Anda.", "Infrastruktur / VPS",
    '<button class="btn btn-primary" onclick="openNewVPS()">' + I.plus + " Buat VPS</button>") +
    overview + table;
}

/* ---------- VPS ACTIONS ---------- */
function vpsAction(id, action) {
  const v = DB.vps.find(x => x.id === id);
  if (!v) return;
  if (action === "start") { v.status = "running"; v.cpuUse = 25 + Math.floor(Math.random() * 30); toast("Server dinyalakan", v.name + " kini berjalan"); }
  if (action === "stop") { v.status = "stopped"; v.cpuUse = 0; toast("Server dihentikan", v.name + " telah dimatikan", "warn"); }
  if (action === "restart") { toast("Server di-restart", v.name + " sedang reboot..."); }
  render();
}
function vpsConsole(id) {
  const v = DB.vps.find(x => x.id === id);
  openModal(
    '<div class="modal-head"><h3>' + I.terminal + " Console — " + v.name + '</h3><button class="icon-btn" onclick="closeModal()">' + I.x + "</button></div>" +
    '<div class="modal-body"><div class="terminal"><div class="term-bar"><div class="dots"><span style="background:#ff5c72"></span><span style="background:#ffb020"></span><span style="background:#00e5a0"></span></div><span class="term-title">root@' + v.name + " — ssh</span></div>" +
    '<div class="term-body">' +
    '<div class="ln">Last login: Tue Oct 14 09:42:11 2025 from ' + v.ip + "</div>" +
    '<div class="ln"><span class="p">root@' + v.name + '</span>:<span class="u">~</span>$ uptime</div>' +
    '<div class="ln">&nbsp;09:42:11 up 42 days, &nbsp;3:15, &nbsp;1 user, &nbsp;load average: 0.' + (v.cpuUse % 10) + ", 0.15, 0.08</div>" +
    '<div class="ln"><span class="p">root@' + v.name + '</span>:<span class="u">~</span>$ systemctl status nginx</div>' +
    '<div class="ln">&nbsp;<span class="ok">● nginx.service - A high performance web server</span></div>' +
    '<div class="ln">&nbsp;&nbsp;&nbsp; Active: <span class="ok">active (running)</span> since Mon 2025-09-01</div>' +
    '<div class="ln"><span class="p">root@' + v.name + '</span>:<span class="u">~</span>$ <span class="cursor"></span></div>' +
    "</div></div></div>" +
    '<div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Tutup</button></div>'
  );
}
function vpsDetail(id) {
  const v = DB.vps.find(x => x.id === id);
  openModal(
    '<div class="modal-head"><h3>Detail ' + v.id + '</h3><button class="icon-btn" onclick="closeModal()">' + I.x + "</button></div>" +
    '<div class="modal-body">' +
    '<div class="kv"><span class="k">Hostname</span><span class="v mono">' + v.name + "</span></div>" +
    '<div class="kv"><span class="k">Alamat IP</span><span class="v mono">' + v.ip + "</span></div>" +
    '<div class="kv"><span class="k">Sistem Operasi</span><span class="v">' + v.os + "</span></div>" +
    '<div class="kv"><span class="k">Region</span><span class="v">' + v.region + "</span></div>" +
    '<div class="kv"><span class="k">Paket</span><span class="v">' + v.plan + "</span></div>" +
    '<div class="kv"><span class="k">CPU / RAM</span><span class="v">' + v.cpu + " vCPU / " + v.ram + " GB</span></div>" +
    '<div class="kv"><span class="k">Storage</span><span class="v">' + v.disk + " GB SSD</span></div>" +
    '<div class="kv"><span class="k">Bandwidth</span><span class="v">' + v.bw + " TB/bln</span></div>" +
    '<div class="mt16"><div class="pg-label"><span>CPU</span><span>' + v.cpuUse + '%</span></div><div class="progress"><div style="width:' + v.cpuUse + '%"></div></div></div>' +
    '<div class="mt16"><div class="pg-label"><span>RAM</span><span>' + v.ramUse + '%</span></div><div class="progress green"><div style="width:' + v.ramUse + '%"></div></div></div>' +
    "</div>" +
    '<div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Tutup</button><button class="btn btn-primary" onclick="closeModal();vpsConsole(\'' + v.id + "')\">Buka Console</button></div>"
  );
}
function openNewVPS() {
  openModal(
    '<div class="modal-head"><h3>' + I.server + " Buat VPS Baru</h3>" + '<button class="icon-btn" onclick="closeModal()">' + I.x + "</button></div>" +
    '<div class="modal-body">' +
    '<div class="field"><label>Hostname</label><input id="nvName" placeholder="contoh: web-server-01" value="new-server-' + (DB.vps.length + 1) + '"/></div>' +
    '<div class="field"><label>Sistem Operasi</label><select id="nvOS">' + DB.osList.map(o => "<option>" + o + "</option>").join("") + "</select></div>" +
    '<div class="field"><label>Region / Data Center</label><select id="nvRegion">' + DB.regionList.map(r => "<option>" + r + "</option>").join("") + "</select></div>" +
    '<div class="field"><label>Paket Resource</label><select id="nvPlan"><option>Cloud Basic — 2 vCPU / 4 GB</option><option selected>Cloud Pro V4 — 4 vCPU / 8 GB</option><option>Cloud Pro V8 — 8 vCPU / 32 GB</option><option>Cloud Pro V16 — 16 vCPU / 64 GB</option></select></div>' +
    '<div class="toggle-row"><div><div class="fw7">Backup Otomatis</div><div class="cell-sub">Snapshot harian</div></div><div class="toggle on" onclick="this.classList.toggle(\'on\')"></div></div>' +
    '<div class="toggle-row"><div><div class="fw7">Firewall Dasar</div><div class="cell-sub">Blokir port tidak perlu</div></div><div class="toggle on" onclick="this.classList.toggle(\'on\')"></div></div>' +
    "</div>" +
    '<div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Batal</button><button class="btn btn-primary" onclick="createVPS()">Deploy Server</button></div>'
  );
}
function createVPS() {
  const name = $("#nvName").value.trim() || "new-server";
  const os = $("#nvOS").value, region = $("#nvRegion").value, plan = $("#nvPlan").value.split("—")[0].trim();
  const ip = "103.86.99." + (100 + DB.vps.length);
  DB.vps.unshift({ id: "VPS-" + (1073 + DB.vps.length), name, os, ip, region, status: "running", cpu: 4, ram: 8, disk: 160, bw: 4, plan, cpuUse: 12, ramUse: 20 });
  DB.stats.totalVPS++; DB.stats.activeVPS++;
  closeModal(); go("vps");
  toast("VPS berhasil dibuat", name + " (" + ip + ") sedang provisioning", "info");
}
/* ============================================================
   VIEW: SHARED HOSTING
   ============================================================ */
function viewHosting() {
  const rows = DB.hosting.map(h => {
    const diskPct = Math.round(h.diskUsed / h.disk * 100);
    const bwPct = Math.round(h.bwUsed / h.bw * 100);
    return "<tr>" +
      '<td><div class="cell-main"><div class="cell-ico" style="color:#00e5a0">' + I.cloud + '</div><div><div class="cell-title">' + h.domain + '</div><div class="cell-sub">' + h.id + " · " + h.panel + "</div></div></div></td>" +
      '<td><span class="fw7">' + h.plan + '</span><div class="cell-sub">' + h.region + "</div></td>" +
      '<td><div style="min-width:100px"><div class="pg-label"><span>Disk</span><span>' + diskPct + "%</span></div>" + '<div class="progress' + (diskPct > 80 ? " orange" : "") + '"><div style="width:' + diskPct + '%"></div></div><div class="cell-sub">' + h.diskUsed + "/" + h.disk + " GB</div></div></td>" +
      '<td><div style="min-width:100px"><div class="pg-label"><span>BW</span><span>' + bwPct + "%</span></div>" + '<div class="progress' + (bwPct > 80 ? " orange" : "") + '"><div style="width:' + bwPct + '%"></div></div><div class="cell-sub">' + h.bwUsed + "/" + h.bw + " GB</div></div></td>" +
      '<td><span class="mono">' + h.email + " email · " + h.db + " db</span></td>" +
      "<td>" + (h.ssl ? '<span class="badge green"><span class="dot"></span>SSL</span>' : '<span class="badge red"><span class="dot"></span>No SSL</span>') + "</td>" +
      "<td>" + statusBadge(h.status) + "</td>" +
      '<td class="row-actions"><button class="act" title="Buka Panel" onclick="openPanel(\'' + h.id + "')\">" + I.grid + '</button><button class="act" title="Detail" onclick="toast(\'Detail akun\',\'' + h.domain + "')\">" + I.eye + "</button></td>" +
      "</tr>";
  }).join("");

  return pageHead("Shared Hosting", "Akun hosting bersama dengan resource terkelola penuh.", "Infrastruktur / Hosting",
    '<button class="btn btn-primary" onclick="openNewHosting()">' + I.plus + " Hosting Baru</button>") +
    '<div class="grid g-4 mb24">' +
    statCard("cloud", "i-accent", "#00e5a0", "Total Akun", DB.stats.sharedHosting, 5.1, "Aktif bulan ini") +
    statCard("hdd", "i-info", "#4d9dff", "Total Disk", "2.4 TB", null, "Terpakai 1.1 TB") +
    statCard("wifi", "i-warn", "#ffb020", "Total BW", "48 TB", null, "Rata 42% terpakai") +
    statCard("shield", "i-brand", "#7c5cff", "SSL Terpasang", "98%", null, "1 perlu perbaikan") +
    "</div>" +
    '<div class="table-wrap"><table><thead><tr><th>Domain</th><th>Paket</th><th>Disk</th><th>Bandwidth</th><th>Email / DB</th><th>SSL</th><th>Status</th><th style="text-align:right">Aksi</th></tr></thead><tbody>' + rows + "</tbody></table></div>";
}
function hostingPanel(id) {
  const h = DB.hosting.find(x => x.id === id) || DB.hosting[0];
  openModal(
    '<div class="modal-head"><h3>' + I.grid + " " + h.panel + " — " + h.domain + '</h3><button class="icon-btn" onclick="closeModal()">' + I.x + "</button></div>" +
    '<div class="modal-body">' +
    '<div class="kv"><span class="k">Panel Kontrol</span><span class="v">' + h.panel + "</span></div>" +
    '<div class="kv"><span class="k">Login URL</span><span class="v mono">' + h.domain + "/" + h.panel.toLowerCase() + "</span></div>" +
    '<div class="kv"><span class="k">Username</span><span class="v mono">' + h.id.toLowerCase() + "</span></div>" +
    '<div class="kv"><span class="k">Disk / BW</span><span class="v">' + h.diskUsed + "/" + h.disk + " GB · " + h.bwUsed + "/" + h.bw + " GB</span></div>" +
    '<div class="kv"><span class="k">Email / DB</span><span class="v">' + h.email + " / " + h.db + "</span></div>" +
    '<div class="field mt16"><label>Akses cepat</label><div class="grid g-2" style="gap:8px">' +
    '<button class="btn btn-ghost btn-sm" onclick="toast(\'File Manager\',\'Membuka file manager\')">' + I.hdd + " File Manager</button>" +
    '<button class="btn btn-ghost btn-sm" onclick="closeModal();go(\'database\')">' + I.db + " Database</button>" +
    '<button class="btn btn-ghost btn-sm" onclick="closeModal();go(\'email\')">' + I.mail + " Email</button>" +
    '<button class="btn btn-ghost btn-sm" onclick="toast(\'App Installer\',\'Install 400+ aplikasi\')">' + I.zap + " 1-Klik App</button>" +
    "</div></div></div>" +
    '<div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Tutup</button><button class="btn btn-primary" onclick="toast(\'Login panel\',\'Membuka ' + h.panel + '\')">Login ke Panel</button></div>'
  );
}
function openNewHosting() {
  openModal(
    '<div class="modal-head"><h3>' + I.cloud + " Buat Shared Hosting</h3>" + '<button class="icon-btn" onclick="closeModal()">' + I.x + "</button></div>" +
    '<div class="modal-body">' +
    '<div class="field"><label>Domain</label><input id="nhDomain" placeholder="namadomain.com" value="domainbaru.com"/></div>' +
    '<div class="field"><label>Paket</label><select id="nhPlan"><option>Starter — 10 GB / 500 GB BW</option><option selected>Business — 40 GB / 2 TB BW</option><option>Professional — 100 GB / 5 TB BW</option></select></div>' +
    '<div class="field"><label>Control Panel</label><select id="nhPanel">' + DB.panels.map(p => "<option>" + p.name + "</option>").join("") + "</select></div>" +
    '<div class="field"><label>Region</label><select id="nhRegion">' + DB.regionList.map(r => "<option>" + r + "</option>").join("") + "</select></div>" +
    '<div class="toggle-row"><div><div class="fw7">SSL Gratis (Let\'s Encrypt)</div><div class="cell-sub">Auto-renew</div></div><div class="toggle on" onclick="this.classList.toggle(\'on\')"></div></div>' +
    "</div>" +
    '<div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Batal</button><button class="btn btn-primary" onclick="createHosting()">Buat Akun</button></div>'
  );
}
function createHosting() {
  const domain = $("#nhDomain").value.trim() || "domainbaru.com";
  const plan = $("#nhPlan").value.split("—")[0].trim();
  const panel = $("#nhPanel").value, region = $("#nhRegion").value;
  DB.hosting.unshift({ id: "HST-" + (2046 + DB.hosting.length), domain, plan, disk: 40, diskUsed: 0.2, bw: 2000, bwUsed: 0, email: 25, db: 30, ssl: true, status: "active", panel, region });
  DB.stats.sharedHosting++;
  closeModal(); go("hosting");
  toast("Hosting dibuat", domain + " dengan panel " + panel, "info");
}

/* ============================================================
   VIEW: CONTROL PANELS
   ============================================================ */
function viewPanels() {
  const tiles = DB.panels.map(p =>
    '<div class="panel-tile" onclick="openPanel(\'' + (DB.hosting.find(h => h.panel === p.name) || DB.hosting[0]).id + "')\">" +
    '<div class="pt-logo" style="background:' + p.color + "22;color:" + p.color + '">' + p.logo + "</div>" +
    "<h4>" + p.name + "</h4>" +
    '<div class="pt-desc">' + p.desc + "</div>" +
    '<div class="pt-features">' + p.features.map(f => "<span>" + f + "</span>").join("") + "</div>" +
    '<div class="pt-foot"><span class="badge green"><span class="dot"></span>' + p.accounts + " akun</span>" +
    '<span class="text-2" style="font-size:12px;font-weight:700">' + p.price + "</span></div></div>"
  ).join("");

  return pageHead("Control Panels", "Pilih & kelola berbagai panel kontrol hosting dalam satu tempat.", "Infrastruktur / Panels",
    '<button class="btn btn-ghost" onclick="openPanelIntegration()">' + I.key + ' Integrasi cPanel / DA</button>' +
    '<button class="btn btn-primary" onclick="toast(\'Integrasi panel\',\'Hubungkan panel baru ke sistem\',\'info\')">' + I.plus + " Integrasi Panel</button>") +
    '<div class="grid g-4">' + tiles + "</div>" +
    '<div class="mt24">' + card("Perbandingan Panel", "Fitur utama tiap panel kontrol",
      '<div class="table-wrap"><table><thead><tr><th>Panel</th><th>Harga</th><th>Akun</th><th>Web Server</th><th>Backup</th><th>Rating</th></tr></thead><tbody>' +
      '<tr><td class="fw7">cPanel</td><td>Rp 45rb</td><td class="mono">68</td><td>Apache</td><td>JetBackup</td><td>★★★★★</td></tr>' +
      '<tr><td class="fw7">Plesk</td><td>Rp 52rb</td><td class="mono">24</td><td>Apache/Nginx</td><td>Plesk Backup</td><td>★★★★☆</td></tr>' +
      '<tr><td class="fw7">DirectAdmin</td><td>Rp 28rb</td><td class="mono">31</td><td>Nginx</td><td>CustomBuild</td><td>★★★★☆</td></tr>' +
      '<tr><td class="fw7">CyberPanel</td><td>Rp 35rb</td><td class="mono">19</td><td>OpenLiteSpeed</td><td>Cyber Backup</td><td>★★★★☆</td></tr>' +
      "</tbody></table></div>") + "</div>";
}
/* ============================================================
   VIEW: DOMAINS
   ============================================================ */
function viewDomains() {
  const rows = DB.domains.map(d =>
    "<tr>" +
    '<td><div class="cell-main"><div class="cell-ico" style="color:#4d9dff">' + I.globe + '</div><div><div class="cell-title">' + d.domain + '</div><div class="cell-sub">TLD ' + d.tld + "</div></div></div></td>" +
    '<td><span class="fw7">' + d.dns + "</span></td>" +
    '<td><span class="mono">' + d.expiry + "</span></td>" +
    "<td>" + (d.autoRenew ? '<span class="badge green"><span class="dot"></span>Aktif</span>' : '<span class="badge gray"><span class="dot"></span>Mati</span>') + "</td>" +
    "<td>" + statusBadge(d.status) + "</td>" +
    '<td class="row-actions"><button class="act" title="DNS" onclick="manageDNS(\'' + d.domain + "')\">" + I.globe + '</button><button class="act" title="Perpanjang" onclick="toast(\'Perpanjangan\',\'' + d.domain + " diperbarui')\">" + I.reload + "</button></td>" +
    "</tr>"
  ).join("");

  return pageHead("Domain & DNS", "Kelola registrasi domain dan pengaturan nameserver.", "Layanan / Domain",
    '<button class="btn btn-primary" onclick="toast(\'Cek domain\',\'Fitur pencarian domain\',\'info\')">' + I.plus + " Cari Domain</button>") +
    '<div class="grid g-4 mb24">' +
    statCard("globe", "i-info", "#4d9dff", "Total Domain", DB.stats.domains, 4.0, "Terdaftar aktif") +
    statCard("clock", "i-warn", "#ffb020", "Akan Habis", "1", null, "Segera perpanjang") +
    statCard("lock", "i-accent", "#00e5a0", "Domain Lock", "86", null, "Transfer lock aktif") +
    statCard("key", "i-brand", "#7c5cff", "Auto-Renew", "4", null, "Dari 5 domain") +
    "</div>" +
    '<div class="table-wrap"><table><thead><tr><th>Domain</th><th>Nameserver</th><th>Expired</th><th>Auto-Renew</th><th>Status</th><th style="text-align:right">Aksi</th></tr></thead><tbody>' + rows + "</tbody></table></div>";
}
function manageDNS(domain) {
  const recs = [
    { type: "A", name: "@", value: "103.86.96.14", ttl: "3600" },
    { type: "A", name: "www", value: "103.86.96.14", ttl: "3600" },
    { type: "CNAME", name: "mail", value: "mail." + domain, ttl: "3600" },
    { type: "MX", name: "@", value: "10 mail." + domain, ttl: "14400" },
    { type: "TXT", name: "@", value: "v=spf1 include:_spf.cloudo.pro ~all", ttl: "3600" }
  ];
  openModal(
    '<div class="modal-head"><h3>' + I.globe + " DNS — " + domain + '</h3><button class="icon-btn" onclick="closeModal()">' + I.x + "</button></div>" +
    '<div class="modal-body"><div class="table-wrap"><table><thead><tr><th>Type</th><th>Name</th><th>Value</th><th>TTL</th></tr></thead><tbody>' +
    recs.map(r => '<tr><td><span class="badge purple">' + r.type + "</span></td><td class=\"mono\">" + r.name + "</td><td class=\"mono\" style=\"max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap\">" + r.value + "</td><td class=\"mono\">" + r.ttl + "</td></tr>").join("") +
    "</tbody></table></div>" +
    '<button class="btn btn-ghost btn-sm mt16" onclick="toast(\'Tambah record\',\'Editor DNS akan terbuka\',\'info\')">' + I.plus + " Tambah Record</button></div>" +
    '<div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Tutup</button></div>'
  );
}
/* ============================================================
   VIEW: EMAIL
   ============================================================ */
function viewEmail() {
  const rows = DB.emails.map(e => {
    const pct = Math.round(e.used / e.quota * 100);
    return "<tr>" +
      '<td><div class="cell-main"><div class="cell-ico" style="color:#00e5a0">' + I.mail + '</div><div><div class="cell-title">' + e.addr + "</div></div></div></td>" +
      '<td><div style="min-width:120px"><div class="pg-label"><span>' + e.used + " / " + e.quota + ' GB</span><span>' + pct + "%</span></div>" + '<div class="progress green"><div style="width:' + pct + '%"></div></div></div></td>' +
      "<td>" + statusBadge(e.status) + "</td>" +
      '<td class="row-actions"><button class="act" title="Webmail" onclick="toast(\'Webmail\',\'Membuka webmail\',\'info\')">' + I.external + '</button><button class="act" title="Hapus" onclick="toast(\'Hapus email\',\'' + e.addr + "','warn')\">" + I.trash + "</button></td>" +
      "</tr>";
  }).join("");

  return pageHead("Email Hosting", "Kelola akun email profesional dengan domain sendiri.", "Layanan / Email",
    '<button class="btn btn-primary" onclick="toast(\'Email baru\',\'Buat akun email baru\',\'info\')">' + I.plus + " Email Baru</button>") +
    '<div class="grid g-4 mb24">' +
    statCard("mail", "i-accent", "#00e5a0", "Total Akun", DB.emails.length, 2, "Email aktif") +
    statCard("shield", "i-brand", "#7c5cff", "Spam Filter", "Aktif", null, "Rata-rata 42 spam/hari") +
    statCard("lock", "i-info", "#4d9dff", "SMTP/IMAP", "Aktif", null, "Port 587 / 993 aman") +
    statCard("db", "i-warn", "#ffb020", "Penyimpanan", "7 GB", null, "Dari 22 GB kuota") +
    "</div>" +
    card("Daftar Email", "Akun email & kuota penyimpanan",
      '<div class="table-wrap"><table><thead><tr><th>Alamat Email</th><th>Kuota</th><th>Status</th><th style="text-align:right">Aksi</th></tr></thead><tbody>' + rows + "</tbody></table></div>");
}

/* ============================================================
   VIEW: DATABASE
   ============================================================ */
function viewDatabase() {
  const rows = DB.databases.map(d =>
    "<tr>" +
    '<td><div class="cell-main"><div class="cell-ico" style="color:#4d9dff">' + I.db + '</div><div><div class="cell-title">' + d.name + '</div><div class="cell-sub">' + d.host + "</div></div></div></td>" +
    '<td><span class="mono">' + d.user + "</span></td>" +
    '<td><span class="mono">' + d.size + " MB</span></td>" +
    "<td>" + statusBadge(d.status) + "</td>" +
    '<td class="row-actions"><button class="act" title="phpMyAdmin" onclick="toast(\'phpMyAdmin\',\'Membuka phpMyAdmin\',\'info\')">' + I.external + '</button><button class="act" title="Backup" onclick="toast(\'Backup DB\',\'' + d.name + " di-backup','warn')\">" + I.archive + "</button></td>" +
    "</tr>"
  ).join("");

  return pageHead("Database", "Kelola database MySQL/MariaDB & akses phpMyAdmin.", "Layanan / Database",
    '<button class="btn btn-primary" onclick="toast(\'Database baru\',\'Buat database baru\',\'info\')">' + I.plus + " Database Baru</button>") +
    '<div class="grid g-4 mb24">' +
    statCard("db", "i-info", "#4d9dff", "Total Database", DB.databases.length, 1, "MySQL 8.0") +
    statCard("hdd", "i-brand", "#7c5cff", "Total Ukuran", "2.8 GB", null, "SSD NVMe") +
    statCard("shield", "i-accent", "#00e5a0", "Remote MySQL", "Aktif", null, "IP whitelist: 3") +
    statCard("archive", "i-warn", "#ffb020", "Backup DB", "Harian", null, "Retensi 30 hari") +
    "</div>" +
    card("Database Aktif", "Daftar database & ukuran",
      '<div class="table-wrap"><table><thead><tr><th>Nama Database</th><th>User</th><th>Ukuran</th><th>Status</th><th style="text-align:right">Aksi</th></tr></thead><tbody>' + rows + "</tbody></table></div>");
}
/* ============================================================
   VIEW: SSL & SECURITY
   ============================================================ */
function viewSSL() {
  const certs = [
    { domain: "tokoberkah.com", issuer: "Let's Encrypt", expires: "2025-12-14", status: "active", type: "DV" },
    { domain: "aplikasiku.id", issuer: "Sectigo", expires: "2026-05-20", status: "active", type: "OV" },
    { domain: "portofolio.me", issuer: "Let's Encrypt", expires: "2026-01-02", status: "active", type: "DV" },
    { domain: "startupku.co", issuer: "DigiCert", expires: "2026-03-09", status: "active", type: "EV" },
    { domain: "blogtravel.net", issuer: "—", expires: "—", status: "none", type: "—" }
  ];
  const rows = certs.map(c =>
    "<tr>" +
    '<td><div class="cell-main"><div class="cell-ico" style="color:#00e5a0">' + I.shield + '</div><div><div class="cell-title">' + c.domain + '</div><div class="cell-sub">' + c.issuer + "</div></div></div></td>" +
    '<td><span class="badge purple">' + c.type + "</span></td>" +
    '<td><span class="mono">' + c.expires + "</span></td>" +
    "<td>" + (c.status === "active" ? statusBadge("active") : '<span class="badge red"><span class="dot"></span>Belum Ada</span>') + "</td>" +
    '<td class="row-actions">' + (c.status === "none" ? '<button class="btn btn-accent btn-sm" onclick="toast(\'Pasang SSL\',\'' + c.domain + " gratis SSL dipasang')\">" + I.shield + " Pasang SSL</button>" : '<button class="act" title="Detail" onclick="toast(\'Detail SSL\',\'' + c.domain + "','info')\">" + I.eye + "</button>") + "</td>" +
    "</tr>"
  ).join("");

  return pageHead("SSL & Keamanan", "Kelola sertifikat SSL, firewall, dan perlindungan situs.", "Layanan / SSL",
    '<button class="btn btn-primary" onclick="toast(\'Pasang SSL\',\'Pasang SSL gratis untuk semua domain\',\'info\')">' + I.shield + " Pasang SSL</button>") +
    '<div class="grid g-4 mb24">' +
    statCard("shield", "i-accent", "#00e5a0", "SSL Aktif", "4/5", null, "1 domain belum aman") +
    statCard("lock", "i-brand", "#7c5cff", "Firewall", "Aktif", null, "Blokir 1.2k serangan/hari") +
    statCard("key", "i-info", "#4d9dff", "2FA Admin", "Aktif", null, "Autentikasi 2 faktor") +
    statCard("alert", "i-warn", "#ffb020", "Malware Scan", "Bersih", null, "Scan terakhir 2 jam lalu") +
    "</div>" +
    card("Sertifikat SSL", "Status & masa berlaku sertifikat",
      '<div class="table-wrap"><table><thead><tr><th>Domain</th><th>Tipe</th><th>Berlaku s/d</th><th>Status</th><th style="text-align:right">Aksi</th></tr></thead><tbody>' + rows + "</tbody></table></div>") +
    '<div class="mt16 grid g-3">' +
    card("Firewall", "Aturan keamanan jaringan",
      '<div class="toggle-row"><span>Blokir negara berisiko</span><div class="toggle on" onclick="this.classList.toggle(\'on\')"></div></div>' +
      '<div class="toggle-row"><span>Rate limiting</span><div class="toggle on" onclick="this.classList.toggle(\'on\')"></div></div>' +
      '<div class="toggle-row"><span>DDoS Protection L7</span><div class="toggle on" onclick="this.classList.toggle(\'on\')"></div></div>' +
      '<div class="toggle-row"><span>ModSecurity</span><div class="toggle on" onclick="this.classList.toggle(\'on\')"></div></div>') +
    card("Monitoring Keamanan", "Deteksi ancaman real-time", lineChart([12, 18, 15, 24, 20, 28, 22, 30, 26, 34, 30, 38], DB.revenueLabels, { grad: "accent" })) +
    "</div>";
}
/* ============================================================
   VIEW: BACKUP
   ============================================================ */
function viewBackup() {
  const rows = DB.backups.map(b =>
    "<tr>" +
    '<td><div class="cell-main"><div class="cell-ico" style="color:#4d9dff">' + I.archive + '</div><div><div class="cell-title">' + b.name + '</div><div class="cell-sub">' + b.type + " backup</div></div></div></td>" +
    '<td><span class="mono">' + b.size + "</span></td>" +
    '<td><span class="mono">' + b.date + "</span></td>" +
    "<td>" + statusBadge(b.status) + "</td>" +
    '<td class="row-actions"><button class="act" title="Restore" onclick="toast(\'Restore\',\'Memulihkan ' + b.name + "','warn')\">" + I.reload + '</button><button class="act" title="Download" onclick="toast(\'Download\',\'Mengunduh backup\',\'info\')">' + I.download + "</button></td>" +
    "</tr>"
  ).join("");

  return pageHead("Backup", "Snapshot otomatis & restore point untuk seluruh layanan.", "Layanan / Backup",
    '<button class="btn btn-primary" onclick="toast(\'Backup manual\',\'Membuat backup baru\',\'info\')">' + I.plus + " Backup Manual</button>") +
    '<div class="grid g-4 mb24">' +
    statCard("archive", "i-info", "#4d9dff", "Total Backup", DB.backups.length, null, "5 snapshot tersimpan") +
    statCard("clock", "i-brand", "#7c5cff", "Jadwal", "Harian 02:00", null, "Backup otomatis aktif") +
    statCard("hdd", "i-warn", "#ffb020", "Total Ukuran", "71 GB", null, "Off-site: Frankfurt") +
    statCard("check", "i-accent", "#00e5a0", "Sukses Rate", "96%", null, "1 gagal perlu dicek") +
    "</div>" +
    card("Riwayat Backup", "Snapshot terbaru & status",
      '<div class="table-wrap"><table><thead><tr><th>Nama</th><th>Ukuran</th><th>Waktu</th><th>Status</th><th style="text-align:right">Aksi</th></tr></thead><tbody>' + rows + "</tbody></table></div>") +
    '<div class="mt16">' + card("Konfigurasi Backup", "Kebijakan penyimpanan otomatis",
      '<div class="toggle-row"><div><div class="fw7">Backup Harian</div><div class="cell-sub">Setiap pukul 02:00 WIB</div></div><div class="toggle on" onclick="this.classList.toggle(\'on\')"></div></div>' +
      '<div class="toggle-row"><div><div class="fw7">Off-site Replication</div><div class="cell-sub">Salin ke region lain</div></div><div class="toggle on" onclick="this.classList.toggle(\'on\')"></div></div>' +
      '<div class="toggle-row"><div><div class="fw7">Retensi 30 Hari</div><div class="cell-sub">Hapus backup lama otomatis</div></div><div class="toggle on" onclick="this.classList.toggle(\'on\')"></div></div>') + "</div>";
}
/* ============================================================
   VIEW: RESELLER
   ============================================================ */
function viewReseller() {
  const totalComm = DB.resellers.reduce((a, r) => a + r.revenue * r.commission / 100, 0);
  const totalClients = DB.resellers.reduce((a, r) => a + r.clients, 0);

  const hero = '<div class="reseller-hero mb24 flex aic jcb gap16" style="flex-wrap:wrap">' +
    '<div style="max-width:520px"><span class="plan-pill">' + I.zap + " WHITE-LABEL READY</span>" +
    '<h2 style="font-size:26px;font-weight:800;margin:12px 0 6px">Program Reseller CLOUDO PRO</h2>' +
    '<p class="text-2" style="font-size:13.5px">Kelola jaringan reseller Anda dengan panel khusus, branding mandiri, dan sistem komisi otomatis hingga 22%. Berdayakan mitra untuk menjual layanan hosting & VPS dengan nama mereka sendiri.</p>' +
    '<div class="flex gap8 mt16"><button class="btn btn-primary" onclick="toast(\'Reseller baru\',\'Form pendaftaran mitra\',\'info\')">' + I.plus + " Tambah Reseller</button>" +
    '<button class="btn btn-ghost" onclick="toast(\'White-label\',\'Konfigurasi branding reseller\',\'info\')">' + I.settings + " White-Label</button></div></div>" +
    '<div class="grid g-2" style="gap:12px;min-width:280px">' +
    '<div style="background:rgba(255,255,255,0.05);border:1px solid var(--border);border-radius:12px;padding:16px"><div class="text-2" style="font-size:12px">Total Klien Bawahan</div><div style="font-size:26px;font-weight:800">' + totalClients + '</div></div>' +
    '<div style="background:rgba(255,255,255,0.05);border:1px solid var(--border);border-radius:12px;padding:16px"><div class="text-2" style="font-size:12px">Komisi Dibayarkan</div><div style="font-size:26px;font-weight:800;color:var(--accent)">' + fmtRp(totalComm) + "</div></div>" +
    "</div></div>";

  const rows = DB.resellers.map(r =>
    "<tr>" +
    '<td><div class="cell-main"><div class="cell-ico" style="color:#a78bff">' + I.users + '</div><div><div class="cell-title">' + r.name + '</div><div class="cell-sub">' + r.owner + " · " + r.id + "</div></div></div></td>" +
    '<td><span class="badge ' + (r.tier === "Platinum" ? "purple" : r.tier === "Gold" ? "orange" : r.tier === "Silver" ? "blue" : "gray") + '"><span class="dot"></span>' + r.tier + "</span></td>" +
    '<td><span class="mono">' + r.clients + " klien</span></td>" +
    '<td><span class="fw7" style="color:var(--accent)">' + r.commission + "%</span></td>" +
    "<td><span class=\"mono\">" + fmtRp(r.revenue) + "</span></td>" +
    "<td>" + statusBadge(r.status) + "</td>" +
    '<td class="row-actions"><button class="act" title="Panel Mitra" onclick="toast(\'Panel Reseller\',\'Membuka panel ' + r.name + "','info')\">" + I.grid + '</button><button class="act" title="Detail" onclick="toast(\'Detail\',\'' + r.name + "')\">" + I.eye + "</button></td>" +
    "</tr>"
  ).join("");

  const packages = [
    { name: "Bronze", comm: "15%", clients: "s/d 25 klien", price: "Rp 1.5jt", color: "#cd7f32", feats: ["Panel DirectAdmin","Support email","Branding dasar"] },
    { name: "Silver", comm: "18%", clients: "s/d 50 klien", price: "Rp 3.5jt", color: "#c0c0c0", feats: ["Pilihan panel","Support prioritas","White-label penuh"] },
    { name: "Gold", comm: "20%", clients: "s/d 100 klien", price: "Rp 7jt", color: "#ffd700", feats: ["Semua panel","Account manager","API reseller"] },
    { name: "Platinum", comm: "22%", clients: "Unlimited", price: "Rp 12jt", color: "#7c5cff", feats: ["Prioritas penuh","Dedicated support","Custom panel"] }
  ];
  const pkgTiles = packages.map(p =>
    '<div class="panel-tile">' +
    '<div class="pt-logo" style="background:' + p.color + "22;color:" + p.color + '">' + p.name[0] + "</div>" +
    "<h4>" + p.name + ' <span class="badge purple" style="margin-left:6px">' + p.comm + "</span></h4>" +
    '<div class="pt-desc">Kapasitas ' + p.clients + " · Modal " + p.price + "</div>" +
    '<div class="pt-features">' + p.feats.map(f => "<span>" + f + "</span>").join("") + "</div>" +
    '<div class="pt-foot"><span class="text-2" style="font-size:12px">Komisi otomatis</span><button class="btn btn-ghost btn-sm" onclick="toast(\'Pilih paket\',\'Paket ' + p.name + " dipilih','info')\">Pilih</button></div></div>"
  ).join("");

  return pageHead("Reseller", "Kelola mitra reseller, komisi, dan white-label.", "Bisnis / Reseller",
    '<button class="btn btn-primary" onclick="toast(\'Reseller baru\',\'Form pendaftaran mitra\',\'info\')">' + I.plus + " Tambah Reseller</button>") +
    hero +
    '<div class="grid g-4 mb24">' +
    statCard("users", "i-brand", "#7c5cff", "Total Reseller", DB.resellers.length, 12.5, "3 aktif + 1 pending") +
    statCard("card", "i-accent", "#00e5a0", "Komisi Bulan Ini", fmtRp(totalComm), 8.1, "Dibayar tgl 5") +
    statCard("globe", "i-info", "#4d9dff", "Klien Bawahan", totalClients, 6.3, "Dari seluruh reseller") +
    statCard("trend", "i-warn", "#ffb020", "Revenue Reseller", fmtRp(41100000), 9.4, "Kontribusi 34% total") +
    "</div>" +
    card("Daftar Reseller", "Mitra aktif & performa",
      '<div class="table-wrap"><table><thead><tr><th>Reseller</th><th>Tier</th><th>Klien</th><th>Komisi</th><th>Revenue</th><th>Status</th><th style="text-align:right">Aksi</th></tr></thead><tbody>' + rows + "</tbody></table></div>") +
    '<div class="mt24"><div class="section-title">Paket Reseller</div><div class="section-sub">Tingkatkan tier untuk komisi & fitur lebih besar</div>' +
    '<div class="grid g-4">' + pkgTiles + "</div></div>";
}
/* ============================================================
   VIEW: BILLING
   ============================================================ */
function viewBilling() {
  const rows = DB.invoices.map(inv =>
    "<tr>" +
    '<td><div class="cell-main"><div class="cell-ico" style="color:#4d9dff">' + I.card + '</div><div><div class="cell-title">' + inv.id + '</div><div class="cell-sub">' + inv.client + "</div></div></div></td>" +
    '<td><span class="mono">' + inv.date + "</span></td>" +
    '<td><span class="mono">' + inv.due + "</span></td>" +
    '<td><span class="fw7">' + fmtRp(inv.amount) + "</span></td>" +
    "<td>" + statusBadge(inv.status) + "</td>" +
    '<td class="row-actions"><button class="act" title="Lihat" onclick="viewInvoice(\'' + inv.id + "')\">" + I.eye + '</button><button class="act" title="Download" onclick="toast(\'Unduh PDF\',\'' + inv.id + "','info')\">" + I.download + "</button></td>" +
    "</tr>"
  ).join("");

  const paid = DB.invoices.filter(i => i.status === "paid").reduce((a, i) => a + i.amount, 0);
  const unpaid = DB.invoices.filter(i => i.status !== "paid").reduce((a, i) => a + i.amount, 0);

  return pageHead("Billing & Invoice", "Kelola tagihan, pembayaran, dan paket langganan.", "Bisnis / Billing",
    '<button class="btn btn-primary" onclick="toast(\'Buat invoice\',\'Form pembuatan invoice\',\'info\')">' + I.plus + " Buat Invoice</button>") +
    '<div class="grid g-4 mb24">' +
    statCard("card", "i-accent", "#00e5a0", "Terkumpul", fmtRp(paid), 8.2, "Bulan ini") +
    statCard("alert", "i-danger", "#ff5c72", "Belum Terbayar", fmtRp(unpaid), -3.1, "Perlu ditagih") +
    statCard("trend", "i-brand", "#7c5cff", "MRR", fmtRp(DB.stats.mrr), 12.4, "Recurring bulanan") +
    statCard("users", "i-info", "#4d9dff", "Langganan Aktif", "168", null, "VPS + hosting") +
    "</div>" +
    card("Daftar Invoice", "Tagihan terbaru & status pembayaran",
      '<div class="table-wrap"><table><thead><tr><th>Invoice</th><th>Tanggal</th><th>Jatuh Tempo</th><th>Jumlah</th><th>Status</th><th style="text-align:right">Aksi</th></tr></thead><tbody>' + rows + "</tbody></table></div>");
}
function viewInvoice(id) {
  const inv = DB.invoices.find(i => i.id === id);
  openModal(
    '<div class="modal-head"><h3>' + I.card + " " + inv.id + '</h3><button class="icon-btn" onclick="closeModal()">' + I.x + "</button></div>" +
    '<div class="modal-body">' +
    '<div class="kv"><span class="k">Klien</span><span class="v">' + inv.client + "</span></div>" +
    '<div class="kv"><span class="k">Tanggal</span><span class="v mono">' + inv.date + "</span></div>" +
    '<div class="kv"><span class="k">Jatuh Tempo</span><span class="v mono">' + inv.due + "</span></div>" +
    '<div class="kv"><span class="k">Status</span><span class="v">' + statusBadge(inv.status) + "</span></div>" +
    '<div class="kv"><span class="k">Metode</span><span class="v">Transfer Bank BCA</span></div>' +
    '<div class="mt16" style="background:var(--surface-2);border-radius:12px;padding:16px;border:1px solid var(--border)">' +
    '<div class="kv"><span class="k">Subtotal</span><span class="v">' + fmtRp(inv.amount) + "</span></div>" +
    '<div class="kv"><span class="k">PPN 11%</span><span class="v">' + fmtRp(inv.amount * 0.11) + "</span></div>" +
    '<div class="kv"><span class="k fw8">Total</span><span class="v fw8" style="color:var(--accent);font-size:17px">' + fmtRp(inv.amount * 1.11) + "</span></div></div>" +
    "</div>" +
    '<div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Tutup</button><button class="btn btn-primary" onclick="toast(\'Tandai lunas\',\'' + inv.id + " ditandai lunas')\">Tandai Lunas</button></div>"
  );
}
/* ============================================================
   VIEW: SUPPORT
   ============================================================ */
function viewSupport() {
  const rows = DB.tickets.map(t =>
    "<tr>" +
    '<td><div class="cell-main"><div class="cell-ico" style="color:#ffb020">' + I.ticket + '</div><div><div class="cell-title">' + t.subject + '</div><div class="cell-sub">' + t.id + " · " + t.client + "</div></div></div></td>" +
    '<td><span class="badge gray">' + t.dept + "</span></td>" +
    "<td>" + prioBadge(t.priority) + "</td>" +
    "<td>" + statusBadge(t.status) + "</td>" +
    '<td><span class="cell-sub">' + t.time + "</span></td>" +
    '<td class="row-actions"><button class="act" title="Balas" onclick="openTicket(\'' + t.id + "')\">" + I.eye + "</button></td>" +
    "</tr>"
  ).join("");

  return pageHead("Support Ticket", "Kelola permintaan bantuan dari klien.", "Bisnis / Support",
    '<button class="btn btn-primary" onclick="openTicket(null)">' + I.plus + " Tiket Baru</button>") +
    '<div class="grid g-4 mb24">' +
    statCard("ticket", "i-warn", "#ffb020", "Total Tiket", DB.tickets.length, null, "7 hari terakhir") +
    statCard("alert", "i-danger", "#ff5c72", "Terbuka", DB.stats.openTickets, null, "Perlu respons") +
    statCard("check", "i-accent", "#00e5a0", "Rata Respons", "12 mnt", null, "Target < 15 mnt") +
    statCard("trend", "i-info", "#4d9dff", "Kepuasan", "96%", null, "Rating klien") +
    "</div>" +
    card("Daftar Tiket", "Antrian bantuan & prioritas",
      '<div class="table-wrap"><table><thead><tr><th>Subjek</th><th>Departemen</th><th>Prioritas</th><th>Status</th><th>Waktu</th><th style="text-align:right">Aksi</th></tr></thead><tbody>' + rows + "</tbody></table></div>");
}
function openTicket(id) {
  const t = id ? DB.tickets.find(x => x.id === id) : null;
  openModal(
    '<div class="modal-head"><h3>' + (t ? "Tiket " + t.id : "Tiket Baru") + '</h3><button class="icon-btn" onclick="closeModal()">' + I.x + "</button></div>" +
    '<div class="modal-body">' +
    (t ? '<div class="kv"><span class="k">Klien</span><span class="v">' + t.client + "</span></div>" +
      '<div class="kv"><span class="k">Departemen</span><span class="v">' + t.dept + "</span></div>" +
      '<div class="kv"><span class="k">Prioritas</span><span class="v">' + prioBadge(t.priority) + "</span></div>" +
      '<div class="kv"><span class="k">Status</span><span class="v">' + statusBadge(t.status) + "</span></div>" +
      '<div class="field mt16"><label>Pesan</label><textarea rows="4">' + t.subject + " — mohon bantuan penanganannya. Terima kasih.</textarea></div>"
      : '<div class="field"><label>Subjek</label><input placeholder="Judul masalah"/></div>' +
        '<div class="field"><label>Departemen</label><select><option>Teknis</option><option>Billing</option><option>Penjualan</option></select></div>' +
        '<div class="field"><label>Prioritas</label><select><option>Low</option><option selected>Medium</option><option>High</option></select></div>' +
        '<div class="field"><label>Pesan</label><textarea rows="4" placeholder="Jelaskan masalah Anda..."></textarea></div>') +
    "</div>" +
    '<div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Tutup</button><button class="btn btn-primary" onclick="closeModal();toast(\'Tiket terkirim\',\'Respons telah dikirim\',\'info\')">Kirim Respons</button></div>'
  );
}
/* ============================================================
   VIEW: MONITORING
   ============================================================ */
function viewMonitoring() {
  const services = DB.vps.slice(0, 6).map(v => {
    const ok = v.status === "running";
    return '<div class="flex aic jcb" style="padding:12px;background:var(--surface-2);border-radius:10px;border:1px solid var(--border);margin-bottom:8px">' +
      '<div class="flex aic gap12"><span class="badge ' + (ok ? "green" : "red") + '"><span class="dot"></span>' + (ok ? "UP" : "DOWN") + "</span>" +
      '<div><div class="fw7" style="font-size:13px">' + v.name + '</div><div class="cell-sub mono">' + v.ip + " · " + v.region + "</div></div></div>" +
      '<div style="width:110px">' + sparkline(ok ? [40, 45, 42, 50, 48, 55, v.cpuUse] : [0, 0, 0, 0, 0, 0, 0], ok ? "#00e5a0" : "#ff5c72") + "</div>" +
      '<span class="mono" style="font-size:12px">' + (ok ? v.cpuUse + "%" : "—") + "</span></div>";
  }).join("");

  return pageHead("Monitoring", "Status real-time seluruh server & layanan.", "Sistem / Monitoring",
    '<button class="btn btn-primary" onclick="toast(\'Refresh\',\'Data monitoring disegarkan\',\'info\')">' + I.reload + " Refresh</button>") +
    '<div class="grid g-4 mb24">' +
    statCard("check", "i-accent", "#00e5a0", "Global Uptime", DB.stats.uptime + "%", null, "30 hari terakhir") +
    statCard("alert", "i-danger", "#ff5c72", "Insiden Aktif", "0", null, "Semua normal") +
    statCard("clock", "i-info", "#4d9dff", "Rata Respons", "42 ms", null, "Dari 5 region") +
    statCard("wifi", "i-warn", "#ffb020", "Bandwidth", "62%", null, "Dari kapasitas total") +
    "</div>" +
    '<div class="grid g-23">' +
    card("Load Server", "Rata-rata beban CPU & RAM",
      '<div class="chart-legend mb16"><div class="legend-item"><span class="sw" style="background:#7c5cff"></span>CPU</div><div class="legend-item"><span class="sw" style="background:#00e5a0"></span>RAM</div></div>' +
      dualLine([{ values: DB.cpu }, { values: DB.ram }], DB.resourceDays)) +
    card("Status Layanan", "Health check per server", services) +
    "</div>";
}

/* ============================================================
   VIEW: SETTINGS
   ============================================================ */
function viewSettings() {
  return pageHead("Pengaturan", "Konfigurasi akun, keamanan, dan preferensi sistem.", "Sistem / Pengaturan") +
    '<div class="grid g-23">' +
    card("Profil Administrator", "Informasi akun utama",
      '<div class="flex aic gap16 mb16"><div class="avatar" style="width:64px;height:64px;font-size:22px">' + DB.user.initials + "</div>" +
      '<div><div style="font-size:18px;font-weight:700">' + DB.user.name + '</div><div class="text-2">' + DB.user.role + '</div><div class="text-3" style="font-size:12px">' + DB.user.email + "</div></div></div>" +
      '<div class="field"><label>Nama Lengkap</label><input value="' + DB.user.name + '"/></div>' +
      '<div class="field"><label>Email</label><input value="' + DB.user.email + '"/></div>' +
      '<button class="btn btn-primary" onclick="toast(\'Profil diperbarui\',\'Perubahan berhasil disimpan\')">Simpan Perubahan</button>') +
    card("Keamanan", "Autentikasi & akses",
      '<div class="toggle-row"><div><div class="fw7">Autentikasi 2 Faktor</div><div class="cell-sub">Via Google Authenticator</div></div><div class="toggle on" onclick="this.classList.toggle(\'on\')"></div></div>' +
      '<div class="toggle-row"><div><div class="fw7">Login Notification</div><div class="cell-sub">Email saat ada login baru</div></div><div class="toggle on" onclick="this.classList.toggle(\'on\')"></div></div>' +
      '<div class="toggle-row"><div><div class="fw7">IP Whitelist</div><div class="cell-sub">Batasi akses admin</div></div><div class="toggle" onclick="this.classList.toggle(\'on\')"></div></div>' +
      '<div class="field mt16"><label>Ganti Password</label><input type="password" placeholder="••••••••"/></div>' +
      '<button class="btn btn-ghost" onclick="toast(\'Password diubah\',\'Gunakan password baru saat login\',\'warn\')">Ubah Password</button>') +
    "</div>" +
    '<div class="mt16 grid g-2">' +
    card("Notifikasi", "Preferensi pemberitahuan",
      '<div class="toggle-row"><span>Email invoice & billing</span><div class="toggle on" onclick="this.classList.toggle(\'on\')"></div></div>' +
      '<div class="toggle-row"><span>Alert server down</span><div class="toggle on" onclick="this.classList.toggle(\'on\')"></div></div>' +
      '<div class="toggle-row"><span>Reminder expiry domain</span><div class="toggle on" onclick="this.classList.toggle(\'on\')"></div></div>' +
      '<div class="toggle-row"><span>Newsletter produk</span><div class="toggle" onclick="this.classList.toggle(\'on\')"></div></div>') +
    card("Tampilan", "Preferensi antarmuka",
      '<div class="toggle-row"><span>Mode Gelap</span><div class="toggle on" onclick="this.classList.toggle(\'on\')"></div></div>' +
      '<div class="toggle-row"><span>Animasi UI</span><div class="toggle on" onclick="this.classList.toggle(\'on\')"></div></div>' +
      '<div class="toggle-row"><span>Kompak sidebar</span><div class="toggle" onclick="this.classList.toggle(\'on\')"></div></div>' +
      '<div class="field mt16"><label>Bahasa</label><select><option selected>Bahasa Indonesia</option><option>English</option></select></div>') +
    "</div>";
}
/* ============================================================
   VIEW: CLIENTS
   ============================================================ */
function viewClients() {
  const totalSpend = DB.clients.reduce((a, c) => a + c.spend, 0);
  const active = DB.clients.filter(c => c.status === "active").length;
  const rows = DB.clients.map(c => {
    const inits = c.name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
    return "<tr>" +
      '<td><div class="cell-main"><div class="avatar" style="width:36px;height:36px;font-size:12px">' + inits + '</div><div><div class="cell-title">' + c.name + '</div><div class="cell-sub">' + c.id + " · sejak " + c.since + "</div></div></div></td>" +
      '<td><div class="cell-title" style="font-weight:500">' + c.contact + '</div><div class="cell-sub mono">' + c.email + "</div></td>" +
      '<td><span class="mono">' + c.services + " layanan</span></td>" +
      '<td><span class="fw7">' + fmtRp(c.spend) + "</span></td>" +
      "<td>" + statusBadge(c.status) + "</td>" +
      '<td class="row-actions"><button class="act" title="Email" onclick="toast(\'Kirim email\',\'' + c.email + "','info')\">" + I.mail + '</button><button class="act" title="Detail" onclick="toast(\'Detail klien\',\'' + c.name + "')\">" + I.eye + "</button></td>" +
      "</tr>";
  }).join("");

  return pageHead("Manajemen Klien", "Kelola seluruh pelanggan & riwayat layanan mereka.", "Bisnis / Klien",
    '<button class="btn btn-primary" onclick="toast(\'Klien baru\',\'Form tambah pelanggan\',\'info\')">' + I.plus + " Tambah Klien</button>") +
    '<div class="grid g-4 mb24">' +
    statCard("users", "i-brand", "#7c5cff", "Total Klien", DB.clients.length, 11.2, active + " aktif") +
    statCard("card", "i-accent", "#00e5a0", "Total Nilai (LTV)", fmtRp(totalSpend), 9.4, "Akumulasi semua klien") +
    statCard("trend", "i-info", "#4d9dff", "Rata Layanan/Klien", (DB.clients.reduce((a, c) => a + c.services, 0) / DB.clients.length).toFixed(1), null, "Produk per pelanggan") +
    statCard("check", "i-warn", "#ffb020", "Retensi", DB.analytics.retention + "%", 1.3, "Klien bertahan tahun ini") +
    "</div>" +
    card("Daftar Klien", "Informasi kontak & layanan aktif",
      '<div class="table-wrap"><table><thead><tr><th>Klien</th><th>Kontak</th><th>Layanan</th><th>Total Belanja</th><th>Status</th><th style="text-align:right">Aksi</th></tr></thead><tbody>' + rows + "</tbody></table></div>");
}

/* ============================================================
   VIEW: ANALYTICS
   ============================================================ */
function donut(items) {
  let acc = 0;
  const stops = items.map(it => {
    const from = acc; acc += it.value;
    return it.color + " " + from + "% " + acc + "%";
  }).join(", ");
  return '<div style="width:180px;height:180px;border-radius:50%;background:conic-gradient(' + stops + ');margin:0 auto;position:relative">' +
    '<div style="position:absolute;inset:26px;border-radius:50%;background:var(--bg-1);display:grid;place-items:center;text-align:center">' +
    '<div><div style="font-size:22px;font-weight:800">100%</div><div class="cell-sub">Komposisi</div></div></div></div>';
}
function viewAnalytics() {
  const a = DB.analytics;
  const legend = '<div class="grid" style="gap:10px">' +
    a.serviceSplit.map(s =>
      '<div class="flex aic jcb"><div class="flex aic gap8"><span class="sw" style="width:11px;height:11px;border-radius:3px;background:' + s.color + '"></span><span style="font-size:13px">' + s.label + '</span></div><span class="fw7">' + s.value + "%</span></div>"
    ).join("") + "</div>";

  const regionBars = a.topRegions.map(r =>
    '<div class="mb16"><div class="pg-label"><span>' + r.region + "</span><span>" + r.pct + '%</span></div><div class="progress"><div style="width:' + r.pct + '%"></div></div></div>'
  ).join("");

  return pageHead("Laporan & Analitik", "Analisis performa bisnis, komposisi layanan, dan pertumbuhan.", "Sistem / Analitik",
    '<button class="btn btn-primary" onclick="toast(\'Ekspor laporan\',\'Laporan PDF/Excel diunduh\',\'info\')">' + I.download + " Ekspor Laporan</button>") +
    '<div class="grid g-4 mb24">' +
    statCard("trend", "i-accent", "#00e5a0", "ARPU", fmtRp(a.arpu), 7.2, "Rata pendapatan/klien") +
    statCard("alert", "i-danger", "#ff5c72", "Churn Rate", a.churn + "%", -0.6, "Klien berhenti bulan ini") +
    statCard("shield", "i-info", "#4d9dff", "Retensi", a.retention + "%", 1.3, "Tingkat kepuasan tinggi") +
    statCard("card", "i-brand", "#7c5cff", "Pertumbuhan YoY", "+38%", 38, "Revenue vs tahun lalu") +
    "</div>" +
    card("Pertumbuhan Pendapatan", "Tren revenue 12 bulan (juta IDR)", lineChart(a.growth, DB.revenueLabels, { grad: "accent" })) +
    '<div class="grid g-23 mt16">' +
    card("Komposisi Layanan", "Kontribusi tiap jenis layanan", '<div class="flex aic gap16" style="flex-wrap:wrap;justify-content:center">' + donut(a.serviceSplit) + '<div style="flex:1;min-width:200px">' + legend + "</div></div>") +
    card("Region Teratas", "Distribusi pelanggan per wilayah", regionBars) +
    "</div>";
}

/* ============================================================
   FUNCTIONAL CONTROL PANEL
   ============================================================ */
let PANEL = null;

const PANEL_SECTIONS = [
  { id: "overview", label: "Ringkasan", icon: "dashboard" },
  { id: "files", label: "File Manager", icon: "folder" },
  { id: "email", label: "Email Akun", icon: "mail" },
  { id: "database", label: "MySQL Database", icon: "db" },
  { id: "domains", label: "Domain & DNS", icon: "globe" },
  { id: "ssl", label: "SSL/TLS", icon: "shield" },
  { id: "backup", label: "Backup", icon: "archive" },
  { id: "apps", label: "Software", icon: "grid" },
  { id: "metrics", label: "Metrics", icon: "activity" }
];

function initPanel(accountId) {
  const acc = DB.hosting.find(h => h.id === accountId) || DB.hosting[0];
  const meta = DB.panels.find(p => p.name === acc.panel) || DB.panels[0];
  PANEL = {
    acc, meta, section: "overview",
    files: [
      { name: "public_html", type: "folder", size: "—", perm: "drwxr-xr-x", date: "2025-10-10" },
      { name: "private", type: "folder", size: "—", perm: "drwx------", date: "2025-09-01" },
      { name: "logs", type: "folder", size: "—", perm: "drwxr-xr-x", date: "2025-10-12" },
      { name: "mail", type: "folder", size: "—", perm: "drwxr-xr-x", date: "2025-08-20" },
      { name: "www", type: "link", size: "→ public_html", perm: "lrwxrwxrwx", date: "2025-08-20" },
      { name: ".htaccess", type: "file", size: "1.2 KB", perm: "-rw-r--r--", date: "2025-10-01" },
      { name: "index.php", type: "file", size: "4.8 KB", perm: "-rw-r--r--", date: "2025-10-08" },
      { name: "wp-config.php", type: "file", size: "3.1 KB", perm: "-rw-r--r--", date: "2025-10-08" }
    ],
    emails: [
      { addr: "admin", quota: 5, used: 1.8 },
      { addr: "support", quota: 10, used: 4.2 },
      { addr: "noreply", quota: 2, used: 0.1 }
    ],
    dbs: [
      { name: acc.id.toLowerCase() + "_wp", user: "u_" + acc.id.toLowerCase().slice(-4), size: 245 },
      { name: acc.id.toLowerCase() + "_shop", user: "u_shop01", size: 890 }
    ],
    subdomains: [
      { name: "www", root: "public_html", ssl: true },
      { name: "blog", root: "public_html/blog", ssl: true },
      { name: "shop", root: "public_html/shop", ssl: false }
    ],
    dns: [
      { type: "A", name: "@", value: "103.86.96.14", ttl: "3600" },
      { type: "A", name: "www", value: "103.86.96.14", ttl: "3600" },
      { type: "CNAME", name: "mail", value: "mail." + acc.domain, ttl: "3600" },
      { type: "MX", name: "@", value: "10 mail." + acc.domain, ttl: "14400" },
      { type: "TXT", name: "@", value: "v=spf1 include:_spf.cloudo.pro ~all", ttl: "3600" }
    ],
    ssl: acc.ssl,
    autoSSL: acc.ssl,
    backups: [
      { name: "Full Backup", type: "Full", size: "12.4 GB", date: "2025-10-14 02:00", status: "success" },
      { name: "Home Dir", type: "Files", size: "8.1 GB", date: "2025-10-13 02:00", status: "success" }
    ],
    apps: [
      { name: "WordPress", ver: "6.4.2", installed: true },
      { name: "Joomla", ver: "—", installed: false },
      { name: "Laravel", ver: "—", installed: false },
      { name: "Node.js App", ver: "—", installed: false },
      { name: "phpMyAdmin", ver: "5.2", installed: true },
      { name: "Ghost CMS", ver: "—", installed: false }
    ]
  };
}

function openPanel(accountId) {
  initPanel(accountId);
  go("panel");
}
function panelNav(section) {
  if (!PANEL) return;
  PANEL.section = section;
  renderPanel();
}
function renderPanel() {
  $("#content").innerHTML = viewPanel();
  renderNav("panel");
}

function viewPanel() {
  if (!PANEL) initPanel(DB.hosting[0].id);
  const p = PANEL, m = p.meta;
  const nav = '<div class="panel-nav">' + PANEL_SECTIONS.map(s =>
    '<button class="pn-item' + (p.section === s.id ? " active" : "") + '" onclick="panelNav(\'' + s.id + "')\">" + I[s.icon] + "<span>" + s.label + "</span></button>"
  ).join("") + "</div>";

  const top = '<div class="panel-wrap"><div class="panel-back" onclick="go(\'hosting\')">' +
    '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg> Kembali ke Hosting</div>' +
    '<div class="panel-top"><div class="pt-avatar" style="background:' + m.color + '">' + m.logo + "</div>" +
    '<div style="flex:1;min-width:180px"><div class="pt-title">' + m.name + " — " + p.acc.domain + '</div>' +
    '<div class="pt-sub">' + p.acc.plan + " · " + p.acc.region + " · User: " + p.acc.id.toLowerCase() + "</div></div>" +
    '<div class="flex gap8" style="flex-wrap:wrap">' +
    (p.ssl ? '<span class="badge green"><span class="dot"></span>SSL Aktif</span>' : '<span class="badge red"><span class="dot"></span>No SSL</span>') +
    '<span class="badge blue"><span class="dot"></span>' + m.name + "</span>" +
    '<button class="btn btn-ghost btn-sm" onclick="toast(\'Logout\',\'Keluar dari panel\',\'warn\')">Logout</button>' +
    "</div></div>";

  const main = '<div class="panel-body">' + nav + '<div class="panel-main">' + panelSection(p.section) + "</div></div></div>";
  return top + main;
}
/* ---------- PANEL SECTION DISPATCHER ---------- */
function panelSection(id) {
  const p = PANEL;
  if (id === "overview") return secOverview(p);
  if (id === "files") return secFiles(p);
  if (id === "email") return secEmail(p);
  if (id === "database") return secDatabase(p);
  if (id === "domains") return secDomains(p);
  if (id === "ssl") return secSSL(p);
  if (id === "backup") return secBackup(p);
  if (id === "apps") return secApps(p);
  if (id === "metrics") return secMetrics(p);
  return secOverview(p);
}
function meter(label, used, total, unit, cls) {
  const pct = total ? Math.min(100, Math.round(used / total * 100)) : 0;
  return '<div class="meter"><div class="m-top"><span>' + label + '</span><span><b>' + used + "</b> / " + total + " " + unit + " · " + pct + '%</span></div>' +
    '<div class="progress ' + (pct > 80 ? "orange" : "") + '"><div style="width:' + pct + '%"></div></div></div>';
}

/* ---------- OVERVIEW ---------- */
function secOverview(p) {
  const emailUsed = p.emails.length, dbUsed = p.dbs.length;
  return '<div class="grid g-4 mb16">' +
    '<div class="mini-stat"><div class="s-icon i-brand" style="margin:0 auto 8px">' + I.hdd + '</div><div class="ms-val">' + p.acc.diskUsed + ' GB</div><div class="ms-lbl">Disk terpakai</div></div>' +
    '<div class="mini-stat"><div class="s-icon i-info" style="margin:0 auto 8px">' + I.wifi + '</div><div class="ms-val">' + p.acc.bwUsed + ' GB</div><div class="ms-lbl">Bandwidth</div></div>' +
    '<div class="mini-stat"><div class="s-icon i-accent" style="margin:0 auto 8px">' + I.mail + '</div><div class="ms-val">' + emailUsed + '/' + p.acc.email + '</div><div class="ms-lbl">Email akun</div></div>' +
    '<div class="mini-stat"><div class="s-icon i-warn" style="margin:0 auto 8px">' + I.db + '</div><div class="ms-val">' + dbUsed + '/' + p.acc.db + '</div><div class="ms-lbl">Database</div></div>' +
    "</div>" +
    '<div class="grid g-2">' +
    card("Penggunaan Resource", "Kuota paket " + p.acc.plan,
      '<div class="grid" style="gap:16px">' +
      meter("Disk Space", p.acc.diskUsed, p.acc.disk, "GB") +
      meter("Bandwidth", p.acc.bwUsed, p.acc.bw, "GB") +
      meter("Email Accounts", emailUsed, p.acc.email, "akun", "green") +
      meter("Databases", dbUsed, p.acc.db, "db", "green") +
      "</div>") +
    card("Informasi Akun", "Detail teknis hosting",
      '<div class="kv"><span class="k">Domain</span><span class="v mono">' + p.acc.domain + "</span></div>" +
      '<div class="kv"><span class="k">IP Address</span><span class="v mono">103.86.96.14</span></div>' +
      '<div class="kv"><span class="k">Control Panel</span><span class="v">' + p.meta.name + "</span></div>" +
      '<div class="kv"><span class="k">PHP Version</span><span class="v">8.2</span></div>' +
      '<div class="kv"><span class="k">MySQL</span><span class="v">8.0</span></div>' +
      '<div class="kv"><span class="k">Server Region</span><span class="v">' + p.acc.region + "</span></div>" +
      '<div class="kv"><span class="k">SSL</span><span class="v">' + (p.ssl ? statusBadge("active") : statusBadge("none")) + "</span></div>") +
    "</div>";
}

/* ---------- FILE MANAGER ---------- */
function secFiles(p) {
  const rows = p.files.map((f, i) => {
    const isFolder = f.type === "folder";
    const ico = isFolder ? '<div class="file-ico" style="background:rgba(255,176,32,0.14);color:#ffb020">' + I.folder + "</div>"
      : f.type === "link" ? '<div class="file-ico" style="background:rgba(77,157,255,0.14);color:#4d9dff">' + I.external + "</div>"
      : '<div class="file-ico" style="background:rgba(124,92,255,0.14);color:#a78bff">' + I.file + "</div>";
    return '<div class="file-row">' + ico +
      '<div style="flex:1"><div class="fw7" style="font-size:13px">' + f.name + '</div><div class="cell-sub mono">' + f.perm + "</div></div>" +
      '<span class="mono" style="font-size:12px;width:80px;text-align:right">' + f.size + "</span>" +
      '<span class="cell-sub" style="width:90px;text-align:right">' + f.date + "</span>" +
      '<div class="row-actions"><button class="act" title="Unduh" onclick="toast(\'Unduh\',\'' + f.name + "','info')\">" + I.download + '</button><button class="act" title="Hapus" onclick="delFile(' + i + ')">' + I.trash + "</button></div></div>";
  }).join("");
  return card("File Manager", "Kelola file di direktori utama akun",
    '<div class="flex gap8 mb16" style="flex-wrap:wrap">' +
    '<button class="btn btn-primary btn-sm" onclick="createFolder()">' + I.plus + " Folder Baru</button>" +
    '<button class="btn btn-ghost btn-sm" onclick="createFile()">' + I.file + " File Baru</button>" +
    '<button class="btn btn-ghost btn-sm" onclick="toast(\'Upload\',\'Pilih file untuk diunggah\',\'info\')">' + I.download + " Upload</button>" +
    "</div>" +
    '<div style="border:1px solid var(--border);border-radius:var(--radius);overflow:hidden">' +
    '<div class="file-row" style="background:rgba(255,255,255,0.02);font-size:11px;text-transform:uppercase;letter-spacing:0.5px;color:var(--text-3);font-weight:700"><div style="flex:1">Nama</div><span style="width:80px;text-align:right">Ukuran</span><span style="width:90px;text-align:right">Tanggal</span><span style="width:70px"></span></div>' +
    rows + "</div>");
}
/* ---------- EMAIL ACCOUNTS ---------- */
function secEmail(p) {
  const rows = p.emails.map((e, i) => {
    const pct = Math.round(e.used / e.quota * 100);
    return "<tr>" +
      '<td><div class="cell-main"><div class="cell-ico" style="color:#00e5a0">' + I.mail + '</div><div><div class="cell-title">' + e.addr + "@" + p.acc.domain + '</div><div class="cell-sub">Mailbox</div></div></div></td>' +
      '<td><div style="min-width:120px"><div class="pg-label"><span>' + e.used + "/" + e.quota + ' GB</span><span>' + pct + "%</span></div>" + '<div class="progress green"><div style="width:' + pct + '%"></div></div></div></td>' +
      '<td class="row-actions"><button class="act" title="Webmail" onclick="toast(\'Webmail\',\'Buka ' + e.addr + "','info')\">" + I.external + '</button><button class="act" title="Hapus" onclick="delEmail(' + i + ')">' + I.trash + "</button></td></tr>";
  }).join("");
  return card("Email Accounts", p.emails.length + " dari " + p.acc.email + " kuota digunakan",
    '<div class="flex gap8 mb16"><button class="btn btn-primary btn-sm" onclick="createEmail()">' + I.plus + " Buat Email</button>" +
    '<button class="btn btn-ghost btn-sm" onclick="toast(\'Email terkirim\',\'Konfigurasi client email\',\'info\')">' + I.settings + " Konfigurasi Client</button></div>" +
    '<div class="table-wrap"><table><thead><tr><th>Alamat Email</th><th>Kuota</th><th style="text-align:right">Aksi</th></tr></thead><tbody>' + rows + "</tbody></table></div>");
}

/* ---------- DATABASES ---------- */
function secDatabase(p) {
  const rows = p.dbs.map((d, i) =>
    "<tr>" +
    '<td><div class="cell-main"><div class="cell-ico" style="color:#4d9dff">' + I.db + '</div><div><div class="cell-title">' + d.name + '</div><div class="cell-sub">' + p.acc.domain + "</div></div></div></td>" +
    '<td><span class="mono">' + d.user + "</span></td>" +
    '<td><span class="mono">' + d.size + " MB</span></td>" +
    '<td class="row-actions"><button class="act" title="phpMyAdmin" onclick="toast(\'phpMyAdmin\',\'Membuka ' + d.name + "','info')\">" + I.external + '</button><button class="act" title="Hapus" onclick="delDb(' + i + ')">' + I.trash + "</button></td></tr>"
  ).join("");
  return card("MySQL Databases", p.dbs.length + " dari " + p.acc.db + " kuota digunakan",
    '<div class="flex gap8 mb16"><button class="btn btn-primary btn-sm" onclick="createDb()">' + I.plus + " Buat Database</button>" +
    '<button class="btn btn-ghost btn-sm" onclick="toast(\'Remote MySQL\',\'Kelola IP akses\',\'info\')">' + I.globe + " Remote MySQL</button></div>" +
    '<div class="table-wrap"><table><thead><tr><th>Database</th><th>User</th><th>Ukuran</th><th style="text-align:right">Aksi</th></tr></thead><tbody>' + rows + "</tbody></table></div>");
}

/* ---------- DOMAINS & DNS ---------- */
function secDomains(p) {
  const subs = p.subdomains.map((s, i) =>
    "<tr>" +
    '<td><div class="cell-main"><div class="cell-ico" style="color:#4dd4ff">' + I.globe + '</div><div><div class="cell-title">' + s.name + "." + p.acc.domain + '</div><div class="cell-sub mono">' + s.root + "</div></div></div></td>" +
    "<td>" + (s.ssl ? '<span class="badge green"><span class="dot"></span>SSL</span>' : '<span class="badge gray"><span class="dot"></span>No SSL</span>') + "</td>" +
    '<td class="row-actions"><button class="act" title="Hapus" onclick="delSubdomain(' + i + ')">' + I.trash + "</button></td></tr>"
  ).join("");
  const dns = p.dns.map(r =>
    "<tr>" +
    '<td><span class="badge purple">' + r.type + "</span></td>" +
    '<td><span class="mono">' + r.name + "</span></td>" +
    '<td><span class="mono" style="max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block">' + r.value + "</span></td>" +
    '<td><span class="mono">' + r.ttl + "</span></td></tr>"
  ).join("");
  return '<div class="grid g-2 mb16">' +
    card("Subdomain", "Subdomain aktif akun",
      '<div class="flex gap8 mb16"><button class="btn btn-primary btn-sm" onclick="createSubdomain()">' + I.plus + " Buat Subdomain</button></div>" +
      '<div class="table-wrap"><table><thead><tr><th>Subdomain</th><th>SSL</th><th style="text-align:right">Aksi</th></tr></thead><tbody>' + subs + "</tbody></table></div>") +
    card("Zone DNS", "Record DNS domain utama",
      '<div class="flex gap8 mb16"><button class="btn btn-ghost btn-sm" onclick="toast(\'Tambah record\',\'Editor DNS\',\'info\')">' + I.plus + " Tambah Record</button></div>" +
      '<div class="table-wrap"><table><thead><tr><th>Type</th><th>Name</th><th>Value</th><th>TTL</th></tr></thead><tbody>' + dns + "</tbody></table></div>") +
    "</div>";
}
/* ---------- SSL / TLS ---------- */
function secSSL(p) {
  return '<div class="grid g-2">' +
    card("Status Sertifikat SSL", p.acc.domain,
      '<div class="flex aic gap16 mb16">' +
      '<div class="s-icon ' + (p.ssl ? "i-accent" : "i-danger") + '" style="width:56px;height:56px">' + I.shield + "</div>" +
      '<div><div style="font-size:18px;font-weight:800">' + (p.ssl ? "Terlindungi" : "Belum Terpasang") + "</div>" +
      '<div class="text-2" style="font-size:13px">' + (p.ssl ? "Koneksi HTTPS aktif & aman" : "Pasang SSL untuk keamanan") + "</div></div></div>" +
      '<div class="kv"><span class="k">Penerbit</span><span class="v">' + (p.ssl ? "Let's Encrypt (AutoSSL)" : "—") + "</span></div>" +
      '<div class="kv"><span class="k">Berlaku s/d</span><span class="v">' + (p.ssl ? "2025-12-14" : "—") + "</span></div>" +
      '<div class="kv"><span class="k">Auto-Renew</span><span class="v">' + (p.autoSSL ? statusBadge("active") : statusBadge("inactive")) + "</span></div>" +
      '<div class="flex gap8 mt16">' +
      (p.ssl ? '<button class="btn btn-ghost" onclick="toast(\'Reissue\',\'Sertifikat diperbarui\',\'info\')">' + I.reload + " Reissue</button>"
        : '<button class="btn btn-accent" onclick="installSSL()">' + I.shield + " Pasang SSL Gratis</button>") +
      '<button class="btn btn-ghost" onclick="toggleAutoSSL()">' + (p.autoSSL ? "Matikan" : "Aktifkan") + " AutoSSL</button></div>") +
    card("Peningkatan Keamanan", "Perlindungan tambahan",
      '<div class="toggle-row"><div><div class="fw7">Force HTTPS</div><div class="cell-sub">Redirect semua ke HTTPS</div></div><div class="toggle on" onclick="this.classList.toggle(\'on\');toast(\'Force HTTPS\',\'Pengaturan disimpan\',\'info\')"></div></div>' +
      '<div class="toggle-row"><div><div class="fw7">HSTS</div><div class="cell-sub">Strict Transport Security</div></div><div class="toggle on" onclick="this.classList.toggle(\'on\')"></div></div>' +
      '<div class="toggle-row"><div><div class="fw7">ModSecurity</div><div class="cell-sub">Web application firewall</div></div><div class="toggle on" onclick="this.classList.toggle(\'on\')"></div></div>' +
      '<div class="toggle-row"><div><div class="fw7">Hotlink Protection</div><div class="cell-sub">Cegah pencurian bandwidth</div></div><div class="toggle" onclick="this.classList.toggle(\'on\')"></div></div>') +
    "</div>";
}

/* ---------- BACKUP ---------- */
function secBackup(p) {
  const rows = p.backups.map((b, i) =>
    "<tr>" +
    '<td><div class="cell-main"><div class="cell-ico" style="color:#4d9dff">' + I.archive + '</div><div><div class="cell-title">' + b.name + '</div><div class="cell-sub">' + b.type + " · " + b.date + "</div></div></div></td>" +
    '<td><span class="mono">' + b.size + "</span></td>" +
    "<td>" + statusBadge(b.status) + "</td>" +
    '<td class="row-actions"><button class="act" title="Restore" onclick="toast(\'Restore\',\'Memulihkan ' + b.name + "','warn')\">" + I.reload + '</button><button class="act" title="Unduh" onclick="toast(\'Unduh\',\'Backup diunduh\',\'info\')">' + I.download + '</button><button class="act" title="Hapus" onclick="delBackup(' + i + ')">' + I.trash + "</button></td></tr>"
  ).join("");
  return card("Backup", "Snapshot & restore point akun",
    '<div class="flex gap8 mb16" style="flex-wrap:wrap"><button class="btn btn-primary btn-sm" onclick="createBackup()">' + I.plus + " Backup Sekarang</button>" +
    '<button class="btn btn-ghost btn-sm" onclick="toast(\'Jadwal\',\'Backup harian 02:00 aktif\',\'info\')">' + I.clock + " Jadwal Otomatis</button></div>" +
    '<div class="table-wrap"><table><thead><tr><th>Backup</th><th>Ukuran</th><th>Status</th><th style="text-align:right">Aksi</th></tr></thead><tbody>' + rows + "</tbody></table></div>");
}
/* ---------- SOFTWARE (1-CLICK APPS) ---------- */
function secApps(p) {
  const colors = { "WordPress": "#21759b", "Joomla": "#f44321", "Laravel": "#ff2d20", "Node.js App": "#68a063", "phpMyAdmin": "#6c78af", "Ghost CMS": "#3eb0ef" };
  const tiles = p.apps.map((a, i) => {
    const letter = a.name[0];
    return '<div class="app-tile"><div class="a-ico" style="background:' + (colors[a.name] || "#7c5cff") + '">' + letter + "</div>" +
      '<div style="flex:1"><div class="a-name">' + a.name + '</div><div class="a-desc">' + (a.installed ? "Terinstall · v" + a.ver : "Belum terinstall") + "</div></div>" +
      (a.installed ? '<button class="btn btn-danger btn-sm" onclick="uninstallApp(' + i + ')">Uninstall</button>'
        : '<button class="btn btn-accent btn-sm" onclick="installApp(' + i + ')">Install</button>') + "</div>";
  }).join("");
  return card("Software / 1-Klik Install", "Pasang aplikasi populer dalam satu klik",
    '<div class="grid g-3" style="gap:12px">' + tiles + "</div>");
}

/* ---------- METRICS ---------- */
function secMetrics(p) {
  const cpu = [38, 44, 41, 52, 48, 61, 58, 66, 55, 49, 53, 60, 57, 62];
  const ram = [52, 55, 51, 58, 60, 64, 62, 70, 66, 61, 63, 68, 65, 71];
  const bw = [20, 26, 22, 30, 28, 35, 31, 40, 36, 33, 38, 42, 39, 45];
  return '<div class="grid g-3 mb16">' +
    '<div class="mini-stat"><div class="ms-lbl">CPU Usage</div><div class="ms-val" style="color:#a78bff">' + cpu[cpu.length - 1] + '%</div>' + sparkline(cpu, "#7c5cff") + "</div>" +
    '<div class="mini-stat"><div class="ms-lbl">Memory</div><div class="ms-val" style="color:#00e5a0">' + ram[ram.length - 1] + '%</div>' + sparkline(ram, "#00e5a0") + "</div>" +
    '<div class="mini-stat"><div class="ms-lbl">Bandwidth</div><div class="ms-val" style="color:#4dd4ff">' + bw[bw.length - 1] + '%</div>' + sparkline(bw, "#4dd4ff") + "</div>" +
    "</div>" +
    card("Resource 14 Hari", "CPU & Memory utilization",
      '<div class="chart-legend mb16"><div class="legend-item"><span class="sw" style="background:#7c5cff"></span>CPU</div><div class="legend-item"><span class="sw" style="background:#00e5a0"></span>RAM</div></div>' +
      dualLine([{ values: cpu }, { values: ram }], DB.resourceDays));
}
/* ============================================================
   PANEL ACTIONS (functional)
   ============================================================ */
function createFolder() {
  const n = prompt("Nama folder baru:"); if (!n) return;
  PANEL.files.unshift({ name: n, type: "folder", size: "—", perm: "drwxr-xr-x", date: "2025-10-14" });
  renderPanel(); toast("Folder dibuat", n, "ok");
}
function createFile() {
  const n = prompt("Nama file baru (contoh: about.html):"); if (!n) return;
  PANEL.files.unshift({ name: n, type: "file", size: "0 KB", perm: "-rw-r--r--", date: "2025-10-14" });
  renderPanel(); toast("File dibuat", n, "ok");
}
function delFile(i) { const n = PANEL.files[i].name; PANEL.files.splice(i, 1); renderPanel(); toast("Dihapus", n, "warn"); }

function createEmail() {
  if (PANEL.emails.length >= PANEL.acc.email) { toast("Kuota penuh", "Tidak bisa tambah email lagi", "warn"); return; }
  const n = prompt("Nama email (tanpa @domain):"); if (!n) return;
  PANEL.emails.push({ addr: n, quota: 5, used: 0 });
  renderPanel(); toast("Email dibuat", n + "@" + PANEL.acc.domain, "ok");
}
function delEmail(i) { const n = PANEL.emails[i].addr; PANEL.emails.splice(i, 1); renderPanel(); toast("Email dihapus", n, "warn"); }

function createDb() {
  if (PANEL.dbs.length >= PANEL.acc.db) { toast("Kuota penuh", "Tidak bisa tambah database", "warn"); return; }
  const n = prompt("Nama database:"); if (!n) return;
  const user = "u_" + Math.random().toString(36).slice(2, 6);
  PANEL.dbs.push({ name: n, user, size: 0 });
  renderPanel(); toast("Database dibuat", n + " (user: " + user + ")", "ok");
}
function delDb(i) { const n = PANEL.dbs[i].name; PANEL.dbs.splice(i, 1); renderPanel(); toast("Database dihapus", n, "warn"); }

function createSubdomain() {
  const n = prompt("Nama subdomain:"); if (!n) return;
  PANEL.subdomains.push({ name: n, root: "public_html/" + n, ssl: false });
  renderPanel(); toast("Subdomain dibuat", n + "." + PANEL.acc.domain, "ok");
}
function delSubdomain(i) { const n = PANEL.subdomains[i].name; PANEL.subdomains.splice(i, 1); renderPanel(); toast("Subdomain dihapus", n, "warn"); }

function installSSL() { PANEL.ssl = true; PANEL.autoSSL = true; PANEL.acc.ssl = true; renderPanel(); toast("SSL terpasang", "Let's Encrypt aktif untuk " + PANEL.acc.domain, "ok"); }
function toggleAutoSSL() { PANEL.autoSSL = !PANEL.autoSSL; renderPanel(); toast("AutoSSL " + (PANEL.autoSSL ? "diaktifkan" : "dimatikan"), "", "info"); }

function createBackup() {
  const d = new Date();
  const stamp = d.toISOString().slice(0, 10) + " " + d.toTimeString().slice(0, 5);
  const size = (Math.random() * 10 + 2).toFixed(1) + " GB";
  PANEL.backups.unshift({ name: "Backup Manual", type: "Full", size, date: stamp, status: "success" });
  renderPanel(); toast("Backup dibuat", size + " · " + stamp, "ok");
}
function delBackup(i) { PANEL.backups.splice(i, 1); renderPanel(); toast("Backup dihapus", "", "warn"); }

function installApp(i) {
  PANEL.apps[i].installed = true; PANEL.apps[i].ver = "1.0";
  renderPanel(); toast("Terinstall", PANEL.apps[i].name + " siap digunakan", "ok");
}
function uninstallApp(i) { PANEL.apps[i].installed = false; PANEL.apps[i].ver = "—"; renderPanel(); toast("Dihapus", PANEL.apps[i].name + " di-uninstall", "warn"); }
/* __ROUTER__ */






/* ============================================================
   LANDING PAGE
   ============================================================ */
function viewLanding() {
  const nav = '<nav class="lp-nav">' +
    '<div class="brand"><div class="brand-logo"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19a4.5 4.5 0 0 0 .5-8.98A6 6 0 0 0 6.2 9.2A4 4 0 0 0 7 19z"/></svg></div>' +
    '<div class="brand-text"><h1>CLOUDO <span>PRO</span></h1><p>Control Master</p></div></div>' +
    '<div class="flex aic gap16" style="gap:26px">' +
    '<a href="#fitur" style="font-size:14px;color:var(--text-2);font-weight:600">Fitur</a>' +
    '<a href="#harga" style="font-size:14px;color:var(--text-2);font-weight:600">Harga</a>' +
    "</div>" +
    '<div class="flex gap8"><button class="btn btn-ghost btn-sm" onclick="go(\'login\')">Masuk</button>' +
    '<button class="btn btn-primary btn-sm" onclick="go(\'login\')">Coba Gratis</button></div></nav>';

  const hero = '<section class="lp-hero">' +
    '<span class="badge-pill">' + I.zap + " Platform Hosting & VPS All-in-One</span>" +
    "<h1>Kelola <span class=\"grad\">Hosting, VPS & Reseller</span> dalam Satu Dashboard</h1>" +
    "<p>CLOUDO PRO menghadirkan panel kontrol lengkap dengan dukungan cPanel, Plesk, DirectAdmin & CyberPanel. Deploy server dalam hitungan detik, kelola klien, dan kembangkan bisnis hosting Anda.</p>" +
    '<div class="lp-cta"><button class="btn btn-primary" onclick="go(\'login\')" style="padding:13px 26px;font-size:15px">' + I.zap + " Mulai Sekarang</button>" +
    '<button class="btn btn-ghost" onclick="go(\'login\')" style="padding:13px 26px;font-size:15px">' + I.play + " Lihat Demo</button></div>" +
    '<div class="lp-stats">' +
    '<div class="ls"><b>99.98%</b><span>Uptime terjamin</span></div>' +
    '<div class="ls"><b>5</b><span>Data Center global</span></div>' +
    '<div class="ls"><b>4</b><span>Control Panel</span></div>' +
    '<div class="ls"><b>24/7</b><span>Support ahli</span></div>' +
    "</div></section>";

  const feats = [
    { icon: "server", color: "#a78bff", bg: "rgba(124,92,255,0.16)", t: "VPS & Cloud Server", d: "Deploy VPS dengan SSD NVMe, pilih 8+ OS, kelola via console & monitoring real-time." },
    { icon: "grid", color: "#4dd4ff", bg: "rgba(77,212,255,0.14)", t: "Multi Control Panel", d: "cPanel, Plesk, DirectAdmin, dan CyberPanel — semuanya dalam satu tempat terintegrasi." },
    { icon: "users", color: "#00e5a0", bg: "rgba(0,229,160,0.14)", t: "Program Reseller", d: "White-label penuh, komisi otomatis hingga 22%, dan panel mandiri untuk mitra Anda." },
    { icon: "shield", color: "#ffb020", bg: "rgba(255,176,32,0.14)", t: "Keamanan Enterprise", d: "SSL gratis, firewall, DDoS protection, backup otomatis & malware scanning." },
    { icon: "zap", color: "#4d9dff", bg: "rgba(77,157,255,0.14)", t: "1-Klik Aplikasi", d: "Install WordPress, Joomla, Laravel & 400+ aplikasi hanya dengan satu klik." },
    { icon: "activity", color: "#ff5c72", bg: "rgba(255,92,114,0.14)", t: "Monitoring 24/7", d: "Pantau CPU, RAM, bandwidth & uptime semua server dari dashboard terpusat." }
  ];
  const featSection = '<section class="lp-section" id="fitur"><div class="sec-head"><h2>Semua yang Anda Butuhkan</h2>' +
    "<p>Dari shared hosting hingga cloud server, satu platform untuk mengelola seluruh infrastruktur Anda.</p></div>" +
    '<div class="grid g-3">' +
    feats.map(f => '<div class="lp-feat"><div class="lf-ico" style="background:' + f.bg + ";color:" + f.color + '">' + I[f.icon] + "</div><h3>" + f.t + "</h3><p>" + f.d + "</p></div>").join("") +
    "</div></section>";
  const panelSection = '<section class="lp-section"><div class="sec-head"><h2>Pilih Control Panel Favorit Anda</h2>' +
    "<p>Didukung penuh oleh 4 panel kontrol terpopuler di industri. Ganti kapan saja sesuai kebutuhan.</p></div>" +
    '<div class="grid g-4">' +
    DB.panels.map(p => '<div class="lp-panel-mini"><div class="lpm-logo" style="background:' + p.color + '">' + p.logo + "</div>" +
      '<div><div class="fw7" style="font-size:14px">' + p.name + '</div><div class="cell-sub" style="font-size:12px">' + p.price + "</div></div></div>").join("") +
    "</div></section>";

  const plans = [
    { name: "Starter", price: "25rb", per: "/bln", popular: false, feats: ["1 Website", "10 GB SSD Storage", "500 GB Bandwidth", "5 Email Akun", "SSL Gratis", "cPanel / DirectAdmin"] },
    { name: "Business", price: "89rb", per: "/bln", popular: true, feats: ["Unlimited Website", "40 GB SSD Storage", "2 TB Bandwidth", "Unlimited Email", "SSL + Backup Harian", "Semua Control Panel", "1-Klik Install Apps"] },
    { name: "Enterprise", price: "299rb", per: "/bln", popular: false, feats: ["Semua fitur Business", "100 GB NVMe Storage", "5 TB Bandwidth", "Priority Support 24/7", "Dedicated IP", "Free Migration"] }
  ];
  const priceSection = '<section class="lp-section" id="harga"><div class="sec-head"><h2>Harga Transparan, Tanpa Biaya Tersembunyi</h2>' +
    "<p>Pilih paket yang sesuai. Upgrade atau downgrade kapan saja.</p></div>" +
    '<div class="grid g-3">' +
    plans.map(pl => '<div class="lp-price' + (pl.popular ? " popular" : "") + '">' +
      (pl.popular ? '<span class="pop-tag">POPULER</span>' : "") +
      '<div class="pp-name">' + pl.name + '</div><div class="pp-price">Rp ' + pl.price + "<small>" + pl.per + "</small></div>" +
      "<ul>" + pl.feats.map(f => "<li>" + I.check + "<span>" + f + "</span></li>").join("") + "</ul>" +
      '<button class="btn ' + (pl.popular ? "btn-primary" : "btn-ghost") + '" style="width:100%" onclick="go(\'login\')">Pilih Paket</button></div>').join("") +
    "</div></section>";

  const ctaBand = '<section class="lp-cta-band"><h2 style="font-size:clamp(24px,3vw,34px);font-weight:900;letter-spacing:-0.6px;position:relative;z-index:1">Siap Membangun Bisnis Hosting Anda?</h2>' +
    '<p style="color:var(--text-2);margin:12px auto 24px;max-width:520px;position:relative;z-index:1">Bergabung dengan ribuan penyedia hosting yang mempercayakan infrastruktur mereka kepada CLOUDO PRO.</p>' +
    '<button class="btn btn-primary" style="padding:13px 30px;font-size:15px;position:relative;z-index:1" onclick="go(\'login\')">' + I.zap + " Mulai Gratis Sekarang</button></section>";

  const footer = '<footer class="lp-footer"><div class="flex aic gap12"><div class="brand-logo" style="width:32px;height:32px"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px"><path d="M17.5 19a4.5 4.5 0 0 0 .5-8.98A6 6 0 0 0 6.2 9.2A4 4 0 0 0 7 19z"/></svg></div><span>© 2025 CLOUDO PRO. Semua hak dilindungi.</span></div>' +
    '<div class="foot-links"><a>Produk</a><a>Harga</a><a>Dokumentasi</a><a>Status</a><a>Kontak</a></div></footer>';

  return '<div class="lp">' + nav + hero + featSection + panelSection + priceSection + ctaBand + footer + "</div>";
}
/* ============================================================
   LOGIN PAGE (Admin & Client)
   ============================================================ */
let LOGIN_ROLE = "admin";
function setLoginRole(role) {
  LOGIN_ROLE = role;
  $("#roleAdmin").classList.toggle("active", role === "admin");
  $("#roleClient").classList.toggle("active", role === "client");
  const btn = $("#loginBtn");
  btn.textContent = "Masuk sebagai " + (role === "admin" ? "Administrator" : "Klien");
  $("#loginUser").value = role === "admin" ? "admin@cloudo.pro" : "budi@tokoberkah.com";
}
function viewLogin() {
  const left = '<div class="auth-left"><div class="al-inner">' +
    '<div class="brand"><div class="brand-logo"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19a4.5 4.5 0 0 0 .5-8.98A6 6 0 0 0 6.2 9.2A4 4 0 0 0 7 19z"/></svg></div>' +
    '<div class="brand-text"><h1>CLOUDO <span>PRO</span></h1><p>Control Master</p></div></div>' +
    "<h2>Selamat datang kembali di panel kendali Anda.</h2>" +
    "<p>Masuk untuk mengelola hosting, VPS, klien, dan seluruh infrastruktur cloud Anda dari satu tempat.</p></div>" +
    '<div class="auth-perks">' +
    '<div class="ap"><div class="ap-ico">' + I.shield + "</div><div>Keamanan tingkat enterprise dengan 2FA</div></div>" +
    '<div class="ap"><div class="ap-ico">' + I.activity + "</div><div>Monitoring real-time 24/7</div></div>" +
    '<div class="ap"><div class="ap-ico">' + I.grid + "</div><div>4 control panel terintegrasi</div></div>" +
    '<div class="ap"><div class="ap-ico">' + I.zap + "</div><div>Deploy server dalam hitungan detik</div></div>" +
    "</div></div>";

  const right = '<div class="auth-right"><div class="auth-box">' +
    '<div class="ab-head"><h3>Masuk ke Akun</h3><p>Pilih jenis akun dan masukkan kredensial Anda.</p></div>' +
    '<div class="role-switch"><button id="roleAdmin" class="active" onclick="setLoginRole(\'admin\')">Administrator</button>' +
    '<button id="roleClient" onclick="setLoginRole(\'client\')">Klien</button></div>' +
    '<div class="field"><label>Email atau Username</label><input id="loginUser" placeholder="admin@cloudo.pro" value="admin@cloudo.pro"/></div>' +
    '<div class="field"><label>Password</label><input id="loginPass" type="password" placeholder="••••••••" value="demo1234"/></div>' +
    '<div class="flex jcb aic mb16"><label class="flex aic gap8" style="font-size:13px;color:var(--text-2);cursor:pointer"><input type="checkbox" checked style="width:auto"/> Ingat saya</label>' +
    '<a style="font-size:13px;color:var(--brand-2);font-weight:600;cursor:pointer" onclick="toast(\'Lupa password\',\'Link reset dikirim ke email\',\'info\')">Lupa password?</a></div>' +
    '<button class="btn btn-primary" style="width:100%;padding:12px" id="loginBtn" onclick="doLogin()">Masuk sebagai Administrator</button>' +
    '<div class="demo-hint">' + I.key + " <b>Mode Demo:</b> kredensial sudah terisi. Klik <b>Masuk</b> untuk explorasi. Admin → dashboard penuh, Klien → portal klien.</div>" +
    '<div class="auth-alt">Belum punya akun? <a onclick="go(\'landing\')">Kembali ke beranda</a></div>' +
    "</div></div>";

  return '<div class="auth">' + left + right + "</div>";
}
let AUTH = { role: null, name: "" };
async function doLogin() {
  const role = LOGIN_ROLE;
  const email = (($("#loginUser") || {}).value || "").trim() || (role === "admin" ? "admin@cloudo.pro" : "budi@tokoberkah.com");
  const pass = (($("#loginPass") || {}).value || "") || "demo1234";
  try {
    const j = await API.login(email, pass);
    AUTH.role = j.role; AUTH.name = j.name;
    closeModal();
    toast("Login berhasil", "Selamat datang, " + j.name + " (via API)", "ok");
    go(j.role === "admin" ? "dashboard" : "portal");
    try { await refreshPHP(); } catch (e) {}
    return;
  } catch (e) {
    AUTH.role = role;
    AUTH.name = role === "admin" ? DB.user.name : "Budi Santoso";
    closeModal();
    if (role === "admin") {
      toast("Login berhasil (mode demo)", "Backend: " + e.message, "info");
      go("dashboard");
    } else {
      toast("Login berhasil (mode demo)", "Backend: " + e.message, "info");
      go("portal");
    }
  }
}
async function logout() {
  try { await API.logout(); } catch (e) {}
  AUTH = { role: null, name: "" };
  toast("Anda telah keluar", "Sampai jumpa lagi!", "info");
  go("landing");
}
/* ============================================================
   CLIENT PORTAL
   ============================================================ */
const CLIENT_NAV = [
  { section: "Akun Saya" },
  { id: "portal", label: "Ringkasan", icon: "dashboard" },
  { id: "portal", label: "Layanan Saya", icon: "cloud" },
  { id: "portal", label: "Invoice & Bayar", icon: "card" },
  { id: "portal", label: "Support", icon: "ticket" },
  { section: "Hosting" },
  { panel: true, label: "Buka cPanel", icon: "grid" },
  { section: "Sesi" },
  { action: "logout", label: "Keluar", icon: "external" }
];

function viewPortal() {
  const myHosting = DB.hosting.filter(h => h.status === "active").slice(0, 3);
  const myInvoices = DB.invoices.slice(0, 4);
  const myTickets = DB.tickets.filter(t => t.client === "Budi Santoso" || t.client === "PT Toko Berkah").slice(0, 3);

  const services = myHosting.map(h =>
    '<div class="panel-tile" onclick="openPanel(\'' + h.id + "')\">" +
    '<div class="flex aic jcb mb16"><div class="cell-ico" style="color:#00e5a0;width:42px;height:42px">' + I.cloud + "</div>" + statusBadge(h.status) + "</div>" +
    "<h4>" + h.domain + "</h4>" +
    '<div class="pt-desc">' + h.plan + " · " + h.panel + " · " + h.region + "</div>" +
    '<div class="mb16">' + meter("Disk", h.diskUsed, h.disk, "GB") + "</div>" +
    '<div class="pt-foot"><span class="cell-sub">Klik untuk kelola</span>' +
    '<button class="btn btn-ghost btn-sm">' + I.grid + " Buka Panel</button></div></div>"
  ).join("");

  const invoices = myInvoices.map(inv =>
    '<tr><td><div class="cell-title">' + inv.id + '</div><div class="cell-sub">' + inv.client + "</div></td>" +
    '<td><span class="mono">' + inv.due + "</span></td>" +
    '<td><span class="fw7">' + fmtRp(inv.amount) + "</span></td>" +
    "<td>" + statusBadge(inv.status) + "</td>" +
    '<td class="row-actions">' + (inv.status === "paid" ? '<span class="cell-sub">—</span>' : '<button class="btn btn-accent btn-sm" onclick="toast(\'Pembayaran\',\'Mengarahkan ke gateway\',\'info\')">Bayar</button>') + "</td></tr>"
  ).join("");

  const tickets = myTickets.length ? myTickets.map(t =>
    '<div class="flex aic jcb" style="padding:11px 0;border-bottom:1px solid var(--border)"><div class="flex aic gap12"><div class="cell-ico" style="color:#ffb020">' + I.ticket + '</div><div><div class="fw7" style="font-size:13px">' + t.subject + '</div><div class="cell-sub">' + t.id + " · " + t.time + "</div></div></div>" + statusBadge(t.status) + "</div>"
  ).join("") : '<div class="empty">' + I.check + "<div>Tidak ada tiket aktif</div></div>";

  return pageHead("Halo, Budi 👋", "Kelola layanan hosting & VPS Anda dari sini.", "Portal Klien",
    '<button class="btn btn-ghost" onclick="openPanel(\'HST-2041\')">' + I.grid + " Buka cPanel</button>") +
    '<div class="grid g-4 mb24">' +
    statCard("cloud", "i-accent", "#00e5a0", "Layanan Aktif", myHosting.length, null, "Hosting & VPS Anda") +
    statCard("card", "i-danger", "#ff5c72", "Tagihan", "1", null, "Menunggu pembayaran") +
    statCard("ticket", "i-warn", "#ffb020", "Tiket Support", myTickets.length, null, "Butuh perhatian") +
    statCard("shield", "i-brand", "#7c5cff", "Total Belanja", fmtRp(8900000), null, "Sejak 2024") +
    "</div>" +
    '<div class="section-title">Layanan Saya</div><div class="section-sub">Klik kartu untuk membuka control panel</div>' +
    '<div class="grid g-3 mb24">' + services + "</div>" +
    '<div class="grid g-23">' +
    card("Invoice Terbaru", "Tagihan & status pembayaran",
      '<div class="table-wrap"><table><thead><tr><th>Invoice</th><th>Jatuh Tempo</th><th>Jumlah</th><th>Status</th><th style="text-align:right">Aksi</th></tr></thead><tbody>' + invoices + "</tbody></table></div>") +
    card("Tiket Support", "Bantuan terbaru", '<div class="timeline">' + tickets + "</div>") +
    "</div>";
}
/* __ROUTER2__ */




/* ============================================================
   VIEW: WEBSITE CLONER
   ============================================================ */
let CLONE_METHOD = "url";
function setCloneMethod(m) { CLONE_METHOD = m; $("#content").innerHTML = viewCloner(); }
function viewCloner() {
  const tabs = [
    { id: "url", label: "Clone via URL", icon: "globe" },
    { id: "ftp", label: "Sync via FTP", icon: "server" },
    { id: "zip", label: "Upload ZIP", icon: "archive" }
  ].map(t => '<button class="' + (CLONE_METHOD === t.id ? "active" : "") + '" onclick="setCloneMethod(\'' + t.id + "')\">" + I[t.icon] + "<span>" + t.label + "</span></button>").join("");

  let form = "";
  if (CLONE_METHOD === "url") {
    form = '<div class="field"><label>URL Website Lama</label><input id="cloneUrl" placeholder="https://situlama.com" value="https://situlama.com"/></div>' +
      '<div class="grid g-2"><div class="field"><label>Domain Tujuan</label><select id="cloneTarget">' + DB.hosting.map(h => "<option>" + h.domain + "</option>").join("") + "</select></div>" +
      '<div class="field"><label>Cakupan</label><select><option>Seluruh website + database</option><option>Hanya file</option><option>Hanya database</option></select></div></div>' +
      '<button class="btn btn-primary" onclick="startClone()">' + I.copy + " Mulai Cloning</button>";
  } else if (CLONE_METHOD === "ftp") {
    form = '<div class="grid g-2"><div class="field"><label>FTP Host</label><input id="ftpHost" placeholder="ftp.oldhost.net" value="ftp.oldhost.net"/></div>' +
      '<div class="field"><label>Port</label><input value="21"/></div></div>' +
      '<div class="grid g-2"><div class="field"><label>Username</label><input id="ftpUser" placeholder="user@oldhost.net"/></div>' +
      '<div class="field"><label>Password</label><input id="ftpPass" type="password" placeholder="••••••••"/></div></div>' +
      '<div class="field"><label>Direktori Tujuan</label><select id="cloneTarget">' + DB.hosting.map(h => "<option>" + h.domain + "</option>").join("") + "</select></div>" +
      '<button class="btn btn-primary" onclick="startClone()">' + I.server + " Hubungkan & Sync</button>";
  } else {
    form = '<div class="dropzone" onclick="toast(\'Pilih file\',\'Pilih arsip .zip website\',\'info\')">' +
      '<div class="dz-ico">' + I.archive + "</div>" +
      '<div class="fw7" style="font-size:15px">Tarik & lepas file ZIP di sini</div>' +
      '<div class="text-2" style="font-size:13px;margin-top:6px">atau klik untuk memilih. Maks 2 GB (.zip, .tar.gz)</div></div>' +
      '<div class="field mt16"><label>Domain Tujuan</label><select id="cloneTarget">' + DB.hosting.map(h => "<option>" + h.domain + "</option>").join("") + "</select></div>" +
      '<button class="btn btn-primary" onclick="startClone()">' + I.archive + " Ekstrak & Pasang</button>";
  }
  const rows = DB.clonedSites.map(c =>
    "<tr>" +
    '<td><div class="cell-main"><div class="cell-ico" style="color:#4dd4ff">' + I.copy + '</div><div><div class="cell-title">' + c.source + '</div><div class="cell-sub">' + c.id + " · " + c.method + "</div></div></div></td>" +
    '<td><span class="fw7">' + c.target + "</span></td>" +
    '<td><span class="mono">' + (c.files || "—") + " file</span></td>" +
    '<td><span class="mono">' + c.size + "</span></td>" +
    '<td><span class="cell-sub">' + c.date + "</span></td>" +
    "<td>" + statusBadge(c.status === "success" ? "success" : c.status === "running" ? "pending" : "failed") + "</td>" +
    '<td class="row-actions">' + (c.status === "success" ? '<button class="act" title="Kunjungi" onclick="toast(\'Buka situs\',\'' + c.target + "','info')\">" + I.external + "</button>" : "") +
    '<button class="act" title="Detail" onclick="toast(\'Detail clone\',\'' + c.id + "')\">" + I.eye + "</button></td></tr>"
  ).join("");

  return pageHead("Website Cloner", "Clone atau migrasi website lama langsung ke server CLOUDO PRO.", "Tools / Cloner",
    '<button class="btn btn-primary" onclick="setCloneMethod(\'' + CLONE_METHOD + "')\">" + I.copy + " Clone Baru</button>") +
    '<div class="grid g-4 mb24">' +
    statCard("copy", "i-brand", "#7c5cff", "Total Clone", DB.clonedSites.length, 15.2, "Sejak bulan lalu") +
    statCard("check", "i-accent", "#00e5a0", "Berhasil", DB.clonedSites.filter(c => c.status === "success").length, null, "Website termigrasi") +
    statCard("clock", "i-warn", "#ffb020", "Sedang Proses", DB.clonedSites.filter(c => c.status === "running").length, null, "Antrian cloning") +
    statCard("alert", "i-danger", "#ff5c72", "Gagal", DB.clonedSites.filter(c => c.status === "failed").length, null, "Perlu diperiksa") +
    "</div>" +
    '<div class="grid g-23">' +
    card("Buat Clone Baru", "Pilih metode migrasi",
      '<div class="clone-tabs">' + tabs + "</div>" + form +
      '<div id="cloneProgress" style="display:none" class="mt16"><div class="pg-label"><span>Proses cloning...</span><span id="clonePct">0%</span></div><div class="clone-progress"><div id="cloneBar" style="width:0%"></div></div></div>') +
    card("Riwayat Cloning", "Website yang telah dimigrasi",
      '<div class="table-wrap"><table><thead><tr><th>Sumber</th><th>Tujuan</th><th>File</th><th>Ukuran</th><th>Tanggal</th><th>Status</th><th></th></tr></thead><tbody>' + rows + "</tbody></table></div>") +
    "</div>";
}
function startClone() {
  const target = ($("#cloneTarget") || {}).value || DB.hosting[0].domain;
  const source = CLONE_METHOD === "url" ? (($("#cloneUrl") || {}).value || "https://situlama.com")
    : CLONE_METHOD === "ftp" ? (($("#ftpHost") || {}).value || "ftp://source") : "backup.zip";
  const method = CLONE_METHOD === "url" ? "URL Clone" : CLONE_METHOD === "ftp" ? "FTP Sync" : "ZIP Upload";
  const id = "CLN-" + String(DB.clonedSites.length + 1).padStart(3, "0");
  const d = new Date();
  DB.clonedSites.unshift({ id, source, target, method, status: "running", date: d.toISOString().slice(0, 10) + " " + d.toTimeString().slice(0, 5), size: "—", files: 0 });
  go("cloner");
  const prog = $("#cloneProgress"); if (prog) prog.style.display = "block";
  let pct = 0;
  const iv = setInterval(() => {
    pct += Math.random() * 18 + 6;
    if (pct >= 100) {
      pct = 100; clearInterval(iv);
      const rec = DB.clonedSites[0];
      rec.status = "success"; rec.size = (Math.random() * 200 + 50).toFixed(0) + " MB"; rec.files = Math.floor(Math.random() * 1500 + 300);
      toast("Cloning selesai!", target + " berhasil dimigrasi", "ok");
      setTimeout(() => go("cloner"), 500);
    }
    const bar = $("#cloneBar"), pctEl = $("#clonePct");
    if (bar) bar.style.width = pct + "%";
    if (pctEl) pctEl.textContent = Math.round(pct) + "%";
  }, 400);
}
/* ============================================================
   VIEW: NAMESERVER CLOUDO
   ============================================================ */
function viewNameserver() {
  const nsCopy = (ns) => '<div class="ns-copy"><span>' + ns + '</span><button onclick="copyText(\'' + ns + "')\">" + I.copy + "</button></div>";

  const defaults = DB.nameservers.defaults.map(n =>
    '<div class="ns-card"><div class="flex aic jcb mb16"><div class="ns-badge" style="background:rgba(77,212,255,0.14);color:#4dd4ff"><span class="dot" style="width:6px;height:6px;border-radius:50%;background:currentColor"></span>DEFAULT</div>' +
    '<span class="badge green"><span class="dot"></span>' + n.status + "</span></div>" +
    '<div class="ns-name">' + n.ns + '</div><div class="ns-ip">' + n.ip + " · " + n.location + "</div></div>"
  ).join("");

  const custom = DB.nameservers.custom.map((n, i) =>
    '<div class="ns-card"><div class="flex aic jcb mb16"><div class="ns-badge" style="background:rgba(124,92,255,0.14);color:#a78bff">CUSTOM</div>' +
    (n.status === "active" ? '<span class="badge green"><span class="dot"></span>Aktif</span>' : '<span class="badge orange"><span class="dot"></span>Pending</span>') + "</div>" +
    '<div class="ns-name">' + n.ns + '</div><div class="ns-ip">' + n.ip + " · " + n.domain + "</div>" +
    '<div class="mt16"><button class="btn btn-danger btn-sm" onclick="delCustomNS(' + i + ')">' + I.trash + " Hapus</button></div></div>"
  ).join("");

  return pageHead("Nameserver Cloudo", "Nameserver default & private (vanity) untuk seluruh domain Anda.", "Tools / Nameserver",
    '<button class="btn btn-primary" onclick="openNewNS()">' + I.plus + " Buat Nameserver</button>") +
    '<div class="grid g-4 mb24">' +
    statCard("globe", "i-info", "#4d9dff", "Nameserver Default", DB.nameservers.defaults.length, null, "Tersebar 4 region") +
    statCard("key", "i-brand", "#7c5cff", "Private NS", DB.nameservers.custom.length, 8.3, "Branding domain sendiri") +
    statCard("shield", "i-accent", "#00e5a0", "Uptime DNS", "100%", null, "Anycast network") +
    statCard("zap", "i-warn", "#ffb020", "Rata Respons", "8 ms", null, "Query super cepat") +
    "</div>" +
    card("Nameserver Default Cloudo", "Gunakan nameserver ini di registrar domain Anda",
      '<div class="ns-box"><div class="text-2" style="font-size:13px;margin-bottom:12px">Arahkan domain Anda ke nameserver CLOUDO PRO berikut:</div>' +
      DB.nameservers.defaults.map(n => nsCopy(n.ns)).join("") +
      '<button class="btn btn-ghost btn-sm mt8" onclick="copyText(\'' + DB.nameservers.defaults.map(n => n.ns).join(", ") + "')\">" + I.copy + " Salin Semua</button></div>") +
    '<div class="mt16"><div class="section-title">Private / Vanity Nameserver</div><div class="section-sub">Nameserver dengan branding domain Anda sendiri (ns1.domainanda.com)</div>' +
    '<div class="grid g-3">' + custom + "</div></div>";
}
function openNewNS() {
  openModal(
    '<div class="modal-head"><h3>' + I.globe + " Buat Private Nameserver</h3>" + '<button class="icon-btn" onclick="closeModal()">' + I.x + "</button></div>" +
    '<div class="modal-body">' +
    '<div class="field"><label>Domain Induk</label><select id="nsDomain">' + DB.domains.map(d => "<option>" + d.domain + "</option>").join("") + "</select></div>" +
    '<div class="grid g-2"><div class="field"><label>NS Prefix 1</label><input id="nsPrefix1" value="ns1"/></div>' +
    '<div class="field"><label>IP Address 1</label><input id="nsIp1" placeholder="103.86.96.14" value="103.86.96.14"/></div></div>' +
    '<div class="grid g-2"><div class="field"><label>NS Prefix 2</label><input id="nsPrefix2" value="ns2"/></div>' +
    '<div class="field"><label>IP Address 2</label><input id="nsIp2" placeholder="103.86.96.15" value="103.86.96.15"/></div></div>' +
    '<div class="demo-hint">' + I.key + " Setelah dibuat, tambahkan <b>glue record</b> (A record) di registrar domain Anda.</div>" +
    "</div>" +
    '<div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Batal</button><button class="btn btn-primary" onclick="createNS()">Buat Nameserver</button></div>'
  );
}
function createNS() {
  const domain = ($("#nsDomain") || {}).value || DB.domains[0].domain;
  const p1 = ($("#nsPrefix1") || {}).value || "ns1", ip1 = ($("#nsIp1") || {}).value || "103.86.96.14";
  const p2 = ($("#nsPrefix2") || {}).value || "ns2", ip2 = ($("#nsIp2") || {}).value || "103.86.96.15";
  DB.nameservers.custom.push({ ns: p1 + "." + domain, ip: ip1, domain, status: "active" });
  DB.nameservers.custom.push({ ns: p2 + "." + domain, ip: ip2, domain, status: "active" });
  closeModal(); go("nameserver");
  toast("Nameserver dibuat", p1 + "." + domain + " & " + p2 + "." + domain, "ok");
}
function delCustomNS(i) { const n = DB.nameservers.custom[i].ns; DB.nameservers.custom.splice(i, 1); go("nameserver"); toast("Nameserver dihapus", n, "warn"); }
function copyText(t) {
  try { navigator.clipboard.writeText(t); } catch (e) {}
  toast("Disalin!", t, "ok");
}
/* ============================================================
   VIEW: WHITE LABEL
   ============================================================ */
function viewWhiteLabel() {
  const wl = DB.whiteLabel;
  const initial = wl.company.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
  const preview = '<div class="wl-preview"><div class="wlp-bar"><div class="wlp-logo" style="background:' + wl.primaryColor + '">' + initial + "</div>" +
    '<div><div class="fw7" style="font-size:13px">' + wl.company + '</div><div class="cell-sub" style="font-size:11px">' + wl.tagline + "</div></div>" +
    '<span class="badge green" style="margin-left:auto"><span class="dot"></span>Panel Anda</span></div>' +
    '<div class="wlp-body"><div class="fw8" style="font-size:16px;margin-bottom:6px">Selamat datang di ' + wl.company + "</div>" +
    '<div class="text-2" style="font-size:13px;margin-bottom:14px">Panel kendali hosting dengan branding Anda sendiri.</div>' +
    '<div class="flex gap8" style="flex-wrap:wrap"><button class="btn btn-primary btn-sm" style="background:' + wl.primaryColor + '">Kelola Layanan</button>' +
    '<button class="btn btn-ghost btn-sm" style="color:' + wl.accentColor + ';border-color:' + wl.accentColor + '">Buat Tiket</button></div>' +
    '<div class="mt16" style="font-family:var(--mono);font-size:11px;color:var(--text-3)">' + wl.panelUrl + " · " + wl.supportEmail + "</div></div></div>";

  return pageHead("White Label", "Personalisasi penuh panel & layanan dengan branding bisnis Anda.", "Bisnis / White Label",
    '<button class="btn btn-primary" onclick="saveWhiteLabel()">' + I.check + " Simpan Perubahan</button>") +
    '<div class="grid g-4 mb24">' +
    statCard("zap", "i-brand", "#7c5cff", "Status White Label", "Aktif", null, "Branding kustom menyala") +
    statCard("eye", "i-accent", "#00e5a0", "Sembunyikan Brand", wl.hideBranding ? "ON" : "OFF", null, "Logo Cloudo disembunyikan") +
    statCard("globe", "i-info", "#4d9dff", "Custom Nameserver", wl.customNS ? "ON" : "OFF", null, wl.nameserver) +
    statCard("mail", "i-warn", "#ffb020", "Email Kustom", wl.customEmail ? "ON" : "OFF", null, "Template email branded") +
    "</div>" +
    '<div class="grid g-23">' +
    card("Identitas Brand", "Nama, logo & kontak perusahaan",
      '<div class="field"><label>Nama Perusahaan</label><input id="wlCompany" value="' + wl.company + '"/></div>' +
      '<div class="field"><label>Tagline</label><input id="wlTagline" value="' + wl.tagline + '"/></div>' +
      '<div class="grid g-2"><div class="field"><label>URL Panel</label><input id="wlUrl" value="' + wl.panelUrl + '"/></div>' +
      '<div class="field"><label>Email Support</label><input id="wlEmail" value="' + wl.supportEmail + '"/></div></div>' +
      '<div class="field"><label>Upload Logo</label><div class="dropzone" style="padding:22px" onclick="toast(\'Upload logo\',\'Pilih file PNG/SVG\',\'info\')"><div class="dz-ico" style="width:48px;height:48px">' + I.download + "</div>" +
      '<div class="text-2" style="font-size:12.5px;margin-top:8px">Klik untuk upload logo (PNG/SVG, maks 1 MB)</div></div></div>') +
    card("Pratinjau", "Tampilan panel klien Anda",
      preview +
      '<div class="mt16 color-row">' +
      '<div class="color-field"><label>Warna Utama</label><div class="cf-row"><input type="color" id="wlPrimary" value="' + wl.primaryColor + '" oninput="DB.whiteLabel.primaryColor=this.value;go(\'whitelabel\')"/><span class="mono" style="font-size:12px">' + wl.primaryColor + "</span></div></div>" +
      '<div class="color-field"><label>Warna Aksen</label><div class="cf-row"><input type="color" id="wlAccent" value="' + wl.accentColor + '" oninput="DB.whiteLabel.accentColor=this.value;go(\'whitelabel\')"/><span class="mono" style="font-size:12px">' + wl.accentColor + "</span></div></div></div>") +
    "</div>" +
    card("Opsi White Label", "Aktifkan fitur branding penuh",
      '<div class="grid g-2">' +
      '<div class="toggle-row"><div><div class="fw7">Sembunyikan Brand Cloudo</div><div class="cell-sub">Hilangkan logo & mention Cloudo PRO</div></div><div class="toggle ' + (wl.hideBranding ? "on" : "") + '" onclick="toggleWL(\'hideBranding\')"></div></div>' +
      '<div class="toggle-row"><div><div class="fw7">Custom Nameserver</div><div class="cell-sub">Gunakan ns bernama brand Anda</div></div><div class="toggle ' + (wl.customNS ? "on" : "") + '" onclick="toggleWL(\'customNS\')"></div></div>' +
      '<div class="toggle-row"><div><div class="fw7">Email Bertemplat Brand</div><div class="cell-sub">Invoice & notif dengan logo Anda</div></div><div class="toggle ' + (wl.customEmail ? "on" : "") + '" onclick="toggleWL(\'customEmail\')"></div></div>' +
      '<div class="toggle-row"><div><div class="fw7">Panel Reseller Branded</div><div class="cell-sub">Sub-reseller pakai brand Anda</div></div><div class="toggle ' + (wl.resellerPanel ? "on" : "") + '" onclick="toggleWL(\'resellerPanel\')"></div></div>' +
      "</div>");
}
function toggleWL(key) { DB.whiteLabel[key] = !DB.whiteLabel[key]; go("whitelabel"); toast("Pengaturan disimpan", "", "info"); }
function saveWhiteLabel() {
  DB.whiteLabel.company = ($("#wlCompany") || {}).value || DB.whiteLabel.company;
  DB.whiteLabel.tagline = ($("#wlTagline") || {}).value || DB.whiteLabel.tagline;
  DB.whiteLabel.panelUrl = ($("#wlUrl") || {}).value || DB.whiteLabel.panelUrl;
  DB.whiteLabel.supportEmail = ($("#wlEmail") || {}).value || DB.whiteLabel.supportEmail;
  go("whitelabel");
  toast("White Label disimpan!", "Branding berhasil diperbarui", "ok");
}
/* ============================================================
   VIEW: PHPMYADMIN + EXTENSIONS
   ============================================================ */
let PMA_DB = "db_tokoberkah";
function viewPhpMyAdmin() {
  const pma = DB.phpmyadmin;
  const dbList = DB.databases.map(d => d.name);
  const tables = pma.tables.map(t =>
    "<tr>" +
    '<td><div class="cell-main"><div class="cell-ico" style="color:#6c78af">' + I.db + '</div><div class="cell-title">' + t.name + "</div></div></td>" +
    '<td><span class="mono">' + t.rows.toLocaleString() + "</span></td>" +
    '<td><span class="mono">' + t.size + "</span></td>" +
    '<td><span class="badge purple">' + t.engine + "</span></td>" +
    '<td class="row-actions"><button class="act" title="Browse" onclick="pmaBrowse(\'' + t.name + "')\">" + I.eye + '</button><button class="act" title="Structure" onclick="toast(\'Structure\',\'' + t.name + "','info')\">" + I.grid + "</button></td></tr>"
  ).join("");

  const exts = [
    { n: "Import", i: "download", d: "Impor file .sql/.csv" },
    { n: "Export", i: "external", d: "Ekspor database/dump" },
    { n: "SQL Console", i: "terminal", d: "Jalankan query manual" },
    { n: "Optimize", i: "zap", d: "Optimalkan tabel" },
    { n: "Repair", i: "reload", d: "Perbaiki tabel rusak" },
    { n: "Check", i: "check", d: "Cek integritas tabel" },
    { n: "Truncate", i: "trash", d: "Kosongkan tabel" },
    { n: "Drop", i: "alert", d: "Hapus database" }
  ].map(e => '<button class="pma-ext" onclick="pmaExt(\'' + e.n + "')\">" + I[e.i] + "<span>" + e.n + "</span><span class='cell-sub' style='margin-left:auto;font-weight:400'>" + e.d + "</span></button>").join("");

  return pageHead("phpMyAdmin", "Kelola database MySQL langsung dari browser — lengkap dengan ekstensi.", "Layanan / phpMyAdmin",
    '<button class="btn btn-primary" onclick="pmaExt(\'SQL Console\')">' + I.terminal + " Buka SQL Console</button>") +
    '<div class="pma-bar mb16"><div class="s-icon i-brand" style="width:44px;height:44px">' + I.db + "</div>" +
    '<div style="flex:1;min-width:160px"><div class="fw8" style="font-size:15px">phpMyAdmin v' + pma.version + '</div><div class="cell-sub">Server: ' + pma.server + " · MySQL 8.0</div></div>" +
    '<div class="flex gap8" style="flex-wrap:wrap"><span class="badge green"><span class="dot"></span>Terhubung</span>' +
    '<span class="badge blue"><span class="dot"></span>' + dbList.length + " database</span>" +
    '<span class="badge purple"><span class="dot"></span>' + pma.tables.length + " tabel</span></div></div>" +
    '<div class="grid g-23">' +
    '<div>' +
    card("Database: " + PMA_DB, "Pilih database & kelola tabel",
      '<div class="field"><label>Database Aktif</label><select onchange="PMA_DB=this.value;go(\'phpmyadmin\')">' + dbList.map(d => "<option" + (d === PMA_DB ? " selected" : "") + ">" + d + "</option>").join("") + "</select></div>" +
      '<div class="table-wrap"><table><thead><tr><th>Tabel</th><th>Baris</th><th>Ukuran</th><th>Engine</th><th></th></tr></thead><tbody>' + tables + "</tbody></table></div>") +
    card("SQL Console", "Jalankan query SQL secara langsung",
      '<div class="sql-console"><textarea id="sqlQuery" placeholder="SELECT * FROM wp_posts LIMIT 10;">SELECT * FROM ' + pma.tables[0].name + " LIMIT 10;</textarea>" +
      '<div class="flex aic jcb" style="padding:10px 16px;border-top:1px solid var(--border)"><span class="cell-sub" style="font-size:11px">Ctrl+Enter untuk menjalankan</span>' +
      '<button class="btn btn-primary btn-sm" onclick="runSQL()">' + I.play + " Jalankan</button></div>" +
      '<div class="sql-result" id="sqlResult">Hasil query akan muncul di sini...</div></div>') +
    "</div>" +
    card("Ekstensi & Operasi", "Tool tambahan phpMyAdmin", '<div class="grid" style="gap:9px">' + exts + "</div>") +
    "</div>";
}
function pmaExt(name) {
  const msgs = {
    "Import": ["Impor data", "Pilih file .sql/.csv untuk diimpor"],
    "Export": ["Ekspor data", "Menyiapkan dump database..."],
    "SQL Console": ["SQL Console", "Gulir ke console di kiri untuk query"],
    "Optimize": ["Optimize", "Semua tabel berhasil dioptimalkan"],
    "Repair": ["Repair", "Pemeriksaan & perbaikan selesai"],
    "Check": ["Check", "Semua tabel dalam kondisi baik"],
    "Truncate": ["Truncate", "Peringatan: mengosongkan tabel!"],
    "Drop": ["Drop", "Peringatan: menghapus database!"]
  };
  const m = msgs[name] || [name, "Operasi dijalankan"];
  if (name === "SQL Console") { $("#sqlQuery").focus(); toast(m[0], m[1], "info"); }
  else toast(m[0], m[1], name === "Truncate" || name === "Drop" ? "warn" : "ok");
}
function pmaBrowse(t) { toast("Browse tabel", "Membuka " + t, "info"); }
function runSQL() {
  const q = ($("#sqlQuery") || {}).value || "";
  const res = $("#sqlResult");
  if (!res) return;
  const rows = DB.phpmyadmin.tables[0].rows;
  res.innerHTML = '<span style="color:var(--accent)">✓ Query berhasil dijalankan.</span><br>' +
    "<span class='mono'>" + (q.length > 60 ? q.slice(0, 60) + "..." : q) + "</span><br>" +
    "Menampilkan <b>" + Math.min(10, rows) + "</b> dari " + rows + " baris (0.02 detik).";
  toast("Query dijalankan", "Hasil ditampilkan", "ok");
}
/* ============================================================
   VIEW: PHP MANAGER (versi + ekstensi, termasuk PHP 7.2)
   ============================================================ */
let PHP_CACHE = null;
async function refreshPHP() {
  try {
    const r = await fetch("/api/php");
    PHP_CACHE = await r.json();
  } catch (e) {
    PHP_CACHE = { available: false, version: null, extensions: [], versions: ["7.2", "7.4", "8.0", "8.1", "8.2", "8.3"] };
  }
  go("phpmanager");
}
function viewPhpManager() {
  const p = PHP_CACHE || { available: false, version: null, extensions: [], versions: ["7.2", "7.4", "8.0", "8.1", "8.2", "8.3"] };
  const needExt = ["mysqli", "pdo_mysql", "curl", "mbstring", "openssl", "gd", "zip", "xml", "intl", "opcache", "fileinfo", "exif"];
  const has = function (n) { return p.extensions.some(function (e) { return e.toLowerCase() === n.toLowerCase(); }); };
  const verTiles = p.versions.map(function (v) {
    const legacy = v === "7.2" || v === "7.4";
    return '<div class="panel-tile">' +
      '<div class="flex aic jcb mb16"><div class="cell-ico" style="color:' + (legacy ? "#ffb020" : "#00e5a0") + ';width:42px;height:42px">' + I.code + "</div>" +
      (legacy ? '<span class="badge orange">Legacy</span>' : '<span class="badge green"><span class="dot"></span>Didukung</span>') + "</div>" +
      "<h4>PHP " + v + "</h4>" +
      '<div class="pt-desc">' + (v === "7.2" ? "Untuk web lama — wajib OPcache + isolasi pool." : v === "7.4" ? "Transisi — masih aman s/d update." : "Rekomendasi aktif & tercepat.") + "</div>" +
      '<div class="pt-foot"><span class="text-2" style="font-size:12px">' + (p.version && p.version.indexOf(v) === 0 ? "Aktif di server" : "Multi-versi") + '</span><button class="btn btn-ghost btn-sm" onclick="setPHPDefault(\'' + v + '\')">Jadikan Default</button></div></div>';
  }).join("");
  const extRows = needExt.map(function (n) {
    const ok = p.available ? has(n) : null;
    return "<tr><td class='fw7 mono'>" + n + "</td>" +
      "<td>" + (ok === null ? '<span class="badge gray">belum terdeteksi</span>' : ok ? '<span class="badge green"><span class="dot"></span>Aktif</span>' : '<span class="badge red"><span class="dot"></span>Mati</span>') + "</td>" +
      '<td><span class="cell-sub">' + (n === "mysqli" || n === "pdo_mysql" ? "Wajib database" : n === "opcache" ? "Wajib performa" : "Umum web/CMS") + "</span></td></tr>";
  }).join("");
  const installCmd = p.available
    ? '<div class="cell-sub">PHP terdeteksi: <b class="mono">' + p.version + "</b> — ekstensi di bawah dibaca langsung dari server.</div>"
    : '<div class="demo-hint">' + I.alert + ' <b>PHP belum terinstall di PC ini.</b><br>Install via <b>XAMPP PHP 8.2</b> (untuk dev) + <b>PHP 7.2 portable</b> (untuk web lama). Setelah install & masuk PATH, klik <b>Refresh Deteksi</b>.</div>' +
      '<div class="codebox">winget install --id=ApacheFriends.Xampp.8.2 -e<br># PHP 7.2 (web lama): download zip portable, ekstrak ke C:\\php72, lalu tambah ke PATH</div>';
  return pageHead("PHP Manager", "Multi-versi PHP 7.2 – 8.3 + cek ekstensi wajib per web.", "Layanan / PHP",
    '<button class="btn btn-ghost" onclick="refreshPHP()">' + I.reload + ' Refresh Deteksi</button>') +
    '<div class="grid g-4 mb24">' +
    statCard("code", "i-brand", "#7c5cff", "PHP Server", p.available ? p.version : "Belum ada", null, p.available ? "Terdeteksi otomatis" : "Install dulu — panduan di bawah") +
    statCard("check", "i-accent", "#00e5a0", "Ekstensi Aktif", p.available ? p.extensions.length : "—", null, "Dari php -m") +
    statCard("alert", "i-warn", "#ffb020", "PHP 7.2 Legacy", "Siap", null, "Isolasi pool disarankan") +
    statCard("zap", "i-info", "#4d9dff", "Opcache", p.available && has("opcache") ? "ON" : "Cek", null, "Wajib untuk performa") +
    "</div>" +
    card("Versi PHP", "Pilih default & pantau status tiap versi", '<div class="grid g-3">' + verTiles + "</div>") +
    '<div class="grid g-23 mt24">' +
    card("Ekstensi Wajib", "Cek kesiapan untuk WordPress/Laravel/web lama", installCmd + '<div class="table-wrap mt16"><table><thead><tr><th>Ekstensi</th><th>Status</th><th>Kebutuhan</th></tr></thead><tbody>' + extRows + "</tbody></table></div>") +
    card("Panduan PHP 7.2 (Web Lama)", "Aman menjalankan web lawas berdampingan",
      '<div class="steps">' +
      '<div class="step"><b>1. Isolasi pool</b><span class="cell-sub">Satu pool PHP-FPM khusus 7.2 per web lama — jangan campur dengan 8.x.</span></div>' +
      '<div class="step"><b>2. Kunci ekstensi</b><span class="cell-sub">mysqli, curl, mbstring, gd, zip, openssl wajib ON di 7.2.</span></div>' +
      '<div class="step"><b>3. Batas aman</b><span class="cell-sub">7.2 sudah EOL — hanya untuk internal/sementara, rencanakan migrasi ke 8.x.</span></div>' +
      "</div>") +
    "</div>";
}
async function setPHPDefault(v) {
  try {
    if (API.token) await API.post("/api/php/default", { version: v });
    toast("PHP default", "Versi " + v + " dijadikan default", "ok");
  } catch (e) { toast("PHP default", "Mode demo: " + v + " dipilih (" + e.message + ")", "info"); }
}
/* ============================================================
   INTEGRASI PANEL (cPanel UAPI + DirectAdmin API — GRATIS)
   API-nya gratis dipakai. Yang berbayar = lisensi server panel:
   cPanel ~$20/bln/VPS, DirectAdmin ~$5/bln. Tanpa server panel,
   status "disconnected" dan UI jalan mode simulasi.
   ============================================================ */
async function openPanelIntegration() {
  let cfg = { cpanel: { host: "", user: "", status: "disconnected" }, directadmin: { host: "", user: "", status: "disconnected" } };
  try { if (API.token) cfg = await API.get("/api/panels"); } catch (e) {}
  openModal(
    '<div class="modal-head"><h3>' + I.key + ' Integrasi cPanel / DirectAdmin</h3><button class="icon-btn" onclick="closeModal()">' + I.x + "</button></div>" +
    '<div class="modal-body">' +
    '<div class="demo-hint">' + I.check + ' <b>API-nya GRATIS</b> — cPanel UAPI & DirectAdmin API tanpa biaya tambahan. Yang berbayar hanya <b>lisensi server panel</b> itu sendiri. Isi kredensial di bawah lalu <b>Tes Koneksi</b>.</div>' +
    '<div class="section-title mt16">cPanel / WHM</div>' +
    '<div class="field"><label>Host (mis. https://server:2087)</label><input id="cpHost" value="' + (cfg.cpanel.host || "") + '" placeholder="https://..."/></div>' +
    '<div class="grid g-2"><div class="field"><label>WHM User</label><input id="cpUser" value="' + (cfg.cpanel.user || "") + '"/></div>' +
    '<div class="field"><label>API Token</label><input id="cpToken" type="password" placeholder="WHM > API Tokens"/></div></div>' +
    '<div class="flex gap8"><button class="btn btn-ghost btn-sm" onclick="savePanelCfg(\'cpanel\')">Simpan</button>' +
    '<button class="btn btn-primary btn-sm" onclick="testPanelConn(\'cpanel\')">Tes Koneksi</button>' +
    '<span class="badge ' + (cfg.cpanel.status === "connected" ? "green" : "gray") + '" id="cpStatus">' + cfg.cpanel.status + "</span></div>" +
    '<div class="section-title mt16">DirectAdmin</div>' +
    '<div class="field"><label>Host (mis. https://server:2222)</label><input id="daHost" value="' + (cfg.directadmin.host || "") + '" placeholder="https://..."/></div>' +
    '<div class="grid g-2"><div class="field"><label>User</label><input id="daUser" value="' + (cfg.directadmin.user || "") + '"/></div>' +
    '<div class="field"><label>Login Key</label><input id="daKey" type="password" placeholder="Login Keys"/></div></div>' +
    '<div class="flex gap8"><button class="btn btn-ghost btn-sm" onclick="savePanelCfg(\'directadmin\')">Simpan</button>' +
    '<button class="btn btn-primary btn-sm" onclick="testPanelConn(\'directadmin\')">Tes Koneksi</button>' +
    '<span class="badge ' + (cfg.directadmin.status === "connected" ? "green" : "gray") + '" id="daStatus">' + cfg.directadmin.status + "</span></div>" +
    "</div>" +
    '<div class="modal-foot"><button class="btn btn-ghost" onclick="closeModal()">Tutup</button></div>'
  );
}
async function savePanelCfg(kind) {
  const payload = kind === "cpanel"
    ? { host: ($("#cpHost") || {}).value || "", user: ($("#cpUser") || {}).value || "", token: ($("#cpToken") || {}).value || "" }
    : { host: ($("#daHost") || {}).value || "", user: ($("#daUser") || {}).value || "", key: ($("#daKey") || {}).value || "" };
  try {
    await API.post("/api/panels/" + kind, payload);
    toast("Konfigurasi tersimpan", kind + " -> configured", "ok");
  } catch (e) { toast("Gagal simpan", e.message + " (login dulu)", "warn"); }
}
async function testPanelConn(kind) {
  toast("Menghubungi panel...", kind, "info");
  try {
    const r = await API.post("/api/panels/" + kind + "/test", {});
    toast("Koneksi BERHASIL", kind + " connected", "ok");
    openPanelIntegration();
    return r;
  } catch (e) { toast("Koneksi GAGAL", e.message, "warn"); }
}
/* __VIEWS_FINAL__ */

const VIEWS = {
  dashboard: viewDashboard, vps: viewVPS, hosting: viewHosting, panels: viewPanels,
  domains: viewDomains, email: viewEmail, database: viewDatabase, ssl: viewSSL,
  backup: viewBackup, reseller: viewReseller, billing: viewBilling, clients: viewClients, support: viewSupport,
  analytics: viewAnalytics, monitoring: viewMonitoring, settings: viewSettings, panel: viewPanel,
  landing: viewLanding, login: viewLogin, portal: viewPortal, phpmanager: viewPhpManager,
  cloner: viewCloner, nameserver: viewNameserver, whitelabel: viewWhiteLabel, phpmyadmin: viewPhpMyAdmin
};
const PUBLIC_ROUTES = ["landing", "login"];
function go(id) {
  if (!VIEWS[id]) id = "landing";
  window.location.hash = "#" + id;
  render();
  window.scrollTo({ top: 0 });
}
function render() {
  let id = (window.location.hash || "#landing").slice(1);
  if (!VIEWS[id]) id = "landing";
  const isPublic = PUBLIC_ROUTES.indexOf(id) !== -1;
  $(".app").classList.toggle("public", isPublic);
  const view = VIEWS[id] || viewLanding;
  $("#content").innerHTML = view();
  if (!isPublic) {
    const asClient = (id === "portal") || (AUTH.role === "client");
    renderNav(id, asClient);
    $("#avatar").textContent = asClient ? "BS" : DB.user.initials;
    $("#userName").textContent = asClient ? "Budi Santoso" : DB.user.name;
    $("#userRole").textContent = asClient ? "Klien" : DB.user.role;
    $("#planCard").innerHTML = asClient
      ? '<div class="pc-top"><span class="pc-title">Paket Saya</span><span class="pc-plan">BUSINESS</span></div>' +
        '<div class="usage-row"><span>Domain aktif</span><span>3</span></div><div class="usage-bar"><div style="width:60%"></div></div>' +
        '<div class="usage-row"><span>Disk terpakai</span><span>18.4 / 40 GB</span></div><div class="usage-bar"><div style="width:46%"></div></div>' +
        '<button class="btn btn-primary btn-sm" style="width:100%;margin-top:6px" onclick="go(\'landing\')">Kelola Langganan</button>'
      : '<div class="pc-top"><span class="pc-title">Paket Enterprise</span><span class="pc-plan">ACTIVE</span></div>' +
        '<div class="usage-row"><span>VPS Terpakai</span><span>24/50</span></div><div class="usage-bar"><div style="width:48%"></div></div>' +
        '<div class="usage-row"><span>Disk Global</span><span>1.8 / 4 TB</span></div><div class="usage-bar"><div style="width:45%"></div></div>' +
        '<a href="#billing" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Upgrade Paket</a>';
  }
  closeSidebar();
}
function closeSidebar() {
  $("#sidebar").classList.remove("open");
  $("#scrim").classList.remove("show");
}
function init() {
  $("#avatar").textContent = DB.user.initials;
  $("#userName").textContent = DB.user.name;
  $("#userRole").textContent = DB.user.role;
  render();

  $("#menuToggle").addEventListener("click", () => { $("#sidebar").classList.add("open"); $("#scrim").classList.add("show"); });
  $("#scrim").addEventListener("click", closeSidebar);
  $("#btnNotif").addEventListener("click", () => toast("3 notifikasi baru", "Server down, invoice, expiry domain", "warn"));
  $("#btnStatus").addEventListener("click", () => go("monitoring"));
  $("#userChip").addEventListener("click", () => go("settings"));
  $("#globalSearch").addEventListener("keydown", (e) => {
    if (e.key === "Enter") { const q = e.target.value.trim(); if (q) toast("Pencarian", 'Hasil untuk "' + q + '"', "info"); }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); $("#globalSearch").focus(); }
  });
  window.addEventListener("hashchange", render);
  setTimeout(() => toast("Selamat datang di CLOUDO PRO", "Semua sistem berjalan normal", "ok"), 700);
}
document.addEventListener("DOMContentLoaded", init);
