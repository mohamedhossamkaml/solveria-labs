"use client";
import './page.css';
import { motion } from 'framer-motion';
import { Monitor, Code2, Database, BrainCircuit, LayoutTemplate, ArrowRight } from 'lucide-react';
import Hero from '../components/home/Hero';
import IntroContent from '../components/home/IntroContent';
import Services from '../components/home/Services';
import Portfolio from '../components/home/Portfolio';
import ContactSection from '../components/home/ContactSection';

export default function Home() {


  return (
    <main>
      {/* Hero Section */}
      <Hero />
      {/* Intro Content Section */}
      <IntroContent />

      {/* Services Section */}
      <Services />
      {/* Portfolio Section */}
      <Portfolio />

      {/* Contact Section */}
      <ContactSection />

    </main>
  );
}
