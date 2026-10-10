import React from "react";
import { baseURL } from "../utils/constants";

const MenuItem = ({ details }) => {
  const { name, price, description, imageId, ratings } = details;

  return (
    <div className="menu-item-card">
      <div>
        <h1>{name}</h1>
        <p>Price: {price / 100}</p>
        <p>
          ⭐️{ratings.aggregatedRating.rating} (
          {ratings.aggregatedRating.ratingCountV2})
        </p>
        <p>{description}</p>
      </div>

      <div>
        <img alt={name} className="menu-item-img" src={baseURL + imageId} />
      </div>
    </div>
  );
};

export default MenuItem;
