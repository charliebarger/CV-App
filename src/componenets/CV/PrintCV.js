import React from "react";
import "../../App.css";
import CVheader from "./CVheader";
import CVmain from "./CVmain";
import CVsidebar from "./CVsidebar";

const PrintCV = (props) => {
  const personal = props.values.Personal;
  const experience = props.values.Experience;
  return (
    <div className="resume">
      <CVheader
        firstName={personal.Inputs.firstName.text}
        lastName={personal.Inputs.lastName.text}
        title={personal.Inputs.title.text}
      />
      <CVmain
        about={props.values.Personal.description.text}
        experiences={experience}
        education={props.values.Education}
      />
      <CVsidebar personal={personal.Inputs} />
    </div>
  );
};

export default PrintCV;
