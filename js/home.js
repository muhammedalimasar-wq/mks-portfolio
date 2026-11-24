/* MKS Group — home page */
(function () {
  const M = window.MKS, t = M.t, L = M.L, s = M.site;
  const catLabel = c => t('c_' + c);
  const projUrl = id => 'project.html?id=' + id;

  M.header('home');

  // hero
  document.getElementById('heroImg').src = s.heroImage;
  const heroWa = document.getElementById('heroWa');
  heroWa.href = M.wa(); if (s.whatsapp) { heroWa.target = '_blank'; heroWa.rel = 'noopener'; }
  heroWa.addEventListener('click', () => mksTrack('wa', { from: 'hero' }));

  // stats (count up when a real value exists)
  const st = document.getElementById('stats');
  st.innerHTML = s.stats.map(x => `<div class="stat"><b data-to="${x.value ?? ''}">${x.value == null ? '—' : '0'}</b><span>${L(x)}</span></div>`).join('');
  const count = el => {
    const to = +el.dataset.to; if (!to) return;
    const t0 = performance.now(), d = 1800;
    const f = now => { const p = Math.min(1, (now - t0) / d); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))) + (p === 1 ? '+' : ''); if (p < 1) requestAnimationFrame(f); };
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
  document.querySelectorAll('.svc .link').forEach(b => b.onclick = () => { setCat(b.dataset.cat); document.getElementById('work').scrollIntoView({ behavior: 'smooth' }); });

  // featured
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

  // portfolio + filters
  let cat = 'all';
  const cats = ['all', '3d', 'dwg', 'site'];
  const fEl = document.getElementById('filters'), grid = document.getElementById('pgrid');
  fEl.innerHTML = cats.map(c => `<button type="button" data-c="${c}">${t('f_' + c)}</button>`).join('');
  fEl.querySelectorAll('button').forEach(b => b.onclick = () => setCat(b.dataset.c));
  function setCat(c) {
    cat = c;
    fEl.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.c === c));
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

  // map
  document.getElementById('map').src = 'https://www.google.com/maps?q=' + encodeURIComponent(s.mapsEmbedQuery) + '&z=16&output=embed';
  document.getElementById('mapsLink').href = s.mapsLink;

  M.footer();
  M.applyI18n();
  M.reveal();
  M.parallax('.hero-bg', 120);
  M.parallax('.feat .para', 90);
})();
