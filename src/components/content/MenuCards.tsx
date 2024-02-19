import { useSearchParams } from "react-router-dom";
import { menu } from "../../data/data";
import MenuFilter from "./MenuFilter";
import MenuItem from "./MenuItem";
export default function MenuCards() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const FilteredItems = typeFilter
    ? menu.filter((item) => item.category.toLowerCase() === typeFilter)
    : menu;
  return (
    <section className="flex items-center justify-center">
      <article className="contain">
        <MenuFilter setSearchParams={setSearchParams} />
        <div className="mb-5 flex flex-col items-center justify-center gap-5 lg:grid lg:grid-cols-3 lg:gap-10">
          {FilteredItems.map((item) =>
            item.items.map((item, index) => (
              <MenuItem cart={item} index={index} key={index}/>
            )),
          )}
        </div>
      </article>
    </section>
  );
}
