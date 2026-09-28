"use client"
import styles from "../shop.module.css";
import Breadcrumbs from "@/app/_components/ui/breadcrumbs/breadcrumbs";
import ShopCard from "@/app/_components/common/shop-card/shop-card";
import Filter from "@/app/_components/ui/filter/filter";
import ButtonPrimary from "@/app/_components/ui/button-primary/button-primary";
import { Icon } from "@iconify/react";
import Sort from "@/app/_components/ui/sort/sort";
import { use, useState } from "react";

export default function Page({
  params,
  searchParams,
}: {
    params: Promise<{ category: string; gender: string; index: string }>
  searchParams: Promise<{ [category: string]: string | string[] | undefined }>;
  }) {

  const { category } = use(params);

  const [isFilterActive, setFilterAsActive] = useState<boolean>(false);
  const [childData, setChildData] = useState<number>(999);
    const handleData = (price: number) => {
      setChildData(price);
    };

  return (
    <>
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
          <ShopCard category={category} price={childData} />
        </section>
      </section>
    </>
  );
}
