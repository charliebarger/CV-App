import React from "react";
import "../../App.css";

const Button = (props) => {
  const classes = `${props.customClass} btn`;
  return (
    <button
      className={classes}
      data-code={props.keyCode}
      onClick={(e) => {
        props.clickFunc(props.section, e);
      }}
    >
      {props.content}
    </button>
  );
};

export default Button;
