import type { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import styles from "./shop.module.css";
import Navbar from "../components/navbar/Navbar";
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
      <Navbar />
      <main className={styles.shopLayout}>
        <Breadcrumbs />
        {children}
      </main>
    </>
  );
}
