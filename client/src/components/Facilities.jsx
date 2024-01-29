import React from "react";
import AlbumImage from "./AlbumImage";
import { facility } from "../constants/index";
import styles from "../styles/gallary.module.css";

function Facilities() {
  return (
    <div className={styles["facilities"]}>
      {facility && facility.map(({ img }) => <AlbumImage img={img} />)}
    </div>
  );
}

export default Facilities;
