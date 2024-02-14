import { BsFillPersonFill } from "react-icons/bs";
import Hero from "../components/common/Hero";
export default function Landing() {
  return (
    <>
      <Hero
        src="/icons&images/Mario and Adrian A.jpg"
        path="/about"
        text={
          <>
            About Us
            <BsFillPersonFill />
          </>
        }
      />
    </>
  );
}
