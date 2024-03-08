import Hero from "../components/common/Hero";
import CartCards from "../components/content/CartCards";
import { MdRestaurantMenu } from "react-icons/md";
import CartButtons from "../components/content/CartButtons";
import { useAppSelector } from "../hooks/redux-hooks";
export default function Cart() {
  const cart = useAppSelector((state) => state.cart.cart);
  const username = useAppSelector((state) => state.user.username);
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
          <p className="flex h-[50vh] items-center justify-center text-center text-3xl font-bold tracking-widest  text-highlight_2 md:text-5xl">
            Your cart is still empty. Start adding some food
          </p>
        </>
      ) : (
        <>
          <p className="mt-5 text-center text-lg font-bold text-secondary_1 sm:mt-20 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Your cart, <span className="text-highlight_2">{username}</span>
          </p>
          <CartCards />
          <CartButtons />
        </>
      )}
    </>
  );
}
