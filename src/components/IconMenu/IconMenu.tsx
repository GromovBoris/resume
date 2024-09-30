import React from "react";
import AboutIcon from "../../assets/icons/nav/about.png";
import ExperienceIcon from "../../assets/icons/nav/experience.png";
import EducationIcon from "../../assets/icons/nav/education.png";
import CodeIcon from "../../assets/icons/nav/code.png";
import SkillsIcon from "../../assets/icons/nav/skills.png";
import "./IconMenu.scss";

const IconMenu = () => {
  return (
    <div className="header__nav-icon">
      <a href="/home" aria-label="Home">
        <img src={AboutIcon} alt="Home" />
      </a>
      <a href="/about" aria-label="About">
        <img src={ExperienceIcon} alt="About" />
      </a>
      <a href="/contact" aria-label="Contact">
        <img src={EducationIcon} alt="Contact" />
      </a>
      <a href="/contact" aria-label="Contact">
        <img src={CodeIcon} alt="Contact" />
      </a>
      <a href="/contact" aria-label="Contact">
        <img src={SkillsIcon} alt="Contact" />
      </a>
    </div>
  );
};

export default IconMenu;
