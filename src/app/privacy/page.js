'use client';

import React from 'react';

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <div className="privacy-container">
        <header className="privacy-header">
          <span className="badge">Legal</span>
          <h1>Privacy Policy & Cookie Policy</h1>
          <p className="subtitle">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </header>

        <div className="privacy-content glass-panel animate-fade-in">
          <section className="privacy-section">
            <h2>1. Titolare del Trattamento dei Dati</h2>
            <p>
              I dati personali raccolti attraverso questo sito web sono custoditi e gestiti da:
            </p>
            <div className="holder-card">
              <h3>Castro Massimo</h3>
              <p className="role">CEO & Creatore dei Contenuti</p>
              <p>Titolare e detentore esclusivo dei dati (indirizzi email o qualsiasi altra informazione fornita volontariamente dagli utenti).</p>
              <p className="email-link">
                Contatto: <a href="mailto:castromassimo@gmail.com">castromassimo@gmail.com</a>
              </p>
            </div>
          </section>

          <section className="privacy-section">
            <h2>2. Luogo e Modalità di Conservazione dei Dati</h2>
            <p>
              La sicurezza e l'integrità dei tuoi dati sono una nostra assoluta priorità. I dati vengono trattati nel seguente modo:
            </p>
            <ul>
              <li>
                <strong>Conservazione:</strong> I dati raccolti sono ospitati in sicurezza presso i server di <strong>Vercel Inc.</strong>, la piattaforma di hosting cloud professionale che ospita l'infrastruttura di questo sito web.
              </li>
              <li>
                <strong>Gestione:</strong> I dati personali sono gestiti solo ed esclusivamente dalla nostra azienda. Non vendiamo, cediamo o distribuiamo dati a terze parti.
              </li>
              <li>
                <strong>Finalità:</strong> L'acquisizione dei dati è limitata alle risposte alle necessità richieste in merito ai servizi e prodotti che noi creiamo ad hoc sulle esigenze specifiche dei nostri clienti.
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>3. Tipologia di Dati Trattati</h2>
            <p>
              Questo sito raccoglie dati personali esclusivamente quando vengono compilati i moduli di contatto o inviate comunicazioni email:
            </p>
            <ul>
              <li>Nome e Cognome</li>
              <li>Indirizzo Email</li>
              <li>Numero di Telefono (se fornito)</li>
              <li>Dati inseriti nel messaggio di richiesta</li>
            </ul>
          </section>

          <section id="cookies" className="privacy-section">
            <h2>4. Cookie Policy</h2>
            <p>
              Questo sito web utilizza cookie tecnici ed essenziali per garantire il corretto funzionamento dell'applicazione e per scopi di analisi interna, in piena conformità alle normative vigenti.
            </p>
            <h3>Tipologie di Cookie Utilizzati</h3>
            <ul>
              <li>
                <strong>Cookie Essenziali/Tecnici:</strong> Necessari per la navigazione e per usufruire delle funzionalità del sito (come la persistenza delle sessioni e la corretta visualizzazione grafica).
              </li>
              <li>
                <strong>Cookie Analitici:</strong> Utilizzati in forma anonima e aggregata al solo scopo statistico per monitorare l'utilizzo del sito e ottimizzarne le performance.
              </li>
            </ul>
            <p>
              È possibile configurare le preferenze relative ai cookie direttamente all'interno delle impostazioni del proprio browser web, bloccando o eliminando i cookie già salvati.
            </p>
          </section>

          <section className="privacy-section">
            <h2>5. Diritti degli Interessati</h2>
            <p>
              Ai sensi del Regolamento Europeo sulla Protezione dei Dati (GDPR), gli utenti hanno il diritto in qualunque momento di:
            </p>
            <ol>
              <li>Richiedere la conferma dell'esistenza o meno dei propri dati personali.</li>
              <li>Conoscerne il contenuto e l'origine.</li>
              <li>Verificarne l'esattezza o chiederne l'integrazione, l'aggiornamento oppure la rettifica.</li>
              <li>Chiederne la cancellazione, la trasformazione in forma anonima o il blocco dei dati trattati in violazione di legge.</li>
            </ol>
            <p>
              Per esercitare qualsiasi diritto, è sufficiente inviare una richiesta scritta a <a href="mailto:castromassimo@gmail.com" className="link">castromassimo@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>

      <style jsx>{`
        .privacy-page {
          min-height: 100vh;
          background-color: var(--bg-primary);
          padding: 120px 24px 80px 24px;
          position: relative;
          color: var(--text-primary);
        }

        .privacy-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .privacy-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .badge {
          display: inline-block;
          padding: 6px 16px;
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--primary);
          background: rgba(255, 156, 90, 0.08);
          border: 1px solid rgba(255, 156, 90, 0.15);
          border-radius: 100px;
          margin-bottom: 16px;
          box-shadow: 0 0 10px rgba(255, 156, 90, 0.1);
        }

        h1 {
          font-family: var(--font-headings);
          font-size: 2.8rem;
          font-weight: 900;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
          background: linear-gradient(135deg, #ffffff 0%, var(--text-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        .privacy-content {
          padding: 48px;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .privacy-section h2 {
          font-family: var(--font-headings);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 16px;
          letter-spacing: -0.01em;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 8px;
        }

        .privacy-section h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-secondary);
          margin: 20px 0 10px 0;
        }

        .privacy-section p {
          font-size: 1.02rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }

        .privacy-section ul, .privacy-section ol {
          padding-left: 20px;
          margin-bottom: 16px;
          color: var(--text-secondary);
          font-size: 1.02rem;
          line-height: 1.7;
        }

        .privacy-section li {
          margin-bottom: 12px;
        }

        .holder-card {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 24px;
          margin-top: 16px;
          box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.01);
        }

        .holder-card h3 {
          margin: 0 0 4px 0;
          color: var(--text-primary);
          font-size: 1.3rem;
          font-weight: 800;
        }

        .role {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--secondary);
          font-weight: 700;
          margin-bottom: 16px !important;
        }

        .email-link {
          margin: 16px 0 0 0 !important;
          font-weight: 700;
        }

        .email-link a, .link {
          color: var(--primary);
          text-decoration: none !important;
          transition: var(--transition-fast);
        }

        .email-link a:hover, .link:hover {
          color: var(--secondary);
          text-shadow: 0 0 8px var(--secondary-glow);
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.2rem;
          }
          
          .privacy-content {
            padding: 24px;
          }
        }
      `}</style>
    </main>
  );
}
