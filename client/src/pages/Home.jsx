import React from "react";
import Navbar from "../components/Navbar";
import HomeContent from "../components/HomeContent";
import styles from "../styles/homepage.module.css";
function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles["home-hero"]}>
        <img src={require("../assets/hero-bg.jpg")} alt="" />
        <h1>The Government High School, Rajanakunte</h1>
      </div>
      <HomeContent />
    </div>
  );
}

export default Home;
