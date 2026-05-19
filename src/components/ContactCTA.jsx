import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const ContactCTA = () => {
  useEffect(() => {
    // 1. Check if script already exists to avoid duplicates
    const scriptId = 'calendly-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="contact" className="py-32 px-6 bg-grid-pattern overflow-hidden">
      <div className="max-w-5xl mx-auto bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] p-8 md:p-16 backdrop-blur-3xl relative">
        
        {/* Glow Effect */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand/20 blur-[100px] rounded-full" />

        <div className="relative z-10 text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Ready to <span className="italic">Ascend?</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg font-light">
            Slots are limited to 5 partners per month to ensure deep-work quality.
            Secure your slot for a high-fidelity brand strategy session. 
            Choose a time that works for you below.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a 
              href="https://wa.me/254741967730" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-all border border-zinc-700 text-sm font-medium"
            >
              WhatsApp
            </a>
            <a 
              href="https://t.me/Iam_Njaguara" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-all border border-zinc-700 text-sm font-medium"
            >
              Telegram
            </a>
            <a 
              href="a" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-all border border-zinc-700 text-sm font-medium"
            >
              Email
            </a>
          </div>

          {/* Actual Calendly Embed */}
          <div className="mt-12 w-full rounded-2xl border border-zinc-800 bg-black/40 overflow-hidden shadow-2xl">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/ezekieljaguar/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1" 
              style={{ minWidth: '320px', height: '700px' }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;