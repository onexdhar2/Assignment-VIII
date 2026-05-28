import React from "react";
import CourseCard from "@/components/CourseCard";
const AllPhotosPage = async () => {
  const response = await fetch("https://assignment-viii.vercel.app/data.json");
  const photos = await response.json();
 
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Photos</h1>
      <div className="grid grid-cols-4 gap-4">
        {photos.map((photo) => (
          <CourseCard key={photo.id} course={photo} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotosPage;
