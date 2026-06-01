"use client";
import styles from "./navbar.module.css";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className={styles.navbar}>
      <section className={styles.navbarItem}>
        <ButtonPrimary
          asText={true}
          asIcon={true}
          isButton={false}
          href="/"
          icon="mdi:home"
        >
          Accueil
        </ButtonPrimary>
        <ButtonPrimary
          asText={true}
          asIcon={true}
          isButton={true}
          onClick={() => setIsActive(!isActive)}
          href="/shop"
          icon="mdi:shop"
        >
          Boutique
        </ButtonPrimary>

        <ButtonPrimary
          asText={true}
          asIcon={true}
          isButton={false}
          href="/"
          icon="mdi:contacts"
        >
          Contact
        </ButtonPrimary>
        <ButtonPrimary
          asText={true}
          asIcon={true}
          isButton={true}
          href="/"
          icon="mdi:menu"
        >
          Menu
        </ButtonPrimary>
      </section>

      <section
        className={
          styles.navbarSubItem +
          " " +
          (isActive ? styles.navbarSubItemShow : null)
        }
      >
        <Link href="/homme" onClick={() => setIsActive(false)}>
          Homme
        </Link>
        <Link href="/femme" onClick={() => setIsActive(false)}>
          Femme
        </Link>
        <Link href="/ado" onClick={() => setIsActive(false)}>
          Ado
        </Link>
        <Link href="/enfant" onClick={() => setIsActive(false)}>
          Enfant
        </Link>
      </section>
    </nav>
  );
};

export default Navbar;
