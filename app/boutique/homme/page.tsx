"use client";
import styles from "../shop.module.css";
import Filter from "@/app/components/Filter/Filter";
import { dataCard } from "@/app/assets/dataCard";
import ProductCard from "@/app/components/productCard/ProductCard";
import { useState } from "react";
import ButtonPrimary from "@/app/components/ButtonPrimary/ButtonPrimary";
import FilterBy from "@/app/components/FilterBy/FilterBy";
import CarrouselBanner from "@/app/components/CarrouselBanner/CarrouselBanner";
import { placeholderHommeProduct } from "@/app/assets/placeholderHommeProduct";

export default function Homme() {
  const [isFilterActive, setFilterAsActive] = useState<boolean>(true);
  const [childData, setChildData] = useState<number>(999);
  const [sizeData, setSizeData] = useState<[string, string]>();

  const handleData = (price: number) => {
    setChildData(price);
  };
  const handleDataSize = (size: [string, string]) => {
    setSizeData(size);
  };

  return (
    <>
      <CarrouselBanner datasrc={placeholderHommeProduct} />
      <div className={styles.filterContainer}>
        <ButtonPrimary
          asIcon={true}
          icon="mdi:filter"
          asText={true}
          isButton={true}
          href=""
          onClick={() => setFilterAsActive(!isFilterActive)}
        >
          Ouvrir filtre
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
            data.price <= childData || data.size === sizeData ? (
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
