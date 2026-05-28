import { Card } from "@heroui/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const CourseCard = ({ course }) => {
  return (
    <Card className="w-full h-full">
      <div>
        <Image
          src="/logo.png"
          width={100}
          height={100}
          className="w-12 h-auto"
          alt="Logo"
        />
        <div>
          <h3 className="text-lg font-bold">{course.title}</h3>
        </div>
        <div>
          <h3 className="text-sm text-gray-500">{course.instructor}</h3>
        </div>
        <div>
          <h3 className="text-sm text-gray-500">{course.rating}</h3>
        </div>
      </div>
      <Link
        href={`/all-photos/${course.id}`}
        className="text-blue-500 hover:underline"
      >
        View Details
      </Link>
    </Card>
  );
};

export default CourseCard;
