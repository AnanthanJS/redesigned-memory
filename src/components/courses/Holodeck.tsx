'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    title: "Sales Manager",
    company: "SAJ Motors",
    duration: "Aug 2025 – Mar 2026",
    status: "Completed",
    skills: ["Customer Onboarding", "Promotional Campaigns", "Team Coordination", "CRM Management"],
    description: "Managed daily sales and operational activities supporting monthly revenue targets. Executed promotional campaigns and increased repeat business by 25%."
  },
  {
    id: 2,
    title: "System Operations Intern",
    company: "Vensure HCM",
    duration: "Apr 2025 – Jul 2025",
    status: "Completed",
    skills: ["QA Testing", "Support Ticket Resolution", "System Validation"],
    description: "Supported QA and system operations for enterprise HCM platforms, contributing to a 20% reduction in reported system issues."
  },
  {
    id: 3,
    title: "Techno-Commercial Expert",
    company: "Malayalam Mobikes India",
    duration: "Jul 2022 – Apr 2023",
    status: "Completed",
    skills: ["Lead Generation", "Brand Visibility", "Showroom Events", "Customer Relations"],
    description: "Built relationships with 100+ active customers and supported promotional campaigns to increase brand engagement."
  }
];

export default function Holodeck() {
  return (
    <div className="relative min-h-screen pt-32 pb-20 px-4 flex flex-col items-center">
      {/* Grid that forms when user scrolls to this section */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,42,122,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,42,122,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />
      
      <div className="max-w-6xl w-full relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-nebula-pink text-nebula-pink mb-4 font-mono text-sm tracking-widest bg-black/40 backdrop-blur">
            MISSION LOGS
          </div>
          <h2 className="text-4xl md:text-5xl font-cinematic text-white drop-shadow-md">
            Professional<br />
            <span className="text-nebula-pink drop-shadow-[0_0_15px_rgba(255,42,122,0.5)]">Experience</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-black/50 border border-white/10 rounded-xl p-8 font-mono text-gray-300 relative group overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-nebula-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex-grow flex flex-col">
                <div className="flex justify-between items-start border-b border-white/10 pb-4 mb-6">
                  <div>
                    <div className="text-xs text-nebula-pink mb-1 tracking-widest">{exp.company}</div>
                    <h3 className="text-xl font-bold text-white font-sci-fi">{exp.title}</h3>
                  </div>
                </div>
                
                <p className="text-sm font-sci-fi text-gray-400 mb-6 flex-grow">{exp.description}</p>
                
                <div className="mb-6 text-xs">
                  <span className="text-gray-500 block mb-1">DURATION</span>
                  <span className="text-white">{exp.duration}</span>
                </div>
                
                <div className="mb-8">
                  <span className="text-gray-500 block mb-2 text-xs">KEY ACHIEVEMENTS & SKILLS</span>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {exp.skills.map(skill => (
                      <li key={skill} className="flex items-center gap-2">
                        <span className="text-nebula-pink">▹</span> {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-black/50 border border-interstellar-blue/50 hover:border-interstellar-blue rounded-full font-mono text-sm tracking-widest text-interstellar-blue hover:text-white transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-interstellar-blue/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            <span className="relative z-10">[ VIEW FULL RESUME ]</span>
            <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
