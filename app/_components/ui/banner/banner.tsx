import Link from "next/link";
import styles from "./banner.module.css";
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
          <div className={styles.imageContainer}>
            <Image src={src} alt={alt ? alt : "Pas de description disponible"} fill sizes="50" loading="eager" />
          </div>
        </Link>
      : null}
    </article>
  );
};

export default Banner;
