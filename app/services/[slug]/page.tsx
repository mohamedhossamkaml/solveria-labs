import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, PenTool, Code2, Database, BrainCircuit, CheckCircle2 } from 'lucide-react';
import './page.css';

const servicesData: Record<string, any> = {
  "ui-ux-systems": {
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
  },
  "ai-integration": {
    title: "AI Integration & Automation",
    icon: BrainCircuit,
    description: "We seamlessly embed advanced machine learning models directly into your business workflows, turning raw data into autonomous, actionable intelligence.",
    content: "The true power of Artificial Intelligence lies in its practical application. We don't just build solitary AI models; we integrate them deeply into your existing infrastructure. Whether you need a highly specific Natural Language Processing (NLP) agent capable of autonomous customer resolution, predictive analytics engines that forecast market trends, or Generative AI pipelines that automate content creation, our team engineers robust solutions. We focus heavily on data security, model accuracy, and latency, ensuring your AI deployments are reliable, scalable, and inherently valuable to your core operations.",
    features: [
      "Custom LLM Fine-Tuning & Deployment",
      "Retrieval-Augmented Generation (RAG) Systems",
      "Predictive Analytics & Forecasting Models",
      "Autonomous Agent & Chatbot Architecture",
      "Automated Optical Character Recognition (OCR) Pipelines"
    ],
    tech: ["Python", "TensorFlow", "PyTorch", "LangChain", "OpenAI APIs"]
  },
  "web-development": {
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
  },
  "database-infrastructure": {
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
  }
};

export async function generateStaticParams() {
  return [
    { slug: 'ui-ux-systems' },
    { slug: 'ai-integration' },
    { slug: 'web-development' },
    { slug: 'database-infrastructure' }
  ];
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug];

  if (!service) {
    notFound();
  }

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
        <div className="heading-line center-line"></div>
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
