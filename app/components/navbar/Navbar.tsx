import styles from "./navbar.module.css";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ButtonPrimary href="/" icon="mdi:home">
        Accueil
      </ButtonPrimary>
      <ButtonPrimary href="/shop" icon="mdi:shop">
        Boutique
      </ButtonPrimary>
      <ButtonPrimary href="/" icon="mdi:contacts">
        Contact
      </ButtonPrimary>
      <ButtonPrimary href="/" icon="mdi:menu">
        Menu
      </ButtonPrimary>
    </nav>
  );
};

export default Navbar;
