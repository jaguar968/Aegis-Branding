import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = ({ isOpen, close, items }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={close}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-100"
        />
        {/* Drawer */}
        <motion.div 
          initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed right-0 top-0 h-screen w-full max-w-md bg-[#080808] border-l border-zinc-900 z-101 p-10 flex flex-col"
        >
          <div className="flex justify-between items-center mb-12">
            <span className="font-mono text-[10px] tracking-[0.4em] text-zinc-500 underline decoration-brand underline-offset-8">SYSTEM_MANIFEST</span>
            <button onClick={close} className="text-zinc-500 hover:text-white font-mono text-[10px] tracking-tighter">[ CLOSE ]</button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-6">
            {items.length === 0 ? (
              <p className="font-mono text-[10px] text-zinc-700 italic uppercase mt-20 text-center">No assets indexed.</p>
            ) : (
              items.map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-zinc-900 pb-4">
                  <div>
                    <h4 className="text-[11px] font-bold tracking-widest">{item.name}</h4>
                    <p className="font-mono text-[9px] text-zinc-600 uppercase">{item.tech}</p>
                  </div>
                  <span className="font-mono text-[10px] text-brand">{item.price}</span>
                </div>
              ))
            )}
          </div>
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b border-zinc-900 pb-4 group/item">
              <div>
                <h4 className="text-[11px] font-bold tracking-widest">{item.name}</h4>
                <p className="font-mono text-[9px] text-zinc-600 uppercase">{item.tech}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] text-brand">{item.price}</span>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="opacity-0 group-hover/item:opacity-100 text-zinc-500 hover:text-red-500 font-mono text-[8px] transition-all"
                >
                  [ REMOVE ]
                </button>
              </div>
            </div>
          ))}

          <div className="pt-8 border-t border-zinc-900 mt-auto">
            <div className="flex justify-between mb-8 font-mono text-[10px]">
              <span className="text-zinc-500 uppercase">Total_Valuation</span>
              <span className="text-white">$00.00</span> {/* Calculate this later */}
            </div>
            <button className="w-full bg-white text-black py-4 font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-brand hover:text-white transition-colors">
              EXECUTE_ACQUISITION
            </button>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);
// Ensure this is at the very bottom!
export default Sidebar;