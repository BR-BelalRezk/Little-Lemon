import Hero from "../components/common/Hero";
import CartCards from "../components/content/CartCards";
import { MdRestaurantMenu } from "react-icons/md";
import CartButtons from "../components/content/CartButtons";
import CartHeader from "../components/content/CartHeader";
import { useAppSelector } from "../hooks/redux-hooks";
export default function Cart() {
  const cart = useAppSelector((state) => state.cart.cart);
  return (
    <>
      <Hero
        src="/icons&images/restaurant chef B.jpg"
        text={
          <>
            Back to menu
            <MdRestaurantMenu />
          </>
        }
        path="/menu"
      />
      {!cart.length ? (
        <>
          <CartHeader />
          <p className="flex h-[50vh] items-center justify-center text-xs font-bold text-highlight_2">
            Your cart is still empty. Start adding some food
          </p>
        </>
      ) : (
        <>
          <CartHeader />
          <CartCards />
          <CartButtons />
        </>
      )}
    </>
  );
}
