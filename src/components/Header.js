import { Link } from "react-router";
import { logoURL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantArr";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();

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
          <li>{onlineStatus ? <li>Online 🟢</li> : <li>Offline 🛑 </li>}</li>

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

          {}
        </ul>
      </div>
    </div>
  );
};

export default Header;
