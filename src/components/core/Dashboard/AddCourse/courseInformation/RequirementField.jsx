import React, { useEffect, useState } from 'react'
import {BiAddToQueue} from "react-icons/bi"

const  RequirementField = ({
    name,
    label,
    register,
    setValue,
    getValue,
    errors 
}) => {
    const [requirement,setRequirement]=useState("")
    const [requirementList,setRequirementList] = useState("")
    useEffect(()=>{
      register(name,{
        require:true,
        
      })
    },[])
    useEffect(()=>{
     setValue(name,requirementList )
    },[requirementList])
    function handleAddRequirement(){
      if(requirement){
        setRequirementList([...requirement,requirement])
        setRequirement("")
      }

    }
    function handleRemoveRequirement(index){
      if(requirement){
        const updateRequirementList = [...requirementList]
        updateRequirementList.splice(index,1);
        setRequirementList(updateRequirementList)
      }
    }
  return (
    <div>
        <label>Requirement/instructions<sup>*</sup></label>
        <div>
        <input
         id={name}
         type='text'
         value={requirement}
         onChange={(e)=>setRequirement(e.target.value)}

          
        
         />
         <button
         onClick={handleAddRequirement}
         >ADD <BiAddToQueue /></button>
        </div>
       { requirementList.length>0 && (
        <ul>
          {
            requirementList.map((item,index)=>{
              <li key={index }>{item} <button
              onClick={()=>handleRemoveRequirement(index)}

              >clear</button></li>
            })
          }
        </ul>
       )}
       {errors[name]&&(
        <span>
          {label} is required
        </span>
       )}
    </div>
  )
}

export default RequirementField