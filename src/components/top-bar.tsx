import React from "react";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center p-3">
      <span className="text-[10px] font-semibold">9:41</span>
      <div className="flex items-center space-x-1">
        {/* Cellular Signal */}
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="6" width="1.5" height="2" fill="white" rx="0.3" />
          <rect x="3.5" y="4" width="1.5" height="4" fill="white" rx="0.3" />
          <rect x="6" y="2" width="1.5" height="6" fill="white" rx="0.3" />
          <rect x="8.5" y="0" width="1.5" height="8" fill="white" rx="0.3" />
        </svg>

        {/* Battery */}
        <svg
          width="18"
          height="9"
          viewBox="0 0 18 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1.5"
            width="15"
            height="6"
            rx="1.5"
            stroke="white"
            strokeWidth="0.8"
            fill="none"
          />
          <rect x="16" y="3" width="1.5" height="3" rx="0.3" fill="white" />
          <rect x="1.5" y="2" width="12" height="5" rx="1" fill="white" />
        </svg>
      </div>
    </div>
  );
};

export default Topbar;
