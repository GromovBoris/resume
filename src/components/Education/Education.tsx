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
        setTimeout(() => {
          setIsVisible(true);
        }, 200);
        setIsVisible(false);
      }
    };
    loadEducationData();
  }, [language]);

  return (
    <section className="education" id="education">
      <div className="education__list">
        <h2 className={isVisible ? "dissolve" : ""}>___{titleData}___</h2>
        {educationItems.map((item, index) => (
          <div className="education__list-item" key={index}>
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
