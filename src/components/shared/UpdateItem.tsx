import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../Redux/slices/cartSlice";
import { useAppDispatch } from "../../hooks/redux-hooks";
import YellowButton from "./YellowButton";

export default function UpdateItem({
  id,
  currentQuantity,
  className
}: {
  id: number;
  currentQuantity: number;
  className:string
}) {
  const dispatch = useAppDispatch();
  return (
    <div className="  flex items-center justify-center gap-3">
      <YellowButton
        onClick={() => dispatch(decreaseItemQuantity(id))}
        className="px-2.5"
      >
        -
      </YellowButton>
      <p className={`font-semibold ${className}`}>{currentQuantity}</p>
      <YellowButton
        onClick={() => dispatch(increaseItemQuantity(id))}
        className="px-2"
      >
        +
      </YellowButton>
    </div>
  );
}
