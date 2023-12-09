import { fetchRooms } from "@/apis/rooms"
import { useQuery } from "@tanstack/react-query"
import { useRef } from "react"
import { useSearchParams } from "react-router-dom"


export default function Component() {
  const [searchParams] = useSearchParams()
  const categoryListRef = useRef<HTMLDivElement>(null)
  function onLeftClick() {
    if (!categoryListRef.current) return
    const rect = categoryListRef.current.getBoundingClientRect()
    categoryListRef.current.scroll({
      behavior: 'smooth',
      left: rect.width * -1
    })
  }

  const categoriesQuery = useQuery({
    queryKey: ['rooms'],
    queryFn: fetchRooms(),
    initialData: [],
  })

  const roomTag = searchParams.get('room_tag') ?? categoriesQuery.data[0]?.id

  const roomsQuery = useQuery({
    queryKey: ['rooms', roomTag],
    queryFn: ({ queryKey }) => fetchRooms(queryKey[1]),
    initialData: []
  })

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