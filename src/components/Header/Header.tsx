import React from "react";
import { Button } from "../ui/button";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["text-center"]}>
        <h1 className={styles["header__title"]}>Nail&apos;s Styles</h1>
      </div>
      <Button variant="outline" className={styles["header__button"]}>
        Realiza tu reserva
      </Button>
    </header>
  );
};
