import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BusFront, Map, Clock, ShieldCheck, Coffee, Navigation } from "lucide-react";

export default function OverlandPage() {
  return (
    <main className="min-h-screen bg-bg selection:bg-primary selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/hero-raja-ampat.png)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/90 via-[#1B4332]/70 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent font-bold text-sm tracking-widest mb-6">
            SPESIALIS LINTAS PROVINSI
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
            Overland <span className="text-accent">Jawa - Bali</span> Tour
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Nikmati keindahan pemandangan darat antar provinsi dengan kenyamanan tingkat tinggi. Jalanan adalah rumah kedua bagi para penjelajah.
          </p>
          <button className="bg-accent hover:bg-accent/90 text-white rounded-lg px-8 py-4 font-bold shadow-lg transition-all hover:-translate-y-1">
            Lihat Jadwal & Harga
          </button>
        </div>
      </section>

      {/* Eksekusi Overland */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">Kenyamanan Ekstra Mengarungi Lintas Provinsi</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Perjalanan darat (Overland) yang panjang membutuhkan armada dan kru yang berpengalaman. Kami bekerja sama eksklusif dengan armada GP Holiday untuk memastikan pengalaman transit dan perjalanan Anda aman, nyaman, dan tak terlupakan.
              </p>
              
              <ul className="space-y-6">
                {[
                  { icon: BusFront, title: "Armada Eksekutif", desc: "Bus keluaran terbaru dengan suspensi udara, kursi recliner lebar, dan ruang kaki lega." },
                  { icon: Map, title: "Rute Terstruktur", desc: "Perencanaan rute tol dan jalur arteri yang matang untuk efisiensi waktu." },
                  { icon: ShieldCheck, title: "Kru Berpengalaman", desc: "Sopir profesional yang menguasai medan Jawa-Bali dengan standar safety riding." },
                ].map((item, i) => (
                  <li key={i} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gray-200 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/hero-bali.png)' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <Navigation className="w-6 h-6 text-accent" />
                      <h3 className="text-xl font-bold">Rute Favorit</h3>
                    </div>
                    <p className="text-white/90">Lampung - Jakarta - Jogja - Bromo - Malang - Bali</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
