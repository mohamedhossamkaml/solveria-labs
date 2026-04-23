import './page.css';
import ContactForm from '../../components/ContactForm';
import TechGlobe from '../../components/TechGlobe';
import { Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="page-container contact-page">
      <div className="page-header">
        <h1 className="page-title">Get in <span className="text-gradient">Touch</span></h1>
        <p className="page-subtitle">
          We collaborate with clients from everywhere in the world. As a fully remote team, our digital solutions transcend borders.
        </p>
      </div>

      <TechGlobe />

      <div className="contact-grid">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p className="contact-sub">Reach out directly or use our secure form.</p>
          
          <div className="info-cards">
            <div className="info-card glass">
              <Mail className="info-icon" />
              <div>
                <h3>Email</h3>
                <p>hello@solverialabs.com</p>
              </div>
            </div>
            
            <div className="info-card glass">
              <MapPin className="info-icon" />
              <div>
                <h3>Location</h3>
                <p>Global Remote (HQ: Tech District)</p>
              </div>
            </div>
            
            <div className="info-card glass">
              <Clock className="info-icon" />
              <div>
                <h3>Business Hours</h3>
                <p>Mon-Fri, 9:00 AM - 6:00 PM (EST)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
