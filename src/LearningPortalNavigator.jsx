import React, { useState } from "react";
import Header from "./Header";
import CourseSelector from "./CourseSelector";
import ModuleSelector from "./ModuleSelector";
import SessionSelector from "./SessionSelector";
import TranscriptDisplay from "./TranscriptDisplay";
import SelectionSummary from "./SelectionSummary";
import { courseData } from "./courseData";

const LearningPortalNavigator = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedModule, setSelectedModule] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  const [transcriptUrl, setTranscriptUrl] = useState("");

  const handleCourseSelect = (e) => {
    const course = e.target.value;
    setSelectedCourse(course);
    setSelectedModule("");
    setSelectedSession("");
    setTranscriptUrl("");
  };

  const handleModuleSelect = (e) => {
    const module = e.target.value;
    setSelectedModule(module);
    setSelectedSession("");
    setTranscriptUrl("");
  };

  const handleSessionSelect = (e) => {
    const session = e.target.value;
    setSelectedSession(session);
    if (session && selectedCourse && selectedModule) {
      const url = courseData[selectedCourse][selectedModule][session];
      setTranscriptUrl(url);
    } else {
      setTranscriptUrl("");
    }
  };

  const openTranscript = () => {
    if (transcriptUrl) {
      window.open(transcriptUrl, "_blank");
    }
  };

  const courses = Object.keys(courseData);
  const modules = selectedCourse ? Object.keys(courseData[selectedCourse]) : [];
  const sessions =
    selectedCourse && selectedModule
      ? Object.keys(courseData[selectedCourse][selectedModule])
      : [];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <Header />

        <div className="p-6 space-y-6">
          <CourseSelector
            selectedCourse={selectedCourse}
            onCourseSelect={handleCourseSelect}
            courses={courses}
          />

          <ModuleSelector
            selectedModule={selectedModule}
            onModuleSelect={handleModuleSelect}
            modules={modules}
            selectedCourse={selectedCourse}
          />

          <SessionSelector
            selectedSession={selectedSession}
            onSessionSelect={handleSessionSelect}
            sessions={sessions}
            selectedCourse={selectedCourse}
            selectedModule={selectedModule}
          />

          <TranscriptDisplay
            transcriptUrl={transcriptUrl}
            onOpenTranscript={openTranscript}
          />

          <SelectionSummary
            selectedCourse={selectedCourse}
            selectedModule={selectedModule}
            selectedSession={selectedSession}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LearningPortalNavigator;
