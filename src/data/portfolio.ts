import { Certification, Experience } from "../types/portfolio";

export const profile = {
  name: "Mohammad Hasim Adnan",
  role: "SEO Specialist",
  location: "Serang, Indonesia",
  status: "Open to Work | SEO Specialist Portfolio",
  email: "hasyimjoe@gmail.com",
  phone: "083821359370",
  whatsapp: "https://wa.me/6283821359370",
  linkedin: "https://www.linkedin.com/in/mohammad-hasim-adnan/",
  github: "https://github.com/joeadnan/seo-specialist-portfolio",
  cv: "/documents/CV_Mohammad_Hasim_Adnan.pdf",
  imageUrl: "/documents/Fotojas.jpeg",
  summary: "",
};

export const skills = [
  {
    title: "Keyword Research",
    items: [
      "Riset keyword utama dan turunan",
      "Memahami search intent",
      "Membuat keyword mapping",
      "Analisis SERP dan kompetitor",
      "Menyusun topic cluster",
    ],
  },
  {
    title: "On-Page SEO",
    items: [
      "Optimasi title tag dan meta description",
      "Struktur heading H1-H3",
      "Optimasi URL dan slug",
      "Internal linking",
      "SEO content brief",
    ],
  },
  {
    title: "Technical SEO",
    items: [
      "Audit indexing dan crawlability",
      "Cek sitemap.xml dan robots.txt",
      "Page speed dan mobile usability",
      "Broken link dan redirect issue",
      "Schema markup basic",
    ],
  },
  {
    title: "SEO Analytics",
    items: [
      "Google Search Console",
      "GA4 basic reporting",
      "Monitoring clicks, impressions, CTR",
      "Keyword performance review",
      "Monthly SEO recommendation",
    ],
  },
];

export const workflow = [
  {
    step: "01",
    title: "Pahami Website & Tujuan Bisnis",
    description:
      "Memahami produk, layanan, target audience, halaman penting, tujuan traffic, dan conversion agar strategi SEO tidak hanya fokus ranking, tetapi juga mendukung bisnis.",
  },
  {
    step: "02",
    title: "Keyword & Competitor Research",
    description:
      "Mencari keyword utama, keyword turunan, search intent, tingkat persaingan, SERP pattern, dan peluang konten dari kompetitor.",
  },
  {
    step: "03",
    title: "Technical SEO Audit",
    description:
      "Mengecek masalah teknis seperti indexing, crawlability, sitemap, robots.txt, page speed, mobile usability, broken link, dan struktur URL.",
  },
  {
    step: "04",
    title: "On-Page Optimization",
    description:
      "Mengoptimasi title, meta description, heading, struktur konten, internal link, image alt text, CTA, dan relevansi halaman dengan search intent.",
  },
  {
    step: "05",
    title: "Tracking Performance",
    description:
      "Memantau performa organic search melalui Google Search Console, GA4, ranking keyword, landing page, CTR, traffic, dan conversion signal.",
  },
  {
    step: "06",
    title: "Report & Recommendation",
    description:
      "Menyusun insight dan rekomendasi prioritas agar stakeholder memahami issue, peluang, dampak, dan langkah optimasi berikutnya.",
  },
];

