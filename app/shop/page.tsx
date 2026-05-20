import styles from "./shop.module.css";
import { datas } from "../components/CarouselProduct/CarouselData";
import ProductCard from "../components/productCard/ProductCard";
import Filter from "../components/Filter/Filter";

export default function Shop() {
  return (
    <main className={styles.shopLayout}>
      {/* Filter for the shop */}
      <aside className={styles.filter}>
        <Filter />
      </aside>
      <div className={styles.shopContainer}>
        <select className={styles.filterOptions}>
          <option value="pertinence">Pertinence</option>
          <option value="prix_croissant">Prix croissant</option>
          <option value="prix_décroissant">Prix décroissant</option>
        </select>

        {/* SHOP Section */}
        <section className={styles.cardContainer}>
          {datas.map((data, index) => (
            <ProductCard
              key={index}
              image={data.image}
              alt={data.alt}
              title={data.title}
              description={data.description}
              link={data.link}
              price={data.price}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
