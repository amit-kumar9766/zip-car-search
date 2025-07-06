import React from "react";

interface BackButtonProps {
  onBack: () => void;
  text?: string;
  className?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({
  onBack,
  text = "Back to Search",
  className = "",
}) => {
  return (
    <button
      onClick={onBack}
      className={`mb-6 flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 ${className}`}
      aria-label={text}
    >
      <span className="text-lg">←</span>
      {text}
    </button>
  );
};
