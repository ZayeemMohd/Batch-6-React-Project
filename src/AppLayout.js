import { Outlet } from "react-router";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import UserContext from "./utils/UserContext";

const AppLayout = () => {
  return (
    <div>
      <UserContext.Provider value={{name: "new user", email: "newuser@gmail.com"}}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </div>
  );
};

export default AppLayout;
