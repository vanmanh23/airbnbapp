import { Outlet } from "react-router-dom";
import HeaderHost from "./_components/HeaderHost";
import Footer from "@/components/Footer";

export default function Component() {
  return (
    <div className="flex flex-col w-full">
        <div className=" w-10/12 m-auto">
            <HeaderHost />
        </div>
        <div>
            <Outlet />
        </div>
        <div>
          <Footer />
        </div>
    </div>
  )
}
