import React from "react";
import styles from "./Banner.module.css";
import Image from "next/image";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <Image
        src="/banner.jpg"
        alt="Banner background"
        width={1600}
        height={400}
        className={styles.bannerImage}
      />
      <div className={styles.gradient}></div>
      <div className={styles.content}>
        <div className={styles.container}>
          <h1 className={styles.title}>Transforma tus uñas en arte</h1>
          <p className={styles.subtitle}>
            Diseños personalizados para un estilo único y resultados duraderos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
