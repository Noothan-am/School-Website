import React from "react";
import Navbar from "../components/Navbar";
import HomeContent from "../components/HomeContent";
import styles from "../styles/homepage.module.css";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles["home-hero"]}>
        <img src={require("../assets/hero-bg.jpg")} alt="" />
        <h1>GOVERNMENT INSTITUTIONS RAJANUKUNTE</h1>
      </div>
      <HomeContent />
      <Footer />
    </div>
  );
}

export default Home;
