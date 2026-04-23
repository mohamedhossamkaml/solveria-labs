"use client";
import Link from 'next/link';
import './page.css';
import { PenTool, Code2, Globe, Database, Server, Smartphone, Layers, Zap, BrainCircuit, Network, Palette, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import NeuralArchitecture from '../../components/NeuralArchitecture';
import NeuralEquation from '../../components/NeuralEquation';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: "easeOut" as const }
  })
};

export default function ServicesPage() {
  const offerings = [
    {
      icon: <PenTool size={32} />,
      title: "UI/UX for Systems",
      slug: "ui-ux-systems",
      body: "We design intuitive, data-driven user interfaces and seamless user experiences specifically tailored for complex digital systems. Our design architecture ensures that heavy technical platforms remain remarkably easy to navigate without sacrificing power."
    },
    {
      icon: <BrainCircuit size={32} />,
      title: "AI Integration & Automation",
      slug: "ai-integration",
      body: "We seamlessly embed advanced machine learning models directly into your business workflows. From intelligent NLP agents to predictive analytics, our end-to-end AI integrations transform raw data into autonomous, actionable intelligence."
    },
    {
      icon: <Code2 size={32} />,
      title: "Web Development",
      slug: "web-development",
      body: "From landing pages to sprawling enterprise applications, we build fast, accessible, and responsive web properties. We combine flawless frontend execution with robust backend logic to deliver digital products that scale effortlessly."
    },
    {
      icon: <Database size={32} />,
      title: "Database & Infrastructure",
      slug: "database-infrastructure",
      body: "Underpinning our web and system capabilities is a foundation of robust infrastructure and database design, securing your data securely and efficiently to ensure zero downtime and instant availability."
    }
  ];

  const stacks = [
    {
      icon: <Server size={40} />,
      iconClass: "nextjs-icon",
      title: "Next.js + Node.js",
      body: "Our primary stack for massive-scale applications requiring Server-Side Rendering (SSR), lightning-fast APIs, and unparalleled React performance."
    },
    {
      icon: <Globe size={40} />,
      iconClass: "python-icon",
      title: "Python",
      body: "Deployed for rigorous backend logic, deep data analytics, automation processes, and advanced Artificial Intelligence system integrations."
    },
    {
      icon: <Smartphone size={40} />,
      iconClass: "wp-icon",
      title: "WordPress",
      body: "The perfect, customizable Content Management System (CMS) solution for clients needing an easy-to-use publishing platform with robust SEO capabilities."
    },
    {
      icon: <Layers size={40} />,
      iconClass: "pg-icon",
      title: "PostgreSQL",
      body: "Our relational database of choice for production-grade systems. PostgreSQL delivers unmatched reliability, powerful query optimization, and full ACID compliance — built to handle complex data at any scale."
    },
    {
      icon: <Zap size={40} />,
      iconClass: "supabase-icon",
      title: "Supabase",
      body: "The open-source Firebase alternative we trust for rapid backend development. Supabase provides instant REST & GraphQL APIs, real-time subscriptions, authentication, and edge functions — all on top of PostgreSQL."
    },
    {
      icon: <BrainCircuit size={40} />,
      iconClass: "genai-icon",
      title: "Generative AI",
      body: "We integrate state-of-the-art generative AI models into your products — from autonomous content creation and image synthesis to code generation and intelligent search. We turn cutting-edge research into production-ready features that deliver real business value."
    },
    {
      icon: <Network size={40} />,
      iconClass: "rag-icon",
      title: "RAG Agents",
      body: "Retrieval-Augmented Generation agents that combine the reasoning power of LLMs with your proprietary knowledge base. Our RAG systems ingest, chunk, embed, and retrieve context in real time — enabling AI that answers accurately from your own documents, databases, and data sources."
    },
    {
      icon: <Palette size={40} />,
      iconClass: "figma-icon",
      title: "Figma",
      body: "Our design environment of choice for crafting pixel-perfect UI/UX. We use Figma's collaborative workspace to prototype, iterate, and hand off production-ready designs — ensuring a seamless bridge between design vision and engineering execution."
    }
  ];

  return (
    <main className="page-container services-page">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="page-title">Our <span className="text-gradient">Services</span></h1>
        <p className="page-subtitle">Comprehensive digital solutions designed to elevate your brand from concept to deployment.</p>
      </motion.div>

      {/* What We Offer */}
      <section className="services-section">
        <div className="section-heading">
          <h2>What We Offer</h2>
          <div className="heading-line"></div>
        </div>

        <div className="offerings-grid">
          {offerings.map((item, i) => (
            <motion.div
              key={item.title}
              className="offering-card"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <div className="offering-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <Link href={`/services/${item.slug}`} className="learn-more-btn">
                Learn More <ArrowRight className="lm-arrow" size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI Architecture */}
      <section className="services-section ai-arch-section">
        <div className="section-heading text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            AI <span className="text-gradient">Architecture</span> & Intelligence
          </motion.h2>
          <motion.p
            className="stack-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We deploy deep neural networks and custom model architectures tailored to your data landscape.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <NeuralArchitecture />
        </motion.div>

        <NeuralEquation />
      </section>

      {/* Tech Stack */}
      <section className="services-section tech-stack-section">
        <div className="section-heading text-center">
          <h2>Tech Stack Used</h2>
          <p className="stack-subtitle">We utilize industry-leading technologies to guarantee performance.</p>
        </div>

        <div className="stack-grid">
          {stacks.map((item, i) => (
            <motion.div
              key={item.title}
              className="stack-card"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <div className={`stack-icon ${item.iconClass}`}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <button className="learn-more-btn stack-lm">
                Learn More <ArrowRight className="lm-arrow" size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="services-section comparison-cta-section">
        <div className="comparison-cta-content">
          <h2>Choosing the Right Stack?</h2>
          <p>Deciding between a modern bespoke web application and a traditional CMS? Read our deep dive into performance, security, and scalability.</p>
          <Link href="/comparison/nextjs-vs-wordpress" className="deploy-btn glow-effect comparison-btn">
            See Next.js + Node.js vs WordPress
          </Link>
        </div>
      </section>
    </main>
  );
}
