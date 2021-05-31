import React from "react";
import "../../App.css";
import PersonalInputs from "./PersonalInputs";
import Experience from "./ExperienceInputs";

const InputSection = (props) => {
  return (
    <div className="input-section">
      <PersonalInputs
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
