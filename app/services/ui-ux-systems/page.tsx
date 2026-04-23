import Link from 'next/link';
import { ArrowLeft, PenTool, CheckCircle2 } from 'lucide-react';
import '../details.css';

export default function UIUXSystemsPage() {
  const service = {
    title: "UI/UX for Systems",
    icon: PenTool,
    description: "We design intuitive, data-driven user interfaces and seamless user experiences specifically tailored for complex digital systems.",
    content: "Our design philosophy goes far beyond surface-level aesthetics. When building heavy technical platforms, enterprise dashboards, or data-intensive applications, usability is paramount. We heavily employ user-centric research, rigorous wireframing, and iterative prototyping to ensure that your users can navigate vast amounts of information effortlessly. By utilizing design systems and component libraries tailored to your specific domain, we achieve visual consistency while optimizing performance. Our final deliverables systematically bridge the gap between design vision and engineering reality.",
    features: [
      "User-Centric Research & Persona Modeling",
      "Interactive High-Fidelity Prototyping",
      "Comprehensive Design System Architecture",
      "Data Visualization & Dashboard Design",
      "A/B Testing & Conversion Rate Optimization"
    ],
    tech: ["Figma", "Framer", "React Flow", "Tailwind CSS"]
  };

  const IconComponent = service.icon;

  return (
    <main className="page-container service-detail-page">
      <Link href="/services" className="back-link">
        <ArrowLeft size={18} /> Back to Services
      </Link>

      <header className="service-detail-header">
        <div className="service-detail-icon-wrapper">
          <IconComponent size={64} className="service-detail-icon" />
          <div className="icon-glow"></div>
        </div>
        <h1 className="service-detail-title">{service.title}</h1>
        <p className="service-detail-subtitle">{service.description}</p>
        <div className="center-line"></div>
      </header>

      <section className="service-detail-body">
        <div className="service-main-content">
          <h2>Overview</h2>
          <p>{service.content}</p>
        </div>

        <div className="service-sidebar">
          <div className="service-features-box">
            <h3>Key Capabilities</h3>
            <ul className="features-list">
              {service.features.map((feature: string, idx: number) => (
                <li key={idx}>
                  <CheckCircle2 size={18} className="feature-check" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="service-tech-box">
            <h3>Core Technologies</h3>
            <div className="tech-tags">
              {service.tech.map((techItem: string, idx: number) => (
                <span key={idx} className="tech-tag">{techItem}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="service-cta">
        <h2>Ready to upgrade your systems?</h2>
        <Link href="/contact" className="deploy-btn glow-effect">
          Discuss Your Project
        </Link>
      </section>
    </main>
  );
}
