import React from "react";
import FooterBackground from "../../assets/backgrounds/header.png";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `url(${FooterBackground})`,
      }}
    >
      <p>2024</p>
    </footer>
  );
};

export default Footer;
