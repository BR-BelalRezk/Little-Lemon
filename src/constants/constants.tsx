import { BsFillPersonFill } from "react-icons/bs";
import { MdRestaurantMenu } from "react-icons/md";
import { BiSolidHome } from "react-icons/bi";
import { FaTableCellsLarge, FaBasketShopping } from "react-icons/fa6";
import g from "/icons&images/bruchetta.svg";
import h from "/icons&images/Mario and Adrian b.svg";
import r from "/icons&images/restaurant chef B.svg";
import d from "/icons&images/restaurant.svg";
import e from "/icons&images/lemon dessert.jpg";
import f from "/icons&images/Mario and Adrian A.svg";
export const navbar = [
  {
    name: "home",
    icon: <BiSolidHome />,
    path: "/landing",
  },
  {
    name: "about",
    icon: <BsFillPersonFill />,
    path: "/about",
  },
  {
    name: "menu",
    icon: <MdRestaurantMenu />,
    path: "/menu",
  },
  {
    name: "reservation",
    icon: <FaTableCellsLarge />,
    path: "/reservation",
  },
  {
    name: "cart",
    icon: <FaBasketShopping />,
    path: "/cart",
  },
];

export const about = [
  {
    name: "About Us",
    image: g,
  },
  {
    name: "Our Story",
    image: h,
  },
  {
    name: "Our Philosophy",
    image: r,
  },
  {
    name: "The Experience",
    image: d,
  },
  {
    name: "Passion for Quality",
    image: e,
  },
  {
    name: "Our Menu",
    image: f,
  },
];
