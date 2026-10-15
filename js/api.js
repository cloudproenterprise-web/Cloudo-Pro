/* ============================================================
   CLOUDO PRO - API Client (fetch ke backend /api/*)
   Token tersimpan di localStorage. Otomatis fallback ke data
   mock lokal bila backend tidak terjangkau (mode offline/demo).
   ============================================================ */
const API = (function () {
  let token = null;
  try { token = localStorage.getItem("cloudo_token") || null; } catch (e) {}
  async function req(path, method, payload) {
    const r = await fetch(path, {
      method: method || "GET",
      headers: Object.assign({ "Content-Type": "application/json" }, token ? { Authorization: "Bearer " + token } : {}),
      body: payload ? JSON.stringify(payload) : undefined
    });
    const t = await r.text();
    let j = null;
    try { j = JSON.parse(t); } catch (e) { throw new Error("Respons server tidak valid"); }
    if (!r.ok) throw new Error((j && j.error) || ("HTTP " + r.status));
    return j;
  }
  return {
    get token() { return token; },
    async login(email, pass) {
      const j = await req("/api/login", "POST", { email: email, pass: pass });
      token = j.token;
      try { localStorage.setItem("cloudo_token", token); } catch (e) {}
      return j;
    },
    async logout() {
      try { await req("/api/logout", "POST"); } catch (e) {}
      token = null;
      try { localStorage.removeItem("cloudo_token"); } catch (e) {}
    },
    get: (p) => req(p, "GET"),
    post: (p, d) => req(p, "POST", d || {}),
    put: (p, d) => req(p, "PUT", d || {}),
    del: (p) => req(p, "DELETE")
  };
})();
