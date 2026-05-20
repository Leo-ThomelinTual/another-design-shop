import Image from "next/image";
import styles from "./productCard.module.css";
import Link from "next/link";

interface productCardProps {
  image: string;
  alt: string;
  link: string;
  title: string;
  description: string;
  price: number;
}

const ProductCard = ({
  image,
  alt,
  link,
  title,
  description,
  price,
}: productCardProps) => {
  return (
    <Link className={styles.card} href={link}>
      <Image src={image} alt={alt} height={200} width={400} loading="eager" />

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p>
          {description.length > 200
            ? `${description.substring(0, 200)} ...`
            : description}
        </p>
        <p className={styles.cardPrice}>{price}€</p>
      </div>
    </Link>
  );
};

export default ProductCard;
