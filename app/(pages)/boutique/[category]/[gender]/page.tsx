"use client";

import styles from "../../shop.module.css";
import { dataCard } from "@/app/_lib/dataCard";
import ProductCard from "@/app/_components/ProductCard/ProductCard";
import { use, useState } from "react";
import FilterBy from "@/app/_components/Sort/Sort";
import ButtonPrimary from "@/app/_components/Utils/ButtonPrimary/ButtonPrimary";
import Filter from "@/app/_components/Filter/Filter";
import Breadcrumbs from "@/app/_components/Breadcrumbs/Breadcrumbs";
import { Icon } from "@iconify/react";

export default function Page({
  params,
  searchParams,
}: {
  params: Promise<{ category: string; gender: string; item: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { category, gender } = use(params);
  const { query } = use(searchParams);
  const [isFilterActive, setFilterAsActive] = useState<boolean>(false);
  const [childData, setChildData] = useState<number>(999);
  const [sizeData, setSizeData] = useState<[string]>();
  const [forData, setForData] = useState<string>();

  const handleData = (price: number) => {
    setChildData(price);
  };
  const handleDataSize = (size: [string]) => {
    setSizeData(size);
  };

  // useEffect(() => {
  //   const a = cookieStore.get("filter");

  //   console.log(a);
  // }, []);

  const toggleFilter = () => {
    setFilterAsActive(!isFilterActive);
    // const toggleFilter = cookieStore.set("filter", `${isFilterActive}`);
  };

  return (
    <>
      <Breadcrumbs />
      <div className={styles.filterContainer}>
        <ButtonPrimary onClick={() => toggleFilter()}>
          <Icon fontSize={24} icon="mdi:filter" />
          Ouvrir le filtre
        </ButtonPrimary>
        <FilterBy />
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
              <Filter onPriceChange={handleData} />
            </aside>
          ) : null}
          {/* SHOP Section */}
        </div>


        <section className={styles.cardContainer}>
          {dataCard.map((data, index) =>
            data.price <= childData &&
            // data.size === sizeData &&
            // data.gender === gender &&
            data.for === category ? (
              <ProductCard
                key={index}
                image={data.image}
                alt={data.alt}
                title={data.title}
                description={data.description}
                link={data.link}
                price={data.price}
                // size={data.size}
                tags={data.tags}
              />
            ) : null,
          )}

        </section>
      </div>
    </>
  );
}
