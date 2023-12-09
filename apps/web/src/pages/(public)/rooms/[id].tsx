
import LanguagesPopover from "./_components/LanguagesPopover"
import PriceCalculator from "./_components/PriceCalculator"


export default function Component() {


  return (
    <div>
      <h1 className="flex gap-2 text-2xl font-medium">
        <LanguagesPopover />
        Flower Dam Garden (Flower Dam Academy)
      </h1>
      <div className="mt-6 grid grid-cols-4 grid-rows-2 gap-2">
        {/* {
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
        } */}
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