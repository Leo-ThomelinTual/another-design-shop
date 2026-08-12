import styles from "./CartItem.module.css";
import Image from "next/image";
import Tags from "../Tags/Tags";
import ItemQuantity from "../Utils/ItemQuantity/ItemQuantity";
import QuickActionButton from "../Utils/QuickActionButton/QuickActionButton";

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
        <div className={styles.ButtonContainer}>
          <ItemQuantity />
          <QuickActionButton />
        </div>
        <p>99$</p>
      </div>
    </article>
  );
};

export default CartItem;
