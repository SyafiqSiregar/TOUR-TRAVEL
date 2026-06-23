"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, BusFront, Car, Users, Map } from "lucide-react";

export default function Mockup() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Bagian Teks Kiri */}
          <div className="text-white order-2 lg:order-1 relative z-10">
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">LAYANAN B2B & SEKOLAH</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Kenyamanan Kelas Eksekutif, Panitia Bebas Pusing
            </h3>
            <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-xl">
              Kami pastikan setiap rombongan Anda, baik rombongan besar sekolah maupun grup privat, mendapatkan pengalaman darat terbaik. Fokus nikmati perjalanan dan nilai edukasinya, biar kami yang urus sisanya.
            </p>
            
            <ul className="space-y-5 mb-10">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-accent/20 p-2 rounded-full">
                  <BusFront className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">Armada Eksklusif GP Holiday</h4>
                  <p className="text-white/70 text-sm mt-1">Bus mewah dengan suspensi udara untuk kenyamanan VIP rombongan besar.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-accent/20 p-2 rounded-full">
                  <Car className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">Toyota Hiace VIP (Grup Kecil)</h4>
                  <p className="text-white/70 text-sm mt-1">Tersedia untuk disewa atau liburan privat ke luar pulau dengan privasi ekstra.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-accent/20 p-2 rounded-full">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">Manajemen & Edukasi Terpadu</h4>
                  <p className="text-white/70 text-sm mt-1">Tour Leader tersertifikasi dan itinerary yang kaya akan nilai pendidikan.</p>
                </div>
              </li>
            </ul>
            
            <button className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(242,166,61,0.3)] hover:shadow-[0_0_30px_rgba(242,166,61,0.5)]">
              Konsultasi Rombongan Sekarang
            </button>
          </div>

          {/* Bagian Visual Kanan (Armada Showcase dengan Animasi Interaktif) */}
          <div className="order-1 lg:order-2 relative h-[500px] flex items-center justify-center">
            
            {/* Dekorasi Latar */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute w-[400px] h-[400px] rounded-full border border-white/10 border-dashed"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[300px] h-[300px] rounded-full border border-accent/20"
            />

            {/* Gambar Utama: Bus GP Holiday */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="absolute z-20 w-4/5 h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-gray-200"
            >
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/assets/hero-bromo.png)" }} />
              {/* Overlay Label Bus */}
              <div className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 flex items-center gap-2">
                <BusFront className="w-5 h-5 text-accent" />
                <span className="text-white font-bold text-sm tracking-wide">Big Bus Eksekutif</span>
              </div>
            </motion.div>

            {/* Gambar Sekunder: Hiace Floating (Kiri Bawah) */}
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
              className="absolute z-30 -bottom-4 -left-4 w-48 h-32 md:w-56 md:h-40 rounded-xl overflow-hidden shadow-2xl border-4 border-accent/80 bg-gray-100"
            >
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/assets/hero-bali.png)" }} />
              <div className="absolute top-2 right-2 bg-accent text-white px-2 py-1 rounded text-[10px] font-bold">
                Toyota Hiace
              </div>
            </motion.div>

            {/* Floating Badge 1: Itinerary */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute z-40 top-12 left-0 bg-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100"
            >
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                <Map className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-bold uppercase">Program</div>
                <div className="text-sm text-gray-900 font-bold">Full Edukasi</div>
              </div>
            </motion.div>

            {/* Floating Badge 2: Rombongan */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="absolute z-40 top-32 -right-8 bg-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100"
            >
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-bold uppercase">Manajemen</div>
                <div className="text-sm text-gray-900 font-bold">Terorganisir 100%</div>
              </div>
            </motion.div>

            {/* Interactivity Dots */}
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-1/4 right-1/4 w-4 h-4 bg-accent rounded-full blur-sm z-10"
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-white rounded-full blur-sm z-10"
            />

          </div>

        </div>
      </div>
    </section>
  );
}
