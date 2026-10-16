import React from "react";
import { baseURL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const MenuItem = ({ details, dataPassing }) => {
  const { name, price, description, imageId, ratings } = details;

  const userObj = useContext(UserContext);

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
      <div>{dataPassing}</div>
      <div>{userObj.name}</div>
    </div>
  );
};

export default MenuItem;
