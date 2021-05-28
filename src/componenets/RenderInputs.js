import React from "react";
import "../App.css";

const RenderInputs = (props) => {
  return (
    <div className="sub-section">
      {Object.keys(props.values).map((value) => {
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

export default RenderInputs;
