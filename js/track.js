/* MKS Group — view tracking (Firebase Firestore). Loaded as a module. */
const cfg = window.MKS_FIREBASE || {};
const SDK = 'https://www.gstatic.com/firebasejs/10.12.2/';

function vid() {
  let v = (window.MKS_LS?window.MKS_LS.get('mks_vid'):null);
  if (!v) { v = Math.random().toString(36).slice(2, 10) + Date.now().toString(36); window.MKS_LS && window.MKS_LS.set('mks_vid', v); }
  return v;
}

async function boot() {
  if (!cfg.apiKey || !cfg.projectId) { window.mksTrack = () => {}; window.mksSendMessage = null; return; }
  const { initializeApp } = await import(SDK + 'firebase-app.js');
  const { getFirestore, collection, addDoc, serverTimestamp } = await import(SDK + 'firebase-firestore.js');
  const app = initializeApp(cfg);
  const db = getFirestore(app);
  const page = window.MKS_PAGE || { page: 'home', project: null };
  const sid = Math.random().toString(36).slice(2, 10);
  const base = () => ({
    page: page.page, project: page.project || null,
    client: ((window.MKS_LS ? window.MKS_LS.get('mks_client') : null) || null),
    vid: vid(), sid, lang: document.documentElement.lang || 'ar',
    mobile: matchMedia('(max-width: 760px)').matches,
    ref: (document.referrer && !document.referrer.includes(location.host)) ? new URL(document.referrer).host.slice(0, 80) : '',
    ts: serverTimestamp()
  });
  const clean = d => {
    const o = {};
    if (typeof d.sheet === 'string') o.sheet = d.sheet.slice(0, 40);
    if (typeof d.from === 'string') o.from = d.from.slice(0, 40);
    if (typeof d.dur === 'number') o.dur = Math.min(Math.round(d.dur), 86400);
    return o;
  };
  const send = (type, d) => addDoc(collection(db, 'events'), { type, ...base(), ...clean(d || {}) }).catch(() => {});
  window.mksTrack = send;

  window.mksSendMessage = (m) => addDoc(collection(db, 'messages'), {
    name: String(m.name || '').slice(0, 80), mobile: String(m.mobile || '').slice(0, 30),
    svc: String(m.service || '').slice(0, 60), msg: String(m.msg || '').slice(0, 1500),
    client: (window.MKS_LS ? window.MKS_LS.get('mks_client') : null) || null, lang: document.documentElement.lang || 'ar',
    ts: serverTimestamp()
  });

  // page view + time on page
  send('view');
  const t0 = Date.now(); let sent = false;
  const leave = () => { if (sent) return; sent = true; send('leave', { dur: (Date.now() - t0) / 1000 }); };
  addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') leave(); });
  addEventListener('pagehide', leave);

  (window.mksQ || []).forEach(([t, d]) => send(t, d));
  window.mksQ = [];
}
boot().catch(e => console.warn('tracking off:', e));
