import React from 'react';
import { motion } from 'framer-motion';

const Positioning = () => {
  return (
    <section className="py-24 px-6 border-y border-zinc-900 bg-black/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* The Big Statement */}
        <div className="md:col-span-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-medium leading-[1.1] tracking-tighter"
          >
            We build <span className="text-zinc-500">visual systems</span> for founders who believe that <span className="text-brand italic underline decoration-1 underline-offset-8">vague is the enemy</span> of growth.
          </motion.h2>
        </div>

        {/* The Technical Detail */}
        <div className="md:col-span-4 border-l border-zinc-800 pl-8 space-y-6">
          <p className="text-sm font-mono text-brand uppercase tracking-[0.2em]">Core Philosophy</p>
          <p className="text-zinc-400 font-light leading-relaxed">
            Identity isn't a logo. It's an operating system for your brand. We specialize in creating high-fidelity assets that work from seed round to IPO.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Positioning;