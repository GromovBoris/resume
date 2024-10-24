import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/avme.png";
import IconMenu from "../IconMenu/IconMenu";
import TextMenu from "../TextMenu/TextMenu";
import { fetchData } from "../../assets/service/fetchData";
import { useLanguages } from "../../components/LanguagesContext";
import HeaderBackground from "../../assets/backgrounds/header.png";
import RusBackground from "../../assets/icons/langs/rus.png";
import EngBackground from "../../assets/icons/langs/eng.png";

import "./Header.scss";

const Header: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { language, setLanguage } = useLanguages();
  const [menuItems, setMenuItems] = useState<{ [key: string]: string }>({});

  const handleScroll = () => {
    setIsCollapsed(window.scrollY > 1);
  };

  const handleLanguageChange = () => {
    const currentLanguage = language;
    setLanguage(currentLanguage === "Ru" ? "En" : "Ru");
  };

  useEffect(() => {
    const loadMenuItems = async () => {
      const data = await fetchData();
      const items = data[language]?.header?.items[0];
      if (items) {
        setMenuItems(items);
      }
    };
    loadMenuItems();
  }, [language]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={isCollapsed ? "header collapsed" : "header"}
      style={{
        backgroundImage: `url(${HeaderBackground})`,
      }}
    >
      <div className="header__logo">
        <img src={Logo} alt="logo" />
      </div>
      <nav className="header__nav">
        {isCollapsed ? <IconMenu /> : <TextMenu menuItems={menuItems} />}
      </nav>
      <div className="header__lang">
        <label className="header__lang-toggle">
          <input
            type="checkbox"
            id="checkbox"
            onChange={handleLanguageChange}
            checked={language === "En"}
          />
          <span
            className="slider"
            style={{
              backgroundImage:
                language === "En"
                  ? `url(${EngBackground})`
                  : `url(${RusBackground})`,
            }}
          ></span>
        </label>
      </div>
    </header>
  );
};

export default Header;
