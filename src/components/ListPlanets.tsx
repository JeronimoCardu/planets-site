import planets from "../../data.json";
import usePlanetStore from "../hooks/useStore";

export default function ListPlanets() {
  const setOpenMenu = usePlanetStore((state) => state.setOpenMenu);

  const openMenu = usePlanetStore((state) => state.openMenu);
  const setCurrentPlanet = usePlanetStore((state) => state.setCurrentPlanet);

  const setColorPlanet = (namePlanet: string) => {
    if (namePlanet == "Mercury") return "bg-[#DEF4FC]";
    if (namePlanet == "Venus") return "bg-[#F7CC7F]";
    if (namePlanet == "Earth") return "bg-[#545BFE]";
    if (namePlanet == "Mars") return "bg-[#FF6A45]";
    if (namePlanet == "Jupiter") return "bg-[#ECAD7A]";
    if (namePlanet == "Saturn") return "bg-[#FCCB6B]";
    if (namePlanet == "Uranus") return "bg-[#65F0D5]";
    if (namePlanet == "Neptune") return "bg-[#497EFA]";
  };
  return (
    <div
      className={`${openMenu ? "flex" : "hidden"} tablet:flex-row tablet:justify-center tablet:py-0 tablet:flex tablet:bg-transparent bg-070724 tablet:border-0 flex h-fit flex-col border-t-1 border-gray-500 py-6`}
    >
      {planets.map((planet, index) => (
        <button
          onClick={() => {
            setOpenMenu(false);
            setCurrentPlanet(planet.name);
          }}
          className={`tablet:border-0 tablet:opacity-75 tablet:hover:opacity-100 mx-6 flex cursor-pointer items-center py-4 ${
            index != 0 && "border-t-1 border-[rgba(255,255,255,.2)]"
          } justify-between`}
          key={index}
        >
          <div className="flex items-center gap-4">
            <div
              className={`tablet:hidden h-[20px] w-[20px] rounded-full ${setColorPlanet(
                planet.name,
              )}`}
            ></div>
            <h3 className="text-[15px] text-white">
              {planet.name.toUpperCase()}
            </h3>
          </div>
          <svg
            className="tablet:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="8"
          >
            <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
          </svg>
        </button>
      ))}
    </div>
  );
}
