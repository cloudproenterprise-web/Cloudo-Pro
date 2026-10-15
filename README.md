# ☁️ CLOUDO PRO — Hosting & VPS Management Suite

Platform manajemen **Hosting & VPS** kelas enterprise dengan dukungan penuh **fitur Reseller**, **multi control panel**, dan seluruh fitur standar penyedia hosting besar (seperti WHMCS + cPanel).

Dibangun sebagai **single-page application** murni (HTML + CSS + Vanilla JS) — **tanpa build step**, cukup buka `index.html` di browser.

---

## 🚀 Cara Menjalankan

Tidak perlu instalasi apa pun. Cukup buka file:

```
index.html
```

...menggunakan browser modern (Chrome, Edge, Firefox, Safari).

**Atau** jalankan local server (opsional):

```bash
# Node (server sudah disediakan)
node server.js
# lalu buka http://localhost:8080
```

## 🌐 Alur Aplikasi

1. **Landing Page** (`#landing`) — halaman publik: hero, fitur, panel, harga, CTA
2. **Login** (`#login`) — pilih **Administrator** atau **Klien**
   - Admin → dashboard penuh (`#dashboard`)
   - Klien → portal klien (`#portal`)
3. **Dashboard Admin** — 19 modul admin + panel cPanel-like (`#panel`): VPS, hosting, panel, domain, reseller, billing, dll
4. **Tools tambahan** — Website Cloner (`#cloner`), Nameserver Cloudo (`#nameserver`), White Label (`#whitelabel`), phpMyAdmin (`#phpmyadmin`)

> 💡 Kredensial demo sudah terisi otomatis di halaman login — cukup klik **Masuk**.

---

## ✨ Fitur Utama

| Modul | Deskripsi |
|-------|-----------|
| 📊 **Dashboard** | Statistik real-time, grafik revenue & resource, log aktivitas, status data center |
| 🖥️ **VPS Manager** | Start / Stop / Restart, reinstall OS, akses console terminal, monitoring CPU/RAM |
| 🌐 **Shared Hosting** | Akun hosting dengan disk, bandwidth, email, database, SSL |
| 🎛️ **Control Panels** | cPanel, Plesk, DirectAdmin, CyberPanel + perbandingan fitur |
| 📧 **Email Hosting** | Akun email, kuota, spam filter, akses webmail |
| 🗄️ **Database** | MySQL/MariaDB, phpMyAdmin, backup database |
| 🔒 **SSL & Keamanan** | Sertifikat SSL, firewall, DDoS protection, malware scan |
| 💾 **Backup** | Snapshot otomatis, off-site replication, restore point |
| 💼 **Reseller** | Paket tier (Bronze–Platinum), komisi otomatis, white-label, sub-akun |
| 💳 **Billing** | Invoice, pembayaran, MRR, tagihan |
| 👥 **Manajemen Klien** | Data pelanggan, LTV, riwayat layanan, kontak |
| 🎫 **Support** | Sistem tiket, prioritas, departemen |
| 📊 **Laporan & Analitik** | ARPU, churn, retensi, donut komposisi layanan, region teratas |
| 📈 **Monitoring** | Health check per server, uptime, load real-time |
| 🖥️ **Panel cPanel-like** | File manager, email, subdomain, database, installer 1-klik per akun hosting |
| 🧬 **Website Cloner** | Clone via URL / FTP sync / upload ZIP + progress & riwayat migrasi |
| 🌐 **Nameserver Cloudo** | 4 NS default + private vanity NS dengan copy-1-klik |
| 🏷️ **White Label** | Branding penuh: logo, warna, URL panel, email, custom NS |
| 🗃️ **phpMyAdmin** | Browse tabel, SQL console, import/export, optimize/repair |
| ⚙️ **Pengaturan** | Profil admin, keamanan (2FA), preferensi tampilan |

---

## 🎨 Desain

- **Dark theme** premium bergaya SaaS modern (Vercel / Linear / Vultr)
- **Glassmorphism** & gradient aksen ungu–biru
- **Fully responsive** (desktop, tablet, mobile)
- **Grafik SVG** custom (line chart, dual-line, sparkline) — tanpa library eksternal
- **Animasi** halus (hover, modal, toast, transisi halaman)

---

## 📁 Struktur Project

```
cloudo-pro/
├── index.html        # App shell (sidebar, topbar, modal, toast container)
├── css/
│   └── style.css     # Design system lengkap (variabel, komponen, responsive)
└── js/
    ├── data.js       # Mock data (server, invoice, tiket, reseller, dll)
    └── app.js        # Router, icon library, semua view & interaksi
```

---

## 🧭 Navigasi

Gunakan **sidebar** atau **hash URL** untuk berpindah halaman:

- `#dashboard` — Ringkasan
- `#vps` — VPS / Cloud Server
- `#hosting` — Shared Hosting
- `#panels` — Control Panels
- `#domains` — Domain & DNS
- `#email` — Email Hosting
- `#database` — Database
- `#ssl` — SSL & Keamanan
- `#backup` — Backup
- `#reseller` — Reseller
- `#billing` — Billing & Invoice
- `#clients` — Manajemen Klien
- `#support` — Support Ticket
- `#analytics` — Laporan & Analitik
- `#monitoring` — Monitoring
- `#settings` — Pengaturan
- `#panel` — Panel cPanel-like (per akun hosting)
- `#cloner` — Website Cloner
- `#nameserver` — Nameserver Cloudo
- `#whitelabel` — White Label
- `#phpmyadmin` — phpMyAdmin
- `#portal` — Portal Klien

**Shortcut:** `Ctrl/⌘ + K` untuk fokus ke pencarian, `Esc` untuk menutup modal.

---

## 🛠️ Teknologi

- HTML5 semantik
- CSS3 (custom properties, grid, flexbox, animasi)
- Vanilla JavaScript (ES6) — router hash-based, rendering dinamis
- Font: Inter + JetBrains Mono (Google Fonts)
- **Zero dependency** — tidak ada framework atau library pihak ketiga

---

## 📝 Catatan

Ini adalah **prototipe UI/frontend** dengan data simulasi (mock). Seluruh data bersifat statis dan tersimpan di `js/data.js`. Untuk implementasi produksi, hubungkan dengan backend API (Node.js/Laravel/Django) dan database sesungguhnya.

---

**Dibangun dengan ❤️ — CLOUDO PRO Control Master**
