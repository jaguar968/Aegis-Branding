import React from 'react';
import { motion } from 'framer-motion';

const Methodology = () => {
  const steps = [
    { id: "01", label: "PHASE: AUDIT", detail: "Decoding your current positioning and market gaps." },
    { id: "02", label: "PHASE: CONCEPT", detail: "High-fidelity visual directions and psychological mapping." },
    { id: "03", label: "PHASE: BUILD", detail: "Crafting the visual OS and development-ready assets." },
    { id: "04", label: "PHASE: ASCEND", detail: "Final deployment and brand guidelines delivery." }
  ];

  // Animation variants for the text reveal
 const megaTextReveal = {
    initial: { y: "60%", opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <section id="process" className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* 1. MEGA AEGIS (Top) */}
      <div className="overflow-hidden mb-12">
        <motion.h2 
          {...megaTextReveal}
          className="text-7xl md:text-[12rem] font-black uppercase tracking-tighter leading-none text-brand/20 md:text-brand"
        >
          AEGIS
        </motion.h2>
      </div>

      {/* 2. Sub-Header Content */}
      <div className="flex flex-col md:flex-row justify-between mb-20 gap-8 relative z-10">
        <div className="overflow-hidden">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-5xl font-bold tracking-tighter uppercase italic text-white"
          >
            The Operating System
          </motion.h3>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-zinc-500 max-w-sm font-mono text-[12px] uppercase tracking-[0.3em] self-end"
        >
          A rigid four-step architecture designed to eliminate guesswork.
        </motion.p>
      </div>

      {/* 3. The Step Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-4 border-t border-zinc-900 relative z-10">
        {steps.map((step, i) => (
          <motion.div 
            key={step.id} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + (i * 0.1) }}
            className="pt-10 pb-20 border-b md:border-b-0 md:border-r border-zinc-900 px-6 group hover:bg-brand/3 transition-colors"
          >
            <span className="text-brand font-mono text-sm mb-8 block font-bold">{step.id}</span>
            <h4 className="text-white text-2xl font-bold tracking-tight mb-4 group-hover:text-brand transition-all duration-300">
              {step.label}
            </h4>
            <p className="text-zinc-500 text-1xl font-light leading-relaxed group-hover:text-zinc-300 transition-colors">
              {step.detail}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 4. MEGA BRANDING (Bottom) */}
      <div className="mt-12 overflow-hidden">
        <motion.h2 
          {...megaTextReveal}
          transition={{ ...megaTextReveal.transition, delay: 0.3 }}
          className="text-7xl md:text-[12rem] font-black uppercase tracking-tighter leading-none text-zinc-900"
        >
          BRANDING
        </motion.h2>
      </div>

    </section>
  );
};

export default Methodology;