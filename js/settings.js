/* MKS Group — live site settings.
   The owner edits contact data from admin.html (Firestore doc config/site).
   Values in data.js are the fallback; the last fetched values are cached so pages render with them instantly. */
(function () {
  const S = window.MKS.site, KEY = 'mks_site', PID = (window.MKS_FIREBASE || {}).projectId;
  const FIELDS = ['phone', 'whatsapp', 'email', 'addr_ar', 'addr_en', 'mapsLink', 'mapsEmbedQuery', 'facebook', 'instagram', 'linkedin'];
  const URLS = ['mapsLink', 'facebook', 'instagram', 'linkedin'];
  const ok = (k, v) => typeof v === 'string' && v.length <= 300
    && !/[<>"'`]/.test(v)
    && (k !== 'email' || v === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
    && (!URLS.includes(k) || v === '' || /^https:\/\//.test(v))
    && (k !== 'whatsapp' || /^\d{0,15}$/.test(v));
  const apply = o => { if (o && typeof o === 'object') FIELDS.forEach(k => { if (k in o && ok(k, o[k])) S[k] = o[k]; }); };
  let cached = null;
  try { cached = localStorage.getItem(KEY); apply(JSON.parse(cached)); } catch (_) {}
  if (!PID) return;
  fetch(`https://firestore.googleapis.com/v1/projects/${PID}/databases/(default)/documents/config/site`)
    .then(r => r.ok ? r.json() : null)
    .then(j => {
      if (!j || !j.fields) return;
      const o = {};
      FIELDS.forEach(k => { if (j.fields[k] && 'stringValue' in j.fields[k]) o[k] = j.fields[k].stringValue; });
      const s = JSON.stringify(o);
      if (s === cached) return;
      try {
        localStorage.setItem(KEY, s);
        const n = +sessionStorage.getItem('mks_rl') || 0;
        if (n > 1) return;
        sessionStorage.setItem('mks_rl', n + 1);
      } catch (_) { return; }
      location.reload();   // settings changed since the cached copy: show the new values once
    })
    .catch(() => {});
})();
