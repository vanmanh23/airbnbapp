import { isAccountVerified } from "@/apis/auths";
import { Button } from "@/components/ui/button";
import { VerifyEmailContext } from "@/utils/VerifyEmailContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Component() {
  const navigate = useNavigate();
  const context = useContext(VerifyEmailContext);
  if (!context) {
    throw new Error("useContext must be used within a VerifyEmailProvider");
  }
  const { email, handleSetIsLogin } = context;
  console.log("context email : ", email);
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    let timeoutId: NodeJS.Timeout;

    if (email) {
      // Polling every 5 seconds to check if the account is verified
      intervalId = setInterval(async () => {
        try {
          const accountVerified = await isAccountVerified(email);
          if (accountVerified) {
            handleSetIsLogin(true);
            navigate("/");
            clearInterval(intervalId); // Stop polling if verified
            clearTimeout(timeoutId); // Clear the timeout if verified early
          }
        } catch (error) {
          console.error("Verification error: ", error);
        }
      }, 100); // Poll every 5 seconds

      // Timeout after 5 minutes (300000 ms) to stop polling
      timeoutId = setTimeout(() => {
        clearInterval(intervalId); // Stop polling after 5 minutes
        console.log("Stopped polling after 5 minutes.");
      }, 300000); // 5 minutes = 300,000 ms
    }

    // Cleanup intervals and timeouts when component unmounts
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  },[]);

  return (
    <div className="flex h-screen ">
    <div className="flex flex-col w-11/12 md:w-2/5 m-auto gap-2 bg-white">
      <div className="flex flex-row gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 48 48"
        >
          <path
            fill="#4caf50"
            d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
          ></path>
          <path
            fill="#ccff90"
            d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"
          ></path>
        </svg>
        <p>A verification link has been sent to your email.</p>
      </div>
      <hr />
      <div>
        <p>
          Please click on the link that has just been sent to your email account
          to verify your email and continue the registration process 5 minutes
          before it expires.
        </p>
      </div>
      <div>
        <Button type="submit" onClick={() => navigate("/")}>Cancel</Button>
      </div>
    </div>
    </div>
  );
}
