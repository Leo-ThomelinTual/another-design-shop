"use client";
import React, { useState } from "react";
import ButtonSecondary from "../../ui/button-secondary/button-secondary";
import { Icon } from "@iconify/react";
import styles from "./quick-action.module.css";

type QuickActionProps = {
  toggleDelete?: boolean;
  toggleFavorite?: boolean;
  toggleWishlist?: boolean;
}

const QuickActionButton = ({toggleDelete, toggleFavorite, toggleWishlist}: QuickActionProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isWishlist, setIsWishlist] = useState<boolean>(false);

  return (
    <div className={styles.quickActionContainer}>
      {toggleDelete ?
        <ButtonSecondary
        onClick={() => console.log("Click to remove")}
        className={styles.RemoveButton}
        >
          <Icon fontSize={16} icon="mdi:trash-can" />
        </ButtonSecondary>
      : null}
      {toggleFavorite ?
        <ButtonSecondary
          onClick={() => setIsFavorite(!isFavorite)}
          className={styles.favorite + " " + (isFavorite ? styles.FavoriteButtonActive : null)}
        >
          <Icon fontSize={16} icon="mdi:heart" />
        </ButtonSecondary>
      : null}
      {toggleWishlist ?
        <ButtonSecondary
          onClick={() => setIsWishlist(!isWishlist)}
          className={styles.wishlist + " " + (isWishlist ? styles.WishlistButtonActive : null)}
        >
          <Icon fontSize={16} icon="mdi:star" />
        </ButtonSecondary>
      : null}
    </div>
  );
};

export default QuickActionButton;
