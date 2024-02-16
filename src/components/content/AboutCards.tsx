import { about } from "../../constants/constants";
import { motion } from "framer-motion";
export default function AboutCards() {
  return (
    <section className="flex items-center justify-center">
      <article className="contain flex items-center justify-center">
        <div className="my-5 grid grid-cols-1 gap-5 sm:mt-20 lg:grid-cols-3">
          {about.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 2 }}
              key={item.name}
              className="flex flex-col items-center justify-center sm:flex-row lg:flex-col"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full rounded-t-lg sm:h-60 sm:w-1/2 sm:rounded-bl-lg sm:rounded-tr-none lg:w-full lg:rounded-bl-none lg:rounded-tr-lg"
              />
              <div className="flex flex-col items-start justify-start gap-5 rounded-b-lg bg-primary_1 p-5 sm:h-60 sm:w-1/2 sm:rounded-bl-none sm:rounded-tr-lg lg:w-full lg:rounded-bl-lg lg:rounded-tr-none">
                <h3 className="text-xl font-semibold text-secondary_1 sm:text-2xl">
                  {item.name}
                </h3>
                <p className="text-xs font-medium text-secondary_2 sm:text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                  quibusdam facere quae dolore, sunt nisi! Ratione, qui harum
                  velit fuga facere fugit animi accusantium iste voluptate
                  recusandae. Velit, exercitationem distinctio.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </article>
    </section>
  );
}
