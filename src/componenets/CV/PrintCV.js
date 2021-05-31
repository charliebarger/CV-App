import React from "react";
import "../../App.css";
import CVheader from "./CVheader";
import PrintExperience from "./PrintExperience";

const PrintCV = (props) => {
  const { values } = props;
  console.log(props);
  return (
    <div className="resume">
      <CVheader
        firstName={values.Personal.firstName.text}
        lastName={values.Personal.lastName.text}
        title={values.Personal.title.text}
      />
      <div className="resume-main">
        <h2 className="main-subsection">About</h2>
        <p>{values.Personal.description.text}</p>
        <PrintExperience experiences={values.Experience} />
      </div>
      <div className="resume-details">
        <p className="details-subheader">Address</p>
        <p className="address detail">{values.Personal.address.text}</p>
        <p className="details-subheader">Phone Number</p>
        <p className="phone detail">{values.Personal.phone.text}</p>
        <p className="details-subheader">Email Address</p>
        <p className="email detail">{values.Personal.email.text}</p>
      </div>
    </div>
  );
};

export default PrintCV;
