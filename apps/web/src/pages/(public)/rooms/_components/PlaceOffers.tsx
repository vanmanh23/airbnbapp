import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PlaceOffer } from "@/data/placeoffer";

type Props = {
  id: number;
  svgpath: string;
  name: string;
};

export default function PlaceOffers() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-2xl font-medium">What is place offers</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PlaceOffer.slice(0, 8).map((item: Props) => (
          <div key={item.id} className="">
            <div className="flex flex-row gap-2">
              <div
                dangerouslySetInnerHTML={{ __html: item.svgpath }}
                className="w-6"
              ></div>
              <p className="text-lg">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="border-black">Show all</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[625px] h-full">
            <div className="overflow-y-scroll mt-10">
            {PlaceOffer.map((item: Props) => (
              <div className="flex flex-col gap-3">
              <div
                key={item.id}
                className="flex flex-row gap-2 py-2 text-lg"
              >
                <div
                  dangerouslySetInnerHTML={{ __html: item.svgpath }}
                  className="w-6"
                ></div>
                <p className="text-lg">{item.name}</p>
              </div>
              <div>
                <hr />
              </div>
              </div>
            ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
