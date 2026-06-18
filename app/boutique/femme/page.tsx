"use client";
import styles from "../shop.module.css";
import Filter from "@/app/components/Filter/Filter";
import { dataCard } from "@/app/assets/dataCard";
import ProductCard from "@/app/components/productCard/ProductCard";
import CarrouselBanner from "@/app/components/CarrouselBanner/CarrouselBanner";
import ButtonPrimary from "@/app/components/ButtonPrimary/ButtonPrimary";
import FilterBy from "@/app/components/FilterBy/FilterBy";
import { useState } from "react";
import { placeholderFemmeProduct } from "@/app/assets/placeholderFemmeProduct";

export default function Femme() {
  const [isFilterActive, setFilterAsActive] = useState<boolean>(true);

  return (
    <>
      <CarrouselBanner datasrc={placeholderFemmeProduct} />
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
        {isFilterActive ? <aside></aside> : null}
        {/* SHOP Section */}
        <section className={styles.cardContainer}>
          {dataCard.map((data, index) => (
            <ProductCard
              key={index}
              image={data.image}
              alt={data.alt}
              title={data.title}
              description={data.description}
              link={data.link}
              size={data.size}
              price={data.price}
              tags={data.tags}
            />
          ))}
        </section>
      </div>
    </>
  );
}
