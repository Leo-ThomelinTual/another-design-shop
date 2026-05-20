import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

interface CardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  link: string;
  price: number;
}

const Card = ({ image, alt, title, description, link, price }: CardProps) => {
  return (
    <article className={styles.cardContainer}>
      <div className={styles.cardImageContainer}>
        <Image src={image} fill alt={alt} />
      </div>
      <div className={styles.cardContent}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className={styles.cardContentBottom}>
        <Link className={styles.cardContentBottomLink} href={link}>
          En savoir plus
        </Link>
        <p className={styles.cardPrice}>{price}€</p>
      </div>
    </article>
  );
};

export default Card;
