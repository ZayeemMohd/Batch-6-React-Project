import {useState, useEffect} from "react"
import { swiggyRestaurantsURL } from "./constants";


const useRestaurantArr = () => {
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
    fetchRestaurantArr();
  }, []);

  return restaurantsArr;
};

export default useRestaurantArr;
