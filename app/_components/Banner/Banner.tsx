import styles from "./Banner.module.css";
import Image from "next/image";

interface BannerProps {
  image: string,
  alt: string
}

const Banner = ({ image, alt }: BannerProps) => {
  return (
    <div>
      <Image className={styles.banner} src={image} alt={alt} fill loading="eager" />
    </div>
  );
};

export default Banner;
