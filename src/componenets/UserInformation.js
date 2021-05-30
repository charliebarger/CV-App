import React from "react";
import "../App.css";
import RenderInputs from "./RenderInputs";
import Experience from "./Experience";

const UserInformation = (props) => {
  return (
    <div>
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

export default UserInformation;
