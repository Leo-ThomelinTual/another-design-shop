"use client"
import styles from "../shop.module.css";
import Breadcrumbs from "@/app/_components/ui/breadcrumbs/breadcrumbs";
import Filter from "@/app/_components/ui/filter/filter";
import { Icon } from "@iconify/react";
import Sort from "@/app/_components/ui/sort/sort";
import { Suspense, use, useState } from "react";
import ButtonSecondary from "@/app/_components/ui/button-secondary/button-secondary";
import ShopNavbar from "@/app/_components/common/shop-navbar/shop-navbar";
import Navbar from "@/app/_components/common/navbar/navbar";
import Footer from "@/app/_components/common/footer/footer";
import ProductCard from "@/app/_components/ui/product-card/product-card";

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
      <Navbar />
      <ShopNavbar />
      <main className={styles.shopLayout}>
        <Breadcrumbs />
        <section className={styles.shopContainer}>
          <div className={styles.filterContainer}>
            <ButtonSecondary onClick={() => setFilterAsActive(!isFilterActive)}>
              <Icon fontSize={24} icon="mdi:filter" />
              Ouvrir le filtre
            </ButtonSecondary>
            <Sort />
          </div>
          <Filter className={styles.filter} onPriceChange={handleData} isFilterActive={isFilterActive} />
          <section className={styles.contentContainer}>
            <Suspense>
              <ProductCard category={category} priceMax={childData} tags={[]} />
            </Suspense>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
