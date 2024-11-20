import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
// import { useEffect, useState } from "react";
// import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";
import RoomForm, { IFormValues } from "./RoomForm";
import {  createImagesOfRoom, createRoom, GetAllRooms } from "@/apis/rooms";
import { Toaster, toast } from "sonner";
import { useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useQuery } from "@tanstack/react-query";
// import { Skeleton } from "@/components/ui/skeleton";


export default function RoomList() {
  const [isDialogOpen, setIsDialogOpen] = useState(false); 
    const onSubmitForm = async (data: IFormValues) => {
      const imageURLs = Array.from(data.imageUrls).map((file) => URL.createObjectURL(file));
      // console.log("data sdss", imageURLs);
      try {
      const res = await createRoom({ 
        categoryId: data.category,
        name: data.name,
        price: Number(data.price),
        date: data.date,
        distance: data.distance,
       });
       if(res) {
        await createImagesOfRoom({ imageUrl: imageURLs, roomId: res.data.id });
        toast.success("Room created successfully!", {className: "#2ecc71"});
        setIsDialogOpen(false);
        console.log("Room created successfully!");
       }
      } catch (error) {
        console.log(error);
        toast.error("Failed to create the room. Please try again.", {className: "#e74c3c"});

      }
    }
    const { data, isFetched} = useQuery({
      queryKey: ["getallrooms"],
      queryFn: () => GetAllRooms(),
      initialData: [],
      enabled: true,
    }) 
    // if (!isFetched) return <div>Loading...</div>;
  return (
    <div>
      <Toaster />
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-3xl font-semibold">Rooms List</h2>
        <div className="">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger>
              <Button size="lg">Add Room</Button>
            </DialogTrigger>
            <DialogContent className="w-fit md:h-fit h-full p-3">
              <div className="p-6">
                <RoomForm onSubmit={onSubmitForm}/>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      {/*  */}
      <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} isLoading={isFetched}/>
    </div>
    </div>
  );
}
