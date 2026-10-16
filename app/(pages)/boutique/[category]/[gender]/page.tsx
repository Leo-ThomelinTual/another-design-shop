"use client";

import styles from "../../shop.module.css";
import { use, useState } from "react";
import ButtonPrimary from "@/app/_components/ui/button-primary/button-primary";
import Filter from "@/app/_components/ui/filter/filter";
import Breadcrumbs from "@/app/_components/ui/breadcrumbs/breadcrumbs";
import { Icon } from "@iconify/react";
import ShopCard from "@/app/_components/common/shop-card/shop-card";
import Sort from "@/app/_components/ui/sort/sort";
import ProductCard from "@/app/_components/ui/product-card/product-card";

export default function Page({
  params,
  searchParams,
}: {
    params: Promise<{ category: string; gender: string; index: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const [isFilterActive, setFilterAsActive] = useState<boolean>(false);
  const [childData, setChildData] = useState<number>(999);

  const { category } = use(params);

  const handleData = (price: number) => {
    setChildData(price);
  };

  return (
    <>
      <main>
        <Breadcrumbs />
        <section className={styles.shopContainer}>
          <div className={styles.filterContainer}>
            <ButtonPrimary onClick={() => setFilterAsActive(!isFilterActive)}>
              <Icon fontSize={24} icon="mdi:filter" />
              Ouvrir le filtre
            </ButtonPrimary>
            <Sort />
          </div>
          <Filter className={styles.filter} onPriceChange={handleData} isFilterActive={isFilterActive} />
          <section className={styles.contentContainer}>
            <ProductCard category={category} priceMax={childData} tags={[]} />
          </section>
        </section>
      </main>
    </>
  );
}
