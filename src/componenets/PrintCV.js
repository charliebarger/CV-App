import React from "react";

const PrintCV = (props) => {
  const { values } = props;
  console.log(props.values);
  return (
    <div>
      <p>{values.firstName.text}</p>
      <p>{values.lastName.text}</p>
      <p>{values.title.text}</p>
      <p>{values.address.text}</p>
      <p>{values.phone.text}</p>
      <p>{values.email.text}</p>
      <p>{values.description.text}</p>
    </div>
  );
};

export default PrintCV;
