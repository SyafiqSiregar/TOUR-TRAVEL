"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X, ZoomIn } from "lucide-react";
import Image from "next/image";

// Data Dummy Galeri
const GALLERY_ITEMS = [
  {
    id: 1,
    img: "/assets/hero-bromo.png",
    title: "Sunrise Bromo Penanjakan",
    category: "Overland",
    location: "Jawa Timur",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: 2,
    img: "/assets/hero-bali.png",
    title: "Dinner Romantis Jimbaran",
    category: "Honeymoon",
    location: "Bali",
    aspectRatio: "aspect-[3/4]", // Portrait
  },
  {
    id: 3,
    img: "/assets/hero-raja-ampat.png",
    title: "Eksplorasi Wayag",
    category: "Premium Trip",
    location: "Raja Ampat",
    aspectRatio: "aspect-[4/5]", // Portrait
  },
  {
    id: 4,
    img: "/assets/dest-lombok.png",
    title: "Island Hopping Gili",
    category: "Study Tour",
    location: "Lombok",
    aspectRatio: "aspect-square", // Square
  },
  {
    id: 5,
    img: "/assets/dest-komodo.png",
    title: "Trekking Pulau Padar",
    category: "Adventure",
    location: "Nusa Tenggara Timur",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: 6,
    img: "/assets/hero-bromo.png", // Reusing for masonry effect
    title: "Jeep Lava Tour Bromo",
    category: "Overland",
    location: "Jawa Timur",
    aspectRatio: "aspect-square",
  },
  {
    id: 7,
    img: "/assets/hero-bali.png", // Reusing
    title: "Tari Kecak Uluwatu",
    category: "Study Tour",
    location: "Bali",
    aspectRatio: "aspect-[3/4]",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  // Disable scroll when lightbox is open
  if (typeof window !== "undefined") {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary uppercase tracking-widest mb-2 block"
          >
            Dokumentasi Perjalanan
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4"
          >
            Jejak Petualangan Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Kumpulan momen tak terlupakan dari para wisatawan dan rombongan yang telah mempercayakan perjalanannya bersama M One Travelindo.
          </motion.p>
        </div>

        {/* Lightweight CSS Columns Masonry */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              className={`relative rounded-xl overflow-hidden group cursor-pointer break-inside-avoid shadow-sm mb-4 md:mb-6 ${item.aspectRatio}`}
              onClick={() => setSelectedImage(item)}
            >
              {/* Main Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${item.img})` }}
              />
              
              {/* Gradient Overlay & Content - Zero JS Hover Interaction */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                
                {/* Zoom Icon - appears on hover */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>

                {/* Text Content */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="inline-block px-2 py-1 mb-2 bg-accent text-white text-[10px] font-bold uppercase tracking-wider rounded-md">
                    {item.category}
                  </div>
                  <h3 className="text-white font-heading font-bold text-lg leading-tight mb-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-white/80 text-xs font-medium">
                    <MapPin className="w-3 h-3 mr-1" />
                    {item.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightweight Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[90vh] rounded-2xl overflow-y-auto overflow-x-hidden flex flex-col md:flex-row bg-gray-900 shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            >
              {/* Image Container */}
              <div className="relative flex-1 bg-black min-h-[30vh] sm:min-h-[40vh] md:min-h-[60vh]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={selectedImage.img} 
                  alt={selectedImage.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Detail Sidebar */}
              <div className="w-full md:w-80 bg-white p-5 md:p-8 flex flex-col justify-center shrink-0">
                <div className="inline-flex px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded-lg mb-4 w-fit">
                  {selectedImage.category}
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                  {selectedImage.title}
                </h3>
                <div className="flex items-center text-gray-500 text-sm font-medium mb-6">
                  <MapPin className="w-4 h-4 mr-2" />
                  {selectedImage.location}
                </div>
                
                <div className="w-full h-px bg-gray-100 mb-6" />
                
                <p className="text-gray-600 text-sm leading-relaxed italic mb-8">
                  "Kenangan manis bersama rombongan {selectedImage.category} menjelajahi keindahan {selectedImage.location}. Percayakan perjalanan Anda selanjutnya bersama M One Travelindo."
                </p>

                <button 
                  onClick={() => {
                    setSelectedImage(null);
                    setTimeout(() => {
                      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                  }}
                  className="w-full py-3 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold transition-colors shadow-lg shadow-primary/20"
                >
                  Pesan Paket Serupa
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
