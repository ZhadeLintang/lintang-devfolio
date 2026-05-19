import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, ArrowUpRight, Terminal, Smartphone, Sparkles, GitBranch, Server } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  desc: string;
  tag: string;
  colorClass: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Terminal size={26} />, // Menggunakan ikon Terminal untuk VS Code
      title: 'Visual Studio Code',
      desc: 'Writing clean, efficient code using an optimized text editor packed with custom extensions, linting, and integrated terminal workflows.',
      tag: 'CODE_WORKSPACE',
      colorClass: 'text-blueGlow border-blueGlow/10 hover:border-blueGlow/40 hover:shadow-neon-blue',
    },
    {
      icon: <PenTool size={26} />, // Menggunakan ikon PenTool untuk Figma
      title: 'Figma',
      desc: 'Creating interactive user interface prototypes, component libraries, and collaborative design assets with absolute pixel-precision.',
      tag: 'INTERFACE_PROTOTYPING',
      colorClass: 'text-accent border-accent/10 hover:border-accent/40 hover:shadow-neon-pink',
    },
    {
      icon: <Smartphone size={26} />, // Menggunakan ikon Smartphone untuk Android Studio
      title: 'Android Studio',
      desc: 'Compiling, debugging, and building native Android environments with robust emulator testing and Gradle build systems.',
      tag: 'MOBILE_COMPILATION',
      colorClass: 'text-cyanGlow border-cyanGlow/10 hover:border-cyanGlow/40 hover:shadow-neon-cyan',
    },
    {
      icon: <Sparkles size={26} />, // Menggunakan ikon Sparkles untuk Canva
      title: 'Canva',
      desc: 'Generating fast marketing collaterals, social media assets, and vector layouts to support quick brand presentations.',
      tag: 'GRAPHIC_PRODUCTION',
      colorClass: 'text-neonPurple border-neonPurple/10 hover:border-neonPurple/40 hover:shadow-neon-purple',
    },
        {
      icon: <GitBranch size={26} />, // Menggunakan ikon GitBranch untuk Github/Version Control
      title: 'GitHub',
      desc: 'Managing remote repositories, tracking version histories, and automating continuous integration pipelines through collaborative workflows.',
      tag: 'VERSION_CONTROL',
      colorClass: 'text-neonPurple border-neonPurple/10 hover:border-neonPurple/40 hover:shadow-neon-purple', // GitHub identik dengan warna ungu gelap/neon
    },
    {
      icon: <Server size={26} />, // Menggunakan ikon Server untuk Laragon
      title: 'Laragon',
      desc: 'Provisioning fast, isolated local server environments with automated virtual hosts, optimized for database management and rapid PHP testing.',
      tag: 'LOCAL_ENVIRONMENT',
      colorClass: 'text-cyanGlow border-cyanGlow/10 hover:border-cyanGlow/40 hover:shadow-neon-cyan', // Laragon identik dengan warna biru/cyan
    },


  ];

  return (
    <section 
      id="software-skills" 
      className="py-32 px-6 bg-pitchBlack relative overflow-hidden"
    >
      <div className="absolute top-[40%] left-[10%] w-[450px] h-[450px] bg-cyanGlow/5 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-neonPurple/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="mb-24 text-center">
          <span className="font-mono text-xs text-neonPurple tracking-widest uppercase font-bold mb-3 block animate-pulse">
            [// ENABLING SOFTWARE SKILLS...]
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-softWhite uppercase">
            SOFTWARE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-accent">SKILLS</span>
          </h2>
        </div>

        {/* Services Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className={`glass-card p-8 border flex flex-col justify-between group transition-all duration-500 hover:-translate-y-1.5 ${service.colorClass}`}
              data-cursor="hover"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-8">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-pitchBlack group-hover:scale-110 transition-all duration-300 text-current">
                    {service.icon}
                  </div>
                  <span className="font-mono text-[8px] text-mutedGray bg-white/5 px-2 py-0.5 rounded border border-white/10 tracking-widest">
                    {service.tag}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-extrabold text-softWhite mb-4 flex items-center gap-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyanGlow transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-mutedGray text-sm md:text-base leading-relaxed mb-8">
                  {service.desc}
                </p>
              </div>

              {/* Action item */}
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-mutedGray group-hover:text-softWhite transition-colors mt-4">
                <span>REQUEST_SPEC();</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
