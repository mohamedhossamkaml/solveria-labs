"use client";
import ContactForm from '../ContactForm';

export default function ContactSection() {
    return (
        <section id="contact" className="section">
            <div className="section-header">
                <h2 className="section-title">Let's Build <span className="text-gradient">Together</span></h2>
                <p className="section-description">Ready to elevate your digital presence? Send us a message.</p>
            </div>
            <ContactForm />
        </section>
    );
}