export const projects = [
  {
    title: "Technical SEO Audit untuk Website Bisnis",
    category: "Technical SEO",
    label: "Lab Practice",
    problem:
      "Website membutuhkan audit teknis agar halaman penting lebih mudah di-crawl, di-index, dan memiliki struktur SEO yang rapi.",
    analysis: [
      "Mengecek struktur URL, title tag, meta description, heading, internal link, dan image alt text.",
      "Menganalisis potensi masalah indexing, sitemap.xml, robots.txt, broken link, redirect, dan mobile usability.",
      "Membuat prioritas issue berdasarkan dampak terhadap crawlability, user experience, dan peluang organic traffic.",
    ],
    steps: [
      "Membuat SEO audit checklist berdasarkan area technical, on-page, dan content.",
      "Mencatat halaman yang belum optimal dari sisi title, meta description, H1, dan struktur heading.",
      "Mengecek page speed dan mobile friendliness menggunakan Lighthouse/PageSpeed Insights.",
      "Menyusun temuan dalam tabel: issue, lokasi halaman, dampak, prioritas, dan rekomendasi perbaikan.",
      "Membuat summary agar mudah dipahami oleh non-technical stakeholder.",
    ],
    result:
      "Audit menghasilkan daftar masalah SEO yang terstruktur beserta prioritas perbaikan yang bisa langsung ditindaklanjuti.",
    impact: [
      "Membantu website memiliki struktur SEO yang lebih rapi.",
      "Memudahkan developer atau admin website memahami bagian yang harus diperbaiki.",
      "Meningkatkan peluang halaman penting untuk lebih mudah ditemukan mesin pencari.",
    ],
    tools: [
      "Google Search Console",
      "PageSpeed Insights",
      "Lighthouse",
      "SEO Checklist",
      "Google Sheets",
    ],
    interviewPoint:
      "Saya melakukan audit SEO dengan format prioritas, bukan hanya daftar masalah. Tujuannya agar tim tahu issue mana yang paling penting diperbaiki terlebih dahulu.",
  },
  {
    title: "Keyword Research & Topic Cluster Blog",
    category: "SEO Content Strategy",
    label: "Lab Practice",
    problem:
      "Website membutuhkan rencana konten blog yang tidak random, sesuai search intent, dan dapat membangun topical authority secara bertahap.",
    analysis: [
      "Melakukan riset keyword berdasarkan intent informasional, komersial, dan transaksional.",
      "Mengelompokkan keyword menjadi pillar topic dan cluster article.",
      "Menganalisis SERP untuk memahami format konten yang paling relevan dengan kebutuhan user.",
    ],
    steps: [
      "Menentukan niche, produk/layanan, dan target audience website.",
      "Mencari keyword utama, long-tail keyword, dan pertanyaan user.",
      "Mengelompokkan keyword berdasarkan search intent dan funnel stage.",
      "Membuat keyword map berisi target keyword, judul artikel, intent, priority, dan internal link target.",
      "Menyusun content brief untuk artikel SEO-friendly.",
    ],
    result:
      "Keyword map menghasilkan daftar topik blog yang lebih terarah dan siap dieksekusi menjadi konten SEO.",
    impact: [
      "Membantu website membangun traffic organik jangka panjang.",
      "Membantu penulis membuat artikel berdasarkan keyword, intent, dan struktur yang jelas.",
      "Mengurangi risiko konten saling bersaing pada keyword yang sama.",
    ],
    tools: [
      "Google Keyword Planner",
      "Google Trends",
      "SERP Analysis",
      "People Also Ask",
      "Google Sheets",
    ],
    interviewPoint:
      "Dalam keyword research, saya tidak hanya mencari volume. Saya memetakan intent, prioritas, dan hubungan antar konten agar strategi SEO lebih terarah.",
  },
  {
    title: "On-Page SEO Optimization untuk Service Page",
    category: "On-Page SEO",
    label: "Lab Practice",
    problem:
      "Halaman layanan membutuhkan optimasi on-page agar lebih relevan dengan keyword target dan lebih jelas untuk user maupun search engine.",
    analysis: [
      "Mengevaluasi apakah title, meta description, heading, dan isi halaman sudah sesuai search intent.",
      "Mengecek apakah benefit, service detail, FAQ, internal link, dan CTA sudah membantu user mengambil keputusan.",
      "Membandingkan struktur halaman dengan kompetitor yang tampil di SERP.",
    ],
    steps: [
      "Menentukan keyword utama dan keyword pendukung untuk halaman layanan.",
      "Menulis ulang title tag, meta description, H1, H2, dan intro halaman.",
      "Menyusun section benefit, proses layanan, FAQ, dan CTA yang lebih jelas.",
      "Menambahkan rekomendasi internal link dari artikel blog ke service page.",
      "Membuat before-after notes agar perubahan mudah direview.",
    ],
    result:
      "Halaman layanan menjadi lebih fokus, informatif, dan selaras dengan search intent serta tujuan conversion.",
    impact: [
      "Meningkatkan relevansi halaman terhadap keyword target.",
      "Membuat user lebih mudah memahami layanan dan langkah kontak.",
      "Membantu halaman menjadi tujuan internal link dari konten blog terkait.",
    ],
    tools: [
      "Google Docs",
      "SEO Content Brief",
      "SERP Analysis",
      "Internal Link Map",
      "Meta Tags",
    ],
    interviewPoint:
      "On-page SEO bukan hanya memasukkan keyword. Saya memastikan struktur halaman menjawab intent user, mudah dibaca, dan punya CTA yang jelas.",
  },
  {
    title: "SEO Performance Report & Recommendation",
    category: "SEO Reporting",
    label: "Lab Practice",
    problem:
      "Stakeholder membutuhkan laporan SEO sederhana untuk memahami performa organic search, halaman yang naik/turun, dan rekomendasi tindakan berikutnya.",
    analysis: [
      "Membaca data clicks, impressions, CTR, average position, query, dan landing page dari Google Search Console.",
      "Mengidentifikasi halaman dengan impressions tinggi tetapi CTR rendah.",
      "Mencari keyword yang berpotensi ditingkatkan melalui update title, meta, konten, atau internal link.",
    ],
    steps: [
      "Mengumpulkan data performa organic search dari contoh dataset GSC.",
      "Membuat summary KPI bulanan: total clicks, impressions, CTR, dan average position.",
      "Menganalisis top queries, top pages, low CTR pages, dan opportunity keyword.",
      "Membuat rekomendasi optimasi berdasarkan data, bukan feeling.",
      "Menyusun report yang ringkas dan mudah dipahami non-SEO stakeholder.",
    ],
    result:
      "Report SEO membantu melihat peluang optimasi dari data query, halaman, dan CTR sehingga action plan lebih jelas.",
    impact: [
      "Membantu menentukan halaman mana yang perlu dioptimasi lebih dulu.",
      "Meningkatkan kualitas komunikasi antara SEO, content, dan stakeholder.",
      "Membuat keputusan SEO lebih berbasis data.",
    ],
    tools: [
      "Google Search Console",
      "GA4",
      "Looker Studio",
      "Google Sheets",
      "SEO Report",
    ],
    interviewPoint:
      "Saya melihat SEO reporting sebagai alat pengambilan keputusan. Data harus diubah menjadi insight dan rekomendasi yang bisa dikerjakan.",
  },
];

