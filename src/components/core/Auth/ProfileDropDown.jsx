import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoMdArrowDropdown } from "react-icons/io";
import { logout } from '../../../services/operations/authAPI';
import { useNavigate } from 'react-router-dom';
const ProfileDropDown = () => {
  const {user} = useSelector((state)=>state.profile)
  const navigate = useNavigate()
  const dispatch = useDispatch()
//  console.log(Image)
  function handelLogout(){
    dispatch(logout(navigate))
  }
  function handelProfile(){
    return navigate("/dashboard/my-profile")
  }
  return (
    <div className='text-white '>
      <div className=' relative flex items-center justify-center group'>
        <img src={user?.image} className='w-[40px] rounded-full  group-hover:cursor-pointer ' alt='img'/>
        <IoMdArrowDropdown className=' group-hover:cursor-pointer' />
        <div className='  flex flex-col bg-richblack-700 group-hover:visible transition-all duration-200 opacity-0 group-hover:opacity-100  w-[100px] h-[100px]  justify-around translate-x-[10px] translate-y-[80px] z-10 rounded-sm absolute'>
          <button onClick={handelLogout}>
            Log out
          </button>
          <button onClick={handelProfile} >
            Dashboard
          </button>
      </div>
      <div className=' invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 bg-richblack-700 w-[30px] rotate-45 rounded-sm absolute translate-x-5 translate-y-8 h-[30px]'>

      </div>

      </div>
      
    </div>
  )
}

export default ProfileDropDown