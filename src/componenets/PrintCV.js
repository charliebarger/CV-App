import React from "react";
import "../App.css";

const PrintCV = (props) => {
  const { values } = props;
  console.log(props.values);
  return (
    <div className="resume">
      <div className="resume-header">
        <p className="full-name">
          {values.firstName.text + " " + values.lastName.text}
        </p>
        <p className="title">{values.title.text}</p>
      </div>
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
