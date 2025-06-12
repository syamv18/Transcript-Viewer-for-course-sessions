import React from "react";
import { BookOpen } from "lucide-react";

const CourseSelector = ({ selectedCourse, onCourseSelect, courses }) => {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-lg font-semibold text-gray-700">
        <BookOpen className="w-5 h-5 text-blue-600" />
        Select Course
      </label>
      <select
        value={selectedCourse}
        onChange={onCourseSelect}
        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors bg-white"
      >
        <option value="">-- Choose a Course --</option>
        {courses.map((course) => (
          <option key={course} value={course}>
            {course}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CourseSelector;
