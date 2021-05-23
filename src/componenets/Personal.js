import React from "react";
import "../App.css";

const Personal = (props) => {
  console.log("rerender");
  console.log(Object.keys(props.values));
  return (
    <div className="personal-section">
      <h1 className="input-header">Personal Information</h1>
      {Object.keys(props.values).map((value) => {
        console.log(props.values[value].keyCode);
        return (
          <input
            key={props.values[value].keyCode}
            id={value}
            placeholder={props.values[value].placeHolder}
            onChange={props.printName}
          ></input>
        );
      })}
    </div>
  );
};

export default Personal;
