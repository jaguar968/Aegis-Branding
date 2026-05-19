import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: "Established", value: "2024" },
    { label: "Operations", value: "Global" },
    { label: "Focus", value: "Identity" },
    { label: "Philosophy", value: "Minimal" }
  ];

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <section className="mb-32">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-brand font-mono text-xs uppercase tracking-[0.4em] mb-4"
          >
            // System Specifications
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-6xl font-bold tracking-tighter text-white max-w-4xl leading-[0.9]"
          >
            WE BUILD <span className="text-zinc-500 italic">DIGITAL ARMOR</span> FOR MODERN BRANDS.
          </motion.h1>
        </section>

        {/* Technical Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32 border-y border-zinc-900 py-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="space-y-1"
            >
              <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">{stat.label}</p>
              <p className="text-xl text-white font-medium">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white tracking-tight">The Aegis Doctrine</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              In an era of digital noise, we believe in the power of restraint. 
              AEGIS was founded on the principle that a brand's visual identity 
              is not just decoration—it is a functional interface between a 
              company and its audience.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              We don't just design logos; we engineer visual ecosystems that 
              are scalable, sustainable, and mathematically sound.
            </p>
          </div>
          
          {/* A "Technical" Image Placeholder */}
          <div className="aspect-square bg-zinc-900 rounded-[3rem] border border-zinc-800 relative overflow-hidden group">
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-zinc-700 font-mono text-xs tracking-[0.5em] group-hover:text-brand transition-colors animate-pulse">
                  [ VISUAL_DATA_MISSING ]
                </span>
             </div>
             {/* Replace with an actual image of your work or office later */}
             <div className="absolute inset-0 bg-linear-to-br from-brand/10 to-transparent opacity-50" />
          </div>
        </div>

        {/* Principles / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 border-t border-zinc-900">
          {[
            { t: "Precision", d: "Every pixel serves a purpose. We eliminate the unnecessary." },
            { t: "Adaptation", d: "Our systems evolve alongside the technologies they inhabit." },
            { t: "Protection", d: "We safeguard your brand's integrity through rigorous standards." }
          ].map((item, i) => (
            <div key={i} className="space-y-4">
              <div className="h-1 w-8 bg-brand"></div>
              <h4 className="text-white font-bold text-xl uppercase tracking-tighter">{item.t}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default About;