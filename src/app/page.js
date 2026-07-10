'use client';

import React, { useState, useEffect, useRef } from 'react';
import Courses from '@/components/Courses';
import Innovations from '@/components/Innovations';
import ContactForm from '@/components/ContactForm';
import NextJsAdvantages from '@/components/NextJsAdvantages';
import HeroCircuitEdge from '@/components/HeroCircuitEdge';

const brandJourney = [
  {
    step: '01',
    title: 'Sviluppo Web',
    subtitle: 'Il Tuo Punto di Partenza',
    icon: '🌐',
    description: 'Inizia il tuo viaggio con un sito web accattivante, veloce e funzionale. Sviluppiamo soluzioni che rispecchiano la tua identità e convertono i visitatori in clienti fedeli.'
  },
  {
    step: '02',
    title: 'Marketing Digitale',
    subtitle: 'Fatti Conoscere al Mondo',
    icon: '🚀',
    description: 'Una volta online, è il momento di farsi notare. Progettiamo campagne pubblicitarie mirate su Google e Social per aumentare la visibilità ed attirare pubblico profilato.'
  },
  {
    step: '03',
    title: 'Gestione Social',
    subtitle: 'Interazione e Community',
    icon: '💬',
    description: 'Creiamo una presenza forte e costante sui social network. Condividiamo contenuti di valore che costruiscono fiducia e mantengono attivo il dialogo con la tua community.'
  },
  {
    step: '04',
    title: 'Grafica Creativa',
    subtitle: 'Comunica in Modo Memorabile',
    icon: '📐',
    description: 'Dal logo all\'intera brand identity, progettiamo elementi di design digitale e cartaceo coerenti e di altissima qualità per distinguerti dai concorrenti.'
  },
  {
    step: '05',
    title: 'Modellazione 3D',
    subtitle: 'Dai Vita alle Idee',
    icon: '🕹️',
    description: 'Traduciamo progetti, prodotti ed ambienti in modelli tridimensionali fotorealistici utilizzando tecnologie all\'avanguardia.'
  },
  {
    step: '06',
    title: 'Successo Garantito',
    subtitle: 'Un Brand Forte e Unificato',
    icon: '🏆',
    description: 'Al termine del percorso avrai costruito un brand coeso, professionale e riconoscibile in ogni sua declinazione fisica o digitale.'
  }
];

const agencyServices = [
  { title: 'Siti Web Personalizzati con Demo Gratuita', desc: 'Siti vetrina, landing page promozionali ed e-commerce veloci e performanti.', icon: '💻' },
  { title: 'Ads & Web Marketing', desc: 'Campagne pubblicitarie mirate e ottimizzate per massimizzare il ritorno sull\'investimento.', icon: '🎯' },
  { title: 'Social Media Management', desc: 'Gestione strategica dei tuoi canali social con contenuti grafici e copy d\'impatto.', icon: '📱' },
  { title: 'Creazione Elementi 3D', desc: 'Progettazione e rendering di modelli tridimensionali ad alta fedeltà.', icon: '📦' },
  { title: 'Graphic Design & Brand', desc: 'Studio del logo, biglietti da visita, brochure e tutta la comunicazione visiva.', icon: '🎨' },
  { title: 'Ottimizzazione SEO', desc: 'Posizionamento sui motori di ricerca per essere trovati dai clienti giusti.', icon: '🔍' },
  { title: 'Data Entry & Management', desc: 'Gestione dati e database per garantire precisione e ordine alle tue informazioni.', icon: '🗄️' },
  { title: 'Project Management', desc: 'Coordinamento professionale di ogni fase dello sviluppo per garantire consegne puntuali.', icon: '👔' },
  { title: 'Packaging Design', desc: 'Creazione di confezioni e scatole accattivanti che valorizzano i tuoi prodotti.', icon: '🎁' },
  { title: 'Brand Identity Completa', desc: 'Costruzione dell\'immagine coordinata del tuo business da zero.', icon: '✨' },
  { title: 'Sicurezza 4.0', desc: 'Analisi predittiva delle minacce e protezione dei dati. L\'AI si unisce alla cybersecurity per blindare la tua azienda.', icon: '🛡️' },
  { title: 'Industria 5.0', desc: 'Integrazione uomo-macchina. L\'intelligenza artificiale si fonde con i processi gestionali e produttivi per potenziarne l\'efficienza.', icon: '⚙️' }
];

function getJourneyIcon(step) {
  switch (step) {
    case '01':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      );
    case '02':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case '03':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      );
    case '04':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      );
    case '05':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      );
    case '06':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      );
    default:
      return null;
  }
}

