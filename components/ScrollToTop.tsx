"use client";
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import './ScrollToTop.css';

/**
 * ScrollToTop Component
 * 1. Displays a floating button to scroll back to top when the user scrolls down.
 * 2. Automatically ensures the page scrolls to top on every route change.
 */
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  // Watch scroll position to show/hide the floating button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Initial check
    toggleVisibility();
    
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Global Page Scroll Reset:
  // Ensures that whenever the pathname changes, the view resets to the top.
  // This addresses the "in all pages all button scroll to the top" requirement.
  useEffect(() => {
    // We use a slight delay or next tick to ensure Next.js transitions are settled
    // though smooth scroll is usually fine here.
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
          title="Back to Top"
        >
          <div className="scroll-to-top-glow" />
          <ArrowUp className="icon" size={24} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
