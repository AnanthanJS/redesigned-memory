'use client';

import { useState } from 'react';

export default function QuantumCommunicator() {
  const [messageState, setMessageState] = useState<'idle' | 'sending' | 'entangled'>('idle');
  
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 px-4">
      {/* Animated quantum particles background */}
      <div className="absolute inset-0 bg-space-void z-0" />
      
      <div className="relative z-10 w-full max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <div className="absolute inset-0 rounded-full border-2 border-interstellar-blue animate-ping opacity-50" />
            <div className="absolute inset-2 rounded-full border border-singularity-purple/50" />
            <div className="absolute inset-4 rounded-full bg-interstellar-blue/20" />
            <div className="absolute inset-8 rounded-full bg-singularity-purple/10" />
            <div className="absolute inset-0 flex items-center justify-center text-4xl">
              🌀
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-cinematic text-white">Entangle Your <span className="text-interstellar-blue">Vision</span></h2>
          <p className="text-gray-400 mt-4 font-sci-fi">
            Send a quantum signal for collaboration, growth audits, or VFX consulting.
          </p>
        </div>
        
        <form className="space-y-6 bg-black/40 p-8 rounded-2xl border border-white/5 backdrop-blur-md" onSubmit={(e) => { e.preventDefault(); setMessageState('entangled'); }}>
          <div className="relative group">
            <input
              type="text"
              required
              placeholder="Your designation (Name)"
              className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:border-interstellar-blue focus:outline-none transition text-white placeholder-gray-600 font-sci-fi"
            />
            <div className="absolute bottom-0 left-0 h-px bg-interstellar-blue transform scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left w-full" />
          </div>
          
          <div className="relative group">
            <input
              type="email"
              required
              placeholder="Quantum frequency (Email)"
              className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:border-interstellar-blue focus:outline-none transition text-white placeholder-gray-600 font-sci-fi"
            />
            <div className="absolute bottom-0 left-0 h-px bg-interstellar-blue transform scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left w-full" />
          </div>
          
          <div className="relative group">
            <textarea
              rows={5}
              required
              placeholder="Describe the dimension you want to create or the funnel you want to scale..."
              className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:border-interstellar-blue focus:outline-none transition text-white placeholder-gray-600 font-sci-fi resize-none"
            />
            <div className="absolute bottom-0 left-0 h-px bg-interstellar-blue transform scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left w-full" />
          </div>
          
          <button
            type="submit"
            className="w-full py-4 relative overflow-hidden group rounded-lg border border-interstellar-blue/50 bg-interstellar-blue/10 hover:bg-interstellar-blue/20 transition-colors"
          >
            <span className="relative z-10 text-sm font-bold tracking-widest text-interstellar-blue group-hover:text-white transition-colors font-mono">
              {messageState === 'idle' ? 'INITIATE QUANTUM SIGNAL →' : messageState === 'sending' ? 'TRANSMITTING...' : 'SIGNAL ENTANGLED ✓'}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-interstellar-blue/0 via-interstellar-blue/20 to-interstellar-blue/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
        </form>
      </div>
    </div>
  );
}
