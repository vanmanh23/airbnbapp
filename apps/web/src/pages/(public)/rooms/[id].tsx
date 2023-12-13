
import { useParams } from "@/router"
import LanguagesPopover from "./_components/LanguagesPopover"
import PriceCalculator from "./_components/PriceCalculator"
import { useQuery } from "@tanstack/react-query";
import { fetchRoom } from "@/apis/rooms";
import { cn } from "@/utils/cn";
import { Skeleton } from "@/components/ui/skeleton";


export default function Component() {
  const { id } = useParams("/rooms/:id");
  
  const roomQuery = useQuery({
    queryKey: ['rooms', id],
    queryFn: () => fetchRoom(id),
    initialData: [],
  })
  if (roomQuery.isLoading) {
    return  (
      <div>
        <Skeleton className="h-8 w-3/5"/>
        <div className="mt-6 grid grid-cols-4 grid-rows-2 gap-2">
        <Skeleton className="h-96  col-span-2 row-span-2" />
        <Skeleton className="h-full w-full" />
        <Skeleton className="h-full w-full" />
        <Skeleton className="h-full w-full" />
        <Skeleton className="h-full w-full" />
      </div>
      <div className="flex justify-between mt-10">
          <div>
            <Skeleton className="h-8 w-96"/>
            <Skeleton className="h-8 w-40 mt-4"/>
          </div>
          <div className="flex flex-row gap-28">
            <div>
              <Skeleton className="h-12 w-12 rounded-full "/>
            </div>
            <div>
            <Skeleton className="h-8 w-40"/>
            <Skeleton className="h-8 w-96 mt-4"/>            
            </div>
          </div>
      </div>
      </div>
    )
  }
  return (
    <div>
      <h1 className="flex gap-2 text-2xl font-medium">
        <LanguagesPopover />
        Flower Dam Garden (Flower Dam Academy) 
      </h1>
      <div className="mt-6 grid grid-cols-4 grid-rows-2 gap-2">
        {
          roomQuery.data.map(room => (
            room.images.slice(0,5).map((image, index) => (
              <img
              key={index}
                src={image}
                className={cn({
                  'col-span-2 row-span-2': index === 0,
                  'rounded-s-xl': index === 0,
                  'rounded-tr-xl': index === 2,
                  'rounded-br-xl': index === 4,
                  'h-full': index === 0 || index === 4 || index === 2 || index === 3
                })}
              />

            ))
          ))
        }
      </div>
      <div className="flex justify-between mt-10">
        <div className="w-2/3">
            <p> hello</p>
        </div>
        <div className="w-1/3">
          <PriceCalculator />
        </div>
      </div>
    </div>
  )
}