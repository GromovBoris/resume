import React, { useState, useEffect } from "react";
import { fetchData } from "../../assets/service/fetchData";
import { useLanguages } from "../LanguagesContext";
import Keyboard from "../../assets/images/keyboard.png";
import Shelter from "../../assets/images/shelter.png";

import "./Projects.scss";

const Projects: React.FC = () => {
  const { language } = useLanguages();
  const [isVisible, setIsVisible] = useState(false);
  const [titleData, setTitleData] = useState<string>("");

  useEffect(() => {
    const loadProjectsData = async () => {
      const data = await fetchData();
      const title = data[language]?.header?.items[0]?.projects;

      if (title) {
        setTitleData(title);
        setIsVisible(false);
        setTimeout(() => {
          setIsVisible(true);
        }, 100);
      }
    };
    loadProjectsData();
  }, [language]);
  return (
    <section className="project" id="project">
      <div className="project__list">
        <h2
          className={isVisible ? "project__title dissolve" : "project__title"}
        >
          ___{titleData}___
        </h2>
        <div className="project__wrapper">
          <a
            className="project__item"
            href="https://gromovboris.github.io/virtual-keyboard/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Keyboard} alt="keyboard" />
          </a>

          <a
            className="project__item"
            href="https://rolling-scopes-school.github.io/gromovboris-JSFEPRESCHOOL2024Q2/shelter/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Shelter} alt="shelter" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
