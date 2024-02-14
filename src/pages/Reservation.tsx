import { FaBasketShopping } from "react-icons/fa6";
import Hero from "../components/layout/Hero";
export default function Reservation() {
  return (
    <>
      <Hero
        path="/cart"
        text={
          <>
            See yout cart
            <FaBasketShopping />
          </>
        }
        src="/icons&images/restaurant.jpg"
      />
    </>
  );
}
