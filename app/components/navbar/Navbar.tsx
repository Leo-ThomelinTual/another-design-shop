"use client";
import styles from "./navbar.module.css";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import SearchBar from "../SearchBar/SearchBar";
import { Icon } from "@iconify/react";

const AllSubCategory = [
  {
    name: "Plage",
  },
  {
    name: "Eté",
  },
];

const SubCategory = [
  {
    name: "Pantalon",
  },
  {
    name: "Sweet",
  },
  {
    name: "T-Shirt",
  },
  {
    name: "Chaussure",
  },
  {
    name: "Sous-Vêtement",
  },
  {
    name: "Short / Bermuda / Jupe",
  },
  {
    name: "Chemise",
  },
  {
    name: "Chaussette",
  },
  {
    name: "Manteau",
  },
  {
    name: "Sac",
  },
  {
    name: "Costume",
  },
];

const MaleSubCategory = [""];
const FemaleSubCategory = [""];
const ChildSubCategory = [""];
const AdoSubCategory = [""];

const Navbar = () => {
  const [isNavbarShopCategoryActive, setIsNavbarShopCategoryActive] =
    useState<boolean>(false);

  const [isSubCategoryFemaleActive, setIsSubCategoryFemaleActive] =
    useState<boolean>(false);
  const [isSubCategoryMaleActive, setIsSubCategoryMaleActive] =
    useState<boolean>(false);
  const [isSubCategoryAdoActive, setIsSubCategoryAdoActive] =
    useState<boolean>(false);
  const [isSubCategoryChildActive, setIsSubCategoryChildActive] =
    useState<boolean>(false);

  const [isScroll, setScroll] = useState(0);

  const CloseAll = () => {
    setIsNavbarShopCategoryActive(false);
    setIsSubCategoryAdoActive(false);
    setIsSubCategoryChildActive(false);
    setIsSubCategoryFemaleActive(false);
    setIsSubCategoryMaleActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.documentElement.scrollTop || document.body.scrollTop;

      setScroll(winScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={styles.navbar}
      style={isScroll ? { position: `fixed` } : { position: `relative` }}
    >
      <ul className={styles.navbarItemContainer}>
        <div className={styles.navbarStart}>
          <h1 className={styles.brandname}>
            brand <span>brand</span>
          </h1>
        </div>
        <Suspense>
          <SearchBar />
        </Suspense>
        <li className={styles.navbarItem}>
          <ButtonPrimary
            asText={true}
            asIcon={true}
            isButton={false}
            href="/"
            icon="mdi:home"
          >
            Accueil
          </ButtonPrimary>
        </li>
        <li className={styles.navbarItem}>
          <ButtonPrimary
            asText={true}
            asIcon={true}
            isButton={true}
            onClick={() =>
              setIsNavbarShopCategoryActive(!isNavbarShopCategoryActive)
            }
            href="/shop"
            icon="mdi:shop"
          >
            Boutique
          </ButtonPrimary>
        </li>
        <li className={styles.navbarItem}>
          <ButtonPrimary
            asText={true}
            asIcon={true}
            isButton={false}
            href="/"
            icon="mdi:contacts"
          >
            Contact
          </ButtonPrimary>
        </li>
        <li className={styles.navbarItem}>
          <ButtonPrimary
            asText={true}
            asIcon={true}
            isButton={true}
            href="/"
            icon="mdi:menu"
          >
            Menu
          </ButtonPrimary>
        </li>
      </ul>
      <div
        className={
          styles.navbarCategoryContainer +
          " " +
          (isNavbarShopCategoryActive
            ? styles.navbarCategoryContainerActive
            : null)
        }
      >
        <ul className={styles.navbarCategory}>
          <li>
            <button
              className={
                styles.navbarCategoryButton +
                " " +
                (isSubCategoryChildActive
                  ? styles.navbarCategoryButtonActive
                  : null)
              }
              onClick={() =>
                setIsSubCategoryChildActive(!isSubCategoryChildActive)
              }
            >
              <Icon icon="mdi:chevron-double-left" />
              Enfants (0 à 12 ans)
            </button>
          </li>
          <li>
            <button
              className={
                styles.navbarCategoryButton +
                " " +
                (isSubCategoryAdoActive
                  ? styles.navbarCategoryButtonActive
                  : null)
              }
              onClick={() => setIsSubCategoryAdoActive(!isSubCategoryAdoActive)}
            >
              <Icon icon="mdi:chevron-double-left" />
              Ado
            </button>
          </li>
          <li>
            <button
              className={
                styles.navbarCategoryButton +
                " " +
                (isSubCategoryMaleActive
                  ? styles.navbarCategoryButtonActive
                  : null)
              }
              onClick={() =>
                setIsSubCategoryMaleActive(!isSubCategoryMaleActive)
              }
            >
              <Icon icon="mdi:chevron-double-left" />
              Homme
            </button>
          </li>
          <li>
            <button
              className={
                styles.navbarCategoryButton +
                " " +
                (isSubCategoryFemaleActive
                  ? styles.navbarCategoryButtonActive
                  : null)
              }
              onClick={() =>
                setIsSubCategoryFemaleActive(!isSubCategoryFemaleActive)
              }
            >
              <Icon icon="mdi:chevron-double-left" />
              Femme
            </button>
          </li>
        </ul>
        {/* SubCategory */}
        <ul
          className={
            styles.navbarSubCategory +
            " " +
            (isSubCategoryChildActive ? styles.navbarSubCategoryActive : null)
          }
        >
          {SubCategory.map((data, index) => (
            <li key={index}>
              <Link
                onClick={() => CloseAll()}
                href="/boutique/enfant"
                className={styles.navbarCategoryButton}
              >
                {data.name}
              </Link>
            </li>
          ))}
          {/* {ChildSubCategory.map((data, index) => (
            <li key={index}>
              <Link
                href="/boutique/enfant"
                className={styles.navbarCategoryButton}
              >
                {data.name}
              </Link>
            </li>
          ))} */}
        </ul>
        <ul
          className={
            styles.navbarSubCategory +
            " " +
            (isSubCategoryAdoActive ? styles.navbarSubCategoryActive : null)
          }
        >
          {SubCategory.map((data, index) => (
            <li key={index}>
              <Link
                onClick={() => CloseAll()}
                href="/boutique/ado"
                className={styles.navbarCategoryButton}
              >
                {data.name}
              </Link>
            </li>
          ))}

          {/* {AdoSubCategory.map((data, index) => (
            <li key={index}>
              <Link href={data.href} className={styles.navbarCategoryButton}>
                {data.name}
              </Link>
            </li>
          ))} */}
        </ul>
        <ul
          className={
            styles.navbarSubCategory +
            " " +
            (isSubCategoryMaleActive ? styles.navbarSubCategoryActive : null)
          }
        >
          {SubCategory.map((data, index) => (
            <li key={index}>
              <Link
                onClick={() => CloseAll()}
                href="/boutique/homme"
                className={styles.navbarCategoryButton}
              >
                {data.name}
              </Link>
            </li>
          ))}
          {/* {MaleSubCategory.map((data, index) => (
            <li key={index}>
              <Link href={data.href} className={styles.navbarCategoryButton}>
                {data.name}
              </Link>
            </li>
          ))} */}
        </ul>
        <ul
          className={
            styles.navbarSubCategory +
            " " +
            (isSubCategoryFemaleActive ? styles.navbarSubCategoryActive : null)
          }
        >
          {SubCategory.map((data, index) => (
            <li key={index}>
              <Link
                onClick={() => CloseAll()}
                href="/boutique/femme"
                className={styles.navbarCategoryButton}
              >
                {data.name}
              </Link>
            </li>
          ))}
          {/* {FemaleSubCategory.map((data, index) => (
            <li key={index}>
              <Link href={data.href} className={styles.navbarCategoryButton}>
                {data.name}
              </Link>
            </li>
          ))} */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
