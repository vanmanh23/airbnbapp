import { Minus, Plus } from 'lucide-react'

interface Props {
  title: string
  subtitle: string
  count: number
  onMinus: () => void
  onPlus: () => void
}

export default function GuestItem({ title, subtitle, count, onMinus, onPlus }: Props) {
  return (
    <div className="flex justify-between">
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="flex gap-3 items-center">
        <button onClick={onMinus} disabled={count === 0} className="rounded-full border p-2 disabled:opacity-30">
          <Minus />
        </button>
        <div className="w-2">{count}</div>
        <button onClick={onPlus} className="rounded-full border p-2">
          <Plus />
        </button>
      </div>
    </div>
  )
}
