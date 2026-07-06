# SEO Specialist Portfolio React

Website portfolio pribadi untuk menampilkan kemampuan, project, studi kasus, dokumentasi, dan pembelajaran di bidang SEO Specialist.

Project ini dibuat berdasarkan referensi portfolio sebelumnya, kemudian diubah menjadi portfolio SEO Specialist menggunakan React, TypeScript, Vite, dan Tailwind CSS.

Portfolio ini cocok untuk menampilkan kesiapan sebagai Junior SEO Specialist, SEO Content Specialist, SEO Analyst Assistant, atau Digital Marketing SEO Assistant.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Static assets di folder `public`

## Fitur Utama

- Hero section profesional untuk SEO Specialist
- About section dengan positioning transisi karier yang relevan
- Skill SEO: keyword research, on-page SEO, technical SEO, SEO analytics, dan reporting
- Tools section: Google Search Console, GA4, PageSpeed Insights, Lighthouse, Keyword Planner, Looker Studio
- Experience section yang ditulis ulang agar relevan dengan SEO Specialist
- Documentation samples untuk audit, keyword map, on-page checklist, dan SEO report
- Workflow SEO dari memahami website sampai report & recommendation
- Project & case study SEO Specialist
- Certification section dengan gambar sertifikat/learning card
- Contact section + download CV
- SEO meta tags dasar di `index.html`

## Project SEO yang Ditampilkan

### 1. Technical SEO Audit untuk Website Bisnis

Studi kasus audit teknis website menggunakan checklist issue, lokasi halaman, dampak, prioritas, dan rekomendasi perbaikan.

### 2. Keyword Research & Topic Cluster Blog

Studi kasus riset keyword berdasarkan search intent, topic cluster, keyword map, dan content brief.

### 3. On-Page SEO Optimization untuk Service Page

Studi kasus optimasi title tag, meta description, heading, struktur konten, internal link, FAQ, dan CTA.

### 4. SEO Performance Report & Recommendation

Studi kasus laporan performa SEO menggunakan data clicks, impressions, CTR, average position, query, landing page, dan rekomendasi optimasi.

## Cara Menjalankan Project

```bash
npm install
npm run dev
```

Build production:

```bash
npm run build
```

Preview build:

```bash
npm run preview
```

## File yang Perlu Diganti

Ganti CV lama dengan CV terbaru kamu di:

```txt
public/documents/CV_Mohammad_Hasim_Adnan.pdf
```

Jika ingin mengganti sertifikat, simpan gambar baru di:

```txt
public/certifications/
```

Lalu update data di:

```txt
src/data/portfolio.ts
```

## Catatan Recruiter

Portfolio ini diarahkan untuk menunjukkan bahwa kandidat memahami SEO secara praktis, bukan hanya teori. Setiap studi kasus disusun dengan format problem, analysis, steps, result, impact, tools, dan interview point agar mudah dipahami recruiter atau user interview.
