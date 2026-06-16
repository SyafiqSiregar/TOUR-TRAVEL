"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Mockup() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="text-white order-2 lg:order-1">
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Teknologi Modern</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Platform Cerdas untuk Manajemen Perjalanan
            </h3>
            <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-xl">
              Kelola semua booking Anda dalam satu dasbor yang intuitif. Pantau status pembayaran, unduh e-tiket, dan ubah jadwal perjalanan dengan mudah tanpa perlu repot menghubungi agen.
            </p>
            
            <ul className="space-y-4 mb-10">
              {['Dasbor personal yang mudah digunakan', 'Notifikasi status perjalanan real-time', 'Dukungan unduh tiket & itinerary digital'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/90">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="bg-white text-primary hover:bg-gray-50 px-8 py-3.5 rounded-full font-semibold transition-colors shadow-xl">
              Coba Dasbor Demo
            </button>
          </div>

          <motion.div 
            initial={{ opacity: 0, rotate: 2, y: 50 }}
            whileInView={{ opacity: 1, rotate: -2, y: 0 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="order-1 lg:order-2 bg-[#1a1a2e] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10"
          >
            {/* Window Header */}
            <div className="bg-[#252540] px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="mx-auto bg-white/10 px-4 py-1 rounded text-xs text-white/50 w-64 text-center truncate">
                dashboard.nusajelajah.com
              </div>
            </div>
            
            {/* Window Body */}
            <div className="flex h-[320px] md:h-[400px]">
              {/* Sidebar */}
              <div className="w-16 md:w-48 bg-[#1e1e36] p-4 flex flex-col gap-3">
                <div className="w-full h-8 bg-primary rounded" />
                <div className="w-full h-8 bg-white/5 rounded" />
                <div className="w-full h-8 bg-white/5 rounded" />
                <div className="w-full h-8 bg-white/5 rounded" />
              </div>
              
              {/* Content */}
              <div className="flex-1 p-6 bg-[#16162a] flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="flex-1 bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="text-white/40 text-xs mb-1">Total Trip</div>
                    <div className="text-white font-bold text-2xl">12</div>
                  </div>
                  <div className="flex-1 bg-primary/20 rounded-xl p-4 border border-primary/30">
                    <div className="text-primary-light text-xs mb-1">Upcoming</div>
                    <div className="text-white font-bold text-2xl">2</div>
                  </div>
                </div>
                
                <div className="flex-1 bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col gap-3">
                  <div className="w-1/3 h-4 bg-white/10 rounded mb-2" />
                  {[1,2,3].map(i => (
                    <div key={i} className="flex gap-4 items-center">
                      <div className="w-10 h-10 bg-white/10 rounded-lg shrink-0" />
                      <div className="flex-1 space-y-2">
                        <div className="w-3/4 h-2 bg-white/20 rounded" />
                        <div className="w-1/2 h-2 bg-white/10 rounded" />
                      </div>
                      <div className="w-16 h-6 bg-green-500/20 text-green-400 text-[10px] flex items-center justify-center rounded-full">
                        Confirmed
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
