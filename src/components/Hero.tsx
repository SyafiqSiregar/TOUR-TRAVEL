"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Users, Search, X } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import "react-day-picker/style.css";

const HERO_SLIDES = [
  { id: 1, image: "/assets/hero-bali.png" },
  { id: 2, image: "/assets/hero-raja-ampat.png" },
  { id: 3, image: "/assets/hero-bromo.png" },
];

const DUMMY_LOCATIONS = [
  "Aceh", "Sumatra Utara", "Sumatra Barat", "Riau", "Jambi", "Sumatra Selatan", "Bengkulu", "Lampung", "Bangka Belitung", "Kepulauan Riau",
  "DKI Jakarta", "Jawa Barat", "Jawa Tengah", "DI Yogyakarta", "Jawa Timur", "Banten",
  "Bali", "Nusa Tenggara Barat", "Nusa Tenggara Timur",
  "Kalimantan Barat", "Kalimantan Tengah", "Kalimantan Selatan", "Kalimantan Timur", "Kalimantan Utara",
  "Sulawesi Utara", "Sulawesi Tengah", "Sulawesi Selatan", "Sulawesi Tenggara", "Gorontalo", "Sulawesi Barat",
  "Maluku", "Maluku Utara", "Papua", "Papua Barat", "Papua Selatan", "Papua Tengah", "Papua Pegunungan",
  "Bandung", "Surabaya", "Medan", "Makassar", "Semarang", "Palembang", "Batam", "Pekanbaru", "Malang", "Padang", "Denpasar", "Samarinda", "Balikpapan", "Banjarmasin", "Labuan Bajo", "Raja Ampat", "Pulau Seribu", "Belitung"
];

