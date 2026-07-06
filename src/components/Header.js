'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Servizi', href: '#servizi' },
    { name: 'Corsi', href: '#corsi' },
    { name: 'Innovazione', href: '#innovazioni' },
    { name: 'Chi Siamo', href: '#agency' },
    { name: 'Contatti', href: '#contatti' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href={isHome ? '#' : '/'} className="logo">
          <img src="/logoorizzontaledevtools.png" alt="DevTools Logo" className="logo-img" />
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={isHome ? link.href : '/' + link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href={isHome ? '#contatti' : '/#contatti'} className="btn-cta">
            Contattaci
          </a>
          <button 
            className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={isHome ? link.href : '/' + link.href} 
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={isHome ? '#contatti' : '/#contatti'} 
            className="btn-cta mobile-cta"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Richiedi Consulenza
          </a>
        </nav>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          transition: var(--transition-smooth);
          padding: 24px 0;
          border-bottom: 1px solid transparent;
          background: transparent; /* Completely transparent at top */
        }

        .header.scrolled {
          padding: 14px 0;
          background: rgba(8, 11, 17, 0.7); /* Transparent-looking background when scrolled */
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          text-decoration: none !important;
        }

        .logo-img {
          height: 110px;
          width: auto;
          display: block;
          object-fit: contain;
          filter: brightness(0) invert(1); /* Force the logo to be entirely white */
        }

        .logo-spark {
          color: var(--primary);
          font-size: 1.6rem;
          animation: pulseGlow 3s infinite ease-in-out;
        }

        .accent-color {
          color: var(--secondary);
          position: relative;
        }

        .desktop-nav {
          display: flex;
          gap: 32px;
        }

        .nav-link {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-secondary);
          transition: var(--transition-fast);
          position: relative;
          padding: 8px 0;
          text-decoration: none !important;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--secondary), transparent);
          box-shadow: 0 0 10px 2px var(--secondary);
          transform: translateX(-50%);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-link:hover {
          color: white;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .btn-cta {
          padding: 10px 20px;
          font-size: 0.9rem;
          font-weight: 600;
          border-radius: 50px;
          background: linear-gradient(135deg, var(--secondary), rgba(var(--secondary-rgb), 0.8));
          color: white;
          box-shadow: 0 4px 15px rgba(17, 109, 255, 0.3);
          transition: var(--transition-smooth);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .btn-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(17, 109, 255, 0.5);
          background: linear-gradient(135deg, var(--primary), rgba(var(--primary-rgb), 0.8));
        }

        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 18px;
          background: transparent;
          border: none;
          cursor: pointer;
          z-index: 110;
        }

        .hamburger span {
          width: 100%;
          height: 2px;
          background-color: var(--text-primary);
          transition: var(--transition-smooth);
          border-radius: 2px;
        }

        .hamburger.open span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        /* Mobile Menu */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          height: 100vh;
          background: rgba(8, 11, 17, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 99;
          transition: var(--transition-smooth);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .mobile-menu-overlay.active {
          right: 0;
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          width: 100%;
        }

        .mobile-nav-link {
          font-family: var(--font-headings);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }

        .mobile-nav-link:hover {
          color: var(--primary);
          text-shadow: 0 0 10px rgba(var(--primary-rgb), 0.4);
        }

        .mobile-cta {
          margin-top: 16px;
          padding: 14px 32px;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .logo-img {
            height: 78px; /* Mobile size */
          }

          .desktop-nav {
            display: none;
          }

          .btn-cta:not(.mobile-cta) {
            display: none;
          }

          .hamburger {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
