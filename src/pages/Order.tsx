import { FaBasketShopping } from "react-icons/fa6";
import Hero from "../components/common/Hero";
export default function Order() {
  return (
    <Hero
      path="/cart"
      text={
        <>
          Back to cart
          <FaBasketShopping />
        </>
      }
      src="/icons&images/greek salad.jpg"
    />
  );
}
