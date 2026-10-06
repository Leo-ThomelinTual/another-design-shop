import styles from "./checkout.module.css";
import ButtonPrimary from "../../ui/button-primary/button-primary";

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
        <ButtonPrimary className={styles.buttonCheckout}>Checkout</ButtonPrimary>
      </div>
    </article>
  );
};

export default Checkout;
