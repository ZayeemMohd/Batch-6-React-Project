import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { menuApi } from "../utils/constants";
import RestaurantMenuInfoCard from "./RestaurantMenuInfoCard";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenuPage = () => {
  const [menu, setMenu] = useState(null);
  const { restaurantId } = useParams();

  async function fetchMenu() {
    const response = await fetch(menuApi + restaurantId);
    const data = await response.json();
    console.log(data);

    setMenu(data);
  }

  useEffect(() => {
    fetchMenu();
  }, []);

  if (menu == null) {
    return <div>loading...</div>;
  }

  console.log(menu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

  const categoriesArr =
    menu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((elem) => {
      if (
        elem.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) {
        return true;
      } else {
        return false;
      }
    });

  console.log(categoriesArr);

  return (
    <div
      style={{
        paddingLeft: "340px",
        paddingBottom: "50px",
        paddingRight: "340px",
      }}
    >
      <RestaurantMenuInfoCard menu={menu} />

      {categoriesArr.map((category) => {
        return (
          <RestaurantCategory
            category={category.card.card}
            key={category.card.card.categoryId}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenuPage;
