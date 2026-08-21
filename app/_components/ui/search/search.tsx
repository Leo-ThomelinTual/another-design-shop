import { usePathname, useSearchParams } from "next/navigation";
import styles from "./search.module.css";
import { Icon } from "@iconify/react";
import ButtonSecondary from "../button-secondary/button-secondary";

const Search = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const handleSearch = (term: string) => console.log(term);
  // const searchbar = document.querySelector("#input-search-bar");

  return !pathname.indexOf("/boutique") ? (
    <div className={styles.searchBarContainer}>
      <input
        className={styles.searchBar}
        id="input-search-bar"
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <ButtonSecondary className={styles.searchButton} isActive={true}>
        <Icon fontSize={24} icon="mdi:magnify" />
      </ButtonSecondary>
    </div>
  ) : null;
};

export default Search;
