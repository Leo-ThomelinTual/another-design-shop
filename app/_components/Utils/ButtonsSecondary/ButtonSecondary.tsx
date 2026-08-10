import React from "react";
import styles from "./ButtonSecondary.module.css";

interface ButtonSecondaryProps {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean | false;
  onClick?: (e) => void;
}

const ButtonSecondary = ({
  children,
  onClick,
  isActive,
  className,
}: ButtonSecondaryProps) => {
  return (
    <button
      className={
        styles.button +
        " " +
        (isActive ? styles.buttonActive : null) +
        " " +
        className
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