export const tools = [
  {
    title: "Keyword Research",
    items: [
      "Google Keyword Planner",
      "Google Trends",
      "SERP Analysis",
      "People Also Ask",
      "Competitor Mapping",
    ],
  },
  {
    title: "Technical SEO",
    items: [
      "Google Search Console",
      "PageSpeed Insights",
      "Lighthouse",
      "Sitemap.xml",
      "Robots.txt",
    ],
  },
  {
    title: "On-Page SEO",
    items: [
      "Title Tag",
      "Meta Description",
      "Heading Structure",
      "Internal Linking",
      "Image Alt Text",
    ],
  },
  {
    title: "Analytics & Reporting",
    items: [
      "GA4",
      "Looker Studio",
      "GSC Performance",
      "Google Sheets",
      "SEO Report",
    ],
  },
  {
    title: "Content SEO",
    items: [
      "Content Brief",
      "Topic Cluster",
      "Keyword Mapping",
      "Readability",
      "FAQ Optimization",
    ],
  },
  {
    title: "Website & CMS",
    items: [
      "WordPress Basic",
      "CMS Blog",
      "HTML Basic",
      "Schema Basic",
      "React/Vite Basic",
    ],
  },
  {
    title: "Documentation",
    items: [
      "SEO Audit Report",
      "Keyword Map",
      "On-Page Checklist",
      "Monthly Report",
      "Optimization Notes",
    ],
  },
];

export const learning = [
  "SEO Fundamentals",
  "Keyword Research & Search Intent",
  "On-Page SEO & Content Brief",
  "Technical SEO Audit",
  "Google Search Console & GA4 Reporting",
  "Looker Studio Dashboard Basic",
  "Internal Linking & Topic Cluster",
  "Schema Markup Basic",
];

