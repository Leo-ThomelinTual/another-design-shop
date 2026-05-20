import { Icon } from "@iconify/react";
import styles from "./ButtonPrimary.module.css";
import Link from "next/link";
import React from "react";

interface ButtonPrimaryProps {
  icon: string;
  href: string;
  children: React.ReactNode;
}

const ButtonPrimary = ({ icon, href, children }: ButtonPrimaryProps) => {
  return (
    <Link className={styles.button} href={href}>
      {children}
      <Icon className={styles.buttonIcon} icon={icon} />
    </Link>
  );
};

export default ButtonPrimary;
