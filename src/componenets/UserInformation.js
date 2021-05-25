import React from "react";
import "../App.css";
import RenderInputs from "./RenderInputs";
import Experience from "./Experience";

const UserInformation = (props) => {
  console.log(props);
  return (
    <div>
      <RenderInputs
        title={"Personal Information"}
        values={props.values.Personal}
        printName={props.printName}
      />
      <Experience
        values={props.values.Experience}
        printName={props.printName}
      />
    </div>
  );
};

export default UserInformation;
