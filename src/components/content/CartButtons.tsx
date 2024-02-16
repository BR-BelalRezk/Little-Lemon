import { clearCart } from "../../Redux/slices/cartSlice";
import { useAppDispatch } from "../../hooks/redux-hooks";
import YellowButton from "../shared/YellowButton";

export default function CartButtons() {
  const dispatch = useAppDispatch();
  return (
    <div className="mb-5 flex items-center justify-center gap-5">
      <YellowButton className="px-5">Order now</YellowButton>
      <YellowButton className="px-5" onClick={() => dispatch(clearCart())}>
        Clear cart
      </YellowButton>
    </div>
  );
}
