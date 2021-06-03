import React from "react";
import "../../App.css";

let EducationCVSection = (props) => {
  console.log(props);
  return (
    <div>
      <h2 className="main-subsection education">Education</h2>
      {props.education.map((places) => {
        return (
          <div className="experience-section" key={places.keyCode}>
            <span className="experience-position">
              {places.Inputs.degree.text}
            </span>
            <span className="experience-company">
              {places.Inputs.school.text + ", " + places.Inputs.city.text}
            </span>
            <span className="experience-dates">
              {places.Inputs.startDate.text +
                " - " +
                places.Inputs.endDate.text}
            </span>
          </div>
        );
      })}
    </div>
  );
};
export default EducationCVSection;
