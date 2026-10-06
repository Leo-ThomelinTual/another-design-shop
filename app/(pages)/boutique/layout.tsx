import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boutique",
  description: "Boutique",
};

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
