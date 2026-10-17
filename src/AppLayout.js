import { Outlet } from "react-router";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import UserContext from "./utils/UserContext";
import { useState, useEffect } from "react";

const AppLayout = () => {
  let [user, setUser] = useState({
    name: "default name from state",
    email: "default@example.com",
  });

  // authentication
  useEffect(() => {
    const randomTrue = Math.random() < 0.4;

    if (!randomTrue) {
      setUser({
        email: "guestuser@gmail.com",
        name: "Guest User",
      });
    } else {
      const loggedInUser = {
        email: "zayeemuddin123@gmail.com",
        name: "ZAYEEM",
      };

      setUser(loggedInUser);
    }
  }, []);

  return (
    <div>
      <UserContext.Provider value={user}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </div>
  );
};

export default AppLayout;
