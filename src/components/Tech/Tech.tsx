import React from "react";
import { useState, useEffect } from "react";

import Linkedin from "../../assets/icons/social/linkedin_100.png";
import Print from "../../assets/icons/social/print_100.png";
import Github from "../../assets/icons/social/github_100.png";
import Letter from "../../assets/icons/social/letter_100.png";
import Telegram from "../../assets/icons/social/telegram_100.png";
import Phone from "../../assets/icons/social/phone_100.png";

import { fetchData } from "../../assets/service/fetchData";
import { useLanguages } from "../LanguagesContext";

import "./Tech.scss";

const Tech: React.FC = () => {
  const { language } = useLanguages();
  const [introData, setIntroData] = useState<{ [key: string]: string }>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const loadIntroData = async () => {
      const data = await fetchData();
      const items = data[language]?.inshort?.items[0];
      if (items) {
        setIntroData(items);
        setIsVisible(false);
        setTimeout(() => {
          setIsVisible(true);
        }, 100);
      }
    };
    loadIntroData();
  }, [language]);

  return (
    <section className="tech">
      <ul className="tech__links">
        <li className="tech__button">
          <a href="../../assets/docs/boris_gromov_resume.docx" download>
            <img src={Print} alt="message" />
          </a>
        </li>
        <li className="tech__button">
          <a
            href="https://www.linkedin.com/in/borisgromov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="linkedin" />
          </a>
        </li>
        <li className="tech__button">
          <a
            href="https://github.com/GromovBoris"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="github" />
          </a>
        </li>
      </ul>
      <div className="tech__intro">
        <h1 className={isVisible ? "dissolve" : ""}>{introData?.name}</h1>
        <p className={isVisible ? "dissolve" : ""}>{introData?.whois}</p>
      </div>
      <ul className="tech__calls">
        <li className="tech__button">
          <a
            href="mailto:drunkgonzo@gmail.com"
            id="print__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Letter} alt="letter" />
          </a>
        </li>
        <li className="tech__button">
          <a
            href="https://t.me/drunkgonzo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Telegram} alt="telegram" />
          </a>
        </li>
        <li className="tech__button">
          <a href="tel:+79099091106" target="_blank" rel="noopener noreferrer">
            <img src={Phone} alt="phone" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Tech;
