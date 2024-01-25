import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/homepage.module.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles["home-hero"]}>
        <img src={require("../assets/hero-bg.jpg")} alt="" />
        <h1>The Government High School, Rajanakunte</h1>
      </div>
    </div>
  );
}

export default Home;
