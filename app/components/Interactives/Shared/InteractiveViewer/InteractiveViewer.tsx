"use client";
import { atom, useAtom } from "jotai";
import InteractiveSideBar, {
  sideBarIsOpenAtom,
} from "./InteractiveSideBar/InteractiveSideBar";
import InteractivePrimaryView from "./InteractivePrimaryView/InteractivePrimaryView";
import ResetPrompt, { resetConfirmOpenAtom } from "../ControlPanel/ResetModal";
import { useEffect } from "react";
import { atomWithStorage } from "jotai/utils";
import PartOneControlPanel from "../../Sleuthing/PartOne/PartOneControlPanel";
import InteractiveControlPanel from "../ControlPanel/InteractiveControlPanel";
import PartTwoControlPanel from "../../Sleuthing/PartTwo/PartTwoControlPanel";
import PartThreeControlPanel from "../../Sleuthing/PartThree/PartThreeControlPanel";
import PartFourControlPanel from "../../Sleuthing/PartFour/PartFourControlPanel";
import PartFiveControlPanel from "../../Sleuthing/PartFive/PartFiveControlPanel";
import Histogram2 from "../Histogram/Histogram2";
import PartSixControlBoard from "../../Sleuthing/PartSix/PartSixControlBoard";

export type InteractiveViewSettings = {
  module: "2.6" | "4.4" | "5.6";
  phase: number;
  section: null | number;
};

export const currentView1Atom = atomWithStorage<InteractiveViewSettings>(
  "currentView1Atom",
  {
    module: "2.6",
    section: null,
    phase: 0,
  },
);

export const currentView2Atom = atomWithStorage<InteractiveViewSettings>(
  "currentView2Atom",
  {
    module: "5.6",
    section: 0,
    phase: 0,
  },
);

export const currentView3Atom = atomWithStorage<InteractiveViewSettings>(
  "currentView3Atom",
  {
    module: "4.4",
    section: 0,
    phase: 0,
  },
);

export const allViewsAtom = atomWithStorage(
  "allViewsAtom",
  {
    "2.6": {
      module: "2.6",
      section: 0,
      phase: 0,
    },
    "4.4": {
      module: "4.4",
      section: 0,
      phase: 0,
    },
    "5.6": {
      module: "5.6",
      section: 1,
      phase: 0,
    },
  },
  undefined,
  {
    getOnInit: true,
  },
);

export const viewAtom = atomWithStorage("viewAtom", {
  2.6: {},
  4.4: {},
  5.6: {},
});

export const sideBarDisablesMainContent = false;

export default function InteractiveViewer({
  module,
  dev,
  lang,
}: {
  lang: "EN" | "FR" | "PT";
  dev?: boolean;
  module: "2.6" | "4.4" | "5.6";
}) {
  const [isOpen, setIsOpen] = useAtom(sideBarIsOpenAtom);
  const [resetConfirmOpen, setResetConfirmOpen] = useAtom(resetConfirmOpenAtom);
  const [currentView1, setCurrentView1] = useAtom(currentView1Atom);
  const [currentView2, setCurrentView2] = useAtom(currentView2Atom);
  const [currentView3, setCurrentView3] = useAtom(currentView3Atom);
  const [allViews, setAllViews] = useAtom(allViewsAtom);

  const currentView =
    module === "2.6"
      ? currentView1
      : module === "5.6"
      ? currentView2
      : currentView3;
  const setCurrentView =
    module === "2.6"
      ? setCurrentView1
      : module === "5.6"
      ? setCurrentView2
      : setCurrentView3;

  useEffect(() => {
    if (
      currentView.section === null &&
      localStorage.getItem("currentView1Atom") === null
    ) {
      setCurrentView({ ...currentView, section: 0, phase: 0 });
    }
  }, []);

  return (
    <div className="">
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        style={{
          animationDelay: `500ms`,
          animationDuration: `500ms`,
          animationFillMode: "forwards",
        }}
        className={`sr-only`}
      >
        Open Menu
      </button>
      <div className="flex w-full max-w-full grow overflow-clip">
        <ResetPrompt currentModule="2.6" lang={lang} />
        <InteractiveSideBar
          lang={lang}
          dev={dev}
          module={module}
          currentView={currentView}
          setCurrentView={setCurrentView}
        />
        <div
          className={`${
            isOpen ? "hidden md:flex" : ""
          } relative flex grow @container/margins`}
        >
          {sideBarDisablesMainContent && (
            <div
              onClick={() => {
                setIsOpen(false);
              }}
              className={`absolute inset-0 z-10  cursor-pointer duration-300 ${
                isOpen ? "pointer-events-auto" : "hidden"
              }`}
            ></div>
          )}
          <div
            className={`${
              isOpen ? "min-w-4 grow basis-0" : "min-w-2 grow basis-0"
            } duration-1000`}
          ></div>
          {/* <span className="absolute left-1/2 top-4">
            {JSON.stringify(currentView)}
          </span> */}
          <InteractivePrimaryView
            lang={lang}
            currentView={currentView}
            setCurrentView={setCurrentView}
          />
          <div
            className={`${
              isOpen ? "min-w-4 grow basis-0" : "min-w-2 grow basis-0"
            } duration-1000`}
          ></div>
        </div>
      </div>
      {module === "2.6" ? (
        <div>
          <PartOneControlPanel menuOpen={isOpen} setMenuOpen={setIsOpen} />
          <PartTwoControlPanel />
          <PartThreeControlPanel />
          <PartFourControlPanel />
          <PartFiveControlPanel />
          <InteractiveControlPanel lang={lang} />
        </div>
      ) : module === "5.6" ? (
        <div>
          {/* <InteractiveControlPanel /> */}
          <PartSixControlBoard />
        </div>
      ) : null}
    </div>
  );
}
