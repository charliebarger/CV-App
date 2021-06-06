import React from "react";
import "../../App.css";

const PrintDates = (props) => {
  return (
    <span className="experience-dates">{props.start + " - " + props.stop}</span>
  );
};

export default PrintDates;
