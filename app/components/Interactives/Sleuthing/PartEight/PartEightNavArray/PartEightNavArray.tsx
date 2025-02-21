import {
  currentView2Atom,
  currentView3Atom,
} from "@/app/components/Interactives/Shared/InteractiveViewer/InteractiveViewer";
import Person from "../Person";
import { useAtom, useAtomValue } from "jotai";

export default function PartEightNavArray() {
  const [currentView, setCurrentView] = useAtom(currentView2Atom);

  return (
    <div className="mb-12 mr-auto flex w-full flex-wrap justify-around gap-8">
      <button
        onClick={() => {
          setCurrentView({ ...currentView, phase: 15 });
        }}
        className={`bg-red-500/ aspect-[2/1] ${
          currentView.phase === 15
            ? "outline-interactiveBlue rounded-lg outline "
            : ""
        } h-fit min-w-24 px-4 pb-2 pt-3 outline-4 duration-300`}
      >
        <Person id={"E"} />
      </button>
      <div
        className={`bg-red-500/ aspect-[2/1] ${
          currentView.phase === 16
            ? "outline-interactiveBlue rounded-lg outline "
            : ""
        } min-w-24 px-4 pb-2 pt-3 outline-4 duration-300`}
      >
        <Person id={"F"} />
      </div>{" "}
      <div
        className={`bg-red-500/ aspect-[2/1] ${
          currentView.phase === 17
            ? "outline-interactiveBlue rounded-lg outline "
            : ""
        } min-w-24 px-4 pb-2 pt-3 outline-4 duration-300`}
      >
        <Person id={"G"} />
      </div>{" "}
      <div
        className={`bg-red-500/ aspect-[2/1] ${
          currentView.phase === 18
            ? "outline-interactiveBlue rounded-lg outline "
            : ""
        } min-w-24 px-4 pb-2 pt-3 outline-4 duration-300`}
      >
        <Person id={"H"} />
      </div>
      {/* <div
        className={`bg-red-500/  ${
          currentView.phase === 18
            ? "rounded-lg outline outline-interactiveBlue "
            : ""
        } px-4 outline-4 pb-2 pt-3 duration-300 min-w-24`}
      >
        <Person id={"G"} />
        <Person id={"I"} />
      </div> */}
    </div>
  );
}
