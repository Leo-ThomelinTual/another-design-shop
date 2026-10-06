import Footer from "@/app/_components/common/footer/footer";
import Navbar from "@/app/_components/common/navbar/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homepage",
  description: "Homepage",
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
