import { Room } from '@/apis/rooms'
import Carousel from '@/components/ui/carousel'

interface RoomProps {
  room: Room
}

export default function RoomCard({ room }: RoomProps) {
  return (
    <div className="group cursor-pointer space-y-1">
      <Carousel images={room.images} className="rounded-xl" imgClassName="aspect-square" />
      <p className='text-black font-medium'>{room.name}</p>
      <p className='text-base text-gray-500'>{room.distance}</p>
      <p className='text-base text-gray-500'>{room.date}</p>
      <p className='text-base text-gray-500'><span className='font-semibold text-black'>${room.price}</span> night</p>     
    </div>
  )
}