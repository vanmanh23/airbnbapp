import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import RoomForm, { IFormValues } from "./RoomForm";
import {  createImagesOfRoom, createRoom, GetAllRooms } from "@/apis/rooms";
import { Toaster, toast } from "sonner";
import { useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useQuery } from "@tanstack/react-query";

export default function RoomList() {
  const [isDialogOpen, setIsDialogOpen] = useState(false); 
  const [isLoading, setIsLoading] = useState(false);
    const onSubmitForm = async (data: IFormValues) => {
      setIsLoading(true); // Start loading
      // const imageURLs = Array.from(data.imageUrls).map((file) => URL.createObjectURL(file));
      try {
        const imageFiles = Array.from(data.imageUrls);
        const imageURLs = imageFiles.map((file) => URL.createObjectURL(file)); // Tạo blob URL
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
        window.location.reload();
       }
      } catch (error) {
        console.log(error);
        toast.error("Failed to create the room. Please try again.", {className: "#e74c3c"});
      } finally {
        setIsLoading(false); // Stop loading
      }
    }
    const { data, isFetched} = useQuery({
      queryKey: ["getallrooms"],
      queryFn: () => GetAllRooms(),
      initialData: [],
      enabled: true,
    }) 
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
                <RoomForm onSubmit={onSubmitForm} isLoading={isLoading}/>
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
