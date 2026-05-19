import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Cpu } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('INITIALIZING CYBER PROTOCOLS...');

  useEffect(() => {
    // Increment progress counter dynamically
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Small buffer before reveal
          return 100;
        }
        
        // Random incremental steps
        const step = Math.floor(Math.random() * 15) + 5;
        const next = prev + step;
        return next > 100 ? 100 : next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Cycle loading status text
  useEffect(() => {
    const textOptions = [
      'BOOTING HARDWARE EMULATOR...',
      'ESTABLISHING ENCRYPTED LINK...',
      'INJECTING GLASSMORPHIC SHADERS...',
      'LOADING NEON REVOLVER ENGINE...',
      'SYNCING MATRIX PORTFOLIO V2.2.6...',
      'READY TO INJECT CONTROLS.'
    ];
    
    const textInterval = setInterval(() => {
      const idx = Math.min(Math.floor(progress / 18), textOptions.length - 1);
      setLoadingText(textOptions[idx]);
    }, 150);

    return () => clearInterval(textInterval);
  }, [progress]);

  return (
    <div className="fixed inset-0 z-[9999] bg-pitchBlack flex flex-col items-center justify-center p-4">
      {/* Decorative Matrix Background in Loading */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-md p-8 glass-card border border-white/5 flex flex-col items-center text-center">
        {/* Glowing Logo Circle */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-8"
        >
          {/* Neon Purple Pulsing Aura */}
          <div className="absolute -inset-4 bg-neonPurple/20 rounded-full blur-xl animate-pulse-slow" />
          
          {/* Cybernetic Icon Box */}
          <div className="relative w-20 h-20 rounded-2xl bg-darkBg border border-cyanGlow/40 flex items-center justify-center shadow-neon-cyan">
            <Cpu className="text-cyanGlow w-10 h-10 animate-spin-slow" />
          </div>
          
          {/* Overlay Shield badge */}
          <div className="absolute -bottom-2 -right-2 bg-neonPurple text-pitchBlack p-1.5 rounded-lg border border-pitchBlack">
            <ShieldCheck size={16} className="font-bold" />
          </div>
        </motion.div>

        {/* Brand Name */}
        <h1 className="text-3xl font-black tracking-widest text-softWhite mb-2">
          LINTANG<span className="text-cyanGlow">.DEV</span>
        </h1>
        <p className="font-mono text-xs text-mutedGray tracking-wider mb-8">
          V2.2.6 // SILICON VALLEY CORE
        </p>

        {/* Progress Value */}
        <div className="font-mono text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyanGlow to-neonPurple mb-4">
          {progress}%
        </div>

        {/* Loading Progress Bar Container */}
        <div className="w-full h-1.5 bg-white/5 border border-white/10 rounded-full overflow-hidden mb-4">
          <motion.div 
            className="h-full bg-gradient-to-r from-cyanGlow via-neonPurple to-accent"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>

        {/* Current Loading Status Subtext */}
        <div className="font-mono text-[10px] tracking-widest text-cyanGlow/80 animate-pulse h-4 overflow-hidden">
          {loadingText}
        </div>
      </div>
    </div>
  );
};

export default Loader;
