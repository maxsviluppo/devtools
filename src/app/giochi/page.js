'use client';

import React from 'react';

export default function Giochi() {
  return (
    <main className="games-page">
      <div className="tech-grid"></div>
      <div className="glow-orb-1"></div>
      <div className="glow-orb-2"></div>

      <div className="container header-spacing">
        {/* Top Hero Slide/Banner (Ready for future images) */}
        <div className="games-hero-banner glass-panel">
          <div className="hero-banner-overlay"></div>
        </div>

        {/* Section Title */}
        <div className="games-list-title">
          <h2>I Nostri <span className="gradient-text">Giochi</span></h2>
          <div className="title-bar"></div>
        </div>

        {/* Numbergame Banner Section */}
        <div className="game-section-banner glass-panel" id="numbergame">
          <div className="banner-bg-glass"></div>
          <div className="game-banner-grid" style={{ position: 'relative', zIndex: 1 }}>
            {/* Sinistra: Contenuto dettagliato */}
            <div className="game-info-col">
              <span className="game-tag-badge">ALLENAMENTO COGNITIVO</span>
              <div className="game-title-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <img src="/logonumeri.PNG" alt="Numbergame Logo" style={{ height: '48px', width: 'auto', borderRadius: '8px' }} />
                <h3 style={{ margin: 0 }}>Numbergame.it</h3>
              </div>
              <h4 className="game-sub-title">Neural Math Gaming</h4>
              
              <p className="game-description-long">
                Numbergame è la piattaforma definitiva per gli amanti del calcolo mentale veloce e della competizione logica. Una griglia numerica dinamica ti sfida a combinare numeri ed operatori per raggiungere esattamente il valore target prima dello scadere del tempo. Un mix perfetto tra divertimento ed edutainment progettato per stimolare la mente.
              </p>
              
              <div className="detail-feature-card">
                <h5>Come Funziona</h5>
                <p>
                  Collega cristalli numerici adiacenti in verticale, orizzontale o diagonale utilizzando le quattro operazioni aritmetiche fondamentali (+, -, *, /). Trova la formula esatta e batti il tempo. Include sfide individuali per allenare il tuo QI e la modalità competitiva online <strong>Neural Duel 1vs1</strong> (Standard o Blitz) per sfidare altri giocatori in tempo reale.
                </p>
              </div>

              <div className="review-feature-card">
                <h5>La Recensione</h5>
                <p>
                  "Numbergame rappresenta un perfetto connubio tra gaming ed edutainment. L'interfaccia futuristica, unita a una fluidità eccellente sia su browser che su smartphone, lo rende estremamente stimolante per la concentrazione e la memoria a breve termine."
                  <span className="rating-badge">Voto: 9.8/10</span>
                </p>
              </div>

              {/* Bottoni e Link di download */}
              <div className="game-action-buttons">
                <a href="https://www.numbergame.it" target="_blank" rel="noopener noreferrer" className="btn-game-primary">
                  Gioca Ora su numbergame.it
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.max.numbergame.app&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="btn-game-secondary">
                  Scarica per Android
                </a>
              </div>
              <div className="ios-availability">
                 In arrivo su Apple App Store (certificazione in corso)
              </div>
            </div>

            {/* Destra: Smartphone Virtuale con Video Autoplay Loop Muted */}
            <div className="game-visual-col">
              <div className="phone-mockup">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="phone-video"
                    src="https://www.dropbox.com/scl/fi/v16lk4ypz2d86d92qpd9p/ScreenRecording_07-10-2026-11-46-04_1.mp4?rlkey=fx9mxwno0ttuc04v1pad7smq3&st=8yyy1f5b&raw=1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .games-page {
          background-color: var(--bg-primary);
          color: var(--text-primary);
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          padding-bottom: 100px;
        }

        .header-spacing {
          padding-top: 140px;
        }

        .tech-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.01) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.01) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
          z-index: 0;
        }

        .glow-orb-1 {
          position: absolute;
          top: 10%;
          left: -10%;
          width: 40vw;
          height: 40vw;
          background: radial-gradient(circle, rgba(17, 109, 255, 0.08) 0%, transparent 75%);
          z-index: 0;
          pointer-events: none;
        }

        .glow-orb-2 {
          position: absolute;
          bottom: 20%;
          right: -10%;
          width: 40vw;
          height: 40vw;
          background: radial-gradient(circle, rgba(255, 156, 90, 0.06) 0%, transparent 75%);
          z-index: 0;
          pointer-events: none;
        }

        /* Top Hero Banner */
        .games-hero-banner {
          position: relative;
          height: 350px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(8, 11, 17, 0.8) 100%);
          margin-bottom: 60px;
          overflow: hidden;
          z-index: 2;
        }

        .hero-banner-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(17, 109, 255, 0.05) 0%, transparent 80%);
          z-index: 0;
        }

        .hero-banner-content {
          position: relative;
          z-index: 1;
        }

        .hero-banner-content h1 {
          font-size: 3rem;
          margin-top: 12px;
          font-family: var(--font-headings);
        }

        .hero-banner-sub {
          font-size: 1.15rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 12px auto 24px auto;
        }

        .placeholder-image-tip {
          display: inline-block;
          font-size: 0.85rem;
          font-family: monospace;
          color: var(--text-muted);
          border: 1px dashed rgba(255, 255, 255, 0.15);
          padding: 12px 24px;
          border-radius: 8px;
          background: rgba(0, 0, 0, 0.2);
        }

        /* Games List Divider */
        .games-list-title {
          margin-bottom: 40px;
          position: relative;
          z-index: 2;
        }

        .games-list-title h2 {
          font-size: 2.2rem;
          font-family: var(--font-headings);
          margin-bottom: 12px;
        }

        .title-bar {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
        }

        /* Single Game Section Banner */
        .game-section-banner {
          position: relative;
          overflow: hidden;
          padding: 48px;
          border: 1px solid rgba(17, 109, 255, 0.15);
          background: rgba(15, 23, 42, 0.45);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6), inset 0 0 30px rgba(17, 109, 255, 0.03);
          z-index: 2;
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

        .game-banner-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 48px;
          align-items: center;
        }

        .game-tag-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--secondary);
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .game-info-col h3 {
          font-size: 2.6rem;
          color: white;
          margin: 8px 0 2px 0;
          font-family: var(--font-headings);
        }

        .game-sub-title {
          font-size: 1.05rem;
          color: var(--primary);
          margin-bottom: 24px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .game-description-long {
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 28px;
        }

        .detail-feature-card, .review-feature-card {
          margin-bottom: 20px;
          background: rgba(255, 255, 255, 0.02);
          border-left: 3px solid var(--primary);
          padding: 16px;
          border-radius: 4px;
        }

        .review-feature-card {
          border-left-color: var(--secondary);
          background: rgba(255, 156, 90, 0.01);
        }

        .detail-feature-card h5, .review-feature-card h5 {
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 6px;
          color: white;
        }

        .detail-feature-card p, .review-feature-card p {
          font-size: 0.92rem;
          line-height: 1.5;
          color: var(--text-secondary);
        }

        .rating-badge {
          display: block;
          margin-top: 8px;
          font-weight: 700;
          color: var(--secondary);
          font-size: 0.9rem;
        }

        .game-action-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 32px;
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
          font-size: 0.95rem;
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
          font-size: 0.95rem;
        }

        .btn-game-secondary:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--primary);
          color: white;
        }

        .ios-availability {
          margin-top: 16px;
          font-size: 0.85rem;
          color: var(--text-muted);
          font-style: italic;
        }

        /* Smartphone Preview */
        .phone-mockup {
          position: relative;
          width: 260px;
          height: 520px;
          margin: 0 auto;
          border: 10px solid #1e293b;
          border-radius: 32px;
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
          width: 100px;
          height: 16px;
          background: #1e293b;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          z-index: 20;
        }

        .phone-screen {
          width: 100%;
          height: 100%;
          background: #000;
          position: relative;
          overflow: hidden;
        }

        .phone-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 968px) {
          .game-banner-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .game-visual-col {
            order: -1;
          }

          .game-section-banner {
            padding: 32px;
          }
        }
      `}</style>
    </main>
  );
}
