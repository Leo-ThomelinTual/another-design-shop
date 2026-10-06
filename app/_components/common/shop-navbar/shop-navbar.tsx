"use client"
import { AdoCategory, dataCategory, EnfantCategory, FemmeCategory, HommeCategory } from "@/app/_lib/dataSubNav"
import styles from "./shop-navbar.module.css"
import ButtonSecondary from "../../ui/button-secondary/button-secondary"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import ButtonPrimary from "../../ui/button-primary/button-primary";

const ShopNavbar = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeCategoryGender, setActiveCategoryGender] = useState<"garcon" | "fille" | null>(null);
  const [nochoose] = [null, "homme", "femme"];

  const router = useRouter();

  const handleRouting = (href: string) => {
    router.push(href)
  };

  return (
    <div className={styles.shopNavbar}>
      <ul className={styles.shopNavbarList}>
        <li className={styles.shopNavbarListItem}>
          <ButtonPrimary className={styles.buttonPromotion}>
            Promotions
          </ButtonPrimary>
        </li>
        {dataCategory.map((data, index) => (
          <li key={index} className={styles.shopNavbarListItem}>
            <ButtonSecondary isActive={activeCategory === data.type ? true : false} onClick={() => setActiveCategory(activeCategory === data.type ? null : data.type)}>
              {data.title}
            </ButtonSecondary>
          </li>
        ))}
      </ul>

      {/* SubCategory for gender choice */}

      {activeCategory !== nochoose ? (
        (activeCategory === "enfant" || activeCategory === "ado" ? (
          <div className={styles.subcategoryContainer}>
            <ul className={styles.subcategoryGenderList}>
              <li>
                <ButtonSecondary isActive={activeCategoryGender === `garcon` ? true : false} onClick={() => setActiveCategoryGender(activeCategoryGender === "garcon" ? null : "garcon")}>
                  Garçon
                  <Icon icon="mdi:chevron-double-right" />
                </ButtonSecondary>
              </li>
              <li>
                <ButtonSecondary isActive={activeCategoryGender === `fille` ? true : false} onClick={() => setActiveCategoryGender(activeCategoryGender === "fille" ? null : "fille")}>
                  Fille
                  <Icon icon="mdi:chevron-double-right" />
                </ButtonSecondary>
              </li>
            </ul>

          {activeCategoryGender === "garcon" || activeCategoryGender === "fille" ?
            (activeCategory === "enfant" ?
              <ul className={styles.subcategoryClothingList}>
                  {EnfantCategory.map((data, index) => (
                    <li key={index}>
                      <ButtonSecondary isActive={data.isActive} onClick={() => handleRouting(`/boutique/${activeCategory}/${activeCategoryGender}/${data.href}`)}>
                        {data.name}
                      </ButtonSecondary>
                  </li>
                ))}
                </ul>
                :
                (activeCategory === "ado" ?
                  <ul className={styles.subcategoryClothingList}>
                    {AdoCategory.map((data, index) => (
                      <li key={index}>
                        <ButtonSecondary isActive={data.isActive} onClick={() => handleRouting(`/boutique/${activeCategory}/${activeCategoryGender}/${data.href}`)}>
                          {data.name}
                        </ButtonSecondary>
                      </li>
                    ))}
                  </ul>
                  : null
                )): null
          }
          </div>
        ): null)
      ) : null}

      {/* SubCategory for female and male */}

      {activeCategory === "homme" ? (
        <ul className={styles.subcategoryClothingList}>
          {HommeCategory.map((data, index) => (
            <li key={index}>
              <ButtonSecondary isActive={data.isActive} onClick={() => handleRouting(`/boutique/${activeCategory}/${data.href}`)}>
                {data.name}
              </ButtonSecondary>
            </li>
          ))}
        </ul>
      ) : null}

      {activeCategory === "femme" ? (
        <ul className={styles.subcategoryClothingList}>
          {FemmeCategory.map((data, index) => (
            <li key={index}>
              <ButtonSecondary isActive={data.isActive} onClick={() => handleRouting(`/boutique/${activeCategory}/${data.href}`)}>
                {data.name}
              </ButtonSecondary>
            </li>
          ))}
        </ul>
      ) : null}

    </div>
  )
}

export default ShopNavbar
