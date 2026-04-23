"use client";

import { motion } from 'framer-motion';
import './NeuralEquation.css';

export default function NeuralEquation() {
  const equation = [
    { char: "Y", type: "output", desc: "Output Prediction" },
    { char: " =", type: "operator" },
    { char: " \u03C3", type: "activation", desc: "Activation Function (Sigma)" },
    { char: "(", type: "operator" },
    { char: "W", type: "weight", desc: "Weights Matrix" },
    { char: " \u00B7 ", type: "operator" },
    { char: "X", type: "input", desc: "Input Vector" },
    { char: " + ", type: "operator" },
    { char: "b", type: "bias", desc: "Bias Vector" },
    { char: ")", type: "operator" }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.5, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { 
        type: "spring" as const, 
        stiffness: 100, 
        damping: 15 
      }
    }
  };

  return (
    <div className="neural-equation-container">
      <div className="equation-math-wrapper">
        <motion.div 
          className="equation-wrapper"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {equation.map((el, i) => (
            <motion.span 
              key={i} 
              variants={item} 
              className={`eq-char ${el.type}`}
            >
              {el.char}
              {el.desc && (
                <div className="eq-tooltip-container">
                  <span className="eq-tooltip">{el.desc}</span>
                </div>
              )}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <motion.div 
        className="equation-glow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        viewport={{ once: true }}
      />
      
      {/* Decorative math symbols floating in background */}
      <motion.div 
        className="floating-math math-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 0.15, y: -20 }}
        transition={{ delay: 1, duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        ∑
      </motion.div>
      <motion.div 
        className="floating-math math-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 0.15, y: 20 }}
        transition={{ delay: 1.2, duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
      >
        ∫
      </motion.div>
      <motion.div 
        className="floating-math math-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 0.15, x: 20 }}
        transition={{ delay: 1.4, duration: 2.2, repeat: Infinity, repeatType: "reverse" }}
      >
        ∂
      </motion.div>
    </div>
  );
}