function getServiceIcon(title) {
  switch (title) {
    case 'Siti Web Personalizzati con Demo Gratuita':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case 'Ads & Web Marketing':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      );
    case 'Social Media Management':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      );
    case 'Creazione Elementi 3D':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      );
    case 'Graphic Design & Brand':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11.571V9a4 4 0 00-8 0v2.571c0 2.917.818 5.647 2.246 7.972m8.503-9.371V9a4 4 0 00-8 0v2.571c0 2.917.818 5.647 2.246 7.972m8.503-9.371C17.01 6.802 18.02 3.52 19.764.75m3.44 2.04l-.054.09A13.916 13.916 0 0015 8.43v2.57c0 2.917-.818 5.647-2.246 7.972m8.503-9.371V11.57c0 2.917-.818 5.647-2.246 7.972" />
        </svg>
      );
    case 'Ottimizzazione SEO':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
    case 'Data Entry & Management':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      );
    case 'Project Management':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      );
    case 'Packaging Design':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4M5 7.1L12 11M19 7.1L12 11" />
        </svg>
      );
    case 'Brand Identity Completa':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      );
    case 'Sicurezza 4.0':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case 'Industria 5.0':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Home() {
  const heroRef = useRef(null);
  const cubeRef = useRef(null);
  const [pos, setPos] = useState({ x: 100, y: 150 });
  const [currentShape, setCurrentShape] = useState('cube');

  useEffect(() => {
    let x = 100;
    let y = 150;
    let vx = 0.8;
    let vy = 0.6;
    
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let lastX = 0;
    let lastY = 0;
    let lastTime = Date.now();
    let animationFrameId;
    let renderX = x;
    let renderY = y;

    const handleMouseDown = (e) => {
      isDragging = true;
      startX = e.clientX - x;
      startY = e.clientY - y;
      lastX = e.clientX;
      lastY = e.clientY;
      lastTime = Date.now();
      vx = 0;
      vy = 0;
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const currentX = e.clientX;
      const currentY = e.clientY;
      const currentTime = Date.now();
      
      x = currentX - startX;
      y = currentY - startY;

      const dt = currentTime - lastTime || 1;
      vx = ((currentX - lastX) / dt) * 16.67;
      vy = ((currentY - lastY) / dt) * 16.67;
      
      // Limit maximum throw velocity to avoid extreme speeds
      const maxVel = 20;
      vx = Math.max(-maxVel, Math.min(maxVel, vx));
      vy = Math.max(-maxVel, Math.min(maxVel, vy));

      lastX = currentX;
      lastY = currentY;
      lastTime = currentTime;
      
      setPos({ x, y });
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleTouchStart = (e) => {
      isDragging = true;
      const touch = e.touches[0];
      startX = touch.clientX - x;
      startY = touch.clientY - y;
      lastX = touch.clientX;
      lastY = touch.clientY;
      lastTime = Date.now();
      vx = 0;
      vy = 0;
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      const touch = e.touches[0];
      const currentX = touch.clientX;
      const currentY = touch.clientY;
      const currentTime = Date.now();
      
      x = currentX - startX;
      y = currentY - startY;

      const dt = currentTime - lastTime || 1;
      vx = ((currentX - lastX) / dt) * 16.67;
      vy = ((currentY - lastY) / dt) * 16.67;

      const maxVel = 20;
      vx = Math.max(-maxVel, Math.min(maxVel, vx));
      vy = Math.max(-maxVel, Math.min(maxVel, vy));
      
      lastX = currentX;
      lastY = currentY;
      lastTime = currentTime;
      
      setPos({ x, y });
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    const cubeEl = cubeRef.current;
    if (cubeEl) {
      cubeEl.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      
      cubeEl.addEventListener('touchstart', handleTouchStart, { passive: false });
      cubeEl.addEventListener('touchmove', (e) => {
        e.preventDefault(); // Block page scroll when dragging cube
      }, { passive: false });
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    }

    const updatePosition = () => {
      if (!heroRef.current || !cubeRef.current) {
        animationFrameId = requestAnimationFrame(updatePosition);
        return;
      }
      const heroRect = heroRef.current.getBoundingClientRect();
      const boundaryWidth = heroRect.width;
      const boundaryHeight = heroRect.height;
      const isMobile = window.innerWidth <= 968;
      const cubeWidth = isMobile ? 150 : 200;
      const cubeHeight = isMobile ? 150 : 200;

      if (!isDragging) {
        // Friction effect (gradual deceleration like a billiard ball)
        const friction = 0.992;
        vx *= friction;
        vy *= friction;

        // Ensure minimum cruise speed so it keeps drifting
        const minSpeedX = 0.6;
        const minSpeedY = 0.4;
        if (Math.abs(vx) < minSpeedX) {
          vx = vx > 0 ? minSpeedX : -minSpeedX;
        }
        if (Math.abs(vy) < minSpeedY) {
          vy = vy > 0 ? minSpeedY : -minSpeedY;
        }

        x += vx;
        y += vy;

        if (x <= 0) {
          x = 0;
          vx = Math.abs(vx);
        } else if (x + cubeWidth >= boundaryWidth) {
          x = boundaryWidth - cubeWidth;
          vx = -Math.abs(vx);
        }

        if (y <= 0) {
          y = 0;
          vy = Math.abs(vy);
        } else if (y + cubeHeight >= boundaryHeight) {
          y = boundaryHeight - cubeHeight;
          vy = -Math.abs(vy);
        }
      }

      // Smooth interpolation/lerp (0.15) for natural, fluid visual movement
      renderX += (x - renderX) * 0.15;
      renderY += (y - renderY) * 0.15;
      setPos({ x: renderX, y: renderY });

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (cubeEl) {
        cubeEl.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        
        cubeEl.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, []);

  return (
    <main className="main-content">
      <section ref={heroRef} className="hero-section" data-header-theme="dark">
        {/* Background Video */}
        <div className="hero-video-wrapper">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
            src="https://www.dropbox.com/scl/fi/uq6nn62j0kydduursmil3/crea_animazione_in_loop_energ.mp4?rlkey=1uuueiwjz4n03cdm3cqyzoc2i&st=namccvfw&raw=1"
          ></video>
          <div className="video-overlay"></div>
        </div>
        <div className="tech-grid"></div>
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>
        <div className="hero-bottom-fade"></div>
        <div className="container hero-container">
          <div className="hero-main-row">
            <div className="hero-text-wrapper">
              <span className="hero-badge hero-enter hero-enter-1">Innovazione Digitale & Hub Creativo</span>
              <h1 className="hero-enter hero-enter-2">
                Dove ogni idea <br />
                <span className="gradient-text text-glow-primary">prende forma!</span>
              </h1>
              <p className="hero-subtitle hero-enter hero-enter-3">
                CodeCafe è il laboratorio creativo dove strategia, design e tecnologia si fondono per dare vita a progetti unici. Sviluppiamo il tuo business e formiamo le competenze del futuro.
              </p>
            </div>

            <div className="hero-visual hero-enter hero-enter-6">
              {/* Orb background light stays here */}
              <div className="visual-orb"></div>
            </div>
          </div>

          <HeroCircuitEdge />
        </div>

        {/* Floating Bouncing Glass Cube */}
        <div 
          ref={cubeRef}
          className="floating-cube-container hero-enter hero-enter-7"
          style={{
            position: 'absolute',
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            width: '200px',
            height: '200px',
            zIndex: 8,
            pointerEvents: 'auto',
            cursor: 'grab',
            transformStyle: 'preserve-3d',
            willChange: 'left, top'
          }}
        >
          <div className="visual-cube shape-cube">
            <div className="cube-face front">CODE</div>
            <div className="cube-face back">CAFE</div>
            <div className="cube-face right">CREATE</div>
            <div className="cube-face left">DESIGN</div>
            <div className="cube-face top">FUTURE</div>
            <div className="cube-face bottom">INNOVATE</div>
          </div>
        </div>

        {/* SVG Filter for Glass lens refraction and bicchiere distortion */}
        <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
          <defs>
            <filter id="glass-distortion">
              <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="35" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
        </svg>
      </section>

      {/* Brand Journey Section */}
      <section id="journey" className="journey-section" data-header-theme="dark">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Il Nostro Metodo</span>
            <h2>Il Viaggio <span className="gradient-text">del tuo Brand</span></h2>
            <p className="section-subtitle">
              Ti accompagniamo passo dopo passo, dalla prima bozza all'affermazione sul mercato, unendo tutti i tasselli della comunicazione moderna.
            </p>
          </div>

          <div className="journey-grid">
            {brandJourney.map((step, index) => {
              const isEven = index % 2 === 0;
              const animClass = isEven ? 'animate-fade-left' : 'animate-fade-right';
              return (
                <div key={step.step} style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div 
                    className={`journey-card glass-panel ${animClass}`}
                    style={{ animationDelay: `${index * 0.15}s`, height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <span className="step-number">{step.step}</span>
                    <div className="journey-card-header">
                      <span className="journey-icon">{getJourneyIcon(step.step)}</span>
                      <div>
                        <h3>{step.title}</h3>
                        <span className="journey-subtitle">{step.subtitle}</span>
                      </div>
                    </div>
                    <p>{step.description}</p>
                    <div className="led-bar"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Next.js Advantages Slider */}
      <NextJsAdvantages />

      {/* Sezione Giochi & Numbergame */}
      <section id="giochi" className="games-section" data-header-theme="dark">
        <div className="tech-grid"></div>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Game Dev Studio</span>
            <h2>Sviluppo Videogiochi <span className="gradient-text">Su Misura</span></h2>
            <p className="section-subtitle">
              Progettiamo e realizziamo videogiochi coinvolgenti, educativi e interattivi per brand, aziende e istituzioni. Dalla progettazione all'ottimizzazione per Web, Android e iOS.
            </p>
          </div>

          {/* Banner / Anteprima Game Dev */}
          <div className="game-banner glass-panel animate-zoom-in">
            <div className="banner-bg-glass"></div>
            <div className="game-banner-content">
              <span className="game-tag">Featured Game</span>
              <div className="game-title-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <img src="/logonumeri.PNG" alt="Numbergame Logo" style={{ height: '48px', width: 'auto', borderRadius: '8px' }} />
                <h3 style={{ margin: 0 }}>Numbergame.it</h3>
              </div>
              <p>
                Numbergame è il nostro fiore all'occhiello nello sviluppo edutainment: un ecosistema competitivo progettato per sfidare la mente. Sviluppato con tecnologie web moderne ed ottimizzato per garantire performance d'eccezione anche come app nativa per Android e iOS. Offre una griglia di calcolo dinamica per stimolare la concentrazione, il ragionamento logico-matematico rapido e la memoria a breve termine.
              </p>
              <div className="platform-badges">
                <span className="platform-badge">Web (Desktop/Mobile)</span>
                <span className="platform-badge">Android App</span>
                <span className="platform-badge">iOS App</span>
              </div>
              <div className="game-actions" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="https://www.numbergame.it/site" target="_blank" rel="noopener noreferrer" className="btn-game-primary">
                  Gioca Ora su numbergame.it
                </a>
                <a href="/giochi#numbergame" className="btn-game-secondary">
                  Scopri di più
                </a>
              </div>
            </div>
            <div className="game-banner-preview">
              <div className="phone-mockup">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="game-preview-video"
                    src="https://www.dropbox.com/scl/fi/v16lk4ypz2d86d92qpd9p/ScreenRecording_07-10-2026-11-46-04_1.mp4?rlkey=fx9mxwno0ttuc04v1pad7smq3&st=8yyy1f5b&raw=1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Soluzioni Section */}
      <section id="servizi" className="services-section" data-header-theme="dark">
        <div className="tech-grid"></div>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Cosa Facciamo</span>
            <h2>Soluzioni Digitali <span className="gradient-text">per la tua Crescita</span></h2>
            <p className="section-subtitle">
              Soluzioni concrete e personalizzate progettate per massimizzare la visibilità e il rendimento del tuo business.
            </p>
          </div>

          <div className="services-grid">
            {agencyServices.map((service, index) => (
              <div key={index} style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div 
                  className="service-item glass-panel animate-zoom-in"
                  style={{ animationDelay: `${index * 0.08}s`, height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <span className="service-icon-box">{getServiceIcon(service.title)}</span>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <div className="led-bar-green"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formatore / Corsi Section */}
      <Courses />

      {/* Innovations Section */}
      <Innovations />

      {/* Agency / Chi Siamo Section */}
      <section id="agency" className="agency-section" data-header-theme="dark">
        <div className="container">
          <div className="agency-grid">
            <div className="agency-content">
              <span className="section-badge">Chi Siamo</span>
              <h2>Agenzia di Comunicazione da <span className="gradient-text">oltre 30 anni</span></h2>
              <p className="agency-text">
                Da più di tre decenni operiamo con passione e successo nel settore della comunicazione su carta stampata ed editoria digitale. La nostra agenzia si è evoluta costantemente, integrando le ultime tecnologie web e l'intelligenza artificiale per continuare ad offrire il massimo.
              </p>
              <p className="agency-text">
                Crediamo che la chiave del successo sia la consulenza su misura. Comprendiamo a fondo le tue necessità per elaborare un piano strategico mirato a soddisfare ogni tuo obiettivo aziendale.
              </p>

              <div className="demo-highlight-box" style={{ marginTop: '24px' }}>
                <span style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '1.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Sito Web Demo Gratuite
                </span>
              </div>
            </div>

            <div className="why-choose-us glass-panel">
              <h3>Perché Scegliere Noi?</h3>
              <ul className="reasons-list">
                <li>
                  <span className="check">✓</span>
                  <div>
                    <h5>Competenza Multipla</h5>
                    <p>Un team di specialisti qualificati pronto a coprire ogni esigenza aziendale o formativa.</p>
                  </div>
                </li>
                <li>
                  <span className="check">✓</span>
                  <div>
                    <h5>Creatività su Misura</h5>
                    <p>Ogni progetto è unico. Non usiamo modelli pre-confezionati, creiamo da zero la tua soluzione.</p>
                  </div>
                </li>
                <li>
                  <span className="check">✓</span>
                  <div>
                    <h5>Risultati Misurabili</h5>
                    <p>Tracciamo costantemente i dati e ottimizziamo le campagne per offrirti risultati tangibili.</p>
                  </div>
                </li>
                <li>
                  <span className="check">✓</span>
                  <div>
                    <h5>Team Affidabile</h5>
                    <p>Ti affianchiamo lungo tutto il percorso, garantendo assistenza continua e trasparenza.</p>
                  </div>
                </li>
                <li>
                  <span className="check">✓</span>
                  <div>
                    <h5>Visione Completa a 360°</h5>
                    <p>Dalla grafica cartacea ai modelli 3D avanzati, hai un unico interlocutore professionale.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      <style jsx>{`
        /* Games Section Styles */
        .games-section {
          padding: 100px 0;
          background-color: var(--bg-primary);
          position: relative;
          overflow: hidden;
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }

        .game-banner {
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          padding: 48px;
          align-items: center;
          margin-bottom: 40px;
          border: 1px solid rgba(17, 109, 255, 0.2);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4), inset 0 0 20px rgba(17, 109, 255, 0.05);
        }

        .banner-bg-glass {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 50%;
          height: 70%;
          background-image: url("/CasellaGlass.png");
          background-repeat: no-repeat;
          background-position: left center;
          background-size: contain;
          opacity: 0.12;
          pointer-events: none;
          z-index: 0;
        }

        .game-banner-content h3 {
          font-size: 2rem;
          color: var(--text-primary);
          line-height: 1.2;
          font-family: var(--font-headings);
        }

        .game-tag {
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }

        .game-banner-content p {
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }

        .platform-badges {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }

        .platform-badge {
          background: rgba(255, 156, 90, 0.1);
          border: 1px solid rgba(255, 156, 90, 0.3);
          color: var(--secondary);
          padding: 4px 12px;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .btn-game-primary {
          display: inline-block;
          padding: 12px 28px;
          background: linear-gradient(135deg, var(--primary), rgba(var(--primary-rgb), 0.8));
          color: white;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none !important;
          box-shadow: 0 4px 15px rgba(17, 109, 255, 0.3);
          transition: var(--transition-smooth);
        }

        .btn-game-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(17, 109, 255, 0.5);
          background: linear-gradient(135deg, var(--secondary), rgba(var(--secondary-rgb), 0.8));
        }

        .btn-game-secondary {
          display: inline-block;
          padding: 12px 28px;
          background: transparent;
          color: var(--text-primary);
          border: 1px solid var(--border-color);
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none !important;
          transition: var(--transition-smooth);
        }

        .btn-game-secondary:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--primary);
          color: white;
        }

        .phone-mockup {
          position: relative;
          width: 270px;
          height: 540px;
          margin: 0 auto;
          border: 12px solid #1e293b;
          border-radius: 36px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(17, 109, 255, 0.15);
          background: #020617;
          display: flex;
          flex-direction: column;
        }

        .phone-notch {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 18px;
          background: #1e293b;
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
          z-index: 20;
        }

        .phone-screen {
          width: 100%;
          height: 100%;
          background: #000;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .game-preview-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .game-details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .game-detail-card {
          padding: 32px;
          border-bottom: 2px solid transparent;
          transition: var(--transition-smooth);
        }

        .game-detail-card:hover {
          border-color: var(--primary);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(17, 109, 255, 0.1);
        }

        .card-icon {
          font-size: 2.2rem;
          margin-bottom: 20px;
        }

        .game-detail-card h4 {
          font-size: 1.3rem;
          color: var(--text-primary);
          margin-bottom: 12px;
          font-family: var(--font-headings);
        }

        .game-detail-card p {
          font-size: 0.98rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .fallback-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          color: var(--text-secondary);
          text-decoration: none !important;
          transition: var(--transition-fast);
          padding: 8px 16px;
          border-radius: 8px;
          border: 1px solid transparent;
        }

        .fallback-btn:hover {
          color: white;
          background: rgba(255,255,255,0.02);
          border-color: var(--border-color);
        }

        @media (max-width: 968px) {
          .game-banner {
            grid-template-columns: 1fr;
            padding: 32px;
            gap: 32px;
          }

          .game-details-grid {
            grid-template-columns: 1fr;
          }
        }

        .main-content {
          padding-top: 0; /* Remove header offset so hero bleeds to the very top */
        }

        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 140px 0 80px 0;
        }

        .hero-video-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.28;
        }

        .video-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(8, 11, 17, 0.4) 0%, var(--bg-primary) 100%);
        }

        .hero-glow-1 {
          position: absolute;
          top: -20%;
          left: -10%;
          width: 50vw;
          height: 50vw;
          background: radial-gradient(circle, rgba(17, 109, 255, 0.15) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
          animation: pulseGlow 10s infinite alternate ease-in-out;
        }

        .hero-glow-2 {
          position: absolute;
          bottom: -10%;
          right: -10%;
          width: 50vw;
          height: 50vw;
          background: radial-gradient(circle, rgba(255, 156, 90, 0.12) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
          animation: pulseGlow 8s infinite alternate-reverse ease-in-out;
        }

        .hero-bottom-fade {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 200px;
          background: linear-gradient(180deg, transparent 0%, rgba(8, 11, 17, 0.5) 50%, rgba(8, 11, 17, 0.95) 100%);
          pointer-events: none;
          z-index: 2;
        }

        .hero-container {
          display: flex;
          flex-direction: column;
          gap: 56px;
          position: relative;
          z-index: 5;
          width: 100%;
        }

        .hero-main-row {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 48px;
          align-items: center;
        }

        .hero-text-wrapper {
          max-width: 680px;
        }

        .hero-badge {
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          border: 1px solid rgba(var(--primary-rgb), 0.3);
          padding: 6px 16px;
          border-radius: 50px;
          background: rgba(var(--primary-rgb), 0.05);
          margin-bottom: 24px;
        }

        .hero-section h1 {
          font-size: 3.8rem;
          line-height: 1.15;
          margin-bottom: 24px;
          color: var(--text-primary);
        }

        .hero-subtitle {
          font-size: 1.2rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 0;
        }

        .hero-enter {
          opacity: 0;
          animation: heroEnterUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hero-enter-1 { animation-delay: 0.15s; }
        .hero-enter-2 { animation-delay: 0.3s; }
        .hero-enter-3 { animation-delay: 0.45s; }
        .hero-enter-6 { animation-delay: 0.35s; animation-name: heroEnterScale; }
        .hero-enter-7 { animation-delay: 0.5s; animation-name: heroEnterFade; }

        @keyframes heroEnterUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroEnterScale {
          from {
            opacity: 0;
            transform: scale(0.88);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes heroEnterFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* 3D Visual Cube */
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          height: 400px;
        }

        .visual-cube {
          width: 200px;
          height: 200px;
          position: relative;
          transform-style: preserve-3d;
          animation: spinCube 20s infinite linear;
          z-index: 10;
          transition: all 1s ease-in-out;
        }

        @keyframes spinCube {
          from { transform: rotateX(0deg) rotateY(0deg); }
          to { transform: rotateX(360deg) rotateY(360deg); }
        }

        .cube-face {
          position: absolute;
          width: 200px;
          height: 200px;
          background: rgba(8, 15, 30, 0.2);
          border: 1.5px solid rgba(17, 109, 255, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-headings);
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--primary);
          text-shadow: 0 0 10px rgba(var(--primary-rgb), 0.5);
          box-shadow: inset 0 0 25px rgba(17, 109, 255, 0.35), 0 0 8px rgba(17, 109, 255, 0.2);
          backdrop-filter: blur(4px) url(#glass-distortion);
          border-radius: 12px;
          transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
          /* Mesh/Wireframe background grid effect */
          background-image: 
            linear-gradient(rgba(17, 109, 255, 0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17, 109, 255, 0.25) 1px, transparent 1px);
          background-size: 25px 25px;
        }

        /* Default face positioning (Cube) */
        .front  { transform: rotateY(  0deg) translateZ(100px); }
        .back   { transform: rotateY(180deg) translateZ(100px); }
        .right  { transform: rotateY( 90deg) translateZ(100px); color: var(--secondary); border-color: rgba(255, 156, 90, 0.4); text-shadow: 0 0 10px rgba(var(--secondary-rgb), 0.5); }
        .left   { transform: rotateY(-90deg) translateZ(100px); color: var(--secondary); border-color: rgba(255, 156, 90, 0.4); text-shadow: 0 0 10px rgba(var(--secondary-rgb), 0.5); }
        .top    { transform: rotateX( 90deg) translateZ(100px); }
        .bottom { transform: rotateX(-90deg) translateZ(100px); }

        /* Shape 1: Sphere */
        .visual-cube.shape-sphere .cube-face {
          border-radius: 50%;
          border-color: rgba(17, 109, 255, 0.85);
          box-shadow: inset 0 0 40px rgba(17, 109, 255, 0.6), 0 0 20px rgba(17, 109, 255, 0.35);
          background-image: 
            radial-gradient(circle, rgba(17, 109, 255, 0.15) 10%, transparent 80%),
            linear-gradient(rgba(17, 109, 255, 0.2) 1px, transparent 1px);
          background-size: 15px 15px;
        }

        /* Shape 2: Cone */
        .visual-cube.shape-cone .cube-face {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          border-color: rgba(255, 156, 90, 0.8);
          box-shadow: inset 0 -30px 40px rgba(255, 156, 90, 0.3);
        }
        .visual-cube.shape-cone .cube-face.bottom {
          clip-path: none;
          border-radius: 50%;
        }

        /* Shape 3: Cylinder */
        .visual-cube.shape-cylinder .cube-face {
          border-radius: 0;
          border-left: 2px solid rgba(17, 109, 255, 0.7);
          border-right: 2px solid rgba(17, 109, 255, 0.7);
          border-top: none;
          border-bottom: none;
        }
        .visual-cube.shape-cylinder .cube-face.top,
        .visual-cube.shape-cylinder .cube-face.bottom {
          border: 1.5px solid rgba(17, 109, 255, 0.7);
          border-radius: 50%;
        }

        .visual-orb {
          position: absolute;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(17, 109, 255, 0.2) 0%, transparent 70%);
          filter: blur(10px);
          animation: pulseGlow 4s infinite alternate ease-in-out;
          z-index: 1;
        }

        /* Brand Journey Section */
        .journey-section {
          padding: 100px 0;
          position: relative;
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

        .journey-section h2 {
          font-size: 2.6rem;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .journey-section .section-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        .journey-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 24px;
        }

        .journey-card {
          padding: 32px;
          position: relative;
          border-bottom: 1px solid var(--border-color);
          transition: var(--transition-smooth);
          z-index: 2;
        }

        .led-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--secondary), transparent);
          opacity: 0.25;
          box-shadow: 0 0 8px rgba(17, 109, 255, 0.3);
          transition: var(--transition-smooth);
        }

        /* Hover & Active Glow Effects */
        .journey-card:hover {
          border-color: rgba(17, 109, 255, 0.3);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(17, 109, 255, 0.15);
        }

        .journey-card:hover .journey-icon {
          background: rgba(17, 109, 255, 0.08);
          color: var(--primary);
          border-color: var(--primary);
          box-shadow: 0 0 20px rgba(255, 156, 90, 0.6);
        }

        .journey-card:hover .led-bar {
          opacity: 1;
          height: 4px;
          background: linear-gradient(90deg, transparent, var(--primary), transparent);
          box-shadow: 0 0 18px rgba(255, 156, 90, 0.9);
        }

        .step-number {
          position: absolute;
          top: 24px;
          right: 32px;
          font-family: var(--font-headings);
          font-weight: 800;
          font-size: 2.5rem;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          user-select: none;
        }

        .journey-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .journey-icon {
          width: 56px;
          height: 56px;
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

        .icon-svg {
          width: 26px !important;
          height: 26px !important;
          stroke-width: 2px !important;
          transition: var(--transition-smooth);
          stroke: var(--secondary) !important; /* Force explicit color instead of only relying on currentColor */
        }

        .journey-card:hover .icon-svg {
          filter: drop-shadow(0 0 6px rgba(255, 156, 90, 0.8));
          stroke: var(--primary); /* Force explicit hover color */
        }

        .journey-card h3 {
          font-size: 1.25rem;
          color: var(--text-primary);
          margin-bottom: 2px;
        }

        .journey-subtitle {
          font-size: 0.85rem;
          color: var(--primary);
          font-weight: 600;
        }

        .journey-card p {
          font-size: 0.95rem;
          line-height: 1.5;
        }

        /* Services Section */
        .services-section {
          padding: 100px 0;
          background-color: var(--bg-primary);
          position: relative;
          overflow: hidden;
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }

        .services-section h2 {
          font-size: 2.6rem;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 20px;
        }

        .service-item {
          padding: 24px;
          text-align: center;
          position: relative;
          border-bottom: 1px solid var(--border-color);
          transition: var(--transition-smooth);
          --laser-color: #22c55e;
          z-index: 2;
        }

        .service-item:hover {
          border-color: rgba(34, 197, 94, 0.3);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(34, 197, 94, 0.15);
        }

        .led-bar-green {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, #22c55e, transparent);
          opacity: 0.25;
          box-shadow: 0 0 8px rgba(34, 197, 94, 0.3);
          transition: var(--transition-smooth);
        }

        .service-item:hover .led-bar-green {
          opacity: 1;
          height: 4px;
          box-shadow: 0 0 18px rgba(34, 197, 94, 0.9);
        }

        .service-icon-box {
          font-size: 2rem;
          background: rgba(255, 255, 255, 0.02);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px auto;
          border: 1px solid var(--border-color);
          box-shadow: 0 4px 10px rgba(0,0,0,0.2), 0 0 8px rgba(34, 197, 94, 0.1);
          transition: var(--transition-smooth);
          color: #ffffff;
        }

        .service-icon-box .icon-svg {
          width: 26px;
          height: 26px;
          stroke-width: 2px;
          transition: var(--transition-smooth);
          color: #ffffff;
          stroke: #ffffff;
        }

        .service-item:hover .service-icon-box {
          background: rgba(34, 197, 94, 0.08);
          border-color: #22c55e;
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.6);
        }

        .service-item:hover .icon-svg {
          filter: drop-shadow(0 0 6px rgba(34, 197, 94, 0.8));
          stroke: #22c55e;
        }

        .service-item h3 {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .service-item p {
          font-size: 0.9rem;
          line-height: 1.5;
        }

        /* Agency / Chi Siamo Section */
        .agency-section {
          padding: 100px 0;
        }

        .agency-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 64px;
          align-items: center;
        }

        .agency-content h2 {
          font-size: 2.6rem;
          color: var(--text-primary);
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .agency-text {
          font-size: 1.05rem;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .stats-container {
          display: flex;
          gap: 32px;
          margin-top: 40px;
          flex-wrap: wrap;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-family: var(--font-headings);
          font-size: 2.8rem;
          font-weight: 800;
          color: var(--primary);
          text-shadow: 0 0 15px rgba(var(--primary-rgb), 0.3);
        }

        .stat-label {
          font-size: 0.85rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Why Choose Us Panel */
        .why-choose-us {
          padding: 40px;
        }

        .why-choose-us h3 {
          font-size: 1.5rem;
          margin-bottom: 24px;
          color: var(--text-primary);
          position: relative;
          padding-bottom: 10px;
          border-bottom: 1px solid var(--border-color);
        }

        .reasons-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .reasons-list li {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .reasons-list .check {
          color: #22c55e;
          font-weight: 800;
          font-size: 1.2rem;
          background: rgba(34, 197, 94, 0.1);
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .reasons-list h5 {
          font-size: 0.95rem;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .reasons-list p {
          font-size: 0.88rem;
          line-height: 1.4;
        }

        @media (max-width: 968px) {
          .hero-main-row {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-container {
            gap: 40px;
          }

          .hero-text-wrapper {
            max-width: 100%;
          }

          .hero-visual {
            display: none;
          }

          .visual-cube {
            width: 150px;
            height: 150px;
          }

          .cube-face {
            width: 150px;
            height: 150px;
            font-size: 0.95rem;
            background-image: none !important; /* Remove mesh/wireframe grid */
            background: rgba(15, 23, 42, 0.72) !important; /* Frosted matte glass background */
            backdrop-filter: blur(16px) url(#glass-distortion) !important;
            -webkit-backdrop-filter: blur(16px) url(#glass-distortion) !important;
            border: 1.5px solid rgba(17, 109, 255, 0.55) !important;
            box-shadow: inset 0 0 25px rgba(17, 109, 255, 0.25), 0 0 10px rgba(17, 109, 255, 0.15) !important;
          }

          .front  { transform: rotateY(  0deg) translateZ(75px); }
          .back   { transform: rotateY(180deg) translateZ(75px); }
          .right  { transform: rotateY( 90deg) translateZ(75px); color: var(--secondary); border-color: rgba(255, 156, 90, 0.4) !important; text-shadow: 0 0 10px rgba(var(--secondary-rgb), 0.5); }
          .left   { transform: rotateY(-90deg) translateZ(75px); color: var(--secondary); border-color: rgba(255, 156, 90, 0.4) !important; text-shadow: 0 0 10px rgba(var(--secondary-rgb), 0.5); }
          .top    { transform: rotateX( 90deg) translateZ(75px); }
          .bottom { transform: rotateX(-90deg) translateZ(75px); }

          .agency-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }

        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 2.8rem;
          }
          
          .journey-section h2,
          .services-section h2,
          .agency-content h2 {
            font-size: 2.1rem;
          }
        }
      `}</style>
    </main>
  );
}
