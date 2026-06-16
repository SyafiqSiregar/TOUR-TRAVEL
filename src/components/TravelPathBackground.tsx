"use client";

import { motion, useScroll, useTransform } from "framer-motion";

// Dikurangi menjadi 3 path agar jauh lebih ringan di render
const PATHS = [
  { id: 1, d: "M-100 150 C 200 50, 400 350, 800 250 S 1100 50, 1300 200", duration: 20, delay: 0 },
  { id: 2, d: "M-100 450 C 300 550, 500 150, 900 250 S 1100 450, 1300 300", duration: 25, delay: 5 },
  { id: 3, d: "M-100 50 C 300 250, 600 50, 900 350 S 1200 100, 1400 150", duration: 22, delay: 2 },
];

export default function TravelPathBackground() {
  // Parallax scroll yang ringan (tanpa event listener mousemove yang membebani CPU)
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-[1]">
      <style>{`
        @keyframes drawLine {
          from { stroke-dashoffset: 2400; }
          to { stroke-dashoffset: 0; }
        }
        .path-line {
          stroke-dasharray: 2400;
          stroke-dashoffset: 2400;
          animation: drawLine 25s linear infinite;
        }
      `}</style>
      
      <motion.div 
        className="absolute inset-0 w-full h-full opacity-30"
        style={{ 
          y: yParallax, 
          willChange: "transform" 
        }}
      >
        <svg 
          viewBox="0 0 1200 600" 
          preserveAspectRatio="xMidYMid slice" 
          className="w-full h-full"
          // Menghapus drop-shadow CSS dan SVG Filter yang sangat berat untuk GPU
        >
          {PATHS.map((p, i) => (
            <g key={p.id}>
              {/* Garis Rute */}
              <path 
                id={`route-${p.id}`}
                d={p.d}
                fill="none"
                stroke="#0F766E"
                strokeWidth={i % 2 === 0 ? "2" : "3"}
                className="path-line opacity-60"
                style={{ animationDuration: `${p.duration + 10}s`, animationDelay: `-${p.delay}s` }}
              />
              
              {/* Titik Pesawat/Perjalanan (Tanpa filter glow berat, murni SVG rendering) */}
              <circle r="4" fill="#10B981">
                <animateMotion 
                  dur={`${p.duration}s`} 
                  repeatCount="indefinite" 
                  begin={`-${p.delay}s`}
                >
                  <mpath href={`#route-${p.id}`} />
                </animateMotion>
              </circle>
            </g>
          ))}
        </svg>
      </motion.div>
    </div>
  );
}
