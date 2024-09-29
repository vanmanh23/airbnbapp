import { Room } from '@/apis/rooms'
import { Skeleton } from '@/components/ui/skeleton'
import { useNavigate } from '@/router'
import RoomCard from './RoomCard'


interface Props {
  rooms: Room[]
  isLoading: boolean
}

export default function RoomList({ rooms, isLoading }: Props) {
  const navigate = useNavigate()

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

  return rooms.map((room, index) => (
    <div
      key={index}
      onClick={() => {
        navigate(`/rooms/:id`, { params: { id: room.id } } )
      }}
    >
      <RoomCard room={room} key={index}/>
    </div>
  ))
}