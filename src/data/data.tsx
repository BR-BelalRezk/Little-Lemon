import pizza_a from "/pizza/margherita.jpg";
import pizza_b from "/pizza/pepperoni.jpg";
import pizza_c from "/pizza/vegetarian.jpg";
import pizza_d from "/pizza/meat-lovers.jpg";
import pizza_e from "/pizza/hawaiian.jpg";
import pizza_f from "/pizza/supreme.jpg";
import pizza_g from "/pizza/bbq-chicken.jpg";
import pizza_h from "/pizza/mushroom-delight.jpg";
import pizza_r from "/pizza/vegan-veggie.jpg";

import salad_a from "/salad/greek salad with kalamata olives.jpg";
import salad_b from "/salad/mediterranean quinoa salad.jpg";
import salad_c from "/salad/grilled halloumi salad.jpg";
import salad_d from "/salad/tabbouleh salad.jpg";
import salad_e from "/salad/little lemon house salad.jpg";
import salad_f from "/salad/caprese salad.jpg";
import salad_g from "/salad/caesar salad.jpg";
import salad_h from "/salad/spinach and walnut salad.jpg";
import salad_r from "/salad/spinach and walnut salad.jpg";

import sandwich_a from "/sandwich/shawarma.jpg";
import sandwich_b from "/sandwich/mediterranean veggie.jpg";
import sandwich_c from "/sandwich/lamb gyro sandwich.jpg";
import sandwich_d from "/sandwich/falafel burger.jpg";
import sandwich_e from "/sandwich/grilled chicken pita.jpg";
import sandwich_f from "/sandwich/chicken shawarma.jpg";
import sandwich_g from "/sandwich/beef kebab.jpg";
import sandwich_h from "/sandwich/vegetable panini.jpg";
import sandwich_r from "/sandwich/tuna salad.jpg";

import pasta_a from "/pasta/lemon herb orzo.jpg";
import pasta_b from "/pasta/shrimp scampi linguine.jpg";
import pasta_c from "/pasta/vegetarian moussaka with penne.jpg";
import pasta_d from "/pasta/mediterranean rice pilaf.jpg";
import pasta_e from "/pasta/spaghetti with tomato and olive tapenade.jpg";
import pasta_f from "/pasta/chicken alfredo pasta.jpg";
import pasta_g from "/pasta/beef shawarma rice bowl.jpg";
import pasta_h from "/pasta/seafood linguine.jpg";
import pasta_r from "/pasta/vegan lemon garlic pasta.jpg";

import seafood_a from "/seafood/grilled mediterranean sea bass.jpg";
import seafood_b from "/seafood/salmon souvlaki skewers.jpg";
import seafood_c from "/seafood/stuffed calamari.jpg";
import seafood_d from "/seafood/seafood paella.jpg";
import seafood_e from "/seafood/grilled swordfish.jpg";
import seafood_f from "/seafood/lemon garlic scallops.jpg";
import seafood_g from "/seafood/mediterranean seafood platter.jpg";
import seafood_h from "/seafood/mediterranean seafood platter.jpg";
import seafood_r from "/seafood/crispy calamari rings.jpg";

import meat_a from "/meat/grilled steak.jpg";
import meat_b from "/meat/lamb chops.jpg";
import meat_c from "/meat/braised beef.jpg";
import meat_d from "/meat/pork tenderloin.jpg";
import meat_e from "/meat/beef stroganoff.jpg";
import meat_f from "/meat/roast duck.jpg";
import meat_g from "/meat/bbq ribs.jpg";
import meat_h from "/meat/spicy sausage platter.jpg";
import meat_r from "/meat/mixed grill.jpg";

import chicken_a from "/chicken/lemon herb chicken.jpg";
import chicken_b from "/chicken/chicken marsala.jpg";
import chicken_c from "/chicken/teriyaki chicken.jpg";
import chicken_d from "/chicken/honey mustard chicken.jpg";
import chicken_e from "/chicken/butter chicken.jpg";
import chicken_f from "/chicken/garlic parmesan chicken.jpg";
import chicken_g from "/chicken/sesame ginger chicken.jpg";
import chicken_h from "/chicken/cajun chicken alfredo.jpg";
import chicken_r from "/chicken/spicy buffalo chicken.jpg";

import dessert_a from "/dessert/baklava.jpg";
import dessert_b from "/dessert/rosewater rice pudding.jpg";
import dessert_c from "/dessert/kunafa.jpg";
import dessert_d from "/dessert/pistachio ice cream.jpg";
import dessert_e from "/dessert/chocolate-dipped dates.jpg";
import dessert_f from "/dessert/tiramisu.jpg";
import dessert_g from "/dessert/lemon sorbet.jpg";
import dessert_h from "/dessert/cheesecake with raspberry sauce.jpg";
import dessert_r from "/dessert/tahini chocolate brownie.jpg";

