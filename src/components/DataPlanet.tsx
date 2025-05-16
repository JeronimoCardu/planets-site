import planets from "../../data.json";
import usePlanetStore from "../hooks/useStore";

export default function DataPlanet() {
  const currentPlanet = usePlanetStore((state) => state.currentPlanet);
  const planet = planets.filter(
    (p) => p.name.toLowerCase() == currentPlanet,
  )[0];
  return (
    <section className="tablet:flex tablet:gap-4 tablet:justify-between space-y-4 p-6">
      <div className="tablet:h-fit tablet:w-full tablet:flex-col tablet:items-start tablet:gap-2 flex items-center justify-between border-1 border-gray-50 p-6">
        <p className="font-[spartanBold] tablet:text-[1rem] text-[.8rem] leading-4 tracking-tight text-white opacity-40">
          ROTATION TIME
        </p>
        <p className="font-[antonioMedium] text-[1.25rem] tablet:text-[1.8rem] tracking-tight text-white">
          {planet.rotation.toUpperCase()}
        </p>
      </div>
      <div className="tablet:h-fit tablet:w-full tablet:flex-col tablet:items-start tablet:gap-2 flex items-center justify-between border-1 border-gray-50 p-6">
        <p className="font-[spartanBold] tablet:text-[1rem] text-[.8rem] leading-4 tracking-tight text-white opacity-40">
          REVOLUTION TIME
        </p>
        <p className="font-[antonioMedium] text-[1.25rem] tablet:text-[1.8rem] tracking-tight text-white">
          {planet.revolution.toUpperCase()}
        </p>
      </div>
      <div className="tablet:h-fit tablet:w-full tablet:flex-col tablet:items-start tablet:gap-2 flex items-center justify-between border-1 border-gray-50 p-6">
        <p className="font-[spartanBold] tablet:text-[1rem] text-[.8rem] leading-4 tracking-tight text-white opacity-40">
          RADIUS
        </p>
        <p className="font-[antonioMedium] text-[1.25rem] tablet:text-[1.8rem] tracking-tight text-white">
          {planet.radius.toUpperCase()}
        </p>
      </div>
      <div className="tablet:h-fit tablet:w-full tablet:flex-col tablet:items-start tablet:gap-2 flex items-center justify-between border-1 border-gray-50 p-6">
        <p className="font-[spartanBold] tablet:text-[1rem] text-[.8rem] leading-4 tracking-tight text-white opacity-40">
          AVERAGE TEMP.
        </p>
        <p className="font-[antonioMedium] text-[1.25rem] tablet:text-[1.8rem] tracking-tight text-white">
          {planet.temperature.toUpperCase()}
        </p>
      </div>
    </section>
  );
}
