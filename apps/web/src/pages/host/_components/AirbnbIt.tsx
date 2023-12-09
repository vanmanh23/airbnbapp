import { Slider } from '@/components/ui/slider'
import { cn } from '@/utils/cn'
import { formatNumber } from '@/utils/number'
import { useState } from 'react'
import FlipNumbers from 'react-flip-numbers'
import LearnHowEstimateModal from './LearnHowEstimateModal'

export default function AirbnbIt() {
  const [sliderValue, setSliderValue] = useState([1])
  const [isSliderChanged, setIsSliderChanged] = useState(false)

  return (
    <>
      <h2 className="text-4xl font-bold text-primary">Airbnb it.</h2>
      <p className="mb-6 text-4xl  font-bold">You could earn</p>
      <p className="text-5xl font-bold">
        <FlipNumbers
          height={48}
          width={40}
          color="black"
          play
          numberStyle={{
            fontSize: 48,
            fontWeight: 700
          }}
          numbers={formatNumber.format(sliderValue[0] * 48)}
        />
      </p>
      <p
        className={cn('my-9 font-light opacity-100 transition ease-in-out', {
          'opacity-0': isSliderChanged
        })}
      >
        <span className="font-bold underline">{sliderValue} nights </span> at an estimated $48 a night
      </p>
      <Slider
        defaultValue={[1]}
        max={30}
        min={1}
        value={sliderValue}
        step={1}
        className="m-auto mb-7 mt-12 w-96"
        onValueChange={value => {
          setSliderValue(value)
          setIsSliderChanged(true)
        }}
        tooltipValue={`${sliderValue} nights`}
        onValueCommit={() => {
          setIsSliderChanged(false)
        }}
      />
      <LearnHowEstimateModal />
    </>
  )
}
