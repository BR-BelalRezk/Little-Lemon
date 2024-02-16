import { ReactNode } from "react";

export default function YellowButton({
  onClick,
  children,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`${className} rounded-full bg-primary_2  py-0.5  font-bold text-highlight_2 transition-all duration-500 hover:bg-secondary_1 hover:text-secondary_2`}
    >
      {children}
    </button>
  );
}
