import React from "react";
import "../../App.css";

const CVheader = (props) => {
  return (
    <div className="resume-header">
      <p className="full-name">{props.firstName + " " + props.lastName}</p>
      <p className="title">{props.title}</p>
    </div>
  );
};

export default CVheader;
