import React from "react";

const PrintCV = (props) => {
  console.log(props.values.firstName);
  return (
    <div>
      <p>{props.values.firstName}</p>
      <p>{props.values.lastName}</p>
    </div>
  );
};

export default PrintCV;
