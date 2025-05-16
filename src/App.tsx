import Header from "./components/Header";
import ListPlanets from "./components/ListPlanets";
import Planet from "./components/Planet";
import Section from "./components/Section";
import usePlanetStore from "./hooks/useStore";

export default function App() {
  const openMenu = usePlanetStore((state) => state.openMenu);
  return (
    <>
      <div>
        <Header />
      </div>
      <div className={`tablet:visible hidden`}>
        <ListPlanets />
      </div>
      <div className={`${openMenu && "hidden"} tablet:hidden`}>
        <Section />
      </div>
      <div className={`${openMenu && "hidden"} desktop:mx-40`}>
        <Planet />
      </div>
    </>
  );
}
