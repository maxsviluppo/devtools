'use client';

import { useState, useEffect } from 'react';

const agencyServices = [
  'Creazione Sito Web',
  'Realizzazione E-Commerce',
  'Realizzazione di giochi webapp, android e ios',
  'Social Media Management',
  'Sviluppo Modelli 3D',
  'Graphic Design & Branding',
  'Digital Marketing & ADS'
];

const trainingCourses = [
  'Informatica di Base',
  'Patente Europea (ICDL)',
  'Grafica & Digital Design',
  'Disegno CAD Tecnico',
  'Scultura 3D & Modellazione',
  'Intelligenza Artificiale (AI)',
  'Cyber Sicurezza & Bullismo',
  'Gameplay & Game Design'
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    telefono: '',
    azienda: '',
    email: '',
    messaggio: '',
    tipoRichiesta: 'servizi', // 'servizi' or 'corsi'
    servizioInteresse: '',
    accettoPrivacy: false
  });

  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  useEffect(() => {
    const handleSelectCourseEvent = (e) => {
      const { courseName } = e.detail;
      setFormData(prev => ({
        ...prev,
        tipoRichiesta: 'corsi',
        servizioInteresse: courseName
      }));
    };
    window.addEventListener('select-course', handleSelectCourseEvent);
    return () => window.removeEventListener('select-course', handleSelectCourseEvent);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.accettoPrivacy) {
      alert('Per procedere è necessario accettare l\'Informativa sulla Privacy.');
      return;
    }

    setFormStatus('loading');
    
    // Construct mailto link dynamically
    const subject = encodeURIComponent(`Richiesta CodeCafe: ${formData.tipoRichiesta} - ${formData.nome}`);
    const body = encodeURIComponent(
      `Nome: ${formData.nome}\n` +
      `Telefono: ${formData.telefono}\n` +
      `Azienda: ${formData.azienda || 'N/A'}\n` +
      `Email: ${formData.email}\n` +
      `Tipo Richiesta: ${formData.tipoRichiesta === 'servizi' ? 'Servizi Digitali' : 'Corsi di Formazione'}\n` +
      `Interesse: ${formData.servizioInteresse}\n\n` +
      `Messaggio:\n${formData.messaggio}`
    );

    // Open mail client
    window.location.href = `mailto:castromassimo@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setFormStatus('success');
      // Reset form
      setFormData({
        nome: '',
        telefono: '',
        azienda: '',
        email: '',
        messaggio: '',
        tipoRichiesta: 'servizi',
        servizioInteresse: '',
        accettoPrivacy: false
      });
    }, 1000);
  };

  return (
    <section id="contatti" className="contact-section" data-header-theme="dark">
      <div className="tech-grid"></div>
      <div className="container">
        <div className="contact-grid">
          {/* Info Column */}
          <div className="info-column animate-fade-in-up">
            <span className="section-badge">Contatti</span>
            <h2>Sei pronto a <span className="gradient-text">dare forma</span> alle tue idee?</h2>
            <p className="subtitle">
              Richiedi una consulenza gratuita o prenota l'accesso ad uno dei nostri corsi di formazione. Riceverai una risposta dettagliata entro 24 ore.
            </p>

            <div className="cta-box glass-panel">
              <h4>Consulenza Gratuita</h4>
              <p>Studiamo le potenzialità del tuo marchio e disegnamo un piano marketing o formativo su misura per te.</p>
            </div>

            <div className="office-info">
              <div className="info-item">
                <span className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg-contact">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div>
                  <h5>Sede Operativa</h5>
                  <p>Via Caravaglios, 33 | NAPOLI</p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg-contact">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <div>
                  <h5>Telefono & WhatsApp</h5>
                  <p><a href="tel:+393478127440">+39 347 81 27 440</a></p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-svg-contact">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div>
                  <h5>E-mail</h5>
                  <p><a href="mailto:castromassimo@gmail.com">castromassimo@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="form-column">
            <div className="form-wrapper glass-panel">
              {formStatus === 'success' ? (
                <div className="success-screen animate-fade-in">
                  <div className="success-icon">✓</div>
                  <h3>Messaggio Inviato!</h3>
                  <p>Grazie per averci contattato. Un nostro esperto ti richiamerà entro le prossime 24 ore per discutere del tuo progetto.</p>
                  <button 
                    onClick={() => setFormStatus('idle')} 
                    className="btn-submit"
                  >
                    Invia un altro messaggio
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h3>Compila il Modulo</h3>

                  <div className="form-group-row">
                    <div className="form-group">
                      <label htmlFor="nome">Nome *</label>
                      <input 
                        type="text" 
                        id="nome" 
                        name="nome" 
                        required 
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Il tuo nome" 
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="telefono">Telefono *</label>
                      <input 
                        type="tel" 
                        id="telefono" 
                        name="telefono" 
                        required 
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="333 1234567" 
                      />
                    </div>
                  </div>

                  <div className="form-group-row">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="esempio@email.com" 
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="azienda">Azienda (Opzionale)</label>
                      <input 
                        type="text" 
                        id="azienda" 
                        name="azienda" 
                        value={formData.azienda}
                        onChange={handleChange}
                        placeholder="Nome azienda" 
                      />
                    </div>
                  </div>

                  {/* Toggle Request Type */}
                  <div className="form-group">
                    <label>Tipo di Richiesta *</label>
                    <div className="radio-toggle-container">
                      <button
                        type="button"
                        className={`toggle-option ${formData.tipoRichiesta === 'servizi' ? 'active' : ''}`}
                        onClick={() => setFormData(prev => ({ ...prev, tipoRichiesta: 'servizi', servizioInteresse: '' }))}
                      >
                        Servizi Agency
                      </button>
                      <button
                        type="button"
                        id="course-checkbox"
                        className={`toggle-option ${formData.tipoRichiesta === 'corsi' ? 'active' : ''}`}
                        onClick={() => setFormData(prev => ({ ...prev, tipoRichiesta: 'corsi', servizioInteresse: '' }))}
                      >
                        Corsi di Formazione
                      </button>
                    </div>
                  </div>

                  {/* Dropdown Select Field instead of Checkbox grid */}
                  <div className="form-group">
                    <label htmlFor="servizioInteresse">Seleziona l'elemento di interesse (Opzionale)</label>
                    <select
                      id="servizioInteresse"
                      name="servizioInteresse"
                      value={formData.servizioInteresse}
                      onChange={handleChange}
                      className="select-dropdown"
                    >
                      <option value="">Scegli una delle opzioni (Opzionale)...</option>
                      {(formData.tipoRichiesta === 'servizi' ? agencyServices : trainingCourses).map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="messaggio">Messaggio / Dettagli Richiesta</label>
                    <textarea 
                      id="messaggio" 
                      name="messaggio" 
                      rows="4" 
                      value={formData.messaggio}
                      onChange={handleChange}
                      placeholder="Parlaci del tuo progetto o delle tue necessità..."
                    ></textarea>
                  </div>

                  <div className="privacy-consent">
                    <input 
                      type="checkbox" 
                      id="accettoPrivacy" 
                      name="accettoPrivacy" 
                      required 
                      checked={formData.accettoPrivacy}
                      onChange={handleChange}
                    />
                    <label htmlFor="accettoPrivacy">
                      Accetto i termini e dichiaro di aver letto l'<a href="#" className="privacy-link">Informativa sulla Privacy</a>.
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    className="btn-submit"
                    disabled={formStatus === 'loading'}
                  >
                    {formStatus === 'loading' ? 'Invio in corso...' : 'Invia Messaggio ➔'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
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

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 64px;
          align-items: center;
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
          font-size: 2.8rem;
          color: var(--text-primary);
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          font-size: 1.1rem;
          margin-bottom: 32px;
        }

        .cta-box {
          padding: 20px;
          margin-bottom: 32px;
          position: relative;
          border-color: rgba(34, 197, 94, 0.2) !important;
          box-shadow: 0 0 15px rgba(34, 197, 94, 0.1), inset 0 0 10px rgba(34, 197, 94, 0.05);
          overflow: hidden;
        }

        .cta-box::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, #22c55e, transparent);
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.8);
        }

        .cta-box h4 {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .cta-box p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .office-info {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .info-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .info-item .icon {
          background: rgba(34, 197, 94, 0.03);
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid rgba(34, 197, 94, 0.2);
          color: #22c55e;
          padding: 10px;
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.1);
        }

        .icon-svg-contact {
          width: 100%;
          height: 100%;
          stroke-width: 2px;
        }

        .info-item h5 {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 4px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .info-item p {
          font-size: 1.05rem;
          color: var(--text-primary);
        }

        .info-item a {
          color: inherit;
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .info-item a:hover {
          color: var(--secondary);
        }

        /* Form Wrapper styling */
        .form-wrapper {
          padding: 40px;
        }

        .contact-form h3 {
          font-size: 1.6rem;
          margin-bottom: 24px;
          color: var(--text-primary);
        }

        .form-group-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .form-group input, 
        .form-group textarea,
        .select-dropdown {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: white;
          padding: 12px;
          border-radius: 8px;
          font-size: 0.95rem;
          transition: var(--transition-fast);
          font-family: inherit;
          outline: none;
        }

        .select-dropdown {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 40px;
        }

        .select-dropdown option {
          background-color: #111625;
          color: white;
        }

        .form-group input:focus, 
        .form-group textarea:focus,
        .select-dropdown:focus {
          border-color: var(--secondary);
          box-shadow: 0 0 10px rgba(17, 109, 255, 0.15);
          background: rgba(255, 255, 255, 0.05);
        }

        /* Radio Toggle Switch */
        .radio-toggle-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: rgba(0, 0, 0, 0.2);
          padding: 4px;
          border-radius: 8px;
          border: 1px solid var(--border-color);
        }

        .toggle-option {
          padding: 10px;
          border-radius: 6px;
          border: none;
          background: transparent;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .toggle-option.active {
          background: var(--secondary);
          color: white;
          box-shadow: 0 4px 10px rgba(17, 109, 255, 0.2);
        }

        .privacy-consent {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          margin-bottom: 24px;
        }

        .privacy-consent input {
          margin-top: 4px;
          width: 16px;
          height: 16px;
          cursor: pointer;
        }

        .privacy-consent label {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .privacy-link {
          color: var(--secondary);
          text-decoration: none;
        }

        .privacy-link:hover {
          text-decoration: underline;
        }

        .btn-submit {
          width: 100%;
          padding: 14px;
          font-size: 1rem;
          font-weight: 700;
          color: white;
          background: linear-gradient(135deg, var(--primary), rgba(var(--primary-rgb), 0.8));
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: var(--transition-smooth);
          box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.3);
        }

        .btn-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.4);
          background: linear-gradient(135deg, var(--secondary), rgba(var(--secondary-rgb), 0.8));
        }

        .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Success Screen */
        .success-screen {
          text-align: center;
          padding: 40px 20px;
        }

        .success-icon {
          width: 64px;
          height: 64px;
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin: 0 auto 24px auto;
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.2);
        }

        .success-screen h3 {
          font-size: 1.6rem;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .success-screen p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 32px;
        }

        /* Responsive adaptation */
        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .info-column {
            text-align: center;
          }

          .info-item {
            justify-content: center;
            text-align: left;
          }

          .form-wrapper {
            padding: 24px;
          }
        }

        @media (max-width: 600px) {
          .form-group-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
          
          h2 {
            font-size: 2.1rem;
          }
        }
      `}</style>
    </section>
  );
}
