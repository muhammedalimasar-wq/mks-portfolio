/* =========================================================
   MKS Group — بيانات الموقع
   projects: مشاريع بالصور (فاضية لحد ما المشاريع الحقيقية توصل)
   references: المشاريع المرجعية (نصوص) من الموقع القديم
   cat: '3d' | 'dwg' | 'site'
   images: صور المشروع (أول صورة = صورة الكارت)
   sheets: اللوحات اللي بتظهر في عارض اللوحات (عليها علامة مائية)
   ========================================================= */
window.MKS = {
  site: {
    phone: '+202-2519-1521',
    whatsapp: '',          // رقم الواتساب بالصيغة الدولية بدون + مثال: 2010XXXXXXXX — فاضي = أزرار الواتساب مخفية
    email: '',
    mapsLink: 'https://maps.app.goo.gl/zZzvpLouM8SrEyyU7',
    mapsEmbedQuery: '29.969979,31.272235',
    facebook: 'https://www.facebook.com/mksgroupco.egy/',
    instagram: 'https://www.instagram.com/mksgroupco.egy/',
    linkedin: '',
    heroImage: 'img/p/kh-05.jpg',
    featured: null,
    stats: [
      { value: 2,  ar: 'قسمان يعملان كفريق واحد', en: 'Divisions working as one' },
      { value: 5,  ar: 'قطاعات نخدمها', en: 'Sectors we serve' },
      { value: 12, ar: 'مشروعًا مرجعيًا', en: 'Reference projects' }
    ],
    serviceImages: { '3d': 'img/p/e13-03.jpg', dwg: 'img/d/mv-11.jpg', site: 'img/p/kh-36.jpg' }
  },

  // مشاريع بالصور — هتتضاف لما المشاريع الحقيقية توصل (نفس الشكل: id, cat '3d'|'dwg'|'site', en/ar, images, sheets...)
  projects: [],

  // cat: res سكني | com تجاري وإداري | pub تعليمي وصحي | ind صناعي وفندقي
  references: [
    { years: '2019–2021', cat: 'res',
      en: { title: 'Residential tower complex', place: 'Hawalli, Kuwait', desc: 'Three 18-floor towers over a three-level basement, with structure and complete finishing. Climbing metal formwork for the cores, a 5-day average floor cycle, handover two months early.' },
      ar: { title: 'مجمع أبراج سكنية', place: 'حولي، الكويت', desc: 'ثلاثة أبراج من 18 طابقًا فوق ثلاثة طوابق بدروم، شاملة الهيكل الإنشائي والتشطيب الكامل. شدات معدنية متسلقة للقلوب، بمتوسط 5 أيام للطابق، وتسليم قبل الموعد بشهرين.' } },
    { years: '2016–2018', cat: 'res',
      en: { title: 'Model villa compound', place: 'Sabah Al-Ahmad City, Kuwait', desc: '48 repetitive villas built with metal formwork, plus infrastructure. Each concrete structure finished in 21 days, with about 15% less material waste.' },
      ar: { title: 'مجمع فلل نموذجية', place: 'مدينة صباح الأحمد، الكويت', desc: '48 فيلا متكررة نُفذت بالشدات المعدنية مع البنية التحتية. كل هيكل خرساني اكتمل في 21 يومًا، مع خفض الهالك في الخامات بنحو 15%.' } },
    { years: '2020–2022', cat: 'com',
      en: { title: 'Office building', place: 'Capital Governorate, Kuwait', desc: 'A 14-floor building: finishing, interior decoration and MEP systems, with full BIM coordination between disciplines.' },
      ar: { title: 'مبنى إداري', place: 'محافظة العاصمة، الكويت', desc: 'مبنى من 14 طابقًا: تشطيبات وديكور داخلي وأنظمة كهروميكانيكية، مع تنسيق كامل بين التخصصات بتقنية BIM.' } },
    { years: '2017–2019', cat: 'pub',
      en: { title: 'Educational complex', place: 'Jahra, Kuwait', desc: 'Three school buildings, a sports hall and playgrounds. Delivered on schedule, before the academic year began.' },
      ar: { title: 'مجمع تعليمي', place: 'الجهراء، الكويت', desc: 'ثلاثة مبانٍ مدرسية وصالة رياضية وملاعب، سُلّمت في موعدها قبل بداية العام الدراسي.' } },
    { years: '2018–2019', cat: 'com',
      en: { title: 'Retail and restaurants center', place: 'Salmiya, Kuwait', desc: 'Turnkey finishing and decor for 40 retail units and restaurants, opened in phases without interrupting operations.' },
      ar: { title: 'مركز تجاري ومطاعم', place: 'السالمية، الكويت', desc: 'تشطيب وديكور تسليم مفتاح لـ 40 محلًا ومطعمًا، افتُتحت على مراحل دون توقف التشغيل.' } },
    { years: '2021–2023', cat: 'pub',
      en: { title: 'Specialized hospital fit-out', place: 'Hawalli, Kuwait', desc: 'Six floors including operating rooms and intensive care, with medical MEP and gases, built to infection-control requirements.' },
      ar: { title: 'تجهيز مستشفى تخصصي', place: 'حولي، الكويت', desc: 'ستة طوابق تشمل غرف العمليات والعناية المركزة، مع أنظمة كهروميكانيكية وغازات طبية وفق متطلبات مكافحة العدوى.' } },
    { years: '2015–2016', cat: 'ind',
      en: { title: 'Factory and warehouses', place: 'Shuwaikh, Kuwait', desc: 'A steel-frame industrial building with high-flatness concrete floors and attached offices, completed in 11 months.' },
      ar: { title: 'مصنع ومستودعات', place: 'الشويخ، الكويت', desc: 'مبنى صناعي بهيكل معدني وأرضيات خرسانية عالية الاستواء ومكاتب ملحقة، اكتمل في 11 شهرًا.' } },
    { years: '2022–2023', cat: 'ind',
      en: { title: 'Four-star hotel renovation', place: 'Fahaheel, Kuwait', desc: '120 rooms, lobbies and halls rehabilitated in phases while the hotel stayed open, with an interior design approved by the brand.' },
      ar: { title: 'تجديد فندق أربع نجوم', place: 'الفحيحيل، الكويت', desc: 'إعادة تأهيل 120 غرفة واللوبيهات والقاعات على مراحل أثناء تشغيل الفندق، بتصميم داخلي معتمد من العلامة الفندقية.' } },
    { years: '', cat: 'res', recent: true,
      en: { title: 'Kaifan private luxury villa', place: 'Kaifan, Kuwait', desc: 'Internal electrical networks, load distribution, decorative ceilings and concealed cove and linear lighting. Handed over with a hotel-grade finish and no outstanding snags.' },
      ar: { title: 'فيلا خاصة فاخرة في كيفان', place: 'كيفان، الكويت', desc: 'شبكات كهرباء داخلية وتوزيع أحمال وأسقف ديكورية وإضاءة مخفية وخطية. سُلّمت بتشطيب فندقي دون أي ملاحظات معلقة.' } },
    { years: '', cat: 'res', recent: true,
      en: { title: 'Al-Shamiya private estate', place: 'Al-Shamiya, Kuwait', desc: 'Insulated underground cabling and a full garden, landscape and boundary-wall lighting system that turned the grounds into an illuminated facade.' },
      ar: { title: 'قصر خاص في الشامية', place: 'الشامية، الكويت', desc: 'كابلات أرضية معزولة ونظام إضاءة متكامل للحديقة واللاندسكيب والأسوار، حوّل الموقع إلى واجهة مضيئة.' } },
    { years: '', cat: 'com', recent: true,
      en: { title: 'Concrete and formwork packages', place: 'Kuwait', desc: 'Reinforced concrete, metal formwork and casting of slabs and columns for multi-story buildings, held to accurate levels and squareness.' },
      ar: { title: 'أعمال الخرسانة والشدات', place: 'الكويت', desc: 'خرسانة مسلحة وشدات معدنية وصب بلاطات وأعمدة لمبانٍ متعددة الطوابق، بمناسيب واستقامة دقيقة.' } },
    { years: '', cat: 'com', recent: true,
      en: { title: 'Turnkey fit-out and smart systems', place: 'Kuwait', desc: 'Complex partitions and gypsum ceilings, HVAC and electrical installations, and smart switching and interface systems.' },
      ar: { title: 'تشطيبات تسليم مفتاح وأنظمة ذكية', place: 'الكويت', desc: 'قواطع معقدة وأسقف جبسية، وتركيبات تكييف وكهرباء، وأنظمة تحكم ذكية.' } }
  ]
};
