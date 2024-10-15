import React from "react";
import "./index.css";
import { Menu11Icon } from "hugeicons-react";

const Header = () => {
  return (
    <div className="HeaderDiv">
      <div
        className="container
      "
      >
        <div className="HeaderDiv_area">
          <div className="HeaderDiv_area1">
            {/* Celeste{" "} */}
            <img src="/img/logo.svg" alt="" className="HeaderDiv_area1_img" />
          </div>
          <div className="HeaderDiv_area2">
            <a href="#story" className="HeaderDiv_area2_link1">
              Our Story
            </a>
            <a href="#gallery" className="HeaderDiv_area2_link1">
              Gallery
            </a>
            <a href="#programs" className="HeaderDiv_area2_link1">
              Programs
            </a>
            <a href="#location" className="HeaderDiv_area2_link1">
              Getting There
            </a>
            <a href="#faq" className="HeaderDiv_area2_link1">
              FAQ
            </a>
          </div>

          <Menu11Icon className="mobile_nav_icon" />
          {/* <div className="HeaderDiv_area3">
            <button className="HeaderDiv_area3_btn">Apply</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
