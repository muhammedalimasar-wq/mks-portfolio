/* MKS Group — project page, gallery and drawings viewer */
(function () {
  const M = window.MKS, t = M.t, L = M.L;
  const id = new URLSearchParams(location.search).get('id');
  const p = M.projects.find(x => x.id === id);
  const main = document.getElementById('main');
  M.header('work');

  if (!p) {
    main.innerHTML = `<div style="padding:120px 0;text-align:center"><h1 style="font-size:32px;margin-bottom:24px">${t('not_found')}</h1><a class="btn btn-gold" href="index.html">${t('back_home')}</a></div>`;
    M.footer(); M.applyI18n(); return;
  }

  const P = L(p), cat = c => t('c_' + c);
  document.title = 'MKS Group | ' + P.title;
  const waText = (M.lang === 'ar' ? 'مهتم بمشروع: ' : 'Interested in: ') + P.title;

  const similar = M.projects.filter(x => x.id !== p.id && (x.cat === p.cat || x.scope.some(s => p.scope.includes(s)))).slice(0, 3);

  main.innerHTML = `
    <div class="crumb"><a href="index.html">${t('crumb_home')}</a> / <a href="index.html#work">${t('crumb_work')}</a> / <span style="color:var(--tx)">${P.title}</span></div>
    <div class="p-hd">
      <div><span class="tag">${cat(p.cat)}</span><h1>${P.title}</h1>
      ${p.test ? `<div style="margin-top:10px;font-size:13px;color:var(--mut2)">${t('test_note')}</div>` : ''}</div>
      <a class="btn btn-gold" id="pWa" href="${M.wa(waText)}" ${M.site.whatsapp ? 'target="_blank" rel="noopener"' : ''}>${t('want_like')}</a>
    </div>
    <div class="gal-main fu" id="galMain"><img id="galImg" src="${p.images[0]}" alt="${P.title}" style="${p.cat === 'dwg' ? 'object-fit:contain;background:#F4F2EF' : ''}"></div>
    <div class="gal-thumbs" id="galThumbs">
      ${p.images.map((im, i) => `<button type="button" class="${i ? '' : 'on'}" data-g="${i}" aria-label="${i + 1}"><img src="${im}" alt="" loading="lazy"></button>`).join('')}
    </div>

    <div class="p-body">
      <div style="flex:2 1 520px;min-width:0" class="rv">
        <h2>${t('about_proj')}</h2><p>${P.desc}</p>
        <h2 style="margin-top:36px">${t('scope')}</h2>
        <div class="chips">${p.scope.map(s => `<span>${cat(s)}</span>`).join('')}</div>
      </div>
      <aside class="side rv">
        <h2>${t('data')}</h2>
        <dl>
          <dt>${t('k_type')}</dt><dd>${P.type}</dd>
          <dt>${t('k_place')}</dt><dd>${P.place}</dd>
          <dt>${t('k_area')}</dt><dd>${p.area}</dd>
          <dt>${t('k_year')}</dt><dd>${p.year}</dd>
          <dt>${t('k_status')}</dt><dd>${L(p.status)}</dd>
        </dl>
      </aside>
    </div>

    ${p.sheets.length ? `
    <section class="sheets-sec rv" aria-label="${t('drawings_h')}">
      <div class="work-hd" style="margin-bottom:28px">
        <div><div class="eyebrow">DRAWINGS</div><h2 style="font-size:28px;margin-bottom:8px">${t('drawings_h')}</h2>
        <div style="font-size:15px;color:var(--mut2)">${t('drawings_p')}</div></div>
        <button class="btn btn-gold" type="button" id="openViewer">${t('show_drawings')} (${p.sheets.length})</button>
      </div>
      <div class="sheets">
        ${p.sheets.map((s, i) => `<button class="sheet" type="button" data-s="${i}"><div class="im"><img src="${s.img}" alt="" loading="lazy" draggable="false"></div><span><b class="lat" style="color:var(--gold)">${s.code}</b> — ${L(s)}</span></button>`).join('')}
      </div>
    </section>` : ''}

    ${similar.length ? `<h2 style="margin:72px 0 24px;font-size:28px">${t('similar')}</h2>
    <div class="pgrid">${similar.map((x, i) => `
      <a class="pcard rv" href="project.html?id=${x.id}" style="transition-delay:${i * .1}s">
        <div class="im"><span class="badge">${cat(x.cat)}</span><img src="${x.images[0]}" alt="" loading="lazy"><div class="ov"><span>${t('see_project_arrow')}</span></div></div>
        <div class="bd"><div class="t">${L(x).title}</div><div class="m">${L(x).meta}</div></div></a>`).join('')}</div>` : ''}
  `;

  document.getElementById('pWa').addEventListener('click', () => mksTrack('wa', { from: 'project' }));

  // gallery
  const gImg = document.getElementById('galImg');
  document.querySelectorAll('#galThumbs button').forEach(b => b.onclick = () => {
    document.querySelectorAll('#galThumbs button').forEach(x => x.classList.remove('on'));
    b.classList.add('on');
    gImg.style.opacity = 0;
    setTimeout(() => { gImg.onload = () => gImg.style.opacity = 1; gImg.src = p.images[+b.dataset.g]; if (gImg.complete) gImg.style.opacity = 1; }, 200);
  });

  // ---------- drawings viewer ----------
  if (p.sheets.length) {
    const V = document.getElementById('viewer'), img = document.getElementById('vImg'), stage = document.getElementById('vStage');
    const th = document.getElementById('vThumbs');
    let i = 0, z = 1, seen = new Set();
    document.getElementById('vProj').textContent = P.title;
    const vWa = document.getElementById('vWa');
    vWa.href = M.wa(waText); if (M.site.whatsapp) { vWa.target = '_blank'; vWa.rel = 'noopener'; }
    vWa.addEventListener('click', () => mksTrack('wa', { from: 'viewer' }));
    th.innerHTML = p.sheets.map((s, k) => `<button type="button" data-k="${k}" aria-label="${s.code}"><img src="${s.img}" alt="" draggable="false"></button>`).join('');
    th.querySelectorAll('button').forEach(b => b.onclick = () => show(+b.dataset.k));

    function setZoom(nz) {
      z = Math.max(1, Math.min(3, nz));
      document.getElementById('vZoom').textContent = Math.round(z * 100) + '%';
      stage.classList.toggle('zoomed', z > 1);
      if (z > 1) { img.style.width = (stage.clientWidth * .9 * z) + 'px'; } else { img.style.width = ''; }
    }
    function show(k) {
      i = (k + p.sheets.length) % p.sheets.length;
      const s = p.sheets[i];
      img.src = s.img; img.alt = s.code;
      document.getElementById('vTitle').innerHTML = `<span class="lat" style="color:var(--gold)">${s.code}</span> — ${L(s)}`;
      document.getElementById('vCount').textContent = (i + 1) + ' / ' + p.sheets.length;
      th.querySelectorAll('button').forEach((b, n) => b.classList.toggle('on', n === i));
      th.children[i].scrollIntoView({ block: 'nearest', inline: 'center' });
      setZoom(1);
      if (!seen.has(i)) { seen.add(i); mksTrack('sheet', { sheet: s.code }); }
    }
    function open(k) { V.classList.add('open'); document.body.style.overflow = 'hidden'; mksTrack('viewer', {}); show(k || 0); }
    function close() { V.classList.remove('open'); document.body.style.overflow = ''; }
    // RTL: "previous" arrow is on the right
    document.getElementById('vPrev').onclick = () => show(i - 1);
    document.getElementById('vNext').onclick = () => show(i + 1);
    document.getElementById('vIn').onclick = () => setZoom(z + .5);
    document.getElementById('vOut').onclick = () => setZoom(z - .5);
    document.getElementById('vClose').onclick = close;
    document.getElementById('openViewer').onclick = () => open(0);
    document.querySelectorAll('.sheet').forEach(b => b.onclick = () => open(+b.dataset.s));
    addEventListener('keydown', e => {
      if (!V.classList.contains('open')) return;
      const rtl = document.documentElement.dir === 'rtl';
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(rtl ? i + 1 : i - 1);
      if (e.key === 'ArrowRight') show(rtl ? i - 1 : i + 1);
    });
    // swipe on phones
    let x0 = null;
    stage.addEventListener('touchstart', e => { if (z === 1) x0 = e.touches[0].clientX; }, { passive: true });
    stage.addEventListener('touchend', e => {
      if (x0 == null) return; const dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 50) { const rtl = document.documentElement.dir === 'rtl'; show(i + ((dx < 0) !== rtl ? 1 : -1)); }
    });
    // discourage saving the drawings
    [V, document.querySelector('.sheets-sec')].forEach(el => el && el.addEventListener('contextmenu', e => e.preventDefault()));
  }

  M.footer();
  M.applyI18n();
  M.reveal();
})();
