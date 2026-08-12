import Link from "next/link";
import styles from "./Banner.module.css";
import Image from "next/image";

interface BannerProps {
  src?: string,
  alt?: string,
  href?: string,
  className?: string
}

const Banner = ({ src, alt, href, className }: BannerProps) => {
  return (
    <article className={styles.bannerContainer + " " + className}>
      {src ?
        <Link href={href ? href : "/"}>
        <Image className={styles.banner} src={src} alt={alt ? alt : "Pas de description disponible"} fill loading="eager" />
        </Link>
        : null}
    </article>
  );
};

export default Banner;