import drink_a from "/drink/freshly squeezed lemonade.jpg";
import drink_b from "/drink/minty iced tea.jpg";
import drink_c from "/drink/turkish coffee.jpg";
import drink_d from "/drink/mediterranean smoothies.jpg";
import drink_e from "/drink/selection of wines and beers.jpg";
import drink_f from "/drink/pomegranate spritzer.jpg";
import drink_g from "/drink/homemade lemon mint soda.jpg";
import drink_h from "/drink/espresso.jpg";
import drink_r from "/drink/fresh orange juice.jpg";
import a from "/icons&images/greek salad.jpg";
import b from "/icons&images/bruchetta.jpg";
import c from "/icons&images/lemon dessert.jpg";
import { BiSolidDrink } from "react-icons/bi";
import {
  FaShrimp,
  FaBowlRice,
  FaPizzaSlice,
  FaIceCream,
} from "react-icons/fa6";
import { LuSalad } from "react-icons/lu";
import { GiSandwich, GiChickenOven } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";

export const specials = [
  {
    name: "Greek Salad",
    price: 10,
    img: a,
  },
  {
    name: "Bruchetta",
    price: 20,
    img: b,
  },
  {
    name: "Lemon Dessert",
    price: 5,
    img: c,
  },
];

export const menu = [
  {
    category: "Salads",
    icon: <LuSalad />,
    list: "salads",
    path: "?type=salads",
    items: [
      { name: "Greek with Kalamata", price: 9.99, image: salad_a, id: 1 },
      { name: "Quinoa", price: 10.49, image: salad_b, id: 2 },
      { name: "Grilled Halloumi", price: 11.99, image: salad_c, id: 3 },
      { name: "Tabbouleh", price: 8.99, image: salad_d, id: 4 },
      { name: "Little Lemon House", price: 7.99, image: salad_e, id: 5 },
      { name: "Caprese", price: 10.99, image: salad_f, id: 6 },
      { name: "Caesar", price: 9.49, image: salad_g, id: 7 },
      { name: "Spinach and Walnut", price: 8.99, image: salad_h, id: 8 },
      { name: "Cucumber Tomato", price: 7.99, image: salad_r, id: 9 },
    ],
  },
  {
    category: "Pasta-Rice",
    icon: <FaBowlRice />,
    list: "pasta-rice",
    path: "?type=pasta-rice",
    items: [
      { name: "Lemon Herb Orzo", price: 10.99, image: pasta_a, id: 10 },
      { name: "Shrimp Linguine", price: 14.99, image: pasta_b, id: 11 },
      { name: "Moussaka", price: 12.99, image: pasta_c, id: 12 },
      { name: "Rice Pilaf", price: 8.99, image: pasta_d, id: 13 },
      {
        name: "Spaghetti",
        price: 11.49,
        image: pasta_e,
        id: 14,
      },
      { name: "Chicken Alfredo", price: 12.99, image: pasta_f, id: 15 },
      { name: "Beef Shawarma Rice", price: 13.99, image: pasta_g, id: 16 },
      { name: "Seafood Linguine", price: 15.99, image: pasta_h, id: 17 },
      { name: "Vegan Lemon Garlic", price: 10.99, image: pasta_r, id: 18 },
    ],
  },
  {
    category: "Sandwiches",
    icon: <GiSandwich />,
    list: "sandwiches",
    path: "?type=sandwiches",
    items: [
      { name: "Beef Shawarma", price: 10.99, image: sandwich_a, id: 19 },
      { name: "Veggie", price: 9.49, image: sandwich_b, id: 20 },
      { name: "Lamb Gyro", price: 11.99, image: sandwich_c, id: 21 },
      { name: "Falafel Burger", price: 8.99, image: sandwich_d, id: 22 },
      { name: "Grilled Chicken Pita", price: 9.99, image: sandwich_e, id: 23 },
      { name: "Chicken Shawarma", price: 10.99, image: sandwich_f, id: 24 },
      { name: "Beef Kebab", price: 12.49, image: sandwich_g, id: 25 },
      { name: "Vegetable Panini", price: 9.99, image: sandwich_h, id: 26 },
      { name: "Tuna Salad", price: 10.49, image: sandwich_r, id: 27 },
    ],
  },
  {
    category: "Chicken",
    icon: <GiChickenOven />,
    list: "chicken",
    path: "?type=chicken",
    items: [
      { name: "Lemon Herb", price: 12.99, image: chicken_a, id: 28 },
      { name: "Chicken Marsala", price: 11.49, image: chicken_b, id: 29 },
      { name: "Teriyaki Chicken", price: 13.99, image: chicken_c, id: 30 },
      { name: "Honey Mustard ", price: 12.49, image: chicken_d, id: 31 },
      { name: "Butter Chicken", price: 14.99, image: chicken_e, id: 32 },
      { name: "Garlic Parmesan ", price: 13.49, image: chicken_f, id: 33 },
      { name: "Sesame Ginger ", price: 15.99, image: chicken_g, id: 34 },
      { name: "Cajun Alfredo", price: 14.49, image: chicken_h, id: 35 },
      { name: "Spicy Buffalo ", price: 16.99, image: chicken_r, id: 36 },
    ],
  },
  {
    category: "Meat",
    icon: <TbMeat />,
    list: "meat",
    path: "?type=meat",
    items: [
      { name: "Grilled Steak", price: 15.99, image: meat_a, id: 37 },
      { name: "Lamb Chops", price: 14.49, image: meat_b, id: 38 },
      { name: "Braised Beef", price: 16.99, image: meat_c, id: 39 },
      { name: "Pork Tenderloin", price: 15.49, image: meat_d, id: 40 },
      { name: "Beef Stroganoff", price: 17.99, image: meat_e, id: 41 },
      { name: "Roast Duck", price: 16.49, image: meat_f, id: 42 },
      { name: "BBQ Ribs", price: 18.99, image: meat_g, id: 43 },
      { name: "Sausage Platter", price: 17.49, image: meat_h, id: 44 },
      { name: "Mixed Grill", price: 19.99, image: meat_r, id: 45 },
    ],
  },
  {
    category: "Seafood",
    icon: <FaShrimp />,
    list: "seafood",
    path: "?type=seafood",
    items: [
      {
        name: "Grilled Sea Bass",
        price: 19.99,
        image: seafood_a,
        id: 46,
      },
      { name: "Garlic Butter Shrimp", price: 15.99, image: seafood_b, id: 47 },
      { name: "Salmon Souvlaki ", price: 16.99, image: seafood_c, id: 48 },
      { name: "Stuffed Calamari", price: 17.49, image: seafood_d, id: 49 },
      { name: "Seafood Paella", price: 18.99, image: seafood_e, id: 50 },
      { name: "Grilled Swordfish", price: 20.99, image: seafood_f, id: 51 },
      { name: "Lemon Garlic", price: 16.99, image: seafood_g, id: 52 },
      { name: "Seafood Platter", price: 21.99, image: seafood_h, id: 53 },
      { name: "Crispy Calamari", price: 13.99, image: seafood_r, id: 54 },
    ],
  },
  {
    category: "Pizzas",
    icon: <FaPizzaSlice />,
    list: "pizzas",
    path: "?type=pizzas",
    items: [
      {
        name: "Margherita",
        price: 10,
        image: pizza_a,
        id: 55,
      },
      {
        name: "Pepperoni",
        price: 12,
        image: pizza_b,
        id: 56,
      },
      {
        name: "Vegetarian",
        price: 11,
        image: pizza_c,
        id: 57,
      },
      {
        name: "Meat Lovers",
        price: 14,
        image: pizza_d,
        id: 58,
      },
      {
        name: "Hawaiian",
        price: 13,
        image: pizza_e,
        id: 59,
      },
      {
        name: "Supreme",
        price: 15,
        image: pizza_f,
        id: 60,
      },
      {
        name: "BBQ Chicken",
        price: 13,
        image: pizza_g,
        id: 61,
      },
      {
        name: "Mushroom Delight",
        price: 11,
        image: pizza_h,
        id: 62,
      },
      {
        name: "Vegan Veggie",
        price: 12,
        image: pizza_r,
        id: 63,
      },
    ],
  },
  {
    category: "Desserts",
    icon: <FaIceCream />,
    list: "desserts",
    path: "?type=desserts",
    items: [
      { name: "Baklava", price: 5.99, image: dessert_a, id: 64 },
      { name: "Rosewater Rice ", price: 6.49, image: dessert_b, id: 65 },
      { name: "Kunafa", price: 7.99, image: dessert_c, id: 66 },
      { name: "Pistachio Ice Cream", price: 4.99, image: dessert_d, id: 67 },
      { name: "Chocolate-Dipped ", price: 6.99, image: dessert_e, id: 68 },
      { name: "Tiramisu", price: 7.49, image: dessert_f, id: 69 },
      { name: "Lemon Sorbet", price: 4.99, image: dessert_g, id: 70 },
      {
        name: "Cheesecake with",
        price: 8.49,
        image: dessert_h,
        id: 71,
      },
      { name: "Tahini Chocolate", price: 7.99, image: dessert_r, id: 72 },
    ],
  },
  {
    category: "Drinks",
    icon: <BiSolidDrink />,
    list: "drinks",
    path: "?type=drinks",
    items: [
      { name: "Squeezed Lemonade", price: 3.99, image: drink_a, id: 73 },
      { name: "Minty Iced Tea", price: 3.49, image: drink_b, id: 74 },
      { name: "Turkish Coffee", price: 4.99, image: drink_c, id: 75 },
      { name: "Smoothies", price: 5.49, image: drink_d, id: 76 },
      { name: "Wines and Beers", price: 6.99, image: drink_e, id: 77 },
      { name: "Pomegranate", price: 4.49, image: drink_f, id: 78 },
      { name: "Lemon Mint Soda", price: 3.99, image: drink_g, id: 79 },
      { name: "Espresso", price: 2.99, image: drink_h, id: 80 },
      { name: "Fresh Orange Juice", price: 4.49, image: drink_r, id: 81 },
    ],
  },
];
