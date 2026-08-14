"use client";
import { useState } from "react";
import styles from "./Filter.module.css";
import { brands, sizes, sizeShoes } from "@/app/_lib/dataFilter";

type FilterProps = {
  onPriceChange: (price: number) => void;
};

const Filter = ({ onPriceChange }: FilterProps) => {
  const [filterPrice, setFilterPrice] = useState<number>(500);

  const handleInputChangePrice = (e: number) => {
    setFilterPrice(e);
    onPriceChange(e);
  };

  const handleInputChangeCheckbox = () => (
    console.log("temp")
  )

  // const [isChecked, setIsChecked] = useState<string>("true");
  // const handleInputChangeCheckbox = (
  //   event: React.ChangeEvent<HTMLInputElement>,
  // ) => {
  //   // setIsChecked({
  //   //   ...isChecked,
  //   //   [event.target.name]: event.target.value,
  //   //   [event.target.name]: event.target.checked,
  //   // });
  //   setIsChecked(event.target.value);
  //   onParams([event.target.value]);

  //   // setIsChecked(() => !isChecked);
  //   console.log(
  //     // event.target.name,
  //     event.target.value,
  //     event.target.checked,
  //     isChecked,
  //   );
  // };
  return (
    <div className={styles.filterContainer}>
      <ul className={styles.rowFilterList}>
        <li className={styles.filterListPrice}>
          <label htmlFor="price">
            Prix &gt; <output>{filterPrice}</output>€
          </label>
          <input
            onChange={(e) => handleInputChangePrice(+e.target.value)}
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
              onChange={(event) => handleInputChangeCheckbox()} // (event)
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
              onChange={(event) => handleInputChangeCheckbox()}
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
              onChange={(event) => handleInputChangeCheckbox()}
            />
            <label htmlFor={sizeShoe.sizeShoes}>{sizeShoe.sizeShoes}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
