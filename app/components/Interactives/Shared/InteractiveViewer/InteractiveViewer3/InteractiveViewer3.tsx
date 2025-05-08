"use client";
import { atom, useAtom } from "jotai";
import InteractivePrimaryView from "../InteractivePrimaryView/InteractivePrimaryView";
import InteractiveSideBar2 from "../InteractiveSideBar/InteractiveSideBar2";
import {
  currentView3Atom,
  sideBarDisablesMainContent,
} from "../InteractiveViewer";
import InteractiveSideBar, {
  sideBarIsOpenAtom,
} from "../InteractiveSideBar/InteractiveSideBar";
import InteractiveControlPanel2 from "../../ControlPanel/InteractiveControlPanel2";
import ResetPrompt from "../../ControlPanel/ResetModal";
import { useEffect, useRef } from "react";
import InteractiveSideBar3 from "../InteractiveSideBar/InteractiveSideBar3";
import DragDropPrimaryView from "./DragDropPrimaryView";
// import DragDropControlPanel from "@/app/components/Interactives/DragDrop/DragDropControlPanel";
import DragDropViewMargin from "./DragDropViewMargin";
import DragDropControlPanel from "../../../DragDrop/DragDropControlPanel";

export default function InteractiveViewer3({
  module,
  dev,
}: {
  dev?: boolean;
  module: "2.6" | "4.4" | "5.6";
}) {
  const [isOpen, setIsOpen] = useAtom(sideBarIsOpenAtom);
  const [currentView, setCurrentView] = useAtom(currentView3Atom);
  const scrollRef = useRef<null | HTMLDivElement>(null);
  const scrollIntervalTimeoutRef = useRef<null | NodeJS.Timeout>(null);
  const verticalScrollIntervalTimeoutRef = useRef<null | NodeJS.Timeout>(null);

  // useEffect(() => {
  //   if (
  //     currentView.section === null &&
  //     localStorage.getItem("currentView3Atom") === null
  //   ) {
  //     setCurrentView({ ...currentView, section: 0, phase: 0 });
  //   }
  // }, []);

  return (
    <div className="bg-zinc-100 dark:bg-transparent">
      <button
        onClick={() => {
          console.log("clicked");
          setIsOpen(true);
        }}
        style={{
          animationDelay: `500ms`,
          animationDuration: `500ms`,
          animationFillMode: "forwards",
        }}
        className={`sr-only left-4 top-4 focus:not-sr-only focus:absolute`}
      >
        Open Menu
      </button>
      <div className="flex w-full max-w-full grow overflow-clip">
        <ResetPrompt currentModule="4.4" />
        {/* <InteractiveSideBar
          module={module}
          currentView={currentView}
          setCurrentView={setCurrentView}
        /> */}
        <InteractiveSideBar3 module={"4.4"} dev={dev} />
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
          {/* <DragDropViewMargin /> */}
          <DragDropPrimaryView
            verticalScrollIntervalTimeoutRef={verticalScrollIntervalTimeoutRef}
            scrollIntervalTimeoutRef={scrollIntervalTimeoutRef}
            scrollRef={scrollRef}
          />
          {/* <DragDropViewMargin /> */}
        </div>
      </div>
      <DragDropControlPanel scrollRef={scrollRef} />
    </div>
  );
}
