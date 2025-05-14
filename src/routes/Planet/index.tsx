import Header from "../../components/Header";
import DataPlanet from "../../components/DataPlanet";
import { Link, useLocation } from "react-router-dom";
import planets from "../../../data.json";
import Section from "../../components/Section";
import { useState } from "react";

export default function Planet() {
  const [view, setView] = useState<string>("overview");
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { pathname } = useLocation();

  const planet =
    planets[
      planets.findIndex((p) => p.name.toLowerCase() == pathname.slice(1))
    ];
  return (
    <>
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Section view={view} setView={setView} />
      <div className={`h-full p-6 `}>
        <section className=" w-full flex flex-col justify-center items-center">
          <div className="relative mb-20 flex flex-col justify-center items-center">
            <img
              className="w-1/2"
              src={`/images/planet-${pathname.slice(1)}${
                view == "structure" ? "-internal" : ""
              }.svg`}
              alt=""
            />
            {view == "surface" && (
              <img
                className="absolute w-1/3 -bottom-15"
                src={`/images/geology-${pathname.slice(1)}.png`}
              />
            )}
          </div>
          <h1 className="text-white">{planet.name.toUpperCase()}</h1>
          <p className="text-white text-center">
            {view == "overview"
              ? planet.overview.content
              : view == "structure"
              ? planet.structure.content
              : planet.geology.content}
          </p>
        </section>
        <Link
          className="flex gap-2 justify-center items-center my-8 text-white font-[spartanRegular] text-[1rem]"
          to={
            view == "overview"
              ? planet.overview.source
              : view == "structure"
              ? planet.structure.source
              : planet.geology.source
          }
        >
          Source :
          <strong className="decoration underline font-[spartanBold] ">
            Wikipedia
          </strong>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path
              fill="#fff"
              d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
              opacity=".5"
            />
          </svg>
        </Link>
        <DataPlanet />
      </div>
    </>
  );
}
