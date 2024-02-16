import { useAppSelector } from "../../hooks/redux-hooks";
import CartItem from "./CartItem";

export default function CartCards() {
  const cart = useAppSelector((state) => state.cart.cart);
  return (
    <section className="my-5 flex items-center justify-center bg-highlight_1 p-5">
      <article className="contain">
        <ul className="flex flex-col items-center justify-center gap-5">
          {cart.map((item) => (
            <CartItem cart={item} key={item.id} />
          ))}
        </ul>
      </article>
    </section>
  );
}
