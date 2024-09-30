import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/ava_cv.png";
import IconMenu from "../IconMenu/IconMenu";
import TextMenu from "../TextMenu/TextMenu";
import "./Header.scss";

const Header: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleScroll = () => {
    setIsCollapsed(window.scrollY > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isCollapsed ? "header collapsed" : "header"}>
      <div className="header__logo">
        <img src={Logo} alt="logo" />
      </div>
      <nav className="header__nav">
        {isCollapsed ? <IconMenu /> : <TextMenu />}
      </nav>
      <div className="header__lang">
        <label className="header__lang-toggle">
          <input type="checkbox" id="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
    </header>
  );
};

export default Header;
