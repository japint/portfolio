import React from "react";

const HeaderSimple: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-800 border-b">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-white text-xl font-bold">Portfolio</div>
          <div className="text-white">Simple Header Test</div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderSimple;
