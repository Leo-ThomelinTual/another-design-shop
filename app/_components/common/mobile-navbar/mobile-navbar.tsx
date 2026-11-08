"use client";
import { useRouter } from "next/navigation";
import styles from "./mobile-navbar.module.css";
import { Icon } from "@iconify/react";
import ButtonPrimary from "../../ui/button-primary/button-primary";
import ButtonSecondary from "../../ui/button-secondary/button-secondary";

interface MobileNavbarProps {
  isMenuActive: boolean | false;
  setIsMenuActive: (value: boolean) => void;
}

const MobileNavbar = ({ isMenuActive, setIsMenuActive }: MobileNavbarProps) => {
  const router = useRouter();

  const handleRouting = (href: string) => {
    router.push(href);
  };

  return isMenuActive ? (
    <nav
      className={
        styles.mobileNavbar +
        " " +
        (isMenuActive ? styles.mobileNavbarActive : null)
      }
    >
      <ul className={styles.navbarItemContainer}>
        <li className={styles.navbarItem}>
          <ButtonPrimary onClick={() => setIsMenuActive(!isMenuActive)}>
            <Icon fontSize={24} icon="mdi:close" />
            Fermer
          </ButtonPrimary>
        </li>
        <li className={styles.navbarItem}>
          <ButtonSecondary onClick={() => handleRouting("/")}>
            Accueil
            <Icon fontSize={24} icon="mdi:home" />
          </ButtonSecondary>
        </li>

        <li className={styles.navbarItem}>
          <ButtonSecondary onClick={() => handleRouting("/panier")}>
            Panier
            <Icon fontSize={24} icon="mdi:cart" />
          </ButtonSecondary>
        </li>

        <li className={styles.navbarItem}>
          <ButtonSecondary onClick={() => handleRouting("/connexion")}>
            Connexion
            <Icon fontSize={24} icon="mdi:contacts" />
          </ButtonSecondary>
        </li>
        <li className={styles.navbarItem}>
          <ButtonSecondary onClick={() => handleRouting("/inscription")}>
            Inscription
            <Icon fontSize={24} icon="mdi:contacts" />
          </ButtonSecondary>
        </li>
      </ul>
    </nav>
  ) : null;
};
export default MobileNavbar;
