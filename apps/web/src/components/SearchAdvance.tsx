import { Search } from "lucide-react";

type searchProps = {
  searchOptions: string
}
export default function SearchAdvance({ searchOptions }: searchProps) {
  return (
    <div className="flex flex-col items-center">
        <div>
        <div className="flex rounded-full items-center border  shadow-xl">
          <div className="border-r px-4 w-72 p-3 hover:bg-gray-300 hover:rounded-full"> 
            <p className="text-xs font-semibold text-secondary-color">Where</p>  
            <p className="text-sm opacity-40">Search destinations</p>  
          </div>
          {searchOptions === "stays"
          ?
          <div className="border-r  w-36 px-4 p-3 hover:bg-gray-300 hover:rounded-full">
            <p className="text-xs font-semibold text-secondary-color">Check in</p>  
            <p className="text-sm opacity-40">Add dates</p>
          </div>
          :
          <div className="border-r px-4 w-36 p-3 hover:bg-gray-300 hover:rounded-full">
            <p className="text-xs font-semibold text-secondary-color">Date</p>  
            <p className="text-sm opacity-40">Add dates</p>
          </div>
          }
          {searchOptions === "stays"
          ?
          <div className="border-r px-4 w-36 p-3 hover:bg-gray-300 hover:rounded-full">
          <p className="text-xs font-semibold text-secondary-color">Check out</p>  
          <p className="text-sm opacity-40">Add dates</p>
          </div>
          :
          <div></div>
          }      
          <div className="px-4 w-52 p-3 hover:bg-gray-300 hover:rounded-full">
            <p className="text-xs font-semibold text-secondary-color">Who</p>  
            <p className="text-sm opacity-40">Add guests</p>
          </div>
          <button className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
            <Search className="w-8" />
          </button>
        </div>
        </div>
    </div>
  )
}
