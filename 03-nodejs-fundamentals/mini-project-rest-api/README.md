# Mini Project REST API — Daftar Artikel

REST API sederhana untuk mengelola data artikel menggunakan **Node.js, Express.js, dan dotenv** sebagai tugas Mini Project Minggu 5–6.

## Fitur
- Menampilkan semua artikel (`GET`).
- Menampilkan detail artikel berdasarkan ID (`GET`).
- Menambahkan artikel baru (`POST`).
- Mengubah data artikel (`PUT`).
- Menghapus artikel (`DELETE`).
- Middleware logger untuk mencatat request.
- Error handling untuk ID yang tidak ditemukan.

## Teknologi
- Node.js
- Express.js
- dotenv

## Cara Menjalankannya

1. Clone repository dan masuk ke folder project.
   ```bash
   git clone URL_REPOSITORY
   cd 03-nodejs-fundamentals/mini-project-rest-api
   ```
2. Install dependencies.
   ```bash
   npm install
   ```
3. Jalankan server sesuai script di `package.json`, misalnya:
   ```bash
   npm run dev
   ```
4. Uji endpoint API menggunakan Postman atau aplikasi sejenis.

## Tujuan

Mempelajari dasar REST API, operasi CRUD, middleware, dan penanganan error menggunakan Node.js dan Express.js.

