import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  const terms = [
    {
      id: "SEC_01",
      title: "Engagement Basis",
      content: "All projects undertaken by AEGIS BRANDING are governed by specific project briefs. Any work requested outside the initial scope will be treated as an amendment and billed at our standard hourly rates."
    },
    {
      id: "SEC_02",
      title: "Intellectual Property",
      content: "Upon final payment, the client is granted full ownership of final brand assets. AEGIS retains the right to display the work in our portfolio and professional showcases unless a Non-Disclosure Agreement (NDA) is signed."
    },
    {
      id: "SEC_03",
      title: "Payment Protocols",
      content: "A 50% initial commitment fee is required before project commencement. Final assets will be released upon receipt of the remaining balance. All invoices are due within 7 business days."
    },
    {
      id: "SEC_04",
      title: "Termination",
      content: "Either party may terminate the engagement with 30 days' written notice. In the event of termination, the client will be billed for all work completed up to the date of notice."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-brand"></div>
            <p className="text-brand font-mono text-[10px] uppercase tracking-[0.5em]">
              Governance_Framework
            </p>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase leading-none"
          >
            Terms of <br />
            <span className="text-zinc-600 italic text-4xl md:text-6xl">Engagement.</span>
          </motion.h1>
        </header>

        {/* Terms List */}
        <div className="border-t border-zinc-900">
          {terms.map((term, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="py-12 border-b border-zinc-900 grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8 group"
            >
              <div className="font-mono text-xs text-zinc-600 group-hover:text-brand transition-colors">
                [{term.id}]
              </div>
              <div>
                <h2 className="text-white font-bold text-xl uppercase tracking-tight mb-4">
                  {term.title}
                </h2>
                <p className="text-zinc-500 leading-relaxed text-sm md:text-base max-w-2xl group-hover:text-zinc-400 transition-colors">
                  {term.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legal Disclaimer Footer */}
        <div className="mt-20">
          <p className="text-[10px] font-mono text-zinc-500 uppercase leading-loose tracking-widest text-center">
            The use of this system constitutes acceptance of these terms. <br />
            Aegis Branding Systems © 2026 // Revision 4.0.1
          </p>
        </div>

      </div>
    </div>
  );
};

export default Terms;