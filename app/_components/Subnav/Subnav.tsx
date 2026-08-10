"use client";
import React, { useState } from "react";
import styles from "./Subnav.module.css";
import { Icon } from "@iconify/react";
import ButtonSecondary from "../Utils/ButtonsSecondary/ButtonSecondary";
import {
  AdoCategory,
  EnfantCategory,
  FemmeCategory,
  HommeCategory,
} from "@/app/_lib/dataSubNav";
import { useRouter } from "next/navigation";

type SubNavProps = {
  isSubNavActive: boolean;
};

const Subnav = ({ isSubNavActive }: SubNavProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const [activeCategoryGenderChild, setActiveCategoryGenderChild] = useState<
    string | null
  >(null);
  const [activeCategoryGenderAdo, setActiveCategoryGenderAdo] = useState<
    string | null
  >(null);
  const router = useRouter();

  const handleRouting = (href: string) => {
    router.push(href);
  };
  return (
    <div
      className={
        styles.navbarCategoryContainer +
        " " +
        (isSubNavActive ? styles.navbarCategoryContainerActive : null)
      }
    >
      <ul className={styles.navbarCategory}>
        <li>
          <ButtonSecondary
            isActive={activeCategory === `enfant` ? true : false}
            onClick={() =>
              setActiveCategory(activeCategory === "enfant" ? null : "enfant")
            }
          >
            <Icon icon="mdi:chevron-double-left" />
            Enfants (0 à 12 ans)
          </ButtonSecondary>
        </li>
        <li>
          <ButtonSecondary
            isActive={activeCategory === `ado` ? true : false}
            onClick={() =>
              setActiveCategory(activeCategory === "ado" ? null : "ado")
            }
          >
            <Icon icon="mdi:chevron-double-left" />
            Ado
          </ButtonSecondary>
        </li>
        <li>
          <ButtonSecondary
            isActive={activeCategory === `homme` ? true : false}
            onClick={() =>
              setActiveCategory(activeCategory === "homme" ? null : "homme")
            }
          >
            <Icon icon="mdi:chevron-double-left" />
            Homme
          </ButtonSecondary>
        </li>
        <li>
          <ButtonSecondary
            isActive={activeCategory === `femme` ? true : false}
            onClick={() =>
              setActiveCategory(activeCategory === "femme" ? null : "femme")
            }
          >
            <Icon icon="mdi:chevron-double-left" />
            Femme
          </ButtonSecondary>
        </li>
      </ul>

      {/* SubCategory */}

      {activeCategory === "enfant" ? (
        <div>
          <ul className={styles.navbarCategory}>
            <li>
              <ButtonSecondary
                isActive={activeCategoryGenderChild === `garcon` ? true : false}
                onClick={() =>
                  setActiveCategoryGenderChild(
                    activeCategoryGenderChild === "garcon" ? null : "garcon",
                  )
                }
              >
                <Icon icon="mdi:chevron-double-left" />
                Garçon
              </ButtonSecondary>
            </li>
            <li>
              <ButtonSecondary
                isActive={activeCategoryGenderChild === `fille` ? true : false}
                onClick={() =>
                  setActiveCategoryGenderChild(
                    activeCategoryGenderChild === "fille" ? null : "fille",
                  )
                }
              >
                <Icon icon="mdi:chevron-double-left" />
                Fille
              </ButtonSecondary>
            </li>
          </ul>
        </div>
      ) : null}

      {activeCategory === "ado" ? (
        <div>
          <ul className={styles.navbarCategory}>
            <li>
              <ButtonSecondary
                isActive={activeCategoryGenderAdo === `garcon` ? true : false}
                onClick={() =>
                  setActiveCategoryGenderAdo(
                    activeCategoryGenderAdo === "garcon" ? null : "garcon",
                  )
                }
              >
                <Icon icon="mdi:chevron-double-left" />
                Garçon
              </ButtonSecondary>
            </li>
            <li>
              <ButtonSecondary
                isActive={activeCategoryGenderAdo === `fille` ? true : false}
                onClick={() =>
                  setActiveCategoryGenderAdo(
                    activeCategoryGenderAdo === "fille" ? null : "fille",
                  )
                }
              >
                <Icon icon="mdi:chevron-double-left" />
                Fille
              </ButtonSecondary>
            </li>
          </ul>
        </div>
      ) : null}

      {/*{activeCategory === "enfant" ? (
        <ul className={styles.navbarSubCategory}>
          {EnfantCategory.map((data, index) => (
            <li key={index}>
              <ButtonSecondary
                isActive={data.isActive}
                onClick={() =>
                  handleRouting(`/shop/${activeCategory}/${data.href}`)
                }
              >
                {data.name}
              </ButtonSecondary>
            </li>
          ))}
        </ul>
      ) : null}*/}

      {activeCategoryGenderChild === "garcon" ? (
        <ul className={styles.navbarSubCategory}>
          {EnfantCategory.map((data, index) => (
            <li key={index}>
              <ButtonSecondary
                isActive={data.isActive}
                onClick={() =>
                  handleRouting(
                    `/boutique/${activeCategory}/${activeCategoryGenderChild}/${data.href}`,
                  )
                }
              >
                {data.name}
              </ButtonSecondary>
            </li>
          ))}
        </ul>
      ) : null}

      {activeCategoryGenderChild === "fille" ? (
        <ul className={styles.navbarSubCategory}>
          {EnfantCategory.map((data, index) => (
            <li key={index}>
              <ButtonSecondary
                isActive={data.isActive}
                onClick={() =>
                  handleRouting(
                    `/boutique/${activeCategory}/${activeCategoryGenderChild}/${data.href}`,
                  )
                }
              >
                {data.name}
              </ButtonSecondary>
            </li>
          ))}
        </ul>
      ) : null}

      {activeCategoryGenderAdo === "garcon" ? (
        <ul className={styles.navbarSubCategory}>
          {AdoCategory.map((data, index) => (
            <li key={index}>
              <ButtonSecondary
                isActive={data.isActive}
                onClick={() =>
                  handleRouting(
                    `/boutique/${activeCategory}/${activeCategoryGenderAdo}/${data.href}`,
                  )
                }
              >
                {data.name}
              </ButtonSecondary>
            </li>
          ))}
        </ul>
      ) : null}

      {activeCategoryGenderAdo === "fille" ? (
        <ul className={styles.navbarSubCategory}>
          {AdoCategory.map((data, index) => (
            <li key={index}>
              <ButtonSecondary
                isActive={data.isActive}
                onClick={() =>
                  handleRouting(
                    `/boutique/${activeCategory}/${activeCategoryGenderAdo}/${data.href}`,
                  )
                }
              >
                {data.name}
              </ButtonSecondary>
            </li>
          ))}
        </ul>
      ) : null}

      {activeCategory === "homme" ? (
        <ul className={styles.navbarSubCategory}>
          {HommeCategory.map((data, index) => (
            <li key={index}>
              <ButtonSecondary
                isActive={data.isActive}
                onClick={() =>
                  handleRouting(`/boutique/${activeCategory}/${data.href}`)
                }
              >
                {data.name}
              </ButtonSecondary>
            </li>
          ))}
        </ul>
      ) : null}

      {activeCategory === "femme" ? (
        <ul className={styles.navbarSubCategory}>
          {FemmeCategory.map((data, index) => (
            <li key={index}>
              <ButtonSecondary
                isActive={data.isActive}
                onClick={() =>
                  handleRouting(`/boutique/${activeCategory}/${data.href}`)
                }
              >
                {data.name}
              </ButtonSecondary>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Subnav;
