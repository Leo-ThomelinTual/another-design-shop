"use client";
import React, { useState } from "react";
import styles from "./CarrouselBanner.module.css";
import { Icon } from "@iconify/react";
import Image from "next/image";

interface CarrouselBannerProps {
  datasrc: Array<string>;
}

// type dataImage = {
//   datasrc: string[];
// };

const CarrouselBanner = ({ datasrc }: CarrouselBannerProps) => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((current) => (current === 0 ? datasrc.length - 1 : current - 1));
  };

  const next = () => {
    setCurrent((current) => (current === datasrc.length - 1 ? 0 : current + 1));
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
        {datasrc.map((data, index) => (
          <Image
            key={index}
            src={data.image}
            alt={data.alt}
            width={2000}
            height={500}
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
