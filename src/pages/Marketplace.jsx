import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Marketplace = ({ addToCart }) => {
  // 1. DATA STRUCTURE
  const collections = [
    {
      category: "TYPE & FORM",
      assets: [
        { id: 'T1', name: "Fractur-9 TYPEFACE", price: "$45", tech: "OTF/TTF", img: "/shop/fract.jpg" },
        { id: 'T2', name: "MONO-GRID SANS", price: "$35", tech: "OTF", img: "/shop/mono.png" },
        { id: 'T3', name: "KINETIC SERIF", price: "$50", tech: "OTF", img: "/shop/kinetic.png" },
        { id: 'T4', name: "GOTHAM BOLD", price: "$30", tech: "TTF", img: "/shop/gotham.png" },
      ]
    },
    {
      category: "VISUAL SYSTEMS",
      assets: [
        { id: 'V1', name: "CORE GUIDELINE V1", price: "$120", tech: "FIGMA", img: "/shop/guide.png" },
        { id: 'V2', name: "STATIONARY MOCKUPS", price: "$25", tech: "PSD", img: "/shop/mockup.png" },
        { id: 'V3', name: "BRAND DECK 01", price: "$80", tech: "FIGMA", img: "/shop/aIcon.png" },
        { id: 'V4', name: "GRID SYSTEMS", price: "$15", tech: "PDF", img: "/shop/grids.png" },
      ]
    }
  ];

  const categories = ["ALL", ...collections.map(c => c.category)];
  const [activeFilter, setActiveFilter] = useState("ALL");

  // 2. ANIMATION VARIANTS
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-40 px-6 max-w-400 mx-auto"
    >
      {/* HEADER */}
      <header className="mb-24">
        <p className="font-mono text-brand text-[10px] tracking-[0.6em] uppercase mb-6">Vault / Index 002</p>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85]">
          THE <br/>
          <span className="text-zinc-800 italic underline decoration-zinc-900 underline-offset-8">ARCHIVE</span>
        </h1>
      </header>

      {/* FILTER BAR */}
      <div className="flex flex-wrap gap-8 mb-16 border-b border-zinc-900 pb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`font-mono text-[9px] tracking-[0.3em] transition-all uppercase ${
              activeFilter === cat ? "text-brand" : "text-zinc-600 hover:text-white"
            }`}
          >
            {activeFilter === cat ? `[ ${cat} ]` : cat}
          </button>
        ))}
      </div>

      {/* THE GRID SYSTEM */}
      <div className="space-y-24">
        {collections
          .filter(c => activeFilter === "ALL" || c.category === activeFilter)
          .map((collection) => (
            <section key={collection.category}>
              <div className="flex items-baseline gap-4 mb-8">
                <h2 className="text-xs font-mono text-zinc-500 tracking-widest uppercase">{collection.category}</h2>
                <div className="h-px flex-1 bg-zinc-900" />
              </div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-900 border border-zinc-900"
              >
                {collection.assets.map((asset) => (
                  <motion.div 
                    variants={itemVariants}
                    key={asset.id} 
                    className="bg-[#050505] group p-6 hover:bg-[#080808] transition-all duration-500"
                  >
                    {/* Image Area */}
                    <div className="aspect-square mb-6 overflow-hidden bg-zinc-900/10 relative">
                      <img 
                        src={asset.img} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                      />
                    </div>

                    {/* Metadata & Interaction */}
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-[11px] font-bold tracking-widest uppercase text-zinc-200">{asset.name}</h3>
                      <span className="font-mono text-[10px] text-brand">{asset.price}</span>
                    </div>

                    {/* Sliding Action Bar */}
                    <div className="relative h-10 overflow-hidden border-t border-zinc-900 pt-4">
                      <div className="absolute inset-0 flex justify-between items-center transform group-hover:-translate-y-full transition-transform duration-500 ease-in-out">
                        <p className="font-mono text-[9px] text-zinc-600 uppercase tracking-[0.2em]">{asset.tech}</p>
                        <div className="w-1 h-1 rounded-full bg-zinc-800" />
                      </div>
                      
                      <button 
                        onClick={() => addToCart(asset)} // This triggers the sidebar
                        className="absolute inset-0 flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-white text-black text-[9px] font-bold tracking-[0.3em] uppercase"
                      >
                        ACQUIRE ASSET
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          ))}
      </div>
    </motion.div>
  );
};

export default Marketplace;