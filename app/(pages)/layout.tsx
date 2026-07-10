import type { Metadata } from "next";
import Navbar from "../_components/navbar/Navbar";
import Footer from "../_components/footer/Footer";

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
