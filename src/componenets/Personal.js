import React from "react";

const Personal = (props) => {
  console.log("rerender");
  console.log(Object.keys(props.values));
  return (
    <div>
      <h1>Personal Information</h1>
      {Object.keys(props.values).map((value) => {
        console.log(props.values[value].keyCode);
        return (
          <input
            key={props.values[value].keyCode}
            id={value}
            onChange={props.printName}
          ></input>
        );
      })}
    </div>
  );
};

export default Personal;
