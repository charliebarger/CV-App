import React from "react";
import "../../App.css";
import RenderInputs from "./RenderInputs";
import Experience from "./ExperienceInputs";

const InputSection = (props) => {
  return (
    <div className="input-section">
      <RenderInputs
        title={"Personal Information"}
        values={props.values.Personal}
        printName={props.printName}
      />
      <Experience
        values={props.values.Experience}
        printName={props.printExperience}
        deleteItem={props.deleteExperience}
        addExperience={props.addExperience}
      />
    </div>
  );
};

export default InputSection;
