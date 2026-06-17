"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Keluarga Budi",
    title: "Liburan Keluarga Tak Terlupakan",
    quote: '"Perjalanan ke Bali bersama M One Travelindo benar-benar luar biasa! Pemandu sangat profesional dan harganya sesuai ekspektasi."',
    img: "/assets/hero-bali.png"
  },
  {
    id: 2,
    name: "Sarah & Teman",
    title: "Raja Ampat Memukau",
    quote: '"Sistem booking-nya memudahkan kami merencanakan trip grup dengan aman dan transparan."',
    img: "/assets/hero-raja-ampat.png"
  },
  {
    id: 3,
    name: "Komunitas Pecinta Alam",
    title: "Pendakian Bromo Solid",
    quote: '"Fasilitas jeep dan tenda sangat terawat. Guide lokal sangat ramah dan informatif."',
    img: "/assets/hero-bromo.png"
  },
  {
    id: 4,
    name: "Pasangan Baru",
    title: "Honeymoon Sempurna di Lombok",
    quote: '"Kami tidak perlu repot mengurus apapun. Semua sudah diatur dengan sangat romantis."',
    img: "/assets/dest-lombok.png"
  }
];

export default function Testimonial() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="py-24 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Cerita Pengguna</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
            Dipercaya oleh Banyak Orang
          </h3>
        </div>

        {/* Horizontal Accordion with Framer Motion Layout */}
        <div className="flex flex-col md:flex-row gap-4 h-[600px] md:h-[450px]">
          {TESTIMONIALS.map((testi) => {
            const isActive = activeId === testi.id;
            
            return (
              <motion.div
                key={testi.id}
                layout
                onClick={() => setActiveId(testi.id)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer bg-gray-200 shrink-0 ${
                  isActive ? 'flex-[4] md:flex-[5]' : 'flex-[1] md:flex-[1]'
                }`}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${testi.img})` }}
                />
                
                {/* Gradient Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent"
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0.4 }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  {isActive ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h4 className="font-heading font-bold text-2xl text-white mb-3">
                        {testi.title}
                      </h4>
                      <p className="text-white/90 italic mb-4 max-w-lg leading-relaxed">
                        {testi.quote}
                      </p>
                      <div className="text-primary-light font-medium text-sm">
                        — {testi.name}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      className="hidden md:flex items-center justify-center h-full w-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h4 className="text-white font-semibold whitespace-nowrap -rotate-90 origin-center text-lg tracking-wider">
                        {testi.title.split(' ')[0]}
                      </h4>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
