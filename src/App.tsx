import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Github, Instagram, MessageCircle, ExternalLink, ArrowRight, Code2, PenTool, Database, Layout, Menu, X, Terminal, Coffee, Sparkles, Download, Linkedin, User, Calendar, Mail, FileText, Moon, Sun, Award } from 'lucide-react';
import Certificate from './Certificate';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      if (target.closest('button, a, input, textarea, [data-cursor="hover"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <div 
      className={`custom-cursor ${isHovering ? 'hover' : ''} hidden md:block`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-black text-white flex flex-col items-center justify-center"
      exit={{ y: '-100%', transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="mb-8"
      >
        <Sparkles size={64} className="text-primary" />
      </motion.div>
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter animate-pulse">
        LINTANG<span className="text-primary">.DEV</span>
      </h1>
      <div className="mt-8 w-64 h-2 bg-white/20 border-brutal overflow-hidden">
        <motion.div 
          className="h-full bg-primary border-r-2 border-black"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

const Navbar = ({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (v: boolean) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 pointer-events-none">
      <div className="max-w-6xl mx-auto flex justify-between items-center bg-white/80 dark:bg-black/80 backdrop-blur-md border-brutal px-6 py-4 pointer-events-auto transition-colors">
        <a href="#" className="text-2xl font-black tracking-tighter hover:rotate-3 transition-transform dark:text-white">
          ZL<span className="text-primary">.WEB-DEV</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center font-bold dark:text-white">
          {['Home', 'About', 'Skills', 'Education', 'Projects', 'CV', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:-translate-y-1 hover:text-secondary transition-transform">
              {item}
            </a>
          ))}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="brutal-button bg-background dark:bg-white dark:text-black p-2 border-2 border-black flex items-center justify-center"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex gap-4 items-center">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="brutal-button bg-background dark:bg-white dark:text-black p-2 pointer-events-auto"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button className="brutal-button bg-primary p-2 pointer-events-auto" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[80px] left-4 right-4 bg-white dark:bg-black dark:text-white border-brutal p-6 flex flex-col gap-4 pointer-events-auto">
          {['Home', 'About', 'Skills', 'Education', 'Projects', 'CV', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-xl font-bold p-2 border-b-2 border-black dark:border-white"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 px-4 bg-grid bg-noise dark:bg-[#111] transition-colors duration-300">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-32 left-10 md:left-32 bg-primary border-brutal p-4 rounded-full"
      >
        <Sparkles size={40} className="text-black" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-32 right-10 md:right-32 bg-accent border-brutal px-6 py-3 rotate-12"
      >
        <span className="font-black text-xl text-black">React.js</span>
      </motion.div>

      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.2 }} // Wait for loading screen
        >
          <div className="inline-block bg-secondary text-black font-bold px-4 py-2 border-brutal mb-6 -rotate-2">
            👋 HELLO WORLD
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none dark:text-white">
            HI, I'M <span className="text-transparent bg-clip-text bg-black dark:bg-white" style={{WebkitTextStroke: '2px currentColor', color: 'transparent', textShadow: '4px 4px 0 theme("colors.primary")'}}>LINTANG</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold bg-white text-black inline-block border-brutal px-6 py-3 mb-8 rotate-1">
            Frontend Developer & Siswa Kreatif
          </h2>
{/* HERO BUTTONS */}
<div className="flex flex-wrap justify-center gap-6">

  {/* DOWNLOAD CV BUTTON */}
  <a
    href="/public/img/cv/lintang-cv.pdf"
    download
    className="
      brutal-button
      bg-primary
      text-black
      px-8
      py-4
      text-xl
      font-black
      flex
      items-center
      justify-center
      gap-3
      hover:-rotate-2
      transition-all
      duration-300
    "
  >
    <Download size={24} />
    Download CV
  </a>

  {/* VIEW PROJECTS BUTTON */}
  <a
    href="#projects"
    className="
      brutal-button
      bg-white
      text-black
      px-8
      py-4
      text-xl
      font-black
      flex
      items-center
      justify-center
      gap-3
      hover:rotate-2
      transition-all
      duration-300
    "
  >
    <ArrowRight size={24} />
    View Projects
  </a>

</div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-background dark:bg-[#1a1a1a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black mb-12 uppercase dark:text-white">About <span className="bg-success px-2 border-brutal text-black">Me</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Bento Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 brutal-card bg-white p-8 flex flex-col md:flex-row gap-8 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-primary p-2 border-2 border-black rotate-12 z-10">
              <span className="font-bold text-black">Student 🎓</span>
            </div>
            
            {/* Photo Placeholder */}
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 border-brutal relative overflow-hidden">
                 <img
                 src="/img/profile-lintang.jpeg"
                 alt="Lintang Profile"
                 className="w-full h-full object-cover"
                 />
             <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center text-black">
              <h3 className="text-3xl md:text-4xl font-black mb-4 uppercase">Labib Lintang Habibie</h3>
              <div className="space-y-3 font-bold text-lg mb-6">
                <p className="flex items-center gap-3"><Calendar size={20}/> 25 Oktober 2005</p>
                <p className="flex items-center gap-3"><Mail size={20}/> lingangzhade2525@gmail.com</p>
                <p className="flex items-center gap-3"><Github size={20}/> github.com/ZhadeLintang</p>
              </div>
              <p className="text-xl font-medium leading-relaxed border-t-4 border-black pt-4">
                Siswa SMK dengan jurusan Rekayasa Perangkat Lunak (RPL) yang memiliki keterampilan dalam
                pemrograman, pengembangan website, ui/ux, dan pengelolaan database. Memiliki pengalaman aktif dalam
                kegiatan organisasi sekolah. Siap untuk berkontribusi dalam tim pengembangan perangkat lunak dan terus
                belajar untuk mengembangkan kemampuan teknis.
              </p>
            </div>
          </motion.div>

          {/* Setup Card */}
          <motion.div 
          whileHover={{ scale: 1.05, rotate: -2 }}
          className="brutal-card bg-accent overflow-hidden"
          >
          <img
          src="/img/Lintang.jpeg"
          alt="Lintang"
          className="w-full h-full object-cover"
          />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { name: "React TypeScript", level: 100, color: "bg-primary" },
    { name: "Laravel", level: 80, color: "bg-secondary" },
    { name: "Tailwind CSS", level: 100, color: "bg-accent" },
    { name: "PHP", level: 80, color: "bg-success" },
    { name: "Android Studio", level: 70, color: "bg-primary" },
    { name: "Figma", level: 85, color: "bg-secondary" },
    { name: "Java Script", level: 95, color: "bg-accent" },
    { name: "HTML & CSS", level: 95, color: "bg-accent" },
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-black text-white overflow-hidden relative">
      {/* Marquee Background */}
      <div className="absolute top-1/2 left-0 w-[200%] -translate-y-1/2 -rotate-3 opacity-10 pointer-events-none z-0">
        <div className="animate-marquee whitespace-nowrap text-9xl font-black">
          FRONTEND BACKEND DESIGN DEVELOPMENT FRONTEND BACKEND DESIGN DEVELOPMENT
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-7xl font-black mb-16 bg-white inline-block border-brutal px-6 py-2 rotate-2 text-black">
          SKILLS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, i) => (
            <div key={i} className="brutal-card bg-white p-6 text-black hover:-translate-y-2 transition-transform">
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-black flex items-center gap-2"><Sparkles size={24}/> {skill.name}</span>
                <span className="text-xl font-bold bg-background border-2 border-black px-2 py-1">{skill.level}%</span>
              </div>
              <div className="h-6 w-full bg-background border-brutal overflow-hidden">
                <motion.div 
                  className={`h-full ${skill.color} border-r-4 border-black`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Journey = () => {
  const journeys = [
    { year: "2014-2020", title: "MI ALAM ROBBANI", desc: "Bekasi." },
    { year: "2020-2024", title: "SMP Walisongo Bekasi", desc: "Bekasi." },
    { year: "2024-2027", title: "SMK PRESTASI PRIMA", desc: "Jakarta Timur." },
  ];

  return (
    <section id="journey" className="py-24 px-4 bg-white border-y-8 border-black dark:bg-[#111] dark:border-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black mb-16 text-center dark:text-white">EDUCATION</h2>
        
        <div className="relative border-l-8 border-black dark:border-white ml-4 md:ml-0 md:pl-12 space-y-12">
          {journeys.map((exp, i) => (
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i} 
              className="relative pl-8 md:pl-0"
            >
              <div className="absolute -left-[30px] md:-left-[60px] top-0 w-12 h-12 bg-primary border-4 border-black rounded-full flex items-center justify-center animate-bounce-slow">
                <Code2 size={24} className="text-black" />
              </div>
              <div className="brutal-card bg-background p-6 md:p-8 hover:bg-secondary transition-colors group text-black">
                <span className="inline-block bg-black text-white font-black px-4 py-1 mb-4 text-xl group-hover:bg-white group-hover:text-black transition-colors border-2 border-transparent group-hover:border-black">
                  {exp.year}
                </span>
                <h3 className="text-3xl font-black mb-2 group-hover:underline">{exp.title}</h3>
                <p className="text-xl font-medium">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Kasir-Barang",
      desc: "Digital Library Management Dashboard with complete admin features.",
      tech: ["Laravel", "PHP", "MySQL"],
      color: "bg-primary",
      image: "/img/project1.jpg",
      live: "https://your-demo-link.com",
      github: "https://github.com/yourusername/project1",
    },
    {
      title: "Lumina-Gallery",
      desc: "Premium digital gallery with masonry layout and comment system.",
      tech: ["React + TypeScript", "Tailwind CSS", "Supabase"],
      color: "bg-accent",
      image: "/img/lumina-gallery.jpeg",
      live: "https://labib.pplg1.my.id/",
      github: "https://github.com/ZhadeLintang/lumina-gallery",
    },
    {
      title: "Library-Perpustakaan",
      desc: "Cyberpunk aesthetic flower shop POS and inventory manager.",
      tech: ["React", "Zustand", "Tailwind"],
      color: "bg-success",
      image: "/img/project3.jpg",
      live: "https://your-demo-link.com",
      github: "https://github.com/yourusername/project3",
    },
    {
      title: "Peduli-Diri",
      desc: "Integration with AI APIs to generate and curate assets.",
      tech: ["Next.js", "OpenAI", "CSS"],
      color: "bg-secondary",
      image: "/img/project4.jpg",
      live: "https://your-demo-link.com",
      github: "https://github.com/yourusername/project4",
    },
  ];

  return (
    <section
      id="projects"
      className="
        py-24
        px-4
        bg-background
        dark:bg-[#1a1a1a]
        bg-noise
        transition-colors
        duration-300
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2
          className="
            text-5xl
            md:text-7xl
            font-black
            mb-16
            dark:text-white
          "
          style={{
            textShadow: "4px 4px 0 theme('colors.primary')",
          }}
        >
          PROJECTS
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                rotate: index % 2 === 0 ? 2 : -2,
              }}
              transition={{ duration: 0.3 }}
              className={`
                brutal-card
                ${project.color}
                text-black
                p-6
                md:p-8
                flex
                flex-col
                h-full
                overflow-hidden
                dark:shadow-[8px_8px_0_0_#fff]
              `}
            >

              {/* IMAGE */}
              <div className="relative h-64 border-brutal overflow-hidden group mb-6">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/70
                    flex
                    items-center
                    justify-center
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-300
                  "
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      brutal-button
                      bg-white
                      text-black
                      px-6
                      py-3
                      font-black
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <ExternalLink size={20} />
                    View Demo
                  </a>
                </div>

              </div>

              {/* TITLE */}
              <h3 className="text-3xl font-black mb-3">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-lg font-bold mb-6 flex-grow">
                {project.desc}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-white
                      border-2
                      border-black
                      px-3
                      py-1
                      font-bold
                      text-sm
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4">

                {/* VIEW */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    brutal-button
                    bg-white
                    flex-1
                    py-3
                    font-black
                    text-lg
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  <ExternalLink size={20} />
                  View
                </a>

                {/* GITHUB */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    brutal-button
                    bg-black
                    text-white
                    flex-1
                    py-3
                    font-black
                    text-lg
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  <Github size={20} />
                  Code
                </a>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

const CV = ({ onViewCertificate }: { onViewCertificate: () => void }) => {
  return (
    <section id="cv" className="py-24 px-4 bg-primary bg-grid dark:bg-[#111] transition-colors duration-300">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-black mb-12 uppercase text-black dark:text-white">
          <span className="bg-white dark:bg-[#222] px-4 border-brutal dark:border-white inline-block -rotate-2">RESUME</span>
        </h2>
        
        <div className="brutal-card bg-white p-8 md:p-12 text-left text-black max-w-4xl mx-auto relative overflow-hidden dark:shadow-[8px_8px_0_0_#fff]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent -mr-16 -mt-16 rotate-45 border-brutal z-0 hidden md:block"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end border-b-8 border-black pb-8 mb-8">
            <div>
              <h3 className="text-5xl font-black uppercase mb-2">Lintang</h3>
              <p className="text-2xl font-bold bg-secondary inline-block px-2 border-2 border-black">Frontend Developer</p>
            </div>
            <div className="mt-6 md:mt-0 space-y-2 font-bold text-lg">
              <p className="flex items-center gap-2"><Mail size={20}/> lintangzhade2525@gmail.com</p>
              <p className="flex items-center gap-2"><Github size={20}/> https://github.com/ZhadeLintang</p>
              <p className="flex items-center gap-2"><Linkedin size={20}/> https://www.linkedin.com/in/lintang-zhade-132746357/</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h4 className="text-3xl font-black mb-4 flex items-center gap-2 bg-success inline-block px-2 border-2 border-black -rotate-1"><User size={28}/> PROFILE</h4>
                <p className="text-lg font-bold">Mahasiswa kreatif dan pengembang frontend yang berspesialisasi dalam membangun aplikasi web modern, interaktif, dan indah namun kacau menggunakan React dan prinsip desain Neo Brutalism.</p>
              </div>
              
              <div>
                <h4 className="text-3xl font-black mb-4 flex items-center gap-2 bg-accent inline-block px-2 border-2 border-black rotate-1"><Code2 size={28}/> EXPERIENCE</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-black pl-4">
                    <div className="flex justify-between items-center mb-1">
                      <h5 className="text-xl font-black">Freelance Developer</h5>
                      <span className="font-bold bg-background border-2 border-black px-2">2026  - Present</span>
                    </div>
                    <p className="text-lg font-medium">Mengembangkan aplikasi web full-stack, sistem POS, dan portofolio premium untuk berbagai klien. Berfokus pada desain responsif, mobile-first, dan performa</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-3xl font-black mb-4 flex items-center gap-2 border-b-4 border-black pb-1"><PenTool size={28}/> SKILLS</h4>
                <div className="flex flex-wrap gap-2">
                  {['React + TypeScript', 'Laravel', 'PHP', 'Tailwind CSS', 'MySQL', 'Figma', 'HTML + CSS', 'Java Script', 'Android Studio'].map(s => (
                    <span key={s} className="bg-background border-2 border-black px-2 py-1 font-bold text-sm hover:-translate-y-1 transition-transform cursor-pointer">{s}</span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-3xl font-black mb-4 flex items-center gap-2 border-b-4 border-black pb-1"><MessageCircle size={28}/> BAHASA</h4>
                <ul className="font-bold text-lg space-y-2">
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black rounded-full"/> Bahasa Indonesia (Native)</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black rounded-full"/> Bahasa Jepang (Intermediate)</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black rounded-full"/> Bahasa Inggris (Intermediate)</li>
                </ul>
              </div>
            </div>
          </div>
          
{/* ACTION BUTTONS */}
<div className="mt-12 flex flex-wrap justify-center gap-6 relative z-10">

  {/* DOWNLOAD CV BUTTON */}
  <a
    href="/public/img/cv/lintang-cv.pdf"
    download
    className="
      brutal-button
      bg-success
      text-black
      px-8
      py-4
      text-xl
      md:text-2xl
      font-black
      flex
      items-center
      justify-center
      gap-3
      hover:-translate-y-2
      hover:rotate-[-2deg]
      transition-all
      duration-300
    "
  >
    <Download size={28} />
    DOWNLOAD PDF
  </a>

  {/* VIEW CERTIFICATE BUTTON */}
  <a
    href="/public/sertifikat/sertifikat.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="
      brutal-button
      bg-accent
      text-black
      px-8
      py-4
      text-xl
      md:text-2xl
      font-black
      flex
      items-center
      justify-center
      gap-3
      hover:-translate-y-2
      hover:rotate-[2deg]
      transition-all
      duration-300
    "
  >
    <Award size={28} />
    VIEW SERTIFIKAT
  </a>

</div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-background dark:bg-[#222] transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-6xl md:text-8xl font-black mb-6 leading-none dark:text-white">LET'S<br/>GOO!</h2>
            <p className="text-2xl font-bold mb-8 bg-white text-black inline-block border-brutal px-4 py-2 -rotate-2">
              Punya ide gila? Kirimkan ke saya!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="brutal-button bg-white text-black p-4 flex items-center justify-center hover:bg-black hover:text-white group">
                <a href='https://github.com/ZhadeLintang'><Github size={32} /></a>
              </button>
              <button className="brutal-button bg-white text-black p-4 flex items-center justify-center hover:bg-[#0077b5] hover:text-white group">
                <Linkedin size={32} />
              </button>
              <button className="brutal-button bg-white text-black p-4 flex items-center justify-center hover:bg-[#5865F2] hover:text-white group">
                <MessageCircle size={32} /> {/* Discord Icon approx */}
              </button>
              <button className="brutal-button bg-white text-black p-4 flex items-center justify-center hover:bg-[#E1306C] hover:text-white group">
                <Instagram size={32} />
              </button>
            </div>
          </div>

          <form className="brutal-card bg-white p-8 space-y-6 text-black">
            <div>
              <label className="block text-xl font-black mb-2">Name</label>
              <input type="text" className="w-full border-brutal p-4 text-lg font-bold focus:outline-none focus:bg-background" placeholder="Nama Anda" />
            </div>
            <div>
              <label className="block text-xl font-black mb-2">Email</label>
              <input type="email" className="w-full border-brutal p-4 text-lg font-bold focus:outline-none focus:bg-background" placeholder="Email Anda" />
            </div>
            <div>
              <label className="block text-xl font-black mb-2">Message</label>
              <textarea className="w-full border-brutal p-4 text-lg font-bold h-32 focus:outline-none focus:bg-background" placeholder="Pesan Anda..."></textarea>
            </div>
            <button className="brutal-button bg-black text-white w-full py-4 text-2xl font-black hover:bg-success hover:text-black transition-colors">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 border-t-8 border-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center z-10 relative">
        <div className="text-3xl font-black tracking-tighter mb-6 md:mb-0">
          LINTANG<span className="text-primary">.DEV</span>
        </div>
        <p className="text-xl font-bold text-center md:text-right bg-white text-black px-4 py-2 rotate-1 border-brutal">
          ZL-WEB-DEV
        </p>
      </div>
    </footer>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Effect to apply dark class to HTML
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`relative min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      {showCertificate ? (
        <Certificate onClose={() => setShowCertificate(false)} />
      ) : (
        <>
          <AnimatePresence>
            {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
          </AnimatePresence>
          
          {!isLoading && (
            <>
              <Cursor />
              
              <motion.div
                className="fixed top-0 left-0 right-0 h-2 bg-primary origin-left z-[60] border-b-2 border-black"
                style={{ scaleX }}
              />
              
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
              <Hero />
              <About />
              <Skills />
              <Journey />
              <Projects />
              <CV onViewCertificate={() => setShowCertificate(true)} />
              <Contact />
              <Footer />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
