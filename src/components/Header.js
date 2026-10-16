import { Link } from "react-router";
import { logoURL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantArr";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const userObj = useContext(UserContext);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="header-logo" src={logoURL} />
      </div>

      <div className="search-bar">
        <input placeholder="Search Restaurants..." />
      </div>

      <div className="nav-items">
        <ul>
          <li>{onlineStatus ? <b>Online 🟢</b> : <b>Offline 🛑 </b>}</li>

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

          <li>
            <Link to="/cart">Cart</Link>
          </li>

          <li>
            <Link to="/grocery">Grocery</Link>
          </li>

          <li>{userObj.name}</li>

          {}
        </ul>
      </div>
    </div>
  );
};

export default Header;
