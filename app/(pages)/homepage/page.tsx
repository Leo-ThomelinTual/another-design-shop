import ShopNavbar from "@/app/_components/common/shop-navbar/shop-navbar";
import styles from "./page.module.css";
import Banner from "@/app/_components/ui/banner/banner";

export default function Home() {
  return (
    <>
      <ShopNavbar />
      <Banner className={styles.headerBanner} src="/img/Banner-1.jpg" />
      <main className={styles.main}>
        <section className={styles.showcaseBento}>
          <Banner src="/img/Banner-1.jpg" href="/boutique/femme" alt="test" />
          <Banner src="/img/Banner-2.jpg" alt="test" />
          <Banner src="/img/Banner-2.jpg" alt="test" />
        </section>
      </main>
    </>
  );
}
