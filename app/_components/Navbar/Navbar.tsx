"use client";
import styles from "./navbar.module.css";
import ButtonPrimary from "../Utils/ButtonPrimary/ButtonPrimary";
import { Suspense, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Icon } from "@iconify/react";
import Subnav from "../Subnav/Subnav";
import { useRouter } from "next/navigation";
import ButtonSecondary from "../Utils/ButtonsSecondary/ButtonSecondary";

const Navbar = () => {
  const router = useRouter();
  const [isNavbarShopCategoryActive, setIsNavbarShopCategoryActive] =
    useState<boolean>(false);
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  const handleRouting = (href: string) => {
    router.push(href);
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarItemContainer}>
        <li onClick={() => handleRouting("/")} className={styles.navbarItem}>
          <h1 className={styles.navbarTitle}>brand</h1>
        </li>
        <li className={styles.navbarItem}>
          <Suspense>
            <SearchBar />
          </Suspense>
        </li>
        <li className={styles.navbarItem}>
          <ButtonPrimary onClick={() => handleRouting("/")}>
            Accueil
            <Icon fontSize={24} icon="mdi:home" />
          </ButtonPrimary>
        </li>
        <li className={styles.navbarItem}>
          <ButtonPrimary
            onClick={() =>
              setIsNavbarShopCategoryActive(!isNavbarShopCategoryActive)
            }
          >
            Boutique
            <Icon fontSize={24} icon="mdi:shop" />
          </ButtonPrimary>
        </li>

        <li className={styles.navbarItem}>
          <ButtonPrimary onClick={() => handleRouting("/panier")}>
            Panier
            <Icon fontSize={24} icon="mdi:cart" />
            (0)
          </ButtonPrimary>
        </li>

        <li className={styles.navbarItem}>
          <ButtonPrimary onClick={() => handleRouting("/connexion")}>
            Connexion
            <Icon fontSize={24} icon="mdi:contacts" />
          </ButtonPrimary>
        </li>
        <li className={styles.navbarItem}>
          <ButtonPrimary onClick={() => handleRouting("/inscription")}>
            Inscription
            <Icon fontSize={24} icon="mdi:contacts" />
          </ButtonPrimary>
        </li>
        <li className={styles.navbarItem}>
          <ButtonPrimary onClick={() => setIsMenuActive(!isMenuActive)}>
            Menu
            <Icon fontSize={24} icon="mdi:menu" />
          </ButtonPrimary>
        </li>
      </ul>
      <ul
        className={
          styles.navbarItemContainerMobile +
          " " +
          (isMenuActive ? styles.navbarItemContainerMobileActive : null)
        }
      >
        <li onClick={() => handleRouting("/")} className={styles.navbarItem}>
          <h1>brand</h1>
        </li>
        <li className={styles.navbarItem}>
          <ButtonSecondary
            isActive={true}
            onClick={() => setIsMenuActive(!isMenuActive)}
          >
            <Icon fontSize={24} icon="mdi:close" />
            Fermer
          </ButtonSecondary>
        </li>
        <li className={styles.navbarItem}>
          <ButtonPrimary onClick={() => handleRouting("/")}>
            Accueil
            <Icon fontSize={24} icon="mdi:home" />
          </ButtonPrimary>
        </li>
        <li className={styles.navbarItem}>
          <ButtonPrimary
            onClick={() =>
              setIsNavbarShopCategoryActive(!isNavbarShopCategoryActive)
            }
          >
            Boutique
            <Icon fontSize={24} icon="mdi:shop" />
          </ButtonPrimary>
        </li>

        <li className={styles.navbarItem}>
          <ButtonPrimary onClick={() => handleRouting("/panier")}>
            Panier
            <Icon fontSize={24} icon="mdi:cart" />
          </ButtonPrimary>
        </li>

        <li className={styles.navbarItem}>
          <ButtonPrimary onClick={() => handleRouting("/connexion")}>
            Connexion
            <Icon fontSize={24} icon="mdi:contacts" />
          </ButtonPrimary>
        </li>
        <li className={styles.navbarItem}>
          <ButtonPrimary onClick={() => handleRouting("/inscription")}>
            Inscription
            <Icon fontSize={24} icon="mdi:contacts" />
          </ButtonPrimary>
        </li>
      </ul>
      <Subnav isSubNavActive={isNavbarShopCategoryActive} />
    </nav>
  );
};

export default Navbar;
