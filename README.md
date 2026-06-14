# EXPROSA 2026 Landing Page — Batch 2

Landing page baru untuk PT Exprosa Global Nusantara dengan arah visual premium tech, dark-clean, motion-first, dan siap deploy ke Vercel.

## Stack

- Next.js App Router
- Tailwind CSS
- Motion
- GSAP ScrollTrigger
- Vercel

## Yang ditambahkan di Batch 2

- Struktur komponen lebih rapi: `Navbar`, `Hero`, `ProofStrip`, `ProblemSection`, `ServiceGrid`, `VisualShowcase`, `ProcessSection`, `PackageSection`, `DiagnosticSection`, `FAQSection`, dan `Footer`.
- Hero visual lebih stabil untuk mobile.
- Section diagnostic/audit awal untuk memperkuat positioning EXPROSA sebagai Business Technology Partner.
- FAQ untuk menjawab keberatan calon klien.
- `robots.ts` dan `sitemap.ts` untuk fondasi SEO.
- JSON-LD Organization schema di halaman utama.
- `next.config.ts` mematikan `poweredByHeader`.

## Jalankan lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Build production

```bash
npm run build
npm run start
```

## Push ke GitHub

```bash
git add .
git commit -m "feat: build exprosa landing page batch 2"
git push origin main
```

## Deploy Vercel

Setelah repo terisi dan tersambung ke Vercel:

```bash
npm run build
```

Lalu deploy lewat dashboard Vercel atau CLI:

```bash
vercel
```

## Catatan brand

Arah brand dikunci sebagai:

> Business Technology Partner untuk UMKM dan perusahaan skala tumbuh.

Gaya Givingli diambil pada pola visual storytelling, card floating, dan motion premium. Identitas EXPROSA tetap dark-clean, tegas, dan bisnis.
