import React from 'react';
import { motion } from 'framer-motion';

const LogoWall = () => {
  const logos = ["TECH-CORE", "QUANTUM", "AETHER", "VORTEX", "LUMINA", "NEXUS", "PURA", "IM PRESS", "NOMADIX", "HYPEROSINT","CYBERSEC CONSULTING", "SUNKIP SPICES", "COMPOUND"];

  return (
    <section className="py-20 border-y border-zinc-900 bg-black/40 overflow-hidden">
      <div className="flex whitespace-nowrap">
        {/* We duplicate the list to create a seamless loop */}
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center pr-20 
          ${isLightMode 
            ? 'bg-white border-zinc-200' 
            : 'bg-[#050505] border-zinc-800'
          }"
        >
          {[...logos, ...logos].map((logo, i) => (
            <span key={i} className="text-xl md:text-4xl font-bold text-zinc-800 tracking-tighter hover:text-brand transition-colors cursor-default">
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoWall;