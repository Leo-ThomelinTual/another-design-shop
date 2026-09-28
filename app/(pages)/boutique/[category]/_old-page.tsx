"use client";

import styles from "../shop.module.css";
import { dataCard } from "@/app/_lib/dataCard";
import ProductCard from "@/app/_components/ui/product-card/product-card";
import { use, useState } from "react";
import FilterBy from "@/app/_components/ui/sort/sort";
import ButtonPrimary from "@/app/_components/ui/button-primary/button-primary";
import Filter from "@/app/_components/ui/filter/filter";
import Breadcrumbs from "@/app/_components/ui/breadcrumbs/breadcrumbs";
import { Icon } from "@iconify/react";

export default function Page({
  params,
  searchParams,
}: {
    params: Promise<{ category: string; gender: string; index: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { category, gender, index } = use(params);
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
        <section className={styles.cardContainer}>
          {dataCard.map((data, id) =>
            data.price <= childData &&
            // data.size === sizeData &&
            // data.tags === query &&
            data.for === category ? (
              <ProductCard
                key={id}
                image={data.image}
                alt={data.alt}
                title={data.title}
                description={data.description}
                link={`/product/${data.title}/shop-${id}`}
                price={data.price}
                tags={data.tags}
              />
            ) : null,
          )}
        </section>

    </>
  );
}
