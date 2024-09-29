import { updateProfileForm } from "@/utils/schema"
import { z } from "zod"
import { useForm, type SubmitHandler } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"

export type UpdateProfileInputs = z.infer<typeof updateProfileForm>
interface Props {
    onSubmit: SubmitHandler<UpdateProfileInputs>
}
export default function UpdateProfile({ onSubmit }: Props) {
  const navigate = useNavigate();

  const handleFormSubmit: SubmitHandler<UpdateProfileInputs> = (data) => {
    onSubmit(data);
    navigate("/waitingVerify"); // Navigate after submission
  };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UpdateProfileInputs>({
        mode: 'onBlur',
        resolver: zodResolver(updateProfileForm),
    })
    
  return (
    <>
    <h2 className="text-center font-bold">Update your profile</h2>
      <hr />
      <form className="space-y-4 p-6"  onSubmit={handleSubmit(handleFormSubmit)}>
        <h1 className="text-2xl font-medium"> Update profile </h1>
        <Input {...register('firstName')} placeholder="First Name" />
        {errors.firstName && <p className="text-sm text-red-500">{errors.firstName.message}</p>}
        <Input {...register('lastName')} placeholder="Last Name" />
        {errors.lastName && <p className="text-sm text-red-500">{errors.lastName.message}</p>}
        <Input {...register('phoneNumber')} placeholder="phoneNumber" type="text" />
        {errors.phoneNumber && <p className="text-sm text-red-500">{errors.phoneNumber.message}</p>}
        <Input {...register('age')} placeholder="Age" type="text" />
        {errors.age && <p className="text-sm text-red-500">{errors.age.message}</p>}
        <Input {...register('address')} placeholder="address" type="text"  />
        {errors.address && <p className="text-sm text-red-500">{errors.address.message}</p>}
        <Input {...register('avatar')} placeholder="avatar" type="text"  />
        {errors.avatar && <p className="text-sm text-red-500">{errors.avatar.message}</p>}     
        
        <Button className="w-full" size="lg" type="submit">
          Submit
        </Button>
      </form>
    </>
  )
}
