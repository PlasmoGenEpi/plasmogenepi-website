"use client";
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { sideBarIsOpenAtom } from "../InteractiveViewer/InteractiveSideBar/InteractiveSideBar";
import { resetConfirmOpenAtom } from "./ResetModal";
import {
  hintsEnabledAtom,
  partFiveCompletionAtom,
  partFourCompletionAtom,
  partOneCompletionAtom,
  partSixCompletionAtom,
  partThreeCompletionAtom,
  partTwoCompletionAtom,
} from "@/data/Interactives/interactiveStore";
import { currentView1Atom } from "../InteractiveViewer/InteractiveViewer";
import { useCallback, useEffect } from "react";
import { partZeroCompletionAtom } from "../../Sleuthing/PartZero/PartZero";
import { newP1QuestionsAtom } from "../../Sleuthing/PartOne/Phases/P1KnowledgeCheck2";
import {
  stepSixCompletionAtom,
  stepSixQuestionsAtom,
} from "../../Sleuthing/StepSix/StepSix";
import HamburgerIcon from "@/app/components/NavBar/HamburgerIcon";

export const currentBackCallbackAtom = atom(null);
export const currentNextCallbackAtom = atom<null | (() => void)>(null);
export const currentPhaseIsCompleteAtom = atom(false);

