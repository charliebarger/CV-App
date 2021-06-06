import React from "react";
import "../../App.css";

const BottomButtons = (props) => {
  return (
    <div className={"bottom-button-wrapper"}>
      <button onClick={props.displayExample} className={"load-btn btn"}>
        Load Example
      </button>
      <button onClick={props.resetState} className={"reset-btn btn"}>
        Reset
      </button>
    </div>
  );
};

export default BottomButtons;
