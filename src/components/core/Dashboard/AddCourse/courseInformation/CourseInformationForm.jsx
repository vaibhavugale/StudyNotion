import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseCategories } from "../../../../../services/operations/coursesAPI";
import RequirementField from "./RequirementField";
import { setStep } from "../../../../../Store/Slices/courseSlice";
import Icon from "../../../../common/Icon";

const CourseInformationForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValue,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { course, editCourse } = useSelector((state) => state.course);
  const [loading, setLoading] = useState(false);
  const [courseCategories, setCourseCategories] = useState([]);
  const getCategories = async () => {
    setLoading(true);
    const categories = await fetchCourseCategories();
    if (categories.length > 0) {
      setCourseCategories(categories);
    }
    setLoading(false);
  };
  useEffect(() => {
    getCategories();
    if (editCourse) {
      setValue("courseTitle", course.courseName);
      setValue("courseShortDec", course.courseDescription);
      setValue("coursePrice", course.price);
      setValue("courseTags", course.tag);
      setValue("courseBenefits", course.whatYouWillLearn);
      setValue("courseCategory", course.category);
      setValue("courseRequirements", course.instruction);
      setValue("courseImage", course.thumbnail);
    }
  }, []);
  async function onSubmit() {





  }
  function isFromUpdated(){
    const currentValues = getValue();
    if(currentValues.courseTitle !==  currentValues.courseName )
    {
      return true
    }else{
      return false;
    }
  }
  return (
    <div className=" text-white ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="courseTitle">
            course title <sup>*</sup>
          </label>
          <input
            type="text"
            placeholder="course title"
            id="courseTitle"
            {...register("courseTitle", { required: true })}
          />
          {errors.courseTitle && <span>Course title required</span>}
        </div>
        <div>
          <label  htmlFor="courseShort">Course short description</label>
          <textarea
            id="courseShort"
            placeholder="Short description"
            {...register("courseShort", { required: true, length: 200 })}
          >
            {errors.courseShort && <span>Description too short</span>}
          </textarea>
        </div>
        <div>
          <label  htmlFor="coursePrice">
            Course Price <sup>*</sup>
          </label>
          <input
            placeholder="Course Price"
            id="coursePrice"
            {...register("coursePrice", {
              required: true,
              valueAsNumber: true,
            })}
          />
          {errors.coursePrice && <span>Price required</span>}
        </div>
        <div>
          <label  htmlFor="courseCategory">
            category<sup>*</sup>
          </label>
          <select
            id="courseCategory"
            defaultValue={null} 
            {...register("courseCategory", {
              required: true,
            })}
            className=" text-richblack-400"
          >  <option value="" disabled>choose category</option>
            {!loading && courseCategories.map((item,index)=>(<option key={index} value={item._id}>{item.name}</option>))}
          </select>
          {
            errors.courseCategory && (<span>Category needed</span>)
          }
        </div>
        {/* <ChipInput
        label="Tag"
        register={register}
        errors={errors}
        setValue={setValue}
        getValue={getValue }
         /> */}

         {/* <Upload /> */}

         <RequirementField 
          name="courseRequirement"
          label="course requirement"
          errors={errors}
          register={register}
          setValue={setValue}
          getValue={getValue}
         />
         <div>
          
          {editCourse && <button className=" text-richblack-25"
          onClick={()=>dispatch(setStep(2))}
          >continue without saving</button>}
          <Icon text={editCourse ? "Save changes":"Next"} />
         </div>
      </form>
    </div>
  );
};

export default CourseInformationForm;
