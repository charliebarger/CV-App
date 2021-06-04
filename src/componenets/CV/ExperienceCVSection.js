import React from "react";
import "../../App.css";
import PrintDates from "./PrintDates";

let ExperienceCVSection = (props) => {
  return (
    <div>
      <h2 className="main-subsection experience">Experience</h2>
      {props.experiences.map((experience) => {
        return (
          <div className="experience-section" key={experience.keyCode}>
            <span className="experience-position">
              {experience.Inputs.position.text}
            </span>
            <span className="experience-company">
              {experience.Inputs.company.text +
                ", " +
                experience.Inputs.city.text}
            </span>
            <PrintDates
              start={experience.Inputs.startDate.text}
              stop={experience.Inputs.endDate.text}
            />
          </div>
        );
      })}
    </div>
  );
};
export default ExperienceCVSection;
