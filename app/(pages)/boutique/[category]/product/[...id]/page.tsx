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
import ColorPalette from "@/app/_components/ui/color-palette/color-palette";

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
      alt: "1"
    },
    {
      imagesrc: "/img/placeholder_product.jpg",
      alt: "2"
    },
    {
      imagesrc: "/img/Summer-Scene-Light.png",
      alt: "3"
    },
    {
      imagesrc: "/img/placeholder_product.jpg",
      alt: "4"
    },
    {
      imagesrc: "/img/placeholder_product.jpg",
      alt: "5"
    },
  ]

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Breadcrumbs />
        <ButtonSecondary href="/homepage">
          Retour
        </ButtonSecondary>
        {data.map((data) => (
          <section key={data.id} className={styles.detailGrid}>
            <article className={styles.detailImageContainer}>
              {tempData.map((data, index) => (
                <div className={styles.detailProductImageContainer} key={index}>
                  <Image src={data.imagesrc} alt={data.alt} fill loading="eager" />
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

              <h3>Taille(s) disponible</h3>
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

              <h3>Couleur(s) disponible</h3>
              <ul className={styles.productSizeList}>
                <li><ColorPalette colorName="Red" color="red"onClick={() => console.log("test")} /></li>
                <li><ColorPalette colorName="Magenta" color="Magenta"onClick={() => console.log("test")} /></li>
                <li><ColorPalette colorName="Green" color="green" onClick={() => console.log("test")} /></li>
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
