import React from "react";
import "../../App.css";
import AddableInputs from "./AddableInputs";

const Education = (props) => {
  return (
    <AddableInputs
      section={props.section}
      values={props.values}
      printName={props.printName}
      deleteItem={props.deleteItem}
      addItem={props.addItem}
    />
  );
};

export default Education;
