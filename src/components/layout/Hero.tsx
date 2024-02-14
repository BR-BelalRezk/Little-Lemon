import { Link } from "react-router-dom";

export default function Hero({text , path , src} : {text : JSX.Element , path: string , src:string}) {
  return (
    <section className="bg-primary_1 flex items-center justify-center ">
        <article className="contain flex items-start justify-start gap-3 relative flex-col py-5">
            <div>
                <h1 className=" text-primary_2 text-5xl font-semibold">Little Lemon</h1>
                <h2 className=" text-secondary_2 text-3xl font-medium">Chicago</h2>
            </div>
                <p className="text-highlight_1 font-medium">Little-Lemon is a family-owned<br />mediterranean restaurant,
                focused on<br />traditional recipes served with a<br />modern twist
                </p>
            <Link to={path} className="bg-primary_2 text-highlight_2 font-bold rounded-full px-3 py-1 flex items-center justify-center gap-3">
                {text}
            </Link>
            <img src={src} alt="hero section image" className="hidden sm:block rounded-full w-80 h-80 absolute right-1 top-2 lg:right-5"/>
        </article>
    </section>
  )
}
