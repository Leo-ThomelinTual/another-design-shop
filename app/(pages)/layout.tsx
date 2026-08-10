import type { Metadata } from "next";
import Navbar from "../_components/Navbar/Navbar";
import Footer from "../_components/Footer/Footer";

export const metadata: Metadata = {
  title: "Another Design Shop",
  description: "Another Design Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
