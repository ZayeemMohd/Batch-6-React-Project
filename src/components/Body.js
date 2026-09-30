import { restaurantsArr } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="res-container">
      <RestaurantCard resDetails={restaurantsArr[0]} />
      <RestaurantCard resDetails={restaurantsArr[1]} />
      <RestaurantCard resDetails={restaurantsArr[2]} />
      <RestaurantCard resDetails={restaurantsArr[3]} />
      <RestaurantCard resDetails={restaurantsArr[4]} />
      <RestaurantCard resDetails={restaurantsArr[5]} />
      <RestaurantCard resDetails={restaurantsArr[6]} />
      <RestaurantCard resDetails={restaurantsArr[7]} />
      <RestaurantCard resDetails={restaurantsArr[8]} />
    </div>
  );
};

export default Body;
