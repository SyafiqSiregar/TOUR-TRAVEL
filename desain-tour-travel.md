# ✈️ NusaJelajah — Rancangan Desain Website Tour & Travel

> **Proyek:** NusaJelajah — Platform Tour & Travel Indonesia  
> **Versi Desain:** 1.0  
> **Tanggal:** Juni 2026  
> **Tim:** NusaJelajah Design Team

---

## Daftar Isi

1. [Ringkasan Proyek](#1-ringkasan-proyek)
2. [Identitas Brand](#2-identitas-brand)
3. [Sistem Warna](#3-sistem-warna)
4. [Tipografi](#4-tipografi)
5. [Komponen UI](#5-komponen-ui)
6. [Struktur Halaman (Sitemap)](#6-struktur-halaman-sitemap)
7. [Wireframe & Layout Tiap Seksi](#7-wireframe--layout-tiap-seksi)
8. [Desain Responsif](#8-desain-responsif)
9. [Spesifikasi Interaksi & Animasi](#9-spesifikasi-interaksi--animasi)
10. [Alur Pengguna (User Flow)](#10-alur-pengguna-user-flow)
11. [Panduan Aksesibilitas](#11-panduan-aksesibilitas)
12. [Aset & Gambar](#12-aset--gambar)

---

## 1. Ringkasan Proyek

### Deskripsi Singkat
**NusaJelajah** adalah platform tour & travel berbasis digital yang menghubungkan wisatawan dengan paket perjalanan terbaik ke destinasi-destinasi unggulan di seluruh Indonesia dan mancanegara. Website ini dirancang dengan antarmuka yang bersih, modern, dan intuitif agar proses pencarian dan pemesanan paket wisata terasa mudah dan menyenangkan.

### Tujuan Desain
- Memudahkan pengguna menemukan paket wisata sesuai keinginan dan anggaran
- Mendorong pengunjung untuk mendaftar dan melakukan pemesanan
- Menampilkan destinasi unggulan secara visual yang menggugah selera jalan-jalan
- Membangun kepercayaan melalui testimoni, rating, dan transparansi harga

### Target Pengguna
| Segmen | Deskripsi |
|--------|-----------|
| Wisatawan Mandiri | Individu atau pasangan yang merencanakan perjalanan sendiri |
| Keluarga | Keluarga yang mencari paket liburan bersama anak |
| Grup & Komunitas | Rombongan kantor, komunitas hobi, atau sekolah |
| Travel Agent | Mitra agen perjalanan yang ingin menjual paket |

---

## 2. Identitas Brand

### Nama & Tagline
- **Nama:** NusaJelajah
- **Tagline:** *"Jelajahi Dunia, Mulai dari Sini"*
- **Sub-tagline:** *"Perjalanan Tak Terlupakan, Harga yang Terjangkau"*

### Nilai Brand (Brand Values)
| Nilai | Deskripsi |
|-------|-----------|
| 🚀 Praktis | Pemesanan paket wisata cepat, mudah, dan kapan saja |
| 🔍 Transparan | Harga jelas tanpa biaya tersembunyi |
| 💚 Berkesan | Setiap perjalanan dirancang untuk menciptakan kenangan indah |
| ♻️ Berkelanjutan | Mendukung wisata ramah lingkungan dan budaya lokal |
| 🤝 Terpercaya | Didukung pemandu bersertifikat dan ulasan wisatawan nyata |

### Tone of Voice
- Antusias dan inspiratif
- Informatif tanpa terasa kaku
- Mengundang rasa ingin tahu dan petualangan
- Ramah untuk semua kalangan usia dan tipe wisatawan

---

## 3. Sistem Warna

### Palet Warna Utama

```
┌─────────────────────────────────────────────────────────────┐
│  PRIMARY        SECONDARY      ACCENT          NEUTRAL      │
│                                                             │
│  ████████       ████████       ████████       ████████     │
│  #2D6A4F        #40916C        #F2A63D        #F8F9FA      │
│  Hijau Tua      Hijau Sedang   Kuning Emas    Abu Muda     │
│  (Utama)        (Hover)        (CTA/Aksen)    (Background) │
│                                                             │
│  ████████       ████████       ████████       ████████     │
│  #1B4332        #52B788        #FFFFFF         #212529     │
│  Hijau Gelap    Hijau Muda     Putih           Abu Gelap   │
│  (Dark/Footer)  (Highlight)    (Teks Terang)   (Teks)      │
└─────────────────────────────────────────────────────────────┘
```

> ✅ **Palet warna identik dengan template Rebox** — hijau alam mencerminkan nuansa petualangan, alam terbuka, dan kesegaran perjalanan yang sangat cocok untuk brand tour & travel.

### Penggunaan Warna

| Token | Warna | Hex | Digunakan Untuk |
|-------|-------|-----|-----------------|
| `color-primary` | Hijau Tua | `#2D6A4F` | Tombol utama, header aktif, badge harga |
| `color-primary-hover` | Hijau Sedang | `#40916C` | State hover tombol primer |
| `color-secondary` | Hijau Muda | `#52B788` | Badge "Best Seller", label promo |
| `color-accent` | Kuning Emas | `#F2A63D` | Harga, bintang rating, CTA sekunder |
| `color-bg` | Abu Muda | `#F8F9FA` | Latar belakang halaman |
| `color-surface` | Putih | `#FFFFFF` | Latar card paket, modal booking |
| `color-text-primary` | Abu Gelap | `#212529` | Teks utama, nama destinasi |
| `color-text-secondary` | Abu Sedang | `#6C757D` | Deskripsi, durasi, fasilitas |
| `color-border` | Abu Terang | `#DEE2E6` | Garis card, input form |
| `color-success` | Hijau | `#28A745` | Status pembayaran sukses |
| `color-warning` | Kuning | `#FFC107` | Rating, promo terbatas |
| `color-danger` | Merah | `#DC3545` | Error form, sold out |

### Gradien
```css
/* Gradien Hero Section — langit ke alam */
background: linear-gradient(135deg, #2D6A4F 0%, #40916C 50%, #52B788 100%);

/* Gradien overlay foto destinasi */
background: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(27,67,50,0.85) 100%);

/* Gradien tombol CTA booking */
background: linear-gradient(90deg, #2D6A4F, #40916C);

/* Gradien badge harga */
background: linear-gradient(90deg, #F2A63D, #e8940a);
```

---

## 4. Tipografi

### Font Family
| Jenis | Font | Sumber |
|-------|------|--------|
| **Heading** | `Poppins` (Bold/SemiBold) | Google Fonts |
| **Body** | `Inter` (Regular/Medium) | Google Fonts |
| **Aksen/Caption** | `Poppins` (Light/Italic) | Google Fonts |
| **Monospace (opsional)** | `JetBrains Mono` | Google Fonts |

### Skala Tipografi

```
Display XL  →  font-size: 56px / line-height: 1.15 / weight: 700
             →  Digunakan: Headline hero "Jelajahi Dunia, Mulai dari Sini"

Display L   →  font-size: 48px / line-height: 1.2  / weight: 700
             →  Digunakan: Judul seksi besar "Destinasi Terpopuler"

H1          →  font-size: 36px / line-height: 1.25 / weight: 700
             →  Digunakan: Judul halaman, judul seksi

H2          →  font-size: 28px / line-height: 1.3  / weight: 600
             →  Digunakan: Sub-judul "Paket Pilihan Minggu Ini"

H3          →  font-size: 22px / line-height: 1.4  / weight: 600
             →  Digunakan: Nama destinasi di card

H4          →  font-size: 18px / line-height: 1.5  / weight: 600
             →  Digunakan: Harga paket, label fitur

Body L      →  font-size: 18px / line-height: 1.7  / weight: 400
             →  Digunakan: Deskripsi intro destinasi

Body M      →  font-size: 16px / line-height: 1.7  / weight: 400
             →  Digunakan: Itinerary, deskripsi paket

Body S      →  font-size: 14px / line-height: 1.6  / weight: 400
             →  Digunakan: Fasilitas, durasi, info peserta

Caption     →  font-size: 12px / line-height: 1.5  / weight: 400
             →  Digunakan: Syarat & ketentuan, catatan harga

Label       →  font-size: 12px / line-height: 1.4  / weight: 600
             →  Digunakan: Badge "Best Seller", "Promo", "Full"
```

---

## 5. Komponen UI

### 5.1 Tombol (Button)

```
┌──────────────────────────────────────────────────────────┐
│  PRIMARY BUTTON                                          │
│  ┌───────────────────┐                                   │
│  │   Pesan Sekarang  │  bg: #2D6A4F  text: white        │
│  └───────────────────┘  hover: #40916C  radius: 8px     │
│                          padding: 12px 28px              │
│                                                          │
│  SECONDARY BUTTON                                        │
│  ┌───────────────────┐                                   │
│  │   Lihat Semua     │  bg: transparent  border: #2D6A4F │
│  └───────────────────┘  text: #2D6A4F  hover: fill      │
│                                                          │
│  GHOST BUTTON                                            │
│  ┌───────────────────┐                                   │
│  │      Masuk        │  bg: transparent  text: #2D6A4F   │
│  └───────────────────┘  hover: bg rgba(45,106,79,0.08)  │
│                                                          │
│  ACCENT BUTTON (CTA Booking)                             │
│  ┌───────────────────┐                                   │
│  │   Booking Kini →  │  bg: #F2A63D  text: white        │
│  └───────────────────┘  hover: darken 10%               │
└──────────────────────────────────────────────────────────┘
```

**Spesifikasi Tombol:**
- Border radius: `8px`
- Padding: `12px 28px` (medium), `8px 20px` (small), `16px 36px` (large)
- Font: `Poppins SemiBold 15px`
- Transisi: `all 0.2s ease`
- Box shadow (hover): `0 4px 12px rgba(45,106,79,0.3)`

---

### 5.2 Kartu Paket Wisata (Tour Package Card)

```
┌────────────────────────────┐
│  ┌──────────────────────┐  │
│  │ 📷 [Foto Destinasi]  │  │  ← Gambar (ratio 4:3)
│  │                      │  │     height: 200px, object-fit: cover
│  │  [Best Seller]       │  │  ← Badge pojok kiri atas
│  │  [3H2M]              │  │  ← Durasi badge pojok kanan atas
│  └──────────────────────┘  │
│                            │
│  Bali — Ubud & Seminyak    │  ← H3 / 16px SemiBold
│  ★★★★☆ (4.5) · 128 ulasan │  ← Rating / #F2A63D + Body S
│  🏨 Hotel  🍽 Makan  🚌 AC │  ← Fasilitas ikon / Caption
│                            │
│  Mulai dari                │  ← Label / 12px / abu
│  Rp 1.850.000 / orang      │  ← Harga / 20px Bold / #2D6A4F
│                            │
│  ┌──────────────────────┐  │
│  │    Lihat Detail  →   │  │  ← Ghost Button / full width
│  └──────────────────────┘  │
└────────────────────────────┘
  bg: #FFFFFF
  border: 1px solid #DEE2E6
  border-radius: 12px
  box-shadow: 0 2px 8px rgba(0,0,0,0.06)
  hover box-shadow: 0 8px 24px rgba(45,106,79,0.15)
  hover transform: translateY(-4px)
  transition: all 0.25s ease
```

---

### 5.3 Kartu Statistik (Stats Card)

```
┌───────────────────────┐
│        500+           │  ← Angka / 48px Bold / #2D6A4F
│   Paket Wisata        │  ← Label / 14px / #6C757D
└───────────────────────┘
  bg: #FFFFFF
  border-radius: 16px
  padding: 32px 24px
  text-align: center
  box-shadow: 0 4px 16px rgba(0,0,0,0.08)
```

---

### 5.4 Kartu Testimoni Wisatawan (Testimonial Card)

```
┌──────────────────────────────────────────────┐
│  ┌─────────┐                                 │
│  │ [Foto]  │  Rina Salsabila                 │  ← Avatar 48px circle
│  └─────────┘  Wisatawan dari Bandung         │  ← Asal / Caption
│                                              │
│  "Perjalanan ke Raja Ampat bersama          │  ← Quote / italic
│   NusaJelajah benar-benar luar biasa!        │     Body M
│   Pemandu sangat profesional dan             │
│   harganya sesuai ekspektasi."               │
│                                              │
│  ★★★★★   Bali Tour · Maret 2026             │  ← Rating + Paket
└──────────────────────────────────────────────┘
  bg: #FFFFFF
  border-left: 4px solid #2D6A4F
  border-radius: 12px
  padding: 24px
  box-shadow: 0 2px 12px rgba(0,0,0,0.07)
```

---

### 5.5 Kartu Langkah Pemesanan (Step Card)

```
┌──────────────────────────────┐
│   ① / ② / ③ / ④            │  ← Nomor langkah / 32px Bold
│                              │     bg circle: #2D6A4F  text: white
│   Pilih Paket                │  ← H3
│   Temukan destinasi impian   │  ← Body S / text-secondary
│   dan pilih paket terbaik    │
└──────────────────────────────┘
  border-radius: 16px
  padding: 28px 24px
  bg: #F8F9FA → hover: white + shadow
```

---

### 5.6 Filter Chip / Tab (Category Filter)

```
  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────────┐  ┌────────────┐
  │  Semua   │  │  Domestik│  │ Internasi│  │  Honeymoon │  │  Keluarga  │
  └──────────┘  └──────────┘  └──────────┘  └────────────┘  └────────────┘

  Default:  bg: #F0F0F0  text: #6C757D  border-radius: 20px
  Active:   bg: #2D6A4F  text: white
  Hover:    bg: #DEE2E6
  padding: 8px 18px
  font: 14px Medium
```

---

### 5.7 Navigasi (Navbar)

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ✈️ NusaJelajah   Beranda  Destinasi  Paket  Tentang  Blog  FAQ   Masuk  Pesan│
└──────────────────────────────────────────────────────────────────────────────┘
  bg: rgba(255,255,255,0.95)  backdrop-filter: blur(10px)
  border-bottom: 1px solid #DEE2E6
  position: sticky  top: 0  z-index: 100
  height: 64px  padding: 0 80px (desktop) / 0 16px (mobile)

  Logo: font Poppins Bold 20px / warna primer
  Nav links: 15px Regular / color: #212529 / hover: color #2D6A4F
  Active link: color: #2D6A4F / font-weight: 600
  CTA "Pesan Sekarang": Primary Button (kecil)
```

---

### 5.8 Search Bar Destinasi (Hero Search)

```
┌──────────────────────────────────────────────────────────────────────┐
│  🔍 Mau ke mana?    📅 Pilih Tanggal    👥 Berapa Orang?   [Cari]   │
└──────────────────────────────────────────────────────────────────────┘
  bg: white  border-radius: 16px
  box-shadow: 0 8px 32px rgba(0,0,0,0.15)
  padding: 20px 28px
  Divider antar field: 1px solid #DEE2E6
  Tombol Cari: bg #2D6A4F  text white  border-radius: 12px
  Input font: 15px  placeholder: #6C757D
```

---

### 5.9 Accordion FAQ

```
┌──────────────────────────────────────────────────────┐
│  Apakah harga sudah termasuk akomodasi?          [+] │  ← Tertutup
├──────────────────────────────────────────────────────┤
│  Bagaimana jika saya ingin cancel booking?       [-] │  ← Terbuka
│                                                      │
│  Pembatalan lebih dari 7 hari sebelum keberangkatan  │  ← Konten
│  akan mendapatkan refund penuh...                    │
└──────────────────────────────────────────────────────┘
  border: 1px solid #DEE2E6
  border-radius: 12px
  padding question: 20px 24px
  padding answer: 0 24px 20px
  animation: max-height 0.3s ease
  bg hover: #F8F9FA
```

---

### 5.10 Footer

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  ✈️ NusaJelajah                  Destinasi                      │
│  Jelajahi Dunia, Mulai dari      Bali  Lombok  Raja Ampat       │
│  Sini. Platform tour & travel    Labuan Bajo  Yogyakarta        │
│  terpercaya untuk perjalanan     Paket Wisata                   │
│  tak terlupakan.                 Honeymoon  Keluarga            │
│                                  Grup  Backpacker               │
│  Kepercayaan · Petualangan · Kenyamanan · Kenangan · Alam       │
│                                                                  │
│  ─────────────────────────────────────────────────────────────  │
│  © 2026 NusaJelajah. Jelajahi Dunia, Mulai dari Sini.           │
│  Semua Hak Dilindungi.                                          │
└──────────────────────────────────────────────────────────────────┘
  bg: #1B4332 (hijau gelap)
  text: rgba(255,255,255,0.85)
  link hover: white
  padding: 64px 80px 32px
```

---

## 6. Struktur Halaman (Sitemap)

```
nusajelajah.com/
│
├── / (Home / Landing Page)
│   ├── #beranda       → Hero Section + Search Bar
│   ├── #destinasi     → Destinasi Terpopuler
│   ├── #paket         → Paket Wisata Unggulan
│   ├── #tentang       → Tentang NusaJelajah
│   ├── #cara-booking  → 4 Langkah Mudah Pesan
│   ├── #testimoni     → Ulasan Wisatawan
│   └── #faq           → FAQ
│
├── /destinasi         → Halaman Semua Destinasi
│   └── /destinasi/[slug] → Detail Destinasi
│
├── /paket             → Halaman Semua Paket
│   └── /paket/[slug]     → Detail Paket + Form Booking
│
├── /blog              → Artikel Wisata
│   └── /blog/[slug]      → Detail Artikel
│
├── /tentang           → Profil Perusahaan
├── /kontak            → Kontak & Customer Service
├── /login             → Halaman Login
├── /register          → Halaman Registrasi
│
└── (Setelah Login)
    ├── /dashboard         → Dashboard Pengguna
    ├── /booking/baru      → Form Booking Paket
    ├── /booking/[id]      → Detail & Status Booking
    ├── /riwayat           → Riwayat Perjalanan
    └── /profil            → Profil Pengguna
```

---

## 7. Wireframe & Layout Tiap Seksi

### 7.1 SEKSI 1 — Navigation Bar

```
┌────────────────────────────────────────────────────────────────────────┐
│  ✈️ NusaJelajah  [Beranda][Destinasi][Paket][Tentang][Blog][FAQ]  [Masuk][Pesan] │
└────────────────────────────────────────────────────────────────────────┘
  Layout: Flexbox space-between
  Max-width container: 1280px
  Sticky top / blur background saat scroll
  Logo + nama brand di kiri, nav di tengah, CTA di kanan
```

---

### 7.2 SEKSI 2 — Hero Section (`#beranda`)

```
┌──────────────────────────────────────────────────────────────────────┐
│              [BACKGROUND FOTO DESTINASI + OVERLAY GRADIEN]           │
│                                                                      │
│   Jelajahi Dunia,              🏝️ Foto Destinasi Indah              │
│   Mulai dari Sini              (Raja Ampat / Bali / Komodo)         │
│                                                                      │
│   Perjalanan Tak Terlupakan,                                         │
│   Harga yang Terjangkau                                              │
│                                                                      │
│   500+ Destinasi · 10.000+ Wisatawan Puas · Pemandu Bersertifikat   │
│                                                                      │
│   [ Mulai Jelajahi → ]    [ Lihat Paket Promo ]                      │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │ 🔍 Mau ke mana?  📅 Tanggal?   👥 Berapa Orang?    [  Cari  ] │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────┘

Layout:
  - Fullscreen hero (min-height: 100vh)
  - Teks & search bar di overlay tengah
  - Foto background parallax dengan overlay gradien gelap
  - Search bar floating di atas foto, sudut rounded
  - 2 tombol CTA (primer + sekunder ghost)
```

---

### 7.3 SEKSI 3 — Filter & Grid Destinasi Terpopuler (`#destinasi`)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│         Destinasi Terpopuler                                    │
│  Temukan keindahan dari Sabang sampai Merauke                   │
│                                                                 │
│  [Semua] [Domestik] [Internasional] [Pantai] [Gunung] [Budaya] │
│                                                                 │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌──────────┐  │
│  │ 📷 Bali    │  │ 📷 Lombok  │  │📷 Raja Ampat│  │📷 Komodo │  │
│  │ ★4.9       │  │ ★4.8       │  │ ★5.0        │  │ ★4.7     │  │
│  │ Rp 1.8jt   │  │ Rp 1.2jt   │  │ Rp 3.5jt    │  │ Rp 2.1jt │  │
│  └────────────┘  └────────────┘  └────────────┘  └──────────┘  │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌──────────┐  │
│  │📷 Yogyakarta│  │📷 Lab. Bajo│  │📷 Manado   │  │📷 Maluku │  │
│  └────────────┘  └────────────┘  └────────────┘  └──────────┘  │
│                                                                 │
│                   [ Lihat Semua Destinasi ]                     │
└─────────────────────────────────────────────────────────────────┘

Grid: 4 kolom (desktop) / 2 kolom (tablet) / 1 kolom (mobile)
Gap: 20px
Setiap card: foto destinasi + nama + rating + harga mulai dari
```

---

### 7.4 SEKSI 4 — Statistik Kepercayaan (`#statistik`)

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│         Dipercaya Ribuan Wisatawan Indonesia              │
│    Bersama kami, setiap perjalanan jadi lebih bermakna   │
│                                                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌─────────┐ │
│  │  500+    │  │ 10.000+  │  │  50+     │  │   98%   │ │
│  │ Paket    │  │Wisatawan │  │  Destinasi│  │Kepuasan │ │
│  │ Wisata   │  │  Puas    │  │  Tersedia │  │Pelanggan│ │
│  └──────────┘  └──────────┘  └──────────┘  └─────────┘ │
│                                                          │
└──────────────────────────────────────────────────────────┘

Layout: 4 kolom stats card sejajar
bg: Putih atau abu sangat muda
Animasi counter: scroll-triggered number count-up
```

---

### 7.5 SEKSI 5 — Paket Wisata Unggulan (`#paket`)

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│         Paket Wisata Pilihan Minggu Ini                  │
│  Harga terbaik, pengalaman tak terlupakan                │
│                                                          │
│  [Semua] [Honeymoon] [Keluarga] [Adventure] [Backpacker] │
│                                                          │
│  ┌───────────────────┐  ┌───────────────────┐           │
│  │ [Best Seller] 🏝  │  │ [Promo!] 🏔        │           │
│  │ Bali Romantic     │  │ Bromo Tengger      │           │
│  │ 4H3M              │  │ 3H2M               │           │
│  │ ★4.9 · 234 ulasan │  │ ★4.7 · 89 ulasan  │           │
│  │ 🏨🍽🚌💆           │  │ 🏕🍽🚌🥾           │           │
│  │ Mulai             │  │ Mulai              │           │
│  │ Rp 2.450.000/org  │  │ Rp 875.000/org     │           │
│  │ [Lihat Detail →]  │  │ [Lihat Detail →]   │           │
│  └───────────────────┘  └───────────────────┘           │
│                                                          │
│                 [ Lihat Semua Paket ]                    │
└──────────────────────────────────────────────────────────┘

Grid: 3 kolom (desktop) / 2 kolom (tablet) / 1 kolom (mobile)
```

---

### 7.6 SEKSI 6 — Tentang NusaJelajah (`#tentang`)

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│   Mengapa Pilih NusaJelajah?                             │
│                                                          │
│   NusaJelajah hadir sebagai platform tour & travel       │
│   digital yang menghubungkan wisatawan dengan            │
│   pengalaman perjalanan terbaik. Didukung pemandu        │
│   bersertifikat, harga transparan, dan layanan           │
│   24 jam, kami pastikan setiap perjalanan sempurna.      │
│                                                          │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────┐  │
│  │  🚀 Praktis   │  │  🔍 Transparan │  │ 💚 Berkesan│  │
│  │  Booking      │  │  Harga jelas,  │  │ Pemandu    │  │
│  │  online 24/7  │  │  tanpa biaya   │  │ tersertifi-│  │
│  │  kapan saja   │  │  tersembunyi   │  │ kasi       │  │
│  └────────────────┘  └────────────────┘  └────────────┘  │
│                                                          │
│   "Perjalanan adalah satu-satunya hal yang kau beli      │
│    yang membuatmu semakin kaya."                         │
│                                                          │
└──────────────────────────────────────────────────────────┘

Layout:
  - Teks penjelasan + 3 feature card grid
  - Quote dalam blockquote dengan border kiri hijau primer
  - bg section: #F8F9FA
```

---

### 7.7 SEKSI 7 — Cara Booking (`#cara-booking`)

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│         Pesan Paket Wisata dalam 4 Langkah Mudah         │
│                                                          │
│   ①              ②              ③              ④        │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────┐ │
│  │ Pilih     │  │ Isi Form  │  │ Bayar     │  │Nikmati│ │
│  │ Destinasi │  │ Booking   │  │ & Konfirm │  │Liburan│ │
│  │ & Paket   │  │           │  │           │  │       │ │
│  │ Cari dan  │  │ Lengkapi  │  │ Pilih     │  │E-tiket│ │
│  │ bandingkan│  │ data diri │  │ metode    │  │dikirim│ │
│  │ paket     │  │ & peserta │  │ bayar     │  │ke HP  │ │
│  └───────────┘  └───────────┘  └───────────┘  └───────┘ │
│        └──────────────┴──────────────┘                   │
│                    ↑ connector line                       │
└──────────────────────────────────────────────────────────┘

Layout: 4 kolom dengan garis konektor antar langkah
Ikon langkah: lingkaran nomor berwarna primer
```

---

### 7.8 SEKSI 8 — Mockup / Tampilan Platform

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  Pengalaman Booking Paling                                 │
│  Nyaman dan Modern                                         │
│                             ┌──────────────────────┐      │
│  Antarmuka intuitif yang    │  [Mockup Dashboard   │      │
│  memudahkan kamu mencari,   │   Booking Wisata]    │      │
│  membandingkan, dan         │                      │      │
│  memesan paket wisata       │  Daftar Booking      │      │
│  kapan saja dan di mana     │  Status: Confirmed ✅│      │
│  saja dari genggaman.       │  Bali · 15 Juli 2026 │      │
│                             └──────────────────────┘      │
│  [ Mulai Pesan Sekarang → ]                               │
│                                                            │
└────────────────────────────────────────────────────────────┘

Layout: 2 kolom (teks kiri / mockup kanan)
bg: Gradien hijau gelap ke hijau sedang
text: putih
Mockup: drop shadow dramatis, sedikit miring (transform: rotate(-2deg))
```

---

### 7.9 SEKSI 9 — Testimoni Wisatawan

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│         Kata Wisatawan Kami                              │
│  Ribuan perjalanan, satu kesamaan: kepuasan             │
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │ [Avatar]     │  │ [Avatar]     │  │ [Avatar]     │  │
│  │ Rina S.      │  │ Budi P.      │  │ Sari D.      │  │
│  │ Bandung      │  │ Jakarta      │  │ Surabaya     │  │
│  │              │  │              │  │              │  │
│  │ "Liburan ke  │  │ "Guide-nya   │  │ "Harga sesuai│  │
│  │  Raja Ampat  │  │  profesional │  │  deskripsi,  │  │
│  │  luar biasa" │  │  banget!"    │  │  worth it!"  │  │
│  │ ★★★★★       │  │ ★★★★★       │  │ ★★★★☆       │  │
│  │ Raja Ampat   │  │ Bromo Tour   │  │ Bali 4D3N    │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│                                                          │
└──────────────────────────────────────────────────────────┘

Layout: 3 kolom desktop, 2 tablet, carousel 1 kolom mobile
bg: #F8F9FA
```

---

### 7.10 SEKSI 10 — FAQ (`#faq`)

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│             Pertanyaan Populer                           │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Apakah harga sudah termasuk akomodasi?         [+] │  │
│  └────────────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Bagaimana jika saya ingin cancel booking?      [+] │  │
│  └────────────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Apakah ada biaya tambahan saat di lokasi?      [+] │  │
│  └────────────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Apakah aman booking online di NusaJelajah?     [+] │  │
│  └────────────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Apakah tersedia paket untuk grup besar?        [+] │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
└──────────────────────────────────────────────────────────┘

Layout: 1 kolom, max-width: 720px, centered
Accordion dengan smooth animation
```

---

### 7.11 SEKSI 11 — Footer

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  Tag Nilai:                                                  │
│  [Kepercayaan] [Petualangan] [Kenyamanan] [Kenangan] [Alam] │
│                                                              │
│  "Jelajahi Dunia, Mulai dari Sini. Kami hadir untuk          │
│   memastikan setiap perjalananmu sempurna."                  │
│                                                              │
│  ──────────────────────────────────────────────────────────  │
│                                                              │
│  ✈️ NusaJelajah         Destinasi         Paket             │
│  Jelajahi Dunia,        Bali              Honeymoon         │
│  Mulai dari Sini.       Lombok            Keluarga          │
│                         Raja Ampat        Adventure         │
│                         Komodo            Backpacker        │
│                                                              │
│                         Perusahaan        Bantuan           │
│                         Tentang Kami      FAQ               │
│                         Blog              Kontak            │
│                         Karir             Syarat & Ketentuan│
│                                                              │
│  ──────────────────────────────────────────────────────────  │
│  © 2026 NusaJelajah. Jelajahi Dunia, Mulai dari Sini.       │
│  Semua Hak Dilindungi. · 🔒 SSL Secured · 💳 Payment Aman  │
└──────────────────────────────────────────────────────────────┘

bg: #1B4332
text: rgba(255,255,255,0.85)
```

---

## 8. Desain Responsif

### Breakpoints

| Breakpoint | Nama | Lebar Layar |
|-----------|------|-------------|
| `xs` | Extra Small (HP kecil) | < 480px |
| `sm` | Small (HP) | 480px – 767px |
| `md` | Medium (Tablet) | 768px – 1023px |
| `lg` | Large (Laptop) | 1024px – 1279px |
| `xl` | Extra Large (Desktop) | ≥ 1280px |

### Aturan Responsif Per Komponen

| Komponen | Desktop (`xl/lg`) | Tablet (`md`) | Mobile (`sm/xs`) |
|----------|-------------------|---------------|------------------|
| Navbar | Horizontal + semua link | Horizontal + beberapa link | Hamburger menu |
| Hero | Teks + search bar overlay | Teks + search bar | 1 kolom vertikal |
| Search Bar | 4 field inline | 2x2 grid | Stack vertikal |
| Destinasi Grid | 4 kolom | 2 kolom | 1 kolom |
| Paket Grid | 3 kolom | 2 kolom | 1 kolom |
| Stats | 4 kolom inline | 2x2 grid | 2x2 grid |
| Feature Cards | 3 kolom | 3 kolom | 1 kolom stack |
| Step Cards | 4 kolom + connector | 2x2 grid | 1 kolom |
| Testimonial | 3 kolom | 2 kolom | Carousel 1 slide |
| FAQ | Max 720px centered | Full width | Full width |
| Footer | 4 kolom | 2 kolom | 1 kolom stack |

### Container & Spacing Responsif

```css
/* Container */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;     /* xl/lg */
}

@media (max-width: 1023px) {
  .container { padding: 0 40px; }
}

@media (max-width: 767px) {
  .container { padding: 0 16px; }
}

/* Section padding */
.section { padding: 96px 0; }   /* desktop */
.section { padding: 64px 0; }   /* tablet */
.section { padding: 48px 0; }   /* mobile */
```

---

## 9. Spesifikasi Interaksi & Animasi

### 9.1 Efek Scroll

| Elemen | Animasi | Delay |
|--------|---------|-------|
| Hero headline | Fade-in + slide-up dari bawah | 0ms |
| Hero sub-text | Fade-in + slide-up | 150ms |
| Search bar | Fade-in + scale-up | 250ms |
| Hero CTA button | Fade-in + scale-up | 350ms |
| Stats cards | Count-up angka saat masuk viewport | — |
| Destinasi cards | Staggered fade-in (kiri ke kanan) | 50ms/card |
| Feature cards | Slide-in dari kiri | 0/150/300ms |
| Step cards | Slide-in dari bawah berurutan | 0/200/400/600ms |
| Testimoni cards | Fade-in grid sequentially | 100ms/card |

### 9.2 Hover States

```
Tombol           → background lebih gelap + box-shadow
Destinasi Card   → elevate (shadow) + translateY(-4px)
Paket Card       → elevate + scale(1.02)
Navbar link      → warna hijau primer + underline
FAQ item         → background #F8F9FA
Footer link      → warna putih penuh
Foto destinasi   → scale(1.05) dengan overflow:hidden
```

### 9.3 Loading States

```
Grid Destinasi (saat filter berubah):
  - Skeleton loader (abu shimmer) selama fetch data
  - Fade-in cards setelah data tersedia

Tombol "Cari":
  - Loading spinner + text berubah ("Mencari...")
  - Disabled state selama proses

Form Booking:
  - Validasi real-time per field
  - Tombol submit disabled hingga semua field valid
  - Loading spinner saat submit
```

### 9.4 Transisi Khusus Tour & Travel

```
Foto Hero        → Parallax scrolling (background-attachment: fixed)
Slideshow Hero   → Auto-slide foto destinasi (5 detik, fade transition)
Carousel Testimoni → Swipe gesture support (mobile)
Price Display    → Number format Rupiah dengan animasi angka
Map Integration  → Marker bounce saat destinasi di-hover di peta
```

---

## 10. Alur Pengguna (User Flow)

### 10.1 Alur Wisatawan Baru (Pencarian & Booking)

```
[Kunjungi Landing Page]
        ↓
[Gunakan Search Bar: Destinasi + Tanggal + Jumlah Orang]
        ↓
[Halaman Hasil Pencarian]
  → Filter: harga, durasi, kategori, rating
  → Sort: terpopuler, termurah, terbaru
        ↓
[Pilih & Klik Paket Wisata]
        ↓
[Halaman Detail Paket]
  → Foto galeri destinasi
  → Itinerary hari per hari
  → Fasilitas yang termasuk/tidak
  → Ulasan wisatawan
  → Pilih tanggal keberangkatan
        ↓
[Klik "Booking Sekarang"]
        ↓
[Daftar / Login]
        ↓
[Form Booking]
  → Data diri & peserta
  → Pilih tipe kamar (jika ada)
  → Request khusus
        ↓
[Halaman Pembayaran]
  → Pilih metode: Transfer, VA, QRIS, Kartu Kredit
  → Konfirmasi total harga
        ↓
[Booking Dikonfirmasi ✅]
  → E-tiket dikirim ke email
  → Notifikasi WhatsApp
  → Dashboard: status "Confirmed"
```

### 10.2 Alur Wisatawan Kembali (Return User)

```
[Login → Dashboard]
        ↓
[Lihat Riwayat Perjalanan]
        ↓
[Pilihan:]
  → Booking ulang paket yang sama
  → Lihat paket rekomendasi berdasarkan history
  → Tulis ulasan perjalanan sebelumnya
  → Download e-tiket / invoice
```

### 10.3 Alur Pembatalan (Cancellation)

```
[Dashboard → Riwayat Booking]
        ↓
[Pilih Booking → "Batalkan"]
        ↓
[Konfirmasi Pembatalan]
  → Info kebijakan refund
  → Estimasi dana kembali
        ↓
[Konfirmasi → Proses Refund]
  → Status: "Dalam Proses Refund"
  → Notifikasi email estimasi 3-7 hari kerja
```

---

## 11. Panduan Aksesibilitas

### Standar Target
NusaJelajah menargetkan kepatuhan **WCAG 2.1 Level AA**.

### Kontras Warna

| Pasangan | Rasio | Status |
|----------|-------|--------|
| Teks hitam (`#212529`) di bg putih | 16:1 | ✅ AAA |
| Teks putih di tombol `#2D6A4F` | 7.2:1 | ✅ AA |
| Teks abu `#6C757D` di bg putih | 4.6:1 | ✅ AA |
| Harga `#2D6A4F` di bg `#F8F9FA` | 6.1:1 | ✅ AA |
| Teks putih di foto + overlay gelap | min 4.5:1 | ✅ AA |

### Keyboard Navigation
- Semua elemen interaktif dapat diakses dengan `Tab`
- Focus state yang terlihat jelas: `outline: 2px solid #2D6A4F; outline-offset: 3px`
- Modal dapat ditutup dengan `Escape`
- Carousel dapat dioperasikan dengan tombol panah
- FAQ accordion dapat dioperasikan dengan `Enter` / `Space`
- Search bar: `Enter` untuk submit pencarian

### Screen Reader
- Semua foto destinasi memiliki `alt` text deskriptif ("Pantai Kuta Bali saat matahari terbenam")
- Ikon dekoratif diberi `aria-hidden="true"`
- Harga diberi format yang dapat dibaca: `aria-label="Mulai dari Rp 1.850.000 per orang"`
- Status booking menggunakan `aria-live="polite"`
- Heading hierarchy: `h1 → h2 → h3` (tidak melewati level)
- Form booking memiliki `<label>` lengkap untuk setiap field

---

## 12. Aset & Gambar

### Kebutuhan Aset Visual

| Nama Aset | Digunakan di | Deskripsi |
|-----------|-------------|-----------|
| `hero-bali.jpg` | Hero Section | Foto Pantai Bali dengan nuansa tropis |
| `hero-raja-ampat.jpg` | Hero Slideshow | Foto laut biru Raja Ampat dari atas |
| `hero-bromo.jpg` | Hero Slideshow | Foto Gunung Bromo saat sunrise |
| `dest-bali.jpg` | Card Destinasi | Foto iconic Pura Tanah Lot |
| `dest-lombok.jpg` | Card Destinasi | Foto Pantai Pink Lombok |
| `dest-raja-ampat.jpg` | Card Destinasi | Foto bawah laut Raja Ampat |
| `dest-komodo.jpg` | Card Destinasi | Foto komodo di alam liar |
| `dest-yogya.jpg` | Card Destinasi | Foto Candi Borobudur |
| `dest-labuan-bajo.jpg` | Card Destinasi | Foto Pulau Padar |
| `mockup-dashboard.png` | Seksi Mockup | Screenshot dashboard booking |
| `avatar-1.jpg` – `avatar-6.jpg` | Testimoni | Foto profil wisatawan |
| `logo-nusajelajah.svg` | Navbar, Footer | Logo brand |
| `icon-payment-*.svg` | Halaman Bayar | Ikon metode pembayaran |

### Spesifikasi Gambar

| Tipe | Ukuran | Format | Kualitas |
|------|--------|--------|----------|
| Hero background | 1920×1080px | WebP/JPG | 85% |
| Destinasi card thumbnail | 400×300px | WebP/JPG | 80% |
| Mockup platform | Max 600px wide | PNG (transparent) | 90% |
| Foto testimoni avatar | 96×96px | WebP/JPG | 80% |
| Ikon UI | 24×24 / 32×32px | SVG | — |
| Logo | Flexible | SVG | — |
| Foto galeri detail | 800×600px | WebP/JPG | 85% |

### Ikon System
Library: **Lucide Icons** (konsisten, stroke-based, modern)

Ikon yang dibutuhkan untuk Tour & Travel:
- `map-pin` — Lokasi destinasi
- `calendar` — Tanggal keberangkatan
- `users` — Jumlah peserta
- `star` — Rating & review
- `clock` — Durasi paket
- `hotel` / `bed` — Akomodasi
- `utensils` — Konsumsi termasuk
- `bus` / `car` — Transportasi
- `camera` — Foto & dokumentasi
- `shield-check` — Keamanan booking
- `credit-card` — Pembayaran
- `phone` — Customer service
- `arrow-right` — Navigasi / CTA
- `check-circle` — Fasilitas termasuk
- `x-circle` — Fasilitas tidak termasuk
- `search` — Search bar
- `menu` — Hamburger mobile
- `x` — Tutup/close modal
- `plus` / `minus` — Expand FAQ
- `log-in` — Masuk
- `user-plus` — Daftar
- `download` — Download e-tiket
- `share` — Share destinasi

---

## Catatan Pengembangan

### Tech Stack yang Disarankan
| Layer | Teknologi |
|-------|-----------|
| Frontend Framework | Next.js 14 (React) |
| Styling | Tailwind CSS |
| Animasi | Framer Motion / AOS |
| Ikon | Lucide React |
| Form | React Hook Form + Zod |
| State Management | Zustand |
| Peta | Leaflet.js / Google Maps API |
| Pembayaran | Midtrans / Xendit |
| Backend | Laravel / Node.js |
| Database | MySQL / PostgreSQL |
| Auth | Laravel Sanctum / NextAuth |
| Storage | AWS S3 / Cloudinary (gambar) |

### Prioritas Pengembangan (Sprint)

**Sprint 1 — Foundation**
- Setup project & design system (warna, tipografi, komponen dasar)
- Navbar & Footer
- Hero Section + Search Bar

**Sprint 2 — Core Listing**
- Grid Destinasi + filter & sorting
- Grid Paket Wisata + filter
- Halaman Detail Paket (galeri, itinerary, fasilitas)

**Sprint 3 — Supporting Content**
- Seksi Tentang, Statistik, Cara Booking
- Testimoni + FAQ Accordion
- Mockup Platform Section

**Sprint 4 — Auth & Booking Flow**
- Halaman Login & Register
- Form Booking multi-step
- Halaman Pembayaran (integrasi payment gateway)

**Sprint 5 — Dashboard & Post-Booking**
- Dashboard wisatawan
- Riwayat perjalanan
- E-tiket & invoice download
- Ulasan & rating

**Sprint 6 — Polish & Launch**
- Animasi & transisi
- Optimisasi performa (lazy load, WebP, CDN)
- Desain responsif final
- Aksesibilitas & SEO
- Testing & UAT

---

## Perbandingan Template: Rebox vs NusaJelajah

| Elemen | Rebox (Donasi) | NusaJelajah (Tour & Travel) |
|--------|---------------|----------------------------|
| Palet Warna | ✅ Identik | ✅ Identik |
| Tipografi | ✅ Identik | ✅ Identik |
| Komponen Dasar | ✅ Identik | ✅ Identik |
| Grid Card | Lokasi Rebox | Destinasi & Paket |
| Hero | Teks + filter tab | Foto destinasi + search bar |
| CTA Utama | "Mulai Sekarang" | "Pesan Sekarang" / "Cari" |
| Stats | Donasi, Penerima | Paket, Wisatawan, Kepuasan |
| Step Cards | 3 langkah donasi | 4 langkah booking |
| Accent (`#F2A63D`) | Rating lokasi | Harga, rating, CTA booking |
| Footer Dark | `#1B4332` | `#1B4332` |
| FAQ | Donasi & barang | Booking, cancel, pembayaran |

---

*Dokumen ini merupakan adaptasi template desain dari Rebox untuk kebutuhan platform Tour & Travel.*  
*Semua sistem desain (warna, tipografi, komponen) dipertahankan sepenuhnya.*

---

**© 2026 NusaJelajah Design Documentation — Dibuat dengan ✈️💚**
