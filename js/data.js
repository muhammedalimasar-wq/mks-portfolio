/* =========================================================
   MKS Group — بيانات الموقع
   كل المشاريع هنا تجريبية (TEST) وهتتبدل بالمشاريع الحقيقية.
   cat: '3d' | 'dwg' | 'site'
   images: صور المشروع (أول صورة = صورة الكارت)
   sheets: اللوحات اللي بتظهر في عارض اللوحات (عليها علامة مائية)
   ========================================================= */
window.MKS = {
  site: {
    phone: '+202-2519-1521',
    whatsapp: '200000000000',          // رقم الواتساب بالصيغة الدولية بدون + مثال: 2010XXXXXXXX
    email: '',
    mapsLink: 'https://maps.app.goo.gl/zZzvpLouM8SrEyyU7',
    mapsEmbedQuery: '29.969979,31.272235',
    facebook: 'https://www.facebook.com/mksgroupco.egy/',
    instagram: '',
    linkedin: '',
    heroImage: 'img/p/kh-05.jpg',
    featured: 'p2',
    stats: [ // null = يظهر "—" لحد ما الرقم الحقيقي يتحط
      { value: null, ar: 'سنة خبرة', en: 'Years of experience' },
      { value: null, ar: 'مشروع منفذ', en: 'Completed projects' },
      { value: null, ar: 'فيلا وشقة', en: 'Villas & apartments' },
      { value: null, ar: 'لوحة تنفيذية', en: 'Working drawings' }
    ],
    serviceImages: { '3d': 'img/p/e13-03.jpg', dwg: 'img/d/mv-11.jpg', site: 'img/p/kh-36.jpg' }
  },

  projects: [
    {
      id: 'p1', cat: '3d', test: true,
      ar: { title: 'شقة سكنية مودرن (تجريبي)', type: 'شقة', place: 'القاهرة الجديدة', meta: 'شقة — تصميم داخلي 3D',
            desc: 'تصميم داخلي كامل لشقة سكنية بألوان هادية من البيج والرمادي، مع إضاءة مخفية وخامات طبيعية في الريسبشن والمطبخ وغرف النوم.' },
      en: { title: 'Modern Apartment (test)', type: 'Apartment', place: 'New Cairo', meta: 'Apartment — 3D interior design',
            desc: 'Full interior design for a residential apartment in calm beige and grey tones, with hidden lighting and natural materials.' },
      area: '—', year: '—', status: { ar: 'تصميم', en: 'Design' },
      scope: ['3d'],
      images: ['img/p/e13-02.jpg','img/p/e13-03.jpg','img/p/e13-05.jpg','img/p/e13-13.jpg','img/p/e13-16.jpg','img/p/e13-20.jpg','img/p/e13-28.jpg','img/p/e13-31.jpg','img/p/e13-35.jpg'],
      sheets: []
    },
    {
      id: 'p2', cat: '3d', test: true,
      ar: { title: 'شقة P-3 (تجريبي)', type: 'شقة', place: 'القاهرة', meta: 'شقة — تصميم داخلي + لوحات',
            desc: 'إعادة تصميم شقة P-3 بالكامل: تعديل حوائط، ريسبشن وسفرة مفتوحين، ومطبخ وغرف نوم بتفاصيل خشب وإضاءة دافية.' },
      en: { title: 'Apartment P-3 (test)', type: 'Apartment', place: 'Cairo', meta: 'Apartment — interior + drawings',
            desc: 'Complete redesign of apartment P-3: wall changes, open reception and dining, warm wood details and lighting.' },
      area: '—', year: '—', status: { ar: 'تصميم', en: 'Design' },
      scope: ['3d','dwg'],
      images: ['img/p/mv-06.jpg','img/p/mv-02.jpg','img/p/mv-04.jpg','img/p/mv-09.jpg','img/p/mv-12.jpg','img/p/mv-16.jpg','img/p/mv-21.jpg','img/p/mv-26.jpg','img/p/mv-30.jpg'],
      sheets: [
        { code: 'A-101', ar: 'المسقط العام', en: 'General plan', img: 'img/d/mv-01.jpg' },
        { code: 'A-102', ar: 'مسقط — غرفة المعيشة', en: 'Plan — living room', img: 'img/d/mv-11.jpg' },
        { code: 'A-103', ar: 'مسقط — غرفة نوم 2', en: 'Plan — bedroom 2', img: 'img/d/mv-15.jpg' },
        { code: 'A-104', ar: 'مسقط — غرفة النوم الرئيسية', en: 'Plan — master bedroom', img: 'img/d/mv-20.jpg' },
        { code: 'A-105', ar: 'مسقط — الحمام', en: 'Plan — bathroom', img: 'img/d/mv-27.jpg' }
      ]
    },
    {
      id: 'p3', cat: '3d', test: true,
      ar: { title: 'شقة V4 (تجريبي)', type: 'شقة', place: 'الجيزة', meta: 'شقة — تصميم داخلي 3D',
            desc: 'شقة V4 بتصميم عصري: ريسبشن واسع، سفرة، مطبخ مفتوح، غرف نوم أطفال بألوان مبهجة، وبلكونة بجلسة خضرا.' },
      en: { title: 'Apartment V4 (test)', type: 'Apartment', place: 'Giza', meta: 'Apartment — 3D interior design',
            desc: 'Contemporary design for apartment V4: wide reception, dining, open kitchen, kids rooms and a green balcony lounge.' },
      area: '—', year: '—', status: { ar: 'تصميم', en: 'Design' },
      scope: ['3d','dwg'],
      images: ['img/p/kh-05.jpg','img/p/kh-03.jpg','img/p/kh-04.jpg','img/p/kh-08.jpg','img/p/kh-09.jpg','img/p/kh-17.jpg','img/p/kh-25.jpg','img/p/kh-36.jpg','img/p/kh-37.jpg'],
      sheets: [
        { code: 'A-101', ar: 'المسقط العام', en: 'General plan', img: 'img/d/kh-01.jpg' },
        { code: 'A-102', ar: 'مسقط — الحمام', en: 'Plan — bathroom', img: 'img/d/kh-14.jpg' },
        { code: 'A-103', ar: 'مسقط — غرفة الأطفال', en: 'Plan — kids room', img: 'img/d/kh-16.jpg' },
        { code: 'A-104', ar: 'مسقط — غرفة النوم', en: 'Plan — bedroom', img: 'img/d/kh-24.jpg' }
      ]
    },
    {
      id: 'p4', cat: 'dwg', test: true,
      ar: { title: 'لوحات تنفيذية — شقة P-3 (تجريبي)', type: 'شقة', place: 'القاهرة', meta: 'لوحات تنفيذية — معماري',
            desc: 'مجموعة لوحات تنفيذية للشقة: المسقط العام وتعديلات الحوائط ومساقط الفرش لكل فراغ.' },
      en: { title: 'Working drawings — P-3 (test)', type: 'Apartment', place: 'Cairo', meta: 'Working drawings — architectural',
            desc: 'Working drawing set: general plan, wall modifications and furniture plans for every space.' },
      area: '—', year: '—', status: { ar: 'لوحات', en: 'Drawings' },
      scope: ['dwg'],
      images: ['img/d/mv-01.jpg','img/d/mv-11.jpg','img/d/mv-20.jpg'],
      sheets: [
        { code: 'A-101', ar: 'المسقط العام', en: 'General plan', img: 'img/d/mv-01.jpg' },
        { code: 'A-102', ar: 'مسقط — غرفة المعيشة', en: 'Plan — living room', img: 'img/d/mv-11.jpg' },
        { code: 'A-103', ar: 'مسقط — غرفة نوم 2', en: 'Plan — bedroom 2', img: 'img/d/mv-15.jpg' },
        { code: 'A-104', ar: 'مسقط — غرفة النوم الرئيسية', en: 'Plan — master bedroom', img: 'img/d/mv-20.jpg' },
        { code: 'A-105', ar: 'مسقط — الحمام', en: 'Plan — bathroom', img: 'img/d/mv-27.jpg' }
      ]
    },
    {
      id: 'p5', cat: 'site', test: true,
      ar: { title: 'تشطيب شقة كاملة (تجريبي)', type: 'شقة', place: 'القاهرة الجديدة', meta: 'شقة — تنفيذ تشطيبات كاملة',
            desc: 'تنفيذ أعمال التشطيب الكاملة: أرضيات، أسقف جبس بورد وإضاءة، دهانات، نجارة ومطبخ.' },
      en: { title: 'Full apartment fit-out (test)', type: 'Apartment', place: 'New Cairo', meta: 'Apartment — full finishing',
            desc: 'Full finishing works: flooring, gypsum ceilings and lighting, paints, joinery and kitchen.' },
      area: '—', year: '—', status: { ar: 'منفذ', en: 'Completed' },
      scope: ['site'],
      images: ['img/p/e13-16.jpg','img/p/e13-18.jpg','img/p/e13-24.jpg','img/p/e13-13.jpg'],
      sheets: []
    },
    {
      id: 'p6', cat: 'site', test: true,
      ar: { title: 'تنفيذ وإشراف شقة V4 (تجريبي)', type: 'شقة', place: 'الجيزة', meta: 'شقة — تنفيذ وإشراف',
            desc: 'تنفيذ التصميم على الطبيعة مع إشراف هندسي كامل لحد التسليم.' },
      en: { title: 'V4 execution & supervision (test)', type: 'Apartment', place: 'Giza', meta: 'Apartment — execution & supervision',
            desc: 'On-site execution of the design with full engineering supervision until handover.' },
      area: '—', year: '—', status: { ar: 'منفذ', en: 'Completed' },
      scope: ['3d','site'],
      images: ['img/p/kh-10.jpg','img/p/kh-11.jpg','img/p/kh-36.jpg','img/p/kh-37.jpg'],
      sheets: []
    }
  ]
};
