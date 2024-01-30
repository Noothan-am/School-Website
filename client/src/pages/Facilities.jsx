import styles from "../styles/facilities.module.css";
import React from "react";

import ControlledCarousel from "../components/ControlledCarousel";
import Footer from "../components/Footer";

const Facility = ({ heading, description }) => {
  return (
    <div style={{ marginBottom: "28px" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{heading}</h2>
      <p style={{ fontSize: "1rem" }}>{description}</p>
    </div>
  );
};

function Facilities() {
  return (
    <div className={styles["facilities"]}>
      <div className={styles["facilities-container"]}>
        <div className={styles["carousel"]}>
          <ControlledCarousel />
        </div>
        <div className={styles["content"]}>
          <div className="first-part">
            <Facility
              heading="Dive In!"
              description="Our modern pool offers a refreshing space for students to learn aquatic skills under expert supervision."
            />
            <Facility
              heading="Tech-Driven Learning"
              description="Experience interactive education with our smart classes, fostering a futuristic approach to learning and understanding."
            />
          </div>
          <div className="second-part">
            <Facility
              heading="Play, Compete, Thrive"
              description="Explore our top-notch grounds and sports facilities, promoting teamwork, sportsmanship, and a passion for physical well-being."
            />
            <Facility
              heading="Nourish, Flourish"
              description="Our food scheme ensures wholesome meals, laying the foundation for healthy living and optimal academic performance."
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Facilities;
