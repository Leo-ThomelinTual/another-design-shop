import React from "react";
import styles from "./ButtonPrimary.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface ButtonPrimaryProps {
  children: React.ReactNode;
  icon: string;
  isButton?: boolean;
  asIcon: boolean;
  asText: boolean;
  href: string;
  onClick?: (e: any) => void;
}

const ButtonPrimary = ({
  children,
  icon,
  isButton,
  asIcon,
  asText,
  href,
  onClick,
}: ButtonPrimaryProps) => {
  return isButton ? (
    <button onClick={onClick} className={styles.button}>
      {asText ? children : null}
      {asIcon ? <Icon className={styles.buttonIcon} icon={icon} /> : null}
    </button>
  ) : (
    <Link className={styles.button} href={href}>
      {asText ? children : null}
      {asIcon ? <Icon className={styles.buttonIcon} icon={icon} /> : null}
    </Link>
  );
};

export default ButtonPrimary;
