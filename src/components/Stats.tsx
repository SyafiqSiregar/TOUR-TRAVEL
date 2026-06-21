"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { label: "Paket Tersedia", value: 500, suffix: "+" },
  { label: "Wisatawan", value: 10000, suffix: "+" },
  { label: "Destinasi", value: 50, suffix: "+" },
  { label: "Kepuasan", value: 98, suffix: "%" },
];

function Counter({ from, to, suffix }: { from: number; to: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2000;
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeOut * (to - from) + from));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, to, from]);

  return (
    <span ref={ref}>
      {count.toLocaleString("id-ID")}
      <span className="text-primary ml-1">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-16 md:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center p-6 bg-bg rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-2">
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
