'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <img src="/solo disegno logo.png" className="footer-bg-logo" alt="" />
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-info">
            <a href="#" className="footer-logo">
              <img src="/logoorizzontaledevtools.png" alt="DevTools Logo" className="footer-logo-img" />
            </a>
            <p className="footer-description">
              Un laboratorio creativo dove strategia, design e tecnologia si fondono per dare forma alle tue idee e far crescere il tuo brand.
            </p>
          </div>

          <div className="footer-links-col">
            <h3>Navigazione</h3>
            <ul className="footer-links">
              <li><a href="#servizi">Servizi</a></li>
              <li><a href="#corsi">Corsi Formazione</a></li>
              <li><a href="#innovazioni">Attività & Innovazioni</a></li>
              <li><a href="#agency">Chi Siamo</a></li>
              <li><a href="#contatti">Contatti</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contattaci</h3>
            <ul className="contact-details">
              <li>
                <span className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg-footer">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span>Via Caravaglios, 33 | NAPOLI</span>
              </li>
              <li>
                <span className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg-footer">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <a href="tel:+393478127440">+39 347 81 27 440</a>
              </li>
              <li>
                <span className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg-footer">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <a href="mailto:castromassimo@gmail.com">castromassimo@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Social column hidden for now */}
          {/* <div className="footer-socials-col">
            <h3>Seguici</h3>
            <div className="social-links">
              ...
            </div>
          </div> */}
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} DevTools. Tutti i diritti riservati.</p>
          <div className="footer-policy-links">
            <a href="/privacy">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="/privacy#cookies">Cookie Policy</a>
          </div>
          <p className="powered-by">powered by DevTools</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          padding: 64px 0 32px 0;
          position: relative;
          z-index: 10;
          overflow: hidden;
        }

        .footer-bg-logo {
          position: absolute;
          bottom: -40px;
          right: -80px;
          height: 380px;
          width: auto;
          opacity: 0.05;
          pointer-events: none;
          z-index: 1;
          filter: brightness(0) invert(1);
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2.2fr 1fr 1.8fr;
          gap: 48px;
          margin-bottom: 48px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          text-decoration: none !important;
        }

        .footer-logo-img {
          height: 140px;
          width: auto;
          display: block;
          object-fit: contain;
          filter: brightness(0) invert(1); /* Force the logo to be entirely white */
        }

        .accent-color {
          color: var(--secondary);
        }

        .footer-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          max-width: 320px;
        }

        h3 {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 20px;
          position: relative;
          padding-bottom: 8px;
        }

        h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
        }

        .footer-links {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 12px;
        }

        .footer-links a {
          color: var(--text-secondary);
          transition: var(--transition-fast);
          font-size: 0.95rem;
          text-decoration: none !important;
        }

        .footer-links a:hover {
          color: var(--primary);
          padding-left: 4px;
        }

        .contact-details {
          list-style: none;
        }

        .contact-details li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .contact-details a {
          color: var(--text-secondary);
          transition: var(--transition-fast);
          text-decoration: none !important;
        }

        .contact-details a:hover {
          color: var(--secondary);
        }

        .icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          color: var(--secondary);
          padding: 6px;
        }

        .icon-svg-footer {
          width: 100%;
          height: 100%;
          stroke-width: 2px;
        }

        .social-links {
          display: flex;
          gap: 12px;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.02);
          color: var(--secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
          box-shadow: 0 0 8px rgba(17, 109, 255, 0.15);
        }

        .social-icon :global(.icon-svg) {
          width: 18px;
          height: 18px;
          stroke-width: 2px;
          transition: var(--transition-smooth);
        }

        .social-icon:hover {
          background: rgba(17, 109, 255, 0.08);
          border-color: var(--secondary);
          box-shadow: 0 0 15px rgba(17, 109, 255, 0.6);
          transform: translateY(-2px);
        }

        .social-icon:hover :global(.icon-svg) {
          filter: drop-shadow(0 0 4px rgba(17, 109, 255, 0.8));
        }

        .footer-bottom {
          border-top: 1px solid var(--border-color);
          padding-top: 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
          color: var(--text-muted);
          flex-wrap: wrap;
          gap: 16px;
        }

        .powered-by {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .footer-policy-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer-policy-links a {
          color: var(--text-muted);
          transition: var(--transition-fast);
          text-decoration: none !important;
          font-size: 0.9rem;
        }

        .footer-policy-links a:hover {
          color: var(--primary);
        }

        .separator {
          color: var(--border-color);
        }

        @media (max-width: 968px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
        }

        @media (max-width: 768px) {
          .footer-logo-img {
            height: 100px; /* Mobile size */
          }
        }

        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
