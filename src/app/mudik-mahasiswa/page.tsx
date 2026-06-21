import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Ticket, CheckCircle2, MessageCircle } from "lucide-react";

export default function MudikMahasiswaPage() {
  return (
    <main className="min-h-screen bg-bg selection:bg-primary selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/assets/hero-bali.png)' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white font-bold text-sm tracking-widest mb-6">
            PROGRAM KOMUNITAS & PAGUYUBAN
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
            Mudik Bareng <span className="text-accent">Mahasiswa</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Fasilitas perjalanan mudik khusus mahasiswa asal Lampung yang merantau di Yogyakarta dan sekitarnya. Aman, ramah di kantong, dan penuh keakraban.
          </p>
          <button className="bg-accent hover:bg-accent/90 text-white rounded-lg px-8 py-4 font-bold shadow-lg transition-all hover:-translate-y-1 inline-flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Hubungi Admin Paguyuban
          </button>
        </div>
      </section>

      {/* Konten Utama */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Ticket, title: "Harga Mahasiswa", desc: "Subsidi khusus untuk pemesanan grup via paguyuban." },
                  { icon: Users, title: "Satu Frekuensi", desc: "Perjalanan seru bersama teman-teman se-daerah." },
                  { icon: CheckCircle2, title: "Pasti Berangkat", desc: "Jaminan ketersediaan kursi pada musim mudik Lebaran/Semesteran." },
                  { icon: MessageCircle, title: "Titik Jemput Jelas", desc: "Titik kumpul strategis di area kampus utama Jogja." },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-xl border border-gray-100 bg-gray-50">
                    <item.icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">Mudik Aman Tanpa Rebutan Tiket</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Kami mengerti perjuangan mahasiswa perantau mencari tiket mudik saat high season. M One Travelindo hadir dengan program khusus charter bus paguyuban. 
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Kumpulkan teman satu daerahmu, hubungi kami, dan kami siapkan bus eksekutif eksklusif hanya untuk rombongan kalian. Tidak perlu antre di terminal, cukup kumpul di kampus dan kami siap mengantar sampai kampung halaman di Lampung!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
