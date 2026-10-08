// import { restaurantsArr } from "../utils/mockData";
import { swiggyRestaurantsURL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  console.log("I am inside a component");
  const [restaurantsArr, setRestaurantArr] = useState(null);

  const [latLong, setLatlong] = useState({
    lat: 28.656148,
    lng: 77.186715,
  });

  async function fetchRestaurantArr() {
    const response = await fetch(
      swiggyRestaurantsURL + `lat=${latLong.lat}&lng=${latLong.lng}`,
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

  useEffect(() => {
    console.log("I am inside use effect");
    fetchRestaurantArr();
  }, [latLong]); 

  useEffect(()=>{
     // 1. Check if the browser supports the Geolocation API
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    // 2. Success callback function
    const handleSuccess = (pos) => {
      const { latitude, longitude } = pos.coords;
      console.log(
        "got coordinates:: ",
        latitude.toFixed(6),
        longitude.toFixed(6),
      );
      setLatlong({
        lat: latitude.toFixed(6),
        lng: longitude.toFixed(6),
      });
    };

    // 3. Error callback function
    const handleError = (err) => {
      setError(err.message);
    };

    // 4. Request the current position
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
      enableHighAccuracy: true, // Request high accuracy (e.g., GPS over cell tower)
      timeout: 5000, // Time in ms to wait before timing out
      maximumAge: 0, // Do not use cached locations
    });
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
          return <RestaurantCard resDetails={elem} key={elem.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
