import React from 'react';
import { Link } from 'react-router-dom';

const JournalSection = () => {
  // We can eventually move this to a JSON file or keep it here for now
  const posts = [
    {
      slug: "branding-aegis",
      date: "MAY 2024",
      title: "The Architecture of AEGIS",
      excerpt: "Inside the process of building a high-fidelity visual operating system."
    },
    {
    slug: "future-of-ai",
    date: "JUNE 2024",
    title: "The AI Interface Paradox",
    excerpt: "Exploring the friction between human intuition and machine logic."
  }
  ];

  return (
    <section className="py-32 px-6 border-t border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.4em]">Index_03</span>
          <h2 className="text-white text-[10px] font-mono uppercase tracking-[0.4em]">Journal // Intel</h2>
        </div>

        {/* Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-900 border border-zinc-900">
          {posts.map((post) => (
            <Link 
              key={post.slug}
              to={`../content/${post.slug}`} 
              className="group bg-black p-12 hover:bg-zinc-950 transition-all duration-700 block"
            >
              <div className="flex justify-between items-start mb-6">
                <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">{post.date}</p>
                <span className="text-zinc-800 font-mono text-[10px] group-hover:text-white transition-colors">01</span>
              </div>
              
              <h3 className="text-3xl font-bold tracking-tighter uppercase italic group-hover:text-brand transition-all duration-500">
                {post.title}
              </h3>
              
              <p className="text-zinc-500 mt-4 font-light leading-relaxed max-w-sm">
                {post.excerpt}
              </p>

              <div className="mt-12 flex items-center gap-2">
                <div className="h-px w-0 group-hover:w-8 bg-white transition-all duration-500" />
                <span className="text-white font-mono text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2.5 group-hover:translate-x-0">
                  Access_File
                </span>
              </div>
            </Link>
          ))}

          {/* Placeholder for future entries to keep the grid balanced */}
          <div className="bg-black p-12 flex items-center justify-center border-l border-zinc-900">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-800 animate-pulse">
              System_Update_Pending...
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalSection;