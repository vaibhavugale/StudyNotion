import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactStars from "react-rating-stars-component"
import {FaStarHalf} from "react-icons/fa"
import {AiOutlineDeleteRow} from "react-icons/ai"
import {AiFillStar} from "react-icons/ai"
import removeFromCart from "../../../../Store/Slices/cartSlice"

const CartCourses = () => {
        const {cart} = useSelector((state)=>state.cart)
        const dispatch = useDispatch()
        function handelRemove(id){
         dispatch(removeFromCart(id))
        }
  return (
    <div  className='flex flex-col '>
    {
        cart.map((course,index)=>(
            <div className='  bg-richblack-900 flex flex-row justify-between  border p-10 border-black w-[800px]'>
                <img src={course?.thumbnail} />
                <div>
                    <p>{course?.courseName}</p>
                    <p>{course?.category?.name}</p>
                    <div>
                        <span>4.8</span>
                       <ReactStars 
                         count={5}
                         size={20}
                         edit={false}
                         activeColor="#ffd700"
                          filledIcon={<AiFillStar />}
                          emptyIcon={<FaStarHalf />}
                       />
                       <p>{`(${course?.ratingAndReviews?.length}) Rating`}</p>
                    </div>
                </div>
                <div className=' flex gap-5 flex-col'>
                    <button className=' flex   gap-1  bg-richblack-700 rounded-md p-2 border-richblack-600  border-2 items-center justify-center text-pink-200' onClick={()=>handelRemove(course?._id)}>
                        <AiOutlineDeleteRow />
                        Remove
                    </button>
                    <p>
                        {`Rs ${course?.price}`}
                    </p>
                </div>
            </div>
        ))
    }
    </div>
  )
}

export default CartCourses