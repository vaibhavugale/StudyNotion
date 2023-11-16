import React from 'react'
import { sidebarLinks } from '../../../data/dashboard-links'
import { logout } from '../../../services/operations/authAPI'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import SideLink from './SideLink'
const SIderBar = () => {
  const {user} = useSelector((state)=>state.profile )
  const {loading:authLoading} = useSelector((state)=>state.auth)
  const dispatch = useDispatch()
  

  return (
    <div >
     <div className='flex min-w-[175px]  bg-richblack-800 h-[calc(100vh-3.5rem)]'>
     <div className='flex w-full mt-[50px]  gap-3 flex-col'>
      {
        sidebarLinks.map((links)=>{
          if(links.type && user?.accountType !== links.type) return null;
          else{
            return <SideLink link={links} iconName={links.icon} key={links.id} />

            
          }
        })
      }
      {/* hr line   */}
      <div className='text-white w-full  bg-richblack-25  h-[1px] mt-10 mb-3'>

      </div>
      <div className='flex w-full flex-col'>
        <SideLink link={{name:"Setting",path:"dashboard/setting"}} iconName="VscSettingsGear"/>
      </div>
     </div>

     </div>

    </div>
  )
}

export default SIderBar