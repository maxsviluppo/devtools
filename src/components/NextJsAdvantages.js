'use client';

import { useState, useEffect } from 'react';

const slidesData = [
  {
    id: 1,
    title: 'Web Engineering & Next.js',
    subtitle: 'La Rivoluzione del Web',
    desc: 'Next.js rappresenta lo standard di riferimento per lo sviluppo web professionale. Combina la potenza di React con ottimizzazioni automatiche delle prestazioni e del rendering per offrire un\'esperienza utente straordinaria.',
    points: ['Rendering ibrido intelligente', 'Ottimizzazione automatica delle immagini', 'Caricamento istantaneo delle pagine']
  },
  {
    id: 2,
    title: 'Server-Side Rendering (SSR)',
    subtitle: 'Prestazioni Dinamiche al Massimo',
    desc: 'Le pagine vengono generate lato server ad ogni richiesta. Questo assicura che l\'utente e i motori di ricerca ricevano immediatamente il codice HTML completo, riducendo drasticamente il tempo di prima interazione.',
    points: ['Dati sempre aggiornati in tempo reale', 'Miglioramento del tempo di caricamento percepito', 'Ideale per applicazioni web complesse']
  },
  {
    id: 3,
    title: 'Static Site Generation (SSG)',
    subtitle: 'Velocità e Sicurezza Assolute',
    desc: 'Pre-compiliamo le pagine durante la build per servirle istantaneamente tramite CDN globali. Il sito risponde in millisecondi ed è virtualmente inattaccabile, poiché non dipende da database live esposti.',
    points: ['Caricamento fulmineo da edge cloud', 'Resistenza totale a picchi di traffico', 'Zero costi di hosting tradizionali']
  },
  {
    id: 4,
    title: 'Ottimizzazione SEO Integrata',
    subtitle: 'Visibilità Garantita su Google',
    desc: 'Next.js genera metadati dinamici, sitemap e tag semantici in modo nativo. Grazie al caricamento ultra-veloce e al rendering lato server, i motori di ricerca posizionano i nostri siti al vertice dei risultati.',
    points: ['Punteggi Lighthouse vicini al 100%', 'Ottimizzazione automatica dei Core Web Vitals', 'Indicizzazione impeccabile di tutti i contenuti']
  },
  {
    id: 5,
    title: 'Architettura Edge Serverless',
    subtitle: 'Distribuzione Globale Cloud',
    desc: 'Ospitiamo i siti su CDN geograficamente distribuite in tutto il mondo (Vercel Edge, Netlify). La vicinanza fisica ai server riduce a zero la latenza e garantisce una stabilità del 99.99%.',
    points: ['Nessuna manutenzione server richiesta', 'Espansione automatica delle risorse', 'Sicurezza perimetrale integrata']
  },
  {
    id: 6,
    title: 'Sicurezza Avanzata Jamstack',
    subtitle: 'Protezione Totale dai Cyber Attacchi',
    desc: 'Separando il frontend statico dalle API di backend, eliminiamo le vulnerabilità tradizionali di CMS come WordPress. Niente SQL injection, niente pagine di login vulnerabili, massima conformità GDPR.',
    points: ['Nessun server live esposto pubblicamente', 'Autenticazione e pagamenti sicuri con Stripe/Auth0', 'Backup e versionamento continui del codice']
  },
  {
    id: 7,
    title: 'User Experience (UX) Impeccabile',
    subtitle: 'Transizioni Fluide in Stile App',
    desc: 'La navigazione tra le pagine avviene senza ricaricamento del browser, garantendo un\'esperienza fluida tipica delle applicazioni desktop o mobile native, arricchita da micro-animazioni spettacolari.',
    points: ['Prefetch automatico dei link visibili', 'Navigazione istantanea senza attese', 'Layout adattivi ad alte prestazioni']
  },
  {
    id: 8,
    title: 'Predisposizione all\'AI & Futuro',
    subtitle: 'Integrazione Tecnologica 2026',
    desc: 'Progettato per integrarsi con modelli di intelligenza artificiale generativa e motori grafici 3D (Three.js/WebGL), Next.js è la base perfetta per applicazioni interattive di ultima generazione.',
    points: ['Streaming di risposte AI in tempo reale', 'Supporto nativo per moduli WebGL complessi', 'Struttura modulare pronta a scalare']
  }
];

