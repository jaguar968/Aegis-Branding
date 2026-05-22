import React, { useLayoutEffect, useRef, useEffect } from 'react'; // Added useRef here
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Component Imports
import HeroSection from '../components/HeroSection.jsx'
import LogoWall from '../components/LogoWall.jsx'
import Positioning from '../components/Positioning.jsx'
import BentoGrid from '../components/BentoGrid.jsx'
import Impact from '../components/Impact.jsx'
import Showcase from '../components/Showcase.jsx'
import JournalSection from '../components/JournalSection';
import Pricing from '../components/Pricing.jsx'
import Methodology from '../components/Methodology.jsx'
import ContactCTA from '../components/ContactCTA.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  const { hash } = useLocation();
  const isFirstRender = useRef(true); // This tracks if the site just loaded

  useLayoutEffect(() => {
    // 1. HANDLE INITIAL REFRESH
    if (isFirstRender.current) {
      isFirstRender.current = false; // "Flip the switch" so this only runs once
      
      // If there's a hash in the URL during refresh, strip it out
      if (hash) {
        window.history.replaceState({}, document.title, window.location.pathname);
      }
      
      // Force the scroll to the absolute top
      window.scrollTo(0, 0);
      return;
    }

    // 2. HANDLE ACTUAL BUTTON CLICKS
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        const timeoutId = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [hash]); // Runs whenever the hash changes

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <LogoWall />
      <Positioning />
      <BentoGrid /> 
      <Impact />
      <Showcase />
      <JournalSection /> 
      <Pricing />
      <Methodology />
      <ContactCTA />
    </motion.div>
  );
};

export default Home;