import { deleteItem } from "../../Redux/slices/cartSlice";
import { useAppDispatch } from "../../hooks/redux-hooks";
export default function DeleteItem({
  id,
  className,
}: {
  id: number;
  className: string;
}) {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => dispatch(deleteItem(id))}
      className={`${className}  rounded-full px-5   py-0.5  font-bold transition-all duration-500 hover:bg-secondary_1 hover:text-secondary_2`}
    >
      {" "}
      Delete
    </button>
  );
}
