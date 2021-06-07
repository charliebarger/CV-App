import React from "react";
import "../../App.css";
import logo from "../../images/cv.svg";

const Header = () => {
  return (
    <div className="cv-header">
      <div className="image-wrapper">
        <img src={logo} alt={"logo"} className={"logo"}></img>
      </div>
      <span>Build Your CV!</span>
    </div>
  );
};

export default Header;
