"use client";
import styles from "../shop.module.css";
import Filter from "@/app/components/Filter/Filter";
import { dataCard } from "@/app/assets/dataCard";
import ProductCard from "@/app/components/productCard/ProductCard";
import { useState } from "react";
import ButtonPrimary from "@/app/components/ButtonPrimary/ButtonPrimary";
import FilterBy from "@/app/components/FilterBy/FilterBy";
import { dataBanner } from "@/app/assets/dataBanner";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Homme() {
  const [isFilterActive, setFilterAsActive] = useState<boolean>(true);

  return (
    <>
      <div className={styles.carrouselContainer}>
        <button id="buttonCarrouselLeft" className={styles.buttonCarrousel}>
          <Icon fontSize={24} icon="mdi:arrow-left" />
        </button>
        <div className={styles.bannerCarrousel}>
          {dataBanner.map((data, index) => (
            <Image
              key={index}
              src={data.image}
              alt={data.alt}
              width={2226}
              height={500}
            />
          ))}
        </div>
        <button id="buttonCarrouselRight" className={styles.buttonCarrousel}>
          <Icon fontSize={24} icon="mdi:arrow-right" />
        </button>
      </div>

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
            <Filter />
          </aside>
        ) : null}
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
              price={data.price}
              tags={data.tags}
            />
          ))}
        </section>
      </div>
    </>
  );
}
