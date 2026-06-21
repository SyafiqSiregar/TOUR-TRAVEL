# Panduan Desain & UI/UX (M One Travelindo)

Dokumen ini merupakan panduan spesifik yang **WAJIB** diikuti untuk memastikan konsistensi desain seluruh halaman web. Dokumen ini adalah ringkasan teknis dari `desain-tour-travel.md`.

## 1. Sistem Warna (Color Palette)

Selalu gunakan variabel Tailwind atau hex code berikut untuk menjaga identitas brand:

- **Primary:** `#2D6A4F` (Hijau Tua) — Untuk tombol utama, header aktif, badge.
- **Primary Hover:** `#40916C` (Hijau Sedang) — Untuk interaksi hover tombol primer.
- **Secondary:** `#52B788` (Hijau Muda) — Untuk badge "Best Seller", label promo, highlight.
- **Accent:** `#F2A63D` (Kuning Emas) — Untuk CTA Booking (Tombol), Bintang Rating, Harga.
- **Background:** `#F8F9FA` (Abu Muda) — Latar belakang utama halaman (seksi tertentu).
- **Surface:** `#FFFFFF` (Putih) — Latar belakang Card, form, navbar.
- **Text Primary:** `#212529` (Abu Gelap) — Teks utama, judul destinasi.
- **Text Secondary:** `#6C757D` (Abu Sedang) — Deskripsi, durasi, fasilitas.
- **Border:** `#DEE2E6` (Abu Terang) — Garis pembatas card, input form, divider.

## 2. Tipografi (Typography)

- **Heading / Judul (H1 - H4):** `Poppins` (Bold/SemiBold). Gunakan untuk judul hero, judul seksi, nama destinasi, dsb.
- **Body / Paragraf:** `Inter` (Regular/Medium). Gunakan untuk deskripsi paket, itinerary, fasilitas, navigasi teks.

*Setup di Tailwind (contoh):* `font-poppins` untuk heading, `font-sans` (Inter) untuk default body.

## 3. Komponen Utama (Core UI Components)

### A. Tombol (Buttons)
- **Border Radius:** `rounded-lg` (8px).
- **Primary Button:** Latar `#2D6A4F`, teks putih, hover `#40916C`. Tambahkan efek bayangan halus saat hover.
- **Accent/Booking Button:** Latar `#F2A63D`, teks putih.
- **Ghost/Outline Button:** Transparan, border `#2D6A4F`, teks `#2D6A4F`. Hover memunculkan latar dengan opasitas rendah.

### B. Kartu (Cards - Paket Wisata)
- **Background:** Putih (`#FFFFFF`).
- **Border & Radius:** Border 1px `#DEE2E6`, radius `rounded-xl` (12px).
- **Shadow:** Halus pada state normal (`shadow-sm` atau `0 2px 8px rgba(0,0,0,0.06)`). Saat di-hover, bayangan menjadi lebih besar dan kartu sedikit terangkat (`-translate-y-1`).
- **Gambar:** Rasio gambar `aspect-[4/3]` dengan `object-cover`.

### C. Layout & Spacing
- **Container Utama:** Lebar maksimum `max-w-7xl` (1280px), rata tengah `mx-auto`, dengan padding horizontal (`px-4` di mobile, `px-10` atau `px-20` di desktop).
- **Section Spacing:** Berikan jarak yang luas antar seksi (contoh: `py-12` untuk mobile, `py-24` untuk desktop).
- **Grid System:** 
  - Desktop: Umumnya 3 atau 4 kolom (`grid-cols-3` atau `grid-cols-4`).
  - Tablet: 2 kolom (`grid-cols-2`).
  - Mobile: 1 kolom (`grid-cols-1`).

## 4. Gaya Spesifik & Aset Visual

- **Gradien Hero:** Latar belakang gambar dengan overlay gradien dari gelap di bawah ke transparan di atas, agar teks tetap terbaca: `bg-gradient-to-t from-[#1B4332]/85 to-transparent`.
- **Ikon:** Gunakan dari library `lucide-react`. Ukuran ikon rata-rata `w-5 h-5` atau `w-6 h-6`.
- **Badge/Label:** Gunakan sudut membundar (misal `rounded-full`), teks kecil (`text-xs` atau `text-sm`), font tebal (Medium/SemiBold).

*Fokus Utama: Desain harus terlihat Premium, Bersih, dan Mengundang Petualangan. Jangan gunakan gaya yang kaku. Pastikan micro-interactions (hover, fokus, klik) berjalan mulus.*
