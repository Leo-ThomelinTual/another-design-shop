"use client";
import styles from "./navbar.module.css";
import ButtonPrimary from "../Utils/Buttons/ButtonPrimary/ButtonPrimary";
import { Suspense, useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Icon } from "@iconify/react";
import Subnav from "../Subnav/Subnav";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isNavbarShopCategoryActive, setIsNavbarShopCategoryActive] =
    useState<boolean>(false);

  // const [isSubCategoryFemaleActive, setIsSubCategoryFemaleActive] =
  //   useState<boolean>(false);
  // const [isSubCategoryMaleActive, setIsSubCategoryMaleActive] =
  //   useState<boolean>(false);
  // const [isSubCategoryAdoActive, setIsSubCategoryAdoActive] =
  //   useState<boolean>(false);
  // const [isSubCategoryChildActive, setIsSubCategoryChildActive] =
  //   useState<boolean>(false);

  const [isScroll, setScroll] = useState(0);

  // const CloseAll = () => {
  //   setIsNavbarShopCategoryActive(false);
  //   setIsSubCategoryAdoActive(false);
  //   setIsSubCategoryChildActive(false);
  //   setIsSubCategoryFemaleActive(false);
  //   setIsSubCategoryMaleActive(false);
  // };

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.documentElement.scrollTop || document.body.scrollTop;

      setScroll(winScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRouting = (href: string) => {
    router.push(href);
  };

  return (
    <nav
      className={styles.navbar}
      style={isScroll ? { position: `fixed` } : { position: `relative` }}
    >
      <ul className={styles.navbarItemContainer}>
        <div className={styles.navbarStart}>
          <h1 className={styles.brandname}>brand</h1>
        </div>
        <Suspense>
          <SearchBar />
        </Suspense>
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
          <ButtonPrimary onClick={() => handleRouting("/")}>
            Panier
            <Icon fontSize={24} icon="mdi:cart" />
          </ButtonPrimary>
        </li>

        <li className={styles.navbarItem}>
          <ButtonPrimary onClick={() => handleRouting("/")}>
            Connexion
            <Icon fontSize={24} icon="mdi:contacts" />
          </ButtonPrimary>
        </li>
        <li className={styles.navbarItem}>
          <ButtonPrimary onClick={() => handleRouting("/")}>
            Inscription
            <Icon fontSize={24} icon="mdi:contacts" />
          </ButtonPrimary>
        </li>
        <li className={styles.navbarItem}>
          <ButtonPrimary>
            Menu
            <Icon fontSize={24} icon="mdi:menu" />
          </ButtonPrimary>
        </li>
      </ul>
      <Subnav isSubNavActive={isNavbarShopCategoryActive} />
    </nav>
  );
};

export default Navbar;
