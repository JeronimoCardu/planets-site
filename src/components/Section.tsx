import usePlanetStore from "../hooks/useStore";

export default function Section() {
  const view = usePlanetStore((state) => state.view);
  const setView = usePlanetStore((state) => state.setView);
  const openMenu = usePlanetStore((state) => state.openMenu);
  const currentPlanet = usePlanetStore((state) => state.currentPlanet);

  const setColorPlanet = (namePlanet: string) => {
    if (namePlanet == "mercury") return "tablet:bg-[#419EBB]";
    if (namePlanet == "venus") return "tablet:bg-[#EDA249]";
    if (namePlanet == "earth") return "tablet:bg-[#6D2ED5]";
    if (namePlanet == "mars") return "tablet:bg-[#D14C32]";
    if (namePlanet == "jupiter") return "tablet:bg-[#D83A34]";
    if (namePlanet == "saturn") return "tablet:bg-[#CD5120]";
    if (namePlanet == "uranus") return "tablet:bg-[#1EC1A2]";
    if (namePlanet == "neptune") return "tablet:bg-[#2D68F0]";
  };
  return (
    <div
      className={`${
        openMenu ? "hidden" : "visible"
      } tablet:flex-col tablet:items-end tablet:gap-4 tablet:border-0 flex w-full items-center justify-around overflow-y-hidden border-t border-b border-[rgba(255,255,255,.2)] text-white`}
    >
      <button
        onClick={() => setView("overview")}
        className={`${
          view == "overview"
            ? `linear ease ${setColorPlanet(currentPlanet)} tablet:border-0 border-419ebb tablet:py-4 tablet:transition-none border-b-[4px] py-[14px] transition-all duration-300`
            : "tablet:opacity-100 tablet:hover:bg-[rgba(216,216,216,.2)] opacity-50"
        } tablet:border-gray-50 tablet:border-1 desktop:w-full tablet:w-8/10 tablet:flex tablet:px-6 cursor-pointer py-4 font-[spartanBold]`}
      >
        <span className="tablet:block tablet:opacity-50 hidden pr-2">01</span>
        OVERVIEW
      </button>
      <button
        onClick={() => setView("structure")}
        className={`${
          view == "structure"
            ? `linear ease ${setColorPlanet(currentPlanet)} tablet:border-0 border-419ebb tablet:py-4 tablet:transition-none border-b-[4px] py-[14px] transition-all duration-300`
            : "tablet:opacity-100 tablet:hover:bg-[rgba(216,216,216,.2)] opacity-50"
        } tablet:border-gray-50 tablet:border-1 desktop:w-full tablet:w-8/10 tablet:flex tablet:px-6 cursor-pointer py-4 font-[spartanBold]`}
      >
        <span className="tablet:block tablet:opacity-50 hidden pr-2">02</span>
        <span className="tablet:block hidden pr-2">INTERNAL</span>STRUCTURE
      </button>
      <button
        onClick={() => setView("surface")}
        className={`${
          view == "surface"
            ? `linear ease ${setColorPlanet(currentPlanet)} tablet:border-0 border-419ebb tablet:py-4 tablet:transition-none border-b-[4px] py-[14px] transition-all duration-300`
            : "tablet:opacity-100 tablet:hover:bg-[rgba(216,216,216,.2)] opacity-50"
        } tablet:border-gray-50 tablet:border-1 desktop:w-full tablet:w-8/10 tablet:flex tablet:px-6 cursor-pointer py-4 font-[spartanBold]`}
      >
        <span className="tablet:block tablet:opacity-50 hidden pr-2">03</span>
        SURFACE
        <span className="tablet:block hidden pl-2">GEOLOGY</span>
      </button>
    </div>
  );
}
