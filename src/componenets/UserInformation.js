import React from "react";
import "../App.css";
import RenderInputs from "./RenderInputs";

const UserInformation = (props) => {
  console.log(props);
  return (
    <div>
      <RenderInputs
        title={"Personal Information"}
        values={props.values}
        printName={props.printName}
      />
    </div>
  );
};

export default UserInformation;
