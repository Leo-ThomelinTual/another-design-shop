"use client"

import Breadcrumbs from "@/app/_components/ui/breadcrumbs/breadcrumbs";
import { GetShopsById } from "@/app/middleware/shop";
import Image from "next/image";
import styles from "../product.module.css"
import { use } from "react";
import ButtonSecondary from "@/app/_components/ui/button-secondary/button-secondary";
import QuickActionButton from "@/app/_components/common/quick-action/quick-action";
import ItemQuantity from "@/app/_components/common/item-quantity/item-quantity";
import Router from "next/router";

export default function Page({
  params
}: {
    params: Promise<{category: string,  id: string | number }>;
}) {
  const { category, id } = use(params);

  const data = GetShopsById(category, id);

  return (
    <>
      <Breadcrumbs />
      <section className={styles.detailGrid}>
        <article className={styles.detailImageContainer}>
          <Image className={styles.image} src={"/img/" + data.image + ".jpg"} alt={`${data.alt}`} width={700} height={500} loading="eager"/>
          <button>Button</button>
          <button>Button</button>
        </article>
        <article className={styles.detailDescription}>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </article>
        <article className={styles.details}>
        </article>

        <article className={styles.detailFooter}>
          <ButtonSecondary>Retour</ButtonSecondary>
          <div className={styles.detailButton}>
            <ItemQuantity />
            <QuickActionButton />
            <div className={styles.buttonPrice}>
              <p className={styles.price}>{data.price}€</p>
              <ButtonSecondary isActive className={styles.buttonBuy}>Buy</ButtonSecondary>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
