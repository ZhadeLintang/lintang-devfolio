import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Code2, Database, Layout, PenTool, Sparkles, Terminal, Smartphone, Code, Paintbrush, Server } from 'lucide-react';

interface TechItem {
  name: string;
  category: string;
  icon: React.ReactNode;
  color: string;
  glowClass: string;
  level: number;
}

const TechStack: React.FC = () => {
  const techs: TechItem[] = [
    { 
      name: 'React TypeScrip', 
      category: 'Frontend', 
      icon: <Layout size={24} />, 
      color: 'text-cyanGlow border-cyanGlow/20', 
      glowClass: 'hover:border-cyanGlow/50 hover:shadow-neon-cyan',
      level: 100
    },
    { 
      name: 'Tailwind CSS', 
      category: 'Styling', 
      icon: <Paintbrush size={24} />, 
      color: 'text-secondary border-secondary/20', 
      glowClass: 'hover:border-secondary/50 hover:shadow-neon-cyan',
      level: 100
    },
    { 
      name: 'Laravel', 
      category: 'Backend', 
      icon: <Server size={24} />, 
      color: 'text-cyanGlow border-cyanGlow/20', 
      glowClass: 'hover:border-cyanGlow/50 hover:shadow-neon-cyan',
      level: 95
    },
    { 
      name: 'Dart', 
      category: 'Programing Language', 
      icon: <Code size={24} />, 
      color: 'text-blueGlow border-blueGlow/20', 
      glowClass: 'hover:border-blueGlow/50 hover:shadow-blueGlow',
      level: 85
    },
    { 
      name: 'PHP Native', 
      category: 'Backend', 
      icon: <Server size={24} />, 
      color: 'text-neonPurple border-neonPurple/20', 
      glowClass: 'hover:border-neonPurple/50 hover:shadow-neon-purple',
      level: 90
    },
    { 
      name: 'Supabase', 
      category: 'Database / Auth', 
      icon: <ShieldCheck size={24} />, 
      color: 'text-accent border-accent/20', 
      glowClass: 'hover:border-accent/50 hover:shadow-neon-pink',
      level: 95
    },
    { 
      name: 'Figma', 
      category: 'UI/UX Design', 
      icon: <PenTool size={24} />, 
      color: 'text-accent border-accent/20', 
      glowClass: 'hover:border-accent/50 hover:shadow-neon-pink',
      level: 85
    },
    { 
      name: 'Android Studio', 
      category: 'Mobile Development', 
      icon: <Cpu size={24} />, 
      color: 'text-cyanGlow border-cyanGlow/20', 
      glowClass: 'hover:border-cyanGlow/50 hover:shadow-neon-cyan',
      level: 80
    },
    {
      name: 'HTML & CSS',
      category: 'Frontend',
      icon: <Code2 size={24} />,
      color: 'text-cyanGlow border-cyanGlow/20',
      glowClass: 'hover:border-cyanGlow/50 hover:shadow-neon-cyan',
      level: 95
    },
    {
      name: 'MySQL',
      category: 'Database',
      icon: <Database size={24} />,
      color: 'text-cyanGlow border-cyanGlow/20',
      glowClass: 'hover:border-cyanGlow/50 hover:shadow-neon-cyan',
      level: 90
    },
    {
      name: 'Java Script',
      category: 'Programing Language',
      icon: <Code2 size={24} />,
      color: 'text-cyanGlow border-cyanGlow/20',
      glowClass: 'hover:border-cyanGlow/50 hover:shadow-neon-cyan',
      level: 90
    },
    {
      name: 'Flutter',
      category: 'Mobile Development',
      icon: <Smartphone size={24} />,
      color: 'text-blueGlow border-blueGlow/20',
      glowClass: 'hover:border-blueGlow/50 hover:shadow-neon-blue',
      level: 90
    },
  ];

  return (
    <section 
      id="skills" 
      className="py-32 px-6 bg-pitchBlack relative overflow-hidden"
    >
      {/* Decorative grids */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />
      
      {/* Glow overlays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyber-radial w-[800px] h-[800px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="mb-20 text-center">
          <span className="font-mono text-xs text-neonPurple tracking-widest uppercase font-bold mb-3 block animate-pulse">
            [// RUNNING COMPILATION SCHEMA...]
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-softWhite uppercase">
            CORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-accent">SKILLS</span>
          </h2>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techs.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`glass-card p-6 border flex flex-col justify-between group ${tech.color} ${tech.glowClass} transition-all duration-300`}
              data-cursor="hover"
            >
              <div>
                {/* Header Icon + Label */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover:bg-pitchBlack group-hover:scale-115 transition-all duration-300 shrink-0">
                    {tech.icon}
                  </div>
                  <span className="font-mono text-[9px] text-mutedGray bg-white/5 px-2 py-0.5 rounded border border-white/10 tracking-widest">
                    {tech.category}
                  </span>
                </div>

                {/* Tech Title */}
                <h3 className="text-xl font-bold text-softWhite mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyanGlow transition-colors duration-300">
                  {tech.name}
                </h3>
              </div>

              {/* Progress Level bar */}
              <div className="space-y-2 mt-4">
                <div className="flex justify-between items-center text-[10px] font-mono text-mutedGray">
                  <span>LEVEL_SPEC</span>
                  <span className="font-bold">{tech.level}%</span>
                </div>
                <div className="h-1 bg-white/5 border border-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-current rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom decorative marquee */}
        <div className="mt-24 py-4 border-y border-white/5 overflow-hidden w-full relative z-10 bg-pitchBlack/45 backdrop-blur-md">
          <div className="animate-marquee whitespace-nowrap flex gap-12 font-mono text-[10px] tracking-[0.2em] text-mutedGray/40 uppercase">
            <span>⚡ REACT & TYPESCRIPT ULTRA-ENGINE</span>
            <span>⚡ CLOUD INFRASTRUCTURE WITH SUPABASE</span>
            <span>⚡ PURE NEO BRUTALISM GLASS SHADERS</span>
            <span>⚡ STATE-OF-THE-ART FRONTEND DESIGNS 2026</span>
            <span>⚡ COMPRESSING CORE SKILLS</span>
            <span>⚡ REACT & TYPESCRIPT ULTRA-ENGINE</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechStack;
