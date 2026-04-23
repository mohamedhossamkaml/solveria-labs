import Link from 'next/link';
import { ArrowLeft, BrainCircuit, CheckCircle2 } from 'lucide-react';
import '../details.css';

export default function AIIntegrationPage() {
  const service = {
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
        <h2>Ready to integrate AI?</h2>
        <Link href="/contact" className="deploy-btn glow-effect">
          Discuss Your Project
        </Link>
      </section>
    </main>
  );
}
