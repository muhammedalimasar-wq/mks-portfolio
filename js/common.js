/* MKS Group — shared: language, header, footer, reveal animations, WhatsApp */
(function () {
  const T = {
    ar: {
      nav_home: 'الرئيسية', nav_services: 'خدماتنا', nav_work: 'أعمالنا', nav_process: 'طريقة شغلنا', nav_contact: 'تواصل معنا',
      cta_consult: 'اطلب استشارة', lang_btn: 'EN',
      hero_tag: 'ENGINEERING CONSULTANCY & CONTRACTING',
      hero_h1: 'كل مراحل مشروعك… <em>برؤية واحدة.</em>',
      hero_p: 'مجموعة MKS للاستشارات الهندسية والمقاولات العامة: تصميم معماري وداخلي، حلول هندسية، تنفيذ وإشراف في الموقع، وإدارة مشروعك من أول فكرة لحد تسليم المفتاح.',
      see_work: 'شاهد أعمالنا', wa_us: 'تواصل عبر واتساب',
      services: 'خدماتنا', show_projects: 'عرض المشاريع ←',
      s1_t: 'التصميم المعماري والداخلي', s1_p: 'تصميمات 3D واقعية للمساحات الداخلية والواجهات، تساعدك تشوف مشروعك وتعدّل عليه قبل التنفيذ.',
      s2_t: 'الحلول الهندسية', s2_p: 'لوحات تنفيذية وشوب دروينج معماري وإنشائي وميكانيكا، دقيقة وجاهزة للتنفيذ في الموقع.',
      s3_t: 'التنفيذ والإنشاء', s3_p: 'تنفيذ وتشطيب الشقق والفلل والمشروعات التجارية بإشراف هندسي كامل.',
      featured: 'FEATURED PROJECT', k_type: 'النوع', k_place: 'المكان', k_area: 'المساحة', k_scope: 'النطاق', k_year: 'السنة', k_status: 'الحالة',
      see_project: 'شوف المشروع', see_project_arrow: 'شوف المشروع ←',
      process: 'نصمم… ونرسم… <em>ونبني</em>', slogan: 'كل مراحل مشروعك… برؤية واحدة.',
      p1_t: 'المعاينة والفكرة', p1_p: 'نسمع طلبك ونعاين الموقع ونحدد الميزانية ونطاق الشغل.',
      p2_t: 'التصميم 3D', p2_p: 'رندرات واقعية تشوف فيها مشروعك قبل ما يتنفذ وتعدل براحتك.',
      p3_t: 'اللوحات التنفيذية', p3_p: 'معماري وإنشائي وميكانيكا وشوب دروينج جاهزة للموقع.',
      p4_t: 'التنفيذ والتسليم', p4_p: 'تنفيذ بإشراف هندسي كامل لحد تسليم المفتاح.',
      work: 'أعمالنا', f_all: 'الكل', f_3d: 'تصميمات 3D', f_dwg: 'لوحات تنفيذية', f_site: 'مواقع تنفيذية',
      c_3d: 'تصميم 3D', c_dwg: 'لوحات تنفيذية', c_site: 'تنفيذ موقع',
      about: 'من نحن',
      about_p1: 'مجموعة <b>MKS</b> للاستشارات الهندسية والمقاولات العامة، مقرها المعادي الجديدة بالقاهرة. بنؤمن إن المشروع الناجح بيبدأ بتصميم واضح وبيكمل بتنفيذ دقيق، علشان كده بنجمع التصميم والهندسة والتنفيذ في فريق واحد.',
      about_p2: 'بنقدم الخدمة كاملة تحت سقف واحد: من التصميم المعماري والداخلي والرندرات ثلاثية الأبعاد، للوحات التنفيذية والشوب دروينج بكل تخصصاتها المعمارية والإنشائية والميكانيكية، لحد التنفيذ والإشراف في الموقع وتسليم المفتاح. فاللي بتشوفه في الرندر هو نفسه اللي بتستلمه على الطبيعة.',
      about_p3: 'بنشتغل لأصحاب المشاريع مباشرة ومع المكاتب الهندسية، في الشقق والفلل والمشروعات التجارية. والدقة في اللوحات، والالتزام بالمواعيد، والشفافية في التكلفة هي اللي بنتمسك بيه في كل مشروع.',
      contact_h: 'عندك مشروع؟ خلينا نتكلم', contact_p: 'ابعت لنا تفاصيل مشروعك وهنتواصل معاك في أقرب وقت.',
      i_addr: 'العنوان', i_phone: 'تليفون', i_web: 'الموقع',
      addr: 'الدور الأول، مبنى 9، شارع 257، المعادي الجديدة، القاهرة',
      f_name: 'الاسم', f_mobile: 'رقم الموبايل', f_service: 'نوع الخدمة', f_msg: 'تفاصيل المشروع (اختياري)', f_send: 'إرسال',
      f_ok: 'وصلت رسالتك، هنتواصل معاك قريب. شكرًا!', f_err: 'حصلت مشكلة في الإرسال، جرّب تاني أو كلمنا واتساب.', f_need: 'اكتب الاسم ورقم الموبايل.',
      loc_h: 'زورنا في المكتب', loc_open: 'افتح على خرائط جوجل', loc_p: 'الدور الأول، مبنى 9، شارع 257<br>المعادي الجديدة، القاهرة',
      rights: '© MKS Group — جميع الحقوق محفوظة', fb: 'فيسبوك', ig: 'إنستجرام', li: 'لينكدإن',
      crumb_home: 'الرئيسية', crumb_work: 'أعمالنا', want_like: 'عايز مشروع زي ده؟ كلمنا', about_proj: 'عن المشروع', scope: 'نطاق العمل', data: 'بيانات المشروع',
      drawings_h: 'نماذج من اللوحات التنفيذية', drawings_p: 'عينة مختارة من لوحات المشروع — للعرض فقط', show_drawings: 'عرض اللوحات',
      similar: 'مشاريع مشابهة', view_only: 'للعرض فقط — عايز اللوحات كاملة؟', wa_short: 'كلمنا واتساب',
      not_found: 'المشروع ده مش موجود.', back_home: 'ارجع للرئيسية', test_note: 'مشروع تجريبي — للتجربة فقط'
    },
    en: {
      nav_home: 'Home', nav_services: 'Services', nav_work: 'Our work', nav_process: 'Process', nav_contact: 'Contact',
      cta_consult: 'Get a consultation', lang_btn: 'عربي',
      hero_tag: 'ENGINEERING CONSULTANCY & CONTRACTING',
      hero_h1: 'Every Stage of Your Project. <em>One Vision.</em>',
      hero_p: 'MKS Group — Engineering Consultancy & General Contracting: architectural & interior design, engineering solutions, on-site execution and supervision, and management of your project from the first idea to key handover.',
      see_work: 'See our work', wa_us: 'WhatsApp us',
      services: 'Our services', show_projects: 'View projects →',
      s1_t: 'Architectural & Interior Design', s1_p: 'Realistic 3D designs of interiors and facades, so you can see and refine your project before it is built.',
      s2_t: 'Engineering Solutions', s2_p: 'Precise architectural, structural and MEP working and shop drawings, ready for site execution.',
      s3_t: 'Construction & Execution', s3_p: 'Fit-out and finishing of apartments, villas and commercial projects with full engineering supervision.',
      featured: 'FEATURED PROJECT', k_type: 'Type', k_place: 'Location', k_area: 'Area', k_scope: 'Scope', k_year: 'Year', k_status: 'Status',
      see_project: 'View project', see_project_arrow: 'View project →',
      process: 'We design… we detail… <em>we build</em>', slogan: 'Every Stage of Your Project. One Vision.',
      p1_t: 'Survey & concept', p1_p: 'We listen, survey the site and agree on budget and scope.',
      p2_t: '3D design', p2_p: 'Realistic renders so you see the result and adjust freely before execution.',
      p3_t: 'Working drawings', p3_p: 'Architectural, structural, MEP and shop drawings ready for site.',
      p4_t: 'Execution & handover', p4_p: 'Execution under full engineering supervision until handover.',
      work: 'Our work', f_all: 'All', f_3d: '3D designs', f_dwg: 'Working drawings', f_site: 'Site execution',
      c_3d: '3D design', c_dwg: 'Working drawings', c_site: 'Site execution',
      about: 'About us',
      about_p1: '<b>MKS Group</b> is an engineering consultancy and general contracting firm based in New Maadi, Cairo. We believe a successful project starts with a clear design and is delivered through precise execution — so design, engineering and construction work as one team with us.',
      about_p2: 'We take projects from concept to completion under one roof: architectural and interior design with realistic 3D renders, architectural, structural and MEP working and shop drawings, through to on-site execution, supervision and handover. What you see in the render is what you receive on site.',
      about_p3: 'We work directly with owners and alongside engineering offices on apartments, villas and commercial projects — holding every project to accurate drawings, on-time delivery and transparent costs.',
      contact_h: 'Have a project? Let’s talk', contact_p: 'Send us your project details and we will get back to you shortly.',
      i_addr: 'Address', i_phone: 'Phone', i_web: 'Website',
      addr: 'First Floor, Building 9, Street 257, New Maadi, Cairo, Egypt',
      f_name: 'Name', f_mobile: 'Mobile', f_service: 'Service', f_msg: 'Project details (optional)', f_send: 'Send',
      f_ok: 'Message received — we will contact you soon. Thank you!', f_err: 'Something went wrong. Please try again or WhatsApp us.', f_need: 'Please enter your name and mobile.',
      loc_h: 'Visit our office', loc_open: 'Open in Google Maps', loc_p: 'First Floor, Building 9, Street 257<br>New Maadi, Cairo, Egypt',
      rights: '© MKS Group — All rights reserved', fb: 'Facebook', ig: 'Instagram', li: 'LinkedIn',
      crumb_home: 'Home', crumb_work: 'Our work', want_like: 'Want a project like this? Talk to us', about_proj: 'About the project', scope: 'Scope of work', data: 'Project details',
      drawings_h: 'Sample working drawings', drawings_p: 'A selection of the project drawings — view only', show_drawings: 'View drawings',
      similar: 'Similar projects', view_only: 'View only — need the full set?', wa_short: 'WhatsApp us',
      not_found: 'Project not found.', back_home: 'Back to home', test_note: 'Test project — for preview only'
    }
  };

  // safe localStorage (some embedded browsers block it)
  const LS = { get: k => { try { return localStorage.getItem(k); } catch (_) { return null; } },
               set: (k, v) => { try { localStorage.setItem(k, v); } catch (_) {} } };
  window.MKS_LS = LS;
  const qs = new URLSearchParams(location.search);
  let lang = qs.get('lang') || LS.get('mks_lang') || 'ar';
  if (!T[lang]) lang = 'ar';

  // client tracking code (?c=CL-001) is remembered for the whole visit
  const c = qs.get('c');
  if (c && /^[A-Za-z0-9_-]{2,20}$/.test(c)) LS.set('mks_client', c.toUpperCase());

  // tracking stub — calls are queued until js/track.js (Firebase) loads
  window.mksQ = window.mksQ || [];
  window.mksTrack = window.mksTrack || ((type, data) => window.mksQ.push([type, data || {}]));

  const MKS = window.MKS;
  MKS.lang = lang;
  MKS.t = k => (T[lang][k] ?? k);
  MKS.L = obj => (obj && (obj[lang] ?? obj.ar)) || '';
  MKS.client = () => LS.get('mks_client') || null;

  MKS.wa = (text) => {
    const n = MKS.site.whatsapp;
    if (!n) return 'index.html#contact';
    return 'https://wa.me/' + n + (text ? '?text=' + encodeURIComponent(text) : '');
  };

  MKS.applyI18n = function (root) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    (root || document).querySelectorAll('[data-i]').forEach(el => { el.innerHTML = MKS.t(el.dataset.i); });
  };

  MKS.setLang = function (l) { LS.set('mks_lang', l); const u = new URL(location.href); u.searchParams.set('lang', l); location.href = u.toString(); };

  /* reveal on scroll (works in every browser) */
  MKS.reveal = function (root) {
    const els = (root || document).querySelectorAll('.rv:not(.in)');
    if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
    const io = MKS._io || (MKS._io = new IntersectionObserver(es => {
      es.forEach(en => {
        if (!en.isIntersecting) return;
        const el = en.target; io.unobserve(el);
        el.classList.add('in');
        // after the reveal, drop the classes so hover effects work freely
        setTimeout(() => { el.classList.remove('rv', 'in'); el.style.transitionDelay = ''; }, 1400);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }));
    els.forEach(e => io.observe(e));
  };

  /* parallax */
  MKS.parallax = function (sel, amount) {
    const els = [...document.querySelectorAll(sel)];
    if (!els.length || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let ticking = false;
    const run = () => {
      ticking = false;
      const vh = innerHeight;
      els.forEach(el => {
        const r = el.parentElement.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        const p = (r.top + r.height / 2 - vh / 2) / vh; // -1..1
        el.style.transform = 'translate3d(0,' + (p * -amount).toFixed(1) + 'px,0)';
      });
    };
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(run); } }, { passive: true });
    run();
  };

  const waIcon = '<svg width="30" height="30" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3z"/></svg>';

  MKS.header = function (active) {
    const h = document.getElementById('hdr');
    const on = k => (k === active ? ' class="on"' : '');
    h.className = 'hdr';
    h.innerHTML = `
    <div class="wrap">
      <a class="logo" href="index.html" aria-label="MKS Group"><img src="img/brand/logo-white.png" alt="MKS Group"></a>
      <nav class="nav" id="nav" aria-label="Main">
        <a href="index.html#top"${on('home')} data-i="nav_home"></a>
        <a href="index.html#services"${on('services')} data-i="nav_services"></a>
        <a href="index.html#work"${on('work')} data-i="nav_work"></a>
        <a href="index.html#process"${on('process')} data-i="nav_process"></a>
        <a href="index.html#contact"${on('contact')} data-i="nav_contact"></a>
      </nav>
      <div class="hdr-actions">
        <button class="lang" type="button" id="langBtn" data-i="lang_btn"></button>
        <a class="btn btn-gold" href="index.html#contact" data-i="cta_consult" style="padding:11px 20px;font-size:15px"></a>
        <button class="burger" type="button" id="burger" aria-label="Menu" aria-expanded="false"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
      </div>
    </div>`;
    document.getElementById('langBtn').onclick = () => MKS.setLang(lang === 'ar' ? 'en' : 'ar');
    const nav = document.getElementById('nav'), bg = document.getElementById('burger');
    bg.onclick = () => { const o = nav.classList.toggle('open'); bg.setAttribute('aria-expanded', o); };
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
    const onS = () => h.classList.toggle('small', scrollY > 60);
    addEventListener('scroll', onS, { passive: true }); onS();
  };

  MKS.footer = function () {
    const s = MKS.site, f = document.getElementById('ftr');
    f.className = 'ftr';
    const links = [['fb', s.facebook], ['ig', s.instagram], ['li', s.linkedin]].filter(x => x[1])
      .map(([k, u]) => `<a href="${u}" target="_blank" rel="noopener" data-i="${k}"></a>`).join('');
    f.innerHTML = `<div class="wrap"><div class="ftr-brand"><img src="img/brand/icon-white.png" alt="MKS"><span data-i="slogan"></span></div><div data-i="rights"></div><div style="display:flex;gap:20px">${links}</div></div>`;
    if (s.whatsapp) {
      const a = document.createElement('a');
      a.className = 'wa-float'; a.href = MKS.wa(); a.target = '_blank'; a.rel = 'noopener'; a.setAttribute('aria-label', 'WhatsApp');
      a.innerHTML = waIcon; a.addEventListener('click', () => window.mksTrack && mksTrack('wa', { from: 'float' }));
      document.body.appendChild(a);
    }
  };
})();
