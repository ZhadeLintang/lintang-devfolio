import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Cpu, PenTool, ArrowUpRight } from 'lucide-react';

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
      icon: <Cpu size={26} />,
      title: 'Web Development',
      desc: 'Building high-performance, robust web architectures leveraging scalable databases, modern API endpoints, and clean security layers.',
      tag: 'FULLSTACK_SYSTEMS',
      colorClass: 'text-cyanGlow border-cyanGlow/10 hover:border-cyanGlow/40 hover:shadow-neon-cyan',
    },
    {
      icon: <LayoutGrid size={26} />,
      title: 'Frontend Engineering',
      desc: 'Developing pixel-perfect responsive layouts with highly complex component interactions, smooth state managements, and advanced animation sets.',
      tag: 'INTERACTIVE_ENGINE',
      colorClass: 'text-neonPurple border-neonPurple/10 hover:border-neonPurple/40 hover:shadow-neon-purple',
    },
    {
      icon: <PenTool size={26} />,
      title: 'UI/UX Creative Design',
      desc: 'Designing innovative modern aesthetic mockups, brand guidelines, and high-fidelity user workflows using Figma wireframing.',
      tag: 'CREATIVE_AESTHETICS',
      colorClass: 'text-accent border-accent/10 hover:border-accent/40 hover:shadow-neon-pink',
    },
  ];

  return (
    <section 
      id="services" 
      className="py-32 px-6 bg-pitchBlack relative overflow-hidden"
    >
      <div className="absolute top-[40%] left-[10%] w-[450px] h-[450px] bg-cyanGlow/5 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-neonPurple/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="mb-24 text-center">
          <span className="font-mono text-xs text-neonPurple tracking-widest uppercase font-bold mb-3 block animate-pulse">
            [// ENABLING MODULE CAPABILITIES...]
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-softWhite uppercase">
            SERVICES & <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-accent">CAPABILITIES</span>
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
