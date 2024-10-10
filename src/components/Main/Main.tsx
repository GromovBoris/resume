import React from "react";
import Tech from "../Tech/Tech";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";

import "./Main.scss";

const Main: React.FC = () => {
  return (
    <main>
      <Tech />
      <About />
      <Experience />
      <Education />
    </main>
  );
};

export default Main;
