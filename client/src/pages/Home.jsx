import React from "react";
import HomeContent from "../components/HomeContent";
import styles from "../styles/homepage.module.css";
function Home() {
  return (
    <div className={styles.homeMain} >
      <div className={styles["home-hero"]}>
        <img className={styles.homeImg} src={require("../assets/hero-bg.jpg")} alt="" />
        <h1 className={styles.homeH1} >GOVERNMENT INSTITUTIONS RAJANUKUNTE</h1>
      </div>
      <HomeContent />
    </div>
  );
}

export default Home;
