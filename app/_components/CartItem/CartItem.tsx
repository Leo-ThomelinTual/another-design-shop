import styles from "./CartItem.module.css";
import Image from "next/image";
import React from "react";
import Tags from "../Tags/Tags";
import { Icon } from "@iconify/react";
import ButtonSecondary from "../Utils/Buttons/ButtonsSecondary/ButtonSecondary";

const CartItem = () => {
  return (
    <article className={styles.cartProductContainer}>
      <Image
        src="/img/placeholder_product.jpg"
        alt="placeholder"
        width={400}
        height={300}
      />
      <div className={styles.cartProductDescription}>
        <h2>Placeholder Title</h2>
        <div className={styles.TagsContainer}>
          <Tags>Tags</Tags>
          <Tags>Tags</Tags>
          <Tags>Tags</Tags>
        </div>
        <p>Couleur : Blanc</p>
        <div className={styles.quantityContainer}>
          <ButtonSecondary>
            <Icon fontSize={16} icon="mdi:minus" />
          </ButtonSecondary>
          <input type="number" defaultValue="1" />
          <ButtonSecondary>
            <Icon fontSize={16} icon="mdi:plus" />
          </ButtonSecondary>
          <ButtonSecondary isActive={true}>
            <Icon fontSize={16} icon="mdi:trash-can" />
          </ButtonSecondary>
          <ButtonSecondary>
            <Icon fontSize={16} icon="mdi:heart" />
          </ButtonSecondary>
          <ButtonSecondary>
            <Icon fontSize={16} icon="mdi:star" />
          </ButtonSecondary>
        </div>
        <p>99$</p>
      </div>
    </article>
  );
};

export default CartItem;
