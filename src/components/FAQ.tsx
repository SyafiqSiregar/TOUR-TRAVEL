"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Apakah harga sudah termasuk akomodasi?",
    a: "Ya, sebagian besar paket kami sudah termasuk akomodasi bintang 3 atau 4 tergantung pilihan paket Anda. Detail lengkap akan tertera di itinerary masing-masing destinasi."
  },
  {
    q: "Bagaimana jika saya ingin cancel booking?",
    a: "Pembatalan dapat dilakukan maksimal H-7 sebelum keberangkatan dengan pengembalian dana 100%. Pembatalan di bawah H-7 akan dikenakan potongan biaya administrasi sesuai kebijakan."
  },
  {
    q: "Apakah ada biaya tambahan saat di lokasi?",
    a: "Paket kami bersifat All-Inclusive untuk tiket masuk wisata utama. Biaya tambahan hanya berlaku untuk pengeluaran pribadi, tip guide (opsional), dan wahana di luar itinerary."
  },
  {
    q: "Apakah aman booking online di M One Travelindo?",
    a: "Sangat aman! Sistem pembayaran kami terenkripsi penuh dan kami bekerja sama dengan payment gateway resmi yang diawasi oleh Bank Indonesia."
  },
  {
    q: "Apakah tersedia paket untuk grup besar?",
    a: "Tentu, kami menyediakan paket custom untuk corporate gathering, study tour, maupun liburan keluarga besar dengan penawaran harga spesial."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">FAQ</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
            Pertanyaan Populer
          </h3>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-primary/50 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-primary' : 'text-gray-400'}`} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
