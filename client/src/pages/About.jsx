import React from "react";
import AboutVM from "../components/AboutVM";
import FacultyDetails from "../components/FacultyDetails";
import { collegeDevelopment } from "../constants/index";

function About() {
  return (
    <div>
      <div class="d-flex align-items-start">
        <div
          class="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            class="nav-link active"
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
            class="nav-link"
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
            class="nav-link"
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
            class="nav-link"
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
            class="nav-link"
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
            3
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
            5
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
