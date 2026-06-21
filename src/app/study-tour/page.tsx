import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, GraduationCap, Users, ShieldCheck, Bus, Camera } from "lucide-react";

export default function StudyTourPage() {
  return (
    <main className="min-h-screen bg-bg selection:bg-primary selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/hero-bromo.png)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent font-bold text-sm tracking-widest mb-6">
            PROGRAM B2B / SEKOLAH
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
            Perjalanan <span className="text-accent">Edukasi</span> Terbaik<br/>Untuk Siswa Anda
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Lebih dari sekadar jalan-jalan. Kami merancang Study Tour yang menanamkan nilai kemandirian, budaya, dan wawasan kebangsaan dengan standar keamanan ekstra.
          </p>
          <button className="bg-primary hover:bg-primary-hover text-white rounded-lg px-8 py-4 font-bold shadow-lg transition-all hover:-translate-y-1">
            Konsultasi Rencana Tour
          </button>
        </div>
      </section>

      {/* Fasilitas Edukasi */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Fasilitas Rombongan Spesial</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Kami memahami kekhawatiran para Guru dan Orang Tua. Oleh karena itu, keselamatan dan kenyamanan adalah prioritas mutlak kami.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Keamanan Terjamin", desc: "Didampingi Tour Leader tersertifikasi & Asuransi Perjalanan." },
              { icon: Bus, title: "Armada VIP", desc: "Bekerja sama dengan GP Holiday, bus pariwisata eksekutif terbaru." },
              { icon: GraduationCap, title: "Konten Edukatif", desc: "Kunjungan kampus, museum, dan desa wisata yang mendidik." },
              { icon: Users, title: "Manajemen Grup", desc: "Sistem grouping teratur dengan komunikasi intens ke panitia." },
              { icon: Camera, title: "Dokumentasi Profesional", desc: "Video dan foto kegiatan resolusi tinggi untuk kenang-kenangan sekolah." },
              { icon: MapPin, title: "Rute Fleksibel", desc: "Destinasi bisa disesuaikan dengan kurikulum atau anggaran sekolah." },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
