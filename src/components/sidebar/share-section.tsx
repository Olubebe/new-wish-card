import React from "react";
import { SocialButtons } from "./social-buttons";

export const ShareSection: React.FC = () => {
  return (
    <div className="border-2 border-orange-400 rounded-lg p-4 mb-6">
      <p className="text-center text-gray-700 mb-4">
        Share card with your friends and family
      </p>
      <SocialButtons />
    </div>
  );
};
