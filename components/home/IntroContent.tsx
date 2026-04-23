"use client";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function IntroContent() {
    return (
        <section className="section pt-8 pb-8 mt-8 mb-8 text-center">
            <motion.div
                className="hero-content"
                style={{ margin: '0 auto', maxWidth: '900px' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Building Next-Generation
                    <br />
                    <span className="text-gradient">Digital Systems.</span>
                </motion.h1>

                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Solveria Labs is your elite freelance team specializing in cutting-edge websites, robust CMS, tailored databases, and intelligent AI integrations.
                </motion.p>

                <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <Link href="/contact" className="btn-primary">
                        Start Your Project <ArrowRight size={18} />
                    </Link>
                    <Link href="/projects" className="btn-secondary">
                        View Our Work
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}