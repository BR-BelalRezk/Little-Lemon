import { deleteItem } from "../../Redux/slices/cartSlice";
import { useAppDispatch } from "../../hooks/redux-hooks";
import YellowButton from "./YellowButton";

export default function DeleteItem({ id }: { id: number }) {
  const dispatch = useAppDispatch();
  return (
    <YellowButton onClick={() => dispatch(deleteItem(id))} className="px-5">
      Delete
    </YellowButton>
  );
}
