import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  // const cardComponent =
  return (
    <div>
      {robots.map((item, index) => {
        return (
          <Card
            key={index}
            id={item.id}
            name={item.name}
            username={item.username}
            email={item.email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
