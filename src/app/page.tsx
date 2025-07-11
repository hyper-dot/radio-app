import LeftSvgs from "@/components/left-svgs";
import MobileScreen from "@/components/mobile-screen";
import RightInfo from "@/components/right-info";
import React from "react";

const page = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[1196px] bg-[#DBEAFE] h-[312px] min-[1400px]:flex hidden rounded-2xl relative">
        <div className="py-[100px] pl-[51px] pr-[56px]">
          <LeftSvgs />
        </div>
        <div className="relative px-[23px] w-[242px]">
          <MobileScreen />
        </div>

        <RightInfo />
      </div>
    </div>
  );
};

export default page;
