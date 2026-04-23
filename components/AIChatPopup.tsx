"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Volume2, VolumeX, Maximize2, Minimize2 } from 'lucide-react';
import AIInterface from './AIInterface';
import './AIChatPopup.css';

export default function AIChatPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isTTSEnabled, setIsTTSEnabled] = useState(false);

  const handleToggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.div
        className={`ai-chat-fab ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <MessageSquare size={24} />
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`ai-chat-window ${isMaximized ? 'maximized' : ''}`}
            initial={{ opacity: 0, y: 100, scale: 0.8, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="ai-chat-header">
              <div className="ai-chat-title">
                <div className="ai-status-dot"></div>
                <h3>Solveria AI</h3>
              </div>
              <div className="ai-chat-header-actions">
                <button 
                  className="ai-chat-header-btn"
                  onClick={handleToggleMaximize}
                  title={isMaximized ? "Minimize" : "Maximize"}
                >
                  {isMaximized ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                </button>
                <button 
                  className={`ai-chat-tts-toggle ai-chat-header-btn ${isTTSEnabled ? 'active' : ''}`}
                  onClick={() => setIsTTSEnabled(!isTTSEnabled)}
                  title={isTTSEnabled ? "Disable TTS" : "Enable TTS"}
                >
                  {isTTSEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
                </button>
                <button className="ai-chat-close" onClick={() => setIsOpen(false)}>
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Core Interface */}
            <AIInterface isTTSEnabled={isTTSEnabled} />
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
