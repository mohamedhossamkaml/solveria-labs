"use client";
import { motion } from 'framer-motion';
import { Monitor, Code2, Database, BrainCircuit, LayoutTemplate } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        title: "Landing Pages",
        description: "High-converting, stunning landing pages built to turn your visitors into customers.",
        icon: <LayoutTemplate size={28} />
    },
    {
        title: "Websites & CMS",
        description: "Custom websites with robust Content Management Systems for easy updates.",
        icon: <Monitor size={28} />
    },
    {
        title: "Systems & Platforms",
        description: "Complex web applications and scalable digital platforms built from scratch.",
        icon: <Code2 size={28} />
    },
    {
        title: "Databases",
        description: "Secure, optimized, and tailored database architectures for your growing data needs.",
        icon: <Database size={28} />
    },
    {
        title: "AI Integration",
        description: "Next-gen AI solutions seamlessly integrated to automate and supercharge your workflows.",
        icon: <BrainCircuit size={28} />
    }
];

export default function Services() {
    return (
        <section id="services" className="section">
            <div className="section-header">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Our <span className="text-gradient">Expertise</span>
                </motion.h2>
                <motion.p
                    className="section-description"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    We deliver end-to-end solutions designed to scale with your business ambition.
                </motion.p>
            </div>

            <div className="services-grid">
                {services.map((svc, idx) => (
                    <motion.div
                        key={idx}
                        className="service-card card glass"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                        <div className="service-icon-wrapper">
                            {svc.icon}
                        </div>
                        <h3 className="service-title">{svc.title}</h3>
                        <p className="service-description">{svc.description}</p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                style={{ textAlign: 'center', marginTop: '3rem' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <Link href="/services" className="btn-secondary">Explore All Services</Link>
            </motion.div>
        </section>

    );
}

