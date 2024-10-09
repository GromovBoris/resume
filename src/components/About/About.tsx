import React, { useState, useEffect } from "react";
import { fetchData } from "../../assets/service/fetchData";
import { useLanguages } from "../LanguagesContext";

import "./About.scss";

const About: React.FC = () => {
  const { language } = useLanguages();
  const [introData, setIntroData] = useState<string>("");
  const [headerData, setHeaderData] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const loadAboutData = async () => {
      const data = await fetchData();
      const header = data[language]?.header?.items[0]?.about;
      const items = data[language]?.about?.content;

      if (items && header) {
        setIntroData(items);
        setHeaderData(header);
        setIsVisible(false);
        setTimeout(() => {
          setIsVisible(true);
        }, 200);
      }
    };

    loadAboutData();
  }, [language]);

  return (
    <section className="about">
      <h2 className={isVisible ? "dissolve" : ""}>___{headerData}___</h2>
      <p className={isVisible ? "dissolve" : ""}>{introData}</p>
    </section>
  );
};

export default About;
