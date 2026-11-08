import styles from "./cart-item.module.css";
import Image from "next/image";
import Tags from "../../ui/tags/tags";
import ItemQuantity from "../item-quantity/item-quantity";
import QuickActionButton from "../quick-action/quick-action";
import ColorPalette from "../../ui/color-palette/color-palette";

const CartItem = () => {
  return (
    <article className={styles.cartProductContainer}>
      <Image
        className={styles.image}
        src="/img/placeholder_product.jpg"
        alt="placeholder"
        width={500}
        height={500}
        loading="eager"
      />
      <div className={styles.cartProductDescription}>
        <h2>Placeholder Title</h2>
        <div className={styles.TagsContainer}>
          <Tags>Tags</Tags>
        </div>
        <div className={styles.colorContainer}>
          <ColorPalette colorName="blanc" color="white" />
        </div>
        <div className={styles.ButtonContainer}>
          <ItemQuantity />
          <QuickActionButton
            toggleDelete={true}
            toggleFavorite={true}
            toggleWishlist={true}
          />
        </div>
        <p className={styles.itemPrice}>99$</p>
      </div>
    </article>
  );
};

export default CartItem;
