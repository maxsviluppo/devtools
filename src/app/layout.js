import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "DevTools | Web Agency, Formazione & Innovazione",
  description: "Web agency creativa e centro di formazione d'avanguardia a Napoli. Realizziamo siti web, e-commerce, grafica 3D, social media marketing e offriamo corsi di formazione per tutte le età.",
  keywords: "web agency napoli, corsi informatica napoli, patente europea icdl, grafica pubblicitaria, modellazione 3d, intelligenza artificiale, cybersicurezza, social media marketing",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
