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
      <a href="#about" aria-label="about">
        <img src={AboutIcon} alt="about" />
      </a>
      <a href="#experience" aria-label="experience">
        <img src={ExperienceIcon} alt="experience" />
      </a>
      <a href="#education" aria-label="education">
        <img src={EducationIcon} alt="education" />
      </a>
      <a href="#project" aria-label="project">
        <img src={CodeIcon} alt="project" />
      </a>
      <a href="#skills" aria-label="skills">
        <img src={SkillsIcon} alt="skills" />
      </a>
    </div>
  );
};

export default IconMenu;
