import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import Loader from './components/Loader';
import Certificate from './Certificate';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showCertificate, setShowCertificate] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Force HTML element to dark class by default for the pitchBlack tech theme
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Futuristic Easter Egg shortcut to open the Certificate view: Ctrl+Shift+C
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'c') {
        e.preventDefault();
        setShowCertificate((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-darkBg text-softWhite selection:bg-cyanGlow selection:text-pitchBlack overflow-x-hidden font-sans">
      
      {/* 1. Loader screen (AnimatePresence holds exit animations) */}
      <AnimatePresence>
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* 2. Interactive Certificate View */}
      {showCertificate ? (
        <Certificate onClose={() => setShowCertificate(false)} />
      ) : (
        <>
          {/* Main content loads only when not loading */}
          {!isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* 3. Advanced Custom Double-Layer Glow Cursor */}
              <CursorGlow />

              {/* 4. Electric Neon Scroll Progress Bar */}
              <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyanGlow via-neonPurple to-accent origin-left z-[999] shadow-neon-cyan"
                style={{ scaleX }}
              />

              {/* 5. Portfolio Section Blocks */}
              <Navbar />
              
              <main>
                <Hero />
                <About />
                <TechStack />
                <Projects />
                <Experience />
                <Services />
                <Contact />
              </main>

              {/* 6. Certificate Trigger Helper (Floating Developer Node in Footer) */}
              <div className="flex justify-center bg-pitchBlack pb-8 text-center">
                <button
                  onClick={() => setShowCertificate(true)}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-cyanGlow/40 hover:text-cyanGlow font-mono text-[9px] tracking-widest uppercase transition-all duration-300 shadow-glass"
                  data-cursor="hover"
                >
                  [ VIEW_CREDENTIAL_CERTIFICATE(); ]
                </button>
              </div>

              <Footer />
            </motion.div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
