"use client";
import React, { useState, useEffect } from "react";
import { Play, SkipBack, SkipForward, Square } from "lucide-react";
import { IoMdVolumeHigh, IoMdVolumeLow } from "react-icons/io";
import { useStationStore } from "../store";
import { stations } from "../__data__/stations";

const Controls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const { nextStation, previousStation, setStations } = useStationStore();

  // Initialize stations data on component mount
  useEffect(() => {
    setStations(stations);
  }, [setStations]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  const handleNextStation = () => {
    nextStation();
  };

  const handlePreviousStation = () => {
    previousStation();
  };

  return (
    <div className="text-white px-4 py-2 space-y-2">
      {/* Volume Control */}
      <div className="flex items-center gap-3">
        <IoMdVolumeLow className="transform rotate-180" />
        <div className="flex-1 relative bottom-[4px]">
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full h-[2px] bg-gray-600 rounded-lg appearance-none cursor-pointer slider rotate-180 outline-none"
            style={{
              background: `linear-gradient(to right, #ef4444 0%, #ef4444 ${volume}%, #4b5563 ${volume}%, #4b5563 100%)`,
            }}
          />
        </div>
        <IoMdVolumeHigh className="transform rotate-180" />
      </div>

      {/* Media Controls */}
      <div className="flex items-center justify-center gap-4">
        <div className="h-6 aspect-square bg-white/20"></div>

        {/* Previous Button */}
        <button onClick={handlePreviousStation}>
          <SkipBack size={16} fill="white" />
        </button>

        {/* Play/Pause Button */}
        <button
          className="p-3 rounded-full bg-red-600 hover:bg-red-700 transition-colors"
          onClick={togglePlayPause}
        >
          {isPlaying ? (
            <Square size={16} fill="white" />
          ) : (
            <Play size={16} fill="white" />
          )}
        </button>

        {/* Next Button */}
        <button onClick={handleNextStation}>
          <SkipForward size={16} fill="white" />
        </button>

        <div className="h-6 aspect-square bg-white/20"></div>
      </div>
    </div>
  );
};

export default Controls;
