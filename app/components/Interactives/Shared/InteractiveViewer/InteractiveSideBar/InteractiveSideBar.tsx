"use client";
import { atom, useAtom, useAtomValue } from "jotai";
import InteractiveSideBarSection from "./InteractiveSideBarSection/InteractiveSideBarSection";
// import { sections } from "@/app/components/Interactives/Sleuthing/2.6/pages/sections";
import { InteractiveViewSettings } from "../InteractiveViewer";
import { useEffect } from "react";
import { resetConfirmOpenAtom } from "../../ControlPanel/ResetModal";
// import { sections2 } from "@/app/components/Interactives/Sleuthing/5.6/pages/sections";
import { Atom } from "jotai";
import { SetStateAction } from "jotai";
import { sections } from "../../../Sleuthing/2.6/pages/sections";
import { sections2 } from "../../../Sleuthing/5.6/pages/sections";

export const sideBarIsOpenAtom = atom(true);

export default function InteractiveSideBar({
  module,
  currentView,
  setCurrentView,
  dev,
  lang = "EN",
}: {
  lang: "EN" | "FR" | "PT";
  dev?: boolean;
  currentView: InteractiveViewSettings;
  // SetAtom<[SetStateActionWithReset<{ module: string; section: number; phase: number; }>]
  setCurrentView: any;
  module: string | string[] | undefined;
}) {
  const [isOpen, setIsOpen] = useAtom(sideBarIsOpenAtom);
  // const [currentView, setCurrentView] = useAtom(currentViewAtom);
  const [resetConfirmOpen, setResetConfirmOpen] = useAtom(resetConfirmOpenAtom);

  return (
    <div
      inert={!isOpen}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setIsOpen(false);
        }
      }}
      // className={`grid sticky basis-0 top-0 shadow-lg shadow-black text-zinc-400 ${
      //   isOpen
      //     ? "min-w-full grid-cols-[1fr]"
      //     : "min-w-0 -translate-x-full grid-cols-[0fr]"
      // } md:duration-1000  md:min-w-fit overflow-auto relative transition-none md:transition-all h-[calc(100vh-80px)] md:h-[calc(100vh-48px)] bg-zinc-950`}
      className={`sticky top-0 grid text-zinc-400 shadow-lg shadow-black ${
        isOpen
          ? "min-w-full translate-x-0 grid-cols-[1fr]"
          : "min-w-0 -translate-x-full grid-cols-[0fr]"
      } md:transition-[grid-template-columns]/  relative h-[calc(100vh-80px)] overflow-auto bg-zinc-950 transition-none md:h-[calc(100vh-48px)] md:min-w-fit md:transition-all md:duration-1000`}
    >
      <button
        autoFocus={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="absolute right-2 top-2 border-b border-transparent text-sm hover:border-gray-200 hover:text-white focus-visible:text-white"
      >
        <svg
          width="16pt"
          height="16pt"
          version="1.1"
          viewBox="0 0 1200 1200"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 rotate-45 transform fill-current transition"
        >
          <path d="m226.8 651.6v-90c0-15.602 10.801-26.398 26.398-26.398h278.4l0.003906-278.4c0-13.199 10.801-27.602 27.602-27.602h88.801c16.801 0 27.602 14.398 27.602 27.602v278.4h278.4c15.602 0 26.398 10.801 26.398 26.398v90c0 15.602-10.801 27.602-26.398 27.602h-278.4v276c0 18-9.6016 27.602-27.602 27.602h-88.801c-18 0-27.602-9.6016-27.602-27.602v-276h-278.4c-16.801 0-26.398-12-26.398-27.598z"></path>
        </svg>
      </button>
      <div
        className={`col-span-2  ${
          isOpen ? "overflow-x-hidden" : "overflow-hidden"
        } overscroll-contain`}
      >
        <div
          className={` pb-32 md:pb-28  ${
            isOpen ? "md:delay-500" : "text-transparent"
          } duration-300`}
        >
          <div className="bg-interactiveGreen/60 px-12 pb-4 pt-8 text-center font-bold text-white ">
            <h3 className="text-nowrap text-lg ">
              {/* {module === "2.6"
                ? "Genetic Sleuthing & Surveillance"
                : module === "5.6"
                ? "5.6"
                : "4.4"} */}
              {lang === "EN"
                ? "Genetic Sleuthing & Surveillance"
                : lang === "FR"
                ? "Enquête et surveillance génétiques"
                : "Investigação e vigilância genética"}
            </h3>
          </div>
          {module === "2.6"
            ? sections.map((section, idx) => {
                return (
                  <InteractiveSideBarSection
                    currentView={currentView}
                    setCurrentView={setCurrentView}
                    first={idx === 0}
                    key={idx}
                    node={{
                      title: section.title[lang],
                      active: currentView.section === section.sectionId,
                      sectionId: section.sectionId,
                      locked:
                        dev === true
                          ? false
                          : section.requiresAtom
                          ? Object.values(
                              useAtomValue(section.requiresAtom),
                            ).includes(false)
                          : false,
                      // locked: useAtomValue(section.requiresAtom)[section.requiresKey]
                      subcomponents: section.subcomponents.map(
                        (subComponent, idx) => {
                          return {
                            active:
                              currentView.phase === subComponent.phase &&
                              currentView.section === section.sectionId,
                            complete:
                              typeof subComponent?.completionKey === "number" &&
                              section.completionAtom
                                ? useAtomValue(section.completionAtom)[
                                    subComponent.completionKey
                                  ]
                                : false,
                            requires:
                              dev === true
                                ? true
                                : typeof subComponent?.requiresKey === "number"
                                ? section.completionAtom
                                  ? !!useAtomValue(section.completionAtom)[
                                      subComponent.requiresKey
                                    ]
                                  : subComponent?.requiresKey === null
                                  ? !Object.values(
                                      useAtomValue(section.requiresAtom),
                                    ).includes(false)
                                  : false
                                : null,
                            title: subComponent.title?.[lang] ?? "",
                            callback: () => {
                              setCurrentView({
                                ...currentView,
                                section: section.sectionId,
                                phase: subComponent.phase,
                              });
                              // setInteractiveView
                            },
                          };
                        },
                      ),
                    }}
                  />
                );
              })
            : module === "5.6"
            ? sections2.map((section, idx) => {
                return (
                  <InteractiveSideBarSection
                    setCurrentView={setCurrentView}
                    sectionId={section.sectionId}
                    currentView={currentView}
                    first={idx === 0}
                    key={idx}
                    node={{
                      title: section.title,
                      active: currentView.section === section.sectionId,
                      locked: section.requiresAtom
                        ? Object.values(
                            useAtomValue(section.requiresAtom),
                          ).includes(false)
                        : false,
                      // locked: useAtomValue(section.requiresAtom)[section.requiresKey]
                      subcomponents: section.subcomponents.map(
                        (subComponent, idx) => {
                          if (subComponent.subcomponents) {
                            return {
                              title: subComponent.title,
                              section: section.sectionId,
                              subcomponents: subComponent.subcomponents,
                            };
                          }
                          return {
                            active:
                              currentView.phase === subComponent.phase &&
                              currentView.section === section.sectionId,
                            complete:
                              typeof subComponent?.completionKey === "number" &&
                              section.completionAtom
                                ? useAtomValue(section.completionAtom)[
                                    subComponent.completionKey
                                  ]
                                : false,
                            requires:
                              typeof subComponent?.requiresKey === "number" &&
                              section.completionAtom
                                ? useAtomValue(section.completionAtom)[
                                    subComponent.requiresKey
                                  ]
                                : null,
                            title: subComponent.title,
                            callback: () => {
                              setCurrentView({
                                ...currentView,
                                section: section.sectionId,
                                phase: subComponent.phase,
                              });
                              // setInteractiveView
                            },
                          };
                        },
                      ),
                    }}
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}
