"use client";
import { useState } from 'react';
import { Send } from 'lucide-react';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const resp = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!resp.ok) throw new Error('Submission failed');

      setStatus("success");
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="contact-form-container card glass">
      {status === 'success' ? (
        <div className="success-message">
          <h3>Message Sent!</h3>
          <p>Thank you for reaching out. The Solveria Labs team will get back to you shortly.</p>
          <button onClick={() => setStatus('idle')} className="btn-primary mt-4">Send Another Message</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Project Details</label>
            <textarea
              id="message"
              required
              rows={5}
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn-primary submit-btn"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
            <Send size={18} />
          </button>

          {status === 'error' && (
            <p className="error-message">Something went wrong. Please try again later.</p>
          )}
        </form>
      )}
    </div>
  );
}
