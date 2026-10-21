# Final Project — Aplikasi Artikel

Aplikasi blog sederhana yang dibangun menggunakan **Next.js dan Strapi** sebagai tugas Final Project Minggu 9–10.

Project ini menerapkan konsep **Headless CMS**, dengan pemisahan backend untuk mengelola konten dan frontend untuk menampilkan artikel.

## Teknologi
- **Next.js** — Frontend dengan App Router.
- **Strapi** — Headless CMS untuk mengelola artikel.
- **TypeScript** — Menjaga konsistensi tipe data.
- **Atomic Design** — Mengorganisasi komponen menjadi `atoms`, `molecules`, dan `organisms`.

## Fitur
- Menampilkan daftar artikel.
- Mengelola konten artikel melalui Strapi.
- Menghubungkan frontend Next.js dengan backend Strapi.
- Struktur komponen yang terorganisasi menggunakan Atomic Design.

## Cara Menjalankan

Frontend dan backend dijalankan melalui **dua terminal terpisah**.

### 1. Backend — Strapi

Buka terminal pertama:

```bash
cd backend-strapi
npm install
npm run develop
```

Ikuti instruksi di terminal jika Strapi memerlukan konfigurasi awal. Setelah server berjalan, buka alamat admin yang ditampilkan di terminal.

### 2. Frontend — Next.js

Buka terminal kedua, lalu masuk ke folder frontend:

```bash
cd frontend-nextjs
npm install
npm run dev
```

Buka `http://localhost:3000` di browser.

> **Catatan:** Sesuaikan `frontend-nextjs` dengan nama folder frontend yang digunakan di project kamu. Jalankan `npm install` hanya jika dependencies belum terpasang.

## Tujuan Project

Menerapkan konsep Next.js, integrasi API, pengelolaan konten menggunakan Strapi, serta penerapan Atomic Design dalam membangun aplikasi web sederhana.

