"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Sparkles, Shield, Cpu } from 'lucide-react';
import AIInterface from '../../components/AIInterface';
import './page.css';

export default function AIAssistantPage() {
  const [isTTSEnabled, setIsTTSEnabled] = useState(false);

  return (
    <main className="page-container ai-assistant-page">
      <motion.div
        className="ai-assistant-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="page-title">AI <span className="text-gradient">Assistant</span></h1>
        <p className="page-subtitle">Experience the power of Solveria Labs' neural architecture. Ask our AI anything about our services or tech stack.</p>
        
        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
           <button 
             className={`cta-button ${isTTSEnabled ? '' : 'secondary'}`}
             onClick={() => setIsTTSEnabled(!isTTSEnabled)}
             style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}
           >
             {isTTSEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
             {isTTSEnabled ? 'Voice Response On' : 'Voice Response Off'}
           </button>
        </div>
      </motion.div>

      <motion.div 
        className="ai-assistant-container"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <AIInterface isPageMode={true} isTTSEnabled={isTTSEnabled} />
      </motion.div>

      <div className="ai-assistant-info">
        <motion.div 
          className="info-box"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Sparkles size={24} color="var(--primary)" style={{ marginBottom: '1rem' }} />
          <h4>Neural Logic</h4>
          <p>Powered by fine-tuned large language models tailored for technical precision and brand consistency.</p>
        </motion.div>

        <motion.div 
          className="info-box"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Shield size={24} color="var(--primary)" style={{ marginBottom: '1rem' }} />
          <h4>Zero-Data Leak</h4>
          <p>Your conversations are processed in a secure environment. We prioritize data privacy and ethics in every AI deployment.</p>
        </motion.div>

      </div>
    </main>
  );
}
