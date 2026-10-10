import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import Body from "./src/components/Body.js";
import About from "./src/components/About.js";
import Contact from "./src/components/Contact.js";
import AppLayout from "./src/AppLayout.js";
import Cart from "./src/components/Cart.js";
import ErrorPage from "./src/components/ErrorPage.js";
import RestaurantMenuPage from "./src/components/RestaurantMenuPage.js";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/menu/:restaurantId",
        element: <RestaurantMenuPage />
      }
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
