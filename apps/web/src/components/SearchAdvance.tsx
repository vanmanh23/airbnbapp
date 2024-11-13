import { Search } from "lucide-react";

type searchProps = {
  searchOptions: string
}
export default function SearchAdvance({ searchOptions }: searchProps) {
  return (
    <div className="flex flex-col items-center">
        <div>
        <div className="flex rounded-full items-center border shadow-xl">
          <div className="border-r px-2 w-72 pl-9 p-3 hover:bg-gray-300 hover:rounded-full"> 
            <p className="text-xs font-semibold text-secondary-color">Where</p>  
            <p className="text-sm opacity-40">Search destinations</p>  
          </div>
          {searchOptions === "stays"
          ?
          <div className="border-r  w-36 px-2 p-3 hover:bg-gray-300 hover:rounded-full">
            <p className="text-xs font-semibold text-secondary-color">Check in</p>  
            <p className="text-sm opacity-40">Add dates</p>
          </div>
          :
          <div className="border-r px-2 w-36 p-3 hover:bg-gray-300 hover:rounded-full">
            <p className="text-xs font-semibold text-secondary-color">Date</p>  
            <p className="text-sm opacity-40">Add dates</p>
          </div>
          }
          {searchOptions === "stays"
          ?
          <div className="border-r px-2 w-36 p-3 hover:bg-gray-300 hover:rounded-full">
          <p className="text-xs font-semibold text-secondary-color">Check out</p>  
          <p className="text-sm opacity-40">Add dates</p>
          </div>
          :
          <div></div>
          }      
          <div className="px-3 w-52 p-2 hover:bg-gray-300 hover:rounded-full">
            <p className="text-xs font-semibold text-secondary-color">Who</p>  
            <p className="text-sm opacity-40">Add guests</p>
          </div>
          <div className="p-2">
          <button className="flex p-4 items-center justify-center rounded-full bg-primary text-white">
            <Search className="w-4 h-4" />
          </button>
          </div>
        </div>
        </div>
    </div>
  )
}
