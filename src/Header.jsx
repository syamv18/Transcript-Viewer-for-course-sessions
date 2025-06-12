import React from "react";
import { BookOpen } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
      <h1 className="text-3xl font-bold text-white flex items-center gap-3">
        <BookOpen className="w-8 h-8" />
        Learning Portal Navigator
      </h1>
      <p className="text-blue-100 mt-2">
        Navigate through courses, modules, and sessions to access transcripts
      </p>
    </div>
  );
};

export default Header;
