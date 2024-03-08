import { ChangeEvent, useState } from "react";
import YellowButton from "../shared/YellowButton";

type Props1 = {
  handleForm: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
  fname: string;
  lname: string;
  email: string;
  pass: string;
};

export function FormOne({ handleForm, fname, lname, email, pass }: Props1) {
  const [isFinished, setIsFinished] = useState(false);
  return (
    <>
      <article className=" flex flex-col items-center justify-center gap-10 rounded-lg bg-primary_1 p-5">
        {isFinished ? (
          <p>{fname}</p>
        ) : (
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder="First Name"
            onChange={handleForm}
            value={fname}
            className=" rounded-full bg-highlight_1 p-1 pl-3"
          />
        )}
        {isFinished ? (
          <p>{lname}</p>
        ) : (
          <input
            type="text"
            name="lname"
            id="lname"
            placeholder="Last Name"
            className=" rounded-full bg-highlight_1 p-1 pl-3"
            onChange={handleForm}
            value={lname}
          />
        )}
        {isFinished ? (
          <p>{email}</p>
        ) : (
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleForm}
            value={email}
            className=" rounded-full bg-highlight_1 p-1 pl-3"
          />
        )}
        {isFinished ? (
          <p>{pass}</p>
        ) : (
          <input
            type="password"
            name="pass"
            id="pass"
            placeholder="Password"
            onChange={handleForm}
            value={pass}
            className=" rounded-full bg-highlight_1 p-1 pl-3"
          />
        )}
      </article>
      <YellowButton
        className="px-5"
        onClick={() =>
          isFinished ? setIsFinished(false) : setIsFinished(true)
        }
      >
        {isFinished ? "Edit" : "Finish"}
      </YellowButton>
    </>
  );
}

type Props2 = {
  handleForm: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
  date: string;
  time: string;
  diners: number;
  occasion: string;
};
export function FormTwo({ handleForm, date, time, diners, occasion }: Props2) {
  const [isFinished, setIsFinished] = useState(false);
  return (
    <>
      <article>
        {isFinished ? (
          <p>{date}</p>
        ) : (
          <input
            type="date"
            name="date"
            id="date"
            onChange={handleForm}
            value={date}
            placeholder="Date"
          />
        )}
        {isFinished ? (
          <p>{time}</p>
        ) : (
          <input
            type="time"
            name="time"
            id="time"
            onChange={handleForm}
            value={time}
            placeholder="Time"
          />
        )}
        {isFinished ? (
          <p>{diners}</p>
        ) : (
          <input
            type="number"
            name="diners"
            placeholder="Number of Diners"
            id="diners"
            onChange={handleForm}
            value={diners}
          />
        )}
        {isFinished ? (
          <p>{occasion}</p>
        ) : (
          <select
            name="occasion"
            onChange={handleForm}
            value={occasion}
            id="occasion"
          ></select>
        )}
      </article>
      <YellowButton
        className="px-5"
        onClick={() =>
          isFinished ? setIsFinished(false) : setIsFinished(true)
        }
      >
        {isFinished ? "Edit" : "Finish"}
      </YellowButton>
    </>
  );
}

type Props3 = {
  handleForm: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
  tel: string;
  cardname: string;
  expdate: string;
  cvv: number;
};
export function FormThree({ handleForm, tel, cardname, expdate, cvv }: Props3) {
  const [isFinished, setIsFinished] = useState(false);
  return (
    <>
      <article>
        {isFinished ? (
          <p>{tel}</p>
        ) : (
          <input
            type="tel"
            name="card"
            id="tel"
            onChange={handleForm}
            value={tel}
            placeholder="Card Number"
          />
        )}
        {isFinished ? (
          <p>{cardname}</p>
        ) : (
          <input
            type="text"
            name="cardname"
            id="cardname"
            placeholder="First / Last Name"
            onChange={handleForm}
            value={cardname}
          />
        )}
        {isFinished ? (
          <p>{expdate}</p>
        ) : (
          <input
            type="month"
            name="expdate"
            id="expdate"
            onChange={handleForm}
            value={expdate}
          />
        )}
        {isFinished ? (
          <p>{cvv}</p>
        ) : (
          <input
            type="number"
            name="cvv"
            placeholder="CVV"
            id="cvv"
            min={"3"}
            max={"3"}
            onChange={handleForm}
            value={cvv}
          />
        )}
      </article>
      <YellowButton
        className="px-5"
        onClick={() =>
          isFinished ? setIsFinished(false) : setIsFinished(true)
        }
      >
        {isFinished ? "Edit" : "Finish"}
      </YellowButton>
    </>
  );
}

type Props4 = {
  handleForm: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
  side: string;
  confirm: boolean;
  msg: string;
};
export function FormFour({ handleForm, side, confirm, msg }: Props4) {
  const [isFinished, setIsFinished] = useState(false);
  return (
    <>
      <article>
        {isFinished ? (
          <p>{msg}</p>
        ) : (
          <textarea
            name="msg"
            id="msg"
            onChange={handleForm}
            value={msg}
            placeholder="Special Request"
          />
        )}
        {isFinished ? (
          <p>{side}</p>
        ) : (
          <>
            <input
              type="radio"
              name="side"
              onChange={handleForm}
              value={"inside"}
              id="Iside"
              checked={side === "inside"}
            />
            <input
              type="radio"
              name="side"
              onChange={handleForm}
              value={"outside"}
              id="Oside"
              checked={side === "outside"}
            />
          </>
        )}
        {isFinished ? (
          <p>{confirm}</p>
        ) : (
          <input
            type="checkbox"
            name="confirm"
            onChange={handleForm}
            value={"email"}
            id="confirm"
            checked={confirm}
          />
        )}
      </article>
      <YellowButton
        className="px-5"
        onClick={() =>
          isFinished ? setIsFinished(false) : setIsFinished(true)
        }
      >
        {isFinished ? "Edit" : "Finish"}
      </YellowButton>
    </>
  );
}
