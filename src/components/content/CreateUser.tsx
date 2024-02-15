import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { updateName } from "../../Redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
export default function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (username === "") return;
    dispatch(updateName(username));
    navigate("/landing");
  }
  return (
    <section className=" flex items-center justify-center">
      <article className="contain flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className=" mt-5 flex flex-col items-center justify-center gap-5 sm:mt-20  lg:my-20"
        >
          <div>
            <h3 className=" text-center font-medium text-highlight_2 sm:text-xl md:text-2xl">
              Straight out of the oven, straight to you.
            </h3>
            <p className=" text-center font-medium text-secondary_1 sm:text-lg md:text-xl">
              👋 Welcome! Please start by telling us your name:
            </p>
          </div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Your Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-9/12 rounded-full bg-highlight_1 p-1.5 pl-5 transition-all duration-500 focus:w-10/12 focus:outline-none focus:ring focus:ring-primary_2 focus:ring-offset-1 sm:focus:w-full "
          />
          <button className="flex items-center justify-center gap-3 rounded-full bg-primary_2 px-5 py-0.5 font-bold text-highlight_2 transition-all duration-500 hover:bg-secondary_1 hover:text-secondary_2">
            Start
          </button>
        </form>
      </article>
    </section>
  );
}
