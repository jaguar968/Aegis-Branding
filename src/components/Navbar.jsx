import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Added cartCount and toggleCart as props
const Navbar = ({ cartCount, toggleCart, isLightMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Work", path: "/#work" },
    { name: "The Archive", path: "/archive" },
    { name: "Services", path: "/#services" },
    { name: "Process", path: "/#process" },
    { name: "About", path: "/about" },

  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-100 flex justify-center p-6 pointer-events-none">
        <div className={`flex items-center justify-between w-full max-w-7xl px-6 py-3 rounded-full border backdrop-blur-xl pointer-events-auto transition-colors duration-500 ${isLightMode ? 'bg-white/70 border-zinc-200' : 'bg-black/50 border-zinc-800'}`}>
          
          {/* Logo */}
          <Link 
            to="/" 
            onClick={() => {
              window.history.replaceState({}, '', '/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`text-[12px] md:text-1xl lg:text-2xl font-bold tracking-wide ${isLightMode ? 'text-black' : 'text-white'}`}
          >
            AEGIS <span className="text-brand">BRANDING</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-[9px] md:text-[10px] lg:text-[12px] font-mono uppercase tracking-[0.2em] text-zinc-400">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">

            {/* 3. THE THEME TOGGLE BUTTON (not complete)
            <button 
              onClick={toggleTheme}
              className={`hidden md:flex items-center justify-center w-8 h-8 rounded-full border transition-all ${isLightMode ? 'border-zinc-300 text-zinc-600 hover:bg-zinc-100' : 'border-zinc-800 text-zinc-400 hover:border-brand/50 hover:text-white'}`}
            >
              {isLightMode ? '☾' : '☼'}
            </button>
            */}
            

            {/* 1. THE SYSTEM INDEX (CART BUTTON) */}
            <button 
              onClick={toggleCart}
              className={`hidden md:flex items-center gap-3 px-4 py-2 border rounded-full transition-all group ${isLightMode ? 'border-zinc-300 hover:border-brand/50' : 'border-zinc-800 hover:border-brand/50'}`}
            >
              <span className="font-mono text-[9px] tracking-widest text-zinc-500 group-hover:text-white">SYSTEM_INDEX</span>
              <div className="px-2 py-0.5 bg-zinc-900 rounded text-[10px] font-bold text-brand group-hover:bg-brand group-hover:text-black transition-all">
                {cartCount}
              </div>
            </button>

            {/* Let's Talk */}
            <Link 
              to="/Contact" 
              className="hidden md:block px-5 py-2 bg-brand text-white text-xs font-bold rounded-full hover:brightness-110 transition-all cursor-pointer text-center"
            >
              Let's Talk
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2"
            >
              <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
              <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-90 bg-[#050505] pt-32 px-10 md:hidden"
          >
            <div className="flex flex-col gap-8 text-sm font-bold tracking-tighter">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-brand"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Cart Link */}
              <button 
                onClick={() => { toggleCart(); setIsOpen(false); }}
                className="flex justify-between items-center py-6 border-t border-zinc-900 mt-4 text-xl"
              >
                <span className="font-mono text-xs tracking-[0.4em] text-zinc-500">OPEN_MANIFEST</span>
                <span className="text-brand font-bold">({cartCount})</span>
              </button>

              <button className="w-full py-4 bg-brand text-white text-lg rounded-2xl">
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;