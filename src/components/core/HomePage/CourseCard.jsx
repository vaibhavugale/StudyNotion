import React from 'react'


const CourseCard = ({index,cardData,currentCard,setCurrentCard}) => {
  return (
    <div className={ ` flex flex-col justify-between   font-inter   bg-richblack-600 w-[341px]  h-[300px]  text-black  ${index==0 ? " bg-white shadow-yellow  text-richblack-500":"  text-richblack-400  bg-richblack-800"} `}>
     
      <div className=' px-8 py-5 h-[244px]  bg-bottom bg-[length:10px_1px]  bg-repeat-x bg-gradient-to-r from-richblack-50 leading-7'>
        <div className=' mb-2'>{cardData.heading}</div>
      
        <h2>{cardData.description}</h2>
      </div>

       <div className='px-8 py-5'>
        
         <div className=' flex  justify-between '>
            <div >
             
              {cardData?.level}
            </div>
            <div>
              
            {  ` lessionNumber: ${cardData.lessionNumber}`}
            </div>
         </div>
       </div>
    </div>
  )
}

export default CourseCard