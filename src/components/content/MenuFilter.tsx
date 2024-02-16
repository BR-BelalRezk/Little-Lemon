import { SetURLSearchParams } from "react-router-dom";
import { menu } from "../../data/data";

export default function MenuFilter({
  setSearchParams,
}: {
  setSearchParams: SetURLSearchParams;
}) {
  return (
    <div className=" my-5 sm:mt-20">
      <div className="rounded-md bg-highlight_1 px-3  py-5">
        <div className="grid w-full grid-cols-3 gap-5  text-2xl sm:grid sm:grid-cols-3 sm:gap-5 ">
          {menu.map((item) => (
            <button
              key={item.category}
              onClick={() => setSearchParams(item.path)}
              className="flex items-center justify-center gap-3       rounded-full bg-highlight_2  py-0.5  font-bold text-secondary_2 transition-all duration-500 hover:bg-secondary_1 hover:text-secondary_2
              "
            >
              {item.icon}
              <span className="hidden font-bold sm:block">{item.list}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
