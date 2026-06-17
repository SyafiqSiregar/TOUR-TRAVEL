"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, HeartHandshake } from "lucide-react";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Aman & Terpercaya",
    desc: "Sistem pembayaran yang aman dengan jaminan layanan terbaik untuk setiap perjalanan Anda."
  },
  {
    icon: Sparkles,
    title: "Pengalaman Eksklusif",
    desc: "Jadwal perjalanan yang disusun khusus oleh ahli wisata lokal untuk pengalaman tak terlupakan."
  },
  {
    icon: HeartHandshake,
    title: "Layanan 24/7",
    desc: "Tim support kami siap mendampingi Anda kapanpun selama perjalanan berlangsung."
  }
];

export default function Features() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary tracking-widest uppercase mb-3"
          >
            Tentang Kami
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6"
          >
            Kenapa Memilih M One Travelindo?
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Kami berkomitmen memberikan pengalaman liburan yang bebas repot, aman, dan penuh dengan momen tak terlupakan.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-bg rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <feat.icon className="w-7 h-7" />
              </div>
              <h4 className="font-heading font-bold text-xl text-gray-900 mb-3">{feat.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-bg to-white border-l-4 border-primary p-8 rounded-r-3xl shadow-sm"
        >
          <p className="text-xl md:text-2xl font-heading font-medium text-gray-800 italic leading-snug">
            "Kami percaya bahwa setiap perjalanan bukan sekadar mengunjungi tempat baru, melainkan tentang cerita yang Anda bawa pulang."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
