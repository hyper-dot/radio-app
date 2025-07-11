import React from "react";
import Topbar from "./top-bar";
import MenusSection from "./menus-section";
import Station from "./station";
import Controls from "./controls";
import RightSideLogo from "./right-side-logo";

const MobileScreen = () => {
  return (
    <>
      <img
        src="/phone-outer-layer.svg"
        className="h-[354px] w-full absolute bottom-0 right-0 left-0"
        alt=""
      />
      <div className="absolute bg-black text-white h-[336px] rounded-t-[24px] bottom-0 left-[30px] w-[77%] mx-auto">
        <div className="relative">
          <RightSideLogo />
          <Topbar />
          <MenusSection />
          <Station />
          <Controls />
        </div>
      </div>
    </>
  );
};
export default MobileScreen;
