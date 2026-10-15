import {useState, useEffect} from "react"
import { menuApi } from "./constants";

const useRestaurantMenu = (restaurantId) => {
  const [menu, setMenu] = useState(null);

  async function fetchMenu() {
    const response = await fetch(menuApi + restaurantId);
    const data = await response.json();
    console.log(data);
    

    setMenu(data);
  }

  useEffect(() => {
    fetchMenu();
  }, []);

  return menu
};

export default useRestaurantMenu;
