import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const sitemap = [
    { name: "Work", path: "/#work", isAnchor: true },
    { name: "Services", path: "/services", isAnchor: false },
    { name: "About", path: "/about", isAnchor: false },
    { name: "Contact", path: "/contact", isAnchor: false },
  ];

  const socialLinks = [
  { 
    name: "X / Twitter", 
    path: "https://x.com/yourusername", 
    label: "Public Intel" 
  },
  { 
    name: "Telegram", 
    path: "https://t.me/Iam_Njaguara", 
    label: "Direct Secure" 
  },
  { 
    name: "WhatsApp", 
    path: "https://wa.me/254741967730", 
    label: "Instant Comms" 
  }
];

  return (
    <footer className="relative bg-black border-t border-zinc-900 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION: The Big CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-none">
              READY TO <br />
              <span className="text-zinc-500 italic">EVOLVE?</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end items-start md:items-end">
            <p className="text-zinc-400 max-w-sm mb-6 md:text-right">
              We help brands navigate the digital landscape with precision-engineered visual identities.
            </p>
            <Link 
              to="/contact" 
              className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-brand hover:text-white transition-all duration-300"
            >
              START A PROJECT
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* MIDDLE SECTION: Sitemap & Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24 border-t border-zinc-900 pt-12">
          
          {/* Column 1: Sitemap */}
          <div className="flex flex-col gap-4">
            <p className="text-brand font-mono text-[10px] uppercase tracking-widest mb-2">Sitemap</p>
            {sitemap.map((link) => (
              <Link key={link.name} to={link.path} className="text-zinc-400 hover:text-white transition-colors text-sm">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
          <p className="text-brand font-mono text-[10px] uppercase tracking-widest mb-2">Social Directory</p>
          
          {socialLinks.map((social) => (
            <a 
              key={social.name}
              href={social.path}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col"
            >
              <span className="text-zinc-400 group-hover:text-white text-sm transition-colors">
                {social.name}
              </span>
              <span className="text-zinc-600 font-mono text-[8px] uppercase tracking-tighter group-hover:text-brand transition-colors">
                [{social.label}]
              </span>
            </a>
          ))}
        </div>

          {/* Column 3: Office/Location */}
          <div className="flex flex-col gap-4">
            <p className="text-brand font-mono text-[10px] uppercase tracking-widest mb-2">Location</p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Remote First<br />
              Global Operations<br />
              EST Timezone
            </p>
          </div>

          {/* Column 4: Status Indicator */}
          <div className="flex flex-col gap-4">
            <p className="text-brand font-mono text-[10px] uppercase tracking-widest mb-2">Availability</p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <p className="text-zinc-100 text-sm">Taking new projects</p>
            </div>
            <p className="text-zinc-500 text-xs mt-2">Current Capacity: 50%</p>
          </div>

        </div>

        {/* BOTTOM SECTION: Legal & Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-zinc-900 pt-8">
          <p className="text-white font-mono text-[11px] uppercase tracking-widest">
            © 2026 AEGIS BRANDING SYSTEM. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-white hover:text-white font-mono text-[12px] uppercase tracking-widest">Privacy</Link>
            <Link to="/terms" className="text-white hover:text-white font-mono text-[12px] uppercase tracking-widest">Terms</Link>
          </div>
        </div>

        {/* Column 5: Direct Contact */}
        <div className="flex flex-col gap-4">
        <p className="text-brand font-mono text-[10px] uppercase tracking-widest mb-2">Direct Contact</p>
        
        {/* The Email Address */}
        <a 
            href="mailto:aegisbranding9@gmail.com" 
            className="text-zinc-100 text-[14px] hover:text-brand transition-colors"
        >
            aegisbranding9@gmail.com
        </a>

        {/* Gmail Specific Button */}
        <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=aegisbranding9@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 px-4 py-2 border border-zinc-800 rounded-lg text-[16px] font-mono uppercase tracking-widest text-zinc-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
        >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.573l8.073-6.08c1.618-1.214 3.927-.059 3.927 1.964z"/>
            </svg>
            Compose in Gmail
        </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;