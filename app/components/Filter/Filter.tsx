"use client";
import { useEffect } from "react";
import styles from "./Filter.module.css";
import { brands, sizes, sizeShoes } from "@/app/assets/data";

const Filter = () => {
  useEffect(() => {
    const value = document.querySelector("#price_range_value");
    const input = document.querySelector("#price_range");

    value.textContent = input.value;
    input.addEventListener("input", (event) => {
      value.textContent = event.target.value;
    });
  });

  return (
    <div className={styles.filterContainer}>
      <ul className={styles.rowFilterList}>
        <li className={styles.filterListPrice}>
          <label htmlFor="price">
            Prix <output id="price_range_value"></output>€
          </label>
          <input
            type="range"
            id="price_range"
            name="price"
            min="0"
            max="1000"
            step="10"
          />
          <datalist className={styles.dataList}>
            <option value="0" label="0"></option>
            <option value="1000" label="1000"></option>
          </datalist>
        </li>
      </ul>

      <h3 className={styles.filterTitle}>Taille</h3>
      <ul className={styles.columnFilterList}>
        {sizes.map((size) => (
          <li key={size.id}>
            <input type="checkbox" name={size.sizeName} />
            <label className={styles.sizeNameLabel} htmlFor={size.sizeName}>
              {size.sizeName}
            </label>
          </li>
        ))}
      </ul>

      <h3 className={styles.filterTitle}>Marque</h3>
      <ul className={styles.rowFilterList}>
        {brands.map((brand) => (
          <li key={brand.id}>
            <input type="checkbox" name={brand.name} />
            <label htmlFor={brand.name}>{brand.name}</label>
          </li>
        ))}
      </ul>
      <h3 className={styles.filterTitle}>Pointures</h3>
      <ul className={styles.columnFilterList}>
        {sizeShoes.map((sizeShoe) => (
          <li key={sizeShoe.id}>
            <input type="checkbox" name={sizeShoe.sizeShoes} />
            <label htmlFor={sizeShoe.sizeShoes}>{sizeShoe.sizeShoes}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
