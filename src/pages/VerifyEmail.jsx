import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { useDispatch ,useSelector} from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { sendOtp ,signUp } from "../services/operations/authAPI";
import {HiOutlineArrowLongLeft} from "react-icons/hi2"
import {LuTimerReset} from "react-icons/lu"
import Spinner from "../components/common/Spinner";


const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { loading , signupData } = useSelector((state) => state.auth);
  useEffect(()=>{
    if(!signupData){
        navigate("/signup")
    }
  })
  function handelResendOtpButton(){
    const {email} = signupData
    dispatch(sendOtp(email,navigate))
  }
  function handelOnSubmit(e){
    e.preventDefault()
    const {
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
     
    } = signupData
    dispatch(signUp(accountType,firstName,lastName,email,password,confirmPassword,otp,navigate))

  }
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="text-white w-[400px] flex  items-start p-5   gap-5  mx-auto flex-col">
          <p className=" font-semibold text-3xl">Verify Email</p>
          <p>A verification code has been sent to you. Enter the code below</p>
          <form onSubmit={handelOnSubmit}>
            <OTPInput
              value={otp}
              numInputs={6}
              onChange={setOtp}
              renderSeparator=" "
              renderInput={(props) => <input {...props}
              placeholder="-"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-[48px] lg:w-[60px]  m-1 border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50" />}
            />
            <div className=" w-full flex items-center justify-center">
               <button type="submit" className="w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900" >verify email</button>
            </div>
          </form>
          <div className=" flex justify-between items-center w-full">
            <Link to="/login" className=" flex flex-row items-center gap-2 hover:text-yellow-100">
            <HiOutlineArrowLongLeft fontSize={25}  />
            back to login
            </Link>
            <button onClick={handelResendOtpButton} className="flex flex-row items-center gap-2 hover:text-yellow-100">
            <LuTimerReset fontSize={20} /> 
            resend it
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
