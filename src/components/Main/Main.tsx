import React from "react";
import Tech from "../Tech/Tech";
import About from "../About/About";
import Experience from "../Experience/Experience";

import "./Main.scss";

const Main: React.FC = () => {
  return (
    <main>
      <Tech />
      <About />
      <Experience />
    </main>
  );
};

export default Main;
