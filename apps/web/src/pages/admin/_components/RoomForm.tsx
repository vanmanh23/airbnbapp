import { Category, fetchCategories } from "@/apis/categories";
import { useEffect, useState } from "react";
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";

export interface IFormValues {
    "name": string;
    "category": string;
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
    onChange?: () => void;
    accept?: string
  };
  const Input = ({ label, register, required, type, multiple, onChange, accept }: InputProps) => (
    <>
      <label>{label}</label>
      <input type={type} {...register(label, { required })} multiple={multiple} onChange={onChange} accept={accept} className="border border-gray-300 rounded-md p-2"/>
    </>
  );
  interface Props {
    onSubmit: SubmitHandler<IFormValues>;
  }
  
export default function RoomForm({ onSubmit }: Props) {
    const [category, setCategory] = useState<Category[]>([]);
    const { register, handleSubmit } = useForm<IFormValues>();
    // const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    useEffect(() => {
      const fetchData = async () => {
        const res = await fetchCategories();
        setCategory(res);
      }
      fetchData();
    }, [])
    // 
     // Xử lý khi người dùng chọn ảnh
  // const handleImageChange = () => {
  //   const files = watch('imageUrls');
  //   if (files && files.length > 0) {
  //     const previews = Array.from(files).map((file) => URL.createObjectURL(file));
  //     setImagePreviews(previews);
  //   }
  // };
   // Dọn dẹp URLs khi component bị huỷ
  //  useEffect(() => {
  //   return () => {
  //     imagePreviews.forEach((url) => URL.revokeObjectURL(url));
  //   };
  // }, [imagePreviews]);
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
                  <Input type="text" label="name" register={register} required />
                  <select {...register("category", { required: true })} defaultValue="" >
                    {category.map((item) => (
                      <option key={item.id} value={item.id}>{item.title}</option>
                    ))}
                  </select>
                  <Input type="number" label="price" register={register} required />
                  <Input type="date" label="date" register={register} required />
                  <Input type="number" label="distance" register={register} required />
                  <Input type="file" label="imageUrls" register={register} required multiple accept="image/*"/>

                  <input type="submit" />
                </form>
    </div>
  )
}
