import React from "react";
import Tech from "../Tech/Tech";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import Projects from "../Code/Projects";

import "./Main.scss";

const Main: React.FC = () => {
  return (
    <main>
      <Tech />
      <About />
      <Experience />
      <Education />
      <Projects />
    </main>
  );
};

export default Main;