export const experiences: Experience[] = [
  {
    role: "SEO Specialist",
    company: "PT. Micool Berkah Bersama",
    period: "Desember 2022 - Sekarang",
    location: "Indonesia",
    employmentType: "Freelance / Part Time",
    summary:
      "Pengalaman sebagai SEO Specialist yang berfokus pada optimasi website, riset keyword, perencanaan konten, pengecekan performa halaman, dan penyusunan laporan SEO untuk meningkatkan visibilitas website di mesin pencari.",
    responsibilities: [
      "Melakukan riset keyword untuk kebutuhan halaman layanan, artikel blog, dan konten website.",
      "Mengoptimasi on-page SEO seperti title tag, meta description, heading structure, internal link, URL slug, dan image alt text.",
      "Membantu menyusun content plan artikel SEO berdasarkan kebutuhan bisnis dan pencarian pengguna.",
      "Melakukan pengecekan dasar technical SEO seperti struktur halaman, indexing, mobile responsiveness, broken link, dan kecepatan website.",
      "Menganalisis performa website menggunakan data dari Google Search Console, Google Analytics, dan spreadsheet laporan.",
      "Berkoordinasi dengan tim terkait untuk memastikan konten website relevan, informatif, dan sesuai target keyword.",
    ],
    achievements: [
      "Membantu menyusun struktur konten website yang lebih SEO friendly dan mudah dipahami pengguna.",
      "Membuat checklist audit SEO sederhana untuk pengecekan halaman website secara rutin.",
      "Mampu menggabungkan kemampuan teknis website dan strategi konten untuk mendukung peningkatan traffic organik.",
    ],
    tools: [
      "Google Search Console",
      "Google Analytics 4",
      "Google Keyword Planner",
      "Google Trends",
      "Google Sheets",
      "Browser DevTools Basic",
      "CMS / Website Admin",
      "SEO Documentation",
    ],
  },
  // {
  //   role: "Administrative & Reporting Support",
  //   company: "SD Negeri Baluk",
  //   period: "Juli 2023 - Desember 2024",
  //   location: "Cikande, Serang",
  //   employmentType: "Full-time",
  //   summary:
  //     "Berpengalaman membantu administrasi, pencatatan data, pengolahan dokumen, rekap informasi, dan komunikasi internal yang mendukung kemampuan reporting SEO.",
  //   responsibilities: [
  //     "Membantu pencatatan dan perapihan data administrasi menggunakan spreadsheet.",
  //     "Menyusun dokumen dan informasi agar mudah dicari kembali.",
  //     "Membuat ringkasan informasi untuk kebutuhan internal.",
  //     "Berkomunikasi dengan guru, staff, dan user internal untuk memahami kebutuhan.",
  //     "Membantu pekerjaan dokumen dan laporan sederhana secara rapi.",
  //   ],
  //   achievements: [
  //     "Terbiasa bekerja teliti dengan data dan dokumen.",
  //     "Mampu membuat catatan kerja yang rapi dan mudah dipahami.",
  //     "Memiliki dasar kuat untuk SEO reporting, content brief, dan dokumentasi audit.",
  //   ],
  //   tools: [
  //     "Microsoft Excel",
  //     "Google Sheets",
  //     "Microsoft Word",
  //     "Google Docs",
  //     "Administrative Report",
  //   ],
  // },
];

