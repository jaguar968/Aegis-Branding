import React, { useState, useEffect } from 'react'; // <--- Add this line
import { BrowserRouter as Router, Routes, Route, useParams, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SystemLoader from './components/SystemLoader';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Marketplace from './pages/Marketplace';
import PostDetail from './pages/PostDetail';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import Sidebar from './components/Sidebar'; 
import Footer from './components/Footer';

function AppContent() {
  const location = useLocation();

  const [isLightMode, setIsLightMode] = useState(false);
  
  // Now these will work because we imported useState and useEffect
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  useEffect(() => {
    setIsLoading(true);
  }, [location.pathname]);

  return (
    <main className={`relative min-h-screen transition-colors duration-500 ${isLightMode ? 'bg-[#f4f4f5] text-zinc-900' : 'bg-[#050505] text-white selection:bg-brand/30'}`}>
      <AnimatePresence mode="wait">
        {isLoading && (
          <SystemLoader key="loader" finishLoading={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      <Cursor />
      
      {/* Sidebar added here to be accessible globally */}
      <Sidebar 
        isOpen={isCartOpen} 
        close={() => setIsCartOpen(false)} 
        items={cart} 
        removeFromCart={removeFromCart} // Pass it here
      />

      <div 
        className="fixed inset-0 z-0 bg-grid-pattern pointer-events-none opacity-40" 
        style={{ 
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)' 
        }}
      />

      <div className="noise-overlay fixed inset-0 z-1 pointer-events-none opacity-[0.03]" />
      <ScrollToTop />
      <Navbar cartCount={cart.length} 
      toggleCart={() => setIsCartOpen(true)}
      isLightMode={isLightMode} 
      toggleTheme={() => setIsLightMode(!isLightMode)} />

      <div className="relative z-10 ">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Pass addToCart function down to the Marketplace */}
            <Route path="/" element={<Home />} />
            <Route path="/archive" element={<Marketplace addToCart={addToCart} />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/journal/:slug" element={<PostDetail />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </main>
  );
}
const PostDetailWrapper = () => {
  const { postSlug } = useParams();
  return <PostDetail postSlug={postSlug} />;
};
export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}