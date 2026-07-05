import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./_components/navbar/Navbar";
import Footer from "./_components/footer/Footer";
export const metadata: Metadata = {
  title: "Redirection...",
  description: "Redirection en cours...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
