'use client';

import { useState } from 'react';

const coursesData = [
  {
    id: 'base-it',
    title: 'Informatica di Base',
    category: 'Base',
    icon: '💻',
    target: 'Tutte le età / Principianti',
    description: 'Impara ad utilizzare il computer da zero: navigare su internet in sicurezza, gestire file, usare la posta elettronica ed i principali programmi di scrittura e fogli di calcolo.',
    difficulty: 'Base'
  },
  {
    id: 'icdl',
    title: 'Patente Europea (ICDL / ECDL)',
    category: 'Base',
    icon: '📜',
    target: 'Studenti / Lavoratori',
    description: 'Preparazione completa per il superamento di tutti i moduli dell\'esame ICDL. Ottieni la certificazione informatica riconosciuta a livello europeo.',
    difficulty: 'Intermedio'
  },
  {
    id: 'grafica',
    title: 'Grafica Pubblicitaria & Digital Design',
    category: 'Design & 3D',
    icon: '🎨',
    target: 'Ragazzi / Adulti',
    description: 'Dai sfogo alla tua creatività. Impara a progettare loghi, poster, volantini ed elementi digitali utilizzando software come Adobe Photoshop e Illustrator.',
    difficulty: 'Intermedio'
  },
  {
    id: 'cad',
    title: 'Disegno CAD & Progettazione Tecnica',
    category: 'Design & 3D',
    icon: '📐',
    target: 'Studenti / Professionisti',
    description: 'Corso pratico di disegno assistito da computer. Impara a realizzare planimetrie, prospetti e modelli tecnici bidimensionali e tridimensionali.',
    difficulty: 'Avanzato'
  },
  {
    id: 'scultura-3d',
    title: 'Scultura 3D & Modellazione Organica',
    category: 'Design & 3D',
    icon: '🗿',
    target: 'Tutte le età',
    description: 'Modella oggetti e personaggi in tre dimensioni come se stessi usando la creta. Uso di Nomad Sculpt e principali software professionali di scultura digitale.',
    difficulty: 'Intermedio'
  },
  {
    id: 'modellazione-ai',
    title: 'Modellazione AI Generativa',
    category: 'AI & Tech',
    icon: '🤖',
    target: 'Appassionati / Professionisti',
    description: 'Scopri come utilizzare l\'Intelligenza Artificiale per generare modelli 3D complessi, texture realistiche e risorse pronte per videogiochi ed animazioni.',
    difficulty: 'Avanzato'
  },
  {
    id: 'ai-base',
    title: 'Intelligenza Artificiale per Tutti',
    category: 'AI & Tech',
    icon: '🧠',
    target: 'Tutte le età',
    description: 'Introduzione all\'uso dei modelli linguistici (ChatGPT, Gemini) e generatori d\'immagini. Impara il prompt engineering per migliorare studio e lavoro.',
    difficulty: 'Base'
  },
  {
    id: 'cyber-safety',
    title: 'Cyber Sicurezza & Anti-Bullismo',
    category: 'Sicurezza',
    icon: '🛡️',
    target: 'Bambini / Genitori / Scuole',
    description: 'Come navigare in sicurezza, proteggere i propri dati, riconoscere le truffe online e difendersi da fenomeni di cyberbullismo e pericoli dei social network.',
    difficulty: 'Base'
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    category: 'Business & Web',
    icon: '📱',
    target: 'Ragazzi / Imprenditori',
    description: 'Crea contenuti virali e gestisci community su Instagram, Facebook e TikTok. Pianificazione editoriale, algoritmi e crescita organica.',
    difficulty: 'Intermedio'
  },
  {
    id: 'marketing',
    title: 'Digital Marketing & ADS',
    category: 'Business & Web',
    icon: '📈',
    target: 'Lavoratori / Imprenditori',
    description: 'Impara a vendere prodotti e servizi online. Progettazione di campagne pubblicitarie mirate su Google Ads, Meta (Facebook/Instagram) Ads e analisi dati.',
    difficulty: 'Avanzato'
  },
  {
    id: 'web-dev',
    title: 'Sviluppo Web Vetrina & E-Commerce',
    category: 'Business & Web',
    icon: '🌐',
    target: 'Ragazzi / Professionisti',
    description: 'Progetta architetture web ed e-commerce di ultima generazione. Impara a sviluppare web application ultra-veloci e reattive usando Next.js, Vite ed Angular, distribuendole su cloud edge serverless per eliminare i tradizionali costi di hosting.',
    difficulty: 'Intermedio'
  },
  {
    id: 'gameplay',
    title: 'Game Play & Game Design',
    category: 'AI & Tech',
    icon: '🎮',
    target: 'Bambini / Ragazzi',
    description: 'Scopri cosa c\'è dietro i tuoi giochi preferiti. Impariamo le logiche di gioco, lo scripting di base, la narrazione e i principi di programmazione dei videogame.',
    difficulty: 'Base'
  }
];

