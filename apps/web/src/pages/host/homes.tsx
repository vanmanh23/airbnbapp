import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import GoogleMapReact from 'google-map-react'
import AirbnbIt from './_components/AirbnbIt'
import Marker from './_components/Marker'
import { ROOMS } from '@/utils/data'

export default function Components() {
  return (
    <>
      <div className="m-auto flex max-w-7xl justify-between py-32">
        <div className="w-1/2 text-center">
          <AirbnbIt />
        </div>
        <div className="h-160 w-1/2 rounded-xl [&>div>div]:rounded-2xl [&_.gm-control-active]:rounded-2xl">
          <GoogleMapReact
            bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_API_KEY }}
            defaultCenter={{
              lat: 16.0831491,
              lng: 108.2431217
            }}
            defaultZoom={8}
            options={{
              fullscreenControl: false,
              styles: [
                {
                  featureType: 'administrative',
                  elementType: 'geometry',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'administrative.land_parcel',
                  elementType: 'labels',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'poi',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'poi',
                  elementType: 'labels.text',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'road',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'road',
                  elementType: 'labels.icon',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'road.local',
                  elementType: 'labels',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                },
                {
                  featureType: 'transit',
                  stylers: [
                    {
                      visibility: 'off'
                    }
                  ]
                }
              ]
            }}
          >
            {ROOMS.map(room => (
              <Marker key={room.id} lat={16.0831491} lng={108.2431217} room={room} />
            ))}
          </GoogleMapReact>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="m-auto flex max-w-7xl justify-between bg-gray-100 py-32">
          <h1 className="text-4xl">
            Your questions, <br /> answered
          </h1>
          <Accordion type="multiple" className="w-1/2">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is my place right for Airbnb?</AccordionTrigger>
              <AccordionContent>
                Airbnb guests are interested in all kinds of places. We have listings for tiny homes, cabins,
                treehouses, and more. Even a spare room can be a great place to stay.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  )
}
