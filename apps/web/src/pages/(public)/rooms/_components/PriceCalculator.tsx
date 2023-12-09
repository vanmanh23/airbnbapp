import { Button } from "@/components/ui/button";
import GuestSelector from "./GuestSelector";
import { DateRangePicker } from "@/components/ui/date-range-picker";

export default function PriceCalculator() {
  return (
    <div className="w-full rounded-lg border p-6 shadow-xl">
      <p className='mb-3'> $66 night </p>
      <DateRangePicker />
      <GuestSelector />
      <Button className="w-full mt-4" size="lg">
        Continue
      </Button>
    </div>
  )
}
