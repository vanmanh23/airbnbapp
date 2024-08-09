import { Outlet } from "react-router-dom";
import HeaderHost from "./_components/HeaderHost";

export default function Component() {
  return (
    <div className="flex flex-col w-11/12 m-auto">
        <div>
            <HeaderHost />
        </div>
        <div>
            <Outlet />
        </div>
    </div>
  )
}
