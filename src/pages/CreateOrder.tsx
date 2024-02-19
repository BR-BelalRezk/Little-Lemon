import { FaBasketShopping } from "react-icons/fa6";
import Hero from "../components/common/Hero";
import { useAppSelector } from "../hooks/redux-hooks";
import CreateOrderForm from "../components/content/CreateOrderForm";
export default function CreateOrder() {
  const cart = useAppSelector((state) => state.cart.cart);
  return (
    <>
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
      {!cart.length ? (
        <p className="flex h-[50vh] items-center justify-center text-xs font-bold text-highlight_2">
          Your cart is still empty. Start adding some food
        </p>
      ) : (
        <CreateOrderForm />
      )}
    </>
  );
}
