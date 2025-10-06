import React from "react";
import type { PaperProps } from "../../types";

const Paper: React.FC<PaperProps> = ({
  id,
  frontContent,
  backContent,
  isFlipped,
  zIndex,
}) => {
  return (
    <div
      id={String(id)}
      className={`paper absolute w-full h-full perspective-1500 ${
        isFlipped ? "flipped" : ""
      }`}
      style={{ zIndex }}
    >
      <div className="front relative origin-left bg-[#f9f6f2] w-full h-full rounded-lg transition-transform duration-500 z-10 backface-hidden border-l-3 border-powderblue overflow-hidden">
        <div className="w-full h-full overflow-y-auto">{frontContent}</div>
      </div>
      <div className="back absolute w-full h-full rounded-lg top-0 left-0 origin-left transition-transform duration-500 z-0  overflow-hidden">
        <div className="back-content bg-[#32436b] w-full h-full overflow-y-auto">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default Paper;
