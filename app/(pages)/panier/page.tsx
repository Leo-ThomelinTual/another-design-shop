import Checkout from "@/app/_components/checkout/checkout";
import styles from "./page.module.css";
import CartItem from "@/app/_components/CartItem/CartItem";
import ButtonSecondary from "@/app/_components/Utils/Buttons/ButtonsSecondary/ButtonSecondary";
import { Icon } from "@iconify/react";

export default function Panier() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.cartItemList}>
          <div className={styles.cartButtonContainer}>
            <ButtonSecondary>
              Ajouter panier en list de souhait
              <Icon fontSize={24} icon="mdi:star-check" />
            </ButtonSecondary>
            <ButtonSecondary>
              Supprimer le contenu du panier
              <Icon fontSize={24} icon="mdi:cart-remove" />
            </ButtonSecondary>
          </div>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </section>
        <section className={styles.checkoutContainer}>
          <Checkout />
        </section>
      </main>
    </>
  );
}
