import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Solveria <span>Labs</span></h3>
          <p>Building next-generation digital systems and experiences.</p>
        </div>
        <div className="footer-links">
          <h4>Explore</h4>
          <Link href="/about">About Us</Link>
          <Link href="/services">Our Services</Link>
          <Link href="/projects">Case Studies</Link>
          <Link href="/contact">Get in Touch</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Solveria Labs. All rights reserved.</p>
      </div>
    </footer>
  );
}
