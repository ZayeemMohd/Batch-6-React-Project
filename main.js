import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="header-logo"
          src="https://ik.imagekit.io/acrrubsd0/Untitled%20design.png?updatedAt=1770381393453"
        />
      </div>

      <div className="search-bar">
        <input placeholder="Search Restaurants..." />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({resDetails}) => {
  // props = {
                 //    resDetails: {
                                                // resName: "Paradise",
                                                // cuisine: ["Biryani", "Chinese", "Mughlai", "Tandoor"],
                                                // avgRating: 4.2,
                                                // delieveryTime: 38,
                                                // costForTwo: 300,
                                                // imgId: "ggbuknqzqc4qoqfnl2cr"
                                // }
  // }

  const {resName, cuisine, avgRating, delieveryTime, costForTwo, imgId} = resDetails;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ggbuknqzqc4qoqfnl2cr"
        alt="res-logo"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>⭐ {avgRating} Stars</h4>
      <h4>{delieveryTime} mins | ₹{300} for two</h4>
    </div>
  );
};


let resObj1 = {
    resName: "Paradise",
    cuisine: ["Biryani", "Chinese", "Mughlai", "Tandoor"],
    avgRating: 4.2,
    delieveryTime: 38,
    costForTwo: 300,
    imgId: "ggbuknqzqc4qoqfnl2cr"
}

const Body = () => {
  return (
    <div className="res-container">
      <RestaurantCard resDetails={resObj1}  />
      <RestaurantCard resName="Lucky Restaurant" rating="4.2" />
      <RestaurantCard resName="Bismillah Restaurant" />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
};

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        fontSize: "2rem",

        color: "white",
      }}
    >
      <h4>© 2024 Zayeem Mohd. All rights reserved.</h4>
    </div>
  );
};

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RootLayout />);
