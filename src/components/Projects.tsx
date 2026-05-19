import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

interface Project {
  title: string;
  desc: string;
  tech: string[];
  image: string;
  live: string;
  github: string;
  accentClass: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Lumina-Gallery',
      desc: 'Premium digital photography gallery featuring stateful masonry layouts, comment systems, and direct Supabase database integrations.',
      tech: ['React', 'TypeScript', 'Tailwind', 'Supabase'],
      image: '/public/img/lumina-gallery.jpeg',
      live: 'https://labib.pplg1.my.id/',
      github: 'https://github.com/ZhadeLintang/lumina-gallery',
      accentClass: 'hover:border-cyanGlow/50 hover:shadow-neon-cyan text-cyanGlow',
    },
    {
      title: 'Kasir-Barang',
      desc: 'High-tech digital inventory POS system equipped with custom admin roles, product managers, sales logs, and local cache backups.',
      tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
      image: 'img/project1.jpg',
      live: 'https://your-demo-link.com',
      github: 'https://github.com/ZhadeLintang',
      accentClass: 'hover:border-neonPurple/50 hover:shadow-neon-purple text-neonPurple',
    },
    {
      title: 'Perpustakaan',
      desc: 'A full-stack library management interface tailored with robust search algorithms, book borrow limits, and active database triggers.',
      tech: ['React', 'Node.js', 'Express', 'MySQL'],
      image: 'img/project3.jpg',
      live: 'https://your-demo-link.com',
      github: 'https://github.com/ZhadeLintang',
      accentClass: 'hover:border-accent/50 hover:shadow-neon-pink text-accent',
    },
    {
      title: 'Peduli-Diri',
      desc: 'A custom personal log tool leveraging local location services, trip logs, and clean data visualizations.',
      tech: ['Next.js', 'CSS', 'JSON', 'Tailwind'],
      image: 'img/project4.jpg',
      live: 'https://your-demo-link.com',
      github: 'https://github.com/ZhadeLintang',
      accentClass: 'hover:border-cyanGlow/50 hover:shadow-neon-cyan text-cyanGlow',
    },
  ];

  return (
    <section 
      id="projects" 
      className="py-32 px-6 bg-pitchBlack relative overflow-hidden"
    >
      <div className="absolute top-[30%] right-[5%] w-[400px] h-[400px] bg-neonPurple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[450px] h-[450px] bg-cyanGlow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="mb-24 text-center">
          <span className="font-mono text-xs text-cyanGlow tracking-widest uppercase font-bold mb-3 block animate-pulse">
            [// EXECUTING SYSTEM OUTPUTS...]
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-softWhite uppercase">
            FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanGlow to-neonPurple">PROJECTS</span>
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className={`glass-card p-6 md:p-8 flex flex-col justify-between border group transition-all duration-500 hover:-translate-y-2 ${project.accentClass}`}
            >
              <div>
                {/* Image Container with Cyber hover overlays */}
                <div className="relative aspect-[16/9] border border-white/10 rounded-xl overflow-hidden mb-6 group">
                  <div className="absolute inset-0 bg-pitchBlack/50 group-hover:bg-pitchBlack/20 transition-all duration-300 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      // Fallback image if paths are empty
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  
                  {/* Floating Action Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-pitchBlack/80 border border-white/20 rounded-full text-softWhite hover:text-cyanGlow hover:scale-110 transition-all"
                      data-cursor="hover"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-pitchBlack/80 border border-white/20 rounded-full text-softWhite hover:text-neonPurple hover:scale-110 transition-all"
                      data-cursor="hover"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                {/* Tags block */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tag) => (
                    <span 
                      key={tag} 
                      className="font-mono text-[9px] text-mutedGray px-2 py-0.5 rounded bg-white/5 border border-white/10 tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Details */}
                <h3 className="text-2xl font-extrabold text-softWhite mb-3 group-hover:text-softWhite flex items-center gap-2">
                  {project.title} <Sparkles size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-inherit" />
                </h3>
                
                <p className="text-mutedGray text-sm md:text-base leading-relaxed mb-8">
                  {project.desc}
                </p>
              </div>

              {/* Action Buttons footer */}
              <div className="flex gap-4 border-t border-white/5 pt-6">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-white/5 border border-white/10 rounded-xl font-mono text-xs font-bold text-softWhite hover:bg-white/10 text-center hover:border-white/20 transition-all duration-300"
                  data-cursor="hover"
                >
                  LIVE_DEMO();
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-pitchBlack border border-white/10 rounded-xl font-mono text-xs font-bold text-mutedGray hover:text-softWhite hover:bg-white/5 text-center transition-all duration-300"
                  data-cursor="hover"
                >
                  GET_CODE();
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
