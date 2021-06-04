import React from "react";
import "../../App.css";
import PrintCV from "./PrintCV";

const PrintDates = (props) => {
  return (
    <span className="experience-dates">{props.start + " - " + props.stop}</span>
  );
};

export default PrintDates;
