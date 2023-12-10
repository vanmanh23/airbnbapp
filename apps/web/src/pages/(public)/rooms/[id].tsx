
import { useParams } from "@/router"
import LanguagesPopover from "./_components/LanguagesPopover"
import PriceCalculator from "./_components/PriceCalculator"
import { useQuery } from "@tanstack/react-query";
import { fetchRoom } from "@/apis/rooms";
import { cn } from "@/utils/cn";


export default function Component() {
  const { id } = useParams("/rooms/:id");

  const roomQuery = useQuery({
    queryKey: ["rooms", id],
    queryFn: () => fetchRoom(id)
  })
  if(roomQuery.data) {
    console.log(roomQuery.data);
    // Rest of the code that depends on roomQuery.data
  }
  console.log(roomQuery.data)
  return (
    <div>
      <h1 className="flex gap-2 text-2xl font-medium">
        <LanguagesPopover />
        Flower Dam Garden (Flower Dam Academy)
      </h1>
      <div className="mt-6 grid grid-cols-4 grid-rows-2 gap-2">
        {
          roomQuery?.data?.images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                className={cn({
                  'col-span-2 row-span-2': index === 0,
                  'rounded-s-xl': index === 0,
                  'rounded-tr-xl': index === 2,
                  'rounded-br-xl': index === 4
                })}
              />
            </div>
            // <div key={room.id}>
            //   if(room.id === idcurrency) {
            //     room.images.slice(0, 5).map((image, index) => (
            //       <img
            //         key={image}
            //         src={image}
            //         className={cn({
            //           'col-span-2 row-span-2': index === 0,
            //           'rounded-s-xl': index === 0,
            //           'rounded-tr-xl': index === 2,
            //           'rounded-br-xl': index === 4
            //         })}
            //       />
            //     ))
            //   }
            // </div>
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