const liveWebsites = [
  { name: 'ASPU', url: 'https://www.aspu.it' },
  { name: 'Monica Fiocco', url: 'https://www.monicafiocco.it' },
  { name: 'Web News', url: 'https://template-web-news.vercel.app/' }
];

export default function NextJsAdvantages() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeSiteIdx, setActiveSiteIdx] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePrev = () => {
    setIsPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  return (
    <section className="advantages-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Perché Next.js?</span>
          <h2>Web Engineering <span className="gradient-text">ad Alte Prestazioni</span></h2>
          <p className="section-subtitle">
            Sviluppiamo siti web ed e-commerce che uniscono velocità insuperabile, sicurezza blindata e visibilità SEO strategica. Scopri i vantaggi della nostra tecnologia.
          </p>
        </div>

        <div className="slider-wrapper glass-panel">
          <div className="slider-content">
            {/* Left Column: Text Info */}
            <div className="text-column">
              <span className="slide-badge">{slidesData[currentSlide].subtitle}</span>
              <h3>{slidesData[currentSlide].title}</h3>
              <p className="slide-desc">{slidesData[currentSlide].desc}</p>
              
              <ul className="points-list">
                {slidesData[currentSlide].points.map((point, index) => (
                  <li key={index}>
                    <span className="check-icon">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="slider-controls">
                <button onClick={handlePrev} className="control-btn" aria-label="Slide precedente">◀</button>
                <span className="slide-counter">
                  {currentSlide + 1} / {slidesData.length}
                </span>
                <button onClick={handleNext} className="control-btn" aria-label="Prossima slide">▶</button>
                
                <button 
                  onClick={() => setIsPlaying(!isPlaying)} 
                  className={`play-pause-btn ${isPlaying ? 'active' : ''}`}
                >
                  {isPlaying ? 'Auto-Play ON' : 'Auto-Play OFF'}
                </button>
              </div>
            </div>

            {/* Right Column: Live Mockup Browser with Orange backlight */}
            <div className="image-column">
              <div className="browser-mockup">
                {/* Backlight Orange Glow */}
                <div className="orange-backlight"></div>

                {/* macOS top window header */}
                <div className="browser-header">
                  <div className="window-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  
                  {/* Address bar displaying current site URL */}
                  <div className="address-bar">
                    <span className="lock-icon">🔒</span>
                    <span className="url-text">{liveWebsites[activeSiteIdx].url}</span>
                  </div>
                </div>

                {/* Tab selector */}
                <div className="browser-tabs">
                  {liveWebsites.map((site, index) => (
                    <button
                      key={index}
                      className={`tab-btn ${activeSiteIdx === index ? 'active' : ''}`}
                      onClick={() => setActiveSiteIdx(index)}
                    >
                      {site.name}
                    </button>
                  ))}
                </div>

                {/* Website Frame Container */}
                <div className="frame-container">
                  <iframe
                    src={liveWebsites[activeSiteIdx].url}
                    title={liveWebsites[activeSiteIdx].name}
                    className="live-iframe"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-popups"
                  ></iframe>

                  {/* Floating external link button */}
                  <a
                    href={liveWebsites[activeSiteIdx].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link-fab"
                    title="Apri in un'altra finestra"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="fab-svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="progress-bar-container">
            <div 
              className="progress-bar" 
              style={{ 
                width: `${((currentSlide + 1) / slidesData.length) * 100}%`,
                transition: 'width 0.5s ease-in-out'
              }}
            ></div>
          </div>
        </div>

        {/* Bullets indicator */}
        <div className="bullets-container">
          {slidesData.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => {
                setIsPlaying(false);
                setCurrentSlide(index);
              }}
              className={`bullet-btn ${currentSlide === index ? 'active' : ''}`}
              aria-label={`Vai alla slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .advantages-section {
          padding: 100px 0;
          background-color: var(--bg-primary);
          position: relative;
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

        .slider-wrapper {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--border-color);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .slider-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 520px;
        }

        .text-column {
          padding: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .slide-badge {
          font-size: 0.85rem;
          color: var(--primary);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
          display: block;
        }

        .text-column h3 {
          font-size: 2rem;
          color: var(--text-primary);
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .slide-desc {
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }

        .points-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 35px;
        }

        .points-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .check-icon {
          color: var(--primary);
          font-weight: bold;
          font-size: 1.1rem;
        }

        .slider-controls {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: auto;
        }

        .control-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.02);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .control-btn:hover {
          background: var(--secondary);
          border-color: var(--secondary);
          transform: scale(1.05);
        }

        .slide-counter {
          font-size: 0.9rem;
          color: var(--text-secondary);
          min-width: 60px;
          text-align: center;
        }

        .play-pause-btn {
          font-size: 0.8rem;
          padding: 6px 12px;
          border-radius: 20px;
          border: 1px solid var(--border-color);
          background: transparent;
          color: var(--text-secondary);
          cursor: pointer;
          transition: var(--transition-fast);
          margin-left: auto;
        }

        .play-pause-btn.active {
          border-color: var(--primary);
          color: var(--primary);
          background: rgba(255, 156, 90, 0.05);
        }

        .image-column {
          background: rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
          border-left: 1px solid var(--border-color);
          position: relative;
          overflow: hidden;
        }

        /* macOS Browser window mockup */
        .browser-mockup {
          width: 100%;
          height: 100%;
          min-height: 400px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: #111625;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          z-index: 2;
        }

        /* Orange LED backlight */
        .orange-backlight {
          position: absolute;
          inset: -10%;
          background: radial-gradient(circle, rgba(255, 156, 90, 0.22) 0%, transparent 65%);
          filter: blur(15px);
          z-index: 0;
          pointer-events: none;
          animation: pulse-glow 4s ease-in-out infinite alternate;
        }

        @keyframes pulse-glow {
          0% { opacity: 0.8; transform: scale(0.95); }
          100% { opacity: 1.1; transform: scale(1.05); }
        }

        .browser-header {
          background: #161c2e;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
          z-index: 3;
        }

        .window-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .dot.red { background: #ff5f56; }
        .dot.yellow { background: #ffbd2e; }
        .dot.green { background: #27c93f; }

        .address-bar {
          flex-grow: 1;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 6px;
          padding: 4px 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .url-text {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .browser-tabs {
          background: #121727;
          display: flex;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
          z-index: 3;
        }

        .tab-btn {
          flex: 1;
          padding: 8px 12px;
          font-size: 0.85rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.5);
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: center;
          border-right: 1px solid rgba(255, 255, 255, 0.03);
          transition: var(--transition-fast);
        }

        .tab-btn.active {
          color: white;
          background: #111625;
          border-bottom: 2px solid var(--primary);
        }

        .frame-container {
          flex-grow: 1;
          width: 100%;
          position: relative;
          background: white;
          z-index: 2;
        }

        .frame-container {
          flex-grow: 1;
          width: 100%;
          position: relative;
          background: white;
          z-index: 2;
        }

        .external-link-fab {
          position: absolute;
          bottom: 20px;
          right: 20px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--primary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(255, 156, 90, 0.4), 0 0 0 4px rgba(255, 156, 90, 0.15);
          transition: var(--transition-smooth);
          z-index: 20;
          text-decoration: none;
        }

        .external-link-fab:hover {
          background: var(--secondary);
          box-shadow: 0 6px 20px rgba(17, 109, 255, 0.5), 0 0 0 6px rgba(17, 109, 255, 0.2);
          transform: translateY(-2px);
        }

        .fab-svg {
          width: 20px;
          height: 20px;
          stroke: white;
        }

        .live-iframe {
          width: 100%;
          height: 100%;
          min-height: 380px;
          border: none;
          display: block;
        }

        .progress-bar-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.05);
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--secondary), var(--primary));
          box-shadow: 0 0 8px var(--secondary);
        }

        .bullets-container {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 30px;
        }

        .bullet-btn {
          width: 24px;
          height: 6px;
          border-radius: 3px;
          border: none;
          background: rgba(255, 255, 255, 0.15);
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .bullet-btn.active {
          background: var(--secondary);
          width: 48px;
          box-shadow: 0 0 8px rgba(17, 109, 255, 0.6);
        }

        /* Mobile adaptation */
        @media (max-width: 968px) {
          .slider-content {
            grid-template-columns: 1fr;
          }

          .text-column {
            padding: 30px;
            order: 2;
          }

          .image-column {
            padding: 20px;
            border-left: none;
            border-bottom: 1px solid var(--border-color);
            order: 1;
          }

          .browser-mockup {
            min-height: 720px;
          }

          .live-iframe {
            min-height: 680px;
          }

          h2 {
            font-size: 2.1rem;
          }
        }
      `}</style>
    </section>
  );
}
