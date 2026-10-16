"use client"
import React from "react";
import styles from "./button-secondary.module.css";
import { useRouter } from "next/navigation";

interface ButtonSecondaryProps {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean | false;
  onClick?: () => void;
  href?: string;
}



const ButtonSecondary = ({
  children,
  onClick,
  isActive,
  className,
  href,
}: ButtonSecondaryProps) => {


  const router = useRouter();
  const handleRouting = (href: string) => {
    router.push(href)
  };
  return (
    <button
      className={styles.button + " " + (isActive ? styles.buttonActive : null) + " " + className}
      onClick={href ? () => handleRouting(href) : onClick}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
