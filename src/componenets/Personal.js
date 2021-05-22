import React from "react";

const Personal = (props) => {
  return (
    <div>
      <h1>Personal Information</h1>
      <input
        placeholder="First Name"
        onChange={props.printName}
        id="firstName"
      ></input>
      <input
        placeholder="Last Name"
        onChange={props.printName}
        id="lastName"
      ></input>
    </div>
  );
};

export default Personal;
