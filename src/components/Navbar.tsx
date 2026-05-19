import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Instagram, Linkedin, MessageSquare, Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '// HOME', href: '#home' },
    { label: '// ABOUT', href: '#about' },
    { label: '// SKILLS', href: '#skills' },
    { label: '// PROJECTS', href: '#projects' },
    { label: '// EDUCATION', href: '#education' },
    { label: '// SOFTWARE SKILLS', href: '#software-skills' },
    { label: '// CONTACT', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12 ${
        isScrolled ? 'backdrop-blur-md bg-pitchBlack/50 border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Brand */}
          <a 
            href="#home" 
            className="flex items-center gap-2 group pointer-events-auto"
            data-cursor="hover"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyanGlow to-neonPurple flex items-center justify-center p-[1px] group-hover:rotate-12 transition-transform duration-300">
              <div className="w-full h-full bg-pitchBlack rounded-lg flex items-center justify-center">
                <Terminal size={16} className="text-cyanGlow group-hover:text-neonPurple transition-colors" />
              </div>
            </div>
            <span className="font-display font-extrabold tracking-widest text-lg text-softWhite">
              LNTG<span className="text-cyanGlow">.DEV</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-mono text-xs font-semibold text-mutedGray hover:text-cyanGlow tracking-widest transition-colors duration-300 py-1"
                data-cursor="hover"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="px-5 py-2 font-mono text-xs font-extrabold text-cyanGlow border border-cyanGlow/30 rounded-lg hover:bg-cyanGlow hover:text-pitchBlack hover:shadow-neon-cyan transition-all duration-300"
              data-cursor="hover"
            >
              INIT_LINK();
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-softWhite hover:text-cyanGlow hover:border-cyanGlow/50 transition-colors"
            data-cursor="hover"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-40 w-full max-w-sm bg-pitchBlack/95 border-l border-white/10 backdrop-blur-xl p-8 flex flex-col justify-between shadow-2xl lg:hidden"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-6 mt-8">
              <span className="font-display font-extrabold tracking-widest text-lg text-softWhite">
                LNTG<span className="text-cyanGlow">.DEV</span>
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-softWhite hover:text-cyanGlow transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Nodes */}
            <div className="flex flex-col gap-6 my-auto py-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-mono text-lg font-bold text-mutedGray hover:text-cyanGlow hover:pl-2 tracking-widest transition-all duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Social Connect & Footer */}
            <div className="border-t border-white/5 pt-8 space-y-6">
              <div className="flex justify-center gap-6 text-mutedGray">
                <a href="https://github.com/ZhadeLintang" target="_blank" rel="noopener noreferrer" className="hover:text-cyanGlow transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.instagram.com/tangling2525" target="_blank" rel="noopener noreferrer" className="hover:text-neonPurple transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://www.linkedin.com/in/lintang-zhade-132746357/" target="_blank" rel="noopener noreferrer" className="hover:text-cyanGlow transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:lintangzhade2525@gmail.com" className="hover:text-neonPurple transition-colors">
                  <MessageSquare size={20} />
                </a>
              </div>
              <p className="font-mono text-[9px] text-center text-mutedGray/50">
                SYSTEM CORE V2.2.6 // SILICON VALLEY EST. 2026
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
