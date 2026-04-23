"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Send, Play } from 'lucide-react';
import './AIInterface.css';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const INITIAL_MESSAGE: Message = {
  id: '1',
  text: 'Hello! I am Solveria AI. How can I help you architect your digital future today?',
  sender: 'bot',
  timestamp: new Date(),
};

interface AIInterfaceProps {
  isPageMode?: boolean;
  isTTSEnabled: boolean;
}

export default function AIInterface({ isPageMode = false, isTTSEnabled }: AIInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const speak = (text: string) => {
    if (!isTTSEnabled || typeof window === 'undefined') return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const manualSpeak = (text: string) => {
    if (typeof window === 'undefined') return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Mock AI Response Logic
    setTimeout(() => {
      const botResponse = getMockResponse(userMsg.text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
      
      if (isTTSEnabled) {
        speak(botResponse);
      }
    }, 1500);
  };

  const getMockResponse = (input: string): string => {
    const text = input.toLowerCase();
    if (text.includes('hello') || text.includes('hi')) {
      return "Greetings! I'm here to assist with any questions about Solveria Labs' services, from Next.js development to AI integration.";
    }
    if (text.includes('service') || text.includes('offer')) {
      return "We offer high-performance Web Development, UI/UX Design, Database Architecture, and custom AI solutions (LLMs, RAG Agents, etc.). Which area interests you?";
    }
    if (text.includes('price') || text.includes('cost')) {
      return "Every project at Solveria Labs is unique. We recommend booking a consultation through our 'Get in Touch' button for a tailored quote.";
    }
    if (text.includes('contact')) {
      return "You can reach us through the 'Get in Touch' button in the navbar, or by visiting our Contact page!";
    }
    return "That's an interesting point! Our team of experts at Solveria Labs can certainly help you implement that. Would you like to know more about our technical stack?";
  };

  return (
    <div className={`ai-interface-container ${isPageMode ? 'page-mode' : ''}`}>
      {/* Messages */}
      <div className="ai-chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`message-bubble ${msg.sender}`}>
            {msg.text}
            {msg.sender === 'bot' && (
              <button 
                className="message-speak-btn" 
                onClick={() => manualSpeak(msg.text)}
                title="Speak message"
              >
                <Play size={12} fill="currentColor" />
              </button>
            )}
          </div>
        ))}
        {isTyping && (
          <div className="message-bubble bot">
            <div className="typing-indicator">
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="ai-chat-input-container">
        <form className="ai-chat-form" onSubmit={handleSend}>
          <input
            type="text"
            className="ai-chat-input"
            placeholder="Ask something..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isTyping}
          />
          <button
            type="submit"
            className="ai-chat-send"
            disabled={!inputValue.trim() || isTyping}
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
