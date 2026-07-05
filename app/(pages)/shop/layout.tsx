import { Metadata } from "next";
import styles from "./shop.module.css";
import Breadcrumbs from "@/app/_components/Breadcrumbs/Breadcrumbs";

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
      <main className={styles.shopLayout}>{children}</main>
    </>
  );
}
