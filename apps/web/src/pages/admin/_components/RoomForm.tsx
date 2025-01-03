import { Category, fetchCategories } from "@/apis/categories";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";

export interface IFormValues {
  name: string;
  category: string;
  price: string;
  date: string;
  distance: string;
  imageUrls: File[];
}
type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  type: string;
  multiple?: boolean;
  // onChange?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
};
const Input = ({
  label,
  register,
  required,
  type,
  multiple,
  onChange,
  accept,
}: InputProps) => (
  <>
    <label>{label}</label>
    <input
      type={type}
      {...register(label, { required })}
      multiple={multiple}
      onChange={onChange}
      accept={accept}
      className="border border-gray-300 rounded-md p-2"
    />
  </>
);
interface Props {
  onSubmit: SubmitHandler<IFormValues>;
  isLoading: boolean;
}

export default function RoomForm({ onSubmit, isLoading }: Props) {
  const [category, setCategory] = useState<Category[]>([]);
  const { register, handleSubmit } = useForm<IFormValues>();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchCategories();
      setCategory(res);
    };
    fetchData();
  }, []);
  // 
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:space-y-4 space-y-2"
      >
        <Input type="text" label="name" register={register} required />
        <select {...register("category", { required: true })} defaultValue="">
          {category.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
        <Input type="number" label="price" register={register} required />
        <Input type="date" label="date" register={register} required />
        <Input type="number" label="distance" register={register} required />
        <Input
          type="file"
          label="imageUrls"
          register={register}
          required
          multiple
          accept="image/*"
        />
        {isLoading ? (
          <Spinner />
        ) : (
          <Button type="submit">Submit</Button>
        )}
      </form>
    </div>
  );
}
