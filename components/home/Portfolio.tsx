"use client";
import { motion } from 'framer-motion';

export default function Portfolio() {
    return (
        <section id="portfolio" className="section" style={{ background: 'rgba(255,255,255,0.015)', padding: '6rem 2rem', borderRadius: '20px' }}>
            <div className="section-header">
                <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
                <p className="section-description">A glimpse into the systems we've revolutionized.</p>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                    textAlign: 'center',
                    padding: '5rem 2rem',
                    background: 'rgba(var(--primary-rgb), 0.03)',
                    borderRadius: '16px',
                    border: '1px solid var(--card-border)',
                    backdropFilter: 'blur(12px)',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Glow accent */}
                <div style={{
                    position: 'absolute',
                    top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '300px', height: '300px',
                    background: 'radial-gradient(circle, rgba(var(--primary-rgb), 0.08), transparent 70%)',
                    pointerEvents: 'none',
                }} />
                <h3
                    className="text-gradient font-orbitron"
                    style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', position: 'relative', zIndex: 1 }}
                >
                    Coming Soon
                </h3>
                <p style={{ color: 'var(--muted-foreground)', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    We're currently curating our finest projects to showcase here. Check back shortly!
                </p>
            </motion.div>
        </section>
    );
}