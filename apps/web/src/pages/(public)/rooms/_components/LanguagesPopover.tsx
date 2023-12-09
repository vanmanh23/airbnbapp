import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Languages, X } from 'lucide-react'

export default function LanguagesPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Languages size={30} className="cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent className="relative bg-[#222] p-3 text-sm text-white" align="end">
        <div className="absolute -top-1 left-1/2 h-3 w-3 rotate-45 bg-[#222]"> </div>
        <PopoverClose className="absolute right-2 top-2">
          <X />
        </PopoverClose>
        The title of this stay has been automatically translated.
      </PopoverContent>
    </Popover>
  )
}
