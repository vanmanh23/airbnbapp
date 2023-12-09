import Carousel from '@/components/ui/carousel'
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/utils/cn'
import { Room } from '@/utils/type'
import { X } from 'lucide-react'
import { useState } from 'react'

interface MarkerProps {
  room: Room
  lat: number
  lng: number
}

export default function Marker({ room }: MarkerProps) {
  const [open, setOpen] = useState(false)
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          className={cn('w-fit rounded-xl bg-white p-2 text-xs font-bold', {
            'bg-black text-white': open
          })}
        >
          ${room.price}
        </button>
      </PopoverTrigger>
      <PopoverContent className="group relative w-80 border-none p-0 text-xs" align="end">
        <PopoverClose className="absolute left-4 top-4 z-50 rounded-full bg-slate-400 p-1 text-white">
          <X size={16} />
        </PopoverClose>
        <Carousel images={room.images} className="h-60 rounded-tl-xl rounded-tr-xl" />
        <p className="p-2 font-bold">{room.name}</p>
      </PopoverContent>
    </Popover>
  )
}
