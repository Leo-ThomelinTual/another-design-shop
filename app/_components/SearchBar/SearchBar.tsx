import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const handleSearch = (term: string) => console.log(term);

  return !pathname.indexOf("/boutique") ? (
    <input
      className={styles.searchBar}
      type="text"
      placeholder="Search..."
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      defaultValue={searchParams.get("query")?.toString()}
    />
  ) : null;
};

export default SearchBar;
