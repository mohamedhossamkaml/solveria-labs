"use client";

import { motion, Variants } from 'framer-motion';

export default function AnimatedLogo() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Delays 'Labs' after 'Solveria'
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        staggerChildren: 0.1, // Stagger hover glitches
      }
    },
    tap: {
      scale: 0.9,
      filter: "hue-rotate(90deg) blur(2px)", // Futuristic click warp
      transition: { duration: 0.1, repeat: Infinity, repeatType: "reverse" }
    }
  };

  const word1Variants: Variants = {
    hidden: { opacity: 0, x: -15, filter: "blur(8px)" },
    show: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)", 
      transition: { duration: 0.6, type: "spring", bounce: 0.5 } 
    },
    hover: { 
      opacity: [1, 0.5, 1], // Quick flicker
      textShadow: "0px 0px 10px var(--primary)",
      transition: { duration: 0.3 } 
    }
  };

  const word2Variants: Variants = {
    hidden: { opacity: 0, x: 15, filter: "blur(8px)" },
    show: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)", 
      transition: { duration: 0.6, type: "spring", bounce: 0.5 } 
    },
    hover: { 
      scale: 1.05,
      opacity: [1, 0.8, 1], // Secondary flicker
      textShadow: "0px 0px 15px var(--secondary)",
      transition: { duration: 0.3 } 
    }
  };

  return (
    <motion.span 
      className="logo-text"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      whileHover="hover"
      whileTap="tap"
      style={{ display: "flex", gap: "0.3rem", alignItems: "center", cursor: "pointer" }}
    >
      <motion.span variants={word1Variants} style={{ display: "inline-block" }}>
        Solveria
      </motion.span>
      <motion.span variants={word2Variants} className="logo-accent" style={{ display: "inline-block" }}>
        Labs
      </motion.span>
    </motion.span>
  );
}
