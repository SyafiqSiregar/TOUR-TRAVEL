"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    num: "1",
    title: "Pilih Destinasi",
    desc: "Cari dan temukan paket liburan yang sesuai dengan preferensi dan budget Anda dari berbagai pilihan yang kami sediakan."
  },
  {
    num: "2",
    title: "Atur Jadwal",
    desc: "Tentukan tanggal keberangkatan dan jumlah peserta. Sistem kami akan menampilkan ketersediaan secara real-time."
  },
  {
    num: "3",
    title: "Pembayaran Aman",
    desc: "Selesaikan pembayaran melalui berbagai metode yang aman dan terverifikasi. Konfirmasi instan akan dikirimkan ke email Anda."
  },
  {
    num: "4",
    title: "Mulai Petualangan",
    desc: "Persiapkan diri Anda, tim kami akan menjemput dan memastikan perjalanan liburan Anda berjalan lancar dan berkesan."
  }
];

export default function Steps() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="steps" className="py-16 md:py-24 bg-[#f9faf9] relative">
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Cara Kerja</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
            Booking Mudah dalam 4 Langkah
          </h3>
        </div>

        <div ref={containerRef} className="relative pl-8 md:pl-12 py-4">
          {/* Timeline Background Line */}
          <div className="absolute left-[39px] md:left-[55px] top-0 bottom-0 w-1 bg-gray-200 rounded-full" />
          
          {/* Animated Timeline Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[39px] md:left-[55px] top-0 w-1 bg-gradient-to-b from-primary to-primary-light rounded-full origin-top"
          />

          <div className="flex flex-col gap-12 relative z-10">
            {STEPS.map((step, i) => {
              const stepRef = useRef(null);
              const isInView = useInView(stepRef, { once: true, margin: "-100px" });
              
              return (
                <div key={step.num} ref={stepRef} className="relative pl-12 md:pl-16">
                  {/* Number Circle */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                    className="absolute -left-3 md:-left-4 top-0 w-12 h-12 md:w-14 md:h-14 bg-white border-4 border-primary rounded-full flex items-center justify-center font-heading font-bold text-xl md:text-2xl text-primary shadow-lg shadow-primary/20"
                  >
                    {step.num}
                  </motion.div>
                  
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h4 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-2 mt-1">{step.title}</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
