import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import { BsFillPersonFill } from "react-icons/bs";
import { MdRestaurantMenu } from "react-icons/md";
import { FaBasketShopping, FaTableCellsLarge } from "react-icons/fa6";
import { BiSolidHome } from "react-icons/bi";

export default function AppLayout() {
  const pathname =useLocation().pathname
  return (
    <>
    <Header />
    <Hero 
    src={pathname === "/" ? "/icons&images/bruchetta.jpg" : pathname==="/landing" ? "/icons&images/Mario and Adrian A.jpg" : pathname==="/about" ?"/icons&images/Mario and Adrian b.jpg" : pathname==="/menu" ?"/icons&images/restauranfood.jpg" : pathname==="/reservation" ? "/icons&images/restaurant.jpg" : "/icons&images/restaurant chef B.jpg"}
    path={pathname === "/" ? "/landing" : pathname==="/landing" ? "/about" : pathname==="/about" ?"/menu" : pathname==="/menu" ?"/reservation" : pathname==="/reservation" ? "/cart" : "/landing"}
    text={pathname === "/" ? <>Start</> : pathname==="/landing" ? <>About Us<BsFillPersonFill /></> : pathname==="/about" ?<>Menu<MdRestaurantMenu/></> : pathname==="/menu" ?<>Rseserve a table<FaTableCellsLarge/></> : pathname==="/reservation" ? <>See yout cart<FaBasketShopping/></> : <>Back to home<BiSolidHome /></>}/>
    <main>
      <Outlet />
    </main>
    </>
  );
}
