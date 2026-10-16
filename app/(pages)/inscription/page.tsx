import Input from "@/app/_components/ui/input/input";
import styles from "./page.module.css";
import ButtonSecondary from "@/app/_components/ui/button-secondary/button-secondary";
import Link from "next/link";
import Image from "next/image";
import ButtonPrimary from "@/app/_components/ui/button-primary/button-primary";
export default function Inscription() {

  return (
    <>
      <main className={styles.main}>
        <section className={styles.formularContainer}>
          <ButtonSecondary href="/homepage">Retour</ButtonSecondary>
          <h2 className={styles.SignInTitle}>Inscription</h2>
          <form className={styles.formular} action="">
            <Input label="Nom" type="text" placeholder="Entrez votre nom" />
            <Input label="Prénom" type="text" placeholder="Entrez votre prénom" />
            <Input label="Email" type="email" placeholder="Entrez votre email" />
            <Input label="Password" type="password" placeholder="Entrez votre mot de passe" />
            <Input label="Repeat password" type="password" placeholder="Entrez une nouvel fois votre mot de passe" />
            <div>
              <input id="globalConditions" name="globalConditions" type="checkbox"/>
              <label htmlFor="globalConditions"> J'ai lue les conditions général d'utilisation</label>
            </div>
            <ButtonPrimary className={styles.buttonSignIn}>S'inscrire</ButtonPrimary>
            <Link href="/connexion">Vous avez déja un compte ? Cliquez ici.</Link>
          </form>
          <h2 className={styles.brandname}>BRAND</h2>
        </section>
        <section className={styles.glass}>
          <div className={styles.imageContainer}>
            <Image src="/img/Summer-Scene-Light.png" alt="test" fill />
          </div>
        </section>
      </main>
    </>
  );
}
