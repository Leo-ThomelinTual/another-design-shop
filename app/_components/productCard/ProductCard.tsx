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
  // isProductShoes?: boolean | false;
  // isProductPants?: boolean | false;
  // isProductShirt?: boolean | false;
  // productTarget: "Female" | "Male";
  // isProductForAdult?: boolean | true;
  size: string[];
  tags: string[];
}

const ProductCard = ({
  image,
  alt,
  link,
  title,
  description,
  price,
  size,
  tags,
}: productCardProps) => {
  return (
    <Link className={styles.card} href={link}>
      <div className={styles.cardImageContainer}>
        <Image src={image} alt={alt} fill loading="eager" sizes="24" />
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p>
          {description.length > 200
            ? `${description.substring(0, 200)} ...`
            : description}
        </p>
        <p className={styles.cardPrice}>{price}€</p>
        <p>{tags}</p>
        <p>{size}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
