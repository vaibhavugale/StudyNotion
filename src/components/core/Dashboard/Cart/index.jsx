import React from 'react'
import { useSelector } from 'react-redux'
import cartSlice from '../../../../Store/Slices/cartSlice'
import CartCourses from './CartCourses'
import TotalAmount from './TotalAmount'


export default function Cart () {
   const {total ,totalItems} = useSelector((state)=>state.cart)
  return (
    <div >
        <h1>
            Your Cart
        </h1>
        
        {
          total ? (<div className='flex flex-row pt-5  border-t border-richblack-700 '>
            <CartCourses />
            <TotalAmount />
          </div>):(<div>
            <h1>Your Cart is Empty</h1>
          </div>)
        }
    </div>
  )
}

