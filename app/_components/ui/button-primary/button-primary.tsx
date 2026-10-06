import React from "react";
import styles from "./button-primary.module.css";

interface ButtonPrimaryProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonPrimary = ({ children, onClick, className }: ButtonPrimaryProps) => {
  return (
    <button className={className + " " + styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
