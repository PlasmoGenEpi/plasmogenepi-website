import { useAtom, useAtomValue } from "jotai";
import {
  currentView2Atom,
  InteractiveViewSettings,
} from "../InteractiveViewer";
import { sideBarIsOpenAtom } from "./InteractiveSideBar";
import { resetConfirmOpenAtom } from "../../ControlPanel/ResetModal";
// import { sections2 } from "@/app/components/Interactives/Sleuthing/5.6/pages/sections";
import InteractiveSideBarSection from "./InteractiveSideBarSection/InteractiveSideBarSection";
import InteractiveSideBarSection2 from "./InteractiveSideBarSection/InteractiveSideBarSection2";
import {
  partSevenCompletionAtom,
  partSixCompletionAtom,
} from "@/data/Interactives/interactiveStore";
import { s2p0CompletionAtom } from "../../ControlPanel/InteractiveControlPanel2";
import StepThreeSubSection from "./InteractiveSideBarSection/SideBarSubSections/StepThreeSubSection";
import { sections2 } from "../../../Sleuthing/5.6/pages/sections";

export default function InteractiveSideBar2({
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
  const p0Completion = useAtomValue(s2p0CompletionAtom);
  const completion6 = useAtomValue(partSixCompletionAtom);
  const completion7 = useAtomValue(partSevenCompletionAtom);
  // const [resetConfirmOpen, setResetConfirmOpen] = useAtom(resetConfirmOpenAtom);

  const handleFunctionality = function (id: number) {};

  const listCallback = function (sectionId: number, title: string) {
    if (sectionId === 0) {
      if (title === "Introduction") {
        setCurrentView({ ...currentView, section: 0, phase: 0 });
      } else if (title === "Case Study Background") {
        setCurrentView({ ...currentView, section: 0, phase: 1 });
      } else if (title === "Your Goal") {
        setCurrentView({ ...currentView, section: 0, phase: 2 });
      } else if (title === "Instructions") {
        setCurrentView({ ...currentView, section: 0, phase: 3 });
      }
    }
    if (sectionId === 1) {
      if (title === "Background") {
        setCurrentView({ ...currentView, section: 1, phase: 0 });
      } else if (
        title === "1.1.1 Genotype 3 unrelated laboratory clones with SNPs"
      ) {
        setCurrentView({ ...currentView, section: 1, phase: 1 });
      } else if (
        title ===
        "1.1.2 Predict what you will observe about IBS/IBD in pairwise comparisons"
      ) {
        setCurrentView({ ...currentView, section: 1, phase: 2 });
      } else if (
        title === "1.1.3 Genotype and compare pairs of related clones"
      ) {
        setCurrentView({ ...currentView, section: 1, phase: 3 });
      } else if (title === "1.1.4 Observe all three IBS estimates together") {
        setCurrentView({ ...currentView, section: 1, phase: 6 });
      } else if (title === "1.1.5 Knowledge Check") {
        setCurrentView({ ...currentView, section: 1, phase: 8 });
      } else if (
        title === "1.1.6 Generate laboratory clone for 1 hybrid strain"
      ) {
        setCurrentView({ ...currentView, section: 1, phase: 11 });
      } else if (
        title ===
        "1.1.7 Genotype and compare hybrid clone to first three clones"
      ) {
        setCurrentView({ ...currentView, section: 1, phase: 12 });
      } else if (title === "1.1.8 Knowledge Check") {
        setCurrentView({ ...currentView, section: 1, phase: 15 });
      } else if (
        title ===
        "1.2.1 Genotype 3 unrelated laboratory clones with microhaplotypes"
      ) {
        setCurrentView({ ...currentView, section: 1, phase: 22 });
      } else if (
        title ===
        "1.2.2 Predict what you will observe about IBS/IBD in pairwise comparisons"
      ) {
        setCurrentView({ ...currentView, section: 1, phase: 22.5 });
      } else if (
        title === "1.2.3 Genotype and compare pairs of related clones"
      ) {
        setCurrentView({ ...currentView, section: 1, phase: 23 });
      } else if (title === "1.2.4 Observe all three IBS estimates together") {
        setCurrentView({ ...currentView, section: 1, phase: 26 });
      } else if (
        title === "1.2.5 Generate laboratory clone for 1 hybrid strain"
      ) {
        setCurrentView({ ...currentView, section: 1, phase: 29 });
      } else if (
        title ===
        "1.2.6 Genotype and compare hybrid clone to first three clones"
      ) {
        setCurrentView({ ...currentView, section: 1, phase: 30 });
      } else if (title === "1.2.7 Knowledge Check") {
        setCurrentView({ ...currentView, section: 1, phase: 33 });
      }
    } else if (sectionId === 2) {
      if (title === "Summary") {
        setCurrentView({ ...currentView, section: 2, phase: 17 });
      } else if (
        title === sections2[2].subcomponents[0].subcomponents[0].title
      ) {
        setCurrentView({ ...currentView, section: 2, phase: 0 });
      } else if (
        title === sections2[2].subcomponents[0].subcomponents[1].title
      ) {
        setCurrentView({ ...currentView, section: 2, phase: 1 });
      } else if (
        title === sections2[2].subcomponents[0].subcomponents[2].title
      ) {
        setCurrentView({ ...currentView, section: 2, phase: 2 });
      } else if (
        title === sections2[2].subcomponents[1].subcomponents[0].title
      ) {
        if (completion7[4]) {
          setCurrentView({ ...currentView, section: 2, phase: 5 });
        } else {
          setCurrentView({ ...currentView, section: 2, phase: 4 });
        }
        // setCurrentView({ ...currentView, section: 2, phase: 3 });
      } else if (
        title === sections2[2].subcomponents[1].subcomponents[1].title
      ) {
        // setCurrentView({ ...currentView, section: 2, phase: 4 });
        if (completion7[6]) {
          setCurrentView({ ...currentView, section: 2, phase: 7 });
        } else {
          setCurrentView({ ...currentView, section: 2, phase: 6 });
        }
      } else if (
        title === sections2[2].subcomponents[1].subcomponents[2].title
      ) {
        setCurrentView({ ...currentView, section: 2, phase: 8 });
      } else if (
        title === sections2[2].subcomponents[2].subcomponents[0].title
      ) {
        if (completion7[10]) {
          setCurrentView({ ...currentView, section: 2, phase: 11 });
        } else {
          setCurrentView({ ...currentView, section: 2, phase: 10 });
        }
        // setCurrentView({ ...currentView, section: 1, phase: 12 });
      } else if (
        title === sections2[2].subcomponents[2].subcomponents[1].title
      ) {
        setCurrentView({ ...currentView, section: 2, phase: 12 });
      } else if (
        title === sections2[2].subcomponents[2].subcomponents[2].title
      ) {
        if (completion7[14]) {
          setCurrentView({ ...currentView, section: 2, phase: 15 });
        } else {
          setCurrentView({ ...currentView, section: 2, phase: 14 });
        }
        // setCurrentView({ ...currentView, section: 2, phase: 12 });
      } else if (
        title === sections2[2].subcomponents[2].subcomponents[3].title
      ) {
        setCurrentView({ ...currentView, section: 2, phase: 16 });
      }
    } else if (sectionId === 3) {
      if (title === sections2[3].subcomponents[0].subcomponents[0].title) {
        setCurrentView({ ...currentView, phase: 1, section: 3 });
      } else if (
        title === sections2[3].subcomponents[0].subcomponents[1].title
      ) {
        setCurrentView({ ...currentView, phase: 4, section: 3 });
      } else if (
        title === sections2[3].subcomponents[0].subcomponents[2].title
      ) {
        setCurrentView({ ...currentView, phase: 5, section: 3 });
      } else if (
        title === sections2[3].subcomponents[0].subcomponents[3].title
      ) {
        setCurrentView({ ...currentView, phase: 6, section: 3 });
      } else if (
        title === sections2[3].subcomponents[0].subcomponents[4].title
      ) {
        setCurrentView({ ...currentView, phase: 8, section: 3 });
      } else if (
        title === sections2[3].subcomponents[1].subcomponents[0].title
      ) {
        setCurrentView({ ...currentView, phase: 9, section: 3 });
      } else if (
        title === sections2[3].subcomponents[1].subcomponents[1].title
      ) {
        setCurrentView({ ...currentView, phase: 10, section: 3 });
      } else if (
        title === sections2[3].subcomponents[1].subcomponents[2].title
      ) {
        setCurrentView({ ...currentView, phase: 12, section: 3 });
      } else if (
        title === sections2[3].subcomponents[1].subcomponents[3].title
      ) {
        setCurrentView({ ...currentView, phase: 20, section: 3 });
      } else if (
        title === sections2[3].subcomponents[1].subcomponents[4].title
      ) {
        setCurrentView({ ...currentView, phase: 23, section: 3 });
      }
    }
  };

  const isLocked = function (sectionId: number, title: string) {
    if (sectionId === 0) {
      if (title === sections2[0].subcomponents[0].title) {
        return {
          locked: false,
          complete: p0Completion[0],
        };
      } else if (title === sections2[0].subcomponents[1].title) {
        return {
          locked: !p0Completion[0],
          complete: p0Completion[1],
        };
      } else if (title === sections2[0].subcomponents[2].title) {
        return {
          locked: !p0Completion[1],
          complete: p0Completion[2],
        };
      } else if (title === sections2[0].subcomponents[3].title) {
        return {
          locked: !p0Completion[2],
          complete: p0Completion[3],
        };
      }
    } else if (sectionId === 1) {
      if (title === sections2[1].subcomponents[0].title) {
        return {
          locked: false,
          complete: completion6[0],
        };
      } else if (title === sections2[1].subcomponents[1].title) {
        return {
          locked: completion6[0],
          complete: completion6[1],
        };
      }
    } else if (sectionId === 2) {
      if (title === "Summary") {
        return {
          available: completion7[16],
          complete: completion7[17],
        };
      }
    }
  };

  const isActive = function (sectionId: number, title: string) {
    let { phase } = currentView;
    if (currentView.section === 0) {
      if (sectionId === 0) {
        if (title === "Introduction") {
          return phase === 0;
        } else if (title === "Case Study Background") {
          return phase === 1;
        } else if (title === "Your Goal") {
          return phase === 2;
        } else if (title === "Instructions") {
          return phase === 3;
        }
      }
    }
    if (currentView.section === 1) {
      if (sectionId === 1) {
        if (title === "Background") {
          return phase === 0;
        } else if (
          title === "1.1.1 Genotype 3 unrelated laboratory clones with SNPs"
        ) {
          return phase === 1;
        } else if (
          title ===
          "1.1.2 Predict what you will observe about IBS/IBD in pairwise comparisons"
        ) {
          return phase === 2;
        } else if (
          title === "1.1.3 Genotype and compare pairs of related clones"
        ) {
          return phase >= 3 && phase < 6;
        } else if (title === "1.1.4 Observe all three IBS estimates together") {
          return phase === 6;
        } else if (title === "1.1.5 Knowledge Check") {
          return phase >= 8 && phase <= 10;
        } else if (
          title === "1.1.6 Generate laboratory clone for 1 hybrid strain"
        ) {
          return phase === 11;
        } else if (
          title ===
          "1.1.7 Genotype and compare hybrid clone to first three clones"
        ) {
          return phase >= 12 && phase < 15;
        } else if (title === "1.1.8 Knowledge Check") {
          return phase >= 15 && phase < 20;
        } else if (
          title ===
          "1.2.1 Genotype 3 unrelated laboratory clones with microhaplotypes"
        ) {
          return phase === 22;
        } else if (
          title ===
          "1.2.2 Predict what you will observe about IBS/IBD in pairwise comparisons"
        ) {
          return phase === 22.5;
        } else if (
          title === "1.2.3 Genotype and compare pairs of related clones"
        ) {
          return phase >= 23 && phase <= 25;
        } else if (title === "1.2.4 Observe all three IBS estimates together") {
          return phase === 26;
        } else if (
          title === "1.2.5 Generate laboratory clone for 1 hybrid strain"
        ) {
          return phase === 29;
        } else if (
          title ===
          "1.2.6 Genotype and compare hybrid clone to first three clones"
        ) {
          return phase > 29 && phase <= 32;
        } else if (title === "1.2.7 Knowledge Check") {
          return phase > 32;
        }
      }
    }
    if (currentView.section === 2) {
      if (sectionId === 2) {
        if (title === sections2[2].subcomponents[0].subcomponents[0].title) {
          // setCurrentView({ ...currentView, section: 2, phase: 0 });
          return phase === 0;
        } else if (
          title === sections2[2].subcomponents[0].subcomponents[1].title
        ) {
          // setCurrentView({ ...currentView, section: 2, phase: 1 });
          return phase === 1;
        } else if (
          title === sections2[2].subcomponents[0].subcomponents[2].title
        ) {
          // setCurrentView({ ...currentView, section: 2, phase: 2 });
          return phase === 2;
        } else if (
          title === sections2[2].subcomponents[1].subcomponents[0].title
        ) {
          // setCurrentView({ ...currentView, section: 2, phase: 4 });
          return phase === 4 || phase === 5;
        } else if (
          title === sections2[2].subcomponents[1].subcomponents[1].title
        ) {
          return phase === 6 || phase === 7;
        } else if (
          title === sections2[2].subcomponents[1].subcomponents[2].title
        ) {
          return phase === 8 || phase === 9;
        } else if (
          title === sections2[2].subcomponents[2].subcomponents[0].title
        ) {
          return phase === 10 || phase === 11;
        } else if (
          title === sections2[2].subcomponents[2].subcomponents[1].title
        ) {
          return phase === 12 || phase === 13;
        } else if (
          title === sections2[2].subcomponents[2].subcomponents[2].title
        ) {
          return phase === 14 || phase === 15;
        } else if (
          title === sections2[2].subcomponents[2].subcomponents[3].title
        ) {
          return phase === 16;
        } else if (title === "Summary") {
          return phase === 17;
        }
        // return phase === 5 || phase === 6;
      }
      return false;
    }
    if (currentView.section === 3) {
      if (sectionId === 3) {
        if (title === sections2[3].subcomponents[0].subcomponents[0].title) {
          // setCurrentView({ ...currentView, section: 2, phase: 0 });
          return phase === 1;
        } else if (
          title === sections2[3].subcomponents[0].subcomponents[1].title
        ) {
          // setCurrentView({ ...currentView, section: 2, phase: 0 });
          return phase === 4;
        } else if (
          title === sections2[3].subcomponents[0].subcomponents[2].title
        ) {
          // setCurrentView({ ...currentView, section: 2, phase: 0 });
          return phase === 5;
        } else if (
          title === sections2[3].subcomponents[0].subcomponents[3].title
        ) {
          // setCurrentView({ ...currentView, section: 2, phase: 0 });
          return phase === 6 || phase === 7;
        } else if (
          title === sections2[3].subcomponents[0].subcomponents[4].title
        ) {
          // setCurrentView({ ...currentView, section: 2, phase: 0 });
          return phase === 8;
        } else if (
          title === sections2[3].subcomponents[1].subcomponents[0].title
        ) {
          // setCurrentView({ ...currentView, section: 2, phase: 0 });
          return phase === 9;
        } else if (
          title === sections2[3].subcomponents[1].subcomponents[1].title
        ) {
          // setCurrentView({ ...currentView, section: 2, phase: 0 });
          return phase === 10;
        } else if (
          title === sections2[3].subcomponents[1].subcomponents[2].title
        ) {
          // setCurrentView({ ...currentView, section: 2, phase: 0 });
          return phase >= 12 && phase < 20;
        } else if (
          title === sections2[3].subcomponents[1].subcomponents[3].title
        ) {
          // setCurrentView({ ...currentView, section: 2, phase: 0 });
          return phase >= 20 && phase < 23;
        } else if (
          title === sections2[3].subcomponents[1].subcomponents[4].title
        ) {
          // setCurrentView({ ...currentView, section: 2, phase: 0 });
          return phase >= 23;
        }
      }
    }
  };

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
        isOpen ? "min-w-full grid-cols-[1fr]" : "min-w-0 grid-cols-[0fr]"
      } relative  h-[calc(100vh-80px)] overflow-auto bg-zinc-950 transition-none md:h-[calc(100vh-48px)] md:min-w-fit md:transition-[grid-template-columns] md:duration-1000`}
    >
      <button
        autoFocus={isOpen}
        onClick={() => {
          setIsOpen(false);
        }}
        className="absolute right-2 top-2 border-b border-transparent text-sm text-zinc-300 hover:border-gray-200 hover:text-white focus-visible:text-white"
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
            isOpen ? "md:delay-500" : "text-nowrap text-transparent"
          } duration-300`}
        >
          <div className="bg-interactiveGreen/60 max-w-full overflow-hidden px-12 pb-4 pt-8 text-center font-bold text-white md:w-[384px]">
            <h3 className=" text-lg ">
              Genotype Sleuthing to Estimate Relatedness from Genetic Data
            </h3>
          </div>
          <div className="flex w-full px-8 py-4 md:hidden">
            <button
              className="inline-flex gap-2 text-orange-400"
              onClick={() => {
                // setResetConfirmOpen(true);
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
          </div>
          {/* <InteractiveSideBarSection2 title={"Introduction"} />
          <InteractiveSideBarSection2 title={"Introduction"} /> */}

          {sections2.map((section, idx) => {
            // if (idx === 3) {
            //   return <StepThreeSubSection />;
            //   // return <div className="h-20 bg-red-500"></div>;
            // }
            return (
              <InteractiveSideBarSection2
                id={section.id}
                first={idx === 0}
                key={idx}
                callback={listCallback}
                // isActive={
                //   section.subcomponents.flatMap((subComponent) => {
                //     return subComponent.flatMap((node) => {
                //       return node;
                //     })
                //   })
                // }
                node={{
                  sectionId: section.sectionId,
                  title: section.title,
                  active: isActive,
                  // active: currentView.section === section.sectionId,
                  locked: isLocked,
                  // locked: section.requiresAtom
                  //   ? Object.values(
                  //       useAtomValue(section.requiresAtom)
                  //     ).includes(false)
                  //   : false,
                  // locked: useAtomValue(section.requiresAtom)[section.requiresKey]
                  subcomponents: section.subcomponents.map(
                    (subComponent, idx) => {
                      if (subComponent.subcomponents) {
                        return {
                          id: subComponent.id,
                          title: subComponent.title,
                          section: section.sectionId,
                          subcomponents: subComponent.subcomponents,
                          callback: listCallback,
                        };
                      }
                      return {
                        id: subComponent.id,
                        sectionId: section.sectionId,
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
                        callback: listCallback,
                        // callback: () => {
                        //   setCurrentView({
                        //     ...currentView,
                        //     section: section.sectionId,
                        //     phase: subComponent.phase,
                        //   });
                        //   // setInteractiveView
                        // },
                      };
                    },
                  ),
                }}
              />
            );
          })}
          {/* {module === "2.6"
            ? sections.map((section, idx) => {
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
                            useAtomValue(section.requiresAtom)
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
                            // requires:
                            //   section.requiresAtom === null
                            //     ? true
                            // : !Object.values(
                            //     useAtomValue(section.requiresAtom)
                            //   ).includes(false)
                            //     ? typeof subComponent?.requiresKey ===
                            //         "number" && section.completionAtom
                            //       ? !!useAtomValue(section.completionAtom)[
                            //           subComponent.requiresKey
                            //         ]
                            //       : null
                            //     : null,
                            requires:
                              typeof subComponent?.requiresKey === "number"
                                ? section.completionAtom
                                  ? !!useAtomValue(section.completionAtom)[
                                      subComponent.requiresKey
                                    ]
                                  : subComponent?.requiresKey === null
                                  ? !Object.values(
                                      useAtomValue(section.requiresAtom)
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
                        }
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
                            useAtomValue(section.requiresAtom)
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
                        }
                      ),
                    }}
                  />
                );
              })
            : null} */}
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
