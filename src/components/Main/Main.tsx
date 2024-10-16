import React from "react";
import Tech from "../Tech/Tech";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

import "./Main.scss";

const Main: React.FC = () => {
  return (
    <main>
      <Tech />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
    </main>
  );
};

export default Main;
