import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
  const sections = [
    {
      code: "01.0",
      title: "Data Collection",
      content: "We collect minimal diagnostic data necessary to provide our services. This includes contact information provided via our inquiry forms and basic usage analytics to improve system performance."
    },
    {
      code: "02.0",
      title: "Utilization",
      content: "Your data is utilized solely for communication and project management. We do not sell, trade, or distribute your identity to third-party entities for marketing purposes."
    },
    {
      code: "03.0",
      title: "Security Protocols",
      content: "All communication is handled via encrypted channels. We implement industry-standard security measures to protect your 'Brief' and identity from unauthorized access."
    },
    {
      code: "04.0",
      title: "Cookie Policy",
      content: "Our system uses essential cookies to maintain your theme preferences and session data. These are non-intrusive and necessary for core site functionality."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <header className="mb-20 border-b border-zinc-900 pb-12">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-brand font-mono text-[10px] uppercase tracking-[0.5em] mb-4"
          >
            // Protocol: Privacy_Policy
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase"
          >
            Legal <span className="text-zinc-600 italic">Notice.</span>
          </motion.h1>
          <p className="mt-8 text-zinc-500 font-mono text-[10px] uppercase tracking-widest">
            Last Revision: May 17, 2026 // Status: Active
          </p>
        </header>

        {/* Content Grid */}
        <div className="space-y-20">
          {sections.map((section, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8"
            >
              <span className="text-brand font-mono text-xs pt-1">{section.code}</span>
              <div>
                <h2 className="text-white font-bold text-xl uppercase tracking-tight mb-4">
                  {section.title}
                </h2>
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base max-w-2xl">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Contact */}
        <div className="mt-32 p-8 border border-zinc-800 rounded-3xl bg-zinc-900/20">
          <p className="text-zinc-400 text-sm">
            For inquiries regarding your data rights or to request deletion of your information, 
            please contact the Aegis Compliance Officer at: 
            <a href="mailto:compliance@aegis.com" className="text-white hover:text-brand ml-2 underline underline-offset-4">
              privacy@aegis.com
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Privacy;