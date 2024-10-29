import React from "react";
import { useEffect, useState } from "react";
import "./TextMenu.scss";

interface TextMenuProps {
  menuItems: { [key: string]: string };
}

const TextMenu: React.FC<TextMenuProps> = ({ menuItems }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, [menuItems]);

  return (
    <div className="header__nav-text">
      <a
        href="#about"
        aria-label="About"
        className={isVisible ? "dissolve" : ""}
      >
        {menuItems.about}
      </a>
      <a
        href="#experience"
        aria-label="Experience"
        className={isVisible ? "dissolve" : ""}
      >
        {menuItems.experience}
      </a>
      <a
        href="#education"
        aria-label="Education"
        className={isVisible ? "dissolve" : ""}
      >
        {menuItems.education}
      </a>
      <a
        href="#project"
        aria-label="Projects"
        className={isVisible ? "dissolve" : ""}
      >
        {menuItems.projects}
      </a>
      <a
        href="#skills"
        aria-label="Skills"
        className={isVisible ? "dissolve" : ""}
      >
        {menuItems.skills}
      </a>
    </div>
  );
};

export default TextMenu;
