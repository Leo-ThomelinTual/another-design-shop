"use client";
import { usePathname } from "next/navigation";
import styles from "./breadcrumbs.module.css";
import Link from "next/link";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((segment) => segment);
  const segmentItems = segments.map((segment, i) => ({
    name: segment.charAt(0).toUpperCase() + segment.slice(1),
    segment: segments.slice(0, i + 1).join("/"),
  }));

  return (
    <nav className={styles.breadcrumbsContainer}>
      {segmentItems.map((item) => (
        <Link key={item.segment} href={`/${item.segment}`}>
          {item.name}
          {" / "}
        </Link>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
