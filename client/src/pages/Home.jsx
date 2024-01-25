import React from "react";
import Navbar from "../components/Navbar";
import HomeContent from "../components/HomeContent";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-hero">
        <img src="../assets/home-background.jpg" alt="" />
        <h1>The Government High School, Rajanakunte</h1>
      </div>
      <HomeContent />
    </div>
  );
}

export default Home;
