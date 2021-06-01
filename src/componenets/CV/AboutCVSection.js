import React from "react";
import "../../App.css";

const AboutCVSection = (props) => {
  return (
    <div>
      <h2 className="main-subsection">About</h2>
      <p>{props.about}</p>
    </div>
  );
};

export default AboutCVSection;
