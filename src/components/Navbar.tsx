"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Beranda", href: "#hero" },
  { label: "Destinasi", href: "#destinations" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Layanan", href: "#steps" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [lastYPos, setLastYPos] = useState(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    if (y > 100 && y > lastYPos) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setLastYPos(y);
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-150%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-5 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-7xl z-50 rounded-full border border-gray-200/50 bg-white/90 backdrop-blur-md shadow-sm"
      >
        <div className="flex items-center justify-between px-6 lg:px-8 h-16">
          <div className="font-heading font-bold text-xl text-primary">NusaJelajah</div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/5 px-4 py-2 rounded-full transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm font-medium text-primary hover:bg-primary/5 px-5 py-2 rounded-full transition-colors">
              Masuk
            </button>
            <button className="text-sm font-semibold text-white bg-primary hover:bg-primary-hover shadow-lg shadow-primary/20 px-6 py-2 rounded-full transition-all hover:-translate-y-0.5">
              Daftar
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 md:hidden",
          isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileOpen(false)}
      />
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-[300px] bg-primary z-[110] transition-transform duration-400 ease-in-out md:hidden flex flex-col p-8",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <button
          className="absolute top-6 left-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10"
          onClick={() => setIsMobileOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mt-16 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="text-white/90 font-medium text-lg px-4 py-3 rounded-xl hover:bg-white/10 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mt-auto flex flex-col gap-3">
          <button className="w-full py-3 rounded-xl font-medium text-white bg-white/10 hover:bg-white/20 transition-colors">
            Masuk
          </button>
          <button className="w-full py-3 rounded-xl font-semibold text-primary bg-white hover:bg-gray-100 shadow-xl transition-colors">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </>
  );
}
