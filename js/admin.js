/* MKS Group — admin dashboard (owner only) */
const cfg = window.MKS_FIREBASE || {};
const ADMIN = (window.MKS_ADMIN_EMAIL || '').toLowerCase();
const SDK = 'https://www.gstatic.com/firebasejs/10.12.2/';
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const P = Object.fromEntries((window.MKS?.projects || []).map(p => [p.id, p]));
const pName = id => id ? (P[id]?.ar.title || id) : 'الصفحة الرئيسية';
const fmt = d => d ? d.toLocaleString('ar-EG', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : '—';
const mins = s => s < 60 ? Math.round(s) + ' ث' : Math.round(s / 60) + ' د';
const siteBase = location.href.replace(/admin\.html.*$/, '');

if (!cfg.apiKey) { $('#noconfig').classList.remove('hide'); throw new Error('no firebase config'); }

const { initializeApp } = await import(SDK + 'firebase-app.js');
const { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } = await import(SDK + 'firebase-auth.js');
const { getFirestore, collection, query, where, orderBy, getDocs, getDoc, doc, setDoc, deleteDoc, Timestamp, serverTimestamp } = await import(SDK + 'firebase-firestore.js');
const app = initializeApp(cfg), auth = getAuth(app), db = getFirestore(app);

let days = 30, events = [], clients = [], messages = [];

$('#signin').onclick = async () => {
  try { await signInWithPopup(auth, new GoogleAuthProvider()); }
  catch (e) { $('#loginMsg').textContent = 'تعذر تسجيل الدخول: ' + e.code; }
};
$('#signout').onclick = () => signOut(auth);

onAuthStateChanged(auth, async u => {
  if (!u) { $('#app').classList.add('hide'); $('#login').classList.remove('hide'); return; }
  if ((u.email || '').toLowerCase() !== ADMIN) {
    $('#loginMsg').textContent = 'الحساب ده (' + u.email + ') مش مسموح له يدخل.'; await signOut(auth); return;
  }
  $('#login').classList.add('hide'); $('#app').classList.remove('hide'); $('#me').textContent = u.email;
  await loadAll();
});

// tabs
const titles = { overview: 'المتابعة والمشاهدات', clients: 'لينكات العملاء', messages: 'رسائل التواصل', settings: 'إعدادات الموقع' };
document.querySelectorAll('aside [data-tab]').forEach(b => b.onclick = () => {
  document.querySelectorAll('aside [data-tab]').forEach(x => x.classList.toggle('on', x === b));
  document.querySelectorAll('[data-sec]').forEach(s => s.classList.toggle('hide', s.dataset.sec !== b.dataset.tab));
  $('#pageTitle').textContent = titles[b.dataset.tab];
});
document.querySelectorAll('#range button').forEach(b => b.onclick = async () => {
  document.querySelectorAll('#range button').forEach(x => x.classList.toggle('on', x === b));
  days = +b.dataset.d; await loadAll();
});

async function loadAll() {
  const since = days ? Timestamp.fromMillis(Date.now() - days * 864e5) : Timestamp.fromMillis(0);
  const [ev, cl, ms] = await Promise.all([
    getDocs(query(collection(db, 'events'), where('ts', '>=', since), orderBy('ts', 'desc'))),
    getDocs(collection(db, 'clients')),
    getDocs(query(collection(db, 'messages'), orderBy('ts', 'desc')))
  ]);
  events = ev.docs.map(d => ({ id: d.id, ...d.data(), t: d.data().ts?.toDate?.() }));
  clients = cl.docs.map(d => ({ id: d.id, ...d.data() })).sort((a, b) => (b.created?.seconds || 0) - (a.created?.seconds || 0));
  messages = ms.docs.map(d => ({ id: d.id, ...d.data(), t: d.data().ts?.toDate?.() }));
  renderOverview(); renderClients(); renderMessages();
  if (!setLoaded) await loadSettings();
}

function renderOverview() {
  const views = events.filter(e => e.type === 'view');
  const uniq = new Set(views.map(e => e.vid)).size;
  const pv = views.filter(e => e.page === 'project').length;
  const wa = events.filter(e => e.type === 'wa').length;
  const vw = events.filter(e => e.type === 'viewer').length;
  const durs = events.filter(e => e.type === 'leave').map(e => e.dur || 0);
  const avg = durs.length ? durs.reduce((a, b) => a + b, 0) / durs.length : 0;
  $('#kpis').innerHTML = [['زيارات الموقع', views.length], ['زوار مختلفين', uniq], ['مشاهدات المشاريع', pv], ['فتح عارض اللوحات', vw], ['ضغطات واتساب', wa], ['متوسط مدة الزيارة', mins(avg)]]
    .map(([k, v]) => `<div class="kpi"><span>${k}</span><b>${v}</b></div>`).join('');

  const by = {};
  events.forEach(e => {
    if (!e.project) return;
    const r = by[e.project] || (by[e.project] = { v: 0, u: new Set(), viewer: 0, sheet: 0, wa: 0 });
    if (e.type === 'view') { r.v++; r.u.add(e.vid); }
    if (e.type === 'viewer') r.viewer++;
    if (e.type === 'sheet') r.sheet++;
    if (e.type === 'wa') r.wa++;
  });
  const rows = Object.entries(by).sort((a, b) => b[1].v - a[1].v);
  $('#topProjects').innerHTML = rows.length ? `<table><thead><tr><th>المشروع</th><th>المشاهدات</th><th>زوار مختلفين</th><th>فتح اللوحات</th><th>لوحات اتشافت</th><th>واتساب</th></tr></thead><tbody>
    ${rows.map(([id, r]) => `<tr><td>${esc(pName(id))}</td><td>${r.v}</td><td>${r.u.size}</td><td>${r.viewer}</td><td>${r.sheet}</td><td>${r.wa}</td></tr>`).join('')}</tbody></table>`
    : '<div class="empty">لسه مفيش مشاهدات في الفترة دي.</div>';

  const rec = events.filter(e => e.type === 'view').slice(0, 40);
  $('#recent').innerHTML = rec.length ? `<table><thead><tr><th>الوقت</th><th>الصفحة</th><th>العميل</th><th>الجهاز</th><th>جاي من</th></tr></thead><tbody>
    ${rec.map(e => `<tr><td>${fmt(e.t)}</td><td>${esc(pName(e.project))}</td><td class="lat">${esc(e.client || '—')}</td><td>${e.mobile ? 'موبايل' : 'كمبيوتر'}</td><td>${esc(e.ref || 'مباشر')}</td></tr>`).join('')}</tbody></table>`
    : '<div class="empty">لسه مفيش زيارات.</div>';
}

function clientStats(code) {
  const ev = events.filter(e => e.client === code);
  const projects = new Set(ev.filter(e => e.type === 'view' && e.project).map(e => e.project));
  const time = ev.filter(e => e.type === 'leave').reduce((a, e) => a + (e.dur || 0), 0);
  return { ev, opened: ev.length > 0, last: ev[0]?.t, projects, time, sheets: ev.filter(e => e.type === 'sheet').length, wa: ev.filter(e => e.type === 'wa').length };
}
const linkFor = c => siteBase + (c.target ? 'project.html?id=' + c.target + '&c=' : 'index.html?c=') + encodeURIComponent(c.code);

function renderClients() {
  const sel = $('#targetSel');
  if (sel.options.length === 1) Object.values(P).forEach(p => sel.add(new Option(p.ar.title, p.id)));
  $('#clientsTbl').innerHTML = clients.length ? `<table><thead><tr><th>الكود</th><th>العميل</th><th>الحالة</th><th>آخر فتح</th><th>مشاريع شافها</th><th>لوحات</th><th>المدة</th><th></th></tr></thead><tbody>
    ${clients.map(c => { const s = clientStats(c.code); return `<tr class="click" data-code="${esc(c.code)}">
      <td class="lat" style="font-weight:700">${esc(c.code)}</td><td>${esc(c.name)}<div class="tl">${esc(c.note || '')}</div></td>
      <td><span class="b ${s.opened ? 'y' : 'n'}">${s.opened ? 'فتح اللينك' : 'لم يفتح بعد'}</span></td>
      <td>${fmt(s.last)}</td><td>${s.projects.size}</td><td>${s.sheets}</td><td>${s.time ? mins(s.time) : '—'}</td>
      <td><button class="btn l s" type="button" data-copy="${esc(c.code)}">نسخ اللينك</button> <button class="btn l s" type="button" data-del="${esc(c.code)}">حذف</button></td></tr>`; }).join('')}
    </tbody></table>` : '<div class="empty">لسه مفيش لينكات. اضغط "+ لينك جديد لعميل".</div>';

  document.querySelectorAll('[data-copy]').forEach(b => b.onclick = async ev => {
    ev.stopPropagation(); const c = clients.find(x => x.code === b.dataset.copy);
    await navigator.clipboard.writeText(linkFor(c)); b.textContent = 'اتنسخ ✓'; setTimeout(() => b.textContent = 'نسخ اللينك', 1500);
  });
  document.querySelectorAll('[data-del]').forEach(b => b.onclick = async ev => {
    ev.stopPropagation(); if (!confirm('حذف لينك العميل ' + b.dataset.del + '؟')) return;
    await deleteDoc(doc(db, 'clients', b.dataset.del)); await loadAll();
  });
  document.querySelectorAll('tr[data-code]').forEach(r => r.onclick = () => showClient(r.dataset.code));
}

function showClient(code) {
  const c = clients.find(x => x.code === code), s = clientStats(code), box = $('#clientDetail');
  box.classList.remove('hide');
  const tl = s.ev.slice().reverse().map(e => {
    const what = { view: 'فتح ' + pName(e.project), leave: 'خرج بعد ' + mins(e.dur || 0), sheet: 'شاف لوحة ' + (e.sheet || ''), viewer: 'فتح عارض اللوحات — ' + pName(e.project), wa: 'ضغط واتساب', msg: 'بعت رسالة' }[e.type] || e.type;
    return `<tr><td>${fmt(e.t)}</td><td>${esc(what)}</td></tr>`;
  }).join('');
  box.innerHTML = `<div class="row"><h2>${esc(c.name)} — <span class="lat">${esc(code)}</span></h2><button class="btn l s" type="button" id="closeDetail">إغلاق</button></div>
    <div class="tl" style="margin-bottom:12px;direction:ltr;text-align:right">${esc(linkFor(c))}</div>
    ${tl ? `<div class="tw"><table><thead><tr><th>الوقت</th><th>اللي حصل</th></tr></thead><tbody>${tl}</tbody></table></div>` : '<div class="empty">العميل لسه ما فتحش اللينك في الفترة دي.</div>'}`;
  $('#closeDetail').onclick = () => box.classList.add('hide');
  box.scrollIntoView({ behavior: 'smooth' });
}

$('#newClientBtn').onclick = () => {
  const f = $('#clientForm'); f.classList.remove('hide');
  let n = clients.length + 1, code;
  do { code = 'CL-' + String(n++).padStart(3, '0'); } while (clients.some(c => c.code === code));
  f.code.value = code; f.name.focus();
};
$('#cancelClient').onclick = () => $('#clientForm').classList.add('hide');
$('#clientForm').onsubmit = async e => {
  e.preventDefault(); const f = e.target;
  const code = f.code.value.trim().toUpperCase();
  if (clients.some(c => c.code === code)) { alert('الكود ده موجود قبل كده — اختار كود تاني.'); return; }
  await setDoc(doc(db, 'clients', code), { code, name: f.name.value.trim(), note: f.note.value.trim(), target: f.target.value, created: serverTimestamp() });
  f.reset(); f.classList.add('hide'); await loadAll();
};

function renderMessages() {
  $('#msgsTbl').innerHTML = messages.length ? `<table><thead><tr><th>الوقت</th><th>الاسم</th><th>الموبايل</th><th>الخدمة</th><th>التفاصيل</th><th>العميل</th></tr></thead><tbody>
    ${messages.map(m => `<tr><td>${fmt(m.t)}</td><td>${esc(m.name)}</td><td class="lat" dir="ltr"><a href="https://wa.me/${esc((m.mobile || '').replace(/\D/g, '').replace(/^0/, '20'))}" target="_blank">${esc(m.mobile)}</a></td><td>${esc(m.svc)}</td><td style="white-space:normal;max-width:320px">${esc(m.msg)}</td><td class="lat">${esc(m.client || '—')}</td></tr>`).join('')}</tbody></table>`
    : '<div class="empty">لسه مفيش رسائل.</div>';
}

// ---- site settings (contact data shown on the public site) ----
const SET_FIELDS = ['phone', 'whatsapp', 'email', 'addr_ar', 'addr_en', 'mapsLink', 'mapsEmbedQuery', 'facebook', 'instagram', 'linkedin'];
const SET_URLS = ['mapsLink', 'facebook', 'instagram', 'linkedin'];
let setLoaded = false;
async function loadSettings() {
  const f = $('#setForm'), base = window.MKS?.site || {};
  let saved = {};
  try { const d = await getDoc(doc(db, 'config', 'site')); if (d.exists()) saved = d.data(); } catch (_) {}
  SET_FIELDS.forEach(k => {
    let v = k in saved ? saved[k] : (base[k] ?? '');
    if (k === 'whatsapp' && /^20\d{10}$/.test(v)) v = '0' + v.slice(2);   // show Egyptian numbers as 01...
    f[k].value = v;
  });
  setLoaded = true;
}
$('#setForm').onsubmit = async e => {
  e.preventDefault();
  const f = e.target, out = {}, msg = $('#setMsg');
  for (const k of SET_FIELDS) {
    let v = f[k].value.trim();
    if (/[<>"'`]/.test(v)) { msg.style.color = '#B3261E'; msg.textContent = 'الخانة فيها رموز غير مسموحة: ' + f[k].parentElement.firstChild.textContent; f[k].focus(); return; }
    if (k === 'whatsapp' && v) {
      v = v.replace(/\D/g, '');
      if (/^0\d{10}$/.test(v)) v = '20' + v.slice(1);
      if (!/^\d{8,15}$/.test(v)) { msg.style.color = '#B3261E'; msg.textContent = 'رقم الواتساب غير صحيح.'; f[k].focus(); return; }
    }
    if (SET_URLS.includes(k) && v && !/^https:\/\//.test(v)) { msg.style.color = '#B3261E'; msg.textContent = 'اللينك لازم يبدأ بـ https://'; f[k].focus(); return; }
    if (k === 'email' && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { msg.style.color = '#B3261E'; msg.textContent = 'البريد الإلكتروني غير صحيح.'; f[k].focus(); return; }
    out[k] = v;
  }
  msg.style.color = ''; msg.textContent = 'جارٍ الحفظ…';
  try {
    await setDoc(doc(db, 'config', 'site'), { ...out, updated: serverTimestamp() });
    msg.style.color = '#1F5A33'; msg.textContent = 'تم الحفظ ✓ — التعديلات ظاهرة على الموقع الآن.';
  } catch (err) { msg.style.color = '#B3261E'; msg.textContent = 'تعذر الحفظ: ' + (err.code || err.message); }
};
