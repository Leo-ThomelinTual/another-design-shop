import styles from "./Sort.module.css";

const Sort = () => {
  return (
    <select className={styles.filterBy}>
      <option value="pertinence">Pertinence</option>
      <option value="prix_croissant">Prix croissant</option>
      <option value="prix_décroissant">Prix décroissant</option>
    </select>
  );
};

export default Sort;
