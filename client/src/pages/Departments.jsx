import React from "react";
import styles from "../styles/deparments.module.css";
import Navbar from "../components/Navbar";

function Departments() {
  return (
    <div className={styles["departments"]}>
      <Navbar />
      <div
        class="d-flex align-items-start"
        style={{ marginTop: "3rem", marginLeft: "4rem", width: "90%" }}
      >
        <div
          class="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          style={{ width: "25%", minWidth: "25%" }}
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            class="nav-link my-2 active"
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            Primary School
          </button>
          <button
            class="nav-link my-2"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-profile"
            type="button"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            High School
          </button>
          <button
            class="nav-link my-2"
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-messages"
            type="button"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            PU College
          </button>
        </div>
        <div class="tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            d
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            d
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            d
          </div>
        </div>
      </div>
    </div>
  );
}

export default Departments;
