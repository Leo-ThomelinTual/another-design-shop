import Link from "next/link";
import styles from "./Points.module.css";

type PointsProps = {
  horizontal: boolean;
};

const Points = ({ horizontal }: PointsProps) => {
  return (
    <div
      className={
        horizontal ? `${styles.horizontalPoints}` : `${styles.verticalPoints}`
      }
    >
      <Link href="/" className={styles.Points}>
        <p className={styles.PointsName}>Accueil</p>
      </Link>
      <Link href="/" className={styles.Points}>
        <p className={styles.PointsName}>Accueil</p>
      </Link>
      <Link href="/" className={styles.Points}>
        <p className={styles.PointsName}>Accueil</p>
      </Link>
      <Link href="/" className={styles.Points}>
        <p className={styles.PointsName}>Accueil</p>
      </Link>
    </div>
  );
};

export default Points;
