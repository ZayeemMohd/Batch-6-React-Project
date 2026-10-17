import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useRestaurantArr from "../utils/useRestaurantArr";
import useOnlineStatus from "../utils/useOnlineStatus";
import WithDiscountLabel from "./WithDiscountLabel";

const Body = () => {
  const restaurantsArr = useRestaurantArr();

  const DiscountedRestaurantCard = WithDiscountLabel(RestaurantCard);

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
        {restaurantsArr.map((elem, index) => {
          console.log(elem.info.aggregatedDiscountInfoV3);
          return (
            <Link to={`/menu/${elem.info.id}`} key={elem.info.id}>
              {elem.info.aggregatedDiscountInfoV3 ? (
                <DiscountedRestaurantCard resDetails={elem} />
              ) : (
                <RestaurantCard resDetails={elem} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
