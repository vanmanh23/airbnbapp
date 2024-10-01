import { AlignJustify, User2 } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import LoginModal from "./modals/LoginModal";

import WinterReleaseModal from "./modals/WinterReleaseModal";
import { Link } from "react-router-dom";
import SignupModal from "@/pages/(public)/_components/SignupModal";

export default function UserProfilePopover() {
  const access_tocken = localStorage.getItem("token");
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center justify-center gap-3 h-12 rounded-full px-3 border-solid border-2 shadow-xl">
          <AlignJustify className="w-4" />
          <div className="flex h-8 w-8 items-end justify-center rounded-full bg-secondary-color text-white">
            <User2 color="white" className="text-black" />
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-60 text-sm" align="end">
        <WinterReleaseModal />
        <hr />

        {access_tocken ? (
          <p className="my-2 w-full cursor-pointer p-3  text-muted-foreground hover:bg-gray-100" 
            onClick={() => {localStorage.removeItem("token");
                             window.location.reload();}}>
            Log out
          </p>
        ) : (
          <div>
            <SignupModal />
            <hr />
            <LoginModal title="Log in" />
          </div>
        )}
        <hr />
        <Link to="/giftcards">
          <div className="my-2 w-full cursor-pointer p-3  text-muted-foreground hover:bg-gray-100">
            Gift cards
          </div>
        </Link>
        <Link to="/host/homes">
          <div className="my-2 w-full cursor-pointer p-3  text-muted-foreground hover:bg-gray-100">
            Airbnb your home
          </div>
        </Link>
        <Link to="/help">
          <div className="my-2 w-full cursor-pointer p-3  text-muted-foreground hover:bg-gray-100">
            Help Centre
          </div>
        </Link>
      </PopoverContent>
    </Popover>
  );
}
