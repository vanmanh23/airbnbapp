import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
// import { useEffect, useState } from "react";
// import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";
import RoomForm, { IFormValues } from "./RoomForm";
import {  createImagesOfRoom, createRoom } from "@/apis/rooms";
import { Toaster, toast } from "sonner";
import { useState } from "react";

// import { useNavigate } from "react-router-dom";

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
      <div>
        {/* <Button size="lg" onClick={() => toast.success("Room created successfully!")}>Add hello</Button> */}
      </div>
    </div>
  );
}
