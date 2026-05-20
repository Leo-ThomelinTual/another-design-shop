import styles from "./page.module.css";

import Hero from "./components/hero/Hero";
import Card from "./components/Card/card";
import CarouselProduct from "./components/CarouselProduct/CarouselProduct";
import { datas } from "./components/CarouselProduct/CarouselData";

export default function Home() {
  return (
    <>
      <Hero />
      <main className={styles.main}>
        <section className={styles.showcaseBento}>
          <div className={styles.imagePlaceholder} />
          <div className={styles.imagePlaceholder} />
          <div className={styles.imageBannerPlaceholder} />
        </section>

        <section className={styles.showcase}>
          <div className={styles.imagePlaceholder} />

          <article className={styles.showcaseDescription}>
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati consectetur perspiciatis neque. Maxime provident iusto
              debitis incidunt, doloremque molestiae eum similique voluptatibus
              necessitatibus quas fugiat eveniet repellat corporis quae dolor!
            </p>
          </article>
        </section>

        <section className={styles.productCardContainer}>
          <h1 className={styles.titleCard}>Placeholder title</h1>

          <CarouselProduct />
        </section>

        <section className={styles.shopCardContainer}>
          <h1 className={styles.titleCard}>Placeholder title</h1>
          <div className={styles.cardContainer}>
            {datas.map((data, index) => (
              <Card
                key={index}
                image={data.image}
                alt={data.alt}
                title={data.title}
                description={data.description}
                link={data.link}
                price={data.price}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
