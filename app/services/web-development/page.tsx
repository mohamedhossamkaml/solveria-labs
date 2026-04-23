import Link from 'next/link';
import { ArrowLeft, Code2, CheckCircle2 } from 'lucide-react';
import '../details.css';

export default function WebDevelopmentPage() {
  const service = {
    title: "Web Development",
    icon: Code2,
    description: "From landing pages to sprawling enterprise applications, we build fast, accessible, and responsive web properties with flawless execution.",
    content: "We handle the full spectrum of web development, engineering digital experiences that are lightning-fast, highly secure, and structurally sound. Our front-end team leverages the latest capabilities of React and Next.js to provide Server-Side Rendering (SSR) and seamless Single Page Application (SPA) experiences. Meanwhile, our backend developers architect robust REST and GraphQL APIs that serve your applications with near-zero latency. We maintain strict CI/CD pipelines, comprehensive testing coverage, and rigorous code reviews to ensure that what we deploy is virtually indestructible under peak load.",
    features: [
      "Next.js Full-Stack Application Engineering",
      "Headless CMS Integration & Architecture",
      "High-Performance E-commerce Solutions",
      "Progressive Web App (PWA) Development",
      "Comprehensive API Design & Integration"
    ],
    tech: ["Next.js", "React", "Node.js", "TypeScript", "GraphQL"]
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
        <h2>Ready to build your web platform?</h2>
        <Link href="/contact" className="deploy-btn glow-effect">
          Discuss Your Project
        </Link>
      </section>
    </main>
  );
}
