import React from "react";
import MenuItem from "./MenuItem";

const RestaurantCategory = ({ category }) => {
  console.log(category);
  return (
    <div className="category-accordian">
      <div className="category-header">
        <span>{category.title}</span> <span>⬇️</span>
      </div>

      <div className="category-body">
        {category.itemCards.map((elem) => {
          return <MenuItem details={elem.card.info}  key={elem.card.info.id}/>;
        })}
      </div>
    </div>
  );
};

export default RestaurantCategory;
