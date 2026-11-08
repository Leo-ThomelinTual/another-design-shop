import Link from "next/link";
import styles from "./banner.module.css";
import Image from "next/image";

interface BannerProps {
  src?: string;
  alt?: string;
  href?: string;
  className?: string;
}

const Banner = ({ src, alt, href, className }: BannerProps) => {
  return (
    <article className={styles.bannerContainer + " " + className}>
      {src ? (
        <Link href={href ? href : "/"}>
          <Image
            className={styles.image}
            src={src}
            alt={alt ? alt : "Pas de description disponible"}
            width={500}
            height={500}
            sizes="50"
            loading="eager"
          />
        </Link>
      ) : null}
    </article>
  );
};

export default Banner;
