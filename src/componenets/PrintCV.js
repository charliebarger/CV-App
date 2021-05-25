import React from "react";
import "../App.css";
import CVheader from "./CVheader";

const PrintCV = (props) => {
  const { values } = props;
  console.log(props.values);
  return (
    <div className="resume">
      <CVheader
        firstName={values.firstName.text}
        lastName={values.lastName.text}
        title={values.title.text}
      />
      <div className="resume-main"></div>
      <div className="resume-details">
        <p className="address">{values.address.text}</p>
        <p className="phone">{values.phone.text}</p>
        <p className="email">{values.email.text}</p>
        <p className="description">{values.description.text}</p>
      </div>
    </div>
  );
};

export default PrintCV;
