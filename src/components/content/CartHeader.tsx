import { useAppSelector } from "../../hooks/redux-hooks";
import SearchOrder from "./SearchOrder";
export default function CartHeader() {
  const username = useAppSelector((state) => state.user.username);
  return (
    <section className="my-5 flex items-center justify-center sm:mt-20">
      <article className="contain flex items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center gap-5 sm:flex-row sm:justify-between sm:gap-0">
          <SearchOrder />
          <p className="text-lg font-bold text-secondary_1 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Your cart, <span className="text-highlight_2">{username}</span>
          </p>
        </div>
      </article>
    </section>
  );
}
