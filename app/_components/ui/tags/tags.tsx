import React from "react";
import styles from "./tags.module.css";

type TagsProps = {
  children: React.ReactNode;
};

const Tags = ({ children }: TagsProps) => {
  return <div className={styles.tags}>{children}</div>;
};

export default Tags;
