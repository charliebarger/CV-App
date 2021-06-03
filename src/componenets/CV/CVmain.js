import React from "react";
import "../../App.css";
import ExperienceCVSection from "./ExperienceCVSection";
import AboutCVSection from "./AboutCVSection";
import EducationCVSection from "./EducationCVsection";

const CVmain = (props) => {
  return (
    <div className="resume-main">
      <AboutCVSection about={props.about} />
      <ExperienceCVSection experiences={props.experiences} />
      <EducationCVSection education={props.education} />
    </div>
  );
};

export default CVmain;
