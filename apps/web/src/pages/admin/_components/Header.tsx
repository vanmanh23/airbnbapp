import { Input } from "@/components/ui/input";
import { AlignJustify, BellRing, ChevronDown, Search } from "lucide-react";
import { useState } from "react";

type Callback = (show: boolean) => void;

interface HeaderProps {
  callback: Callback;
}

export default function Header({ callback }: HeaderProps){
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
    callback(show); // Calling the callback with the current value of 'show'
  };

  return (
    <div className="flex flex-row items-center justify-between px-3 py-5">
      <div className="flex justify-between items-center max-w-md w-full gap-3">
        <div className="border-r-0 ">
          <AlignJustify className="cursor-pointer" onClick={handleClick}/>
        </div>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="email" placeholder="Search" className="h-8 "/>
          <button type="submit" className=""><Search className="text-primary"                                   /></button>
        </div>
      </div>
      <div className="flex flex-row items-center max-w-xs w-64 mx-7 justify-between">
        <div><BellRing /></div>
        <div className="flex items-center flex-row gap-4">
          <div className="flex items-center space-x-2 w-10 h-10 rounded-full bg-primary">
         </div>
          <div className="md:flex flex-col items-center hidden">
            <div>name</div>
            <div>chuc vu</div>
          </div>
          <div>
            <p><ChevronDown /></p>
          </div>
        </div>
      </div>
    </div>
  );
}
