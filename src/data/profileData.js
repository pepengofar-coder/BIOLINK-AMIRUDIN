/* =============================================
   PROFILE DATA v3 — Real Data Edition
   ============================================= */

export const profileData = {
  /* ---- Hero / Identity ---- */
  hero: {
    name: 'Amirudin',
    photo: '/images/profile.jpg',
    headline: 'Graphic Designer, Video and Photographer',
    bio: 'Assalamu\'alaikum. Saya hanyalah abdi pemula yang mencoba menata kepingan puzzle yang berserak dari karunia-Nya yang luas tiada batas. Sekadar ingin membagi sepercik keindahan dunia melalui karya kecil. Semoga yang tersaji di sini menjadi sedikit penawar dahaga bagi penikmat seni visual, karena setiap sudut semesta adalah kanvas-Nya yang agung.',
    socials: [
      { id: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/ziyadhmaeda', icon: 'facebook' },
      { id: 'pinterest', label: 'Pinterest', url: 'https://pinterest.com/amr_ziyadh', icon: 'pinterest' },
      { id: 'tiktok', label: 'TikTok', url: 'https://tiktok.com/@ngaos_tv', icon: 'tiktok' },
    ],
    cta: {
      primary: { text: 'Ruang Desain & Cetak', url: '#canva' },
      secondary: { text: 'Ruang Fotografi', url: '#photography' },
    },
    links: [
      { text: 'Ruang Desain & Cetak', url: '#canva' },
      { text: 'Ruang Video Animasi', url: '#inkscape' },
      { text: 'Ruang Fotografi', url: '#photography' },
      { text: 'Coming Soon', url: '#' }
    ]
  },

  /* ---- Canva Artworks ---- */
  canva: {
    id: 'canva',
    title: 'CANVA',
    subtitle: 'Karya ini merupakan serangkaian renungan dan muhasabah yang kami sajikan dalam bentuk poster / pamflet edukasi islam. Desain sederhana menggunakan smartphone maupun perangkat laptop / pc / mac.',
    bannerText: 'Setiap desain tidaklah murni sederhana yang direka dengan teliti menggunakan platform desain visual ini. Ini adalah wujud apresiasi kami di saat berkarya.',
    items: [
      { id: 'c1', image: '/images/canva_1.png', title: 'Islamic Quote 1' },
      { id: 'c2', image: '/images/canva_1.png', title: 'Islamic Quote 2' },
      { id: 'c3', image: '/images/canva_1.png', title: 'Islamic Quote 3' },
      { id: 'c4', image: '/images/canva_1.png', title: 'Islamic Quote 4' },
      { id: 'c5', image: '/images/canva_1.png', title: 'Islamic Quote 5' },
      { id: 'c6', image: '/images/canva_1.png', title: 'Islamic Quote 6' },
      { id: 'c7', image: '/images/canva_1.png', title: 'Islamic Quote 7' },
      { id: 'c8', image: '/images/canva_1.png', title: 'Islamic Quote 8' },
    ]
  },

  /* ---- Inkscape Vectors ---- */
  inkscape: {
    id: 'inkscape',
    title: 'INKSCAPE',
    subtitle: 'Keahlian dalam pembentukan identitas yang konsisten di semua ruang. Dikembangkan sepenuhnya dengan inkscape agar tetap tajam, fleksibel, dan efisien saat ditransfer pun di padu-padankan secara digital.',
    bannerText: 'Beberapa dari koleksi poster islami menggunakan Software Inkscape versi PC yang beroperasi secara bebas di dalam os (Windows / Linux) sebuah perangkat lunak opensource grafis vektor berkualitas sangat tinggi dan powerful sehingga menakjubkan saat dirancang dan di bangun.',
    items: [
      { id: 'i1', image: '/images/inkscape_1.png', title: 'Vector Art 1' },
      { id: 'i2', image: '/images/inkscape_1.png', title: 'Vector Art 2' },
      { id: 'i3', image: '/images/inkscape_1.png', title: 'Vector Art 3' },
      { id: 'i4', image: '/images/inkscape_1.png', title: 'Vector Art 4' },
      { id: 'i5', image: '/images/inkscape_1.png', title: 'Vector Art 5' },
      { id: 'i6', image: '/images/inkscape_1.png', title: 'Vector Art 6' },
      { id: 'i7', image: '/images/inkscape_1.png', title: 'Vector Art 7' },
      { id: 'i8', image: '/images/inkscape_1.png', title: 'Vector Art 8' },
      { id: 'i9', image: '/images/inkscape_1.png', title: 'Vector Art 9' },
      { id: 'i10', image: '/images/inkscape_1.png', title: 'Vector Art 10' },
      { id: 'i11', image: '/images/inkscape_1.png', title: 'Vector Art 11' },
      { id: 'i12', image: '/images/inkscape_1.png', title: 'Vector Art 12' },
    ]
  },

  /* ---- Fotografi ---- */
  photography: {
    id: 'photography',
    title: 'FOTOGRAFI',
    subtitle: 'Fotografi merupakan salah satu kegiatan yang tidak bisa di pisahkan kehidupan manusia. Dalam sebagian ragam aktivitas, fotografi menjadi bagian penting dalam aktivitas sehari-hari. Inilah puncak hasil fotografi menggunakan beberapa perangkat baik smartphone dan kamera yang sudah sering gunakan.',
    items: [
      { id: 'p1', image: '/images/photo_1.png', title: 'Nature 1' },
      { id: 'p2', image: '/images/photo_2.png', title: 'Landscape 1' },
      { id: 'p3', image: '/images/photo_1.png', title: 'Nature 2' },
      { id: 'p4', image: '/images/photo_2.png', title: 'Landscape 2' },
      { id: 'p5', image: '/images/photo_1.png', title: 'Nature 3' },
      { id: 'p6', image: '/images/photo_2.png', title: 'Landscape 3' },
      { id: 'p7', image: '/images/photo_1.png', title: 'Nature 4' },
      { id: 'p8', image: '/images/photo_2.png', title: 'Landscape 4' },
      { id: 'p9', image: '/images/photo_1.png', title: 'Nature 5' },
    ]
  },

  /* ---- Blog ---- */
  blog: {
    title: 'Blogger',
    subtitle: 'Ikuti tulisan sederhana saya di blog : "Ruang Singgah para pejalan hati"',
    url: 'https://amr-ziyadh.blogspot.com',
    footerText: 'Terima kasih sudah meluangkan waktu mampir di sini. Ada sedikit info / materi tentang sharing di blog. Harap dimaklumi dan di manfaatkan.',
  },

  /* ---- CTA ---- */
  cta: {
    whatsapp: 'https://wa.me/6285951621496',
    email: 'mailto:amirudin@email.com',
    text: 'Hubungi Saya',
  },

  /* ---- Footer ---- */
  footer: {
    copyright: `© ${new Date().getFullYear()} Amirudin`,
    tagline: 'Graphic Designer, Video and Photographer',
  },
};

