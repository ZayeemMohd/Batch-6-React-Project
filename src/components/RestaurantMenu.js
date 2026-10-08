import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { menuApi } from "../utils/constants";

const RestaurantMenu = () => {

  const [menu, setMenu] = useState(null)

  const { restaurantId } = useParams();


  async function fetchMenu(){
    const response =  await  fetch('https://proxy.corsfix.com/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3615636&lng=78.4746645&restaurantId='+restaurantId)

    const data = await response.json();
    console.log(data)

    setMenu(data)
  }

  useEffect(()=>{
    fetchMenu()
  }, [])

  if(menu == null) {
    return <div>
      loading...
    </div>
  }


  return <div>
    <h1>I am Restaurant Menu</h1>
    <h2>You can see menu here</h2>
    <h2>{restaurantId}</h2>
    <h2>{menu.data.cards[0].card.card.text}</h2>
  </div>;
};

export default RestaurantMenu;
