import { baseURL } from "../utils/constants";

const RestaurantCard = ({ resDetails }) => {
  let {
    resName,
    cuisine,
    avgRating,
    delieveryTime,
    costForTwo,
    imgId,
    location,
  } = resDetails;

  return (
    <div className="res-card">
      <img className="res-logo" src={baseURL + imgId} alt="res-logo" />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>⭐ {avgRating} Stars</h4>
      <h4>
        {delieveryTime} mins | ₹{costForTwo} for two
      </h4>
      <h4>{location}</h4>
    </div>
  );
};

export default RestaurantCard;
