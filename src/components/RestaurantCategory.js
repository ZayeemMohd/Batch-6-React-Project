import React from "react";
import MenuItem from "./MenuItem";
import { useState } from "react";

const RestaurantCategory = ({ category, command, setIndex }) => {
  return (
    <div className="category-accordian">
      <div
        className="category-header"
        onClick={() => {
          setIndex()
        }}
      >
        <span>
          {category.title} ({category.itemCards.length})
        </span>{" "}
        {command ? <span>⬆️</span> : <span>⬇️</span>}
      </div>

      {command ? (
        <div className="category-body">
          {category.itemCards.map((elem) => {
            return (
              <MenuItem details={elem.card.info} key={elem.card.info.id} />
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default RestaurantCategory;
