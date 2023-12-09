import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SlidersHorizontal } from "lucide-react";

export default function FilterModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex h-fit items-center gap-2 rounded-lg border p-3">
          <SlidersHorizontal />
          Filters
        </button>
      </DialogTrigger>
      <DialogContent className="p-0 pt-4 sm:max-w-[888px]">
        <h1 className="text-center font-bold"> Filters </h1>
        <hr />
        <div className="p-6">
          <h1 className="text-xl font-medium"> Type of place </h1>
          <p> Search rooms, entire homes, or any type of place. </p>
          <div>
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList className="grid w-full grid-cols-2 h-16 border-solid border-2 border-gray-300">
                <TabsTrigger
                  value="account"
                  className="data-[state=active]:bg-black flex  items-center rounded-lg relative"
                >
                  Account
                </TabsTrigger>
                <TabsTrigger
                  value="password"
                  className="data-[state=active]:bg-black flex items-center"
                >
                  Password
                </TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="">
                <p>hello</p>
              </TabsContent>
              <TabsContent value="password">
                <p>hello2</p>
              </TabsContent>
            </Tabs>
          </div>
          <hr className="py-6" />
          <h1 className="text-xl font-medium">Price range</h1>
          <p>Nightly prices before fees and taxes </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
