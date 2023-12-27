import { Outlet } from "react-router-dom";
import Header from "./_components/Header";


export default function Component() {
  return (
    <div>
      <Header />
      <hr />
      <div className="px-6 py-5 sm:px-10 2xl:px-20">
        <Outlet />
      </div>

    </div>
  )
}
