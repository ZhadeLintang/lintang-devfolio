import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  const roles = ['Fullstack Developer', 'UI/UX Designer', 'Creative Engineer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: number;
    const activeRole = roles[currentRoleIndex];
    const speed = isDeleting ? 30 : 80;

    if (!isDeleting && currentText === activeRole) {
      // Hold active role for 2.5 seconds
      timer = window.setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = window.setTimeout(() => {
        setCurrentText((prev) => 
          isDeleting 
            ? activeRole.substring(0, prev.length - 1) 
            : activeRole.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center pt-24 px-6 overflow-hidden bg-pitchBlack"
    >
      {/* Decorative Interactive Background Grids & Sparks */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-neonPurple/10 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-cyanGlow/800 opacity-5 blur-[160px] pointer-events-none animate-pulse-slow" />
      
      {/* Floating Orbital particles */}
      <div className="absolute top-[20%] right-[15%] w-3 h-3 bg-cyanGlow rounded-full animate-float shadow-neon-cyan opacity-80" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-[30%] left-[10%] w-2 h-2 bg-neonPurple rounded-full animate-float shadow-neon-purple opacity-60" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[60%] left-[80%] w-2.5 h-2.5 bg-accent rounded-full animate-float shadow-neon-pink opacity-70" style={{ animationDelay: '3s' }} />

      <div className="max-w-6xl mx-auto w-full flex flex-col items-center justify-center text-center z-10">
        
        {/* Futuristic Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyanGlow/20 bg-cyanGlow/5 backdrop-blur-md mb-8 hover:border-cyanGlow/50 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-cyanGlow animate-ping" />
          <span className="font-mono text-[10px] uppercase text-cyanGlow tracking-widest font-semibold flex items-center gap-1.5">
            <Sparkles size={12} /> SYSTEM READY // STATUS: ACTIVE
          </span>
        </motion.div>

        {/* Large Brand Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative max-w-4xl"
        >
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter mb-4 text-softWhite leading-[0.9]">
            LINTANG
          </h1>
          {/* Cyber Neon Stroke Header */}
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyanGlow via-neonPurple to-accent" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.05)' }}>
            HABIBIE
          </h2>
        </motion.div>

        {/* Typing Simulator Terminal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-full max-w-lg mb-12 p-4 glass-card border border-white/5 bg-[#070711]/60 flex items-center gap-3 font-mono text-sm md:text-base tracking-wider justify-center shadow-lg"
        >
          <Terminal size={18} className="text-cyanGlow shrink-0" />
          <span className="text-mutedGray font-medium">~/role: </span>
          <span className="text-softWhite font-bold">
            {currentText}
            <span className="inline-block w-1.5 h-4 bg-cyanGlow ml-1 animate-pulse" />
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-16"
        >
          {/* Primary CTA (Magnetic Glassmorphism style) */}
          <a
            href="#projects"
            className="group px-8 py-4 bg-gradient-to-r from-cyanGlow to-neonPurple text-pitchBlack text-sm font-mono font-bold tracking-widest rounded-xl hover:shadow-neon-cyan hover:scale-[1.03] transition-all duration-300 flex items-center gap-2"
            data-cursor="hover"
          >
            EXECUTE_PROJECTS();
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          {/* Secondary CTA (Brutalist cyber style) */}
          <a
            href="#contact"
            className="px-8 py-4 border border-white/10 rounded-xl bg-white/5 text-softWhite hover:bg-white/10 hover:border-white/20 text-sm font-mono tracking-widest transition-all duration-300"
            data-cursor="hover"
          >
            GET_IN_TOUCH();
          </a>
        </motion.div>

        {/* Social Connections */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex items-center gap-8 text-mutedGray border-t border-white/5 pt-8 w-full max-w-xs justify-center"
        >
          <a 
            href="https://github.com/ZhadeLintang" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-cyanGlow hover:-translate-y-1 transition-all duration-300"
            data-cursor="hover"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-neonPurple hover:-translate-y-1 transition-all duration-300"
            data-cursor="hover"
          >
            <Instagram size={20} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-cyanGlow hover:-translate-y-1 transition-all duration-300"
            data-cursor="hover"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:lintangzhade2525@gmail.com" 
            className="hover:text-neonPurple hover:-translate-y-1 transition-all duration-300"
            data-cursor="hover"
          >
            <Mail size={20} />
          </a>
        </motion.div>

      </div>
      
      {/* Dynamic Parallax Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60">
        <span className="font-mono text-[9px] tracking-widest text-mutedGray uppercase">SCROLL_DOWN</span>
        <div className="w-[18px] h-[30px] rounded-full border border-white/30 flex justify-center p-1">
          <motion.div 
            className="w-1.5 h-1.5 bg-cyanGlow rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
