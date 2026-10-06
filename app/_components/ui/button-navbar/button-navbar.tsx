import React from "react";
import styles from "./button-navbar.module.css";

interface ButtonNavbarProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonNavbar = ({ children, onClick }: ButtonNavbarProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonNavbar;
