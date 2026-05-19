import React from 'react';
import { Terminal, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pitchBlack border-t border-white/5 py-12 px-6 overflow-hidden relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand Core */}
        <div className="flex items-center gap-2">
          <Terminal size={18} className="text-cyanGlow" />
          <span className="font-display font-extrabold tracking-widest text-sm text-softWhite uppercase">
            LINTANG<span className="text-cyanGlow">.DEV</span>
          </span>
        </div>

        {/* Copy Node */}
        <p className="font-mono text-[10px] text-mutedGray/60 tracking-wider text-center">
          © {currentYear} // ALL RIGHTS ENCRYPTED. DESIGNED & CODED BY LABIB LINTANG.
        </p>

        {/* Server status badge */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
          <Shield size={12} className="text-cyanGlow" />
          <span className="font-mono text-[9px] text-mutedGray tracking-wider">
            SV_CORE: v2.2.6 // ONLINE
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
