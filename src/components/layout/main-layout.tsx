import React from "react";

interface MainLayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  sidebar,
  children,
}) => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          <div className="lg:col-span-3">{sidebar}</div>
          <div className="lg:col-span-9">{children}</div>
        </div>
      </div>
    </div>
  );
};
