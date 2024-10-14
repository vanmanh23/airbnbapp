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

export default function RoomList() {
    const onSubmitForm = async (data: IFormValues) => {
      const imageURLs = Array.from(data.imageUrls).map((file) => URL.createObjectURL(file));
      // console.log("data sdss", imageURLs);
      try {
        // const roomId = (Math.random() + 1).toString(36).substring(7);
        // const imageURLs = Array.from(data.imageUrls).map((file) => URL.createObjectURL(file));
        // const imageURLs = data.imageUrls.map((file) => URL.createObjectURL(file));
        // const images = data.imageUrls;
        // if (images) {
        //   imageURLs = Array.from(images).map((file) => URL.createObjectURL(file));
        // }
      const res = await createRoom({ 
        categoryId: data.category,
        name: data.name,
        price: Number(data.price),
        date: data.date,
        distance: data.distance,
       });
       if(res) {
        await createImagesOfRoom({ imageUrl: imageURLs, roomId: res.data.id });
       }
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-3xl font-semibold">Rooms List</h2>
        <div>
          <Dialog>
            <DialogTrigger>
              <Button size="lg">Add Room</Button>
            </DialogTrigger>
            <DialogContent>
              <div className="p-6">
                <RoomForm onSubmit={onSubmitForm}/>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div>
      {/* {imageURLs?.map((image, index) => (
          <div key={index}>
            <p>{image}</p>
            <img src={image} alt={`Preview ${index}`} className="w-32 h-32 object-cover" />
          </div>
        ))} */}
        {/* {
          register("imageUrls").map((image, index) => (
            <div key={index}>
              <img src={image} />
            </div>
          ))
        } */}
      </div>
    </div>
  );
}
