import { useAppSelector } from "../../hooks/redux-hooks";
import DeleteItem from "../shared/DeleteItem";
import UpdateItem from "../shared/UpdateItem";
export default function CartItem({
  cart,
}: {
  cart: {
    id: number;
    name: string;
    quantity: number;
    price: number;
  };
}) {
  const currentQuantity = useAppSelector(
    (state) =>
      state.cart.cart.find((item) => item.id === cart.id)?.quantity ?? 0,
  );
  return (
    <li className="flex w-full flex-col items-center justify-center gap-3">
      <div
        key={cart.name}
        className="flex w-full flex-col  items-center justify-center gap-3 sm:flex-row sm:justify-between sm:gap-0"
      >
        <div className="flex w-full items-center justify-between sm:w-auto sm:justify-center sm:gap-5">
          <span className="text-xs font-semibold text-secondary_2 sm:text-base">
            {cart.quantity}*
          </span>
          <p className="text-sm font-bold text-secondary_1 sm:text-lg">
            {cart.name}
          </p>
        </div>
        <div className="flex w-full items-center justify-between sm:w-auto sm:justify-center sm:gap-5">
          <span className="text-xs font-semibold text-secondary_2 sm:text-base">
            ${cart.price}
          </span>
          <UpdateItem id={cart.id} currentQuantity={currentQuantity} />
          <DeleteItem id={cart.id} />
        </div>
      </div>
      <hr className="w-full border border-highlight_1" />
    </li>
  );
}
