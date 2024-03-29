import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "../styles/globals.css";
import AppLayout from "../components/layout/AppLayout";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart";
import CreateOrder from "../pages/CreateOrder";
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
          path: "/order",
          element: <CreateOrder />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
