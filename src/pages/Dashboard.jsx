import React from 'react'
import { useSelector } from 'react-redux'
import Spinner from "../components/common/Spinner"
import SIdeBar from "../components/core/Dashboard/SIderBar"
import { Outlet } from 'react-router-dom'
const Dashboard = () => {
    const {loading }= useSelector((state)=>state.auth)
  return (
    <div>
       {
        loading ? <Spinner />:(
        <div className='text-white flex gap-[10px] w-full '>
          <SIdeBar />
          <div className='w-full ' >
             <div className='flex justify-center mt-[50px] '>
                <Outlet />
             </div>
          </div>

        </div>)
       }
    </div>
  )
}

export default Dashboard