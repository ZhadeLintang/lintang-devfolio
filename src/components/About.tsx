import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ShieldCheck, Award, Zap, Code2 } from 'lucide-react';

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

  const [experienceCount, setExperienceCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start('visible');

      // Increment stats counters smoothly
      const duration = 2000;
      const steps = 50;
      const intervalTime = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        setExperienceCount(Math.min(Math.floor((2 / steps) * step), 2)); // 2+ years
        setProjectCount(Math.min(Math.floor((15 / steps) * step), 15)); // 15+ projects
        setClientCount(Math.min(Math.floor((10 / steps) * step), 10)); // 10+ clients

        if (step >= steps) {
          clearInterval(timer);
        }
      }, intervalTime);

      return () => clearInterval(timer);
    }
  }, [inView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const bioBullets = [
    { icon: <Code2 size={18} className="text-cyanGlow" />, text: 'Proficient in modern fullstack ecosystems (React/Next.js, Laravel, Node.js).' },
    { icon: <ShieldCheck size={18} className="text-neonPurple" />, text: 'Active student majoring in Software Engineering (SMK Prestasi Prima, Jakarta).' },
    { icon: <Award size={18} className="text-accent" />, text: 'High emphasis on creating premium, interactive design layouts (Neo Brutalism & Glassmorphism).' },
    { icon: <Zap size={18} className="text-cyanGlow" />, text: 'Proven experience building functional cyber inventory POS & fullstack database managers.' }
  ];

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
                Labib Lintang Habibie
              </h3>
              
              <p className="text-mutedGray text-base md:text-lg leading-relaxed mb-8">
                Siswa SMK dengan jurusan Rekayasa Perangkat Lunak (RPL) yang berfokus penuh pada pengembangan frontend web modern, UI/UX design, dan optimasi arsitektur full-stack. Memadukan estetika brutalist futuristik dengan kode yang clean dan performan tinggi.
              </p>
            </div>

            {/* Bullet points grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/5">
              {bioBullets.map((bullet, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="p-1 rounded bg-white/5 shrink-0 mt-0.5 border border-white/10">
                    {bullet.icon}
                  </div>
                  <p className="text-sm text-mutedGray/90 font-medium leading-normal">{bullet.text}</p>
                </div>
              ))}
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
              {/* Stat item 1 */}
              <div className="glass-card p-4 border border-white/5 flex flex-col items-center justify-center text-center">
                <span className="font-display text-2xl md:text-3xl font-black text-cyanGlow">
                  {experienceCount}+
                </span>
                <span className="font-mono text-[9px] text-mutedGray tracking-wider uppercase mt-1">Yrs Exp</span>
              </div>

              {/* Stat item 2 */}
              <div className="glass-card p-4 border border-white/5 flex flex-col items-center justify-center text-center">
                <span className="font-display text-2xl md:text-3xl font-black text-neonPurple">
                  {projectCount}+
                </span>
                <span className="font-mono text-[9px] text-mutedGray tracking-wider uppercase mt-1">Projects</span>
              </div>

              {/* Stat item 3 */}
              <div className="glass-card p-4 border border-white/5 flex flex-col items-center justify-center text-center">
                <span className="font-display text-2xl md:text-3xl font-black text-accent">
                  {clientCount}+
                </span>
                <span className="font-mono text-[9px] text-mutedGray tracking-wider uppercase mt-1">Clients</span>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
