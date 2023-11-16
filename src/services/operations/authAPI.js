import React from 'react'
import { setLoading } from '../../Store/Slices/authSlice'
import { apiConnector } from '../apiconnector'
import { endpoints } from "../apis";
import { toast } from 'react-hot-toast';
import { setToken } from '../../Store/Slices/authSlice';
import {setUser} from "../../Store/Slices/profileSlice"


const {
    SENDOTP_API,
    SIGNUP_API,
    LOGIN_API,
    RESETPASSTOKEN_API,
    RESETPASSWORD_API,
  } = endpoints
export function signUp(
    accountType,
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    otp,
    navigate
  ) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", SIGNUP_API, {
          accountType,
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          otp,
        })
  
        console.log("SIGNUP API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        toast.success("Signup Successful")
        navigate("/login")
      } catch (error) {
        console.log("SIGNUP API ERROR............", error)
        toast.error("Signup Failed")
        navigate("/signup")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }
export function login(email, password, navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", LOGIN_API, {
          email,
          password,
        })
  
        console.log("LOGIN API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
  
       
        dispatch(setToken(response.data.token))
        const userImage = response.data?.user?.image
          ? response.data.user.image
          : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
        dispatch(setUser({ ...response.data.user, userImage }))
        localStorage.setItem("token", JSON.stringify(response.data.token))
        localStorage.setItem("user", JSON.stringify(response.data.user))
  
        navigate("/dashboard/my-profile")
        toast.success("Login Successful")
      } catch (error) {
        console.log("LOGIN API ERROR............", error)
        toast.error("Login Failed")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }
export const sendOtp = (email,navigate) =>{
 return async  (dispatch) =>{
  const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try{
      const res = await apiConnector("POST",SENDOTP_API,{email,checkUserPresent:true})

      if(!res){
        throw new Error("Cant send otp")
      }
      dispatch(setLoading(false))
      toast.success("otp sed successFully , Check your email")
      navigate("/verify-otp")
    }catch(err){
      toast.error("Something went wrong, please try again")
      navigate("/signup")
    }
    toast.dismiss(toastId)
 }
    
}
export const getResetPasswordToken = (email,setEmailSent)=>{
    
   return async (dispatch) =>{
   
    dispatch(setLoading(true))
    try{
        const res = await apiConnector("POST", endpoints.RESETPASSTOKEN_API,{email})
        if(!res){
            throw new Error (res.data.message)
        }
        toast.success("Email send successfully ") 
        setEmailSent(true)
        
    }catch(err){
        console.log("reset password token error..")
        toast.error("Fail to send email")
    }
    dispatch(setLoading(false))  
   }
}
export const resetPassword = (formData,token  ) =>{
    return async ( dispatch ) =>{
        dispatch(setLoading(true))
        try{
          const {password,confirmPassword} = formData
          console.log("password:",password,"/n","confirmPassword",confirmPassword)
          const resetData = await apiConnector("POST",RESETPASSWORD_API,{password,confirmPassword,token});
      
          toast.success(resetData.data.message)
          dispatch(setLoading(false))
        }catch(er){
            dispatch(setLoading(false))
            toast.error("Fail to reset password")
        }
    }
}

export const logout=(navigate)=>{
  return async (dispatch) =>{
    setLoading(true)
    dispatch(setToken(null))
    localStorage.clear()
    dispatch(setUser(null))
    sessionStorage.clear()
    toast.success("Logged out ")
    navigate("/")

  }
 
}