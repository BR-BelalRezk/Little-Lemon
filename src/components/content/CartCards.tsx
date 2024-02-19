import { useAppSelector } from "../../hooks/redux-hooks";
import CartItem from "./CartItem";

export default function CartCards() {
  const cart = useAppSelector((state) => state.cart.cart);
  const totalCartPrice = useAppSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0),
  );
  return (
    <section className="my-5 flex items-center justify-center bg-highlight_1 p-5">
      <article className="contain">
        <ul className="flex flex-col items-center justify-center gap-5">
          {cart.map((item) => (
            <CartItem cart={item} key={item.price} />
          ))}
        </ul>
        <div className="mt-10">
          <p className="flex items-center justify-start gap-5 text-lg font-bold text-primary_1">
            Total Cart Price :{" "}
            <span className=" rounded-full bg-highlight_2 px-5 py-0.5 text-highlight_1">
              ${Math.round(totalCartPrice)}
            </span>
          </p>
        </div>
      </article>
    </section>
  );
}
