import { FaBasketShopping } from "react-icons/fa6";
import Hero from "../components/common/Hero";
import { ChangeEvent, useState } from "react";
import {
  FormFour,
  FormOne,
  FormThree,
  FormTwo,
} from "../components/content/RservationForms";
import {
  BackButtons,
  NextButtons,
} from "../components/shared/RservationButtonTabs";
export default function Reservation() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    pass: "",
    date: "",
    time: "",
    diners: 0,
    occasion: "",
    tel: "",
    cardname: "",
    expdate: "",
    cvv: 0,
    msg: "",
    side: "",
    confirm: false,
  });
  const [tab, setTab] = useState(1);
  const {
    fname,
    lname,
    email,
    pass,
    date,
    time,
    diners,
    occasion,
    tel,
    cardname,
    expdate,
    cvv,
    msg,
    side,
    confirm,
  } = form;
  const handleForm = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const inputValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setForm((prevState) => ({
      ...prevState,
      [name]: inputValue,
    }));
  };
  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <>
      <Hero
        path="/cart"
        text={
          <>
            See yout cart
            <FaBasketShopping />
          </>
        }
        src="/icons&images/restaurant.jpg"
      />
      <section>
        <BackButtons tab={tab} setTab={setTab} />
        <form onSubmit={handleSubmit}>
          {tab === 1 ? (
            <FormOne
              handleForm={handleForm}
              fname={fname}
              lname={lname}
              email={email}
              pass={pass}
              key={1}
            />
          ) : tab === 2 ? (
            <FormTwo
              handleForm={handleForm}
              date={date}
              time={time}
              occasion={occasion}
              diners={diners}
              key={2}
            />
          ) : tab === 3 ? (
            <FormThree
              handleForm={handleForm}
              cvv={cvv}
              key={3}
              tel={tel}
              expdate={expdate}
              cardname={cardname}
            />
          ) : (
            <FormFour
              handleForm={handleForm}
              msg={msg}
              side={side}
              key={4}
              confirm={confirm}
            />
          )}
          <NextButtons tab={tab} setTab={setTab} />
        </form>
      </section>
    </>
  );
}
