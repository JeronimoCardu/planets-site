import usePlanetStore from "../hooks/useStore";
import ListPlanets from "./ListPlanets";

export default function Header() {
  const setOpenMenu = usePlanetStore((state) => state.setOpenMenu);
  const openMenu = usePlanetStore((state) => state.openMenu);
  return (
    <>
      <header className="desktop:flex desktop:justify-between desktop:items-center tablet:border-b-1 tablet:border-t-0 border-gray-500">
        <div className="tablet:justify-center flex items-center justify-between p-6">
          <h2 className="text-white">THE PLANETS</h2>
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="tablet:hidden cursor-pointer"
          >
            <img src="/images/icon-hamburger.svg" alt="menu" />
          </button>
        </div>
        <ListPlanets />
      </header>
    </>
  );
}
