import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";


interface IFormValues {
  "name": string;
  "price": string;
  "date": string;
  "distance": string;
  "imageUrls": File[]
}
type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  type: string;
  multiple?: boolean;
};
const Input = ({ label, register, required, type, multiple }: InputProps) => (
  <>
    <label>{label}</label>
    <input type={type} {...register(label, { required })} multiple={multiple} className="border border-gray-300 rounded-md p-2"/>
  </>
);
export default function RoomList() {
  const [dd, setDD] = useState<string[]>([]);
  const { register, handleSubmit, watch } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    // Convert FileList to an array of files for multiple images
    const formData = {
      ...data,
      imageUrls: Array.from(data.imageUrls)
    };
    console.log(formData);
    alert(JSON.stringify(formData));
  };
  // Watch for image changes
  useEffect(() => {
    const images = watch("imageUrls");
    if (images) {
      const imageURLs = Array.from(images).map((file) => URL.createObjectURL(file));
      setDD(imageURLs); // Update state with image preview URLs
    }
  }, [watch("imageUrls")]);
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
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
                  <Input type="text" label="name" register={register} required />
                  <Input type="number" label="price" register={register} required />
                  <Input type="date" label="date" register={register} required />
                  <Input type="number" label="distance" register={register} required />
                  <Input type="file" label="imageUrls" register={register} required multiple />

                  <input type="submit" />
                </form>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div>
      {dd?.map((image, index) => (
          <div key={index}>
            <p>{image}</p>
            <img src={image} alt={`Preview ${index}`} className="w-32 h-32 object-cover" />
          </div>
        ))}
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
