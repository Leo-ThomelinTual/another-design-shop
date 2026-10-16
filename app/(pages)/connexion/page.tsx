import Input from "@/app/_components/ui/input/input";
import styles from "./page.module.css";
import ButtonSecondary from "@/app/_components/ui/button-secondary/button-secondary";
import Link from "next/link";
import ButtonPrimary from "@/app/_components/ui/button-primary/button-primary";
import Image from "next/image";

export default function Connexion() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.glass}>
          <div className={styles.imageContainer}>
            <Image src="/img/Summer-Scene-Light.png" alt="test" fill />
          </div>
        </section>
        <section className={styles.formularContainer}>
          <ButtonSecondary href="/homepage">Retour</ButtonSecondary>
          <h2 className={styles.SignInTitle}>Connexion</h2>
          <form className={styles.formular} action="">
            <Input label="Email" type="email" placeholder="Entrez votre email" />
            <Input label="Password" type="password" placeholder="Entrez votre mot de passe" />
            <div>
              <input id="rememberMe" name="rememberMe" type="checkbox"/>
              <label htmlFor="rememberMe"> Se souvenir de moi</label>
            </div>
            <ButtonPrimary className={styles.buttonSignIn}>Connexion</ButtonPrimary>
            <Link href="/inscription">Vous n'avez pas encore de compte ? Cliquez ici.</Link>
          </form>
          <h2 className={styles.brandname}>BRAND</h2>
        </section>

      </main>
    </>
  );
}
