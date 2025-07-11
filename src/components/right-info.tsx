import React from "react";

const RightInfo = () => {
  return (
    <div className="w-[459px] flex flex-col justify-center gap-[16px]">
      <h1 className="text-[#1D4ED8] font-['Assistant'] font-bold text-[28px] leading-9 text-right align-middle">
        Continue listening through the app
      </h1>
      <p className="font-['Assistant'] text-base leading-6 text-right">
        <span className="font-bold">Station Station</span> broadcasts are
        available on our mobile app. Listening to the live broadcast provides an
        immediate solution anywhere and in any situation.
      </p>
      <button className="flex items-center gap-1 w-fit ml-auto font-['Assistant'] font-semibold text-base leading-6 text-right cursor-pointer">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_35_5)">
            <path
              d="M9.99996 2.66669L4.66663 8.00002L9.99996 13.3334"
              stroke="#111827"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_35_5">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
        More Information
      </button>
    </div>
  );
};

export default RightInfo;
