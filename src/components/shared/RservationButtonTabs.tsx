import { Dispatch, SetStateAction } from "react";
import YellowButton from "./YellowButton";

type Props = {
  tab: number;
  setTab: Dispatch<SetStateAction<number>>;
};

export function BackButtons({ tab, setTab }: Props) {
  return (
    <>
      {tab === 2 ? (
        <YellowButton className="px-5" onClick={() => setTab(1)}>
          Back
        </YellowButton>
      ) : tab === 3 ? (
        <YellowButton className="px-5" onClick={() => setTab(2)}>
          Back
        </YellowButton>
      ) : tab === 4 ? (
        <YellowButton className="px-5" onClick={() => setTab(3)}>
          Back
        </YellowButton>
      ) : null}
    </>
  );
}

export function NextButtons({ tab, setTab }: Props) {
  return (
    <div>
      {tab === 1 ? (
        <YellowButton className=" px-5" onClick={() => setTab(2)}>
          Next
        </YellowButton>
      ) : tab === 2 ? (
        <YellowButton className=" px-5" onClick={() => setTab(3)}>
          Next
        </YellowButton>
      ) : tab === 3 ? (
        <YellowButton className=" px-5" onClick={() => setTab(4)}>
          Next
        </YellowButton>
      ) : (
        <button
          className="hover:text-secondary_2`} rounded-full bg-primary_2  px-5  py-0.5 font-bold text-highlight_2 transition-all duration-500 hover:bg-secondary_1
        "
          type="submit"
        >
          Reserve Table
        </button>
      )}
    </div>
  );
}
