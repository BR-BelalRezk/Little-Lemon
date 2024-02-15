import { BiSolidHome } from "react-icons/bi";
import SearchOrder from "../components/content/SearchOrder";
import Hero from "../components/common/Hero";
import { useAppSelector } from "../hooks/redux-hooks";
export default function Cart() {
  const username = useAppSelector((state) => state.user.username);
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
      {!username ? null : <p>{username}</p>}
    </>
  );
}
