import { Outlet } from "react-router";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";


const AppLayout = () => {
  return (
    <div>
      <Header />
         <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;