import Section from "./Section";
import DataPlanet from "./DataPlanet";
import planets from "../../data.json";
import usePlanetStore from "../hooks/useStore";

export default function Planet() {
  const currentPlanet = usePlanetStore((state) => state.currentPlanet);
  const view = usePlanetStore((state) => state.view);
  const dataPlanet = planets.filter(
    (p) => p.name.toLowerCase() == currentPlanet,
  )[0];
  return (
    <>
      <div className="desktop:grid desktop:grid-cols-2 h-fit p-6">
        <div className="relative mb-20 flex flex-col items-center justify-center">
          <img
            className="animate-rotate desktop:w-2/5 tablet:w-1/4 tablet:my-8 w-1/2"
            src={`/images/planet-${currentPlanet}${
              view == "structure" ? "-internal" : ""
            }.svg`}
            alt=""
          />
          {view == "surface" && (
            <img
              className="tablet:w-1/8 desktop:w-2/10 absolute -bottom-15 w-2/7"
              src={`/images/geology-${currentPlanet}.png`}
            />
          )}
        </div>
        <section className="desktop:flex-col desktop:items-end desktop:flex tablet:grid tablet:grid-cols-2 flex w-full flex-col items-center justify-center">
          <div className="tablet:text-left desktop:w-4/5 text-center">
            <h1 className="text-white">{currentPlanet.toUpperCase()}</h1>
            <p className="tablet:text-[1.2rem] tablet:h-[6.5rem] text-white">
              {view == "overview"
                ? dataPlanet.overview.content
                : view == "structure"
                  ? dataPlanet.structure.content
                  : dataPlanet.geology.content}
            </p>
            <a
              target="_blanket"
              className="tablet:justify-start tablet:text-[1.2rem] mt-8 flex items-center justify-center gap-2 font-[spartanRegular] text-[1rem] text-white"
              href={
                view == "overview"
                  ? dataPlanet.overview.source
                  : view == "structure"
                    ? dataPlanet.structure.source
                    : dataPlanet.geology.source
              }
            >
              Source :
              <strong className="decoration font-[spartanBold] underline">
                Wikipedia
              </strong>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                <path
                  fill="#fff"
                  d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
                  opacity=".5"
                />
              </svg>
            </a>
          </div>
          <div className="tablet:block desktop:mt-6 desktop:w-4/5 hidden">
            <Section />
          </div>
        </section>
      </div>
      <DataPlanet />
    </>
  );
}