export default function InteractiveControlPanel({
  lang,
}: {
  lang: "EN" | "FR" | "PT";
}) {
  const [menuOpen, setMenuOpen] = useAtom(sideBarIsOpenAtom);
  const [resetConfirmOpen, setResetConfirmOpen] = useAtom(resetConfirmOpenAtom);
  const [hintsEnabled, setHintsEnabled] = useAtom(hintsEnabledAtom);
  // const setHintsEnabled = useSetAtom(hintsEnabledAtom);
  const [currentView, setCurrentView] = useAtom(currentView1Atom);
  const [partZeroCompletion, setPartZeroCompletion] = useAtom(
    partZeroCompletionAtom,
  );
  const [partOneCompletion, setPartOneCompletion] = useAtom(
    partOneCompletionAtom,
  );
  const [partTwoCompletion, setPartTwoCompletion] = useAtom(
    partTwoCompletionAtom,
  );
  const [partThreeCompletion, setPartThreeCompletion] = useAtom(
    partThreeCompletionAtom,
  );
  const [partFourCompletion, setPartFourCompletion] = useAtom(
    partFourCompletionAtom,
  );
  const partFiveCompletion = useAtomValue(partFiveCompletionAtom);
  const [step6Completion, setStep6Completion] = useAtom(stepSixCompletionAtom);
  const partSixCompletion = useAtomValue(partSixCompletionAtom);
  const p1Questions2 = useAtomValue(newP1QuestionsAtom);
  const step6Questions = useAtomValue(stepSixQuestionsAtom);
  // const [partZeroCompletion, setPartZeroCompletion] = useAtom(partZeroCompletionAtom)
  // const [partZeroCompletion, setPartZeroCompletion] = useAtom(partZeroCompletionAtom)

  const currentCompletionObject: {
    [key: number]: boolean;
  } =
    currentView.section === 0
      ? partZeroCompletion
      : currentView.section === 1
      ? partOneCompletion
      : currentView.section === 2
      ? partTwoCompletion
      : currentView.section === 3
      ? partThreeCompletion
      : currentView.section === 4
      ? partFourCompletion
      : currentView.section === 5
      ? partFiveCompletion
      : partSixCompletion;

  const phaseIsComplete = currentCompletionObject[currentView.phase];
  // const currentSetComplete: any =
  //   currentView.section === 0
  //     ? setPartZeroCompletion
  //     : currentView.section === 1
  //     ? setPartOneCompletion
  //     : setPartTwoCompletion;

  const currentPhaseIsComplete = currentCompletionObject[currentView.phase];

  // const currentBackCallback = useAtomValue(currentBackCallbackAtom);
  const currentNextCallback = useAtomValue(currentNextCallbackAtom);

  useEffect(() => {
    setHintsEnabled(false);
  }, [currentView.phase]);

  let backCallback = useCallback(() => {
    if (currentView.module !== "2.6") {
      throw {
        error: "wrong view",
      };
    }

    if (currentView.phase === 0 && currentView.section !== 0) {
      setCurrentView({
        ...currentView,
        section: currentView.section - 1,
        phase:
          currentView.section === 1
            ? 2
            : currentView.section === 2
            ? 5
            : currentView.section === 3
            ? 3
            : currentView.section === 4
            ? 5
            : currentView.section === 5
            ? 2
            : currentView.section === 6
            ? 1
            : 0,
      });
    } else {
      setCurrentView({ ...currentView, phase: currentView.phase - 1 });
    }
  }, [currentView]);

  useEffect(() => {
    setHintsEnabled(false);
  }, [currentView.section]);

  const partSixIsDisabled = function () {
    if (step6Questions[2] === 3) {
      return false;
    }
    return true;
  };

  console.log(step6Questions);

  let partZeroNextHandler = useCallback(() => {
    if (currentView.module !== "2.6" || currentView.section !== 0) {
      console.log("error", currentView);
      throw {
        error: "wrong view",
      };
    }
    setPartZeroCompletion({
      ...partZeroCompletion,
      [currentView.phase]: true,
    });
    setCurrentView({
      ...currentView,
      section: currentView.phase <= 1 ? currentView.section : 1,
      phase: currentView.phase <= 1 ? currentView.phase + 1 : 0,
    });
  }, [currentView]);

  const getProgressionText = function () {
    let result = {
      primaryText: "",
      secondaryText: "",
    };
    let { module, section, phase } = currentView;
    if (section === 0) {
      if (phase === 0) {
        // return "Background";
        result.primaryText =
          lang === "EN"
            ? "Background"
            : lang === "FR"
            ? "Contexte"
            : "Contexto";
      } else if (phase === 1) {
        result.primaryText =
          lang === "EN" ? "Goal" : lang === "FR" ? "Objectif" : "Objetivo";
      } else if (phase >= 2) {
        result.primaryText =
          lang === "EN"
            ? "Instructions"
            : lang === "FR"
            ? "Instructions"
            : "Instruções";
      }
    } else if (section === 7) {
      result.primaryText =
        lang === "EN" ? "Summary" : lang === "FR" ? "Résumé" : "Resumo";
    } else {
      result.primaryText = `${
        lang === "EN" ? "Step" : lang === "FR" ? "Étape" : "Passo"
      } ${section}`;
      if (phase > 0 && section !== 5) {
        result.secondaryText = `${phase} / ${
          section === 1
            ? "5"
            : section === 2
            ? "3"
            : section === 3
            ? "5"
            : section === 4
            ? "2"
            : section === 5
            ? "1"
            : "2"
        }`;
      } else if (section === 5) {
        result.secondaryText = `${phase + 1} / 2`;
      }
    }
    return result;
  };

  function getNextStep() {
    let { module, section, phase } = currentView;
    if (
      (section === 0 && phase === 2) ||
      (section === 1 && phase === 5) ||
      (section === 2 && phase === 3) ||
      (section === 3 && phase === 5) ||
      (section === 4 && phase === 2) ||
      (section === 5 && phase === 2) ||
      (section === 6 && phase === 2)
    ) {
      return section + 1;
    }
  }

  // return (
  //   <div
  //     style={{
  //       paddingLeft: "calc(100vw - 100%)",
  //     }}
  //     className="fixed bottom-0 w-full z-[999] bg-zinc-950"
  //   >
  //     <div className="h-20 grid grid-rows-1 max-w-6xl mx-auto[grid-template-columns:min-content_auto_1fr_1fr]">
  //       <div className="bg-red-300/50 px-12"></div>
  //       <div className="flex overflow-hidden">
  //         <div className="bg-purple-300/50 flex flex-col text-white justify-center overflow-hidden px-2">
  //           <span
  //             className="py-2

  //             text-nowrap translate-y-0.5 overflow-hidden text-ellipsis text-left text-sm duration-300"
  //           >
  //             {getProgressionText()}
  //           </span>
  //           <span>1 / 5</span>
  //         </div>
  //       </div>
  //       <button
  //         onClick={() => {
  //           backCallback();
  //         }}
  //         disabled={currentView.section === 0 && currentView.phase === 0}
  //         className="col-start-3  pl-6 pr-4 md:px-6 disabled:invisible mx-auto md:mr-0"
  //       >
  //         <svg
  //           className={` rotate-90 fill-white aspect-square h-12 md:h-8 mx-auto`}
  //           version="1.1"
  //           viewBox="0 0 1200 1200"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <path d="m562.88 812.12-300-300c-20.5-20.504-20.5-53.746 0-74.25 20.504-20.5 53.746-20.5 74.25 0l262.88 262.88 262.88-262.88c20.504-20.5 53.746-20.5 74.25 0 20.5 20.504 20.5 53.746 0 74.25l-300 300c-20.504 20.5-53.746 20.5-74.25 0z" />
  //         </svg>
  //       </button>{" "}
  //       <button
  //         // disabled={nextIsDisabled}
  //         // className={`col-start-4  px-6 disabled:invisible mx-auto md:ml-0 ${
  //         //   !nextIsDisabled && phaseIsComplete
  //         //     ? "fill-yellow-400"
  //         //     : "fill-current"
  //         // }`}
  //         className={`col-start-4 pr-2 disabled:invisible mx-auto md:ml-0 ${
  //           !currentPhaseIsComplete && currentNextCallback
  //             ? "text-yellow-400"
  //             : "text-current"
  //         }`}
  //         disabled={currentView.section >= 1 && !currentNextCallback}
  //         onClick={
  //           () => {
  //             if (currentView.section === 0) {
  //               partZeroNextHandler();
  //             } else {
  //               if (currentNextCallback) {
  //                 currentNextCallback();
  //               }
  //             }
  //           }
  //           // currentView.section === 0
  //           //   ? () => {
  //           //       partZeroNextHandler();
  //           //     }
  //           //   : () => {
  //           //       if (currentNextCallback) {
  //           //         currentNextCallback();
  //           //       }
  //           //     }
  //         }
  //       >
  //         <div
  //           className={`flex items-center pr-4 md:pl-4/ pl-2 rounded-xl py-1 text-yellow-400`}
  //         >
  //           <svg
  //             className={` -rotate-90 aspect-square h-12 md:h-8 mx-auto fill-current`}
  //             version="1.1"
  //             viewBox="0 0 1200 1200"
  //             xmlns="http://www.w3.org/2000/svg"
  //           >
  //             <path d="m562.88 812.12-300-300c-20.5-20.504-20.5-53.746 0-74.25 20.504-20.5 53.746-20.5 74.25 0l262.88 262.88 262.88-262.88c20.504-20.5 53.746-20.5 74.25 0 20.5 20.504 20.5 53.746 0 74.25l-300 300c-20.504 20.5-53.746 20.5-74.25 0z" />
  //           </svg>
  //           <span
  //             className={`${
  //               !getNextStep() ? "invisible" : "visible"
  //             } block translate-y-1 ml-2 text-current text-nowrap underline underline-offset-2`}
  //           >
  //             {/* Next */}
  //             Step {getNextStep()}
  //           </span>
  //         </div>
  //       </button>
  //     </div>
  //   </div>
  // );

  return (
    <div
      style={{
        paddingLeft: "calc(100vw - 100%)",
      }}
      className="fixed bottom-0 z-[999] w-full bg-black"
    >
      <div className="mx-auto grid min-h-20 w-full max-w-6xl text-white md:min-h-0">
        <div className="mt-auto flex h-fit justify-around gap-x-8 pb-1 pt-3 md:hidden">
          <button
            className=" my-auto inline-flex gap-2 text-lg"
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
            <span className="ml-2 mt-1">
              {lang === "EN"
                ? `Reset`
                : lang === "FR"
                ? "Réinitialiser"
                : "Reiniciar"}
            </span>
          </button>
          <div className="my-auto inline-flex ">
            <input
              onChange={(e) => {
                setHintsEnabled(!hintsEnabled);
              }}
              checked={hintsEnabled}
              id="hints"
              className=" w-4 dark:accent-emerald-400"
              type="checkbox"
            />
            <label htmlFor="hints" className="ml-4 mt-1 text-lg">
              {lang === "EN"
                ? `Enable Hints`
                : lang === "FR"
                ? "Activer les indices"
                : "Ativar dicas"}
            </label>
          </div>
        </div>
        <div className="mb-2 grid [grid-template-columns:min-content_auto_min-content_136px]">
          <button
            className="mx-6 md:mx-12"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <HamburgerIcon open={menuOpen} className="fill-current" />
            {/* <svg
              width="36pt"
              height="36pt"
              version="1.1"
              viewBox="0 0 1200 1200"
              xmlns="http://www.w3.org/2000/svg"
              className="my-auto fill-current"
            >
              <path d="m869.52 355.32c-185.28 4.6797-370.44 9.3594-555.72 13.918-46.199 1.1992-46.441 73.199 0 72 185.28-4.6797 370.44-9.2383 555.72-13.922 46.199-1.0781 46.441-73.078 0-71.996z" />
              <path d="m871.44 550.8c-179.64 7.8008-359.4 13.559-539.16 17.16-46.32 0.96094-46.441 72.961 0 72 179.76-3.6016 359.52-9.3594 539.16-17.16 46.078-2.0391 46.438-74.039 0-72z" />
              <path d="m332.28 771.48c-46.32-0.48047-46.441 71.52 0 72 184.68 1.6797 369.24 1.3203 553.92-1.1992 46.32-0.60156 46.441-72.602 0-72-184.68 2.5195-369.24 3-553.92 1.1992z" />
            </svg> */}
          </button>
          <div
            className="flex translate-y-0.5 flex-col  gap-x-8
        overflow-hidden py-1 md:flex-row lg:gap-x-16
        "
          >
            <button
              className=" my-auto  hidden gap-2 md:inline-flex"
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
              <span className="ml-2 mt-1">
                {lang === "EN"
                  ? `Reset`
                  : lang === "FR"
                  ? "Réinitialiser"
                  : "Reiniciar"}
              </span>
            </button>
            <div className="my-auto hidden md:inline-flex">
              <input
                onChange={(e) => {
                  setHintsEnabled(!hintsEnabled);
                }}
                checked={hintsEnabled}
                id="hints"
                className=" dark:accent-emerald-400"
                type="checkbox"
              />
              <label htmlFor="hints" className="ml-4 mt-1  ">
                {lang === "EN"
                  ? `Enable Hints`
                  : lang === "FR"
                  ? "Activer les indices"
                  : "Ativar dicas"}
              </label>
            </div>
            <span className="my-auto self-center overflow-hidden text-ellipsis md:translate-y-0.5">
              {getProgressionText().primaryText}
            </span>
            <span
              className={`${
                !getProgressionText().secondaryText ? "hidden" : "visible"
              } m-auto text-nowrap md:-translate-x-4 md:translate-y-0.5 lg:-translate-x-8`}
            >
              {getProgressionText().secondaryText
                ? getProgressionText().secondaryText
                : "1"}
            </span>
          </div>
          <button
            onClick={() => {
              backCallback();
            }}
            disabled={currentView.section === 0 && currentView.phase === 0}
            className="col-start-3  mx-auto pl-6 pr-4 disabled:invisible md:mr-0 md:px-6"
          >
            <svg
              className={` mx-auto aspect-square h-12 rotate-90 fill-white md:h-8`}
              version="1.1"
              viewBox="0 0 1200 1200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m562.88 812.12-300-300c-20.5-20.504-20.5-53.746 0-74.25 20.504-20.5 53.746-20.5 74.25 0l262.88 262.88 262.88-262.88c20.504-20.5 53.746-20.5 74.25 0 20.5 20.504 20.5 53.746 0 74.25l-300 300c-20.504 20.5-53.746 20.5-74.25 0z" />
            </svg>
          </button>
          <button
            // disabled={nextIsDisabled}
            // className={`col-start-4  px-6 disabled:invisible mx-auto md:ml-0 ${
            //   !nextIsDisabled && phaseIsComplete
            //     ? "fill-yellow-400"
            //     : "fill-current"
            // }`}
            className={`col-start-4 mx-auto pr-2 disabled:invisible md:ml-0 ${
              !currentPhaseIsComplete && currentNextCallback
                ? "text-yellow-400"
                : "text-current"
            }`}
            disabled={
              currentView.section === 7 ||
              (currentView.section === 6
                ? partSixIsDisabled()
                : currentView.section >= 1 && !currentNextCallback)
            }
            onClick={
              () => {
                if (currentView.section === 0) {
                  partZeroNextHandler();
                } else if (currentView.section === 6) {
                  setCurrentView({ ...currentView, section: 7, phase: 0 });
                  setStep6Completion({
                    0: true,
                  });
                } else {
                  if (currentNextCallback) {
                    currentNextCallback();
                  }
                }
              }
              // currentView.section === 0
              //   ? () => {
              //       partZeroNextHandler();
              //     }
              //   : () => {
              //       if (currentNextCallback) {
              //         currentNextCallback();
              //       }
              //     }
            }
          >
            <div
              className={`md:pl-4/ flex w-[136px] items-center rounded-xl py-1 pl-2 pr-4 text-yellow-400 disabled:hidden`}
            >
              <svg
                className={` mx-auto aspect-square h-12 -rotate-90 fill-current md:h-8`}
                version="1.1"
                viewBox="0 0 1200 1200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m562.88 812.12-300-300c-20.5-20.504-20.5-53.746 0-74.25 20.504-20.5 53.746-20.5 74.25 0l262.88 262.88 262.88-262.88c20.504-20.5 53.746-20.5 74.25 0 20.5 20.504 20.5 53.746 0 74.25l-300 300c-20.504 20.5-53.746 20.5-74.25 0z" />
              </svg>
              <span
                className={`${
                  currentView.section === 0 && currentView.phase === 2
                    ? "visible w-auto"
                    : !currentNextCallback || !getNextStep()
                    ? "invisible w-0"
                    : "visible w-auto"
                } ml-2 block translate-y-1 text-nowrap text-current underline underline-offset-2`}
              >
                {/* Next */}
                {lang === "EN"
                  ? `Step`
                  : lang === "FR"
                  ? `Étape`
                  : `Passo`}{" "}
                {getNextStep()}
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
