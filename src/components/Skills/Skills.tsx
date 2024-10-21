import React, { useState, useEffect } from "react";
import { fetchData } from "../../assets/service/fetchData";
import { useLanguages } from "../../components/LanguagesContext";

import "./Skills.scss";

const Skills: React.FC = () => {
  const { language } = useLanguages();
  const [isVisible, setIsVisible] = useState(false);
  const [titleData, setTitleData] = useState<string>("");
  const [titlePers, setTitlePers] = useState<string>("");
  const [titleProf, setTitleProf] = useState<string>("");
  const [persItems, setPersItems] = useState<any[]>([]);
  const [profItems, setProfItems] = useState<any[]>([]);

  useEffect(() => {
    const loadExperienceData = async () => {
      const data = await fetchData();
      const title = data[language]?.header?.items[0]?.skills;
      const pers = data[language]?.header?.items[0]?.personal;
      const prof = data[language]?.header?.items[0]?.professional;
      const items_pers = data[language]?.skills?.personal;
      const items_prof = data[language]?.skills?.professional;

      console.log(title);
      console.log(pers);
      console.log(prof);

      if (title && pers && prof && items_pers && items_prof) {
        setTitleData(title);
        setTitlePers(pers);
        setTitleProf(prof);
        setPersItems(items_pers);
        setProfItems(items_prof);
        setIsVisible(false);
        setTimeout(() => {
          setIsVisible(true);
        }, 100);
      }
    };
    loadExperienceData();
  }, [language]);

  return (
    <section className="skills" id="skills">
      <h2 className={isVisible ? "skills__title dissolve" : "skills__title"}>
        {" "}
        ___{titleData}___
      </h2>
      <div className={isVisible ? "skills__list dissolve" : "skills__list"}>
        <div className="skills__list-pers">
          <h3>{titlePers}</h3>
          <ul>
            {persItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="skills__list-prof">
          <h3>{titleProf}</h3>
          <ul>
            {profItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
