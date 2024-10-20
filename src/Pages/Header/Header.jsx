import React, { useState } from "react";
import "./index.css";
import { Menu11Icon, Cancel01Icon, ArrowRight01Icon } from "hugeicons-react";

const Header = () => {
  const [fixed, setFixed] = useState(false);
  const [headerMenu, setHeaderMenu] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  const toggleHeaderMenu = (e) => {
    setHeaderMenu(!headerMenu);
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <div className={fixed ? "HeaderDiv" : "HeaderDiv_relative"}>
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

          <Menu11Icon className="mobile_nav_icon" onClick={toggleHeaderMenu} />
          {/* <div className="HeaderDiv_area3">
            <button className="HeaderDiv_area3_btn">Apply</button>
          </div> */}
        </div>
      </div>
      {headerMenu && (
        <div className="HeaderMenu">
          <div className="HeaderMenu_cont">
            <div className="HeaderMenu_cont_1">
              <Cancel01Icon
                className="HeaderMenu_cont_body_cont1_icon"
                onClick={toggleHeaderMenu}
              />
            </div>
            <div className="HeaderMenu_cont_body">
              <a
                href="#story"
                className="HeaderMenu_cont_body_cont1"
                onClick={toggleHeaderMenu}
              >
                Our Story
                <ArrowRight01Icon className="HeaderMenu_cont_body_cont1_icon" />
              </a>
              <a
                href="#gallery"
                className="HeaderMenu_cont_body_cont1"
                onClick={toggleHeaderMenu}
              >
                Gallery
                <ArrowRight01Icon className="HeaderMenu_cont_body_cont1_icon" />
              </a>
              <a
                href="#programs"
                className="HeaderMenu_cont_body_cont1"
                onClick={toggleHeaderMenu}
              >
                Programs
                <ArrowRight01Icon className="HeaderMenu_cont_body_cont1_icon" />
              </a>
              <a
                href="#location"
                className="HeaderMenu_cont_body_cont1"
                onClick={toggleHeaderMenu}
              >
                Getting There
                <ArrowRight01Icon className="HeaderMenu_cont_body_cont1_icon" />
              </a>
              <a
                href="#faq"
                className="HeaderMenu_cont_body_cont1"
                onClick={toggleHeaderMenu}
              >
                FAQ
                <ArrowRight01Icon className="HeaderMenu_cont_body_cont1_icon" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
