import { useState } from "react";
import { SideBarSection } from "./InteractiveSideBar4";
import { sideBarIsOpenAtom } from "../InteractiveSideBar";
import { useAtom, useAtomValue } from "jotai";
import { currentView2Atom } from "../../InteractiveViewer";
import { partEightCompletionAtom } from "@/data/Interactives/interactiveStore";

export default function SideBar4SubComponent({
  section,
}: {
  section: SideBarSection;
}) {
  const sideBarIsOpen = useAtomValue(sideBarIsOpenAtom);
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useAtom(currentView2Atom);
  const completion8 = useAtomValue(partEightCompletionAtom);
  return (
    <button
      disabled={section.sectionTitle === "Summary" ? !completion8[39] : false}
      onClick={() => {
        if (section.sectionTitle === "Summary") {
          setCurrentView({ ...currentView, section: 3, phase: 40 });
        } else {
          setIsOpen(!isOpen);
        }
      }}
      className={`block w-[384px] border-b border-white/20 
        ${
          currentView.section === 3 &&
          currentView.phase === 40 &&
          section.sectionTitle === "Summary"
            ? "bg-white/5"
            : section.sectionTitle === "Summary"
            ? "hover:bg-white/5"
            : ""
        }
        ${isOpen ? "pt-2" : "py-2"} ${
          !isOpen &&
          currentView.section === section.sectionId &&
          currentView.section !== 3 &&
          currentView.phase !== 40
            ? "bg-white/5"
            : ""
        } text-start text-sm duration-300`}
    >
      <div className="grid gap-[5%] [grid-template-columns:40px_auto_40px]">
        <div className="col-start-1">
          {section.sectionTitle !== "Summary" && (
            <svg
              width="16pt"
              height="16pt"
              className={`m-auto mt-2 fill-current  ${
                isOpen ? "-rotate-90" : ""
              } duration-500`}
              version="1.1"
              viewBox="0 0 1200 1200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m562.88 812.12-300-300c-20.5-20.504-20.5-53.746 0-74.25 20.504-20.5 53.746-20.5 74.25 0l262.88 262.88 262.88-262.88c20.504-20.5 53.746-20.5 74.25 0 20.5 20.504 20.5 53.746 0 74.25l-300 300c-20.504 20.5-53.746 20.5-74.25 0z" />
            </svg>
          )}
        </div>
        <h6
          className={`col-start-2 block translate-y-0.5 overflow-hidden text-ellipsis ${
            !isOpen ? "text-nowrap" : ""
          } py-2 pr-2`}
        >
          {section.sectionTitle}
        </h6>
        <div className="col-start-3"></div>
      </div>
      <div
        className={`${sideBarIsOpen ? "" : "hidden"} ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        } grid ${sideBarIsOpen ? "duration-500" : ""}`}
      >
        <ol
          // inert={!isOpen || node.locked}
          className="col-span-2 row-span-2 grid overflow-hidden"
        >
          {section.subcomponents.map((subcomponent, idx2) => {
            return (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  subcomponent.callback(setCurrentView);
                }}
                disabled={!subcomponent.available}
                className={`grid w-full gap-[5%] py-3 ${
                  subcomponent.pad
                    ? "pl-[calc(52px+10%)]"
                    : "pl-[calc(40px+10%)]"
                } text-start [grid-template-columns:auto_40px] ${
                  isOpen && subcomponent.isActive(currentView)
                    ? "bg-white/[5%]"
                    : "hover:bg-white/[2%]"
                }`}
                key={idx2}
              >
                <h6 className=" block translate-y-0.5">{subcomponent.title}</h6>
                <div
                  className={`${
                    subcomponent.complete
                      ? "bg-current"
                      : subcomponent.available
                      ? ""
                      : "hidden"
                  } my-auto ml-auto mr-4 aspect-square h-2 w-2 rounded-full border border-current`}
                ></div>
              </button>
            );
          })}
        </ol>
      </div>
    </button>
  );
}
