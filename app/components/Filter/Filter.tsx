"use client";
import React, { useEffect, useState } from "react";
import styles from "./Filter.module.css";
import { brands, sizes, sizeShoes } from "@/app/assets/data";

const Filter = () => {
  const [filterPrice, setFilterPrice] = useState();
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleInputChangePrice = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFilterPrice({
      ...filterPrice,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };

  const handleInputChangeCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setIsChecked({
      ...isChecked,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.checked,
    });
    // setIsChecked(() => !isChecked);
    console.log(event.target.name, event.target.value, event.target.checked);
  };

  useEffect(() => {
    const value = document.querySelector("#price_range_value");
    const input = document.querySelector("#price_range");

    value.textContent = input.value;
    input?.addEventListener("input", (event) => {
      value.textContent = event.target.value;
    });
  });

  return (
    <div className={styles.filterContainer}>
      <ul className={styles.rowFilterList}>
        <li className={styles.filterListPrice}>
          <label htmlFor="price">
            Prix &gt; <output id="price_range_value"></output>€
          </label>
          <input
            onChange={(event) => handleInputChangePrice(event)}
            type="range"
            id="price_range"
            name="price"
            min="10"
            max="1000"
            step="10"
          />
          <datalist className={styles.dataList}>
            <option value="10" label="10€" />
            <option value="1000" label="1000€" />
          </datalist>
        </li>
      </ul>

      <h3 className={styles.filterTitle}>Taille</h3>
      <ul className={styles.columnFilterList}>
        {sizes.map((size) => (
          <li key={size.id}>
            <input
              type="checkbox"
              name={size.sizeName}
              onChange={(event) => handleInputChangeCheckbox(event)}
            />
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
            <input
              type="checkbox"
              name={brand.name}
              onChange={(event) => handleInputChangeCheckbox(event)}
            />
            <label htmlFor={brand.name}>{brand.name}</label>
          </li>
        ))}
      </ul>
      <h3 className={styles.filterTitle}>Pointures</h3>
      <ul className={styles.columnFilterList}>
        {sizeShoes.map((sizeShoe) => (
          <li key={sizeShoe.id}>
            <input
              type="checkbox"
              name={sizeShoe.sizeShoes}
              onChange={(event) => handleInputChangeCheckbox(event)}
            />
            <label htmlFor={sizeShoe.sizeShoes}>{sizeShoe.sizeShoes}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
