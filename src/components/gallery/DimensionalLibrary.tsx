'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const works = [
  { id: 1, title: 'SAJ Motors Rebrand', result: 'Brand Identity', era: 'present', color: '#00d4ff' },
  { id: 2, title: 'Automotive Promo', result: 'Video Campaign', era: 'present', color: '#9b59b6' },
  { id: 3, title: 'Mobikes India Launch', result: 'Visual Collateral', era: 'past', color: '#ff6b35' },
];

export default function DimensionalLibrary() {
  return (
    <div className="min-h-screen relative pt-32 pb-20 px-4 flex flex-col items-center pointer-events-none">
      <div className="max-w-6xl w-full text-center z-10 pointer-events-none">
        <h2 className="text-4xl md:text-5xl font-cinematic text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
          The 5th Dimension
        </h2>
        <p className="text-interstellar-blue font-mono text-sm tracking-widest mt-2">INFINITE LIBRARY</p>
        <p className="text-gray-400 font-sci-fi text-xs mt-8 max-w-md mx-auto leading-relaxed border border-white/10 p-4 rounded-xl bg-black/40 backdrop-blur-md">
          [ DRAG TO ROTATE & EXPLORE THE TESSERACT. HOVER OVER ARTIFACTS TO REVEAL MISSION LOGS. ]
        </p>
      </div>
    </div>
  );
}
