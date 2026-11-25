/* MKS Group — home page */
(function () {
  const M = window.MKS, t = M.t, L = M.L, s = M.site;
  const catLabel = c => t('c_' + c);
  const projUrl = id => 'project.html?id=' + id;

  M.header('home');

  // hero
  document.getElementById('heroImg').src = s.heroImage;
  const heroWa = document.getElementById('heroWa');
  heroWa.href = M.wa(); if (s.whatsapp) { heroWa.target = '_blank'; heroWa.rel = 'noopener'; } else heroWa.hidden = true;
  heroWa.addEventListener('click', () => mksTrack('wa', { from: 'hero' }));

  // stats (count up when a real value exists)
  const st = document.getElementById('stats');
  st.classList.toggle('n3', s.stats.length === 3);
  st.innerHTML = s.stats.map(x => `<div class="stat"><b data-to="${x.value ?? ''}">${x.value == null ? '—' : '0'}</b><span>${L(x)}</span></div>`).join('');
  const count = el => {
    const to = +el.dataset.to; if (!to) return;
    const t0 = performance.now(), d = 1800;
    const f = now => { const p = Math.min(1, (now - t0) / d); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f); };
    requestAnimationFrame(f);
  };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { io.disconnect(); st.querySelectorAll('b').forEach(count); } }), { threshold: .4 });
    io.observe(st);
  } else st.querySelectorAll('b').forEach(count);

  // services
  const svcs = [['3d', 's1'], ['dwg', 's2'], ['site', 's3']];
  document.getElementById('svcs').innerHTML = svcs.map(([c, k], i) => `
    <div class="svc rv" style="transition-delay:${i * .12}s">
      <div class="im"><img src="${s.serviceImages[c]}" alt="" loading="lazy" style="${c === 'dwg' ? 'object-fit:cover;background:#F4F2EF' : ''}"></div>
      <div class="bd"><div class="num">0${i + 1}</div><h3>${t(k + '_t')}</h3><p>${t(k + '_p')}</p>
      <button class="link" type="button" data-cat="${c}">${t('show_projects')}</button></div>
    </div>`).join('');
  document.querySelectorAll('.svc .link').forEach(b => b.onclick = () => { if (M.projects.length) setCat(b.dataset.cat); document.getElementById('work').scrollIntoView({ behavior: 'smooth' }); });

  // featured (hidden until there are real projects with photos)
  if (!M.projects.length) document.getElementById('featSec').hidden = true;
  else {
  const fp = M.projects.find(p => p.id === s.featured) || M.projects[0];
  document.getElementById('feat').innerHTML = `
    <div class="im"><img class="para" src="${fp.images[0]}" alt="${L(fp).title}" loading="lazy"></div>
    <div class="bd">
      <div class="eyebrow" style="margin:0">${t('featured')}</div>
      <h2>${L(fp).title}</h2>
      <p>${L(fp).desc}</p>
      <div class="kv">
        <div><span>${t('k_type')}</span><b>${L(fp).type}</b></div>
        <div><span>${t('k_place')}</span><b>${L(fp).place}</b></div>
        <div><span>${t('k_area')}</span><b>${fp.area}</b></div>
        <div><span>${t('k_scope')}</span><b>${fp.scope.map(catLabel).join(' + ')}</b></div>
      </div>
      <a class="btn btn-gold" href="${projUrl(fp.id)}" style="align-self:flex-start">${t('see_project')}</a>
    </div>`;

  }

  // portfolio + filters
  let cat = 'all';
  const useRefs = !M.projects.length;
  const cats = useRefs ? ['all', 'res', 'com', 'pub', 'ind'] : ['all', '3d', 'dwg', 'site'];
  if (useRefs) {
    document.getElementById('workH').dataset.i = 'refs_h';
    document.getElementById('workP').dataset.i = 'refs_p';
    document.getElementById('refsNote').dataset.i = 'refs_note';
  }
  const pin = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>';
  const fEl = document.getElementById('filters'), grid = document.getElementById('pgrid');
  fEl.innerHTML = cats.map(c => `<button type="button" data-c="${c}">${t('f_' + c)}</button>`).join('');
  fEl.querySelectorAll('button').forEach(b => b.onclick = () => setCat(b.dataset.c));
  function setCat(c) {
    cat = c;
    fEl.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.c === c));
    if (useRefs) {
      grid.innerHTML = M.references.filter(r => c === 'all' || r.cat === c).map((r, i) => `
      <article class="rcard pop" style="animation-delay:${i * .06}s">
        ${r.recent ? `<span class="tag">${t('recent')}</span>` : `<span class="yr" dir="ltr">${r.years}</span>`}
        <h3 class="t">${L(r).title}</h3>
        <div class="pl">${pin}${L(r).place}</div>
        <p class="d">${L(r).desc}</p>
      </article>`).join('');
      return;
    }
    const list = M.projects.filter(p => c === 'all' || p.cat === c);
    grid.innerHTML = list.map((p, i) => `
      <a class="pcard pop" href="${projUrl(p.id)}" style="animation-delay:${i * .08}s">
        <div class="im"><span class="badge">${catLabel(p.cat)}</span>
          <img src="${p.images[0]}" alt="${L(p).title}" loading="lazy" style="${p.cat === 'dwg' ? 'background:#F4F2EF' : ''}">
          <div class="ov"><span>${t('see_project_arrow')}</span></div></div>
        <div class="bd"><div class="t">${L(p).title}</div><div class="m">${L(p).meta}</div></div>
      </a>`).join('');
  }
  setCat('all');

  // contact
  const ph = document.getElementById('phoneLink'); ph.textContent = s.phone; ph.href = 'tel:' + s.phone.replace(/[^+\d]/g, '');
  const form = document.getElementById('form'), msg = document.getElementById('formMsg');
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form));
    if (!d.name.trim() || !d.mobile.trim()) { msg.style.color = '#E5A0A0'; msg.textContent = t('f_need'); return; }
    if (window.mksSendMessage) {
      try { await mksSendMessage(d); msg.style.color = ''; msg.textContent = t('f_ok'); form.reset(); mksTrack('msg', { from: 'form' }); }
      catch (_) { msg.style.color = '#E5A0A0'; msg.textContent = t('f_err'); }
    } else if (s.whatsapp) {
      location.href = M.wa(`${d.name} — ${d.mobile}\n${d.service}\n${d.msg || ''}`);
    } else { msg.style.color = ''; msg.textContent = t('f_ok'); form.reset(); }
  });

  // social links in the contact box (WhatsApp shows once a number is set)
  const ic = {
    fb: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.7V4.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.7V14h2.7v8z"/></svg>',
    ig: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    wa: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3z"/></svg>'
  };
  const soc = [
    ['fb', s.facebook, 'Facebook'],
    ['ig', s.instagram, 'Instagram'],
    ['wa', s.whatsapp ? M.wa() : '', 'WhatsApp']
  ].filter(x => x[1]);
  document.getElementById('socials').innerHTML = soc.map(([k, u, n]) =>
    `<a class="soc soc-${k}" href="${u}" target="_blank" rel="noopener" aria-label="${n}">${ic[k]}<span>${n}</span></a>`).join('');
  const sw = document.querySelector('.soc-wa'); if (sw) sw.addEventListener('click', () => mksTrack('wa', { from: 'contact' }));

  // map
  document.getElementById('map').src = 'https://www.google.com/maps?q=' + encodeURIComponent(s.mapsEmbedQuery) + '&z=16&output=embed';
  document.getElementById('mapsLink').href = s.mapsLink;

  M.footer();
  M.applyI18n();
  M.reveal();
  M.parallax('.hero-bg', 120);
  M.parallax('.feat .para', 90);
})();
