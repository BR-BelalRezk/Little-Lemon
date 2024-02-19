import { useAppSelector } from "../../hooks/redux-hooks";
import { ChangeEvent, FormEvent, useState } from "react";
import YellowButton from "../shared/YellowButton";
export default function CreateOrderForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const cart = useAppSelector((state) => state.cart.cart);
  const username = useAppSelector((state) => state.user.username);
  const totalCartPrice = useAppSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0),
  );
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitted(true);
    setForm((prevState) => ({
      ...prevState,
      phone: "",
      address: "",
    }));
  }

  function handleInputs(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  return (
    <>
      {!isSubmitted ? (
        <section className="flex items-center justify-center">
          <article className="contain">
            <form
              onSubmit={handleSubmit}
              className="my-5 flex flex-col items-center justify-center  gap-5 sm:mt-20"
            >
              <h2 className=" text-xl font-bold text-highlight_2 sm:text-2xl">
                Ready to order? Let's go!
              </h2>
              <div className="flex flex-col items-center justify-center gap-5 rounded-lg bg-highlight_1 p-5 sm:w-9/12 sm:gap-10 xl:w-7/12">
                <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:justify-between sm:gap-0">
                  <label className=" text-lg font-bold text-primary_1 sm:text-xl lg:text-2xl">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleInputs}
                    className="w-60 rounded-full p-1 pl-5 lg:w-80"
                    placeholder="Name"
                  />
                </div>

                <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:justify-between sm:gap-0">
                  <label className=" text-lg font-bold text-primary_1 sm:text-xl lg:text-2xl">
                    Phone
                  </label>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleInputs}
                      required
                      className="w-60 rounded-full p-1 pl-5 lg:w-80"
                      placeholder="Number"
                    />
                  </div>
                </div>

                <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:justify-between sm:gap-0">
                  <label className=" text-lg font-bold text-primary_1 sm:text-xl lg:text-2xl">
                    Address
                  </label>
                  <div>
                    <input
                      type="text"
                      value={form.address}
                      onChange={handleInputs}
                      name="address"
                      required
                      className="w-60 rounded-full p-1 pl-5 lg:w-80"
                      placeholder="Address"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-3">
                  <YellowButton className=" px-5">Order Now</YellowButton>
                  <p className=" text-lg font-bold text-highlight_2">
                    Total price of{" "}
                    <span className=" ml-1.5 text-secondary_1">
                      ${Math.round(totalCartPrice)}
                    </span>
                  </p>
                </div>
              </div>
            </form>
          </article>
        </section>
      ) : (
        <div className="my-5 flex flex-col items-center justify-center gap-5 sm:mt-20 ">
          <h3 className="flex flex-col items-center justify-center font-bold text-secondary_1 sm:text-xl lg:text-2xl">
            <p>
              <span className="text-highlight_2">Congrats,</span> {form.name} ({" "}
              {username} )
            </p>
            <span className=" font-bold text-highlight_2">
              Your order is submitted successfully!
            </span>
          </h3>
          <div className="flex w-full flex-col items-center justify-center bg-highlight_1 p-3">
            <ul className=" contain flex  flex-col items-center justify-center gap-3 ">
              {cart.map((item) => (
                <li
                  key={item.price}
                  className="flex w-full flex-col items-center justify-center gap-3 sm:w-9/12 xl:w-7/12"
                >
                  <p className="flex w-full items-center justify-between font-bold">
                    <span className=" text-highlight_2">{item.quantity}*</span>
                    <span className=" text-primary_1">{item.name}</span>
                    <span className=" text-secondary_1">
                      ${item.totalPrice}
                    </span>
                  </p>
                  <hr className="w-full rounded-full border border-highlight_2" />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <p className="flex items-center justify-center gap-3 font-bold text-highlight_2 sm:text-xl">
              Total order price with delivery{" "}
              <span className=" text-primary_2">($10)</span> :
              <span className=" text-secondary_1">
                ${Math.round(totalCartPrice + 10)}
              </span>
            </p>
            <YellowButton
              onClick={() => setIsSubmitted(false)}
              className=" px-5"
            >
              Cancel order
            </YellowButton>
          </div>
        </div>
      )}
    </>
  );
}
