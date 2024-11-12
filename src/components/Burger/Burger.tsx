import React, { useState } from "react";
import "./Burger.scss";

interface BurgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Burger: React.FC<BurgerProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={isOpen ? "header__burger open" : "header__burger"}
      onClick={toggleMenu}
    >
      <span className="burger-line" id="first-line"></span>
      <span className="burger-line" id="second-line"></span>
      <span className="burger-line" id="third-line"></span>
    </div>
  );
};

export default Burger;
