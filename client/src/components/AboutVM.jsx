import React from "react";
import styles from "../styles/about.module.css";

const AboutVM = () => {
  return (
    <section className={styles.vm}>
      <h1 className={styles.vm__h1}>Vision</h1>
      <div className={styles.vm__line} />
      <p className={styles.vm__p}>
        To provide quality education to students coming from all strata of the
        society. To shape the life of each student for a better future.
      </p>
      <h1 className={styles.vm__h1}>Mission</h1>
      <div className={styles.vm__line} />
      <p className={styles.vm__p}>
        To create technologically upgraded institution which caters to the
        educational standards of today&apos;s times.
      </p>
    </section>
  );
};

export default AboutVM;
