import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <article className={styles.footerContentContainer}>
        <h3>Information</h3>
      </article>
      <article className={styles.footerContentContainer}>
        <h3>Contact</h3>
      </article>
      <article className={styles.footerContentContainer}>
        <h3>Légals</h3>
      </article>
    </footer>
  );
};

export default Footer;
