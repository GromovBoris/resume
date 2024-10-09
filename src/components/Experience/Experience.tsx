import React, { useState, useEffect } from "react";
import { fetchData } from "../../assets/service/fetchData";
import { useLanguages } from "../../components/LanguagesContext";
import Item from "../Item/Item";

import "./Experience.scss";

const Experience: React.FC = () => {
  const { language } = useLanguages();
  const [experienceItems, setExperienceItems] = useState<any[]>([]);

  useEffect(() => {
    const loadExperienceData = async () => {
      const data = await fetchData();
      const items = data[language]?.experience?.items;

      if (items) {
        setExperienceItems(items);
      }
    };
    loadExperienceData();
  }, [language]);

  return (
    <section className="experience" id="experience">
      <div className="experience__list">
        {experienceItems.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            position={item.position}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
