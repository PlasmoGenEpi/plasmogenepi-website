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
}: {
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
              Genetic Sleuthing & Surveillance
            </h3>
          </div>
          <div className="flex w-full px-8 py-4 md:hidden">
            <button
              className="inline-flex gap-2 text-orange-400"
              onClick={() => {
                setResetConfirmOpen(true);
              }}
            >
              <svg
                height="20pt"
                width="20pt"
                version="1.1"
                viewBox="0 0 1200 1200"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path
                  d="m287.73 350c72.848-90.875 184.54-149.27 309.9-149.99 1.7227-0.011718 3.4375-0.011718 5.1562 0 106.71 0.73047 203.5 43.242 274.8 111.99 4.1406 3.9883 8.1914 8.0664 12.156 12.234 67.055 70.43 108.7 165.28 110.21 269.84 0.066406 4.1406 0.0625 8.2812-0.003906 12.426-1.6523 103.7-42.77 197.81-108.98 267.98-5.2891 5.6055-10.742 11.059-16.359 16.363-70.281 66.383-164.61 107.57-268.54 109.11-3.8359 0.0625-7.6797 0.0625-11.523 0.011719-201.55-2.6953-367.12-154.46-391.46-350.07-3.4102-27.398-25.469-49.898-53.082-49.898s-50.258 22.441-47.504 49.914c1.6914 16.859 4.2344 33.574 7.6055 50.086 17.723 86.824 58.344 168.01 118.48 234.73 82.77 91.844 196.63 149.77 319.6 162.57 122.97 12.816 246.32-20.383 346.25-93.191 99.93-72.805 169.34-180.05 194.83-301.03 25.488-120.98 5.25-247.11-56.809-354.05-62.055-106.93-161.53-187.09-279.21-224.98-117.68-37.895-245.24-30.84-358.03 19.801-77.801 34.93-144.77 88.891-195.21 156.14v-100c0-27.613-22.387-50-50-50s-50 22.387-50 50v250h250c27.613 0 50-22.387 50-50s-22.387-50-50-50z"
                  fillRule="evenodd"
                />
              </svg>
              <span className="mt-1 text-lg">Reset</span>
            </button>
            {/* 1.5 */}
          </div>
          {module === "2.6"
            ? sections.map((section, idx) => {
                console.log(section);
                return (
                  <InteractiveSideBarSection
                    currentView={currentView}
                    setCurrentView={setCurrentView}
                    first={idx === 0}
                    key={idx}
                    node={{
                      title: section.title,
                      active: currentView.section === section.sectionId,
                      sectionId: section.sectionId,
                      locked: section.requiresAtom
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
                              typeof subComponent?.requiresKey === "number"
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
          {/* <InteractiveSideBarSection
            node={{
              title: "Genotype & Sleuthing",
              active: false,
              subcomponents: [
                {
                  title: "hello world",
                  active: false,
                  complete: false,
                  node: <></>,
                  requires: null,
                  callback: () => {},
                },
              ],
            }}
          /> */}
        </div>
      </div>
    </div>
  );
}
