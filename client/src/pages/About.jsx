import React from "react";
import AboutVM from "../components/AboutVM";
import FacultyDetails from "../components/FacultyDetails";
import { collegeDevelopment } from "../constants";

function About() {
  return (
    <div>
      {/* <AboutVM /> */}
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
  );
}

export default About;
