import React from "react";
import styles from "./CarrouselBanner.module.css";
import { Icon } from "@iconify/react";
import Image from "next/image";

interface CarrouselBannerProps {
  datasrc: Array<dataImage>;
}

interface dataImage {
  image: string;
  alt: string;
}

const CarrouselBanner = ({ datasrc }: CarrouselBannerProps) => {
  return (
    <div className={styles.carrouselContainer}>
      <button id="buttonCarrouselLeft" className={styles.buttonCarrousel}>
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
      <button id="buttonCarrouselRight" className={styles.buttonCarrousel}>
        <Icon fontSize={24} icon="mdi:arrow-right" />
      </button>
    </div>
  );
};

export default CarrouselBanner;
