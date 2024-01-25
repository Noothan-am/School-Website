import React from "react";
import styles from "../styles/footer.module.css";
function Footer() {
  const offices = [
    {
      department: "Govt PU college",
      email: "Mr Karthik Ankar",
      tel: "Tel: 9342736575",
    },
    {
      department: "Govt High School",
      email: "Mr. Kantaraju B G",
      tel: "Tel: 9845917244",
    },
    {
      department: "Govt Primary School",
      email: "Mr Shreenivasa G ",
      tel: "Tel: 7204602103",
    },
    {
      department: "BOG",
      email: "Mr. Rajendra Kumar R C",
      tel: "Tel: 9901773645",
    },
  ];

  return (
    <div className={styles["office-container"]}>
      {offices.map((office, index) => (
        <div key={index} className={styles["office-info"]}>
          <h2>{office.department}</h2>
          <p>{office.email}</p>
          <p>{office.tel}</p>
        </div>
      ))}
    </div>
  );
}

export default Footer;
