import { FaTableCellsLarge } from "react-icons/fa6";
import Hero from "../components/common/Hero";
import MenuCards from "../components/content/MenuCards";
export default function Menu() {
  return (
    <>
      <Hero
        text={
          <>
            Rseserve a table
            <FaTableCellsLarge />
          </>
        }
        path="/reservation"
        src="/icons&images/restauranfood.jpg"
      />
      <MenuCards />
    </>
  );
}
