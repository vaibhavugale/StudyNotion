import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Myprofile = () => {
    const {user} = useSelector((state)=>state.profile)
    const navigate = useNavigate()
  return (
    <div className='text-white'>
       <h1 >My profile</h1>

       {/* section one  */}
       <div>
          <div>
            <img src={user.image} className=' w-[50px] h-[50px]' />
          </div>
          <div>
            <h3>{`${user.firstName}  ${user.lastName}`}</h3>
            <p>{user.email}</p>
          </div>
          <div>
            <button>Edit </button>
          </div>
       </div>

       {/* section two  */}
       <div>
        <div>
          <h1>Personal Detail</h1>
          <button>Edit</button>
        </div>

        <div>
           <div>
             <p>firstName</p>
              <h3>{user.firstName}</h3>
           </div>
           <div>
             <p>lastName</p>
              <h3>{user.lastName}</h3>
           </div>
           <div>
             <p>email</p>
              <h3>{user.email}</h3>
           </div>
           <div>
             <p>Phone</p>
              <h3>12345</h3>
           </div>
        </div>
       </div>

    </div>
  )
}

export default Myprofile