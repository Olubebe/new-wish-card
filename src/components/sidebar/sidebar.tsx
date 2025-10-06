import React from "react";

import { ShareSection } from "./share-section";
import { Button } from "../common/Button";
import { ContributionsInfo } from "./contribution-Info";

interface SidebarProps {
  contributionsCount: number;
  onWeaveNewCard: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  contributionsCount,
  onWeaveNewCard,
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 sticky top-6 overflow-hidden">
      <h2 className="text-xl font-bold mb-4">Contributions</h2>
      <ContributionsInfo count={contributionsCount} />
      <ShareSection />
      <Button
        variant="primary"
        size="lg"
        onClick={onWeaveNewCard}
        className="w-full"
      >
        Weave a new Card
      </Button>
    </div>
  );
};
