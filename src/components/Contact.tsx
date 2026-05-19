import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Instagram, Linkedin, Mail, Sparkles, Terminal } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API connection
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Auto clear success indicator
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section 
      id="contact" 
      className="py-32 px-6 bg-pitchBlack relative overflow-hidden"
    >
      <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] bg-neonPurple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[450px] h-[450px] bg-cyanGlow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="mb-24 text-center">
          <span className="font-mono text-xs text-cyanGlow tracking-widest uppercase font-bold mb-3 block animate-pulse">
            [// ESTABLISHING CONNECTION TERMINAL...]
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-softWhite uppercase">
            LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanGlow to-neonPurple">CONNECT</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Side (Takes 5 columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card p-6 border border-white/5 bg-[#0b0b17]/40 relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-cyanGlow/10 rounded-full blur-xl" />
              
              <h3 className="text-2xl font-extrabold text-softWhite mb-4 flex items-center gap-2">
                <Terminal size={20} className="text-cyanGlow" /> SYSTEM_INFO
              </h3>
              <p className="text-mutedGray text-sm md:text-base leading-relaxed mb-6 font-mono text-[13px]">
                Got a visionary project, freelance opportunity, or complex web engineering design in mind? Establish direct contact parameters via the network link.
              </p>
              
              <div className="space-y-4 font-mono text-xs text-mutedGray">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-cyanGlow" />
                  <span>lintangzhade2525@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Terminal size={16} className="text-neonPurple" />
                  <span>github.com/ZhadeLintang</span>
                </div>
              </div>
            </div>

            {/* Social Grid Badge Connect */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/ZhadeLintang"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyanGlow/50 hover:text-cyanGlow hover:shadow-neon-cyan hover:-translate-y-1 transition-all duration-300 flex-1 text-center flex justify-center"
                data-cursor="hover"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-secondary/50 hover:text-secondary hover:shadow-neon-cyan hover:-translate-y-1 transition-all duration-300 flex-1 text-center flex justify-center"
                data-cursor="hover"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/50 hover:text-accent hover:shadow-neon-pink hover:-translate-y-1 transition-all duration-300 flex-1 text-center flex justify-center"
                data-cursor="hover"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Form Side (Takes 7 columns) */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit}
              className="glass-card p-8 border border-white/5 bg-[#0a0a15]/30 space-y-6 relative overflow-hidden"
            >
              {/* Dynamic Success Alert overlay */}
              {isSuccess && (
                <div className="absolute inset-0 bg-pitchBlack/90 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center z-20">
                  <div className="w-16 h-16 rounded-full bg-cyanGlow/10 border border-cyanGlow flex items-center justify-center mb-6 animate-bounce">
                    <Sparkles size={30} className="text-cyanGlow" />
                  </div>
                  <h4 className="text-2xl font-black text-softWhite mb-2 uppercase">CONNECTION ESTABLISHED!</h4>
                  <p className="text-mutedGray text-sm max-w-sm">
                    Thank you. Your message has successfully navigated through the cyber nodes and reached my system mailbox.
                  </p>
                </div>
              )}

              {/* Name Field */}
              <div className="space-y-2">
                <label className="block font-mono text-[10px] uppercase text-mutedGray tracking-wider">
                  SENDER_NAME
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/5 border border-white/10 focus:border-cyanGlow/50 focus:bg-[#070710]/40 rounded-xl p-4 font-mono text-sm text-softWhite focus:outline-none focus:ring-1 focus:ring-cyanGlow/30 transition-all duration-300"
                  placeholder="EX: LABIB LINTANG"
                  data-cursor="hover"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="block font-mono text-[10px] uppercase text-mutedGray tracking-wider">
                  SENDER_EMAIL
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/5 border border-white/10 focus:border-cyanGlow/50 focus:bg-[#070710]/40 rounded-xl p-4 font-mono text-sm text-softWhite focus:outline-none focus:ring-1 focus:ring-cyanGlow/30 transition-all duration-300"
                  placeholder="EX: LINTANGZHADE2525@GMAIL.COM"
                  data-cursor="hover"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="block font-mono text-[10px] uppercase text-mutedGray tracking-wider">
                  MESSAGE_CORE
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 focus:border-cyanGlow/50 focus:bg-[#070710]/40 rounded-xl p-4 font-mono text-sm text-softWhite focus:outline-none focus:ring-1 focus:ring-cyanGlow/30 transition-all duration-300 resize-none"
                  placeholder="ENTER DISPATCH CONTENTS..."
                  data-cursor="hover"
                />
              </div>

              {/* Submit Trigger */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-cyanGlow via-neonPurple to-accent text-pitchBlack text-xs font-mono font-black tracking-widest rounded-xl hover:shadow-neon-cyan active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                data-cursor="hover"
              >
                {isSubmitting ? (
                  <span>DISPATCHING_PACKETS...</span>
                ) : (
                  <>
                    <span>ESTABLISH_LINK();</span>
                    <Send size={14} />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
