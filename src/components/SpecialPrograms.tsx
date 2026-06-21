"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, Bus, Users, ArrowRight } from "lucide-react";

const PROGRAMS = [
  {
    id: "study-tour",
    title: "Study Tour Sekolah",
    description: "Perjalanan edukasi dengan keamanan ekstra dan nilai pendidikan untuk siswa-siswi.",
    icon: GraduationCap,
    href: "/study-tour",
    color: "bg-primary",
  },
  {
    id: "overland",
    title: "Overland Jawa-Bali",
    description: "Nikmati perjalanan darat mewah lintas provinsi dengan kenyamanan eksklusif GP Holiday.",
    icon: Bus,
    href: "/overland",
    color: "bg-[#1B4332]", // Darker green
  },
  {
    id: "mudik",
    title: "Mudik Mahasiswa",
    description: "Carter bus khusus paguyuban mahasiswa Lampung di Jogja. Pulang kampung seru & aman.",
    icon: Users,
    href: "/mudik-mahasiswa",
    color: "bg-accent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SpecialPrograms() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-accent uppercase tracking-widest mb-2 block"
          >
            Layanan B2B & Komunitas
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4"
          >
            Program Spesial Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Pilihan tepat untuk rombongan instansi, institusi pendidikan, dan paguyuban komunitas.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PROGRAMS.map((program) => (
            <motion.div key={program.id} variants={itemVariants}>
              <Link href={program.href} className="block group h-full">
                <div className="h-full p-8 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                  {/* Hover Background Accent */}
                  <div className={`absolute top-0 left-0 w-full h-1 ${program.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                  
                  <div className={`w-14 h-14 rounded-xl ${program.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className={`w-7 h-7 ${program.color === 'bg-accent' ? 'text-accent' : 'text-primary'}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    {program.description}
                  </p>
                  
                  <div className="flex items-center text-sm font-bold text-primary group-hover:text-accent transition-colors">
                    Pelajari Lebih Lanjut
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
