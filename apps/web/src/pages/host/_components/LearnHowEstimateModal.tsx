import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

export default function LearnHowEstimateModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <a className="cursor-pointer text-center text-gray-500 underline"> Learn how we estimate your earnings </a>
      </DialogTrigger>
      <DialogContent className="p-6 pt-16 sm:max-w-[425px]">
        <h1 className="text-2xl font-bold">How we estimate your earning potential</h1>
        <p className="font-light">
          To estimate your earnings, we review the past 12 months of booking data from similar Airbnb listings. We
          choose these listings based on the information you share about your place. If you enter an address, you'll get
          a more specific estimate based on the listings closest to you. If you enter an area, we look at the top 50% of
          similar listings in that area, based on their earnings.
        </p>
      </DialogContent>
    </Dialog>
  )
}
