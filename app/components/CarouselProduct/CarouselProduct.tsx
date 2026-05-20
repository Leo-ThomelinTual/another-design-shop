"use client";
import { Icon } from "@iconify/react";
import styles from "./CarouselProduct.module.css";
import React, { useState } from "react";
import CardProduct from "../Card_product/Card_product";
import { datas } from "./CarouselData";

const CarouselProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className={styles.cardButtonContainer}>
      <button className={styles.prevCardButton}>
        <Icon icon="mdi:arrow-left" fontSize={24} />
      </button>
      <div className={styles.productCardContent}>
        {datas.map((data, index) => (
          <CardProduct
            key={index}
            image={data.image}
            alt={data.alt}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
      <button
        className={styles.nextCardButton}
      >
        <Icon icon="mdi:arrow-right" fontSize={24} />
      </button>
    </div>
  );
};

export default CarouselProduct;
