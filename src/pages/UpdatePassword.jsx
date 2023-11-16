import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { resetPassword } from '../services/operations/authAPI'
import ButtonAuth from '../components/core/Auth/ButtonAuth'
import {HiOutlineArrowLongLeft} from "react-icons/hi2"
import Spinner from '../components/common/Spinner'


const UpdatePassword = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const [formData, setFormData] = useState({
        password:"",
        confirmPassword:""
    })
    const {loading} = useSelector((state)=>state.auth)
    const [showPassword,setShowPassword] = useState(false) 
    const [showConfirmPassword,setShowConfirmPassword] = useState(false) 

    function handelOnChange(e) {
        setFormData((prv)=>{
          return  {
            ...prv,
            [e.target.name] : e.target.value
           }


        })
    }
    function handelOnSubmit(e){
        e.preventDefault()
        const token = location.pathname.split("/").at(-1 )
        console.log(formData)
        dispatch(resetPassword(formData,token))

    }
  return (
    <div className=' flex flex-col items-center justify-center h-[70vh]'>

        {
            loading ? (
                <Spinner />
           ):(<div className=' text-richblack-5'>
                <h1 className=' font-semibold text-2xl'>Choose  new Password</h1>
                <p>Almost done. Enter your new password and youre all set.</p>
               <form onSubmit={handelOnSubmit}>
               <label>
                    <p>New Password <sup className=' text-pink-200'>*</sup></p>
                    <input 
                        required
                        type={ showPassword ? "text" :"password"}
                        name='password'
                        onChange={handelOnChange}
                        className=' bg-richblack-800 mt-2 rounded-sm w-full px-3 py-2'
                        

                    />

                </label>
                <label>
                    <p>Confirm Password <sup className=' text-pink-200'>*</sup></p>
                    <input 
                        required
                        type={showConfirmPassword ? "text" :"password"}
                        name='confirmPassword'
                        onChange={handelOnChange}
                        className=' bg-richblack-800 mt-2 rounded-sm w-full px-3 py-2'
                       

                    />

                </label>
                <ButtonAuth>Reset password</ButtonAuth>
               </form>
               <div>
                <Link to="/login" className=' flex items-center gap-2 mt-4'>
                    <HiOutlineArrowLongLeft fontSize={20} />
                    back to login
                </Link>
            </div>
            </div>)
        }
    </div>
  )
}

export default UpdatePassword