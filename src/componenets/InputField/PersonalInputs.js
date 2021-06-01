import React from "react";
import "../../App.css";
import RenderInputs from "./RenderInputs";

const PersonalInputs = (props) => {
  console.log(props.values.description);
  return (
    <div>
      <h2>{props.title}</h2>
      <RenderInputs values={props.values.Inputs} printName={props.printName} />
      <textarea
        placeholder={props.values.description.placeHolder}
        onChange={props.printName}
        id="description"
      ></textarea>
    </div>
  );
};

export default PersonalInputs;
