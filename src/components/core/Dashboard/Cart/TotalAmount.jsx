import React from 'react'
import { useSelector } from 'react-redux'
import Icon from "../../../common/Icon"
const TotalAmount = () => {
    function handleBuyCourse(){

    }
    const {total} = useSelector((state)=>state.cart)
  return (
    <div className='w-[300px] p-5 h-[200px] border flex flex-col gap-2  rounded-md border-richblack-700  bg-richblack-800'>
        <p>Total:</p>
        <p>Rs {total }</p>
        <Icon
            text="Buy Now"
            onclick={handleBuyCourse}
            customClasses={"w-full justify-center"}
        />
    </div>
  )
}

export default TotalAmount