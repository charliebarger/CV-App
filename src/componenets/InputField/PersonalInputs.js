import React from "react";
import "../../App.css";
import RenderInputs from "./RenderInputs";

const PersonalInputs = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <RenderInputs values={props.values} printName={props.printName} />
    </div>
  );
};

export default PersonalInputs;
