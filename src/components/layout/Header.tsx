import { Link } from "react-router-dom";
import { navbar } from "../../constants/constants";
import { useEffect, useState } from "react";
import {motion , Variants} from "framer-motion"
const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    close: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };
  const parentVariants : Variants = {
    open: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.3,
        staggerChildren: 0.05
      }
    },
    close: {
      clipPath: "inset(10% 50% 90% 50%)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3
      }
    }
  }
export default function Header() {
const [toggle , setToggle] = useState(false)
useEffect(() => {
    if(window.screen.width >= 640) setToggle(true)
} , [])
  return (
    <header className="py-5 sm:py-10 flex items-center justify-center bg-highlight_1 ">
        <nav className="flex items-center justify-between contain">
        <figure>
            <Link to={'/'}>
                <img src="/icons&images\Logo.svg" alt="little lemon logo"/>
            </Link>
        </figure>
        <motion.div initial={false} animate={toggle ? "open" : "close"} className="relative flex items-center justify-center flex-col">
            <button className="sm:hidden items-center justify-center gap-1.5 flex-col flex" onClick={() => setToggle(prevState => ! prevState)}>
                {Array.from({length:3} , (_,i) => i).map(index => <motion.span key={index} 
                initial={{opacity:0 , x:-25}}
                whileInView={{opacity:1 , x:0 , transition:{delay: index*0.1+1 , type:'spring'}}}
                animate={index === 0 && toggle ? {translateY:10 , rotate:45} : index === 2 && toggle ? {translateY:-10 , rotate:-45} : index === 1 && toggle ? {scale:0 , rotate:180} : {}}
                transition={{type:"spring" , stiffness:200 , damping:20 , duration:1.5}}
                className={` bg-primary_1 h-1 w-10 rounded-full`}/>)}
            </button>
            <motion.ul variants={parentVariants} className="z-50 rounded-full sm:rounded-none py-5 px-1 sm:py-0 sm:px-1 bg-highlight_1 sm:bg-transparent text-highlight_2 absolute sm:relative sm:top-auto top-16 flex items-center justify-center flex-col sm:flex-row gap-5">
                {navbar.map(item => <motion.li key={item.name} variants={itemVariants}>
                    <Link to={item.path}>
                        <span className="sm:hidden text-2xl">{item.icon}</span>
                        <span className="hidden sm:block sm:uppercase sm:font-semibold">{item.name}</span>
                    </Link>
                </motion.li>)}
            </motion.ul>
        </motion.div>
        </nav>
    </header>
  )
}
