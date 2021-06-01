import React from "react";
import "../../App.css";
import ExperienceCVSection from "./ExperienceCVSection";
import AboutCVSection from "./AboutCVSection";

const CVmain = (props) => {
  return (
    <div className="resume-main">
      <AboutCVSection about={props.about} />
      <ExperienceCVSection experiences={props.experiences} />
    </div>
  );
};

export default CVmain;
