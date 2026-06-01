import styles from "../shop.module.css";
import Filter from "@/app/components/Filter/Filter";
import { dataCard } from "@/app/assets/dataCard";
import ProductCard from "@/app/components/productCard/ProductCard";

export default function Femme() {
  return (
    <div className={styles.contentContainer}>
      {/* Filter for the shop */}
      <aside>
        <Filter />
      </aside>
      {/* SHOP Section */}
      <section className={styles.cardContainer}>
        {dataCard.map((data, index) => (
          <ProductCard
            key={index}
            image={data.image}
            alt={data.alt}
            title={data.title}
            description={data.description}
            link={data.link}
            price={data.price}
            tags={data.tags}
          />
        ))}
      </section>
    </div>
  );
}
