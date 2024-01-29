import React from "react";
import HomeContent from "../components/HomeContent";
import styles from "../styles/homepage.module.css";
function Home() {
  return (
    <div>
      <div className={styles["home-hero"]}>
        <img src={require("../assets/hero-bg.jpg")} alt="" />
        <h1>GOVERNMENT INSTITUTIONS RAJANUKUNTE</h1>
      </div>
      <HomeContent />
    </div>
  );
}

export default Home;
