// import { restaurantsArr } from "../utils/mockData";
import { swiggyRestaurantsURL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  
  console.log("I am inside a component");
  const [restaurantsArr, setRestaurantArr] = useState(null);

  async function fetchRestaurantArr() {
    const response = await fetch(swiggyRestaurantsURL);
    const data = await response.json();

    setRestaurantArr(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    console.log(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  }

  useEffect(() => {
    console.log("I am inside use effect");
    fetchRestaurantArr();
  }, []); // only runs first time when component mounts

  if (restaurantsArr == null) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => {
          console.log("button clicked");

          let filterArr = restaurantsArr.filter((elem) => {
            if (elem.avgRating > 4.2) {
              return true;
            } else {
              return false;
            }
          });

          setRestaurantArr(filterArr); // 11

          console.log("after filtering:: ", restaurantsArr); // 11
        }}
      >
        Filter Top Rated Restaurants
      </button>

      <div className="res-container">
        {restaurantsArr.map((elem) => {
          return <RestaurantCard resDetails={elem} key={elem.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
