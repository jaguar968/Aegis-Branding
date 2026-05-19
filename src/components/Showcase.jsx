import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  { 
    title: "Lumina AI", 
    category: "Branding",
    img: "/projects/Asset 1@2x.png",
    preview: "Lumina AI was designed as a modern artificial intelligence brand focused on clarity, intelligence, and trust.",
    fullStudy: `The goal was to create a minimalist identity system that feels premium, scalable, and instantly recognizable across both digital and physical applications.

    The symbol was developed using geometric forms arranged in a radial structure, representing connectivity, intelligence, and continuous motion. Its balanced composition gives the mark a technological feel without relying on overly complex visual language.
    
    Typography was intentionally paired with a refined serif wordmark to create contrast between innovation and sophistication.
    
    The symbol was developed using geometric forms arranged in a radial structure, representing connectivity, intelligence, and continuous motion. Its balanced composition gives the mark a technological feel without relying on overly complex visual language — allowing the brand to remain timeless and versatile.

    Typography was intentionally paired with a refined serif wordmark to create contrast between innovation and sophistication. This combination positions Lumina AI as both technically advanced and professionally grounded.

    The identity system was built to perform seamlessly across multiple touchpoints, including software interfaces, corporate apparel, office signage, and digital products. A monochrome palette reinforces the clean and premium aesthetic while ensuring strong visual consistency across applications.

    The final result is a brand identity that communicates precision, elegance, and modern AI-driven innovation through a simple but memorable visual system.

    `,
    gallery: ["/projects/LuminaMCK.png", "/projects/Asset 1@2x.png", "/projects/LuminaMCK2.png"]
  },
  { 
    title: "Vertex Protocol", 
    category: "Web3",
    img: "/projects/vertex.png",
    preview: "Decentralized trading platform visual identity.",
    fullStudy: `Vertex Protocol was developed as a minimalist identity system built around precision, structure, and forward motion. The logo combines geometric abstraction with a bold typographic presence, resulting in a mark that feels modern, scalable, and technologically grounded.
    
    The symbol itself is constructed from simplified geometric forms — two angular directional shapes paired with a circular anchor element. This creates a visual rhythm that communicates movement, connectivity, and progression without relying on unnecessary complexity. The balance between sharp edges and the circular form introduces both stability and momentum, reinforcing the brand's positioning as a forward-thinking digital protocol.
    
    Typography plays a critical role in the system. The bold sans-serif wordmark establishes confidence and clarity while maintaining excellent legibility across digital and physical applications. The heavy weight of the type complements the simplicity of the icon, allowing the identity to remain impactful even in minimal compositions.

    The design language follows a strict minimalist philosophy:
      1. Strong geometric alignment
      2. High contrast monochrome application
      3. Clean spacing and modular composition
      4. Reduced visual noise for maximum recognition
    
    One of the logo's strongest qualities is its adaptability. Whether applied to merchandise, interfaces, documentation, or digital environments, the identity maintains consistency and presence without needing decorative elements. This flexibility allows the brand to feel equally premium in both corporate and tech-oriented contexts.
    Overall, the Vertex Protocol identity succeeds through restraint — relying on form, proportion, and clarity to create a memorable and scalable visual system.
    `,
    gallery: ["/projects/vertexMCK1.png", "/projects/vertexMCK2.png", "/projects/vertex.png"]
  },
  { 
    title: "Implicity", 
    category: "Identity",
    img: "/projects/implicity.png",
    preview: "Implicity is a minimalist tech brand that uses clean geometry and bold typography to project modern confidence. Its monochrome design strips away clutter to ensure the brand is versatile, scalable, and easy to recognize.",
    fullStudy: `Implicity was developed as a minimalist technology brand centered around clarity, structure, and simplicity. The objective was to create an identity that communicates confidence and modernity through reduced visual language rather than decorative complexity.
    
    The symbol was designed using clean geometric forms that create a balanced and abstract architectural shape. Its simplicity allows the mark to feel intentional and memorable while remaining highly adaptable across digital and physical environments.
    
    The visual language reflects the brand's core philosophy — removing unnecessary complexity to create seamless experiences.

    A bold contemporary sans-serif wordmark was selected to reinforce accessibility, precision, and modern functionality. The typography complements the icon by maintaining strong visual balance and readability across different scales and applications.

    The monochrome identity system enhances the brand's premium and timeless aesthetic while ensuring versatility across interfaces, presentations, merchandise, and corporate materials. Every element was refined to maintain consistency, scalability, and immediate recognition.

    The final identity positions Implicity as a forward-thinking modern brand that communicates sophistication through restraint, delivering a visual system that is both functional and distinctly memorable.
    `,
    gallery: ["/projects/implicityMCK1.png","/projects/implicity.png", "/projects/implicityMCK2.png"]
  },
  { 
    title: "Aether Flow", 
    category: "Identity", 
    img: "/projects/aether.png",
    preview: "Clean energy solutions branding.",
    fullStudy: `Aether Flow was designed as a contemporary identity that represents movement, adaptability, and intelligent simplicity. The objective was to create a logo system that feels modern and dynamic while maintaining a clean, highly scalable structure suitable for both digital and physical applications.
    
    The symbol is constructed from balanced geometric forms that create a sense of flow and directional motion through negative space and curved intersections. Its abstract composition gives the mark a distinctive visual rhythm while remaining minimal enough to feel refined and timeless. The structure subtly communicates progression, connectivity, and fluid interaction — qualities that align with innovative and forward-thinking brands.
    
    A bold sans-serif wordmark was chosen to complement the icon with clarity and confidence. 
    
    The strong typography enhances readability while reinforcing the brand's modern and accessible personality. Together, the symbol and typography create a balanced identity system that feels both technical and approachable.

    One of the logo's strongest attributes is its versatility. The icon maintains recognition at small scales and functions effectively as a standalone brand asset across interfaces, applications, merchandise, and social platforms. The monochrome execution further strengthens consistency, allowing the identity to adapt seamlessly across different mediums without losing visual impact.
    
    The final identity positions Aether Flow as a modern and scalable brand built around clarity, motion, and simplicity — delivering a visual language that is memorable, adaptable, and professionally refined.
    `,
    gallery: ["/projects/aetherMCK1.png","/projects/aether.png", "/projects/aetherMCK2.png"]
  },
  { 
    title: "Nexus Labs", 
    category: "Identity", 
    img: "/projects/nexus.png",
    preview: "Nexus Labs uses a minimalist, directional icon and refined typography to represent technological convergence and innovation. The identity is built for high scalability, balancing modern precision with a premium, timeless aesthetic.",
    fullStudy: `Nexus Labs was designed as a modern technology identity focused on innovation, precision, and forward momentum. The objective was to create a logo system that feels refined and highly scalable while maintaining a strong visual presence across digital and corporate applications.
    
    The symbol uses two angled geometric forms to create a minimal but distinctive mark. Its directional structure communicates movement, progression, and connection — aligning with the idea of a “nexus” as a point where technology, research, and ideas converge. The simplicity of the icon allows it to remain instantly recognizable even at small sizes, making it highly effective for interface design, product branding, and corporate assets.
    
    A sophisticated serif wordmark was paired with the geometric symbol to create contrast between technical modernity and professional elegance.
    This balance gives the brand a premium and intelligent character without appearing overly corporate or sterile.

    One of the logo's primary strengths is its versatility. The mark functions effectively as both a standalone icon and a complete identity system, enabling seamless application across software platforms, presentations, apparel, signage, and social media. 
    Its monochrome execution further strengthens adaptability while reinforcing a clean and timeless aesthetic.

    The overall identity positions Nexus Labs as a contemporary and future-oriented technology brand — combining minimal structure, strong typography, and intentional simplicity into a cohesive visual system designed for long-term scalability and recognition.
    `,
    gallery: ["/projects/nexusMCK1.png","/projects/nexus.png", "/projects/nexusMCK2.png"]
  },
  { 
    title: "Remote", 
    category: "Identity", 
    img: "/projects/remote.png",
    preview: "Clean energy solutions branding.",
    fullStudy: `
    THE CHALLENGE
    REMOTE is a youth-led tech startup dedicated to bridging the gap between global businesses and
    specialized remote support. The objective was to create a visual identity that resonates with a "digital nomad" workforce while maintaining the professional rigor required by corporate clients.

    VISUAL ANALYSIS
    The logo utilizes a bold, high-contrast monochrome palette. The wordmark is set in a robust, wide-set sans-serif font that communicates stability and presence. The primary visual hook is the stylized "R"monogram, which features a dynamic, segmented stroke. This "broken" yet connected path symbolizes a digital signal or a route, directly referencing the "remote" nature of the business.
    
    DESIGN PILLARS
      a) Connectivity
            The geometric breaks in the icon represent data transmission and the seamless link between distributed teams.
      b) Agility
            The forward-leaning "R" evokes speed and the responsive nature of a youth-led tech organization.
      c) Scalability
            The thick strokes and wide tracking ensure the logo remains legible and powerful across all digital platforms.

    WHY IT WORKS
      Modern Professionalism: By avoiding cliché "cloud" or "wifi" icons, the logo achieves a premium, tech-forward aesthetic that looks like a platform, not just a service.

      Youthful Energy: The sharp angles and unconventional "R" construction signal innovation and a fresh perspective, differentiating the brand from legacy business process outsourcing (BPO) firms.

      Versatility: The stark black-and-white execution is "medium-agnostic," performing perfectly on mobile app interfaces, hardware, or corporate stationery.`,
    gallery: ["/projects/remoteMCK1.png","/projects/remote.png", "/projects/remoteMCK2.png"]
  },
];

const Showcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Helper to handle closing the modal
  const handleClose = () => {
    setSelectedProject(null);
    setIsExpanded(false); // Reset expansion state
  };

  return (
    <section id="work" className="py-32 px-6 max-w-5xl mx-auto">
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter text-white">
          Selected <span className="italic text-zinc-500">Works</span>
        </h2>
      </div>

              {/* Main Stacking Grid */}
        <div className="relative pb-[10vh]">
          {projects.map((project, i) => (
            <div 
              key={i} 
              // 'sticky top-0' makes them stack; 'zIndex: i' ensures the new card covers the old one
              className="sticky top-10 w-full mb-[5vh] md:mb-[15vh] flex items-center justify-center"
              style={{ 
                paddingTop: `${i * 20}px`, 
                zIndex: i 
              }}
            >
              <motion.div 
                layoutId={project.title}
                onClick={() => setSelectedProject(project)}
                // 'group' is essential here to trigger the hover state for the text layer
                className="w-full h-80 md:h-162.5 rounded-3xl md:rounded-[2.5rem] border border-zinc-800 bg-[#080808] overflow-hidden shadow-2xl relative group cursor-pointer"
              >
                {/* Project Image - We lower the opacity slightly so the card feels deep */}
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 opacity-100 group-hover:opacity-40 group-hover:scale-105" 
                  style={{ 
                    transform: 'translateZ(0)', 
                    backfaceVisibility: 'hidden',
                    isolation: 'isolate',
                    filter: 'brightness(1.1) contrast(1.1)',
                    zIndex: 10 // Image stays at base layer
                  }} 
                />
                
                {/* INFORMATION OVERLAY 
                    - z-20: Physically sits ON TOP of the image
                    - opacity-0 / group-hover:opacity-100: The reveal logic
                    - translate-y-4 / group-hover:translate-y-0: The slide-up logic
                */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-20 
                  bg-linear-to-t from-black via-black/40 to-transparent 
                  transition-all duration-500 ease-out 
                  
                  /* Mobile: Always visible, no slide */
                  opacity-100 translate-y-0 
                  
                  /* Desktop: Hidden until hover, then slide up */
                  md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0">
                  
                  <p className="text-brand font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] mb-2 md:mb-3">
                    {project.category}
                  </p>
                  
                  <h3 className="text-xl md:text-6xl font-bold tracking-tighter text-white mb-4 md:mb-6">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-px w-8 md:w-12 bg-brand transition-all duration-500 group-hover:w-20"></div>
                    <p className="text-zinc-400 font-mono text-[9px] uppercase tracking-widest">
                      Explore Case Study _
                    </p>
                  </div>
                </div>

                {/* Static Title (Visible before hover - Optional)
                    If you want the name visible even WITHOUT hovering, uncomment the div below 
                */}
                {/* <div className="absolute top-10 left-10 z-30 group-hover:opacity-0 transition-opacity">
                  <h4 className="text-white/50 font-mono text-xs uppercase tracking-widest">{project.title}</h4>
                </div> 
                */}

              </motion.div>
            </div>
          ))}
        </div>
      {/* Project Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-end justify-center bg-black/90 backdrop-blur-sm p-0 md:p-10"
          >
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              className="w-full max-w-6xl h-[90vh] bg-zinc-900 rounded-t-[3rem] border-t border-zinc-800 overflow-y-auto custom-scrollbar"
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-10 flex justify-between items-center p-8 bg-zinc-900/80 backdrop-blur-md text-white">
                <div className="flex flex-col">
                  <p className="text-brand font-mono text-[10px] uppercase tracking-[0.3em]">{selectedProject.category}</p>
                  <h2 className="text-3xl font-bold tracking-tight">{selectedProject.title}</h2>
                </div>
                <button 
                  onClick={handleClose}
                  className="px-6 py-2 bg-zinc-800 border border-zinc-700 rounded-full hover:bg-zinc-700 transition-colors text-xs font-mono uppercase tracking-widest"
                >
                  ✕ Close
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8 md:p-16 space-y-12 text-white">
                
                {/* Preview & Expansion Logic */}
                <div className="max-w-3xl">
                  <p className="text-2xl text-zinc-300 font-light leading-relaxed whitespace-pre-line">
                    {selectedProject.preview}
                  </p>
                  
                  {isExpanded && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-8 pt-8 border-t border-zinc-800"
                    >
                      <p className="text-zinc-500 text-lg leading-loose whitespace-pre-line font-light">
                        {selectedProject.fullStudy}
                      </p>
                    </motion.div>
                  )}

                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-8 text-brand font-mono text-[10px] uppercase tracking-widest hover:text-white transition-all flex items-center gap-3 group"
                  >
                    <span className="w-8 h-px bg-brand group-hover:w-12 transition-all"></span>
                    {isExpanded ? "Close Theoretical Study" : "Read Full Theoretical Case Study"}
                  </button>
                </div>

                {/* Image Gallery */}
                <div className="grid grid-cols-1 gap-12 pt-10">
                  {selectedProject.gallery.map((img, idx) => (
                    <div key={idx} className="w-full rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950">
                      <img src={img} className="w-full h-auto object-cover" alt={`${selectedProject.title} mockup ${idx}`} />
                    </div>
                  ))}
                </div>

                {/* Footer Spacer */}
                <div className="h-20"></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Showcase;