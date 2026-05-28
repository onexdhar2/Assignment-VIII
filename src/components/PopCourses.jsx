import React from "react";
import CourseCard from "./CourseCard";

const PopCourses = async () => {
  const res = await fetch("https://assignment-viii.vercel.app/data.json");
  const course = await res.json();
  const courses = course.slice(0, 9);
  console.log(courses);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10 mb-5">
        Top Popular Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default PopCourses;
