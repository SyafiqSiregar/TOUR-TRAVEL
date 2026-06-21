# Arahan Fokus Pengerjaan (Agent Guidelines)

## 1. Identitas Proyek & Fokus Bisnis
- **Nama Proyek:** M One Travelindo
- **Deskripsi:** Platform web Tour & Travel untuk pemesanan paket wisata ke berbagai destinasi, baik domestik maupun internasional.
- **Fokus Bisnis (Wajib Diterapkan):** 
  - **B2B & Rombongan:** Target utama adalah Sekolah, Instansi, dan Paguyuban Mahasiswa.
  - **Nilai Edukasi:** Setiap *copywriting* paket wisata (terutama Study Tour) wajib mengandung nilai pendidikan dan pengalaman hidup.
  - **Layanan Unggulan:** Study Tour, Overland Java-Bali, dan Mudik Bareng Mahasiswa.
  - **Armada:** Penonjolan kenyamanan bus pariwisata (bekerja sama dengan GP Holiday).
- **Tujuan Utama:** Menciptakan antarmuka yang modern, cepat, mudah digunakan, dan dapat diandalkan oleh panitia rombongan wisata serta klien sekolah.

## 2. Tech Stack & Ekosistem
- **Framework:** Next.js (versi 15/16) dengan **App Router** (`app/`).
- **Styling:** Tailwind CSS v4.
- **Ikon:** `lucide-react`.
- **Animasi:** `framer-motion` (untuk interaksi, transisi halaman, dan scroll animations).
- **Carousel/Slider:** `swiper`.
- **Bahasa:** TypeScript (`.tsx`, `.ts`).

## 3. Aturan Pengembangan (Development Rules)
1. **Pahami Next.js App Router:** Gunakan konvensi App Router (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`). Bedakan dengan jelas antara *Server Components* (default) dan *Client Components* (`"use client"` di bagian atas file jika butuh *hooks* atau interaktivitas).
2. **Kecocokan Desain & Warna:** Selalu patuhi panduan desain yang ada di `desain.md`. Mutlak gunakan Primary `#2D6A4F` dan Accent `#F2A63D`. Setiap *card* wajib pakai `rounded-xl` dan *button* `rounded-lg`.
3. **Komponen Reusable:** Pecah UI menjadi komponen-komponen kecil yang dapat digunakan kembali di folder `src/components/` (misalnya `Button`, `TourCard`, `SectionHeader`, `SocialProof`).
4. **Responsivitas:** Selalu gunakan pendekatan *Mobile-First*. Pastikan tampilan bekerja dengan sempurna di layar HP (`sm`), Tablet (`md`), hingga Desktop (`lg`, `xl`).
5. **Aksesibilitas & SEO:** Gunakan tag HTML semantik (`<nav>`, `<section>`, `<article>`, `<main>`). Tambahkan atribut `alt` pada setiap gambar dan lengkapi meta tag untuk SEO pada setiap halaman.
6. **Kebersihan Kode:** Tulis kode TypeScript yang terstruktur, rapi, dan mudah dibaca (Zero Bugs, no `any`). Hindari duplikasi kode (*DRY*).

## 4. Alur Kerja Agent
- **Analisis:** Sebelum menulis kode, periksa struktur folder saat ini dan komponen apa saja yang sudah ada untuk menghindari duplikasi.
- **Fokus:** Kerjakan satu fitur/halaman dalam satu waktu. Pastikan desain mematuhi UI/UX yang telah ditetapkan.
- **Penggunaan Ikon & Gambar:** Gunakan `lucide-react` untuk ikon. Untuk gambar statis/placeholder, gunakan layanan seperti Unsplash dengan parameter relevan.
- **Review:** Pastikan tidak ada *error* atau peringatan TypeScript / ESLint di kode yang dihasilkan.
