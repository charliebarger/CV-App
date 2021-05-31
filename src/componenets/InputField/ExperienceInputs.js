import React from "react";
import "../../App.css";
import RenderInputs from "./RenderInputs";
import Button from "./Button";

const Experience = (props) => {
  console.log(props);
  return (
    <div>
      <h2 className="input-header">Experience</h2>
      {props.values.map((value) => {
        return (
          <div key={value.keyCode} data-keycode={value.keyCode}>
            <RenderInputs values={value.Inputs} printName={props.printName} />
            <Button
              customClass={"delete-button"}
              keyCode={value.keyCode}
              clickFunc={props.deleteItem}
              content="Delete"
            />
          </div>
        );
      })}
      <Button
        customClass={"add-button"}
        clickFunc={props.addExperience}
        content="Add"
      />
    </div>
  );
};

export default Experience;
