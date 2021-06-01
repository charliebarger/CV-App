import React from "react";
import "../../App.css";

const CVsidebar = (props) => {
  const { personal } = props;
  console.log(personal);
  return (
    <div className="resume-details">
      <p className="details-subheader">Address</p>
      <p className="address detail">{personal.address.text}</p>
      <p className="details-subheader">Phone Number</p>
      <p className="phone detail">{personal.phone.text}</p>
      <p className="details-subheader">Email Address</p>
      <p className="email detail">{personal.email.text}</p>
    </div>
  );
};

export default CVsidebar;
