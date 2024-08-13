import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Minus, Plus, Search } from "lucide-react";
import { useState } from "react";

export default function ChooseAddress() {
    const [plusNumber, setPlusNumber] = useState(2);
    const handleMinusClick = () => {
        if (plusNumber > 0) {
            setPlusNumber(plusNumber - 1);
        }
    }
    const handlePlusClick = () => {
        if (plusNumber < 5) {
            setPlusNumber(plusNumber + 1);
        }
    }
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex flex-row w-4/6 m-auto rounded-3xl items-center  gap-4 px-4 py-2 border-solid border-2">
            <div className="text-primary">
              <Search />
            </div>
            <div className="items-center text-start w-fit">
              <h2 className="text-lg font-medium">Da Nang</h2>
              <p className="opacity-60 ">
                Entire place <span>.</span>2 bedrooms
              </p>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="p-6 pt-16 sm:max-w-[425px]">
          <DialogHeader className="absolute top-5 w-full">
            <DialogTitle className="flex items-center justify-center text-center mb-3">
              Tell us about your place
            </DialogTitle>
            <hr />
          </DialogHeader>
          <div className="flex flex-col gap-5">
            <div>
              <p className="font-medium text-base">Address or area</p>
            </div>
            <div className="flex flex-row p-3 rounded-full gap-5 border-solid border ">
              <div>
                <MapPin />
              </div>
              <div>Da Nang</div>
            </div>
          </div>
          <hr />
          <div>
            <div className="mb-5">
              <p className="font-medium">Type of space</p>
            </div>
            <div>
              <Tabs defaultValue="account" className="flex flex-col gap-5 w-full">
                <TabsList className="flex flex-row h-11 justify-between items-center w-full rounded-full bg-gray-200 p-1">
                  <TabsTrigger value="account" className="flex h-full justify-center w-full rounded-full">
                    <p className="text-center">Entire place</p></TabsTrigger>
                  <TabsTrigger value="password" className="flex h-full justify-center w-full rounded-full">Private room</TabsTrigger>
                </TabsList>
                <hr />
                <TabsContent value="account">
                  <div className="flex flex-row justify-between items-center mb-3">
                    <div><p className="text-lg font-medium">Bedrooms</p></div>
                    <div className="flex flex-row gap-2 items-center ">
                        <div onClick={handleMinusClick} className="p-2 rounded-full border cursor-pointer"><Minus /></div>
                        <div><p className="text-lg font-semibold">{plusNumber}</p></div>
                        <div onClick={handlePlusClick} className="p-2 rounded-full border cursor-pointer"><Plus /></div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="password">
                <div className="flex flex-row justify-between items-center opacity-30 cursor-not-allowed mb-3">
                    <div><p className="text-lg font-medium">Bedrooms</p></div>
                    <div className="flex flex-row gap-2 items-center ">
                        <div onClick={handleMinusClick} className="p-2 rounded-full border"><Minus /></div>
                        <div><p className="text-lg font-semibold">{plusNumber}</p></div>
                        <div onClick={handlePlusClick} className="p-2 rounded-full border"><Plus /></div>
                    </div>
                  </div>
                </TabsContent>
                <hr />
              </Tabs>
            </div>
          </div>
          <div className="flex justify-center rounded-xl bg-button-color p-3 cursor-pointer">
            <p className="text-white text-lg font-medium">Update your estimate</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
