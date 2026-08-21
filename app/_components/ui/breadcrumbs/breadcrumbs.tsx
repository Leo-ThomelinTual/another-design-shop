"use client";
import { usePathname } from "next/navigation";
import styles from "./breadcrumbs.module.css";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname?.split("/");

  return (
    <nav className={styles.breadcrumbsContainer}>
      {segments?.map((segments, index) => (
        <span key={index}>
          {" / "}
          {segments}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
