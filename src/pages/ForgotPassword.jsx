import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getResetPasswordToken } from "../services/operations/authAPI";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
const ForgotPassword = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  function handelSubmit(e) {
    e.preventDefault();
    console.log("hii");
    dispatch(getResetPasswordToken(email, setEmailSent));
  }
  return (
    <div className=" text-richblack-5  w-[100vw] h-[70vh] flex-col  flex justify-center items-center    mx-auto">
      {loading ? (
       <div>



<div role="status">
    <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-50 " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>


</div>
      ) : (
        <div className="flex flex-col gap-3 w-[500px]">
          <p className="  text-richblack-5    text-2xl  font-semibold ">
            {emailSent ? "Check your Email" : "Reset your password"}
          </p>
          <p className="  text-[18px] text-richblack-100">
            {!emailSent
              ? "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
              : `We have sent the reset email to
${email}`}
          </p>
          <form onSubmit={handelSubmit} className="  flex  flex-col ">
            {!emailSent && (
              <label>
                <p>
                  Email Address <sup className=" text-pink-200 ">*</sup>{" "}
                </p>

                <input
                  required
                  className=" bg-richblack-800 mt-2 rounded-sm w-full px-3 py-2"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Entre your email Address"
                  type="email"
                />
              </label>
            )}

            <button className=" bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900">
              {emailSent ? "Resend Email" : "Reset password"}
            </button>
          </form>
          <div>
            <Link to="/login" className=" flex  items-center gap-2">
              <HiOutlineArrowLongLeft />
              back to login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
