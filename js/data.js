/* ============================================================
   CLOUDO PRO — Mock Data Layer
   ============================================================ */
const DB = {
  user: { name: "Rizky Pratama", role: "Root Administrator", email: "admin@cloudo.pro", initials: "RP" },

  stats: {
    activeVPS: 24, totalVPS: 28,
    sharedHosting: 142, domains: 86,
    mrr: 48250000, mrrGrowth: 12.4,
    resellers: 18, resellerGrowth: 8.1,
    tickets: 7, openTickets: 3,
    uptime: 99.98
  },

  revenue: [32,35,34,39,43,41,47,52,50,56,61,68],
  revenueLabels: ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],
  resourceDays: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14"],
  cpu: [38,44,41,52,48,61,58,66,55,49,53,60,57,62],
  ram: [52,55,51,58,60,64,62,70,66,61,63,68,65,71],

  regions: [
    { code: "SIN", city: "Singapura", flag: "🇸🇬", latency: 12, status: "online" },
    { code: "JKT", city: "Jakarta", flag: "🇮🇩", latency: 8, status: "online" },
    { code: "FRA", city: "Frankfurt", flag: "🇩🇪", latency: 42, status: "online" },
    { code: "SFO", city: "San Francisco", flag: "🇺🇸", latency: 168, status: "online" },
    { code: "SYD", city: "Sydney", flag: "🇦🇺", latency: 96, status: "maintenance" }
  ],

  vps: [
    { id: "VPS-1042", name: "prod-web-01", os: "Ubuntu 24.04 LTS", ip: "103.86.96.14", region: "SIN", status: "running", cpu: 4, ram: 8, disk: 160, bw: 4.2, plan: "Cloud Pro V4", cpuUse: 62, ramUse: 71 },
    { id: "VPS-1043", name: "prod-db-01", os: "Debian 12", ip: "103.86.96.28", region: "SIN", status: "running", cpu: 8, ram: 32, disk: 480, bw: 6.8, plan: "Cloud Pro V8", cpuUse: 44, ramUse: 58 },
    { id: "VPS-1051", name: "staging-api", os: "Rocky Linux 9", ip: "103.86.97.51", region: "JKT", status: "running", cpu: 2, ram: 4, disk: 80, bw: 1.1, plan: "Cloud Basic", cpuUse: 28, ramUse: 40 },
    { id: "VPS-1052", name: "cdn-edge-eu", os: "AlmaLinux 9", ip: "45.132.88.9", region: "FRA", status: "running", cpu: 4, ram: 16, disk: 240, bw: 9.4, plan: "Cloud Pro V4", cpuUse: 71, ramUse: 66 },
    { id: "VPS-1063", name: "mail-relay", os: "Ubuntu 22.04", ip: "103.86.98.77", region: "JKT", status: "stopped", cpu: 2, ram: 2, disk: 40, bw: 0.2, plan: "Cloud Basic", cpuUse: 0, ramUse: 0 },
    { id: "VPS-1070", name: "backup-node", os: "Debian 12", ip: "45.132.90.12", region: "FRA", status: "running", cpu: 2, ram: 8, disk: 500, bw: 2.3, plan: "Cloud Storage", cpuUse: 18, ramUse: 32 },
    { id: "VPS-1071", name: "k8s-worker-3", os: "Ubuntu 24.04 LTS", ip: "103.86.99.90", region: "SFO", status: "running", cpu: 16, ram: 64, disk: 320, bw: 12.7, plan: "Cloud Pro V16", cpuUse: 55, ramUse: 49 },
    { id: "VPS-1072", name: "redis-cache", os: "Alpine 3.20", ip: "103.86.99.91", region: "SFO", status: "running", cpu: 4, ram: 16, disk: 60, bw: 3.1, plan: "Cloud Pro V4", cpuUse: 36, ramUse: 44 }
  ],

  osList: ["Ubuntu 24.04 LTS","Ubuntu 22.04 LTS","Debian 12","Debian 11","Rocky Linux 9","AlmaLinux 9","Alpine 3.20","Windows Server 2022"],
  regionList: ["SIN","JKT","FRA","SFO","SYD"],
  planList: ["Cloud Basic","Cloud Pro V2","Cloud Pro V4","Cloud Pro V8","Cloud Pro V16","Cloud Storage"],
  hosting: [
    { id: "HST-2041", domain: "tokoberkah.com", plan: "Business", disk: 40, diskUsed: 18.4, bw: 2000, bwUsed: 720, email: 25, db: 30, ssl: true, status: "active", panel: "cPanel", region: "SIN" },
    { id: "HST-2042", domain: "portofolio.me", plan: "Starter", disk: 10, diskUsed: 3.1, bw: 500, bwUsed: 120, email: 5, db: 5, ssl: true, status: "active", panel: "DirectAdmin", region: "JKT" },
    { id: "HST-2043", domain: "aplikasiku.id", plan: "Professional", disk: 100, diskUsed: 62.8, bw: 5000, bwUsed: 3100, email: 100, db: 100, ssl: true, status: "active", panel: "cPanel", region: "SIN" },
    { id: "HST-2044", domain: "blogtravel.net", plan: "Starter", disk: 10, diskUsed: 8.9, bw: 500, bwUsed: 480, email: 5, db: 5, ssl: false, status: "suspended", panel: "CyberPanel", region: "FRA" },
    { id: "HST-2045", domain: "startupku.co", plan: "Business", disk: 40, diskUsed: 12.2, bw: 2000, bwUsed: 540, email: 25, db: 30, ssl: true, status: "active", panel: "Plesk", region: "JKT" }
  ],

  panels: [
    { name: "cPanel", logo: "cP", color: "#ff6c2c", desc: "Panel paling populer & lengkap dengan fitur standar industri.", features: ["Softaculous","WHM","Email","Backup"], price: "Rp 45rb/bln", status: "active", accounts: 68 },
    { name: "Plesk", logo: "Pl", color: "#52bbef", desc: "UI modern, optimal untuk WordPress & developer.", features: ["WordPress Toolkit","Git","Docker","Node.js"], price: "Rp 52rb/bln", status: "active", accounts: 24 },
    { name: "DirectAdmin", logo: "DA", color: "#00b894", desc: "Ringan, cepat, dan ekonomis untuk reseller.", features: ["Ringan","CustomBuild","Email","DNS"], price: "Rp 28rb/bln", status: "active", accounts: 31 },
    { name: "CyberPanel", logo: "Cy", color: "#7c5cff", desc: "Powered by OpenLiteSpeed, kecepatan tinggi & gratis SSL.", features: ["LiteSpeed","Gratis SSL","Git","Staging"], price: "Rp 35rb/bln", status: "active", accounts: 19 }
  ],

  domains: [
    { domain: "tokoberkah.com", tld: ".com", status: "active", expiry: "2026-08-14", autoRenew: true, dns: "Cloudo DNS" },
    { domain: "portofolio.me", tld: ".me", status: "active", expiry: "2026-03-02", autoRenew: false, dns: "Cloudflare" },
    { domain: "aplikasiku.id", tld: ".id", status: "active", expiry: "2026-11-20", autoRenew: true, dns: "Cloudo DNS" },
    { domain: "blogtravel.net", tld: ".net", status: "expiring", expiry: "2025-10-25", autoRenew: false, dns: "Cloudo DNS" },
    { domain: "startupku.co", tld: ".co", status: "active", expiry: "2027-01-09", autoRenew: true, dns: "Google DNS" }
  ],

  emails: [
    { addr: "admin@tokoberkah.com", quota: 5, used: 1.8, status: "active" },
    { addr: "support@tokoberkah.com", quota: 10, used: 4.2, status: "active" },
    { addr: "billing@aplikasiku.id", quota: 5, used: 0.9, status: "active" },
    { addr: "noreply@startupku.co", quota: 2, used: 0.1, status: "active" }
  ],

  databases: [
    { name: "db_tokoberkah", size: 245, host: "localhost", user: "u_toko01", status: "active" },
    { name: "db_aplikasiku", size: 890, host: "localhost", user: "u_app01", status: "active" },
    { name: "db_blogtravel", size: 120, host: "localhost", user: "u_blog01", status: "active" },
    { name: "db_analytics", size: 1580, host: "localhost", user: "u_anl01", status: "active" }
  ],
  invoices: [
    { id: "INV-2025-0142", client: "PT Toko Berkah", amount: 2450000, status: "paid", date: "2025-10-01", due: "2025-10-05" },
    { id: "INV-2025-0141", client: "Budi Santoso", amount: 890000, status: "unpaid", date: "2025-10-03", due: "2025-10-10" },
    { id: "INV-2025-0140", client: "CV Aplikasi Kreatif", amount: 5600000, status: "paid", date: "2025-09-28", due: "2025-10-02" },
    { id: "INV-2025-0139", client: "Siti Nurhaliza", amount: 450000, status: "overdue", date: "2025-09-15", due: "2025-09-20" },
    { id: "INV-2025-0138", client: "Startupku Inc", amount: 3200000, status: "paid", date: "2025-09-12", due: "2025-09-16" }
  ],

  resellers: [
    { id: "RSL-01", name: "Agen Hosting Jaya", owner: "Budi Santoso", clients: 24, commission: 20, revenue: 12400000, status: "active", tier: "Gold" },
    { id: "RSL-02", name: "WebMaster Partner", owner: "Dewi Lestari", clients: 18, commission: 18, revenue: 8900000, status: "active", tier: "Silver" },
    { id: "RSL-03", name: "CloudKu Reseller", owner: "Agus Setiawan", clients: 31, commission: 22, revenue: 15600000, status: "active", tier: "Platinum" },
    { id: "RSL-04", name: "Nusa Digital", owner: "Rina Marlina", clients: 9, commission: 15, revenue: 4200000, status: "pending", tier: "Bronze" }
  ],

  tickets: [
    { id: "TKT-8842", subject: "VPS tidak bisa diakses via SSH", client: "Budi Santoso", priority: "high", status: "open", dept: "Teknis", time: "12 menit lalu" },
    { id: "TKT-8841", subject: "Request upgrade RAM VPS", client: "CV Aplikasi Kreatif", priority: "medium", status: "answered", dept: "Penjualan", time: "1 jam lalu" },
    { id: "TKT-8840", subject: "SSL belum terpasang di domain", client: "Siti Nurhaliza", priority: "medium", status: "open", dept: "Teknis", time: "3 jam lalu" },
    { id: "TKT-8839", subject: "Pertanyaan komisi reseller", client: "Dewi Lestari", priority: "low", status: "answered", dept: "Billing", time: "5 jam lalu" },
    { id: "TKT-8838", subject: "Backup gagal otomatis", client: "Agus Setiawan", priority: "high", status: "open", dept: "Teknis", time: "8 jam lalu" },
    { id: "TKT-8837", subject: "Migrasi dari provider lain", client: "Startupku Inc", priority: "low", status: "closed", dept: "Teknis", time: "1 hari lalu" },
    { id: "TKT-8836", subject: "Reset password cPanel", client: "Rina Marlina", priority: "low", status: "answered", dept: "Teknis", time: "1 hari lalu" }
  ],

  activity: [
    { icon: "server", title: "VPS prod-web-01 di-restart", time: "5 menit lalu", color: "accent" },
    { icon: "shield", title: "SSL diperbarui untuk tokoberkah.com", time: "22 menit lalu", color: "info" },
    { icon: "db", title: "Backup otomatis db_aplikasiku selesai", time: "1 jam lalu", color: "accent" },
    { icon: "card", title: "Invoice INV-2025-0142 dibayar", time: "2 jam lalu", color: "brand" },
    { icon: "alert", title: "Bandwidth blogtravel.net 96% terpakai", time: "3 jam lalu", color: "warn" },
    { icon: "user", title: "Reseller baru: Nusa Digital mendaftar", time: "5 jam lalu", color: "info" }
  ],

  backups: [
    { name: "prod-web-01", type: "Full", size: "12.4 GB", date: "2025-10-14 02:00", status: "success" },
    { name: "db_aplikasiku", type: "Database", size: "890 MB", date: "2025-10-14 02:15", status: "success" },
    { name: "prod-db-01", type: "Full", size: "48.2 GB", date: "2025-10-14 03:00", status: "success" },
    { name: "cdn-edge-eu", type: "Files", size: "8.1 GB", date: "2025-10-13 02:00", status: "success" },
    { name: "mail-relay", type: "Full", size: "2.3 GB", date: "2025-10-13 02:00", status: "failed" }
  ],

  clients: [
    { id: "CLI-001", name: "PT Toko Berkah", contact: "Budi Santoso", email: "budi@tokoberkah.com", services: 4, spend: 24500000, status: "active", since: "2023-03-12" },
    { id: "CLI-002", name: "CV Aplikasi Kreatif", contact: "Siti Nurhaliza", email: "siti@appkreatif.id", services: 7, spend: 56000000, status: "active", since: "2022-11-05" },
    { id: "CLI-003", name: "Budi Santoso", contact: "Budi Santoso", email: "budi.s@gmail.com", services: 2, spend: 8900000, status: "active", since: "2024-01-20" },
    { id: "CLI-004", name: "Startupku Inc", contact: "Andi Wijaya", email: "andi@startupku.co", services: 5, spend: 32000000, status: "active", since: "2023-07-30" },
    { id: "CLI-005", name: "Rina Marlina", contact: "Rina Marlina", email: "rina@nusadigital.id", services: 1, spend: 4500000, status: "pending", since: "2025-09-14" },
    { id: "CLI-006", name: "Toko Online Jaya", contact: "Joko Susilo", email: "joko@tokojaya.com", services: 3, spend: 15600000, status: "active", since: "2024-05-08" },
    { id: "CLI-007", name: "Agus Setiawan", contact: "Agus Setiawan", email: "agus@cloudku.id", services: 2, spend: 11200000, status: "inactive", since: "2023-02-17" }
  ],

  analytics: {
    serviceSplit: [
      { label: "Shared Hosting", value: 38, color: "#7c5cff" },
      { label: "VPS / Cloud", value: 32, color: "#4dd4ff" },
      { label: "Reseller", value: 18, color: "#00e5a0" },
      { label: "Domain", value: 12, color: "#ffb020" }
    ],
    topRegions: [
      { region: "Jakarta (JKT)", pct: 34 },
      { region: "Singapura (SIN)", pct: 28 },
      { region: "Frankfurt (FRA)", pct: 19 },
      { region: "San Francisco (SFO)", pct: 12 },
      { region: "Sydney (SYD)", pct: 7 }
    ],
    growth: [28, 31, 30, 36, 40, 38, 45, 49, 47, 54, 59, 68],
    churn: 2.1, retention: 96, arpu: 287000
  },

  nameservers: {
    defaults: [
      { ns: "ns1.cloudo.pro", ip: "103.86.96.1", location: "Jakarta (JKT)", status: "active" },
      { ns: "ns2.cloudo.pro", ip: "103.86.96.2", location: "Singapura (SIN)", status: "active" },
      { ns: "ns3.cloudo.pro", ip: "45.132.88.1", location: "Frankfurt (FRA)", status: "active" },
      { ns: "ns4.cloudo.pro", ip: "103.86.99.1", location: "San Francisco (SFO)", status: "active" }
    ],
    custom: [
      { ns: "ns1.tokoberkah.com", ip: "103.86.96.14", domain: "tokoberkah.com", status: "active" },
      { ns: "ns2.tokoberkah.com", ip: "103.86.96.15", domain: "tokoberkah.com", status: "active" },
      { ns: "ns1.aplikasiku.id", ip: "103.86.97.20", domain: "aplikasiku.id", status: "pending" }
    ]
  },

  clonedSites: [
    { id: "CLN-001", source: "https://situlama.com", target: "tokoberkah.com", method: "URL Clone", status: "success", date: "2025-10-12 14:30", size: "245 MB", files: 1842 },
    { id: "CLN-002", source: "ftp://oldhost.net", target: "portofolio.me", method: "FTP Sync", status: "success", date: "2025-10-10 09:15", size: "88 MB", files: 540 },
    { id: "CLN-003", source: "backup.zip", target: "startupku.co", method: "ZIP Upload", status: "running", date: "2025-10-14 08:00", size: "—", files: 0 },
    { id: "CLN-004", source: "https://bloglama.id", target: "blogtravel.net", method: "URL Clone", status: "failed", date: "2025-10-09 16:45", size: "—", files: 0 }
  ],

  whiteLabel: {
    company: "Cloudo Pro Hosting",
    tagline: "Solusi Hosting Terpercaya",
    panelUrl: "panel.cloudo.pro",
    supportEmail: "support@cloudo.pro",
    primaryColor: "#7c5cff",
    accentColor: "#00e5a0",
    nameserver: "ns1.cloudo.pro",
    customNS: true,
    hideBranding: true,
    customEmail: true,
    resellerPanel: true
  },

  phpmyadmin: {
    version: "5.2.1",
    server: "localhost",
    tables: [
      { name: "wp_posts", rows: 342, size: "2.4 MB", engine: "InnoDB" },
      { name: "wp_options", rows: 892, size: "1.8 MB", engine: "InnoDB" },
      { name: "wp_users", rows: 12, size: "128 KB", engine: "InnoDB" },
      { name: "wp_comments", rows: 1240, size: "980 KB", engine: "InnoDB" },
      { name: "wp_postmeta", rows: 4521, size: "3.1 MB", engine: "InnoDB" }
    ],
    extensions: ["Import", "Export", "SQL Console", "Optimize", "Repair", "Check", "Truncate", "Drop"]
  }

};
