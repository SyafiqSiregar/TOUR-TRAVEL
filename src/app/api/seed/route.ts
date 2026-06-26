import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    // Check if admin exists
    const existingAdmin = await prisma.admin.findUnique({
      where: { email: 'admin@monetravel.com' }
    })

    if (!existingAdmin) {
      await prisma.admin.create({
        data: {
          email: 'admin@monetravel.com',
          password: 'admin', // Simple for prototype, hash in production
          name: 'Super Admin',
        }
      })
    }

    // Seed Destinations
    const destinationsCount = await prisma.destination.count()
    if (destinationsCount === 0) {
      const destinations = [
        { 
          name: "Bali Romantic 4H3M", 
          loc: "Bali", 
          dist: "1,200 Km", 
          rating: 4.9, 
          img: "/assets/hero-bali.png",
          details: "Rasakan momen romantis di Bali dengan fasilitas privat villa, dinner romantis di pinggir pantai Jimbaran, dan tur eksklusif ke Nusa Penida. Paket ini dirancang khusus untuk pasangan yang mencari ketenangan dan privasi.",
          price: "Rp 4.5Jt"
        },
        { 
          name: "Raja Ampat Explorer", 
          loc: "Papua", 
          dist: "3,100 Km", 
          rating: 5.0, 
          img: "/assets/hero-raja-ampat.png",
          details: "Eksplorasi kepulauan Raja Ampat yang magis. Snorkeling bersama pari manta, mengunjungi Wayag, dan menginap di resort terapung dengan pemandangan laut sebening kristal.",
          price: "Rp 12.5Jt"
        },
        { 
          name: "Bromo Sunrise Trek", 
          loc: "Jawa Timur", 
          dist: "800 Km", 
          rating: 4.8, 
          img: "/assets/hero-bromo.png",
          details: "Saksikan salah satu matahari terbit terbaik di dunia dari Penanjakan 1. Trip menggunakan Jeep 4WD mengelilingi lautan pasir dan mendaki kawah Bromo yang legendaris.",
          price: "Rp 1.2Jt"
        },
        { 
          name: "Lombok Island Hopping", 
          loc: "NTB", 
          dist: "1,350 Km", 
          rating: 4.7, 
          img: "/assets/dest-lombok.png",
          details: "Jelajahi keindahan tiga gili (Trawangan, Meno, Air) dan nikmati budaya lokal suku Sasak. Termasuk fasilitas penjemputan bandara dan penginapan tepi pantai.",
          price: "Rp 2.8Jt"
        },
        { 
          name: "Komodo Sailing 3H2M", 
          loc: "NTT", 
          dist: "1,800 Km", 
          rating: 4.9, 
          img: "/assets/dest-komodo.png",
          details: "Berlayar mengelilingi Taman Nasional Komodo dengan kapal Phinisi premium. Kunjungi Pulau Padar, Pink Beach, dan berinteraksi langsung dengan Komodo di habitat aslinya.",
          price: "Rp 3.5Jt"
        },
      ]

      for (const d of destinations) {
        await prisma.destination.create({ data: d })
      }
    }

    // Seed Programs
    const programsCount = await prisma.program.count()
    if (programsCount === 0) {
      const programs = [
        {
          title: "Study Tour Sekolah",
          description: "Perjalanan edukasi dengan keamanan ekstra dan nilai pendidikan untuk siswa-siswi.",
          icon: "GraduationCap",
          href: "/study-tour",
          color: "bg-primary",
        },
        {
          title: "Overland Jawa-Bali",
          description: "Nikmati perjalanan darat mewah lintas provinsi dengan kenyamanan eksklusif GP Holiday.",
          icon: "Bus",
          href: "/overland",
          color: "bg-[#1B4332]",
        },
        {
          title: "Mudik Mahasiswa",
          description: "Carter bus khusus paguyuban mahasiswa Lampung di Jogja. Pulang kampung seru & aman.",
          icon: "Users",
          href: "/mudik-mahasiswa",
          color: "bg-accent",
        },
      ]

      for (const p of programs) {
        await prisma.program.create({ data: p })
      }
    }

    // Seed Gallery
    const galleryCount = await prisma.galleryItem.count()
    if (galleryCount === 0) {
      const galleryItems = [
        {
          img: "/assets/hero-bromo.png",
          title: "Sunrise Penanjakan",
          category: "Adventure",
          location: "Bromo",
          aspectRatio: "aspect-square",
        },
        {
          img: "/assets/hero-bali.png",
          title: "Private Villa Retreat",
          category: "Honeymoon",
          location: "Bali",
          aspectRatio: "aspect-[3/4]",
        },
        {
          img: "/assets/hero-raja-ampat.png",
          title: "Eksplorasi Wayag",
          category: "Premium Trip",
          location: "Raja Ampat",
          aspectRatio: "aspect-[4/5]",
        },
        {
          img: "/assets/dest-lombok.png",
          title: "Island Hopping Gili",
          category: "Study Tour",
          location: "Lombok",
          aspectRatio: "aspect-square",
        },
        {
          img: "/assets/dest-komodo.png",
          title: "Trekking Pulau Padar",
          category: "Adventure",
          location: "Komodo",
          aspectRatio: "aspect-[4/3]",
        },
      ]

      for (const g of galleryItems) {
        await prisma.galleryItem.create({ data: g })
      }
    }

    return NextResponse.json({ success: true, message: 'Database seeded' })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}
