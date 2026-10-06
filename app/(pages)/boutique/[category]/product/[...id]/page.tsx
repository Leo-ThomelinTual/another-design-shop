"use client"

import Breadcrumbs from "@/app/_components/ui/breadcrumbs/breadcrumbs";
import { GetShopsById } from "@/app/middleware/shop";
import Image from "next/image";
import styles from "../product.module.css"
import { use } from "react";
import ButtonSecondary from "@/app/_components/ui/button-secondary/button-secondary";
import QuickActionButton from "@/app/_components/common/quick-action/quick-action";
import ItemQuantity from "@/app/_components/common/item-quantity/item-quantity";
import ButtonPrimary from "@/app/_components/ui/button-primary/button-primary";
import Navbar from "@/app/_components/common/navbar/navbar";

export default function Page({
  params
}: {
    params: Promise<{category: string,  id: number }>;
}) {
  const { category, id } = use(params);

  const data = GetShopsById(category, id);

  const tempData = [
    {
      imagesrc: "/img/placeholder_product.jpg",
      alt: ""
    },
    {
      imagesrc: "/img/placeholder_product.jpg",
      alt: ""
    },
    {
      imagesrc: "/img/placeholder_product.jpg",
      alt: ""
    },
    {
      imagesrc: "/img/placeholder_product.jpg",
      alt: ""
    },
    {
      imagesrc: "/img/placeholder_product.jpg",
      alt: ""
    },
  ]

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Breadcrumbs />
        <ButtonSecondary>
          Retour
        </ButtonSecondary>
        {data.map((data) => (
          <section key={data.id} className={styles.detailGrid}>
            <article className={styles.detailImageContainer}>
              {/*<Image className={styles.image} src="/img/placeholder_product.jpg" alt={`${data.alt}`} width={700} height={500} loading="eager" />*/}
              {tempData.map((data, index) => (
                <div className={styles.detailProductImageContainer} key={index}>
                  <Image src={data.imagesrc} alt={data.alt} width={500} height={500} loading="eager" />
                </div>
              ))}
            </article>

            <article className={styles.productDetails}>
              <h2>{data.title}</h2>
              <p>{data.description}</p>

              {/* Product détails list */}
              <h3>Détails du produit</h3>
              <ul className={styles.detailsProductList}>
                <li>qsdqs</li>
                <li>qdqsd</li>
                <li>qsdqs</li>
              </ul>

              <h3>Taille disponible</h3>
              <ul className={styles.productSizeList}>
                <li>
                  <ButtonSecondary>XXL</ButtonSecondary>
                </li>
                <li>
                  <ButtonSecondary>XL</ButtonSecondary>
                </li>
                <li>
                  <ButtonSecondary>L</ButtonSecondary>
                </li>
              </ul>
            </article>


            <article className={styles.detailsFooter}>
              <p className={styles.price}>{data.price}€</p>
              <div className={styles.detailsCartUtility}>
                <ItemQuantity />
                <QuickActionButton toggleFavorite={true} toggleWishlist={true} />
                <ButtonPrimary>Ajouter au panier</ButtonPrimary>
              </div>
            </article>

          </section>
        ))}
      </main>
      </>
  );
}
