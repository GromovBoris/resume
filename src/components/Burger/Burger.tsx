import React, { useState } from "react";

import "./Burger.scss";

const Burger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
