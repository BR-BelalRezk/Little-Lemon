import { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function YellowLink({
  children,
  to,
}: {
  children: ReactNode;
  to: string;
}) {
  return (
    <Link
      to={to}
      className="flex items-center justify-center gap-3 rounded-full bg-primary_2 px-5 py-0.5 font-bold text-highlight_2 transition-all duration-500 hover:bg-secondary_1 hover:text-secondary_2"
    >
      {children}
    </Link>
  );
}
