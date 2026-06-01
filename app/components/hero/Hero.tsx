"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import styles from "./hero.module.css";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import Link from "next/link";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
  const title = useRef(null);
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to(title.current, {
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom center",
          markers: false,
          scrub: 1,
        },
        left: 250,
        fontSize: 24,
        top: 27,
      });
    },
    { scope: title },
  );
  return (
    <header ref={container} className={styles.hero}>
      <Image
        className={styles.heroImage}
        src="/img/Summer-Scene-Light.png"
        fill
        alt=""
      />
      <h1 ref={title} className={`${styles.heroTitle} heroTitle`}>
        Website brand
      </h1>
      <Link className={styles.seeMoreLink} href="/">
        Voir plus <Icon icon="mdi:arrow-right" />
      </Link>
    </header>
  );
};

export default Hero;
