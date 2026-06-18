"use client";
import React, { useEffect, useState } from "react";
import styles from "./Filter.module.css";
import { brands, sizes, sizeShoes } from "@/app/assets/data";

interface FilterProps {
  onPriceChange: (price: number) => void;
  onParams: (size: [string, string]) => void;
}

// {
//   onPriceChange,
// }: {
//   onPriceChange: (price: number) => void;
// },
// { onParams }: { onParams: (size: [string, string]) => void },

const Filter = ({ onPriceChange, onParams }: FilterProps) => {
  const [filterPrice, setFilterPrice] = useState<number>(500);
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleInputChangePrice = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newPrice = +event.target.value;
    setFilterPrice(newPrice);
    onPriceChange(newPrice);
  };

  useEffect(() => {
    const price_value = document.querySelector("#price_range_value");
    const conv = filterPrice as unknown;
    if (price_value !== null) {
      price_value.textContent = conv as string;
    }
  });

  const handleInputChangeCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    // setIsChecked({
    //   ...isChecked,
    //   [event.target.name]: event.target.value,
    //   [event.target.name]: event.target.checked,
    // });
    setIsChecked(event.target.checked);
    onParams([event.target.value, event.target.name]);

    // setIsChecked(() => !isChecked);
    console.log(
      event.target.name,
      event.target.value,
      event.target.checked,
      isChecked,
    );
  };

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
            defaultValue={filterPrice}
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
