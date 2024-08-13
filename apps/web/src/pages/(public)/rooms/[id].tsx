
import { useParams } from "@/router"
import LanguagesPopover from "./_components/LanguagesPopover"
import PriceCalculator from "./_components/PriceCalculator"
// import { useQuery } from "@tanstack/react-query";
// import { fetchRoom } from "@/apis/rooms";
import { cn } from "@/utils/cn";
// import { Skeleton } from "@/components/ui/skeleton";

import { Roomsdata } from '@/data/roomdata';
import { useEffect, useState } from "react";
import { ChevronLeft, Grip, Heart, Share } from "lucide-react";
import RoomDetails from "./_components/RoomDetails";

export default function Component() {
  const [data, setData] = useState<string[] | undefined>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams("/rooms/:id");
  // console.log("id la: ", id)
  useEffect(() => {
    const rooms = Roomsdata.find(room => room.id === id);
    setData(rooms?.images);
  }, [data])
  
  const handleOpen = () => {
    setIsOpen(!isOpen);
  }
    // setData(roomdetail?.images ?? []);
  // console.log("roomdetail: ", rooms?.images);

  // const roomQuery = useQuery({
  //   queryKey: ['rooms', id],
  //   queryFn: () => fetchRoom(id),
  //   initialData: [],
  // })
  // if (roomQuery.isLoading) {
  //   return  (
  //     <div>
  //       <Skeleton className="h-8 w-3/5"/>
  //       <div className="mt-6 grid grid-cols-4 grid-rows-2 gap-2">
  //       <Skeleton className="h-96  col-span-2 row-span-2" />
  //       <Skeleton className="h-full w-full" />
  //       <Skeleton className="h-full w-full" />
  //       <Skeleton className="h-full w-full" />
  //       <Skeleton className="h-full w-full" />
  //     </div>
  //     <div className="flex justify-between mt-10">
  //         <div>
  //           <Skeleton className="h-8 w-96"/>
  //           <Skeleton className="h-8 w-40 mt-4"/>
  //         </div>
  //         <div className="flex flex-row gap-28">
  //           <div>
  //             <Skeleton className="h-12 w-12 rounded-full "/>
  //           </div>
  //           <div>
  //           <Skeleton className="h-8 w-40"/>
  //           <Skeleton className="h-8 w-96 mt-4"/>            
  //           </div>
  //         </div>
  //     </div>
  //     </div>
  //   )
  // }
  return (
    <div>
      <h1 className="flex gap-2 text-2xl font-medium">
        <LanguagesPopover />
        Flower Dam Garden (Flower Dam Academy) 
      </h1>
      {
        !isOpen ? <div className="relative mt-6 grid grid-cols-4 grid-rows-2 gap-2 h-96">
        {
            data?.slice(0,5).map((image, index) => (
              <img
              key={index}
                src={image}
                className={cn({
                  'col-span-2 row-span-2': index === 0,
                  'rounded-s-xl': index === 0,
                  'rounded-tr-xl': index === 2,
                  'rounded-br-xl': index === 4,
                  'h-full': index === 0 || index === 4 || index === 2 || index === 3 || index === 1,
                  'w-full': index === 0 || index === 4 || index === 2 || index === 3 || index === 1
                })}
              />

            ))
        }
        <div className="absolute flex flex-row gap-2 p-2 bottom-4 right-4 text-black bg-white rounded-lg cursor-pointer" onClick={handleOpen}>
          <Grip  /><p className="font-medium">Show all photos</p>
        </div>
      </div>
      :
      <div className="absolute -top-5 left-0 p-10 z-50 bg-white mt-6 w-full flex flex-col justify-center gap-5 items-center">
        <div className='sticky top-0 left-0 flex flex-row justify-between items-center w-full'>
          <div onClick={handleOpen} className="cursor-pointer hover:bg-slate-100 p-2 rounded-full"><ChevronLeft /></div>
          <div className="flex flex-row gap-4">
              <div className="flex flex-row items-center gap-2">
                <Share />
                <p className="underline decoration-slice">Share</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Heart />
                <p className="underline decoration-slice">Save</p>
              </div>
          </div>
        </div>
        <div className="grid grid-cols-1  gap-2">
        {
            data?.map((image, index) => (
              <img
              key={index}
                src={image}
                
              />
            ))
        }
        </div>
        </div>
      }
      
      <div className="relative flex justify-between mt-10 gap-20">
        <div className="w-2/3">
            <RoomDetails />
        </div>
        <div className="sticky top-10 right-0 w-1/3 h-full">
          <PriceCalculator />
        </div>
      </div>
    </div>
  )
}