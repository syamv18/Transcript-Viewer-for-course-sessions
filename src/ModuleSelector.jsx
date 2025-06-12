import React from "react";
import { ChevronRight, Layers } from "lucide-react";

const ModuleSelector = ({
  selectedModule,
  onModuleSelect,
  modules,
  selectedCourse,
}) => {
  if (!selectedCourse) return null;

  return (
    <div className="space-y-2 animate-fadeIn">
      <div className="flex items-center gap-2">
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <label className="flex items-center gap-2 text-lg font-semibold text-gray-700">
          <Layers className="w-5 h-5 text-green-600" />
          Select Module/Topic
        </label>
      </div>
      <select
        value={selectedModule}
        onChange={onModuleSelect}
        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors bg-white ml-6"
      >
        <option value="">-- Choose a Module --</option>
        {modules.map((module) => (
          <option key={module} value={module}>
            {module}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ModuleSelector;
