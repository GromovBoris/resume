import React, { useState, useEffect } from "react";
import { fetchData } from "../../assets/service/fetchData";
import { useLanguages } from "../../components/LanguagesContext";
import Item from "../Item/Item";

import "./Experience.scss";

const Experience: React.FC = () => {
  const { language } = useLanguages();
  const [isVisible, setIsVisible] = useState(false);
  const [titleData, setTitleData] = useState<string>("");
  const [experienceItems, setExperienceItems] = useState<any[]>([]);

  useEffect(() => {
    const loadExperienceData = async () => {
      const data = await fetchData();
      const title = data[language]?.header?.items[0]?.experience;
      const items = data[language]?.experience?.items;

      if (items && title) {
        setTitleData(title);
        setExperienceItems(items);
        setIsVisible(false);
        setTimeout(() => {
          setIsVisible(true);
        }, 200);
      }
    };
    loadExperienceData();
  }, [language]);

  return (
    <section className="experience" id="experience">
      <div className="experience__list">
        <h2
          className={
            isVisible
              ? "experience__list-title dissolve"
              : "experience__list-title"
          }
        >
          ___{titleData}___
        </h2>
        {experienceItems.map((item, index) => (
          <div
            className={
              isVisible
                ? "experience__list-item dissolve"
                : "experience__list-item"
            }
            key={index}
          >
            <Item
              key={index}
              name={item.name}
              position={item.position}
              description={item.description}
            />{" "}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
