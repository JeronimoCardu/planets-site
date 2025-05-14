import { useLocation } from "react-router-dom";
import planets from "../../data.json";

export default function DataPlanet() {
  const { pathname } = useLocation();
  const planet = planets[planets.findIndex((p) => p.name != pathname.slice(1))];
  return (
    <section className="mx-2 pb-5 space-y-4">
      <div className="flex justify-between  items-center p-6 border-1 border-gray-50">
        <p className="text-white font-[spartanBold] opacity-40 text-[.8rem] leading-4 tracking-tight">
          ROTATION TIME
        </p>
        <p className="text-white font-[antonioMedium]  tracking-tight text-[1.25rem]">
          {planet.rotation.toUpperCase()}
        </p>
      </div>
      <div className="flex justify-between  items-center p-6 border-1 border-gray-50">
        <p className="text-white font-[spartanBold] opacity-40 text-[.8rem] leading-4 tracking-tight">
          REVOLUTION TIME
        </p>
        <p className="text-white font-[antonioMedium]  tracking-tight text-[1.25rem]">
          {planet.revolution.toUpperCase()}
        </p>
      </div>
      <div className="flex justify-between items-center p-6 border-1 border-gray-50">
        <p className="text-white font-[spartanBold] opacity-40 text-[.8rem] leading-4 tracking-tight">
          RADIUS
        </p>
        <p className="text-white font-[antonioMedium]  tracking-tight text-[1.25rem]">
          {planet.radius.toUpperCase()}
        </p>
      </div>
      <div className="flex justify-between items-center p-6 border-1 border-gray-50">
        <p className="text-white font-[spartanBold] opacity-40 text-[.8rem] leading-4 tracking-tight">
          AVERAGE TEMP.
        </p>
        <p className="text-white font-[antonioMedium]  tracking-tight text-[1.25rem]">
          {planet.temperature.toUpperCase()}
        </p>
      </div>
    </section>
  );
}
