import React from "react";

interface PageContentProps {
  front?: React.ReactNode;
  back?: React.ReactNode;
}

const PageContent: React.FC<PageContentProps> = ({ front, back }) => {
  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden">
      {front && <div className="w-full min-h-full">{front}</div>}
      {back && <div className="w-full min-h-full">{back}</div>}
    </div>
  );
};

export default PageContent;
