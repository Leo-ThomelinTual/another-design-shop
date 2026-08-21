import styles from "./page.module.css";
import Banner from "@/app/_components/ui/banner/banner";

export default function Home() {
  return (
    <>
      <header>
        <Banner src="/img/Banner-1.jpg" />
      </header>
      <main className={styles.main}>
        <section className={styles.showcaseBento}>
          <Banner className={styles.colspan4} src="/img/Banner-1.jpg" href="/boutique/femme" alt="test" />
          <Banner className={styles.colspan2} src="/img/Banner-2.jpg" alt="test" />
          <Banner className={styles.colspan2} src="/img/Banner-2.jpg" alt="test" />
        </section>
      </main>
    </>
  );
}
