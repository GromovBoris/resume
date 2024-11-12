import React from "react";
import { useEffect, useState } from "react";
import "./TextMenu.scss";

interface TextMenuProps {
  menuItems: { [key: string]: string };
  onMenuItemClick: () => void;
}

const TextMenu: React.FC<TextMenuProps> = ({ menuItems, onMenuItemClick }) => {
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
        onClick={onMenuItemClick}
        href="#about"
        aria-label="About"
        className={isVisible ? "dissolve" : ""}
      >
        {menuItems.about}
      </a>
      <a
        onClick={onMenuItemClick}
        href="#experience"
        aria-label="Experience"
        className={isVisible ? "dissolve" : ""}
      >
        {menuItems.experience}
      </a>
      <a
        onClick={onMenuItemClick}
        href="#education"
        aria-label="Education"
        className={isVisible ? "dissolve" : ""}
      >
        {menuItems.education}
      </a>
      <a
        onClick={onMenuItemClick}
        href="#project"
        aria-label="Projects"
        className={isVisible ? "dissolve" : ""}
      >
        {menuItems.projects}
      </a>
      <a
        onClick={onMenuItemClick}
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
