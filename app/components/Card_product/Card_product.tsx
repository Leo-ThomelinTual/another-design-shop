import styles from "./Card_product.module.css";
import Image from "next/image";

interface CardProductProps {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const CardProduct = ({ image, alt, title, description }: CardProductProps) => {
  return (
    <article className={styles.cardProduct}>
      <Image className={styles.cardImage} src={image} alt={alt} fill />
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default CardProduct;
