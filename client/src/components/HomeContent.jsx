import React from "react";
import styles from "../styles/homepage.module.css";

const HomeContent = () => {
  return (
    <div className={styles.hcontent}>
      <div className={styles.hcontent__left}>
        <h1 className={styles.hcontent__left__h1}>
          The Government Primary School, Rajanakunte
        </h1>
        <p className={styles.hcontent__left__p}>
          The Government Primary School in Rajanakunte, Karnataka, traces its
          roots back to 1945. Nestled on a 3-acre expanse, it caters to students
          from Std 1 to 8. The medium of instruction for Std 1-5 is Kannada,
          while for 6th-8th, it extends to both Kannada and English.
        </p>
      </div>
      <div className={styles.hcontent__right}>
        <div className={styles.hcontent__right__box}>
          01.
          <h1 className={styles.hcontent__right__box__h1}>Financial Aid</h1>
        </div>
        <div className={styles.hcontent__right__box}>
          02.
          <h1 className={styles.hcontent__right__box__h1}>Financial Aid</h1>
        </div>
        <div className={styles.hcontent__right__box}>
          03.
          <h1 className={styles.hcontent__right__box__h1}>Financial Aid</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
