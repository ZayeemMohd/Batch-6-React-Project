import { restaurantsArr } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="res-container">
      {
      restaurantsArr.map((elem) => {
        return <RestaurantCard resDetails={elem} key={elem.id} />;
      })
      }
    </div>
  );
};

export default Body;
