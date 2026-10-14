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
// import Grocery from "./src/components/Grocery.js";

import { lazy, Suspense } from "react";

const Grocery = lazy(() => import("./src/components/Grocery.js"));

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
        element: <RestaurantMenuPage />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Grocery Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
