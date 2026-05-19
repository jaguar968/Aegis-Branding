import React from 'react';
import { motion } from 'framer-motion';

const BentoCard = ({ title, desc, colSpan, bgImage, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    // Changed bg-zinc-900/50 to bg-black to prevent color bleed
    className={`relative group overflow-hidden rounded-4xl border border-zinc-800 bg-black p-8 min-h-75 ${colSpan}`}
  >
    {/* Background Image Layer */}
    {bgImage && (
      <div 
        // 1. REMOVED 'grayscale' and 'opacity-30'
        // 2. ADDED 'opacity-100' and the hardware-acceleration styles
        className="absolute inset-0 z-0 opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
        style={{ 
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // THE FIX:
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          isolation: 'isolate',
          filter: 'brightness(1.1) contrast(1.05)',
        }}
      />
    )}

    {/* Updated Gradient Overlay: Smoother and less "heavy" at the top */}
    <div className="absolute inset-0 z-10 bg-linear-to-br from-black/60 via-black/10 to-transparent" />

    {/* Content */}
    <div className="relative z-20 h-full flex flex-col justify-between">
      <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center bg-black/50 mb-6 group-hover:border-brand transition-colors">
        <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2 tracking-tight text-white">{title}</h3>
        <p className="text-zinc-300 text-sm leading-relaxed font-light">{desc}</p>
      </div>
    </div>
  </motion.div>
);

const BentoGrid = () => {
  const services = [
    {
      title: "Brand Identity",
      desc: "Creating high-fidelity visual operating systems for the next generation of founders.",
      colSpan: "md:col-span-2",
      bgImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop", // Abstract Branding
      delay: 0.1
    },
    {
      title: "Web Engineering",
      desc: "Ultra-fast, React-based digital experiences that convert.",
      colSpan: "md:col-span-1",
      bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop", // Code/Tech
      delay: 0.2
    },
    {
      title: "GTM Strategy",
      desc: "Architecting your market entry with precision-engineered positioning.",
      colSpan: "md:col-span-1",
      bgImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop", // Architecture
      delay: 0.3
    },
    {
      title: "Visual Assets",
      desc: "Custom 3D renders, motion graphics, and icon systems built for scale.",
      colSpan: "md:col-span-2",
      bgImage: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070&auto=format&fit=crop", // 3D/Color
      delay: 0.4
    }
  ];

  return (
    <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <BentoCard key={i} {...s} />
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;