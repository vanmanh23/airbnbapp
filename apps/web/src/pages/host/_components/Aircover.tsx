import { Button } from "@/components/ui/button";
import { Airbnbcover } from "@/data/airbnbcover";
import { Check, X } from "lucide-react";

export default function Aircover() {
  return (
    <div className="flex flex-col w-9/12 m-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold"><span className="text-primary">air</span>cover</h1>
        <p className="text-xl font-medium">for Hosts</p>
        <h2 className="text-4xl font-semibold">Airbnb it with top-to-bottom protection</h2>
      </div>
      <div className="grid grid-cols-5">
        <div className="col-span-3"></div>
        <div className="flex justify-center">
          <p className="text-2xl font-normal">Airbnb</p>
        </div>
        <div className="flex justify-center">
          <p className="text-2xl font-normal">Competitors</p>
        </div>
      </div>
      <hr className="border mt-5"/>
      {Airbnbcover.map((item) => (
        <div className="flex flex-col gap-5 justify-around py-4">
        <div className="grid grid-cols-5 gap-5 justify-center items-center" key={item.id}>
          <div className="col-span-3">
            {
                item.content ? <h2 className="font-medium text-2xl">{item.content}</h2> : <p className="text-xl">{item.title}</p>
            }
          </div>
          <div className="flex justify-center">{item.airbnb ? <Check color="green" fontWeight={"bold"}/> : <X  color="red" fontWeight={"bold"}/>}</div>
          <div className="flex justify-center">{item.competitors ? <Check color="green" fontWeight={"bold"}/> : <X  color="red" fontWeight={"bold"}/>}</div>
        </div>
        <div className="grid gap-5 grid-cols-5">
          <div className="col-span-3 opacity-70">
            <p>{item.description}</p>
            </div>
            <div></div>
            <div></div>
        </div>
        <hr />
        </div>     
      ))}
        <div className="flex flex-col justify-center items-center gap-12">
            <p>Comparison is based on public information and free offerings by top competitors as of 10/22. <span className="font-semibold underline decoration-solid">Find details and exclusions here.</span></p>
            <Button className="w-2/12 mt-4 bg-white text-black border border-black hover:bg-white" size="default">Learn more</Button>
        </div>
      <div>
      </div>
    </div>
  );
}
