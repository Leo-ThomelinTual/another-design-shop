"use client"
import React from "react";
import styles from "./button-primary.module.css";
import { useRouter } from "next/navigation";

interface ButtonPrimaryProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

const ButtonPrimary = ({ children, onClick, className, href }: ButtonPrimaryProps) => {

  const router = useRouter();
  const handleRouting = (href: string) => {
    router.push(href)
  };

  return (
    <button className={className + " " + styles.button} onClick={href ? () => handleRouting(href) + " " + onClick : onClick}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
