import { NavLink } from "react-router-dom";
import planets from "../../data.json";
type Props = {
  setOpenMenu: (open: boolean) => void;
};

export default function ListPlanets({ setOpenMenu }: Props) {
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
    <div className="flex flex-col border-t-1 py-6 border-white h-screen bg-070724">
      {planets.map((planet, index) => (
        <NavLink
          onClick={() => setOpenMenu(false)}
          className={`flex items-center mx-8 py-4 ${
            index != 0 && "border-t-1 border-[rgba(255,255,255,.2)] "
          } justify-between`}
          key={index}
          to={`/${planet.name.toLowerCase()}`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-[20px] rounded-full h-[20px] ${setColorPlanet(
                planet.name
              )}`}
            ></div>
            <h3 className="text-white text-[15px]">
              {planet.name.toUpperCase()}
            </h3>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
            <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
          </svg>
        </NavLink>
      ))}
    </div>
  );
}