export default function Hero({ destinations = [] }: { destinations?: any[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showLocation, setShowLocation] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [pax, setPax] = useState("");

  const handleSearch = () => {
    if (!selectedLocation || !selectedDate || !pax) {
      alert("Harap isi terlebih dahulu untuk melanjutkan");
      return;
    }

    const loc = selectedLocation;
    const dateStr = format(selectedDate, "dd MMM yyyy", { locale: id });
    const paxStr = pax;
    
    const message = `Halo Admin M One Travelindo, saya tertarik untuk merencanakan perjalanan rombongan dengan detail berikut:\n\n📍 *Tujuan*: ${loc}\n📅 *Tanggal*: ${dateStr}\n👥 *Jumlah Peserta*: ${paxStr}\n\nMohon informasi lebih lanjut mengenai ketersediaan paket dan harganya. Terima kasih!`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
  };

  const locationRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
        setShowLocation(false);
      }
      if (dateRef.current && !dateRef.current.contains(event.target as Node)) {
        setShowDate(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
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

      <div className="relative z-20 w-full max-w-7xl px-4 md:px-6 lg:px-8 flex flex-col items-center text-center mt-12">
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
          className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight mb-4 max-w-4xl"
        >
          Perjalanan <span className="text-accent">Edukasi & Eksklusif</span> Untuk Instansi Anda
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="text-base md:text-lg text-white/90 max-w-2xl mb-10"
        >
          M One Travelindo siap merancang Study Tour, Overland, dan perjalanan rombongan dengan armada bus mewah yang mengutamakan keselamatan dan nilai edukasi.
        </motion.p>

        {/* Rebox-style Floating Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="w-full max-w-3xl bg-white rounded-3xl p-2.5 shadow-2xl flex flex-col md:flex-row gap-2 relative"
        >
          {/* LOKASI FIELD */}
          <div ref={locationRef} className="flex-1 relative">
            <div 
              onClick={() => { setShowLocation(true); setShowDate(false); }}
              className="flex items-center px-4 py-2.5 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 transition-colors cursor-pointer h-full"
            >
              <MapPin className="w-4 h-4 text-primary mr-3" />
              <div className="flex flex-col items-start w-full">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Lokasi</span>
                <input 
                  type="text" 
                  value={selectedLocation}
                  onChange={(e) => {
                    setSelectedLocation(e.target.value);
                    setShowLocation(true);
                  }}
                  onFocus={() => { setShowLocation(true); setShowDate(false); }}
                  placeholder="Ketik atau pilih destinasi" 
                  className="bg-transparent border-none outline-none text-gray-900 text-sm font-semibold placeholder:text-gray-400 w-full cursor-text" 
                />
              </div>
            </div>

            <AnimatePresence>
              {showLocation && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-4 w-full md:w-[350px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 flex flex-col text-left max-h-[280px]"
                >
                  <div className="p-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center z-10 shadow-sm">
                    <span className="font-semibold text-gray-800">Pilih Destinasi</span>
                    <button onClick={() => setShowLocation(false)} className="text-gray-400 hover:text-gray-600">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="p-2 overflow-y-auto flex-1 custom-scrollbar">
                    {(() => {
                      const uniqueLocations = Array.from(new Set([
                        ...destinations.map(d => d.loc),
                        ...DUMMY_LOCATIONS
                      ])).filter(Boolean).sort();
                      
                      const filtered = uniqueLocations.filter(loc => loc.toLowerCase().includes(selectedLocation.toLowerCase()));
                      
                      if (filtered.length === 0) {
                         return <div className="p-6 text-center text-sm text-gray-500">Destinasi tidak ditemukan</div>;
                      }

                      return filtered.map((loc) => (
                        <button
                          key={loc}
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedLocation(loc); 
                            setShowLocation(false); 
                          }}
                          className="w-full px-4 py-3 text-sm text-left font-medium text-gray-700 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-200 flex items-center"
                        >
                          <MapPin className="w-4 h-4 mr-3 text-gray-400" />
                          {loc}
                        </button>
                      ));
                    })()}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="w-px bg-gray-200 hidden md:block my-2" />

          {/* TANGGAL FIELD */}
          <div ref={dateRef} className="flex-1 relative">
            <div 
              onClick={() => { setShowDate(!showDate); setShowLocation(false); }}
              className="flex items-center px-4 py-2.5 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 transition-colors cursor-pointer h-full"
            >
              <Calendar className="w-4 h-4 text-primary mr-3" />
              <div className="flex flex-col items-start w-full">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Tanggal</span>
                <input 
                  type="text" 
                  readOnly
                  value={selectedDate ? format(selectedDate, "dd MMM yyyy", { locale: id }) : ""}
                  placeholder="Kapan berangkat?" 
                  className="bg-transparent border-none outline-none text-gray-900 text-sm font-semibold placeholder:text-gray-400 w-full cursor-pointer" 
                />
              </div>
            </div>

            <AnimatePresence>
              {showDate && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 mt-4 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50"
                >
                  <style>{`
                    .rdp { --rdp-accent-color: #2D6A4F; --rdp-background-color: #e6f0eb; margin: 0; }
                    .rdp-day_selected, .rdp-day_selected:focus-visible, .rdp-day_selected:hover { color: white; opacity: 1; background-color: #2D6A4F; }
                  `}</style>
                  <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => { setSelectedDate(date); setShowDate(false); }}
                    locale={id}
                    className="border-none"
                    classNames={({
                      day: "w-9 h-9 text-sm rounded-full hover:bg-gray-100 text-gray-900",
                      selected: "bg-primary text-white hover:bg-primary-hover font-bold",
                      today: "font-bold text-accent",
                      caption: "flex justify-center pt-1 relative items-center mb-4",
                      caption_label: "text-sm font-semibold font-heading text-gray-900",
                      nav: "flex items-center space-x-1 absolute right-0",
                      nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 flex items-center justify-center rounded-full hover:bg-gray-100",
                      head_cell: "text-gray-500 font-medium text-[0.8rem] uppercase tracking-wider w-9 pb-2",
                      cell: "h-9 w-9 text-center p-0 mt-1",
                    } as any)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="w-px bg-gray-200 hidden md:block my-2" />

          {/* PESERTA FIELD */}
          <div className="flex-1 flex items-center px-4 py-2.5 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 transition-colors">
            <Users className="w-4 h-4 text-primary mr-3" />
            <div className="flex flex-col items-start w-full">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Rombongan</span>
              <input 
                type="text" 
                value={pax}
                onChange={(e) => setPax(e.target.value)}
                placeholder="Jumlah kursi bus?" 
                className="bg-transparent border-none outline-none text-gray-900 text-sm font-semibold placeholder:text-gray-400 w-full" 
              />
            </div>
          </div>

          <button 
            onClick={handleSearch}
            className={`rounded-2xl px-6 py-3 flex items-center justify-center text-sm font-bold transition-all duration-300 shadow-lg ${
              selectedLocation && selectedDate && pax
                ? "bg-primary hover:bg-primary-hover text-white shadow-primary/25 hover:shadow-primary/40 hover:scale-105 active:scale-95 cursor-pointer"
                : "bg-gray-300 text-gray-500 shadow-none cursor-not-allowed"
            }`}
          >
            <Search className="w-4 h-4 mr-2" />
            Cari
          </button>
        </motion.div>
      </div>
    </section>
  );
}

