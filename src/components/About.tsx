import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Github, Instagram, Mail } from 'lucide-react';

const About: React.FC = () => {
  const controls = useAnimation();
  const [inView, setInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };



  return (
    <section 
      id="about" 
      className="py-32 px-6 bg-pitchBlack relative overflow-hidden"
      ref={elementRef}
    >
      {/* Background gradients */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-neonPurple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] rounded-full bg-cyanGlow/5 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="mb-20 text-center md:text-left">
          <span className="font-mono text-xs text-cyanGlow tracking-widest uppercase font-bold mb-3 block">
            [// CONNECTING MODULES...]
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-softWhite uppercase">
            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanGlow to-neonPurple">ME</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Bio Card (Takes 2 columns on desktop) */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            className="lg:col-span-2 glass-card p-8 md:p-10 border border-white/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-cyanGlow animate-pulse" />
                <span className="font-mono text-xs tracking-wider text-mutedGray">IDENTIFICATION: DEVELOPER.INF</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-softWhite mb-6 leading-tight">
                Labib Lintang H
              </h3>
              
              <p className="text-mutedGray text-base md:text-lg leading-relaxed mb-8">
                Siswa SMK dengan jurusan Rekayasa Perangkat Lunak (RPL) yang berfokus penuh pada pengembangan frontend web modern, UI/UX design, dan optimasi arsitektur full-stack. Memadukan estetika brutalist futuristik dengan kode yang clean dan performan tinggi.
              </p>
            </div>

            {/* Cyber Profile Metadata List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-white/5 font-mono text-xs text-mutedGray">
              <div className="flex items-center gap-3 border border-white/5 bg-white/5 p-3 rounded-lg hover:border-cyanGlow/30 transition-colors">
                <span className="text-cyanGlow font-bold">NAMA:</span>
                <span className="text-softWhite font-semibold">Labib Lintang H</span>
              </div>
              <div className="flex items-center gap-3 border border-white/5 bg-white/5 p-3 rounded-lg hover:border-neonPurple/30 transition-colors">
                <span className="text-neonPurple font-bold">TTL:</span>
                <span className="text-softWhite font-semibold">Jakarta, 25 Oktober 2005</span>
              </div>
              <a 
                href="mailto:lintangzhade2525@gmail.com" 
                className="flex items-center gap-3 border border-white/5 bg-white/5 p-3 rounded-lg hover:border-accent/40 hover:text-softWhite transition-colors"
                data-cursor="hover"
              >
                <span className="text-accent font-bold">EMAIL:</span>
                <span className="text-softWhite font-semibold">lintangzhade2525@gmail.com</span>
              </a>
              <a 
                href="https://github.com/ZhadeLintang" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 border border-white/5 bg-white/5 p-3 rounded-lg hover:border-cyanGlow/40 hover:text-softWhite transition-colors"
                data-cursor="hover"
              >
                <span className="text-cyanGlow font-bold">GITHUB:</span>
                <span className="text-softWhite font-semibold">ZhadeLintang</span>
              </a>
            </div>
          </motion.div>

          {/* Stats Counter & Image Card (Takes 1 column) */}
          <div className="flex flex-col gap-8">
            
            {/* Visual Photo Card */}
            <motion.div 
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              className="glass-card overflow-hidden group aspect-[4/3] relative flex items-center justify-center p-[2px]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyanGlow/20 via-neonPurple/10 to-transparent z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />
              <img 
                src={`${import.meta.env.BASE_URL}img/profile-lintang.jpeg`} 
                alt="Lintang Profile" 
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-105"
              />
              <div className="absolute bottom-4 left-4 z-20 px-3 py-1 rounded bg-pitchBlack/70 backdrop-blur-md border border-white/10 font-mono text-[9px] text-cyanGlow uppercase tracking-widest font-bold">
                LOC: JAKARTA, ID
              </div>
            </motion.div>

            {/* Live Counter Stats Grid */}
            <motion.div 
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              className="grid grid-cols-3 gap-4"
            >
              {/* Stat item 1 - GitHub */}
              <a 
                href="https://github.com/ZhadeLintang"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 border border-white/5 flex flex-col items-center justify-center text-center hover:border-cyanGlow/50 hover:shadow-neon-cyan transition-all duration-300 hover:-translate-y-1"
                data-cursor="hover"
              >
                <Github size={20} className="text-cyanGlow mb-1.5" />
                <span className="font-display text-xl md:text-2xl font-black text-cyanGlow">
                  GIT
                </span>
                <span className="font-mono text-[9px] text-mutedGray tracking-wider uppercase mt-1">GitHub</span>
              </a>

              {/* Stat item 2 - Instagram */}
              <a 
                href="https://www.instagram.com/tangling2525"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 border border-white/5 flex flex-col items-center justify-center text-center hover:border-neonPurple/50 hover:shadow-neon-purple transition-all duration-300 hover:-translate-y-1"
                data-cursor="hover"
              >
                <Instagram size={20} className="text-neonPurple mb-1.5" />
                <span className="font-display text-xl md:text-2xl font-black text-neonPurple">
                  INST
                </span>
                <span className="font-mono text-[9px] text-mutedGray tracking-wider uppercase mt-1">Instagram</span>
              </a>

              {/* Stat item 3 - Email */}
              <a 
                href="mailto:lintangzhade2525@gmail.com"
                className="glass-card p-4 border border-white/5 flex flex-col items-center justify-center text-center hover:border-accent/50 hover:shadow-neon-pink transition-all duration-300 hover:-translate-y-1"
                data-cursor="hover"
              >
                <Mail size={20} className="text-accent mb-1.5" />
                <span className="font-display text-xl md:text-2xl font-black text-accent">
                  MAIL
                </span>
                <span className="font-mono text-[9px] text-mutedGray tracking-wider uppercase mt-1">Email</span>
              </a>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
