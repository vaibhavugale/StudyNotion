import React from "react";
import { useSelector } from "react-redux";
import {FaCheck} from "react-icons/fa"
import CourseInformationForm from "./courseInformation/CourseInformationForm";
const RenderStep = () => {
  const {step} = useSelector((state) => state.course);

  const steps = [
    {
      id: 1,
      title: "Course Information",
    },
    {
      id: 2,
      title: "Course Builder",
    },
    {
      id: 3,
      title: "Publish",
    },
  ];
  return (
    <div>
      {steps.map((item) => (
        <div key={item?.id}>
          <div
            className={`${

              step == item?.id
                ? " bg-yellow-900  border-yellow-50 text-yellow-50"
                : " bg-richblack-800 text-richblack-700"
            } w-[33%]`}
          >
            {step>item.id ? (<FaCheck />):(item.id)}
          </div>
          {item.id !== steps.length && (
              <>
                <div 
                  className={`h-[calc(34px/2)] w-[33%]   border-dashed border-b-2 ${
                  step > item.id  ? "border-yellow-50" : "border-richblack-500"
                } `}
                ></div>
              </>
            )}

        </div>
      ))}
      
     <div>
     {steps.map((item)=>(
            <>
                <div key={item?.id}>
                    <p>{item?.title}</p>
                </div>
            </>
        ))}
     
     </div>
      {step===1 && <CourseInformationForm />}
      {/* {step===2 && <CourseBuilder />}
      {step===3 && <CoursePublisher />} */}
    </div>
  );
};

export default RenderStep;
