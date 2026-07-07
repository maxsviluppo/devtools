import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "CodeCafe | Web Agency, Formazione & Innovazione",
  description: "Web agency creativa e centro di formazione d'avanguardia a Napoli. Realizziamo siti web, e-commerce, grafica 3D, social media marketing e offriamo corsi di formazione per tutte le età.",
  keywords: "web agency napoli, corsi informatica napoli, patente europea icdl, grafica pubblicitaria, modellazione 3d, intelligenza artificiale, cybersicurezza, social media marketing, codecafe",
  applicationName: "CodeCafe",
  appleWebApp: {
    capable: true,
    title: "CodeCafe",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: "/faviconcafe.png",
    apple: "/faviconcafe.png",
    shortcut: "/faviconcafe.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <link rel="icon" href="/faviconcafe.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/faviconcafe.png" type="image/png" />
        <link rel="apple-touch-icon" href="/faviconcafe.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
