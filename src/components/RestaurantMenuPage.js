import { useParams } from "react-router";
import RestaurantMenuInfoCard from "./RestaurantMenuInfoCard";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";

const RestaurantMenuPage = () => {

  let [dummy, setDummy] = useState("I am dummy data")

  const { restaurantId } = useParams();

  const menu = useRestaurantMenu(restaurantId);

  // const [showItems, setShowItems] = useState(false);
  const [showIndex, setShowIndex] = useState(1);

  if (menu == null) {
    return <div>loading...</div>;
  }

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

      {categoriesArr.map((category, index) => {
        return (
          <RestaurantCategory
            dataPassing={dummy}
            command={index == showIndex ? true : false}
            setIndex={()=>{
              setShowIndex(index)
            }}
            category={category.card.card}
            key={category.card.card.categoryId}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenuPage;
