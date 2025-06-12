import React from "react";
import { ExternalLink } from "lucide-react";
import CopyButton from "./CopyButton";

const TranscriptDisplay = ({ transcriptUrl, onOpenTranscript }) => {
  if (!transcriptUrl) return null;

  return (
    <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200 animate-fadeIn">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Transcript Available
          </h3>
          <div className="bg-white p-3 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-2">Transcript URL:</p>
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-mono text-blue-600 break-all flex-1">
                {transcriptUrl}
              </p>
              <CopyButton textToCopy={transcriptUrl} />
            </div>
          </div>
        </div>
        <button
          onClick={onOpenTranscript}
          className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-medium whitespace-nowrap"
        >
          <ExternalLink className="w-4 h-4" />
          Open Transcript
        </button>
      </div>
    </div>
  );
};

export default TranscriptDisplay;
