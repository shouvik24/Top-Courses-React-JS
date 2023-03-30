import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ courses, category }) => {
  let allCourses = [];
  const [likedCourses, setLikeCourses] = useState([]);
  //returns you a list of all courses received from the api response
  const getCourses = () => {
    if (category === "All") {
      Object.values(courses).forEach((courseCategory) => {
        //single course data
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      //only specific category data pass
      return courses[category];
    }
  };
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            courseData={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikeCourses}
          />
        );
      })}
    </div>
  );
};

export default Cards;
