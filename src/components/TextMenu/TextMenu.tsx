import React from "react";
import { useEffect, useState } from "react";
import "./TextMenu.scss";

interface TextMenuProps {
  menuItems: { [key: string]: string };
}

const TextMenu: React.FC<TextMenuProps> = ({ menuItems }) => {
  const [visibleMenuItems, setVisibleMenuItems] = useState(menuItems);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setVisibleMenuItems(menuItems);
    setIsVisible(false);
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, [menuItems]);

  return (
    <div className="header__nav-text">
      <a
        href="/about"
        aria-label="About"
        className={isVisible ? "fade-in dissolve" : "fade-in"}
      >
        {menuItems.about}
      </a>
      <a
        href="/experience"
        aria-label="Experience"
        className={isVisible ? "fade-in dissolve" : "fade-in"}
      >
        {menuItems.experience}
      </a>
      <a
        href="/education"
        aria-label="Education"
        className={isVisible ? "fade-in dissolve" : "fade-in"}
      >
        {menuItems.education}
      </a>
      <a
        href="/projects"
        aria-label="Projects"
        className={isVisible ? "fade-in dissolve" : "fade-in"}
      >
        {menuItems.projects}
      </a>
      <a
        href="/skills"
        aria-label="Skills"
        className={isVisible ? "fade-in dissolve" : "fade-in"}
      >
        {menuItems.skills}
      </a>
    </div>
  );
};

export default TextMenu;