const categories = ['Tutti', 'Base', 'Design & 3D', 'AI & Tech', 'Sicurezza', 'Business & Web'];

function getCourseIcon(id) {
  switch (id) {
    case 'base-it':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case 'icdl':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    case 'grafica':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11.571V9a4 4 0 00-8 0v2.571c0 2.917.818 5.647 2.246 7.972m8.503-9.371V9a4 4 0 00-8 0v2.571c0 2.917.818 5.647 2.246 7.972m8.503-9.371C17.01 6.802 18.02 3.52 19.764.75m3.44 2.04l-.054.09A13.916 13.916 0 0015 8.43v2.57c0 2.917-.818 5.647-2.246 7.972m8.503-9.371V11.57c0 2.917-.818 5.647-2.246 7.972" />
        </svg>
      );
    case 'cad':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      );
    case 'scultura-3d':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    case 'modellazione-ai':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 'ai-base':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    case 'cyber-safety':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case 'social-media':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
    case 'marketing':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
    case 'web-dev':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case 'gameplay':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState('Tutti');

  const filteredCourses = activeCategory === 'Tutti'
    ? coursesData
    : coursesData.filter(course => course.category === activeCategory);

  const handleSelectCourse = (courseName) => {
    // Dispatch custom event to let ContactForm update its state
    const event = new CustomEvent('select-course', { detail: { courseName } });
    window.dispatchEvent(event);

    const contactFormTextArea = document.getElementById('messaggio');
    if (contactFormTextArea) {
      contactFormTextArea.value = `Salve, vorrei ricevere maggiori informazioni riguardo al corso di formazione: "${courseName}".`;
    }

    const contactSection = document.getElementById('contatti');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="corsi" className="courses-section">
      <div className="tech-grid"></div>
      <div className="container">
        <div className="section-header animate-fade-in-up">
          <span className="section-badge">Formatore Professionista</span>
          <h2>Corsi di Formazione <span className="gradient-text">per tutte le età</span></h2>
          <p className="section-subtitle">
            Crediamo nella formazione continua e accessibile a chiunque. I nostri corsi vengono svolti sia online in DAD che in presenza presso scuole, enti privati o statali, e nascono da forti collaborazioni strette sul territorio con le principali scuole di formazione locali.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="filters-container">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Courses grid */}
        <div className="courses-grid">
          {filteredCourses.map((course, index) => (
            <div key={course.id} style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div 
                className="course-card glass-panel animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <div className="course-card-header">
                  <div className="course-icon">{getCourseIcon(course.id)}</div>
                  <div className="course-badges">
                    <span className="badge category-badge">{course.category}</span>
                    <span className={`badge diff-badge ${course.difficulty.toLowerCase()}`}>
                      {course.difficulty}
                    </span>
                  </div>
                </div>
                
                <div className="course-card-content">
                  <h3>{course.title}</h3>
                  <p className="target-text"><strong>Destinatari:</strong> {course.target}</p>
                  <p className="description-text">{course.description}</p>
                </div>

                <div className="course-card-footer">
                  <button 
                    onClick={() => handleSelectCourse(course.title)}
                    className="btn-card-action"
                  >
                    Richiedi Info
                    <span className="arrow">➔</span>
                  </button>
                </div>
                <div className="led-bar-fuchsia"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .courses-section {
          padding: 100px 0;
          background-color: var(--bg-primary);
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 5;
        }

        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 50px auto;
        }

        .section-badge {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          display: inline-block;
          margin-bottom: 12px;
          border: 1px solid rgba(var(--primary-rgb), 0.3);
          padding: 4px 12px;
          border-radius: 50px;
          background: rgba(var(--primary-rgb), 0.05);
        }

        h2 {
          font-size: 2.6rem;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        /* Filter buttons */
        .filters-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 48px;
        }

        .filter-btn {
          padding: 10px 20px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 50px;
          cursor: pointer;
          transition: var(--transition-fast);
          backdrop-filter: blur(8px);
        }

        .filter-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-hover);
          transform: translateY(-1px);
        }

        .filter-btn.active {
          color: white;
          background: linear-gradient(135deg, var(--secondary), rgba(var(--secondary-rgb), 0.8));
          border-color: var(--secondary);
          box-shadow: 0 4px 15px rgba(17, 109, 255, 0.3);
        }

        /* Courses grid */
        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
        }

        .course-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 24px;
          position: relative;
          border-bottom: 1px solid var(--border-color);
          transition: var(--transition-smooth);
          --laser-color: #ff00ff;
          z-index: 2;
        }

        .led-bar-fuchsia {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, #ff00ff, transparent);
          opacity: 0.25;
          box-shadow: 0 0 8px rgba(255, 0, 255, 0.3);
          transition: var(--transition-smooth);
        }

        /* Hover & Glow */
        .course-card:hover {
          border-color: rgba(255, 0, 255, 0.3);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 0, 255, 0.15);
        }

        .course-card:hover .led-bar-fuchsia {
          opacity: 1;
          height: 4px;
          box-shadow: 0 0 18px rgba(255, 0, 255, 0.9);
        }

        .course-icon {
          width: 54px;
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.02);
          color: var(--secondary);
          transition: var(--transition-smooth);
          box-shadow: 0 0 10px rgba(17, 109, 255, 0.1);
        }

        .course-icon :global(.icon-svg) {
          width: 26px;
          height: 26px;
          stroke-width: 2px;
          transition: var(--transition-smooth);
          stroke: var(--secondary);
        }

        .course-card:hover .course-icon {
          background: rgba(255, 0, 255, 0.08);
          border-color: #ff00ff;
          color: #ff00ff;
          box-shadow: 0 0 20px rgba(255, 0, 255, 0.6);
        }

        .course-card:hover :global(.icon-svg) {
          filter: drop-shadow(0 0 6px rgba(255, 0, 255, 0.8));
          stroke: #ff00ff;
        }

        .course-badges {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
        }

        .badge {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .category-badge {
          background: rgba(17, 109, 255, 0.1);
          color: var(--secondary);
          border: 1px solid rgba(17, 109, 255, 0.2);
        }

        .diff-badge.base {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          border: 1px solid rgba(34, 197, 94, 0.2);
        }

        .diff-badge.intermedio {
          background: rgba(234, 179, 8, 0.1);
          color: #eab308;
          border: 1px solid rgba(234, 179, 8, 0.2);
        }

        .diff-badge.avanzato {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        .course-card-content {
          flex-grow: 1;
        }

        .course-card-content h3 {
          font-size: 1.3rem;
          color: var(--text-primary);
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .target-text {
          font-size: 0.85rem;
          color: var(--primary);
          margin-bottom: 10px;
        }

        .description-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .course-card-footer {
          margin-top: 24px;
          border-top: 1px solid var(--border-color);
          padding-top: 16px;
        }

        .btn-card-action {
          width: 100%;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: transparent;
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          font-weight: 600;
          font-size: 0.9rem;
          border-radius: 8px;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .btn-card-action:hover {
          background: rgba(255, 255, 255, 0.03);
          border-color: var(--border-hover);
          color: var(--primary);
        }

        .btn-card-action .arrow {
          transition: transform 0.2s ease;
        }

        .btn-card-action:hover .arrow {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 2.1rem;
          }
        }
      `}</style>
    </section>
  );
}
