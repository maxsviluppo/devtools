'use client';

import { useState } from 'react';

const innovationsData = [
  {
    id: 'ai-3d',
    title: 'AI 3D Asset Generator',
    status: 'In Sviluppo (Beta)',
    icon: '🔮',
    description: 'Un prototipo sperimentale che converte descrizioni testuali in modelli 3D pronti per l\'esportazione, ottimizzando i tempi di modellazione poligonale e texturing.',
    tech: ['Next.js', 'PyTorch', 'WebGL', 'Three.js'],
    category: 'Intelligenza Artificiale'
  },
  {
    id: 'headless-shop',
    title: 'Headless E-Commerce Engine',
    status: 'Attivo',
    icon: '⚡',
    description: 'Architettura ultra-rapida per il commercio elettronico. Tempi di caricamento inferiori a 0.5 secondi grazie a static regeneration e API serverless distribuite globale.',
    tech: ['React/Next.js', 'GraphQL', 'Stripe', 'Vercel Edge'],
    category: 'Web Technology'
  },
  {
    id: 'tours-3d',
    title: 'Virtual Tours WebGL',
    status: 'Attivo',
    icon: '🕶️',
    description: 'Esperienze immersive a 360 gradi accessibili direttamente da browser senza bisogno di visori esterni o installazioni. Ottimizzato per agenzie immobiliari ed esibizioni museali.',
    tech: ['Three.js', 'HTML5 Canvas', 'Tailored Shaders', 'WebXR'],
    category: 'Realtà Virtuale'
  },
  {
    id: 'smart-learning',
    title: 'Coding Sandbox per Scuole',
    status: 'Beta Test',
    icon: '🎒',
    description: 'Ambiente di sviluppo semplificato basato sul web che permette a bambini e ragazzi di programmare in tempo reale vedendo immediatamente i risultati dei propri algoritmi.',
    tech: ['Monaco Editor', 'NodeJS', 'WebSockets', 'Sandboxed JS'],
    category: 'EdTech'
  }
];

