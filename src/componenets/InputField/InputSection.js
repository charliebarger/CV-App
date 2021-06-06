import React from "react";
import "../../App.css";
import PersonalInputs from "./PersonalInputs";
import Experience from "./ExperienceInputs";
import Education from "./EducationSection";
import BottomButtons from "./BottomButtons";

const InputSection = (props) => {
  return (
    <div className="input-section">
      <PersonalInputs
        title={"Personal Information"}
        values={props.values.Personal}
        printName={props.printName}
      />
      <Experience
        section={Object.keys(props.values)[1]}
        values={props.values.Experience}
        printName={props.printItem}
        deleteItem={props.deleteItem}
        addItem={props.addItem}
      />
      <Education
        section={Object.keys(props.values)[2]}
        values={props.values.Education}
        printName={props.printItem}
        deleteItem={props.deleteItem}
        addItem={props.addItem}
      />
      <BottomButtons
        displayExample={props.displayExample}
        resetState={props.resetState}
      />
    </div>
  );
};

export default InputSection;
