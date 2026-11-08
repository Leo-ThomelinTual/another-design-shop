"use client";
import styles from "./navbar.module.css";
import ButtonNavbar from "../../ui/button-navbar/button-navbar";
import { Suspense, useState } from "react";
import Search from "../../ui/search/search";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import MobileNavbar from "../mobile-navbar/mobile-navbar";

type NavbarProps = {
  cartItem?: number;
};

const Navbar = ({ cartItem }: NavbarProps) => {
  const router = useRouter();
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  const handleRouting = (href: string) => {
    router.push(href);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.navbarItemContainer}>
          <li onClick={() => handleRouting("/")} className={styles.navbarItem}>
            <h1 className={styles.navbarTitle}>brand</h1>
          </li>
          <li className={styles.navbarItem}>
            <Suspense>
              <Search />
            </Suspense>
          </li>
          <li className={styles.navbarItem}>
            <ButtonNavbar onClick={() => handleRouting("/")}>
              Accueil
              <Icon fontSize={24} icon="mdi:home" />
            </ButtonNavbar>
          </li>

          {/*{cartItem <= -1 ? (*/}
          <li className={styles.navbarItem}>
            <ButtonNavbar onClick={() => handleRouting("/panier")}>
              Panier
              <Icon fontSize={24} icon="mdi:cart" />
              (0)
            </ButtonNavbar>
          </li>
          {/*): null}*/}

          <li className={styles.navbarItem}>
            <ButtonNavbar onClick={() => handleRouting("/connexion")}>
              Connexion
              <Icon fontSize={24} icon="mdi:contacts" />
            </ButtonNavbar>
          </li>
          <li className={styles.navbarItem}>
            <ButtonNavbar onClick={() => handleRouting("/inscription")}>
              Inscription
              <Icon fontSize={24} icon="mdi:contacts" />
            </ButtonNavbar>
          </li>
          <li className={styles.navbarItem}>
            <ButtonNavbar onClick={() => setIsMenuActive(!isMenuActive)}>
              Menu
              <Icon fontSize={24} icon="mdi:menu" />
            </ButtonNavbar>
          </li>
        </ul>
      </nav>
      <MobileNavbar
        isMenuActive={isMenuActive}
        setIsMenuActive={setIsMenuActive}
      />
    </>
  );
};

export default Navbar;
