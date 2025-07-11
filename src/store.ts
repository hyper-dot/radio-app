import { create } from "zustand";

interface Station {
  id: number;
  title: string;
  logo: string;
  color: string | null;
}

interface StationStore {
  currentStationIndex: number;
  stations: Station[];
  currentStation: Station | null;
  nextStation: () => void;
  previousStation: () => void;
  setStations: (stations: Station[]) => void;
  setCurrentStation: (index: number) => void;
}

export const useStationStore = create<StationStore>((set, get) => ({
  currentStationIndex: 0,
  stations: [],
  currentStation: null,

  nextStation: () => {
    const { currentStationIndex, stations } = get();
    if (stations.length > 0) {
      const nextIndex = (currentStationIndex + 1) % stations.length;
      set({
        currentStationIndex: nextIndex,
        currentStation: stations[nextIndex],
      });
    }
  },

  previousStation: () => {
    const { currentStationIndex, stations } = get();
    if (stations.length > 0) {
      const prevIndex =
        currentStationIndex === 0
          ? stations.length - 1
          : currentStationIndex - 1;
      set({
        currentStationIndex: prevIndex,
        currentStation: stations[prevIndex],
      });
    }
  },

  setStations: (stations: Station[]) => {
    set({
      stations,
      currentStation: stations.length > 0 ? stations[0] : null,
      currentStationIndex: 0,
    });
  },

  setCurrentStation: (index: number) => {
    const { stations } = get();
    if (index >= 0 && index < stations.length) {
      set({
        currentStationIndex: index,
        currentStation: stations[index],
      });
    }
  },
}));
