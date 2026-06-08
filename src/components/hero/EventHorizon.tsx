'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function EventHorizon({ onEnter }: { onEnter: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev < 247 ? prev + 1 : 247));
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-10">
      {/* Foreground: Floating credentials */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="space-y-8 animate-float"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-interstellar-blue/30 backdrop-blur-md mb-4">
            <span className="flex h-2 w-2 rounded-full bg-interstellar-blue animate-pulse" />
            <span className="text-xs font-mono text-interstellar-blue tracking-widest uppercase">System Online</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold font-cinematic leading-tight bg-gradient-to-r from-interstellar-blue via-singularity-purple to-accretion-orange bg-clip-text text-transparent drop-shadow-2xl">
            Visakh P S
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-sci-fi max-w-2xl mx-auto">
            Graphic Designer & VFX Artist translating product narratives into cinematic visual dimensions.
          </p>
          
          {/* Animated counter of dimensions/worlds built */}
          <div className="py-8">
            <div className="text-5xl font-mono text-white mb-2">{count}+</div>
            <div className="text-sm font-sci-fi text-interstellar-blue uppercase tracking-widest">Campaigns & Visuals Created</div>
          </div>
          
          {/* CTA that pulls user into next dimension */}
          <button 
            onClick={onEnter}
            className="group relative px-8 py-4 overflow-hidden rounded-full border border-interstellar-blue bg-black/50 backdrop-blur hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all duration-500"
          >
            <span className="relative z-10 text-interstellar-blue font-bold tracking-widest group-hover:text-black transition-colors duration-300">
              ENTER THE TESSERACT →
            </span>
            <div className="absolute inset-0 bg-interstellar-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
