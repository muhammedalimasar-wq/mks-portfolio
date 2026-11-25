/* MKS Group — shared: language, header, footer, reveal animations, WhatsApp */
(function () {
  const T = {
    ar: {
      nav_home: 'الرئيسية', nav_services: 'خدماتنا', nav_work: 'أعمالنا', nav_process: 'منهجية العمل', nav_contact: 'تواصل معنا', nav_about: 'من نحن',
      cta_consult: 'اطلب استشارة', lang_btn: 'EN', lang_aria: 'Switch to English',
      meta_title: 'MKS Group | كل مراحل مشروعك… برؤية واحدة.',
      hero_tag: 'ENGINEERING CONSULTANCY & CONTRACTING',
      hero_h1: 'كل مراحل مشروعك… <em>برؤية واحدة.</em>',
      hero_p: 'مجموعة MKS للاستشارات الهندسية والمقاولات العامة: تصميم معماري وداخلي، وحلول هندسية، وتنفيذ وإشراف في الموقع، وإدارة لمشروعك من الفكرة الأولى حتى تسليم المفتاح.',
      see_work: 'شاهد أعمالنا', wa_us: 'تواصل عبر واتساب',
      services: 'خدماتنا', show_projects: 'عرض المشاريع ←',
      s1_t: 'التصميم المعماري والداخلي', s1_p: 'تصميمات ثلاثية الأبعاد واقعية للمساحات الداخلية والواجهات، تتيح لك رؤية مشروعك وتعديله قبل التنفيذ.',
      s2_t: 'الحلول الهندسية', s2_p: 'لوحات تنفيذية ولوحات ورشة معمارية وإنشائية وكهروميكانيكية، دقيقة وجاهزة للتنفيذ في الموقع.',
      s3_t: 'التنفيذ والإنشاء', s3_p: 'تنفيذ وتشطيب الشقق والفلل والمشروعات التجارية بإشراف هندسي كامل.',
      svd_h: 'حلول متكاملة لكل مساحة',
      d1_t: 'الأعمال المدنية والإنشائية', d1_p: 'حفر وأساسات خرسانية وأعمدة وبلاطات وحوائط ساندة ومبانٍ وعزل وواجهات.',
      d2_t: 'تشطيبات تسليم مفتاح', d2_p: 'تصميم داخلي وأسقف جبسية ونجارة وحجر وأرضيات وإضاءة ديكورية للمكاتب والقاعات والفلل.',
      d3_t: 'الكهروميكانيكا والطاقة الذكية', d3_p: 'لوحات توزيع وكابلات وسباكة ومكافحة حريق وتنسيق التكييف، مخطط حول الهيكل الإنشائي.',
      d4_t: 'إضاءة اللاندسكيب', d4_p: 'إضاءة الحدائق والواجهات والأسوار بكابلات أرضية معزولة تحوّل المساحات الخارجية إلى عمارة.',
      d5_t: 'الهندسة واللوحات', d5_p: 'تنسيق ثلاثي الأبعاد وBIM، واكتشاف التعارضات، ولوحات الورشة، ولوحات التنفيذ الفعلي، والهندسة القيمية.',
      d6_t: 'الشدات المعدنية', d6_p: 'شدات ألومنيوم وصلب، وشدات متسلقة ومنزلقة، وأساليب ترشيد تختصر زمن تنفيذ الطابق.',
      featured: 'FEATURED PROJECT', k_type: 'النوع', k_place: 'المكان', k_area: 'المساحة', k_scope: 'النطاق', k_year: 'السنة', k_status: 'الحالة',
      see_project: 'عرض المشروع', see_project_arrow: 'عرض المشروع ←',
      process: 'نصمم… ونرسم… <em>ونبني</em>', slogan: 'كل مراحل مشروعك… برؤية واحدة.',
      proc_p: 'يبدأ معظم التأخير وإعادة العمل من مرحلة اللوحات لا من الموقع، لذلك نركّز انضباطنا هناك: نبني المشروع على الشاشة أولًا.',
      p1_t: 'مراجعة المستندات', p1_p: 'مراجعة قابلية التنفيذ والمقايسات للوحات والمواصفات، ليتضح نطاق العمل قبل البدء.',
      p2_t: 'التنسيق ثلاثي الأبعاد', p2_p: 'دمج النماذج الإنشائية والمعمارية والكهروميكانيكية وحل التعارضات على الشاشة بتقارير موثقة.',
      p3_t: 'إصدار لوحات الورشة', p3_p: 'لوحات منسقة للشدات والتسليح والفتحات والأسقف والنجارة ومسارات الخدمات، تُقدَّم للاستشاري للاعتماد.',
      p4_t: 'اعتماد الخامات والنماذج', p4_p: 'اعتماد العينات وطرق التنفيذ والنماذج بالحجم الطبيعي قبل التوريد.',
      p5_t: 'التنفيذ بنقاط فحص', p5_p: 'لا تبدأ مرحلة قبل اجتياز سابقتها للفحص، مع تقارير دورية للتقدم والجودة والسلامة.',
      p6_t: 'الاختبار والتسليم والدعم', p6_p: 'التشغيل التجريبي ومعالجة الملاحظات ولوحات التنفيذ الفعلي، ثم أدلة التشغيل والضمانات والدعم خلال فترة الضمان.',
      work: 'أعمالنا', f_all: 'الكل', f_3d: 'تصميمات 3D', f_dwg: 'لوحات تنفيذية', f_site: 'مواقع تنفيذية',
      refs_h: 'مشاريع مختارة', refs_p: 'أعمال نفّذها فريقنا في الكويت في القطاعات السكنية والإدارية والتعليمية والصحية والتجارية والصناعية والفندقية.',
      f_res: 'سكني', f_com: 'تجاري وإداري', f_pub: 'تعليمي وصحي', f_ind: 'صناعي وفندقي', recent: 'أعمال حديثة', refs_note: 'مراجع المشاريع متاحة عند الطلب.', stats_label: 'أرقام',
      c_3d: 'تصميم 3D', c_dwg: 'لوحات تنفيذية', c_site: 'تنفيذ موقع',
      o_1: 'التصميم المعماري والداخلي', o_2: 'الحلول الهندسية واللوحات', o_3: 'التنفيذ والإنشاء', o_4: 'أخرى',
      about: 'من نحن', about_h2: 'الدقة مصدر إلهامنا… والاستدامة غايتنا.',
      about_p1: 'مجموعة <b>MKS</b> للاستشارات الهندسية والمقاولات العامة، ومقرها المعادي الجديدة بالقاهرة. نؤمن بأن المشروع الناجح يبدأ بتصميم واضح ويكتمل بتنفيذ دقيق، لذلك نجمع التصميم والهندسة والتنفيذ في فريق واحد.',
      about_bg: 'بدأ فريقنا مسيرته بتنفيذ مشروعات سكنية وتجارية وصحية وصناعية في الكويت، ثم أسسنا MKS Group لننقل الأسلوب الهندسي الموثّق نفسه إلى مصر، بمكتب تصميم مرخّص وفريق موقع وفريق جودة تحت سقف واحد.',
      about_p2: 'نقدّم الخدمة كاملة: من التصميم المعماري والداخلي والرندرات ثلاثية الأبعاد، إلى اللوحات التنفيذية ولوحات الورشة بكل تخصصاتها، وصولًا إلى التنفيذ والإشراف في الموقع وتسليم المفتاح. فما تراه في الرندر هو ما تستلمه على أرض الواقع.',
      about_p3: 'نعمل مع أصحاب المشاريع مباشرة ومع المكاتب الهندسية، في الشقق والفلل والمشروعات التجارية، ونلتزم في كل مشروع بدقة اللوحات واحترام المواعيد والشفافية في التكلفة.',
      v1_t: 'الشفافية في التقارير', v1_p: 'الصورة الهندسية كاملة في كل مرحلة.',
      v2_t: 'صحيح من المرة الأولى', v2_p: 'نقاط فحص قبل الانتقال إلى أي مرحلة.',
      v3_t: 'فريق واحد مسؤول', v3_p: 'التصميم والتنفيذ والتشطيب معًا.',
      comm_h: 'نحترم العقود… ونفي بالوعود.', comm_p: 'نقدّم حلول المقاولات العامة والهندسة المتكاملة في موعدها وبالمواصفات الدقيقة، مع أنظمة الجودة والسلامة التي تثبت ذلك.',
      sec1: 'المطورون العقاريون', sec2: 'الشركات والقطاع التجاري', sec3: 'القطاع الصناعي', sec4: 'المساكن الخاصة الفاخرة', sec5: 'الجهات الحكومية',
      team_h: 'الفريق وراء MKS',
      t1_n: 'شريف شمعون', t1_r: 'شريك مؤسس والرئيس التنفيذي',
      t2_n: 'كمال سليمان', t2_r: 'شريك مؤسس وعضو مجلس الإدارة',
      t3_n: 'مرزوق المرزوق', t3_r: 'شريك مؤسس وعضو مجلس الإدارة',
      t4_n: 'مينا كمال', t4_r: 'المدير المالي',
      contact_h: 'لديك مشروع؟ دعنا نبدأ معًا', contact_p: 'أرسل لنا تفاصيل مشروعك وسنتواصل معك في أقرب وقت.',
      i_addr: 'العنوان', i_phone: 'الهاتف', i_web: 'الموقع', i_email: 'البريد',
      addr: 'الدور الأول، مبنى 9، شارع 257، المعادي الجديدة، القاهرة',
      f_name: 'الاسم', f_mobile: 'رقم الموبايل', f_service: 'نوع الخدمة', f_msg: 'تفاصيل المشروع (اختياري)', f_send: 'إرسال',
      f_ok: 'تم استلام رسالتك، وسنتواصل معك قريبًا. شكرًا لك!', f_err: 'حدثت مشكلة في الإرسال، يُرجى المحاولة مرة أخرى أو الاتصال بنا.', f_need: 'يُرجى كتابة الاسم ورقم الموبايل.',
      loc_h: 'تفضل بزيارتنا', loc_open: 'افتح على خرائط جوجل', loc_p: 'الدور الأول، مبنى 9، شارع 257<br>المعادي الجديدة، القاهرة',
      rights: '© MKS Group — جميع الحقوق محفوظة', reg: 'سجل تجاري 45355 · بطاقة ضريبية 774-172-932', fb: 'فيسبوك', ig: 'إنستجرام', li: 'لينكدإن',
      crumb_home: 'الرئيسية', crumb_work: 'أعمالنا', want_like: 'تريد مشروعًا مماثلًا؟ تواصل معنا', about_proj: 'عن المشروع', scope: 'نطاق العمل', data: 'بيانات المشروع',
      drawings_h: 'نماذج من اللوحات التنفيذية', drawings_p: 'عينة مختارة من لوحات المشروع — للعرض فقط', show_drawings: 'عرض اللوحات',
      similar: 'مشاريع مشابهة', view_only: 'للعرض فقط — للحصول على المجموعة الكاملة تواصل معنا', wa_short: 'تواصل عبر واتساب',
      not_found: 'هذا المشروع غير موجود.', back_home: 'العودة للرئيسية', test_note: 'مشروع تجريبي'
    },
    en: {
      nav_home: 'Home', nav_services: 'Services', nav_work: 'Our work', nav_process: 'Process', nav_contact: 'Contact', nav_about: 'About',
      cta_consult: 'Get a consultation', lang_btn: 'عربي', lang_aria: 'التحويل إلى العربية',
      meta_title: 'MKS Group | Every Stage of Your Project. One Vision.',
      hero_tag: 'ENGINEERING CONSULTANCY & CONTRACTING',
      hero_h1: 'Every Stage of Your Project. <em>One Vision.</em>',
      hero_p: 'MKS Group — Engineering Consultancy & General Contracting: architectural & interior design, engineering solutions, on-site execution and supervision, and management of your project from the first idea to key handover.',
      see_work: 'See our work', wa_us: 'Chat on WhatsApp',
      services: 'Our services', show_projects: 'View projects →',
      s1_t: 'Architectural & Interior Design', s1_p: 'Realistic 3D designs of interiors and facades, so you can see and refine your project before it is built.',
      s2_t: 'Engineering Solutions', s2_p: 'Precise architectural, structural and MEP working and shop drawings, ready for site execution.',
      s3_t: 'Construction & Execution', s3_p: 'Fit-out and finishing of apartments, villas and commercial projects with full engineering supervision.',
      svd_h: 'Complete solutions for every space',
      d1_t: 'Civil and structural', d1_p: 'Excavation, concrete foundations, columns and slabs, retaining walls, masonry, waterproofing and facades.',
      d2_t: 'Turnkey finishing', d2_p: 'Interior design, gypsum ceilings, joinery, stone, flooring and decorative lighting for offices, venues and villas.',
      d3_t: 'MEP and smart power', d3_p: 'Distribution boards, power cabling, plumbing, firefighting and HVAC coordination, planned around the structure.',
      d4_t: 'Landscape lighting', d4_p: 'Garden, facade and boundary lighting with insulated underground cabling that turns outdoor space into architecture.',
      d5_t: 'Engineering and drawings', d5_p: '3D and BIM coordination, clash detection, shop drawings, as-built records and value engineering.',
      d6_t: 'Metal formwork', d6_p: 'Aluminum and steel system formwork, climbing and slip forms and lean methods that shorten the floor cycle.',
      featured: 'FEATURED PROJECT', k_type: 'Type', k_place: 'Location', k_area: 'Area', k_scope: 'Scope', k_year: 'Year', k_status: 'Status',
      see_project: 'View project', see_project_arrow: 'View project →',
      process: 'We design… we detail… <em>we build</em>', slogan: 'Every Stage of Your Project. One Vision.',
      proc_p: 'Most delay and rework starts at the drawing stage, not on site, so that is where we put our discipline: we build it on screen first.',
      p1_t: 'Review the tender', p1_p: 'Constructability and BOQ review of the drawings and specifications, so scope is clear before work begins.',
      p2_t: 'Coordinate in 3D', p2_p: 'Structural, architectural and MEP models are overlaid and clashes are resolved on screen with documented reports.',
      p3_t: 'Issue shop drawings', p3_p: 'Coordinated drawings for formwork, reinforcement, openings, ceilings, joinery and service routes go to the consultant for approval.',
      p4_t: 'Approve materials and mock-ups', p4_p: 'Samples, method statements and full-scale mock-ups are signed off before bulk procurement.',
      p5_t: 'Build under hold points', p5_p: 'Each stage passes inspection before the next starts, with regular progress, quality and safety reports.',
      p6_t: 'Test, hand over, support', p6_p: 'Commissioning, snagging and as-built drawings, then O&M manuals, warranties and support during the defects period.',
      work: 'Our work', f_all: 'All', f_3d: '3D designs', f_dwg: 'Working drawings', f_site: 'Site execution',
      refs_h: 'Selected projects', refs_p: 'Work our team delivered in Kuwait across residential, administrative, education, healthcare, commercial, industrial and hospitality sectors.',
      f_res: 'Residential', f_com: 'Commercial & offices', f_pub: 'Education & healthcare', f_ind: 'Industrial & hospitality', recent: 'Recent work', refs_note: 'Project references are available on request.', stats_label: 'Key figures',
      c_3d: '3D design', c_dwg: 'Working drawings', c_site: 'Site execution',
      o_1: 'Architectural & interior design', o_2: 'Engineering solutions & drawings', o_3: 'Construction & execution', o_4: 'Other',
      about: 'About us', about_h2: 'Inspired by precision. Built to last.',
      about_p1: '<b>MKS Group</b> is an engineering consultancy and general contracting firm based in New Maadi, Cairo. We believe a successful project starts with a clear design and is delivered through precise execution — so design, engineering and construction work as one team with us.',
      about_bg: 'We began our careers delivering residential, commercial, healthcare and industrial projects in Kuwait. We founded MKS Group to bring the same engineering-led, documented way of working to Egypt, with a licensed design office, a site team and a quality team under one roof.',
      about_p2: 'We take projects from concept to completion: architectural and interior design with realistic 3D renders, architectural, structural and MEP working and shop drawings, through to on-site execution, supervision and handover. What you see in the render is what you receive on site.',
      about_p3: 'We work directly with owners and alongside engineering offices on apartments, villas and commercial projects — holding every project to accurate drawings, on-time delivery and transparent costs.',
      v1_t: 'Honest reporting', v1_p: 'The full engineering picture at every stage.',
      v2_t: 'Right first time', v2_p: 'Hold points before each stage moves on.',
      v3_t: 'One accountable team', v3_p: 'Design, build and finish together.',
      comm_h: 'Honor the contracts. Keep the promises.', comm_p: 'We deliver integrated general contracting and engineering solutions on time and to the exact specification, with the quality and safety systems to prove it.',
      sec1: 'Real estate developers', sec2: 'Corporate and commercial', sec3: 'Industrial', sec4: 'Private luxury residences', sec5: 'Government',
      team_h: 'The people behind MKS',
      t1_n: 'Sherif Shamoun', t1_r: 'Co-Founder and Chief Executive Officer',
      t2_n: 'Kamal Soliman', t2_r: 'Co-Founder and Board Member',
      t3_n: 'Marzouq Elmarzouq', t3_r: 'Co-Founder and Board Member',
      t4_n: 'Mina Kamal', t4_r: 'Chief Financial Officer',
      contact_h: 'Have a project? Let’s talk', contact_p: 'Send us your project details and we will get back to you shortly.',
      i_addr: 'Address', i_phone: 'Phone', i_web: 'Website', i_email: 'Email',
      addr: 'First Floor, Building 9, Street 257, New Maadi, Cairo, Egypt',
      f_name: 'Name', f_mobile: 'Mobile', f_service: 'Service', f_msg: 'Project details (optional)', f_send: 'Send',
      f_ok: 'Message received — we will contact you soon. Thank you!', f_err: 'Something went wrong. Please try again or call us.', f_need: 'Please enter your name and mobile.',
      loc_h: 'Visit our office', loc_open: 'Open in Google Maps', loc_p: 'First Floor, Building 9, Street 257<br>New Maadi, Cairo, Egypt',
      rights: '© MKS Group — All rights reserved', reg: 'Commercial Reg. No. 45355 · Tax Card No. 774-172-932', fb: 'Facebook', ig: 'Instagram', li: 'LinkedIn',
      crumb_home: 'Home', crumb_work: 'Our work', want_like: 'Want a project like this? Talk to us', about_proj: 'About the project', scope: 'Scope of work', data: 'Project details',
      drawings_h: 'Sample working drawings', drawings_p: 'A selection of the project drawings — view only', show_drawings: 'View drawings',
      similar: 'Similar projects', view_only: 'View only — contact us for the full set', wa_short: 'Chat on WhatsApp',
      not_found: 'Project not found.', back_home: 'Back to home', test_note: 'Test project'
    }
  };


  // safe localStorage (some embedded browsers block it)
  const LS = { get: k => { try { return localStorage.getItem(k); } catch (_) { return null; } },
               set: (k, v) => { try { localStorage.setItem(k, v); } catch (_) {} } };
  window.MKS_LS = LS;
  const qs = new URLSearchParams(location.search);
  let lang = qs.get('lang') || LS.get('mks_lang') || 'en';
  if (!T[lang]) lang = 'en';

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
        <a href="index.html#about"${on('about')} data-i="nav_about"></a>
        <a href="index.html#contact"${on('contact')} data-i="nav_contact"></a>
      </nav>
      <div class="hdr-actions">
        <button class="lang" type="button" id="langBtn" data-i="lang_btn" aria-label="${MKS.t('lang_aria')}"></button>
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
    f.innerHTML = `<div class="wrap"><div class="ftr-brand"><img src="img/brand/icon-white.png" alt="MKS"><span data-i="slogan"></span></div><div data-i="rights"></div><div style="display:flex;gap:20px;align-items:center"><a class="ftr-mail" href="mailto:info@mksgroupco.com" dir="ltr">info@mksgroupco.com</a>${links}</div><div class="ftr-reg" data-i="reg"></div></div>`;
    if (s.whatsapp) {
      const a = document.createElement('a');
      a.className = 'wa-float'; a.href = MKS.wa(); a.target = '_blank'; a.rel = 'noopener'; a.setAttribute('aria-label', 'WhatsApp');
      a.innerHTML = waIcon; a.addEventListener('click', () => window.mksTrack && mksTrack('wa', { from: 'float' }));
      document.body.appendChild(a);
    }
  };
})();
