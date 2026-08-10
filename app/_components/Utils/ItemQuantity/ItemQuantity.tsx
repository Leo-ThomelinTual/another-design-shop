"use client";

import React, { useState } from "react";
import ButtonSecondary from "../ButtonsSecondary/ButtonSecondary";
import { Icon } from "@iconify/react";
import styles from "./ItemQuantity.module.css";
const ItemQuantity = () => {
  const [Quantity, setQuantity] = useState<number>(1);

  // const handleChange = (value: string) => {
  //   const currentQuantity = +value;
  //   console.log(currentQuantity);
  //   const Quantity = currentQuantity;
  // };

  return (
    <section className={styles.QuantityContainer}>
      <ButtonSecondary onClick={() => setQuantity(Quantity - 1)}>
        <Icon fontSize={16} icon="mdi:minus" />
      </ButtonSecondary>
      <input type="number" defaultValue={Quantity} />
      <ButtonSecondary onClick={() => setQuantity(Quantity + 1)}>
        <Icon fontSize={16} icon="mdi:plus" />
      </ButtonSecondary>
    </section>
  );
};

export default ItemQuantity;
