import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  // Function to handle the smooth scroll
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tiers = [
    {
      name: "Identity Sprint",
      price: "4,500",
      desc: "Perfect for seed-stage startups needing a rapid, high-authority visual OS.",
      features: ["Full Brand Identity", "Core Asset Deck", "Social Kit", "7-Day Delivery"]
    },
    {
      name: "The Partner",
      price: "8,000",
      desc: "Full-service design partner. We handle everything from strategy to launch.",
      features: ["Everything in Sprint", "Custom Web Development", "Pitch Deck Design", "Monthly Support"],
      highlight: true
    }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-4xl lg:text-6xl font-bold tracking-tighter uppercase italic">Investment</h2>
        <p className="text-zinc-500 mt-4 font-mono text-xl tracking-widest">Transparent pricing for bold founders.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {tiers.map((tier, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className={`p-10 rounded-4xl border ${tier.highlight ? 'border-brand bg-brand/5' : 'border-zinc-800 bg-zinc-900/30'} flex flex-col justify-between`}
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                {tier.highlight && <span className="bg-brand text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase">Popular</span>}
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold tracking-tighter">${tier.price}</span>
                <span className="text-zinc-500 text-sm">/flat-fee</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">{tier.desc}</p>
              <ul className="space-y-4">
                {tier.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Functional Button */}
            <button 
              onClick={scrollToContact}
              className={`mt-10 w-full py-4 rounded-xl font-bold transition-all cursor-pointer ${
                tier.highlight 
                ? 'bg-brand text-white shadow-indigo-glow hover:brightness-110' 
                : 'bg-zinc-800 text-white hover:bg-zinc-700'
              }`}
            >
              Book a Call
            </button>
          </motion.div>
        ))}
      </div>
      {/* --- Engagement Terms Disclaimer --- */}
<div className="mt-16 max-w-5xl mx-auto pt-8 border-t border-zinc-900">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    
    {/* Financials */}
    <div className="flex gap-4 items-start">
      <div className="text-brand font-mono text-2xl mt-1">01</div>
      <div>
        <p className="font-mono text-[14px] uppercase tracking-widest text-zinc-500 mb-1">Financial Protocol</p>
        <p className="text-1xl text-zinc-400 leading-relaxed">
          Project commencement requires a <span className="text-white">50% upfront commitment</span>. 
          The remaining balance is settled upon final asset delivery.
        </p>
      </div>
    </div>

    {/* Scope */}
    <div className="flex gap-4 items-start">
      <div className="text-brand font-mono text-2xl mt-1">02</div>
      <div>
        <p className="font-mono text-[14px] uppercase tracking-widest text-zinc-500 mb-1">Creative Bound</p>
        <p className="text-1xl text-zinc-400 leading-relaxed">
          To maintain high-fidelity focus, we provide <span className="text-white">two distinct conceptual directions </span> 
          per project, refined through iterative collaboration.
        </p>
      </div>
    </div>

  </div>

  {/* Technical Footer Detail */}
  <div className="mt-12 text-center">
    <p className="inline-block px-4 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-[11px] font-mono text-zinc-600 uppercase tracking-[0.3em]">
      Standard Operating Terms • Aegis Branding OS v.26
    </p>
  </div>
</div>
    </section>
  );
};

export default Pricing;