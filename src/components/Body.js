import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useRestaurantArr from "../utils/useRestaurantArr";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const restaurantsArr = useRestaurantArr();

  const isOnline = useOnlineStatus();
  console.log("I am isONline", isOnline);

  if (restaurantsArr == null) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }

  return (
    <div>
      <div className="res-container">
        {restaurantsArr.map((elem) => {
          return (
            <Link to={`/menu/${elem.info.id}`} key={elem.info.id}>
              <RestaurantCard resDetails={elem} />{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
