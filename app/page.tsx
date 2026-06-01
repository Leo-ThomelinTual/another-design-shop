import styles from "./page.module.css";
import Hero from "./components/hero/Hero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <main className={styles.main}>
        <section className={styles.showcaseBento}>
          <Link className={styles.imageBoxLink} href="/ado">
            <Image className={styles.imageBox} src="/img/Banner-2.png" alt="" width={1105} height={500} />
          </Link>
          <Link className={styles.imageBoxLink} href="/ado">
            <Image className={styles.imageBox} src="/img/Banner-2.png" alt="" width={1105} height={500} />
          </Link>
          <Link className={styles.imageBannerLink} href="/femme">
            <Image className={styles.imageBanner} src="/img/Banner-1.png" alt="" width={2226} height={500} />
          </Link>
          <Link className={styles.imageBannerLink} href="/femme">
            <Image className={styles.imageBanner} src="/img/Banner-1.png" alt="" width={2226} height={500} />
          </Link>
        </section>
      </main>
    </>
  );
}
