"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TIKTOK_VIDEOS = [
  {
    id: "1",
    title: "Study Tour SMP Bandar Lampung",
    views: "12.5K",
    thumbnail: "/assets/hero-bromo.png", // placeholder
  },
  {
    id: "2",
    title: "Keseruan Overland GP Holiday",
    views: "8.2K",
    thumbnail: "/assets/hero-bali.png", // placeholder
  },
  {
    id: "3",
    title: "Mudik Mahasiswa Lampung di Jogja",
    views: "25.1K",
    thumbnail: "/assets/hero-raja-ampat.png", // placeholder
  },
  {
    id: "4",
    title: "Edukasi Budaya di Candi Borobudur",
    views: "5.4K",
    thumbnail: "/assets/hero-bromo.png", // placeholder
  },
];

export default function SocialProof() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-accent uppercase tracking-widest mb-2 block"
          >
            #MOneTravelindo
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4"
          >
            Keseruan Bersama Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Lebih dari sekadar perjalanan, kami menghadirkan pengalaman edukatif dan tak terlupakan. 
            Lihat langsung momen-momen seru rombongan kami!
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative"
        >
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 4 },
            }}
            className="w-full"
          >
            {TIKTOK_VIDEOS.map((video) => (
              <SwiperSlide key={video.id}>
                <div className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group bg-gray-200">
                  {/* Thumbnail */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${video.thumbnail})` }}
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-primary/90 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:bg-primary transition-all duration-300 shadow-lg">
                      <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-accent rounded-full text-[10px] font-bold text-white tracking-wider">
                        TIKTOK
                      </span>
                      <span className="text-white/80 text-xs font-medium">{video.views} Views</span>
                    </div>
                    <h3 className="text-white font-semibold text-sm leading-tight line-clamp-2">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
