import { Outlet } from "react-router-dom";
import Header from "./Header";
export default function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="">
        <Outlet />
      </main>
      <footer className="flex items-center justify-center bg-highlight_1 py-3">
        <div className="contain">
          <div className="flex items-center justify-between">
            <img src="/icons&images/footer.png" alt="" width={30} height={30} />
            <pre className="rounded-full bg-primary_1 px-3 py-1 text-xs text-primary_2 sm:text-sm lg:text-base">
              Copyright &copy; Little Lemon
            </pre>
          </div>
        </div>
      </footer>
    </div>
  );
}
