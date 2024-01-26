import React from "react";
import styles from "../styles/faculty.module.css";

const FacultyDetails = ({ img, name, designation, about }) => {
  return (
    <section className={styles.faculty}>
      <div className={styles.faculty__imageContainer}>
        <img className={styles.faculty__image} src={img} alt={name} />
      </div>
      <div className={styles.faculty__info}>
        <h2 className={styles.faculty__name}>{name}</h2>
        <p className={styles.faculty__designation}>{designation}</p>
        {about && <p className={styles.faculty__about}>{about}</p>}
      </div>
    </section>
  );
};

export default FacultyDetails;
