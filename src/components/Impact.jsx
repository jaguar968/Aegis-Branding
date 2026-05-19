import React from 'react';
import { motion } from 'framer-motion';

const Impact = () => {
  const stats = [
    { label: "Strategic Partners", value: "15+" },
    { label: "Global Entities", value: "02" }, 
    { label: "Visual Assets Deployed", value: "200+" },
    { label: "Creative Direction", value: "∞" }
  ];

  return (
    <section className="py-24 border-y border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((stat, i) => (
          <div key={i} className="space-y-2">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl md:text-6xl font-bold tracking-tighter text-white"
            >
              {stat.value}
            </motion.p>
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand font-bold">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Impact;