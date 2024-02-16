import { Link, SetURLSearchParams } from "react-router-dom";
import { menu } from "../../data/data";
import YellowButton from "../shared/YellowButton";

export default function MenuFilter({
  setSearchParams,
}: {
  setSearchParams: SetURLSearchParams;
}) {
  return (
    <div className=" my-5 sm:mt-20">
      <div className="flex flex-col items-center justify-center gap-5 rounded-md bg-primary_1 px-3  py-5">
        <Link
          to={"."}
          className="rounded-full bg-highlight_1 px-5 py-1 text-2xl font-bold text-highlight_2 duration-500 hover:scale-110 sm:px-10 sm:text-3xl"
        >
          Clear Filter
        </Link>
        <div className="grid w-full grid-cols-3 gap-5  text-2xl text-primary_2 sm:grid sm:grid-cols-3 sm:gap-5 sm:text-highlight_2">
          {menu.map((item) => (
            <YellowButton
              key={item.category}
              onClick={() => setSearchParams(item.path)}
              className="flex items-center justify-center gap-3"
            >
              {item.icon}
              <span className="hidden font-bold sm:block">{item.list}</span>
            </YellowButton>
          ))}
        </div>
      </div>
    </div>
  );
}
