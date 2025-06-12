import React from "react";
import { ChevronRight, PlayCircle } from "lucide-react";

const SessionSelector = ({
  selectedSession,
  onSessionSelect,
  sessions,
  selectedCourse,
  selectedModule,
}) => {
  if (!selectedCourse || !selectedModule) return null;

  return (
    <div className="space-y-2 animate-fadeIn">
      <div className="flex items-center gap-2">
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <label className="flex items-center gap-2 text-lg font-semibold text-gray-700">
          <PlayCircle className="w-5 h-5 text-purple-600" />
          Select Session
        </label>
      </div>
      <select
        value={selectedSession}
        onChange={onSessionSelect}
        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors bg-white ml-12"
      >
        <option value="">-- Choose a Session --</option>
        {sessions.map((session) => (
          <option key={session} value={session}>
            {session}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SessionSelector;
