import {useState, useEffect, useContext} from "react"
import { swiggyRestaurantsURL } from "./constants";
import HotelListContext from "./HotelListContext";


const useRestaurantArr = () => {
  const {hotelList, setHotelList} = useContext(HotelListContext)

  async function fetchRestaurantArr() {
    const response = await fetch(swiggyRestaurantsURL);

    const data = await response.json();

    setHotelList(
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

  return hotelList;
};

export default useRestaurantArr;
