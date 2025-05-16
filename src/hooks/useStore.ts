import { create } from "zustand";

type PlanetProps = {
  view: string;
  setView: (v: string) => void;
  openMenu: boolean;
  setOpenMenu: (open: boolean) => void;
  currentPlanet: string;
  setCurrentPlanet: (planet: string) => void;
};

const usePlanetStore = create<PlanetProps>((set) => ({
  view: "overview",
  setView: (v: string) => set({ view: v }),
  openMenu: false,
  setOpenMenu: (open: boolean) => set({ openMenu: open }),
  currentPlanet: "mercury",
  setCurrentPlanet: (planet: string) =>
    set({ currentPlanet: planet.toLowerCase() }),
}));

export default usePlanetStore;
