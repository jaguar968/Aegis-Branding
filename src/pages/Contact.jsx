import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence import

const Contact = () => {
  const [status, setStatus] = useState("IDLE"); // IDLE, SENDING, SUCCESS, ERROR
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SENDING");

    try {
      // REPLACE 'YOUR_FORM_ID' with your actual Formspree ID
      const response = await fetch("https://formspree.io/f/maqkwrdq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus("SUCCESS");
        setFormState({ name: '', email: '', message: '' });
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand font-mono text-xs uppercase tracking-[0.4em] mb-4"
          >
            // Establish Connection
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter"
          >
            LET'S <span className="text-zinc-500 italic">TALK.</span>
          </motion.h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Side: Direct Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-4">Direct Lines</h3>
              <a href="mailto:aegisbranding9@gmail.com" className="text-2xl md:text-3xl hover:text-brand transition-colors block underline underline-offset-8 decoration-zinc-800 hover:decoration-brand">
                aegisbranding9@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-4">Availability</h3>
              <p className="text-zinc-300 text-lg">Currently accepting 2 new projects for Q3 2026.</p>
            </div>

            <div className="pt-12 border-t border-zinc-900">
              <h3 className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-6">Social Directory</h3>
              <div className="flex flex-wrap gap-6">
                {['LinkedIn', 'X / Twitter', 'Instagram', 'Behance'].map((link) => (
                  <a key={link} href="#" className="hover:text-brand transition-colors font-medium text-zinc-300">
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <a 
                href="https://calendly.com/ezekieljaguar/new-meeting" // Replace with your Calendly/Booking link
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-5 border border-zinc-800 text-zinc-400 rounded-xl font-bold uppercase tracking-widest hover:bg-zinc-800 hover:text-white transition-all duration-500 flex items-center justify-center gap-3"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book a Call
            </a>
          </motion.div>

          {/* Right Side: The Terminal Form */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {status === "SUCCESS" ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="h-full min-h-125 flex flex-col items-center justify-center bg-zinc-900/20 border border-brand/30 rounded-4xl p-12 text-center"
                >
                  <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mb-6">
                    <div className="w-3 h-3 bg-brand rounded-full animate-ping" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">Transmission Received</h3>
                  <p className="text-zinc-500 font-mono text-xs leading-relaxed max-w-xs">
                    Identity verified. Your brief has been encrypted and routed to the Aegis primary inbox. Expect a response within 2 cycles.
                  </p>
                  <button 
                    onClick={() => setStatus("IDLE")}
                    className="mt-8 text-brand font-mono text-[10px] uppercase tracking-widest hover:text-white transition-colors"
                  >
                    [ Send Another Brief ]
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="space-y-8 bg-zinc-900/30 p-8 md:p-12 rounded-[2.5rem] border border-zinc-800 backdrop-blur-sm"
                >
                  <div className="space-y-2">
                    <label className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest ml-1">Identity</label>
                    <input 
                      type="text" 
                      placeholder="Name or Agency"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand transition-colors"
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      value={formState.name}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest ml-1">Return Address</label>
                    <input 
                      type="email" 
                      placeholder="Email Address"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand transition-colors"
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      value={formState.email}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest ml-1">Brief</label>
                    <textarea 
                      rows="5"
                      placeholder="Describe your project requirements..."
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand transition-colors resize-none"
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      value={formState.message}
                      required
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={status === "SENDING"}
                    className="w-full py-5 bg-white text-black rounded-xl font-bold uppercase tracking-widest hover:bg-brand hover:text-white transition-all duration-500 disabled:opacity-50"
                  >
                    {status === "SENDING" ? "ENCRYPTING..." : "TRANSMIT MESSAGE _"}
                  </button>
                {/* Attachment Instruction */}
                <div className="mt-6 pt-6 border-t border-zinc-900">
                <p className="text-white text-[14px] tracking-[0.2em] leading-relaxed">
                    <span className="text-brand">Notice:</span> For security and high-resolution asset integrity, please forward all project references (PDF, AI, PNG) to 
                    <a href="mailto:aegisbranding9@gmail.com" className="text-brand hover:text-white transition-colors ml-1">
                    aegisbranding9@gmail.com
                    </a> after transmitting this brief.
                </p>
                </div>
                  
                  {status === "ERROR" && (
                    <p className="text-red-500 font-mono text-[10px] uppercase text-center mt-4">
                      Transmission failed. Check connection or use direct email.
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;