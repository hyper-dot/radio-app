"use client";
import React, { useEffect } from "react";
import { useStationStore } from "../store";
import { stations } from "../__data__/stations";

const Station = () => {
  const { currentStation, setStations } = useStationStore();

  // Initialize stations data on component mount
  useEffect(() => {
    setStations(stations);
  }, [setStations]);

  return (
    <div className="text-white flex flex-col items-center pt-4 gap-4">
      <h1 className="text-center font-medium line-clamp-1 text-[16px]">
        {currentStation ? currentStation.title : "No Station Selected"}
      </h1>
      <div className="relative">
        <img
          src={currentStation ? currentStation.logo : "/station-img.svg"}
          alt={currentStation ? currentStation.title : "Station"}
          className="w-32 h-32 rounded-lg object-cover"
        />
        {currentStation?.color && (
          <div
            className="absolute inset-0 rounded-lg opacity-20"
            style={{ backgroundColor: currentStation.color }}
          />
        )}
      </div>
    </div>
  );
};

export default Station;
