import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

const PageWrapper = ({ children, locationKey, namespace = 'default' }) => {
  const containerRef = useRef(null);

  // GSAP animation for Barba.js integration
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Create animation timeline
    const tl = gsap.timeline();
    
    // Apply different animations based on namespace
    if (namespace === 'home') {
      tl.fromTo(container, 
        { opacity: 0, scale: 0.95 }, 
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
      );
    } else if (namespace === 'dream') {
      tl.fromTo(container, 
        { opacity: 0, x: 50 }, 
        { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
      );
    } else {
      tl.fromTo(container, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
    
    // Cleanup function
    return () => {
      tl.kill();
    };
  }, [namespace]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        ref={containerRef}
        key={locationKey}   
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{ width: '100%' }}
        data-barba="container" 
        data-barba-namespace={namespace}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageWrapper;
