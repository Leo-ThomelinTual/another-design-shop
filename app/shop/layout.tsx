import type { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
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
      <Breadcrumbs />
      {children}
    </>
  );
}
