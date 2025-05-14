import ListPlanets from "./ListPlanets";
import { useLocation } from "react-router-dom";
type Props = {
  openMenu: boolean;
  setOpenMenu: (open: boolean) => void;
};

export default function Header({ openMenu, setOpenMenu }: Props) {
  const { pathname } = useLocation();
  return (
    <>
      <header>
        <div className="flex p-6 justify-between items-center">
          <h2 className="text-white">THE PLANETS</h2>
          <button
            onClick={() => pathname != "/" && setOpenMenu(!openMenu)}
            className=" tablet:hidden cursor-pointer"
          >
            <img src="/images/icon-hamburger.svg" alt="menu" />
          </button>
        </div>
        <div className="tablet:hidden">
          {pathname == "/" || openMenu ? (
            <ListPlanets setOpenMenu={setOpenMenu} />
          ) : (
            ""
          )}
        </div>
      </header>
    </>
  );
}
