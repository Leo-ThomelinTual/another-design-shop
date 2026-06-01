import styles from "./FilterBy.module.css";

const FilterBy = () => {
  return (
    <select className={styles.filterBy}>
      <option value="pertinence">Pertinence</option>
      <option value="prix_croissant">Prix croissant</option>
      <option value="prix_décroissant">Prix décroissant</option>
    </select>
  );
};

export default FilterBy;
