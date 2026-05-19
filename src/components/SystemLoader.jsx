import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SystemLoader = ({ finishLoading }) => {
  const [text, setText] = useState('');
  const fullText = "INITIALIZING_AEGIS_PROTOCOL... [OK]";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setTimeout(finishLoading, 500); // Small pause at the end for effect
      }
    }, 30);
    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <motion.div 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-9999 bg-[#050505] flex items-center justify-center font-mono"
    >
      <div className="flex flex-col items-start gap-2">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-brand animate-pulse" />
          <span className="text-brand text-[10px] tracking-[0.4em]">{text}</span>
        </div>
        <div className="w-64 h-px bg-zinc-900 overflow-hidden relative">
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-linear-to-r from-transparent via-brand/50 to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SystemLoader;