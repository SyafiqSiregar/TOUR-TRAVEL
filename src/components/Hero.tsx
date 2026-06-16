"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Users, Search } from "lucide-react";

const HERO_SLIDES = [
  { id: 1, image: "/assets/hero-bali.png" },
  { id: 2, image: "/assets/hero-raja-ampat.png" },
  { id: 3, image: "/assets/hero-bromo.png" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
        {/* Gradient Overlay Rebox Style */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 via-primary/60 to-primary-light/40 z-10" />
      </div>

      <div className="relative z-20 w-full max-w-7xl px-6 lg:px-8 flex flex-col items-center text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Eksplorasi Keindahan Nusantara
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight mb-6 max-w-4xl"
        >
          Jelajahi <span className="text-accent">Destinasi Impian</span> Anda Bersama Kami
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mb-12"
        >
          Kami merancang perjalanan wisata eksklusif yang transparan, aman, dan penuh kenangan untuk Anda dan orang terkasih.
        </motion.p>

        {/* Rebox-style Floating Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="w-full max-w-4xl bg-white rounded-3xl p-3 shadow-2xl flex flex-col md:flex-row gap-3 relative"
        >
          <div className="flex-1 flex items-center px-4 py-3 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 transition-colors">
            <MapPin className="w-5 h-5 text-primary mr-3" />
            <div className="flex flex-col items-start">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Lokasi</span>
              <input type="text" placeholder="Pilih destinasi" className="bg-transparent border-none outline-none text-gray-900 font-medium placeholder:text-gray-400 w-full" />
            </div>
          </div>
          
          <div className="w-px bg-gray-200 hidden md:block my-2" />

          <div className="flex-1 flex items-center px-4 py-3 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 transition-colors">
            <Calendar className="w-5 h-5 text-primary mr-3" />
            <div className="flex flex-col items-start">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Tanggal</span>
              <input type="text" placeholder="Kapan berangkat?" className="bg-transparent border-none outline-none text-gray-900 font-medium placeholder:text-gray-400 w-full" />
            </div>
          </div>

          <div className="w-px bg-gray-200 hidden md:block my-2" />

          <div className="flex-1 flex items-center px-4 py-3 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 transition-colors">
            <Users className="w-5 h-5 text-primary mr-3" />
            <div className="flex flex-col items-start">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Peserta</span>
              <input type="text" placeholder="Berapa orang?" className="bg-transparent border-none outline-none text-gray-900 font-medium placeholder:text-gray-400 w-full" />
            </div>
          </div>

          <button className="bg-primary hover:bg-primary-hover text-white rounded-2xl px-8 py-4 flex items-center justify-center font-semibold transition-colors shadow-lg shadow-primary/25">
            <Search className="w-5 h-5 mr-2" />
            Cari
          </button>
        </motion.div>
      </div>
    </section>
  );
}
