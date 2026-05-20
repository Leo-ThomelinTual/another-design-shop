import Link from "next/link";
import React from "react";
import styles from "./navbarAlt.module.css";
import { Icon } from "@iconify/react";
const NavbarAlt = () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.navbarItem} href="/">
        <p className={styles.navbarItemName}>HOME</p>
        <Icon className={styles.navbarItemIcon} icon="mdi:home" />
      </Link>
      <Link className={styles.navbarItem} href="/">
        <p className={styles.navbarItemName}>SHOP</p>
        <Icon className={styles.navbarItemIcon} icon="mdi:cart" />
      </Link>
      <Link className={styles.navbarItem} href="/">
        <p className={styles.navbarItemName}>CONTACT</p>
        <Icon className={styles.navbarItemIcon} icon="mdi:phone" />
      </Link>
      <Link className={styles.navbarItem} href="/">
        <p className={styles.navbarItemName}>ABOUT</p>
        <Icon className={styles.navbarItemIcon} icon="mdi:about" />
      </Link>
    </nav>
  );
};

export default NavbarAlt;
