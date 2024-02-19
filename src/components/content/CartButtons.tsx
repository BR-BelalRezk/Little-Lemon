import { clearCart } from "../../Redux/slices/cartSlice";
import { useAppDispatch } from "../../hooks/redux-hooks";
import YellowButton from "../shared/YellowButton";
import YellowLink from "../shared/YellowLink";

export default function CartButtons() {
  const dispatch = useAppDispatch();
  return (
    <div className="mb-5 flex items-center justify-center gap-5">
      <YellowLink to="/order">Order now</YellowLink>
      <YellowButton className="px-5" onClick={() => dispatch(clearCart())}>
        Clear cart
      </YellowButton>
    </div>
  );
}
