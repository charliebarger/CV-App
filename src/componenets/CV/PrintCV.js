import React from "react";
import "../../App.css";
import CVheader from "./CVheader";
import PrintExperience from "./PrintExperience";

const PrintCV = (props) => {
  console.log(props);
  const values = props.values.Personal.Inputs;
  console.log(values);
  return (
    <div className="resume">
      <CVheader
        firstName={values.firstName.text}
        lastName={values.lastName.text}
        title={values.title.text}
      />
      <div className="resume-main">
        <h2 className="main-subsection">About</h2>
        {/* <p>{props.values.Personal.description.text}</p> */}
        <PrintExperience experiences={props.values.Experience} />
      </div>
      <div className="resume-details">
        <p className="details-subheader">Address</p>
        <p className="address detail">{values.address.text}</p>
        <p className="details-subheader">Phone Number</p>
        <p className="phone detail">{values.phone.text}</p>
        <p className="details-subheader">Email Address</p>
        <p className="email detail">{values.email.text}</p>
      </div>
    </div>
  );
};

export default PrintCV;
