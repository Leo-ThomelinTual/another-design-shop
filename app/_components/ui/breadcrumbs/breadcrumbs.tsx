"use client";
import { usePathname } from "next/navigation";
import styles from "./breadcrumbs.module.css";
import Link from "next/link";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname?.split("/");

  return (
    <nav className={styles.breadcrumbsContainer}>
      {segments?.map((segments, index) => (
        <span key={index}>
          <Link href={`${segments}`}>
          {segments}
          {" / "}
          </Link>
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
