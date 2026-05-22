import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import { Buffer } from 'buffer';
window.Buffer = window.Buffer || Buffer;

const PostDetail = () => {
  const { slug } = useParams();
  const [postData, setPostData] = useState({ metadata: {}, content: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // 1. Guard: If no slug exists in the URL, don't attempt the fetch
    if (!slug) return;

    // 2. Absolute Path: Forces the browser to look at the root domain
    const filePath = `${window.location.origin}/content/${slug}.md`;
    
    // 3. Debug Trace: Open Console (F12) on Vercel to see this link
    console.log("FETCH_INITIATED:", filePath);

    fetch(filePath)
      .then((res) => {
        const contentType = res.headers.get('content-type');
        const isHtml = contentType?.includes('text/html');

        // If Vercel redirects to index.html or file is missing, throw error
        if (!res.ok || isHtml) {
          console.error(`FETCH_FAILED: Status ${res.status}, Type: ${contentType}`);
          throw new Error("NOT_FOUND");
        }
        return res.text();
      })
      .then((text) => {
        // Parse the Markdown and Metadata
        const { data, content } = matter(text);
        setPostData({ metadata: data, content: content });
        setLoading(false);
        setError(false); // Reset error state on success
      })
      .catch((err) => {
        console.error("SYSTEM_FAILURE:", err);
        setError(true);
        setLoading(false);
      });
  }, [slug]);

    // Error UI (The 'System Failure' look)
    if (error) {
    return (
        <div className="bg-transparent min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
            <h1 className="font-mono text-xs uppercase tracking-[0.5em] mb-4 text-red-500">
            [!] Error_Report_404
            </h1>
            <p className="text-zinc-600 font-light italic mb-8">
            The requested intel file "{slug}.md" does not exist in the archive.
            </p>
            <a href="/" className="text-zinc-400 hover:text-white font-mono text-[10px] uppercase tracking-widest border border-zinc-800 px-6 py-3 transition-all">
            Return_to_Safe_Zone
            </a>
        </div>
        </div>
    );
    }
  return (
    <div className="bg-transparent min-h-screen text-white font-sans selection:bg-white selection:text-black">
      <article className="max-w-3xl mx-auto py-24 px-6">
        
        {/* Editorial Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-zinc-800" />
            <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.4em]">
              {postData.metadata.date || 'MAY 2024'}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.85] mb-6 uppercase italic">
            {postData.metadata.title}
          </h1>
          
          {postData.metadata.excerpt && (
            <p className="text-zinc-400 text-sm md:text-xl font-light leading-relaxed max-w-xl italic">
              {postData.metadata.excerpt}
            </p>
          )}
        </header>

        {/* Structured Markdown Content */}
        <div className="space-y-8">
          <ReactMarkdown
            components={{
              // Headings
              h1: ({node, ...props}) => <h1 className="text-xl md:text-4xl font-bold mt-16 mb-6  text-white" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-xl font-bold mt-12 mb-4 text-zinc-100" {...props} />,
              img: ({node, ...props}) => (
                <img 
                    className="w-full border border-zinc-900 my-6 transition-all duration-700" 
                    {...props} 
                />
              ),
              // Body Text
              p: ({node, ...props}) => <p className="text-zinc-400 text-[12px] md:text-xl  leading-relaxed font-light mb-6" {...props} />,
              // Lists (Terminal Style)
              ul: ({node, ...props}) => <ul className="space-y-4 my-8 border-l border-zinc-900 pl-6" {...props} />,
              li: ({node, ...props}) => <li className="text-zinc-400 list-none font-light before:content-['/_'] before:mr-2 before:text-zinc-600" {...props} />,
              // Quotes
              blockquote: ({node, ...props}) => (
                <blockquote className="bg-zinc-900/30 p-8 rounded-sm border-l-2 border-white italic my-12 text-zinc-300 text-sm md:text-xl" {...props} />
              ),
              // Bold text (Accent color)
              strong: ({node, ...props}) => <strong className="text-white font-semibold" {...props} />
            }}
          >
            {postData.content}
          </ReactMarkdown>
        </div>

        {/* Return to Terminal Footer */}
        <footer className="mt-32 pt-12 border-t border-zinc-900">
          <a href="/" className="text-zinc-500 hover:text-white font-mono text-[10px] uppercase tracking-[0.3em] transition-colors">
            ← [RETURN_TO_BASE]
          </a>
        </footer>
      </article>
    </div>
  );
};
export default PostDetail;