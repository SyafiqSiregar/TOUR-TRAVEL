"use client";

import { useState, useEffect } from "react";
import { MapPin, Plus, Star, ArrowRight, ArrowLeft, ArrowUp, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DESTINATIONS = [
  { 
    id: 1, 
    name: "Bali Romantic 4H3M", 
    loc: "Bali", 
    dist: "1,200 Km", 
    rating: 4.9, 
    img: "/assets/hero-bali.png",
    details: "Rasakan momen romantis di Bali dengan fasilitas privat villa, dinner romantis di pinggir pantai Jimbaran, dan tur eksklusif ke Nusa Penida. Paket ini dirancang khusus untuk pasangan yang mencari ketenangan dan privasi."
  },
  { 
    id: 2, 
    name: "Raja Ampat Explorer", 
    loc: "Papua", 
    dist: "3,100 Km", 
    rating: 5.0, 
    img: "/assets/hero-raja-ampat.png",
    details: "Eksplorasi kepulauan Raja Ampat yang magis. Snorkeling bersama pari manta, mengunjungi Wayag, dan menginap di resort terapung dengan pemandangan laut sebening kristal."
  },
  { 
    id: 3, 
    name: "Bromo Sunrise Trek", 
    loc: "Jawa Timur", 
    dist: "800 Km", 
    rating: 4.8, 
    img: "/assets/hero-bromo.png",
    details: "Saksikan salah satu matahari terbit terbaik di dunia dari Penanjakan 1. Trip menggunakan Jeep 4WD mengelilingi lautan pasir dan mendaki kawah Bromo yang legendaris."
  },
  { 
    id: 4, 
    name: "Lombok Island Hopping", 
    loc: "NTB", 
    dist: "1,350 Km", 
    rating: 4.7, 
    img: "/assets/dest-lombok.png",
    details: "Jelajahi keindahan tiga gili (Trawangan, Meno, Air) dan nikmati budaya lokal suku Sasak. Termasuk fasilitas penjemputan bandara dan penginapan tepi pantai."
  },
  { 
    id: 5, 
    name: "Komodo Sailing 3H2M", 
    loc: "NTT", 
    dist: "1,800 Km", 
    rating: 4.9, 
    img: "/assets/dest-komodo.png",
    details: "Berlayar mengelilingi Taman Nasional Komodo dengan kapal Phinisi premium. Kunjungi Pulau Padar, Pink Beach, dan berinteraksi langsung dengan Komodo di habitat aslinya."
  },
];

export default function DestinationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDest, setSelectedDest] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay logic
  useEffect(() => {
    if (isHovered || selectedDest !== null) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % DESTINATIONS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, selectedDest]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % DESTINATIONS.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + DESTINATIONS.length) % DESTINATIONS.length);

  const activeDestination = DESTINATIONS.find(d => d.id === selectedDest);

  // Responsive logic
  let xOffset = 280;
  let sideOpacity = 0.75;
  if (windowWidth < 768) {
    xOffset = 0;
    sideOpacity = 0;
  } else if (windowWidth < 1024) {
    xOffset = 180;
  }

  const getPosition = (index: number) => {
    if (index === currentIndex) return "active";
    if (index === (currentIndex - 1 + DESTINATIONS.length) % DESTINATIONS.length) return "left";
    if (index === (currentIndex + 1) % DESTINATIONS.length) return "right";
    return "hidden";
  };

  const variants = {
    active: {
      x: 0,
      scale: 1,
      rotateY: 0,
      opacity: 1,
      zIndex: 10,
      boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
    },
    left: {
      x: -xOffset,
      scale: 0.85,
      rotateY: windowWidth < 768 ? 0 : 12,
      opacity: sideOpacity,
      zIndex: 5,
      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    },
    right: {
      x: xOffset,
      scale: 0.85,
      rotateY: windowWidth < 768 ? 0 : -12,
      opacity: sideOpacity,
      zIndex: 5,
      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    },
    hidden: {
      x: 0,
      scale: 0.5,
      rotateY: 0,
      opacity: 0,
      zIndex: 0,
      boxShadow: "0 10px 25px rgba(0,0,0,0)",
    }
  };

  const transitionProps = {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
  };

  return (
    <section id="destinations" className="py-16 md:py-24 bg-[#f9faf9] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Paket Pilihan</h2>
        <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
          Destinasi Terpopuler Bulan Ini
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Pilih dari berbagai paket perjalanan yang paling diminati. Mulai dari pantai tropis hingga pegunungan megah.
        </p>
      </div>

      {/* Custom 3D Cover Flow Carousel */}
      <div 
        className="relative w-full mx-auto px-4 md:px-12 max-w-[1400px] h-[550px] flex items-center justify-center"
        style={{ perspective: "1800px", transformStyle: "preserve-3d" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 lg:left-12 z-20 flex items-center justify-center text-green-900 bg-white/50 border border-white/60 shadow-lg cursor-pointer"
          style={{ width: "72px", height: "72px", borderRadius: "50%", backdropFilter: "blur(10px)", transition: "transform 0.2s" }}
          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.08)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
          onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.95)"}
          onMouseUp={(e) => e.currentTarget.style.transform = "scale(1.08)"}
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-4 lg:right-12 z-20 flex items-center justify-center text-green-900 bg-white/50 border border-white/60 shadow-lg cursor-pointer"
          style={{ width: "72px", height: "72px", borderRadius: "50%", backdropFilter: "blur(10px)", transition: "transform 0.2s" }}
          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.08)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
          onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.95)"}
          onMouseUp={(e) => e.currentTarget.style.transform = "scale(1.08)"}
        >
          <ArrowRight className="w-6 h-6" />
        </button>

        {/* Carousel Cards */}
        <div className="relative w-full max-w-[380px] h-[480px] flex justify-center items-center" style={{ transformStyle: "preserve-3d" }}>
          {DESTINATIONS.map((dest, index) => {
            const position = getPosition(index);
            const isActive = position === "active";
            const isSelected = selectedDest === dest.id;

            return (
              <motion.div
                key={dest.id}
                variants={variants}
                initial={false}
                animate={position}
                transition={transitionProps}
                className="absolute top-0 left-0 w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col group"
                style={{ transformOrigin: "center center" }}
                whileHover={isActive ? { y: -8, scale: 1.03, transition: { duration: 0.3, ease: "easeOut" } } : {}}
              >
                {/* Image */}
                <div className="relative h-[260px] w-full shrink-0 p-3 pb-0 overflow-hidden">
                  <div className="w-full h-full rounded-2xl shadow-inner overflow-hidden relative">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                      style={{ backgroundImage: `url(${dest.img})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-1 relative bg-white">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-heading font-bold text-xl text-gray-900 pr-4 leading-tight group-hover:text-primary transition-colors">
                      {dest.name}
                    </h4>
                    <div className="flex items-center gap-1 text-sm font-semibold text-gray-600 shrink-0 bg-yellow-50 px-2 py-1 rounded-lg border border-yellow-100">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      ({dest.rating})
                    </div>
                  </div>
                  
                  <div className="mt-auto flex flex-col gap-1.5">
                    <div className="flex items-center text-sm font-medium text-gray-500">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      {dest.loc}
                    </div>
                    <div className="text-xs text-gray-400 ml-6">
                      {dest.dist}
                    </div>
                  </div>

                  {/* Plus Action Button */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!isActive) return;
                      setSelectedDest(isSelected ? null : dest.id);
                      if (!isSelected) {
                        setTimeout(() => {
                          document.getElementById('detail-panel')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        }, 150);
                      }
                    }}
                    className={`absolute bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
                      isSelected 
                        ? "bg-[#1B4332] text-white shadow-green-900/30" 
                        : "bg-[#2D6A4F] hover:bg-[#1B4332] text-white shadow-green-900/20"
                    } ${!isActive && 'pointer-events-none opacity-0'}`}
                  >
                    <Plus className={`w-6 h-6 stroke-[3] transition-transform duration-300 ${isSelected ? "rotate-45" : ""}`} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Expandable Detail Section */}
      <div id="detail-panel" className="relative max-w-3xl mx-auto -mt-4 z-30 px-4">
        
        {/* Ultra-smooth glow that will not be clipped by overflow-hidden */}
        <AnimatePresence>
          {selectedDest && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute left-[5%] right-[5%] top-10 bottom-24 bg-green-500/20 blur-[60px] -z-10 rounded-[100px]"
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedDest && activeDestination && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="relative bg-white rounded-3xl p-8 border border-green-100 shadow-xl mt-4 mb-8">
                <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-primary text-xs font-bold uppercase tracking-wider rounded-lg mb-4">
                      <MapPin className="w-3 h-3" /> Detail Paket
                    </div>
                    <h4 className="text-2xl font-heading font-bold text-gray-900 mb-3">{activeDestination.name}</h4>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {activeDestination.details}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {["Transportasi eksklusif selama perjalanan", "Penginapan premium tersertifikasi", "Pemandu wisata lokal berpengalaman"].map((item, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-primary mr-3 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full md:w-64 bg-gray-50 rounded-2xl p-6 border border-gray-100 shrink-0 flex flex-col justify-center text-center">
                    <div className="text-sm text-gray-500 mb-1">Harga mulai dari</div>
                    <div className="text-3xl font-heading font-bold text-primary mb-4">Rp 4.5<span className="text-lg">Jt</span></div>
                    <button className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3 rounded-xl transition-colors shadow-lg shadow-primary/20 hover:-translate-y-0.5 cursor-pointer">
                      Booking Sekarang
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Tutup Detail Button */}
        <div className="flex justify-center pb-8 pt-4">
          <button 
            onClick={() => {
              setSelectedDest(null);
              document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-2.5 bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-semibold rounded-full flex items-center gap-2 transition-all hover:scale-105 shadow-xl cursor-pointer"
          >
            {selectedDest ? "Tutup Detail" : "Lihat Semua Paket"}
            <ArrowUp className={`w-4 h-4 transition-transform duration-300 ${!selectedDest && "rotate-180"}`} />
          </button>
        </div>
      </div>
    </section>
  );
}
