import React from "react";
import "../../App.css";
import RenderInputs from "./RenderInputs";

const Experience = (props) => {
  return (
    <div>
      <h1 className="input-header">Experience</h1>
      {props.values.map((value) => {
        return (
          <div key={value.keyCode} data-keycode={value.keyCode}>
            <RenderInputs values={value.Inputs} printName={props.printName} />
            <button data-code={value.keyCode} onClick={props.deleteItem}>
              Delete
            </button>
          </div>
        );
      })}
      <button onClick={props.addExperience}>Add</button>
    </div>
  );
};

export default Experience;
