"use client";
import { useState } from "react";
import styles from "./subnav.module.css";
import { Icon } from "@iconify/react";
import ButtonSecondary from "../../ui/button-secondary/button-secondary";
import {
  dataCategory,
  EnfantCategory,
  AdoCategory,
  FemmeCategory,
  HommeCategory,
} from "@/app/_lib/dataSubNav";
import { useRouter } from "next/navigation";

type SubNavProps = {
  isSubNavActive: boolean;
};

const Subnav = ({ isSubNavActive }: SubNavProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeCategoryGender, setActiveCategoryGender] = useState<"garcon" | "fille" | null>(null);

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
        {dataCategory.map((data, index) => (
          <li key={index}>
            <ButtonSecondary isActive={activeCategory === data.type ? true : false} onClick={() => setActiveCategory(activeCategory === data.type ? null : data.type)}>
              <Icon icon="mdi:chevron-double-left" />
              {data.title}
            </ButtonSecondary>
          </li>
        ))}
      </ul>

      {/* SubCategory */}

      {activeCategory !== null && activeCategory !== "homme" && activeCategory !== "femme" ? (
          (activeCategory === "enfant" || activeCategory === "ado" ? (
            <div>
              <ul className={styles.navbarCategory}>
                <li>
                  <ButtonSecondary
                    isActive={activeCategoryGender === `garcon` ? true : false}
                    onClick={() =>
                      setActiveCategoryGender(
                        activeCategoryGender === "garcon" ? null : "garcon",
                      )
                    }
                  >
                    <Icon icon="mdi:chevron-double-left" />
                    Garçon
                  </ButtonSecondary>
                </li>
                <li>
                  <ButtonSecondary
                    isActive={activeCategoryGender === `fille` ? true : false}
                    onClick={() =>
                      setActiveCategoryGender(
                        activeCategoryGender === "fille" ? null : "fille",
                      )
                    }
                  >
                    <Icon icon="mdi:chevron-double-left" />
                    Fille
                  </ButtonSecondary>
                </li>
              </ul>
            </div>
          ) : null)
      ) : null}


      {activeCategoryGender === "garcon" || activeCategoryGender === "fille" ?
        (activeCategory === "enfant" ?
          <ul className={styles.navbarSubCategory}>
            {EnfantCategory.map((data, index) => (
              <li key={index}>
                <ButtonSecondary
                  isActive={data.isActive}
                  onClick={() =>
                    handleRouting(
                      `/boutique/${activeCategory}/${activeCategoryGender}/${data.href}`,
                    )
                  }
                >
                  {data.name}
                </ButtonSecondary>
              </li>
            ))}
          </ul>
          :
          (activeCategory === "ado" ?
          <ul className={styles.navbarSubCategory}>
            {AdoCategory.map((data, index) => (
              <li key={index}>
                <ButtonSecondary
                  isActive={data.isActive}
                  onClick={() =>
                    handleRouting(
                      `/boutique/${activeCategory}/${activeCategoryGender}/${data.href}`,
                    )
                  }
                >
                  {data.name}
                </ButtonSecondary>
              </li>
            ))}
          </ul>
          : null))
      : null
      }

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
