import { Link } from "react-router-dom";
import { navbar } from "../../constants/constants";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  close: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
const parentVariants: Variants = {
  open: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  close: {
    clipPath: "inset(10% 50% 90% 50%)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};
export default function Header() {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (window.screen.width >= 640) setToggle(true);
  }, []);
  return (
    <header className="flex items-center justify-center bg-highlight_1 py-5 lg:py-10">
      <nav className="contain flex items-center justify-between sm:flex-col sm:justify-center sm:gap-5 lg:flex-row lg:justify-between lg:gap-0">
        <figure>
          <Link to={"/"}>
            <img src="/icons&images\Logo.svg" alt="little lemon logo" />
          </Link>
        </figure>
        <motion.div
          initial={false}
          animate={toggle ? "open" : "close"}
          className="relative flex flex-col items-center justify-center"
        >
          <button
            className="flex flex-col items-center justify-center gap-1.5 sm:hidden"
            onClick={() => setToggle((prevState) => !prevState)}
          >
            {Array.from({ length: 3 }, (_, i) => i).map((index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: index * 0.1 + 1, type: "spring" },
                }}
                animate={
                  index === 0 && toggle
                    ? { translateY: 10, rotate: 45 }
                    : index === 2 && toggle
                      ? { translateY: -10, rotate: -45 }
                      : index === 1 && toggle
                        ? { scale: 0, rotate: 180 }
                        : {}
                }
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  duration: 1.5,
                }}
                viewport={{ once: true }}
                className={` h-1 w-10 rounded-full bg-primary_1`}
              />
            ))}
          </button>
          <motion.ul
            variants={parentVariants}
            className="absolute top-16 z-50 flex flex-col items-center justify-center gap-5 rounded-full bg-highlight_1 px-1 py-5 text-highlight_2 sm:relative sm:top-auto sm:flex-row sm:gap-10 sm:bg-primary_1 sm:px-10 sm:py-1.5  sm:text-primary_2"
          >
            {navbar.map((item) => (
              <motion.li key={item.name} variants={itemVariants}>
                <Link to={item.path}>
                  <span className="text-2xl sm:hidden">{item.icon}</span>
                  <span className="hidden sm:block sm:text-xs sm:font-semibold sm:uppercase lg:text-sm">
                    {item.name}
                  </span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </nav>
    </header>
  );
}