function getInnovationIcon(id) {
  switch (id) {
    case 'ai-3d':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      );
    case 'headless-shop':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 'tours-3d':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      );
    case 'smart-learning':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Innovations() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section id="innovazioni" className="innovations-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">R&D & Innovazione</span>
          <h2>Attività & <span className="gradient-text">Innovazioni Digitali</span></h2>
          <p className="section-subtitle">
            Nel nostro laboratorio non ci limitiamo a usare la tecnologia: la creiamo e la sperimentiamo. Ecco alcuni dei nostri progetti di ricerca, sviluppo e prototipi innovativi.
          </p>
        </div>

        <div className="innovations-grid">
          {innovationsData.map((item, index) => {
            const isExpanded = selectedId === item.id;
            return (
              <div key={item.id} style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div 
                  className={`innovation-card glass-panel animate-zoom-in ${isExpanded ? 'expanded' : ''}`}
                  style={{ animationDelay: `${index * 0.12}s`, height: '100%', display: 'flex', flexDirection: 'column' }}
                  onClick={() => setSelectedId(isExpanded ? null : item.id)}
                >
                  <div className="card-top">
                    <div className="icon-wrapper">{getInnovationIcon(item.id)}</div>
                    <span className={`status-badge ${item.status.toLowerCase().includes('attivo') ? 'active' : 'dev'}`}>
                      {item.status}
                    </span>
                  </div>
                  
                  <div className="card-info">
                    <span className="category-label">{item.category}</span>
                    <h3>{item.title}</h3>
                    <p className="description">{item.description}</p>
                  </div>

                  <div className="tech-tags">
                    {item.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>

                  <div className="card-action">
                    <span>{isExpanded ? 'Mostra Meno ▲' : 'Scopri di Più ▼'}</span>
                  </div>
                  
                  {isExpanded && (
                    <div className="specs-overlay animate-fade-in">
                      <h4>Specifiche Tecniche</h4>
                      <p>Questo progetto mira a ridefinire gli standard di velocità ed efficienza nello sviluppo web e 3D. Contattaci se desideri partecipare alle fasi di beta testing o implementare una soluzione simile per la tua azienda.</p>
                      <a href="#contatti" className="btn-spec-contact">
                        Chiedi una demo
                      </a>
                    </div>
                  )}
                  <div className="led-bar-orange"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .innovations-section {
          padding: 100px 0;
          background-color: var(--bg-secondary);
          position: relative;
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px auto;
        }

        .section-badge {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--secondary);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          display: inline-block;
          margin-bottom: 12px;
          border: 1px solid rgba(17, 109, 255, 0.3);
          padding: 4px 12px;
          border-radius: 50px;
          background: rgba(17, 109, 255, 0.05);
        }

        h2 {
          font-size: 2.6rem;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--secondary), var(--primary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        /* 4 boxes on a single line on desktop */
        .innovations-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .innovation-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          position: relative;
          border-bottom: 1px solid var(--border-color);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 2;
        }

        .led-bar-orange {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--primary), transparent);
          opacity: 0.25;
          box-shadow: 0 0 8px rgba(255, 156, 90, 0.3);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Hover & Glow */
        .innovation-card:hover {
          border-color: rgba(255, 156, 90, 0.3);
          transform: scale(1.02);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 156, 90, 0.15);
        }

        .innovation-card:hover .led-bar-orange {
          opacity: 1;
          height: 4px;
          box-shadow: 0 0 18px rgba(255, 156, 90, 0.9);
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .icon-wrapper {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.02);
          color: var(--secondary);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 0 10px rgba(17, 109, 255, 0.1);
        }

        .icon-svg {
          width: 26px;
          height: 26px;
          stroke-width: 2px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          stroke: var(--secondary);
        }

        .innovation-card:hover .icon-wrapper {
          background: rgba(255, 156, 90, 0.08);
          border-color: var(--primary);
          color: var(--primary);
          box-shadow: 0 0 20px rgba(255, 156, 90, 0.6);
        }

        .innovation-card:hover .icon-svg {
          filter: drop-shadow(0 0 6px rgba(255, 156, 90, 0.8));
          stroke: var(--primary);
        }

        .status-badge {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 50px;
        }

        .status-badge.active {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          border: 1px solid rgba(34, 197, 94, 0.2);
        }

        .status-badge.dev {
          background: rgba(255, 156, 90, 0.1);
          color: var(--primary);
          border: 1px solid rgba(255, 156, 90, 0.2);
        }

        .category-label {
          font-size: 0.8rem;
          color: var(--secondary);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 8px;
        }

        .card-info h3 {
          font-size: 1.2rem;
          margin-bottom: 12px;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 20px;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: auto;
          margin-bottom: 20px;
        }

        .tech-tag {
          font-size: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          padding: 3px 8px;
          border-radius: 4px;
          border: 1px solid var(--border-color);
        }

        .card-action {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--primary);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .specs-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 20, 32, 0.98);
          backdrop-filter: blur(8px);
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 10;
        }

        .specs-overlay h4 {
          font-size: 1.1rem;
          margin-bottom: 12px;
          color: var(--primary);
        }

        .specs-overlay p {
          font-size: 0.9rem;
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .btn-spec-contact {
          align-self: flex-start;
          padding: 8px 16px;
          font-size: 0.85rem;
          font-weight: 600;
          color: white;
          background: var(--secondary);
          border-radius: 6px;
          transition: var(--transition-fast);
        }

        .btn-spec-contact:hover {
          background: var(--primary);
          transform: translateY(-1px);
        }

        /* Responsive adaptation */
        @media (max-width: 1024px) {
          .innovations-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .innovations-grid {
            grid-template-columns: 1fr;
          }
          
          h2 {
            font-size: 2.1rem;
          }
        }
      `}</style>
    </section>
  );
}
