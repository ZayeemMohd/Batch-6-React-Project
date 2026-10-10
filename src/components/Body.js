// import { restaurantsArr } from "../utils/mockData";
import { swiggyRestaurantsURL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link, resolvePath } from "react-router";

const Body = () => {
  console.log("I am inside a component");
  const [restaurantsArr, setRestaurantArr] = useState(null);


  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      let lat = "";
      let lng = "";
      // 1. Check if the browser supports the Geolocation API
      if (!navigator.geolocation) {
        console.log("Browser doesn't provide location")
        reject("Browser doesn't provide location")
      }

      // 2. Success callback function
      const handleSuccess = (pos) => {
        const { latitude, longitude } = pos.coords;
        console.log(
          "got coordinates:: ",
          latitude.toFixed(6),
          longitude.toFixed(6),
        );

        lat = latitude.toFixed(6);
        lng = longitude.toFixed(6);
        resolve({ lat, lng });
      };

      // 3. Error callback function
      const handleError = (err) => {
        console.log("error happend")
        reject(err.message);
      };

      // 4. Request the current position
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
        enableHighAccuracy: true, // Request high accuracy (e.g., GPS over cell tower)
        timeout: 5000, // Time in ms to wait before timing out
        maximumAge: 0, // Do not use cached locations
      });
    });
  };

  async function fetchRestaurantArr() {
    const latLongObj = await getCurrentPosition();

    console.log(
      "fetching for:: ",
      swiggyRestaurantsURL + `lat=${latLongObj.lat}&lng=${latLongObj.lng}`,
    );

    const response = await fetch(
      swiggyRestaurantsURL + `lat=${latLongObj.lat}&lng=${latLongObj.lng}`,
    );

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

useEffect(()=>{
fetchRestaurantArr();
}, [])

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
          return (
            <Link to={`/menu/${elem.info.id}`} key={elem.info.id}>
              {" "}
              <RestaurantCard resDetails={elem} />{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
