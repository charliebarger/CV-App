import React from "react";
import "../../App.css";
import RenderInputs from "./RenderInputs";
import Button from "./Button";

const Education = (props) => {
  return (
    <div>
      <h2 className="input-header">Education</h2>
      {props.values.map((value) => {
        return (
          <div key={value.keyCode} data-keycode={value.keyCode}>
            <RenderInputs
              values={value.Inputs}
              printName={(e) => {
                props.printName(e, props.section);
              }}
            />
            <Button
              customClass={"delete-button"}
              keyCode={value.keyCode}
              clickFunc={props.deleteItem}
              content="Delete"
              section={props.section}
            />
          </div>
        );
      })}
      <Button
        customClass={"add-button"}
        clickFunc={props.addExperience}
        content="Add"
        section={props.section}
      />
    </div>
  );
};

export default Education;
