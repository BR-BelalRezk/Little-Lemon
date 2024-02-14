import { MdRestaurantMenu } from "react-icons/md";
import Hero from "../components/common/Hero";
export default function About() {
  return (
    <Hero
      src="/icons&images/Mario and Adrian b.jpg"
      text={
        <>
          Menu
          <MdRestaurantMenu />
        </>
      }
      path="/menu"
    />
  );
}
