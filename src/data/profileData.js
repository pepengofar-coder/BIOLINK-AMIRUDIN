/* =============================================
   PROFILE DATA v3 — Real Data Edition
   ============================================= */

export const profileData = {
  /* ---- Hero / Identity ---- */
  hero: {
    name: 'Amirudin',
    photo: '/images/profile.jpg',
    headline: 'Graphic Designer · Content Creator · Developer',
    bio: 'Merancang visual yang memukau, menciptakan konten yang bermakna, dan membangun solusi digital yang berdampak.',
    socials: [
      { id: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/ziyadhmaeda', icon: 'facebook' },
      { id: 'pinterest', label: 'Pinterest', url: 'https://pinterest.com/amr_ziyadh', icon: 'pinterest' },
      { id: 'tiktok', label: 'TikTok', url: 'https://tiktok.com/@ngaos_tv', icon: 'tiktok' },
    ],
    cta: {
      primary: { text: 'Lihat Produk', url: 'https://lynk.id/ziyadhmaeda' },
      secondary: { text: 'Hubungi Saya', url: 'https://wa.me/6285951621496' },
    },
  },

  /* ---- Featured Products (from lynk.id) ---- */
  products: [
    {
      id: 'prod-1',
      title: 'Premium Template Pack',
      category: 'Digital Template',
      description: 'Koleksi template konten Instagram & sosial media premium, siap pakai untuk bisnis dan personal branding.',
      image: '/images/product-1.png',
      price: 'Rp 49.000',
      url: 'https://lynk.id/ziyadhmaeda',
      badge: 'Best Seller',
    },
    {
      id: 'prod-2',
      title: 'Design Resource Kit',
      category: 'Graphic Assets',
      description: 'Bundle lengkap aset desain — mockup, logo template, dan elemen branding untuk kebutuhan profesional.',
      image: '/images/product-2.png',
      price: 'Rp 79.000',
      url: 'https://lynk.id/ziyadhmaeda',
      badge: 'New',
    },
    {
      id: 'prod-3',
      title: 'AI Art Collection',
      category: 'Digital Art',
      description: 'Koleksi karya seni AI bertema Islami yang indah, cocok untuk konten dakwah dan media sosial.',
      image: '/images/product-3.png',
      price: 'Rp 35.000',
      url: 'https://lynk.id/ziyadhmaeda',
      badge: null,
    },
  ],

  /* ---- Portfolio — Real Websites ---- */
  portfolio: [
    {
      id: 'work-1',
      title: 'ABAIS Bogor',
      category: 'Website Development',
      description: 'Website resmi Abdurrahman Bin Auf Islamic School — Sekolah Islam di Bogor. Dibangun dengan sistem CMS custom, fitur pendaftaran online, dan multi-bahasa.',
      image: '/images/work-abais.png',
      url: 'https://abaisbogor.vercel.app',
      tech: ['HTML/CSS', 'JavaScript', 'Supabase'],
    },
    {
      id: 'work-2',
      title: 'SMP UMAIS Bogor',
      category: 'Website Development',
      description: 'Website institusi pendidikan SMP UMAIS Bogor — menampilkan profil sekolah, program unggulan, dan informasi pendaftaran siswa baru.',
      image: '/images/work-smp.png',
      url: 'https://smpumaisbogor.vercel.app',
      tech: ['HTML/CSS', 'JavaScript', 'CMS'],
    },
    {
      id: 'work-3',
      title: 'Zenira Video Clipper',
      category: 'Web Application',
      description: 'Aplikasi web untuk memotong video, mengekstrak highlight, dan membuat klip viral. Dilengkapi fitur ekspor MP4, timeline editor, dan subtitle.',
      image: '/images/work-zenira.png',
      url: 'https://website-clipper.vercel.app',
      tech: ['React', 'FFmpeg.wasm', 'Vite'],
    },
  ],

  /* ---- Experience Timeline ---- */
  experience: [
    {
      id: 'exp-1',
      year: '2024 — Sekarang',
      role: 'Marketing & Design Staff',
      company: 'ABAIS Bogor',
      description: 'Merancang aset visual dan strategi pemasaran digital untuk penerimaan siswa baru. Mengelola media sosial dan konten promosi institusi.',
    },
    {
      id: 'exp-2',
      year: '2023 — 2024',
      role: 'Freelance Graphic Designer',
      company: 'Various Clients',
      description: 'Mengerjakan proyek desain grafis untuk berbagai klien — branding, social media content, dan materi pemasaran cetak maupun digital.',
    },
    {
      id: 'exp-3',
      year: '2022 — 2023',
      role: 'Content Creator & Developer',
      company: 'Personal Brand',
      description: 'Membuat konten kreatif, membangun website portofolio, dan mengembangkan aplikasi web tools menggunakan teknologi modern.',
    },
    {
      id: 'exp-4',
      year: '2021 — 2022',
      role: 'Junior Graphic Designer',
      company: 'Startup Lokal',
      description: 'Memulai karir profesional di dunia desain — mengerjakan visual branding, UI mockup, dan aset konten media sosial.',
    },
  ],

  /* ---- CTA ---- */
  cta: {
    whatsapp: 'https://wa.me/6285951621496',
    email: 'mailto:amirudin@email.com',
    text: 'Hubungi Saya',
  },

  /* ---- Footer ---- */
  footer: {
    copyright: `© ${new Date().getFullYear()} Amirudin Abdullah`,
    tagline: 'Made with ♥ in Bogor',
  },
};
