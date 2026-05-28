import React from "react";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;
  const response = await fetch("https://assignment-viii.vercel.app/data.json");
  const photos = await response.json();
  const course = photos.find((p) => p.id == id);
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <img src={course.image} alt={course.title} />
      <h1 className="text-2xl font-bold">{course.title}</h1>
      <h2 className="text-xl font-semibold">{course.instructor}</h2>
      <p className="text-lg">{course.duration}</p>
      <p className="text-lg">{course.rating}</p>
      <p className="text-lg">{course.level}</p>
      <p className="text-lg">{course.description}</p>
      <p className="text-lg">{course.category}</p>
    </div>
  );
};

export default CourseDetailsPage;
