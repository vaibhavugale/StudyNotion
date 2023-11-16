import React from 'react'
import { Children } from 'react'

const ButtonAuth = ({children}) => {
  return (
    <button type='submit'  className='w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900'>
        {children}
    </button>
  )
}

export default ButtonAuth