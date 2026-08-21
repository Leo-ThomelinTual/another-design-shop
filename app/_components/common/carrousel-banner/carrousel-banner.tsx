"use client";
import { useState } from "react";
import styles from "./carrousel-banner.module.css";
import { Icon } from "@iconify/react";
import Banner from "../../ui/banner/banner";
import { dataCarrousel } from "@/app/_lib/dataCarrousel";

interface CarrouselBannerProps {
  datasrc: Array<string>;
}

const CarrouselBanner = () => {
  const [current, setCurrent] = useState<number>(0);

  const prev = () => {
    setCurrent((current) => (current === 0 ? dataCarrousel.length - 1 : current - 1));
    console.log(current)
  };

  const next = () => {
    setCurrent((current) => (current === dataCarrousel.length - 1 ? 0 : current + 1));
    console.log(current)
  };

  return (
    <div className={styles.carrouselContainer}>
      <button
        id="buttonCarrouselLeft"
        onClick={prev}
        className={styles.buttonCarrousel}
      >
        <Icon fontSize={24} icon="mdi:arrow-left" />
      </button>
      <div className={styles.bannerCarrousel}>
        {dataCarrousel.map((data, index) => (
          <Banner
            key={index}
            className={styles.banner}
            src={data.src}
            alt={data.alt}
          />
        ))}
      </div>
      <button
        id="buttonCarrouselRight"
        onClick={next}
        className={styles.buttonCarrousel}
      >
        <Icon fontSize={24} icon="mdi:arrow-right" />
      </button>
    </div>
  );
};

export default CarrouselBanner;
