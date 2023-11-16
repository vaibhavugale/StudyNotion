import React from 'react'
import * as Icons from "react-icons/vsc"
import { useDispatch } from 'react-redux'
import { NavLink, matchPath, useLocation } from 'react-router-dom'

const SideLink = ({link,iconName}) => {

   
    const Icon = Icons[iconName];
 
    const location = useLocation()
    const dispatch = useDispatch()

    function matchRout(rout){
        return matchPath({path:rout},location.pathname)
    }
  return (
    <NavLink to={link.path} className={` w-full relative px-8 py-2 text-sm font-medium ${matchRout(link.path) ? " bg-yellow-800": " bg-opacity-0"}`}>
    {/* onClick={handelClick} */}
     
    <span className={` absolute  left-0 top-0  h-full w-[0.2rem]  bg-yellow-50  ${matchRout(link.path) ? " opacity-100":" opacity-0"}`}></span>
    <div className='flex w-full gap-2 items-center '>
    <Icon />
      <p>{link.name}</p>
    </div>
    </NavLink>
  )
}

export default SideLink