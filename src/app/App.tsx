import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "../styles/globals.css";
import AppLayout from "../components/layout/AppLayout";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart";
import Reservation from "../pages/Reservation";
import Order from "../pages/Order";
export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/landing",
          element: <Landing />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/menu",
          element: <Menu />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/reservation",
          element: <Reservation />,
        },
        {
          path: "/order/:id",
          element: <Order />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
