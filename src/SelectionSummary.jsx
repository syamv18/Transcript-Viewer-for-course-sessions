import React from "react";
import { BookOpen, Layers, PlayCircle } from "lucide-react";

const SelectionSummary = ({
  selectedCourse,
  selectedModule,
  selectedSession,
}) => {
  if (!selectedCourse) return null;

  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        Current Selection
      </h3>
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-blue-600" />
          <span className="font-medium text-gray-700">Course:</span>
          <span className="text-gray-600">{selectedCourse}</span>
        </div>
        {selectedModule && (
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-green-600" />
            <span className="font-medium text-gray-700">Module:</span>
            <span className="text-gray-600">{selectedModule}</span>
          </div>
        )}
        {selectedSession && (
          <div className="flex items-center gap-2">
            <PlayCircle className="w-4 h-4 text-purple-600" />
            <span className="font-medium text-gray-700">Session:</span>
            <span className="text-gray-600">{selectedSession}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectionSummary;
