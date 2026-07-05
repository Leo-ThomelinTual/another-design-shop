import React from "react";
import styles from "./ButtonPrimary.module.css";

interface ButtonPrimaryProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonPrimary = ({ children, onClick }: ButtonPrimaryProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
