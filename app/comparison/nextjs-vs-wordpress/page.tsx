import Link from 'next/link';
import { ArrowLeft, Server, Smartphone, Zap, Shield, Rocket, Activity } from 'lucide-react';
import './page.css';

export default function ComparisonPage() {
  return (
    <main className="page-container comparison-page">
      <Link href="/services" className="back-link">
        <ArrowLeft size={18} /> Back to Services
      </Link>

      <header className="page-header">
        <h1 className="page-title">
          <span className="text-gradient">Next.js + Node.js</span> vs WordPress
        </h1>
        <p className="page-subtitle">A technical deep dive into performance, security, and scalability architectures to help you choose the right stack for your business.</p>
        <div className="heading-line center-line"></div>
      </header>

      <section className="comparison-content">
        <div className="comparison-intro">
          <p>
            When building a digital platform, selecting the right technology stack is the most critical decision a business can make. 
            For decades, WordPress has been the reigning champion of rapid Content Management System (CMS) deployments. 
            However, as applications demand higher compute power, dynamic real-time features, and impenetrable security, 
            the modern ecosystem has pivoted sharply towards decoupled architectures like Next.js mapped to powerful backend environments like Node.js.
          </p>
          <p>
            Here is our technical comparison of when to use which infrastructure.
          </p>
        </div>

        <div className="comparison-grid">
          {/* Next.js Column */}
          <div className="compare-card nextjs-card">
            <div className="compare-header">
              <div className="icon-wrapper primary-glow">
                <Server size={40} />
              </div>
              <h2>Next.js + Node.js</h2>
              <span className="badge primary-badge">Enterprise Grade</span>
            </div>
            
            <div className="compare-body">
              <p className="compare-summary">
                A bespoke, high-performance architecture utilized by tech giants like Netflix, TikTok, and Meta.
                It builds dynamic, server-rendered applications that execute flawlessly.
              </p>

              <div className="feature-block">
                <h4><Rocket size={18}/> Performance & Speed</h4>
                <p>Delivers unmatched loading speeds via Server-Side Rendering (SSR) and Static Site Generation (SSG). Next.js automatically optimizes images, scripts, and fonts, heavily reducing time-to-interactive latency.</p>
              </div>

              <div className="feature-block">
                <h4><Shield size={18}/> Security</h4>
                <p>Highly secure. Because it lacks a traditional monolithic database attachment (decoupled frontend/backend), surface areas for attacks like SQL injection are drastically minimized.</p>
              </div>

              <div className="feature-block">
                <h4><Activity size={18}/> Scalability</h4>
                <p>Infinitely scalable. By deploying on edge networks (like Vercel or AWS), the application seamlessly distributes global compute load. It effortlessly handles millions of concurrent users without servers crashing.</p>
              </div>
              
              <ul className="pros-list">
                <li>Ultimate customizability and design flexibility.</li>
                <li>Pristine SEO performance and web vitals.</li>
                <li>Best for web apps, SaaS, and heavy platforms.</li>
              </ul>
            </div>
          </div>

          {/* WordPress Column */}
          <div className="compare-card wp-card">
            <div className="compare-header">
              <div className="icon-wrapper secondary-glow">
                <Smartphone size={40} />
              </div>
              <h2>WordPress</h2>
              <span className="badge secondary-badge">Rapid CMS Deployment</span>
            </div>
            
            <div className="compare-body">
              <p className="compare-summary">
                The absolute standard for user-friendly content publishing. Powering over 40% of the web, 
                it is perfect for traditional marketing sites and standard blogs.
              </p>

              <div className="feature-block">
                <h4><Zap size={18}/> Ease of Use</h4>
                <p>Famous for its "out-of-the-box" capability. Non-technical users can easily publish content, change basic layouts, and manage media using intuitive visual builders like Elementor.</p>
              </div>

              <div className="feature-block">
                <h4><Server size={18}/> Ecosystem</h4>
                <p>Possesses a massive ecosystem of pre-built plugins and themes. If you need a standard feature (like an SEO scanner or a contact form), there is likely an affordable plugin available instantly.</p>
              </div>

              <div className="feature-block">
                <h4><Shield size={18}/> Maintenance</h4>
                <p>Requires continuous, active maintenance. Because of its massive open-source plugin reliance, sites must be frequently updated to patch critical vulnerabilities and prevent plugin conflicts.</p>
              </div>
              
              <ul className="pros-list">
                <li>Cost-effective initial setup.</li>
                <li>Incredible for editorial, news, and blogging.</li>
                <li>Huge community and out-of-the-box tools.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="conclusion-block">
          <h2>The Verdict</h2>
          <p>
            If you need a <strong>standard landing page or a blog</strong> that your marketing team can manage entirely without developer intervention, <strong>WordPress</strong> remains a phenomenal choice. 
          </p>
          <p>
            However, if you are building a <strong>digital product, a complex web application, a scalable E-commerce platform, or dealing with intelligent AI integrations</strong>, the <strong>Next.js + Node.js</strong> architecture is the undeniable modern standard.
          </p>
        </div>
      </section>

      <section className="service-cta">
        <h2>Still unsure which is best for you?</h2>
        <Link href="/contact" className="deploy-btn glow-effect">
          Consult With Our Architects
        </Link>
      </section>
    </main>
  );
}
