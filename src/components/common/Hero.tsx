import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
const imgVariants: Variants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 1000px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 1,
      delay: 1,
    },
  },
  close: {
    clipPath: "inset(10% 50% 90% 50% round 1000px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 1,
      delay: 1,
    },
  },
};
export default function Hero({
  text,
  path,
  src,
}: {
  text: JSX.Element;
  path: string;
  src: string;
}) {
  return (
    <section className="flex items-center justify-center bg-primary_1 ">
      <article className="contain relative flex flex-col items-start justify-start gap-3 py-5">
        <div>
          <h1 className=" text-5xl font-semibold text-primary_2">
            Little Lemon
          </h1>
          <h2 className=" text-3xl font-medium text-secondary_2">Chicago</h2>
        </div>
        <p className="font-medium text-highlight_1">
          Little-Lemon is a family-owned
          <br />
          mediterranean restaurant, focused on
          <br />
          traditional recipes served with a<br />
          modern twist
        </p>

        <motion.span
          initial={{ opacity: 0, y: 25 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.5, type: "spring" },
          }}
        >
          <Link
            to={path}
            className="flex items-center justify-center gap-3 rounded-full bg-primary_2 px-3 py-1 font-bold text-highlight_2"
          >
            {text}
          </Link>
        </motion.span>
        <motion.img
          initial="close"
          animate="open"
          variants={imgVariants}
          loading="lazy"
          src={src}
          alt="hero section image"
          className="absolute right-1 top-2 hidden h-80 w-80 rounded-full sm:block lg:right-5 xl:right-10"
        />
      </article>
    </section>
  );
}
