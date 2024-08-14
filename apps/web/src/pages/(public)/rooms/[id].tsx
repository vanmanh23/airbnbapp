
import { useParams } from "@/router"
import LanguagesPopover from "./_components/LanguagesPopover"
import PriceCalculator from "./_components/PriceCalculator"
// import { useQuery } from "@tanstack/react-query";
// import { fetchRoom } from "@/apis/rooms";
import { cn } from "@/utils/cn";
// import { Skeleton } from "@/components/ui/skeleton";

import { Roomsdata } from '@/data/roomdata';
import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, Grip, Heart, Share } from "lucide-react";
import RoomDetails from "./_components/RoomDetails";


const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

export default function Component() {
  const [data, setData] = useState<string[] | undefined>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams("/rooms/:id");
  useEffect(() => {
    const rooms = Roomsdata.find(room => room.id === id);
    setData(rooms?.images);
  }, [data])
  
  const handleOpen = () => {
    setIsOpen(!isOpen);
  }
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const isMdScreen = useMediaQuery('(min-width: 768px)');

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (): void => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextImage();
    }

    if (touchStartX.current - touchEndX.current < -50) {
      prevImage();
    }
  };

  const nextImage = () => {
    if (data) {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (data) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div>
      <h1 className="flex gap-2 text-2xl font-medium">
        <LanguagesPopover />
        Flower Dam Garden (Flower Dam Academy) 
      </h1>
      {
        !isOpen ?
        <div className="carousel-container w-full h-72 md:h-full overflow-hidden relative" onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}>
        <div className="carousel-images relative mt-6 flex transform ease-in-out duration-200  md:grid md:grid-cols-4 md:grid-rows-2 md:gap-2 md:h-96"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {
          isMdScreen ?
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
            :
            data?.map((image, index) => (
              <div className="min-w-full box-border">

              <img
                key={index}
                src={image}
                
                />
                </div>
            ))
        }
        <div className="absolute  md:flex flex-row gap-2 p-2 bottom-4 right-4 text-black bg-white rounded-lg cursor-pointer hidden" onClick={handleOpen}>
          <Grip  /><p className="font-medium">Show all photos</p>
        </div>
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
        <div className="w-full md:w-2/3">
            <RoomDetails />
        </div>
        <div className="sticky top-10 right-0 w-1/3 h-full md:inline-block hidden">
          <PriceCalculator />
        </div>
      </div>
    </div>
  )
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