import React from "react";
import "./Item.scss";

interface ItemProps {
  name: string;
  position: string;
  description: string;
}

const Item: React.FC<ItemProps> = ({ name, position, description }) => {
  return (
    <>
      <h3>{name}</h3>
      <span>{position}</span>
      <p>{description}</p>
    </>
  );
};

export default Item;
// div className="experience__list-item"
