import React, { useEffect } from "react";
import Tech from "../Tech/Tech";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

import "./Main.scss";

// interface MainProps {
//   isBurgerOpen: boolean;
// }

const Main: React.FC = () => {
  // useEffect(() => {
  //   if (isBurgerOpen) {
  //     document.body.classList.add("no-scroll");
  //   } else {
  //     document.body.classList.remove("no-scroll");
  //   }

  //   return () => {
  //     document.body.classList.remove("no-scroll");
  //   };
  // }, [isBurgerOpen]);

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
