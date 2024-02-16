import { FaBasketShopping } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { addItem } from "../../Redux/slices/cartSlice";
import DeleteItem from "../shared/DeleteItem";
import UpdateItem from "../shared/UpdateItem";
import YellowLink from "../shared/YellowLink";
import YellowButton from "../shared/YellowButton";
interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
}
export default function MenuItem({
  cart,
  index,
}: {
  index: number;
  cart: CartItem;
}) {
  const dispatch = useAppDispatch();

  function handlAddToCart(item: CartItem) {
    const { name, id, price } = item;
    const newItem = {
      name,
      id,
      price,
      quantity: 1,
      totalPrice: price * 1,
    };
    dispatch(addItem(newItem));
  }
  const currentQuantity = useAppSelector(
    (state) =>
      state.cart.cart.find((item) => item.id === cart.id)?.quantity ?? 0,
  );
  const isInCart = currentQuantity > 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 1 }}
      viewport={{ once: true }}
      key={cart.id}
      className="flex flex-col items-center justify-center sm:flex-row lg:flex-col"
    >
      <img
        src={cart.image}
        alt={cart.name}
        className={`h-60 w-80 rounded-t-lg sm:h-72 sm:w-1/2  sm:rounded-bl-lg sm:rounded-tr-none lg:h-60 lg:w-full lg:rounded-bl-none lg:rounded-tr-lg`}
      />
      <div
        className={`flex h-72 w-80 flex-col items-center justify-center gap-5 rounded-b-lg bg-primary_1 px-5 sm:w-1/2 sm:rounded-bl-none sm:rounded-tr-lg lg:w-full lg:rounded-bl-lg lg:rounded-tr-none`}
      >
        <div className="flex w-full items-center justify-between font-bold">
          <h3 className="text-secondary_1">{cart.name}</h3>
          <span className="text-secondary_2">${cart.price}</span>
        </div>
        <p className="text-center text-sm font-semibold text-highlight_1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minima
          vero magni deleniti facilis explicabo animi libero dolore tempore
          doloribus! Ullam ab exercitationem ratione enim debitis id, facere
          asperiores ad.
        </p>
        {!isInCart && (
          <YellowButton
            onClick={() => handlAddToCart(cart)}
            className="flex items-center justify-center gap-3  px-5"
          >
            Add to cart <FaBasketShopping />
          </YellowButton>
        )}
        {isInCart && (
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-center justify-center gap-3">
              <UpdateItem id={cart.id} currentQuantity={currentQuantity} />
              <DeleteItem
                id={cart.id}
                className="bg-primary_2 text-highlight_2"
              />
            </div>
            <div>
              <YellowLink to="/cart">
                View cart <FaBasketShopping />
              </YellowLink>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
