import React from "react";
import "../../App.css";

let PrintExperience = (props) => {
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
            <span className="experience-dates">
              {experience.Inputs.startDate.text +
                " - " +
                experience.Inputs.endDate.text}
            </span>
          </div>
        );
      })}
    </div>
  );
};
export default PrintExperience;
