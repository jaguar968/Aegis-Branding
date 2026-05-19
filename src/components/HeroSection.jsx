import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-transparent">
      
      {/* Background Decorative Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-125 h-125 rounded-full bg-brand/10 blur-[120px]" />
        <div className="absolute bottom-[0%] right-[-5%] w-100 h-100 rounded-full bg-brand/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center text-center space-y-10">
          
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-brand/30 bg-brand/5 text-[10px] font-bold tracking-[0.3em] uppercase text-brand">
            Digital Craftsmanship 2026
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter leading-[0.9] max-w-5xl">
            Branding that <br /> 
            <span className="text-zinc-500">accelerates.</span>
          </h1>

          {/* Subheader */}
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            We partner with ambitious founders to build high-performance 
            digital products. No fluff, just precision engineering.
          </p>

          {/* CTAs using our custom v4 brand color and shadow */}
          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <a 
              href="https://calendly.com/ezekieljaguar/new-meeting" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="px-10 py-4 bg-brand text-white font-bold rounded-xl shadow-indigo-glow hover:brightness-110 transition-all cursor-pointer">
                Start a Project
              </button>
            </a>
            <a href="#work">
              <button className="px-10 py-4 bg-transparent border border-zinc-800 text-zinc-300 font-bold rounded-xl hover:bg-zinc-900 transition-all cursor-pointer">
                View Showcase
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;