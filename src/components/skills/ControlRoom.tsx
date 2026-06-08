'use client';

import { motion } from 'framer-motion';

const skills = [
  {
    name: "Visual Design",
    proficiency: 95,
    metrics: { "Branding": "Master", "Marketing Collateral": "Expert", "Photoshop": "Pro" },
    color: "#00d4ff"
  },
  {
    name: "Video & Motion",
    proficiency: 85,
    metrics: { "Premiere Pro": "Advanced", "VFX": "Intermediate", "Storytelling": "Pro" },
    color: "#9b59b6"
  },
  {
    name: "Campaign Strategy",
    proficiency: 90,
    metrics: { "Illustrator": "Expert", "Canva": "Master", "Market Research": "Advanced" },
    color: "#ff6b35"
  }
];

export default function ControlRoom() {
  return (
    <div className="min-h-screen relative pt-32 pb-20 px-4">
      {/* Holographic grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [transform:perspective(1000px)_rotateX(60deg)_translateY(-100px)_translateZ(-200px)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-cinematic text-center mb-16 text-white">
          <span className="text-interstellar-blue">Mastery</span> Dashboard
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative overflow-hidden group"
            >
              {/* Energy pulse effect */}
              <div 
                className="absolute -inset-20 opacity-0 group-hover:opacity-20 transition-opacity blur-3xl rounded-full"
                style={{ backgroundColor: skill.color }}
              />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold font-sci-fi text-white mb-6 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: skill.color }} />
                  {skill.name}
                </h3>
                
                <div className="mb-6">
                  <div className="flex justify-between text-xs font-mono text-gray-400 mb-2">
                    <span>SYSTEM INTEGRITY</span>
                    <span style={{ color: skill.color }}>{skill.proficiency}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  {Object.entries(skill.metrics).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                      <span className="text-gray-300 font-sci-fi">{key}</span>
                      <span className="font-mono text-xs px-2 py-1 rounded bg-white/5 text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
