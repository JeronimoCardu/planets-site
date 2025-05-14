type Props = {
  view: string;
  setView: (s: string) => void;
};

export default function Section({ view, setView }: Props) {
  return (
    <div className="border-t text-white border-b border-[rgba(255,255,255,.2)] flex justify-around items-center">
      <button
        onClick={() => setView("overview")}
        className={`${
          view == "overview"
            ? "border-b-[4px] transition-all linear ease duration-300 border-419ebb py-[14px]"
            : "opacity-50"
        }  py-4 cursor-pointer`}
      >
        OVERVIEW
      </button>
      <button
        onClick={() => setView("structure")}
        className={`${
          view == "structure"
            ? "border-b-[4px] transition-all linear ease duration-300 border-419ebb py-[14px]"
            : "opacity-50"
        }  py-4 cursor-pointer`}
      >
        STRUCTURE
      </button>
      <button
        onClick={() => setView("surface")}
        className={`${
          view == "surface"
            ? "border-b-[4px] transition-all linear ease duration-300 border-419ebb py-[14px]"
            : "opacity-50"
        }  py-4 cursor-pointer`}
      >
        SURFACE
      </button>
    </div>
  );
}
