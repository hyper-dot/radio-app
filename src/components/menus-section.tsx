import {
  Cast,
  ChevronDown,
  Heart,
  Moon,
  MoreVertical,
  Share,
} from "lucide-react";
import React from "react";

const MenusSection = () => {
  return (
    <div className="flex justify-between items-center px-2 pt-2">
      <MoreVertical size={14} />
      <div className="flex items-center gap-2">
        <Cast size={14} />
        <Moon size={14} />
        <Share size={14} />
        <Heart size={14} className="stroke-red-600 fill-red-600" />
      </div>
      <ChevronDown size={14} />
    </div>
  );
};

export default MenusSection;
