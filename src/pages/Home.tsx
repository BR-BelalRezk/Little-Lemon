import Hero from "../components/common/Hero";
import CreateUser from "../components/content/CreateUser";
import { useAppSelector } from "../hooks/redux-hooks";
import YellowLink from "../components/shared/YellowLink";
export default function Home() {
  const username = useAppSelector((state) => state.user.username);
  return (
    <>
      <Hero
        src="/icons&images/bruchetta.jpg"
        text={<>Continue</>}
        path="/landing"
      />
      {!username ? (
        <CreateUser />
      ) : (
        <div className="mt-10 flex items-center justify-center sm:mt-20">
          <YellowLink to={"/landing"}>Continue Enjoying, {username}</YellowLink>
        </div>
      )}
    </>
  );
}
