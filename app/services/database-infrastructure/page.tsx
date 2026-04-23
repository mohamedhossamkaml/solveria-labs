import Link from 'next/link';
import { ArrowLeft, Database, CheckCircle2 } from 'lucide-react';
import '../details.css';

export default function DatabaseInfrastructurePage() {
  const service = {
    title: "Database & Infrastructure",
    icon: Database,
    description: "A foundation of robust infrastructure and database design, securing your data securely and efficiently to ensure zero downtime.",
    content: "An application is only as strong as the infrastructure supporting it. We design scalable cloud topologies and highly optimized database schemas uniquely suited to your operational requirements. Whether deploying serverless edge functions on Vercel, architecting microservices on AWS, or setting up complex, globally-distributed PostgreSQL clusters, we prioritize data integrity and instantaneous retrieval. We also implement rigorous disaster recovery protocols, automated horizontal scaling, and comprehensive monitoring solutions so you never have to worry about downtime or catastrophic data loss.",
    features: [
      "Relational & NoSQL Database Architecture",
      "Cloud Infrastructure Provisioning (AWS, GCP, Azure)",
      "Serverless & Edge Compute Deployment",
      "Microservices & Container Orchestration (Docker/Kubernetes)",
      "Automated CI/CD & DevOps Systems"
    ],
    tech: ["PostgreSQL", "Supabase", "AWS", "Docker", "Vercel"]
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
        <h2>Ready to optimize your infrastructure?</h2>
        <Link href="/contact" className="deploy-btn glow-effect">
          Discuss Your Project
        </Link>
      </section>
    </main>
  );
}
