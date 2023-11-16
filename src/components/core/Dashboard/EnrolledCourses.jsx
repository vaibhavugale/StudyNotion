import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserEnrolledCourses } from "../../../services/operations/profileAPI";
import Spinner from "../../common/Spinner";
import CourseCard from "../HomePage/CourseCard";

const EnrolledCourses = () => {
  const { token } = useSelector((state) => state.auth);
  const [enrolledCourses, setEnrolledCourses] = useState(null);
  async function getEnrolledCourses() {
    try {
      const res = await getUserEnrolledCourses(token);
      setEnrolledCourses(res);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getEnrolledCourses();
  }, []);
  return (
    <div className="text-white flex items-center justify-center">
      <h1>
        {!enrolledCourses ? (
          <div className=" flex items-center justify-center w-[70vw] h-[100vh] "><Spinner /></div>
        ) : (
          <div className=" text-center flex items-center justify-center w-[70vw] h-[60vh] ">
            {enrolledCourses.length == 0 ? (
              <h1>You have not enrolled in any course yet..</h1>
            ) : (
              <CourseCard enrolledCourses={enrolledCourses} />
            )}
          </div>
        )}
      </h1>
    </div>
  );
};

export default EnrolledCourses;
