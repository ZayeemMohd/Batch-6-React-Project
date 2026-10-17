import { Outlet, useViewTransitionState } from "react-router";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import UserContext from "./utils/UserContext";
import { useState, useEffect } from "react";
import HotelListContext from "./utils/HotelListContext";

const AppLayout = () => {
  let [user, setUser] = useState({
    name: "default name",
    email: "default@example.com",
  });

  const [hotelList, setHotelList] = useState(null)

  return (
    <div>
      <HotelListContext.Provider value={{hotelList, setHotelList}}>
        <UserContext.Provider value={user}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </HotelListContext.Provider>
    </div>
  );
};

export default AppLayout;
