import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronRight, Star } from "lucide-react";

export default function RoomDetails() {
  return (
    <div className="flex flex-col gap-7">
      <div>
        <h2 className="font-medium text-2xl">
          Entire villa in Abiansemal, Indonesia
        </h2>
        <p className="text-lg">4 guests2 bedrooms2 beds2 baths</p>
        <div className="flex flex-row gap-2 mt-2">
          <Star />
          <p className="font-bold text-lg">4.68 · 288 reviews</p>
        </div>
      </div>
      <hr />
      <div className="flex flex-row gap-6 items-center">
        <div>
          <div className="w-10 h-10 rounded-full bg-yellow-500"></div>
        </div>
        <div>
          <p className="font-semibold text-lg">Hosted by Wayan</p>
          <p>Superhost 5 years hosting</p>
        </div>
      </div>
      <hr />
      <div className="">
        <div className="flex flex-row gap-8">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                height: "24px",
                width: "24px",
                fill: "currentcolor",
              }}
            >
              <path d="M2 4a1 1 0 0 1 1.62-.78l.09.07 25 25a1 1 0 0 1-.6 1.7L28 30H3a1 1 0 0 1-1-.88V29zm2 2.42V28h21.59l-4.09-4.09-1.8 1.8-1.4-1.42 1.78-1.8-2.58-2.58-1.8 1.8-1.4-1.42 1.78-1.8-2.58-2.58-1.8 1.8-1.4-1.42 1.78-1.8-2.58-2.58-1.8 1.8-1.4-1.42 1.78-1.8zM7 17a1 1 0 0 1 1.62-.78l.09.07 7 7a1 1 0 0 1-.6 1.7L15 25H8a1 1 0 0 1-1-.88V24zm5.3-15.2a1 1 0 0 1 1.31-.09l.1.08 15.5 15.5a1 1 0 0 1 .15.2l.05.1 2 4.5a1 1 0 0 1-1.1 1.4l-.1-.03-5-1.5a1 1 0 0 1-.32-.17l-.1-.08L9.3 6.2a1 1 0 0 1-.08-1.32l.08-.1zM9 19.4V23h3.58zm7.25-12.25-1.58 1.59L26.02 20.1l2.67.8-1.04-2.33zM13 3.91 11.42 5.5l1.83 1.83 1.58-1.58z"></path>
            </svg>
          </div>
          <div className="w-1/3">
            <h3 className="font-semibold">Designed by</h3>
            <p className="opacity-80 text-sm">
              Ibuku Bamboo Architecture and Design
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                height: "24px",
                width: "24px",
                fill: "currentcolor",
              }}
            >
              <path d="M1.67 2.68A2 2 0 0 1 4.1.72l.14.04L16.01 4.3 27.78.91a2 2 0 0 1 2.53 1.63l.02.14v23.25a2 2 0 0 1-1.27 1.85l-.15.06-12.62 3.78a1 1 0 0 1-.46.03l-.12-.03L3.1 27.84a2 2 0 0 1-1.42-1.75v-.17zm2 0v23.24L16 29.62l12.33-3.7V2.82L16.28 6.3a1 1 0 0 1-.46.03l-.1-.03zm21.66 17.48v2.08L16 25.04v-2.08zm0-6v2.08L16 19.04v-2.08zm0-6v2.08L16 13.04v-2.08z"></path>
            </svg>
          </div>
          <div className="w-1/3">
            <h3 className="font-semibold">Featured in</h3>
            <p className="opacity-80 text-sm">
              Condé Nast Traveler, October 2019 Home Crux, August 2019
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                height: "24px",
                width: "24px",
                fill: "currentcolor",
              }}
            >
              <path d="M11.67 0v1.67h8.66V0h2v1.67h6a2 2 0 0 1 2 1.85v16.07a2 2 0 0 1-.46 1.28l-.12.13L21 29.75a2 2 0 0 1-1.24.58H6.67a5 5 0 0 1-5-4.78V3.67a2 2 0 0 1 1.85-2h6.15V0zm16.66 11.67H3.67v13.66a3 3 0 0 0 2.82 3h11.18v-5.66a5 5 0 0 1 4.78-5h5.88zm-.08 8h-5.58a3 3 0 0 0-3 2.82v5.76zm-18.58-16h-6v6h24.66v-6h-6v1.66h-2V3.67h-8.66v1.66h-2z"></path>
            </svg>
          </div>
          <div className="w-1/3">
            <h3 className="font-semibold">Free cancellation before Aug 27</h3>
            <p className="opacity-80 text-sm">
              Get a full refund if you change your mind.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-7">
        <div>
          <div className="p-4 text-lg bg-gray-100 rounded-md">
            <p>
              Some info has been automatically translated.{" "}
              <span className="font-medium underline opacity-90">
                Show original
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <p className="opacity-80">
              Enjoy a relaxing time in this sustainable treehouse with a sense
              of unity with nature.From treehouses overlooking the 360-degree
              jungle to the aero house in luxurious spaces, you can fully
              experience the charm of Okinawa's Yanbaru forest.We also provide
              fire dinner, sauna, body treatments, river trekking, 8 wheel
              vehicle adventure tour and more as an option as an option.Please
              note that the room is located at an altitude, and children under
              10 will not be able to stay for the safety of your guests.
            </p>
          </div>
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex flex-row items-center">
                  <p className="underline cursor-pointer font-medium text-lg decoration-slice">
                    Show more
                  </p>{" "}
                  <ChevronRight />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[780px]">
                <div className="flex flex-col gap-5 p-5">
                    <div className="flex flex-col gap-5">
                        <h2 className="font-medium text-2xl">
                        About this space 
                        </h2>
                        <p className="opacity-80 text-lg">Enjoy a relaxing time in this sustainable treehouse with a sense of unity with nature.From treehouses overlooking the 360-degree jungle to the aero house in luxurious spaces, you can fully experience the charm of Okinawa's Yanbaru forest.We also provide fire dinner, sauna, body treatments, river trekking, 8 wheel vehicle adventure tour and more as an option as an option.Please note that the room is located at an altitude, and children under 10 will not be able to stay for the safety of your guests.</p>
                    </div>
                    <div>
                    <h3 className="font-medium text-lg">The space</h3>
                    <p className="opacity-80 text-lg">There are two people in the king size bed in the aero house, two on the sofa (with sheets and comforters), and a total of 6 people in the sofa (with sheets and comforters) in the treehouse, but the hot water is used at night to use a sustainable water heater to make hot water using electricity at night, so there is only a shower for 4 people per day (about 40 minutes) + 1 amount of hot water.Only those who agree to the amount of hot water must be booked for 6 people.</p>
                    </div>
                    <div>
                        <h3 className="font-medium text-lg opacity-80">Registration number</h3>
                        <p>Hotels and Inns Business Act | 北部保健所 | 北保第 Ｒ3 - 50 号</p>
                    </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <hr />
      <div>

      </div>
    </div>
  );
}
