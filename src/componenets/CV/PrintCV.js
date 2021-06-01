import React from "react";
import "../../App.css";
import CVheader from "./CVheader";
import ExperienceCVSection from "./ExperienceCVSection";
import CVmain from "./CVmain";

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
      <div className="resume-main">
        <h2 className="main-subsection">About</h2>
        <p>{props.values.Personal.description.text}</p>
        <ExperienceCVSection experiences={experience} />
      </div>
      <CVmain
        about={props.values.Personal.description.text}
        experiences={experience}
      ></CVmain>
      <div className="resume-details">
        <p className="details-subheader">Address</p>
        <p className="address detail">{personal.Inputs.address.text}</p>
        <p className="details-subheader">Phone Number</p>
        <p className="phone detail">{personal.Inputs.phone.text}</p>
        <p className="details-subheader">Email Address</p>
        <p className="email detail">{personal.Inputs.email.text}</p>
      </div>
    </div>
  );
};

export default PrintCV;
