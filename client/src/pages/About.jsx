import React from "react";
import AboutVM from "../components/AboutVM";
import FacultyDetails from "../components/FacultyDetails";
import {
  boardMemeber,
  collegeDevelopment,
  principals,
} from "../constants/index";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="about">
      <Navbar />
      <div class="d-flex  align-items-start" style={{ marginTop: "3rem" }}>
        <div
          class="nav flex-column nav-pills me-3"
          id="v-pills-tab"
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
            Vision Mission
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
            College Development committee
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
            Board of Members
          </button>
          <button
            class="nav-link my-2"
            id="v-pills-settings-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-settings"
            type="button"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            About Chairperson
          </button>
          <button
            class="nav-link my-2"
            id="v-pills-principals-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-principals"
            type="button"
            role="tab"
            aria-controls="v-pills-principals"
            aria-selected="false"
          >
            Principals
          </button>
        </div>
        <div class="tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            1
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            {collegeDevelopment.map((faculty) => (
              <FacultyDetails
                key={faculty.name}
                about={faculty.about}
                designation={faculty.designation}
                img={faculty.img}
                name={faculty.name}
              />
            ))}
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            {boardMemeber.map((faculty) => (
              <FacultyDetails
                key={faculty.name}
                about={faculty.about}
                img={faculty.img}
                name={faculty.name}
              />
            ))}
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
          >
            4
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-principals"
            role="tabpanel"
            aria-labelledby="v-pills-principals-tab"
          >
            {principals.map((faculty) => (
              <FacultyDetails
                key={faculty.name}
                about={faculty.about}
                img={faculty.img}
                name={faculty.name}
                designation={faculty.designation}
                experience={faculty.experience}
                joining_date={faculty.joining_date}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
