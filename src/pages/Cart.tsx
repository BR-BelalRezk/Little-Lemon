import { BiSolidHome } from "react-icons/bi";
import SearchOrder from "../components/content/SearchOrder";
import Hero from "../components/common/Hero";
export default function Cart() {
  return (
    <>
      <Hero
        src="/icons&images/restaurant chef B.jpg"
        text={
          <>
            Back to home
            <BiSolidHome />
          </>
        }
        path="/landing"
      />
      <SearchOrder />
    </>
  );
}
