import {  useContext, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../../../components/ui/dialog";
import SignupForm, {type signUpInputs} from "./SignupForm";
import { signUp } from "@/apis/auths";
import UpdateProfile, { UpdateProfileInputs } from "./UpdateProfile";
import { toast } from 'sonner'
import { VerifyEmailContext } from "@/utils/VerifyEmailContext";

export default function SignupModal() {
  const [register, setRegister] = useState({
    email: "",
    password: ""
  })
  const context = useContext(VerifyEmailContext);
  if(!context) {
    throw new Error("useContext must be used within a VerifyEmailProvider");
  }
  const { handleSetEmail } = context;
  const onSignupSubmit = (data: signUpInputs) => {
    setRegister(register => ({...register, 
      email: data.email,
      password: data.password
    }))
  }
  const onUpdateProfile = async (data: UpdateProfileInputs) => {
    try{
      handleSetEmail(register.email)
      await signUp({
        ...register
      })   
      console.log("AccountVerified: ", register.email)
      console.log("res dataa: ",data)
    }catch (error){
      if(error instanceof Error){
        toast.error(error.message)
      }
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="my-2 w-full cursor-pointer p-3 text-muted-foreground hover:bg-gray-100">
          Signup
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 sm:max-w-[600px] h-5/6 overflow-y-scroll">
       {register?.email && register?.password ? (
        <UpdateProfile onSubmit={onUpdateProfile}/>
       ) : (
        <SignupForm onSubmit={onSignupSubmit} />
       )}
      </DialogContent>
    </Dialog>
  );
}
