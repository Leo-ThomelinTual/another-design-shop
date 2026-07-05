"use client";

import styles from "../shop.module.css";
import Filter from "@/app/_components/Filter/Filter";
import { dataCard } from "@/app/_lib/dataCard";
import ProductCard from "@/app/_components/productCard/ProductCard";
import { use, useState } from "react";
import FilterBy from "@/app/_components/Sort/Sort";
import ButtonPrimary from "@/app/_components/Utils/Buttons/ButtonPrimary/ButtonPrimary";

export default function Page({
  params,
  searchParams,
}: {
  params: Promise<{ category: string; item: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { category } = use(params);
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
      <p>
        {category} {query}
      </p>
      <div className={styles.filterContainer}>
        <ButtonPrimary onClick={() => toggleFilter()}>
          Ouvrir le filtre
        </ButtonPrimary>
        <FilterBy />
      </div>
      <div className={styles.contentContainer}>
        {/* Filter for the shop */}
        {isFilterActive ? (
          <aside>
            <Filter onPriceChange={handleData} onParams={handleDataSize} />
          </aside>
        ) : null}
        {/* SHOP Section */}
        <section className={styles.cardContainer}>
          {dataCard.map((data, index) =>
            data.price <= childData &&
            // data.size === sizeData &&
            data.for === category ? (
              <ProductCard
                key={index}
                image={data.image}
                alt={data.alt}
                title={data.title}
                description={data.description}
                link={data.link}
                price={data.price}
                size={data.size}
                tags={data.tags}
              />
            ) : null,
          )}
        </section>
      </div>
    </>
  );
}
