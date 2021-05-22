import React from "react";

const PrintCV = (props) => {
  console.log(props.values.firstName);
  return (
    <div>
      <p>{props.values.firstName.text}</p>
      <p>{props.values.lastName.text}</p>
    </div>
  );
};

export default PrintCV;
