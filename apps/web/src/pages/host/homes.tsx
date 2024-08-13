import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import GoogleMapReact from 'google-map-react'
import AirbnbIt from './_components/AirbnbIt'
import Marker from './_components/Marker'
import { ROOMS } from '@/utils/data'
import AirbnbSetup from './_components/AirbnbSetup'
import AirbnbApartments from './_components/AirbnbApartments'
import Aircover from './_components/Aircover'
import StillHaveQuestion from './_components/StillHaveQuestion'

export default function Components() {
  return (
    <>
      <div className="m-auto flex items-center max-w-7xl justify-between py-32">
        <div className="w-1/2 text-center">
          <AirbnbIt />
        </div>
        <div className="h-150 w-1/2 rounded-xl [&>div>div]:rounded-2xl [&_.gm-control-active]:rounded-2xl">
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
      {/*  */}
      <div>
          <AirbnbSetup />
      </div>
      <div className='my-16'>
        <AirbnbApartments />
      </div>
      <div>
        <Aircover />
      </div>
      {/*  */}
      <div className="bg-gray-100 w-full mt-12">
        <div className="flex flex-row w-screen justify-between bg-red p-20">
          <h1 className="text-5xl font-bold">
            Your questions, <br /> answered
          </h1>
          <Accordion type="multiple" className="w-1/2">
            <AccordionItem value="item-1">
              <AccordionTrigger className='font-normal'>Is my place right for Airbnb?</AccordionTrigger>
              <AccordionContent className='text-lg'>
                Airbnb guests are interested in all kinds of places. We have listings for tiny homes, cabins,
                treehouses, and more. Even a spare room can be a great place to stay.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className='font-normal'>Do I have to host all the time?</AccordionTrigger>
              <AccordionContent className='text-lg'>
              Not at all—you control your calendar. You can host once a year, a few nights a month, or more often.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className='font-normal'>How much should I interact with guests?</AccordionTrigger>
              <AccordionContent className='text-lg'>
              It’s up to you. Some Hosts prefer to message guests only at key moments—like sending a short note when they check in—while others also enjoy meeting their guests in person. You’ll find a style that works for you and your guests.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className='font-normal'>Any tips on being a great Airbnb Host?</AccordionTrigger>
              <AccordionContent className='text-lg'>
                <p>Getting the basics down goes a long way. Keep your place clean, respond to guests promptly, and provide necessary amenities, like fresh towels. Some Hosts like adding a personal touch, such as putting out fresh flowers or sharing a list of local places to explore—but it’s not required.</p>
                <a href="https://www.airbnb.com/resources/hosting-homes/g/discovering-the-world-of-hosting-2">Read on for more hosting tips</a>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className='font-normal'>What are Airbnb’s fees?</AccordionTrigger>
              <AccordionContent className='text-lg'>
                <p>Airbnb typically collects a flat service fee of 3% of the reservation subtotal when you get paid. We also collect a fee from guests when they book. In many areas, Airbnb collects and pays sales and tourism taxes automatically on your behalf as well.</p>
                <a href="https://www.airbnb.com/resources/hosting-homes/a/how-much-does-airbnb-charge-hosts-288">Learn more about fees</a>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className='bg-gray-100 pb-12'>
        <StillHaveQuestion />
      </div>
    </>
  )
}