export const certifications: Certification[] = [
  {
    id: "graphic-design-fundamental",
    title: "Graphic Design Fundamental",
    issuer: "Self Learning / Design Practice",
    year: "2026",
    status: "Completed",
    category: "Graphic Design",
    imageUrl:
      "/certifications/Kelas-Desain-Grafis-Sertifikat-Kelas-Desain-Grafis-Habiskerja.jpg",
    description:
      "Mempelajari dasar-dasar desain grafis, termasuk prinsip layout, komposisi visual, tipografi, pemilihan warna, penggunaan elemen desain, pembuatan desain digital, serta praktik membuat materi visual untuk kebutuhan branding, promosi, dan media sosial.",
    skills: [
      "Graphic Design",
      "Layout Design",
      "Typography",
      "Color Theory",
      "Visual Composition",
      "Branding",
      "Social Media Design",
      "Digital Design",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Tingkat Menengah",
    issuer: "Self Learning / Digital Marketing Practice",
    year: "2025",
    status: "Completed",
    category: "Digital Marketing",
    imageUrl: "/certifications/Digital_Marketing_Tingkat_Menengah.jpg",
    description:
      "Mempelajari strategi digital marketing tingkat menengah, termasuk optimasi media sosial, content marketing, SEO dasar, campaign planning, analisis performa konten, dan penggunaan tools digital untuk mendukung promosi bisnis secara online.",
    skills: [
      "Digital Marketing",
      "Social Media Marketing",
      "Content Marketing",
      "SEO Basics",
      "Campaign Planning",
      "Performance Analysis",
    ],
  },
  {
    id: "figma-ui-design",
    title: "Figma UI Design",
    issuer: "Self Learning / UI Design Practice",
    year: "2025",
    status: "Completed",
    category: "UI/UX Design",
    imageUrl: "/certifications/FIGMA UI-UX CODEPOLITAN.jpg",
    description:
      "Mempelajari dasar penggunaan Figma untuk membuat desain antarmuka aplikasi dan website, mulai dari layout, komponen, typography, color style, wireframe, prototyping, hingga pembuatan desain UI yang modern, rapi, dan user-friendly.",
    skills: [
      "Figma",
      "UI Design",
      "UX Design Basics",
      "Wireframe",
      "Prototype",
      "Layout Design",
      "Typography",
      "Color Style",
      "Component Design",
      "Responsive Design",
    ],
  },

  {
    id: "fullstack-javascript-developer",
    title: "Fullstack JavaScript Developer",
    issuer: "Self Learning / Web Development Practice",
    year: "2025",
    status: "Completed",
    category: "Web Development",
    imageUrl: "/certifications/Full_Stack_JavaScript_Web_Developer_Pemula.jpg",
    description:
      "Mempelajari pengembangan aplikasi web fullstack menggunakan JavaScript, mulai dari frontend, backend, database, REST API, autentikasi, deployment, hingga integrasi aplikasi berbasis web modern.",
    skills: [
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "REST API",
      "Database",
      "Authentication",
      "Fullstack Development",
    ],
  },
  {
    id: "technical-seo-audit",
    title: "Technical SEO & Website Audit",
    issuer: "Self Learning / Portfolio Project",
    year: "2026",
    status: "Planned",
    category: "Technical SEO",
    imageUrl: "/certifications/technical-seo-audit.svg",
    description:
      "Rencana pembelajaran audit teknis website seperti crawlability, indexing, sitemap, robots.txt, page speed, mobile usability, dan schema basic.",
    skills: ["Audit", "Indexing", "PageSpeed", "Sitemap"],
  },
];

export const availability = {
  status: "Open to Work",
  targetRoles: [
    "Junior SEO Specialist",
    "SEO Content Specialist",
    "SEO Analyst Assistant",
    "Digital Marketing SEO Assistant",
  ],
  workTypes: ["Onsite", "Hybrid", "Remote"],
  location: "Indonesia",
};

export const educationBackground = {
  school: "Masukkan nama sekolah / kursus",
  major: "SEO / Digital Marketing / Website Optimization",
  period: "2026",
  description:
    "Fokus pembelajaran pada keyword research, search intent, on-page SEO, technical SEO, Google Search Console, GA4, content brief, internal linking, dan SEO reporting.",
  focus: [
    "Keyword Research",
    "On-Page SEO",
    "Technical SEO",
    "GSC & GA4",
    "SEO Reporting",
  ],
};

export const documentationSamples = [
  {
    title: "Technical SEO Audit Report",
    description:
      "Contoh laporan audit SEO teknis berisi issue, lokasi halaman, dampak, prioritas, dan rekomendasi perbaikan.",
    fileUrl: "/documents/Technical_SEO_Audit_Report.pdf",
    tags: ["Technical SEO", "Audit", "Checklist"],
  },
  {
    title: "Keyword Research Map",
    description:
      "Contoh keyword mapping berisi keyword utama, long-tail keyword, search intent, funnel stage, prioritas, dan target halaman.",
    fileUrl: "/documents/Keyword_Research_Map.pdf",
    tags: ["Keyword", "Intent", "Content Strategy"],
  },
  {
    title: "On-Page SEO Checklist",
    description:
      "Checklist optimasi halaman untuk title, meta description, H1-H3, URL, internal link, image alt, FAQ, dan CTA.",
    fileUrl: "/documents/On_Page_SEO_Checklist.pdf",
    tags: ["On-Page", "Meta Tags", "Internal Link"],
  },
  {
    title: "SEO Performance Report",
    description:
      "Template laporan performa SEO untuk membaca clicks, impressions, CTR, average position, top query, top page, dan rekomendasi.",
    fileUrl: "/documents/SEO_Performance_Report.pdf",
    tags: ["GSC", "GA4", "Reporting"],
  },
];

export const whyHireMe = [
  {
    title: "Memahami SEO dari sisi teknis dan konten",
    description:
      "Saya tidak hanya fokus artikel, tetapi juga memperhatikan indexing, crawlability, struktur halaman, internal link, dan kualitas pengalaman user.",
  },
  {
    title: "Terbiasa membuat dokumentasi yang rapi",
    description:
      "Pengalaman kerja sebelumnya membuat saya terbiasa mencatat masalah, membuat checklist, menyusun laporan, dan menjelaskan rekomendasi secara jelas.",
  },
  {
    title: "Menggunakan data untuk menentukan prioritas",
    description:
      "Saya membaca data dari GSC, GA4, keyword map, dan audit checklist agar rekomendasi SEO tidak berdasarkan feeling saja.",
  },
  {
    title: "Siap berkembang sebagai Junior SEO Specialist",
    description:
      "Portfolio ini menunjukkan kesiapan melalui project technical audit, keyword research, on-page optimization, content brief, dan SEO reporting.",
  },
];
