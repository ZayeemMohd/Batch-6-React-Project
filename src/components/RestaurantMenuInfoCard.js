import React from "react";
import { baseURL } from "../utils/constants";

const RestaurantMenuInfoCard = ({ menu }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    areaName,
    availability,
  } = menu.data.cards[2].card.card.info;

  return (
    <div className="menu-info-div">
      <h1>{name}</h1>
      <img className="menu-info-img" src={baseURL + cloudinaryImageId} />
      <p>
        ⭐️ {avgRating} ({totalRatingsString}) · {costForTwoMessage}
      </p>
      <p>{cuisines}</p>
      <p>
        {areaName} | {availability.opened ? <b>Open 🟢</b> : <b>Closed 🚨</b>}
      </p>
    </div>
  );
};

export default RestaurantMenuInfoCard;
