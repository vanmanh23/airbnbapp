import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import GuestItem from './GuestItem'

export default function GuestSelector() {
  const [adult, setAdult] = useState(1)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(5)
  return (
    <Popover>
      <PopoverTrigger className="w-full [&_svg]:data-[state=open]:rotate-180">
        <div className="flex justify-between border p-2">
          <div>
            {adult + children} guest, {infants} infants
          </div>
          <ChevronDown />
        </div>
      </PopoverTrigger>
      <PopoverContent side="bottom" className="w-[var(--radix-popover-trigger-width)] p-3">
        <div className="space-y-4">
          <GuestItem
            title="Adults"
            subtitle="Age 13+"
            count={adult}
            onPlus={() => setAdult(adult => adult + 1)}
            onMinus={() => setAdult(adult => adult - 1)}
          />
          <GuestItem
            title="Children"
            subtitle="Ages 2–12"
            count={children}
            onPlus={() => setChildren(children => children + 1)}
            onMinus={() => setChildren(children => children - 1)}
          />
          <GuestItem
            title="Infants"
            subtitle="Under 2"
            count={infants}
            onPlus={() => setInfants(infants => infants + 1)}
            onMinus={() => setInfants(infants => infants - 1)}
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}
