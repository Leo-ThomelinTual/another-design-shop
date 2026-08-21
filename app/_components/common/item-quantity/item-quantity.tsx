"use client";

import { useState } from "react";
import ButtonSecondary from "../../ui/button-secondary/button-secondary";
import { Icon } from "@iconify/react";
import styles from "./item-quantity.module.css";
const ItemQuantity = () => {
  const [Quantity, setQuantity] = useState<number>(1);

  const handleChange = () => {
    const newQuantity = Quantity - 1;
    if (newQuantity <= 0) {
      console.log("Send deletion")
    } else {
      setQuantity(newQuantity);
    }
}

  return (
    <section className={styles.QuantityContainer}>
      <ButtonSecondary onClick={() => handleChange()}>
        <Icon fontSize={16} icon="mdi:minus" />
      </ButtonSecondary>
      <input type="input" onChange={(e) => setQuantity(+e.target.value)} value={Quantity} />
      <ButtonSecondary onClick={() => setQuantity(Quantity + 1)}>
        <Icon fontSize={16} icon="mdi:plus" />
      </ButtonSecondary>
    </section>
  );
};

export default ItemQuantity;
