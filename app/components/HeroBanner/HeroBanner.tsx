import Image from "next/image";
import styles from "./HeroBanner.module.css";

interface HeroBannerProps {
  image: string;
  alt: string;
}

const HeroBanner = ({ image, alt }: HeroBannerProps) => {
  return (
    <div className={styles.herobanner}>
      <Image src={image} alt={alt} fill loading="eager" />
    </div>
  );
};

export default HeroBanner;
