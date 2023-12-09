import LanguagesPopover from "./LanguagesPopover";
import PriceCalculator from "./PriceCalculator";
import { Room } from "@/apis/rooms";
import { cn } from "@/utils/cn";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  rooms: Room[]
  isLoading: boolean
}

export default function RoomDetail({rooms, isLoading}: Props) {

  // const {idcurrency} =useParams<{id: string}>();
  if (isLoading) {
    return new Array(20).fill(0).map(() => (
      <div className="group cursor-pointer space-y-1">
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-24" />
      </div>
    ))
  }
  return (
    <div>
      <h1 className="flex gap-2 text-2xl font-medium">
        <LanguagesPopover />
        Flower Dam Garden (Flower Dam Academy)
      </h1>
      <div className="mt-6 grid grid-cols-4 grid-rows-2 gap-2">
        {
          rooms.map(room => (
            <div key={room.id}>
              if(room.id === idcurrency) {
                room.images.slice(0, 5).map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    className={cn({
                      'col-span-2 row-span-2': index === 0,
                      'rounded-s-xl': index === 0,
                      'rounded-tr-xl': index === 2,
                      'rounded-br-xl': index === 4
                    })}
                  />
                ))
              }
            </div>
          ))
        }
      </div>
      <div className="flex justify-between mt-10">
        <div className="w-2/3">
            Hello
        </div>
        <div className="w-1/3">
          <PriceCalculator />
        </div>
      </div>
    </div>
  )
}