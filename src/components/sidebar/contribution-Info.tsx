import React from "react";
import { FaUserLarge } from "react-icons/fa6";

interface ContributionsInfoProps {
  count: number;
}

export const ContributionsInfo: React.FC<ContributionsInfoProps> = ({
  count,
}) => {
  return (
    <div className="flex items-center gap-2 text-teal-600 mb-6">
      <FaUserLarge className="w-5 h-5" />
      <span className="font-semibold">{count} Contribution(s) Added</span>
    </div>
  );
};
