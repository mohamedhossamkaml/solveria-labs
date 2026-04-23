import './page.css';

export default function ProjectsPage() {
  // Portfolio data hidden for coming soon state

  return (
    <main className="page-container">
      <div className="page-header">
        <h1 className="page-title">Case <span className="text-gradient">Studies</span></h1>
        <p className="page-subtitle">A deep dive into the robust systems and digital products we have engineered.</p>
      </div>

      <div style={{ 
        textAlign: 'center', 
        padding: '5rem 2rem', 
        background: 'rgba(255,255,255,0.03)', 
        borderRadius: '20px', 
        border: '1px solid var(--card-border)',
        backdropFilter: 'blur(12px)',
        marginTop: '3rem'
      }}>
        <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }} className="text-gradient">Coming Soon</h3>
        <p style={{ color: 'var(--muted-foreground)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          We're finalizing our case studies. Our portfolio gallery will be updated with deep dives into our recent systems and applications shortly!
        </p>
      </div>
    </main>
  );
}
