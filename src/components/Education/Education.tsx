import React, { useState, useEffect } from "react";
import { fetchData } from "../../assets/service/fetchData";
import { useLanguages } from "../../components/LanguagesContext";
import Item from "../Item/Item";

import "./Education.scss";

const Education: React.FC = () => {
  const { language } = useLanguages();
  const [isVisible, setIsVisible] = useState(false);
  const [titleData, setTitleData] = useState<string>("");
  const [educationItems, setEducationItems] = useState<any[]>([]);

  useEffect(() => {
    const loadEducationData = async () => {
      const data = await fetchData();
      const title = data[language]?.header?.items[0]?.education;
      const items = data[language]?.education?.items;

      if (items && title) {
        setEducationItems(items);
        setTitleData(title);
        setIsVisible(false);
        setTimeout(() => {
          setIsVisible(true);
        }, 100);
      }
    };
    loadEducationData();
  }, [language]);

  return (
    <section className="education" id="education">
      <div className="education__list">
        <h2
          className={
            isVisible
              ? "education__list-title dissolve"
              : "education__list-title"
          }
        >
          ___{titleData}___
        </h2>
        {educationItems.map((item, index) => (
          <div
            className={
              isVisible
                ? "education__list-item dissolve"
                : "education__list-item"
            }
          >
            <Item
              key={index}
              name={item.name}
              position={item.position}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
