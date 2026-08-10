"use client";
import React, { useState } from "react";
import ButtonSecondary from "../ButtonsSecondary/ButtonSecondary";
import { Icon } from "@iconify/react";
import styles from "./QuickActionButton.module.css";

const QuickActionButton = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isWishlist, setIsWishlist] = useState<boolean>(false);

  return (
    <>
      <ButtonSecondary
        onClick={() => console.log("Click to remove")}
        className={styles.RemoveButton}
      >
        <Icon fontSize={16} icon="mdi:trash-can" />
      </ButtonSecondary>
      <ButtonSecondary
        onClick={() => setIsFavorite(!isFavorite)}
        className={" " + (isFavorite ? styles.FavoriteButtonActive : null)}
      >
        <Icon fontSize={16} icon="mdi:heart" />
      </ButtonSecondary>
      <ButtonSecondary
        onClick={() => setIsWishlist(!isWishlist)}
        className={" " + (isWishlist ? styles.WishlistButtonActive : null)}
      >
        <Icon fontSize={16} icon="mdi:star" />
      </ButtonSecondary>
    </>
  );
};

export default QuickActionButton;
