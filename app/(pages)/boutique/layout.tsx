import { Metadata } from "next";
import styles from "./shop.module.css";

export const metadata: Metadata = {
  title: "Boutique",
  description: "Boutique",
};

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className={styles.shopLayout}>{children}</main>;
}
