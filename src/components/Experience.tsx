import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';

interface Event {
  type: 'work' | 'education';
  title: string;
  subtitle: string;
  date: string;
  location: string;
  desc: string;
}

const Experience: React.FC = () => {
  const events: Event[] = [
    {
      type: 'work',
      title: 'Freelance Fullstack Developer',
      subtitle: 'Self-Employed',
      date: '2026 - PRESENT',
      location: 'Remote',
      desc: 'Developing high-end responsive landing pages, cybernetic POS tools, and premium web architectures for modern businesses.',
    },
    {
      type: 'education',
      title: 'Rekayasa Perangkat Lunak (RPL)',
      subtitle: 'SMK Prestasi Prima',
      date: '2024 - 2027',
      location: 'Jakarta Timur, ID',
      desc: 'Majoring in Software Engineering. Gaining expert hands-on commands over algorithms, fullstack database integrations, and systems UI.',
    },
    {
      type: 'education',
      title: 'Junior High School Study',
      subtitle: 'SMP Walisongo',
      date: '2020 - 2024',
      location: 'Bekasi, ID',
      desc: 'Completed primary junior high curriculum. Active student body leadership and technical club participation.',
    },
  ];

  return (
    <section 
      id="experience" 
      className="py-32 px-6 bg-pitchBlack relative overflow-hidden"
    >
      <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] bg-cyanGlow/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-neonPurple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="mb-24 text-center">
          <span className="font-mono text-xs text-cyanGlow tracking-widest uppercase font-bold mb-3 block animate-pulse">
            [// CONNECTING SYSTEM JOURNALS...]
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-softWhite uppercase">
            EXPERIENCE & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanGlow to-neonPurple">TIMELINE</span>
          </h2>
        </div>

        {/* Vertical Timeline Wrapper */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-16">
          
          {events.map((event, idx) => (
            <motion.div
              key={event.title + idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Central Glowing Icon Node */}
              <div className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-pitchBlack border-2 flex items-center justify-center shadow-lg ${
                event.type === 'work' 
                  ? 'border-cyanGlow text-cyanGlow shadow-neon-cyan/20 animate-pulse' 
                  : 'border-neonPurple text-neonPurple shadow-neon-purple/20'
              }`}>
                {event.type === 'work' ? <Briefcase size={14} /> : <GraduationCap size={14} />}
              </div>

              {/* Event Content card */}
              <div className="glass-card p-6 md:p-8 border border-white/5 bg-[#0c0c17]/30 hover:border-white/15 hover:bg-[#0c0c17]/50 transition-all duration-300 relative group">
                
                {/* Year Badge */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <span className={`font-mono text-xs font-black tracking-widest px-3 py-1 bg-white/5 border rounded-lg ${
                    event.type === 'work' ? 'border-cyanGlow/20 text-cyanGlow' : 'border-neonPurple/20 text-neonPurple'
                  }`}>
                    {event.date}
                  </span>
                  
                  <div className="flex items-center gap-4 text-xs text-mutedGray font-mono">
                    <span className="flex items-center gap-1.5"><MapPin size={12} className="text-mutedGray/70" /> {event.location}</span>
                  </div>
                </div>

                {/* Heading */}
                <h3 className="text-2xl font-extrabold text-softWhite mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyanGlow transition-all duration-300">
                  {event.title}
                </h3>
                <h4 className="text-sm font-semibold text-mutedGray tracking-wider mb-4 uppercase">
                  {event.subtitle}
                </h4>

                {/* Description */}
                <p className="text-mutedGray text-sm md:text-base leading-relaxed">
                  {event.desc}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;
