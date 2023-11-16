import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";

const CourseCard = ({ enrolledCourses }) => {
  return (
    <div>
      <div>
        <p>Course Name</p>
        <p>Duration</p>
        <p>Progress</p>
      </div>
      <h1>Enrolled Courses</h1>

      <div>
        <button>All</button>
        <button>Pending</button>
        <button>Completed</button>
      </div>
      <div>
        <div>
          <p>Course Name</p>
          <p>Duration</p>
          <p>progress</p>
        </div>
        {enrolledCourses.map((course, index) => {
          return <div key={index}>
            <div>
                <img src={course?.thumbnail} />
                <div>
                    <p>{course?.courseName}</p>
                    <p>{course?.courseDescription}</p>
                </div>
                <div>Duration</div>
                <div>
                    <p>Progress:</p>
                    {/* <ProgressBar 
                        completed={90}
                        height="8px"
                        isLabelVisible={false}
                    /> */}
                </div>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default CourseCard;
