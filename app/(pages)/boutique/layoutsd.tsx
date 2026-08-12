"use client"
import Breadcrumbs from "@/app/_components/Breadcrumbs/Breadcrumbs";
import styles from "./shop.module.css";
import ButtonPrimary from "@/app/_components/Utils/ButtonPrimary/ButtonPrimary";
import Sort from "@/app/_components/Sort/Sort";
import Filter from "@/app/_components/Filter/Filter";
import { dataCard } from "@/app/_lib/dataCard";
import ProductCard from "@/app/_components/ProductCard/ProductCard";
import { Icon } from "@iconify/react";
import { use, useState } from "react";

type ShopLayout = {
  params: Promise<{ category: string; gender: string; item: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  children: React.ReactNode;
}

export default function ShopLayout({ params, children }:ShopLayout ) {

  const { category, gender } = use(params);
  // const { query } = use(searchParams);

  const [isFilterActive, setFilterAsActive] = useState<boolean>(false);
  const [childData, setChildData] = useState<string>("999");
  const [sizeData, setSizeData] = useState<[string]>();

  const handleData = (price: string) => {
    setChildData(price);
  };
  const handleDataSize = (size: [string]) => {
    setSizeData(size);
  }

  const toggleFilter = () => {
    setFilterAsActive(!isFilterActive)
  }

  return (<main className={styles.shopLayout}>
    <Breadcrumbs />
    <div className={styles.filterContainer}>
      <ButtonPrimary onClick={() => toggleFilter()}>
        <Icon fontSize={24} icon="mdi:filter" />
        Ouvrir le filtre
      </ButtonPrimary>
      <Sort />
    </div>
    <div
      className={
        styles.contentContainer +
        " " +
        (isFilterActive ? styles.contentContainerActive : "")
      }
    >
      <div className={styles.filter}>
        {/* Filter for the shop */}
        {isFilterActive ? (
          <aside>
            <Filter onPriceChange={handleData} onParams={handleDataSize} />
          </aside>
        ) : null}
      </div>

        {/* SHOP Section */}
      <section className={styles.cardContainer}>
        {dataCard.map((data, index) =>
          data.price <= childData &&
          // data.size === sizeData &&
          // data.tags === query &&
          data.for === category ? (
            <ProductCard
              key={index}
              image={data.image}
              alt={data.alt}
              title={data.title}
              description={data.description}
              link={data.link}
              price={data.price}
              tags={data.tags}
            />
          ) : null,
        )}
      </section>
    </div>

    {children}</main>);
}
