import React from "react";
import styles from "./Checkout.module.css";
import ButtonSecondary from "../Utils/ButtonsSecondary/ButtonSecondary";

const Checkout = () => {
  return (
    <article className={styles.checkout}>
      <div className={styles.checkoutHeader}>
        <h2>Récapitulatif</h2>
        <p>
          Sous-total : <span>99€</span>
        </p>
        <hr />
        <p>
          Livraison : <span>20€</span>
        </p>
      </div>

      <div className={styles.checkoutFooter}>
        <input className={styles.promotionalCode} placeholder="Entrer un code promotionnel" type="text" />
        <hr />
        <p>
          Total à payer : <span>99€</span>
        </p>
        <ButtonSecondary isActive={false}>Checkout</ButtonSecondary>
      </div>
    </article>
  );
};

export default Checkout;
