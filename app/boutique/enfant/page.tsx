import styles from "../shop.module.css";
import Filter from "@/app/components/Filter/Filter";
import { dataCard } from "@/app/assets/dataCard";
import ProductCard from "@/app/components/productCard/ProductCard";

export default function Enfant() {
  return (
    <div className={styles.contentContainer}>
      {/* Filter for the shop */}
      <aside></aside>
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
            size={data.size}
            price={data.price}
            tags={data.tags}
          />
        ))}
      </section>
    </div>
  );
}
