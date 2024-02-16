import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex  items-center justify-center "
    >
      <input
        type="search"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search order by ID"
        className="w-10/12 rounded-full bg-highlight_1 p-1.5 pl-5 transition-all duration-500 focus:w-full focus:outline-none focus:ring focus:ring-primary_2 focus:ring-offset-1  "
      />
    </form>
  );
}
