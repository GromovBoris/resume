import React from "react";
import "./TextMenu.scss";

const TextMenu = () => {
  return (
    <div className="header__nav-text">
      <a href="/home" aria-label="Home">
        Home
      </a>
      <a href="/about" aria-label="About">
        About
      </a>
      <a href="/contact" aria-label="Contact">
        Contact
      </a>
      <a href="/projects" aria-label="Projects">
        Projects
      </a>
      <a href="/skills" aria-label="Skills">
        Skills
      </a>
    </div>
  );
};

export default TextMenu;
