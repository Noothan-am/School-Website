import React, { useState } from "react";
import styles from "../styles/homepage.module.css";

const HomeContent = () => {
  const [selectedBox, setSelectedBox] = useState(1);

  const handleBoxClick = (boxNumber) => {
    setSelectedBox(boxNumber);
  };

  return (
    <div className={styles.hcontent}>
      <div className={styles.hcontent__left}>
        {selectedBox === 1 && (
          <>
            <h1 className={styles.hcontent__left__h1}>About</h1>
            <p className={styles.hcontent__left__p}>
              The Government Primary School in Rajanakunte, Karnataka, traces
              its roots back to 1945. Nestled on a 3-acre expanse, it caters to
              students from Std 1 to 8. The medium of instruction for Std 1-5 is
              Kannada, while for 6th-8th, it extends to both Kannada and
              English.
            </p>
          </>
        )}
        {selectedBox === 2 && (
          <>
            <h1 className={styles.hcontent__left__h1}>Details</h1>
            The Government PU College, Rajanakunte, Bangalore, Karnataka, has
            been a part of the educational landscape since 2020. Encompassing
            3.15 acres, it is currently undergoing a transformative project
            supported by Manyata Embassy, with an investment of 4 crores. The
            college offers diverse courses in Arts, Commerce, and Science.
          </>
        )}
        {selectedBox === 3 && (
          <>
            <h1 className={styles.hcontent__left__h1}>Extra</h1>
            Established in 2009, the Government High School in Rajanakunte,
            Bangalore, Karnataka, sprawls across 4.5 acres. This institution
            provides education for 9th and 10th grades in both Kannada and
            English mediums.
          </>
        )}
      </div>
      <div className={styles.hcontent__right}>
        <div
          className={styles.hcontent__right__box}
          onClick={() => handleBoxClick(1)}
        >
          01.
          <h1 className={styles.hcontent__right__box__h1}>About</h1>
        </div>
        <div
          className={styles.hcontent__right__box}
          onClick={() => handleBoxClick(2)}
        >
          02.
          <h1 className={styles.hcontent__right__box__h1}>Details</h1>
        </div>
        <div
          className={styles.hcontent__right__box}
          onClick={() => handleBoxClick(3)}
        >
          03.
          <h1 className={styles.hcontent__right__box__h1}>Extra</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
