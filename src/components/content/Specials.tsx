import { MdRestaurantMenu } from "react-icons/md";
import { specials } from "../../data/data";
import YellowLink from "../shared/YellowLink";
import { motion } from "framer-motion";
export default function Specials() {
  return (
    <section className="flex items-center justify-center">
      <article className="contain">
        <div className="my-10 flex items-center justify-between sm:my-20">
          <h3 className="font-bold text-highlight_2 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            This Week's Specials
          </h3>
          <YellowLink to={"/menu"}>
            Menu
            <MdRestaurantMenu />
          </YellowLink>
        </div>
        <div className="mb-10 grid grid-cols-1 gap-5 lg:grid-cols-3 xl:gap-10">
          {specials.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ delay: index * 0.1 + 2 }}
              viewport={{ once: true }}
              key={item.name}
              className="flex flex-col items-center justify-center sm:flex-row lg:flex-col"
            >
              <img
                src={item.img}
                className="w-full rounded-t-lg sm:h-full sm:w-1/2 sm:rounded-bl-lg sm:rounded-tr-none lg:h-60 lg:w-full lg:rounded-bl-none lg:rounded-tr-lg"
              />
              <div className="flex flex-col items-center justify-center gap-3 rounded-b-lg bg-primary_1 px-3 py-3 sm:h-full sm:w-1/2  sm:rounded-bl-none sm:rounded-tr-lg lg:h-auto lg:w-full lg:rounded-bl-lg lg:rounded-tr-none">
                <div className="flex w-full items-center justify-between  py-1.5">
                  <h4 className=" font-bold text-secondary_1">{item.name}</h4>
                  <span className=" font-bold text-secondary_2">
                    ${item.price}
                  </span>
                </div>
                <p className="text-center font-semibold text-highlight_1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  placeat hic nulla aliquam nisi nesciunt, veritatis tempore
                  ratione iure error consectetur, cumque odio architecto veniam
                  fuga? Quidem voluptates sapiente laborum!
                </p>
                <YellowLink to={"/menu"}>
                  See our Menu <MdRestaurantMenu />
                </YellowLink>
              </div>
            </motion.div>
          ))}
        </div>
      </article>
    </section>
  );
}
