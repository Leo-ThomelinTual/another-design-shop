import type { Metadata } from "next";
import Navbar from "../_components/common/navbar/navbar";
import Footer from "../_components/common/footer/footer";

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
