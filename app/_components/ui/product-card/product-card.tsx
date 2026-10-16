"use client"
import Image from "next/image";
import styles from "./product-card.module.css";
import Link from "next/link";
import Tags from "../tags/tags";
import { GetShops } from "@/app/middleware/shop";
import { useEffect, useState } from "react";

interface ShopData {
  id: string;
  alt: string;
  title: string;
  description: string;
  price: number;
}

interface productCardProps {
  // isProductShoes?: boolean | false;
  // isProductPants?: boolean | false;
  // isProductShirt?: boolean | false;
  tags: string[];
  priceMax: number;
  category: string;
}

const ProductCard = ({
  tags,
  priceMax,
  category
}: productCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const data = GetShops(category);

  useEffect(() => {
    const Loading = async () => {
      setIsLoading(true);
    }
    Loading();
    try {

    } catch (error) {
      console.error("Erreur lors du chargement du produits:", error);
    } finally {
      setIsLoading(false);
    }
  }, [category])

  if (isLoading) {
    return <div>Chargement des produits</div>
  }

  const filteredProducts = data.filter((data: ShopData) => data.price <= priceMax);

  if (filteredProducts.length === 0) {
    return <div>Aucun produit trouvé dans cette catégorie sous le prix de {priceMax} €</div>
  }

  return (
    <>
      {filteredProducts.map((data) => (
        <Link key={data.id} className={styles.card} href={`/boutique/${category}/product/${data.id}`}>
          <div className={styles.cardImageContainer}>
            <Image src="/img/placeholder_product.jpg" alt={data.alt} fill loading="eager" sizes="24" />
          </div>

          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{data.title}</h3>
            <div className={styles.tagsContainer}>
              {tags.map((tag, index) => (
                <Tags key={index}>{tag ? tag : ["homme", "femme"]}</Tags>
              ))}
            </div>
            <p>
              {data.description.length > 150
                ? `${data.description.substring(0, 150)} ...`
                : data.description}
            </p>
            <p className={styles.cardPrice}>{data.price}€</p>
          </div>
        </Link>
      ))}
  </>
  );
};

export default ProductCard;
