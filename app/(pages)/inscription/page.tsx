import Input from "@/app/_components/Input/Input";
import styles from "./page.module.css";
import ButtonSecondary from "@/app/_components/Utils/ButtonsSecondary/ButtonSecondary";
import Link from "next/link";
export default function Inscription() {

  return (
    <>
      <main className={styles.main}>
        <form className={styles.formContainer} action="">
          <Input className={styles.colspan2} label="Email" type="email" placeholder="Entrez votre email" />
          <Input className={styles.colspan2} label="Password" type="password" placeholder="Entrez votre mot de passe" />
          <Input className={styles.colspan2} label="Repeat password" type="password" placeholder="Entrez une nouvel fois votre mot de passe" />
          <Input className={styles.colspan2} type="checkbox" />
          <ButtonSecondary className={styles.colspan2}>
            S'inscrire
          </ButtonSecondary>
          <Link href="/connexion">Vous avez déja un compte ? Cliquez ici.</Link>
        </form>
      </main>
    </>
  );
}
