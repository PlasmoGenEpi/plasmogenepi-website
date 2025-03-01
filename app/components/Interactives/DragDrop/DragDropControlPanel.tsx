import { useAtom, useAtomValue, useSetAtom } from "jotai";
import ControlPanelWrapper from "../Shared/ControlPanel/ControlPanelWrapper";
import {
  dragDropCompletionAtom,
  dragDropQuestionsAtom,
  hintsEnabledAtom,
  phase3Atom,
  reads2Atom,
  readsAtom,
  VERSION_CONTROL,
} from "@/data/Interactives/interactiveStore";
import { MutableRefObject, useCallback, useEffect } from "react";
import {
  resetConfirmOpenAtom,
  s3ResetAtom,
} from "../Shared/ControlPanel/ResetModal";
import PrimaryButton from "../Shared/ControlPanel/PrimaryButton";
import { atomWithStorage, RESET } from "jotai/utils";
import { readsValid } from "./helpers";
import { chimaeraReadAtom } from "./DragDropElements/ReadsContainer";
import { chimaeraPlacedAtom } from "./DragDropElements/ReferenceGenome";
import {
  attemptedFalseMutationsAtom,
  attemptedMutationsAtom,
} from "./DragDropElements/Read";
import { currentView3Atom } from "../Shared/InteractiveViewer/InteractiveViewer";
import { sideBarIsOpenAtom } from "../Shared/InteractiveViewer/InteractiveSideBar/InteractiveSideBar";

const topDistanceIncludingBorder = 172;
const borderWidth = 24;
const paddingFromBorder = topDistanceIncludingBorder - borderWidth;
const paddingLeft = 32;
const paddingRight = 64;
const rowHeight = 32;
const rowDistance = 32;
const charSize = 18;
const readStartOffset = 18;
const dropContainerWidth = 1148;

const handleAttemptedMutations = function (attemptedMutations: {
  [key: number]: {
    [key: number]: boolean | undefined;
  };
}) {
  for (let k in attemptedMutations) {
    let mutations = attemptedMutations[k];

    if (k === "3" || k === "16") {
      for (let j in mutations) {
        if ((mutations[j] && j !== "8") || !mutations?.[8]) {
          return false;
        }
      }
    } else if (k === "4" || k === "8" || k === "11") {
      for (let j in mutations) {
        if (
          (mutations[j] && !["1", "8", "13"].includes(j)) ||
          mutations?.[1] ||
          mutations?.[8] ||
          mutations?.[13]
        ) {
          return false;
        }
      }
    } else if (k === "1" || k === "6" || k === "14" || k === "19") {
      for (let j in mutations) {
        if (
          (mutations[j] && !["3", "6", "11"].includes(j)) ||
          mutations?.[3] ||
          mutations?.[6] ||
          mutations?.[11]
        ) {
          return false;
        }
      }
    } else if (mutations) {
      for (let j in mutations) {
        if (mutations[j]) {
          return false;
        }
      }
    } else {
      console.log("shouldnt get here");
      throw {
        error: "handleAttemptedMutations",
      };
    }
  }
  return true;
};

export const alternateIsError = function (
  id: number,
  idx: number,
  bool: boolean,
) {
  if (id === 3 || id === 16) {
    return idx === 8 ? !bool : bool;
  } else if (id === 4 || id === 8 || id === 11) {
    return [1, 8, 13].includes(idx) ? !bool : bool;
  } else if (id === 1 || id === 6 || id === 14 || id === 19) {
    return [3, 6, 11].includes(idx) ? !bool : bool;
  }

  return bool;
};

export const DragDropCurrentVersionAtom = atomWithStorage(
  "DragDropCurrentVersionAtom",
  "1.1.1",
);

export default function DragDropControlPanel({
  scrollRef,
}: {
  scrollRef: MutableRefObject<null | HTMLDivElement>;
}) {
  const [phase, setPhase] = useAtom(phase3Atom);
  const [resetConfirmOpen, setResetConfirmOpen] = useAtom(resetConfirmOpenAtom);
  const [completion, setCompletion] = useAtom(dragDropCompletionAtom);
  const [reads, setReads] = useAtom(readsAtom);
  const [questions, setQuestions] = useAtom(dragDropQuestionsAtom);
  const [reads2, setReads2] = useAtom(reads2Atom);
  const [chimaeraRead, setChimaeraRead] = useAtom(chimaeraReadAtom);
  const [chimaeraPlaced, setChimaeraPlaced] = useAtom(chimaeraPlacedAtom);
  const [attemptedFalseMutations, setAttemptedFalseMutations] = useAtom(
    attemptedFalseMutationsAtom,
  );
  const [attemptedMutations, setAttemptedMutations] = useAtom(
    attemptedMutationsAtom,
  );
  const [hintsEnabled, setHintsEnabled] = useAtom(hintsEnabledAtom);
  const [currentVersion, setCurrentVersion] = useAtom(
    DragDropCurrentVersionAtom,
  );
  const [currentView, setCurrentView] = useAtom(currentView3Atom);
  const [menuOpen, setMenuOpen] = useAtom(sideBarIsOpenAtom);
  const [s3Reset, setS3Reset] = useAtom(s3ResetAtom);

  useEffect(() => {
    setHintsEnabled(false);
  }, [phase]);

  useEffect(() => {
    let x = localStorage.getItem("DragDropCurrentVersionAtom");
    if (x === null || JSON.parse(x) !== VERSION_CONTROL) {
      setCurrentVersion(VERSION_CONTROL);
      resetCallback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if ([5, 9].includes(phase)) {
      scrollRef.current?.scrollTo(0, 0);
      window.scrollTo(0, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const resetCallback = useCallback(() => {
    setHintsEnabled(false);
    setAttemptedMutations({});
    setAttemptedFalseMutations({});
    setChimaeraRead(RESET);
    setChimaeraPlaced(RESET);
    setCompletion(RESET);
    setReads(RESET);
    setQuestions(RESET);
    // setPhase(1);
    setCurrentView({ ...currentView, section: 0, phase: 0 });
    setReads2(RESET);
    window.scrollTo(0, 0);
    scrollRef.current?.scrollTo(0, 0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const isDisabled = function (): boolean {
  //   if (phase < 3) {
  //     return false;
  //   } else if (phase === 3) {
  //     return !readsValid(reads, 1);
  //   } else if (phase === 4) {
  //     return questions[2] !== 1;
  //   } else if (phase === 5) {
  //     return false;
  //   } else if (phase === 6) {
  //     return !readsValid(reads2.slice(0, 10), 2);
  //   } else if (phase === 7) {
  //     return !readsValid(reads2, 2);
  //   } else if (phase === 7.5) {
  //     return !(
  //       Array.isArray(questions[0]) &&
  //       questions[0].includes(1) &&
  //       questions[0].includes(2) &&
  //       !questions[0].includes(0)
  //     );
  //   } else if (phase === 8) {
  //     return !chimaeraPlaced;
  //   } else if (phase === 9) {
  // for (let k in attemptedFalseMutations) {
  //   let mutations = attemptedFalseMutations[k];

  //   for (let j in mutations) {
  //     if (mutations[j] === true) {
  //       if ((j === "6" && k === "4") || (j === "13" && k === "19")) {
  //       } else {
  //         return true;
  //       }
  //     }
  //   }
  //     }
  //     return !(
  //       !!attemptedFalseMutations?.[4]?.[6] &&
  //       !!attemptedFalseMutations?.[19]?.[13]
  //     );
  //   } else if (phase === 9.5) {
  //     return questions[4] !== 0;
  //   } else if (phase === 10) {
  // for (let id = 1; id <= 20; id++) {
  //   for (let i = 0; i < 15; i++) {
  //     if (alternateIsError(id, i, !!attemptedMutations?.[id]?.[i])) {
  //       return true;
  //     }
  //   }
  // }
  // return false;
  //   } else if (phase === 10.5) {
  //     return questions[6] !== 2;
  //   } else if (phase === 11) {
  //     return questions[7] !== 2;
  //   }
  //   return true;
  // };

  // const handleClick = function () {
  //   if (phase < 5) {
  //     if (completion[7]) {
  //       // setPhase(7.5);
  //       setCurrentView({
  //         ...currentView,
  //         phase: 7.5,
  //       });
  //     } else if (completion[6]) {
  //       // setPhase(7);
  //       setCurrentView({
  //         ...currentView,
  //         phase: 7,
  //       });
  //     } else if (completion[5]) {
  //       // setPhase(6);
  //       setCurrentView({
  //         ...currentView,
  //         phase: 6,
  //       });
  //     } else if (completion[4]) {
  //       // setPhase(5);
  //       setCurrentView({
  //         ...currentView,
  //         phase: 5,
  //       });
  //     } else {
  //       // setPhase(phase + 1);
  //       setCurrentView({
  //         ...currentView,
  //         phase: currentView.phase + 1,
  //       });
  //       setCompletion({ ...completion, [phase]: true });
  //     }
  //   } else if (phase === 7) {
  //     // setPhase(7.5);
  //     setCurrentView({
  //       ...currentView,
  //       phase: 7.5,
  //     });
  //     setCompletion({ ...completion, 7: true });
  //   } else if (phase === 7.5) {
  //     // setPhase(8);
  //     setCurrentView({
  //       ...currentView,
  //       phase: 8,
  //     });
  //     setCompletion({ ...completion, 7.5: true });
  //   } else if (phase === 8) {
  //     if (completion[9]) {
  //       // setPhase(9.5);
  //       setCurrentView({
  //         ...currentView,
  //         phase: 9.5,
  //       });
  //     } else {
  //       // setPhase(phase + 1);
  //       setCurrentView({
  //         ...currentView,
  //         phase: currentView.phase + 1,
  //       });
  //       setCompletion({ ...completion, 8: true });
  //     }
  //   } else if (phase === 9) {
  //     setCompletion({ ...completion, 9: true });
  //     // setPhase(9.5);
  //     setCurrentView({
  //       ...currentView,
  //       phase: 9.5,
  //     });
  //   } else if (phase === 9.5) {
  //     if (completion[10]) {
  //       // setPhase(10.5);
  //       setCurrentView({
  //         ...currentView,
  //         phase: 10.5,
  //       });
  //     } else {
  //       setCompletion({ ...completion, 9.5: true });
  //       // setPhase(10);
  //       setCurrentView({
  //         ...currentView,
  //         phase: 10,
  //       });
  //     }
  //   } else if (phase === 10) {
  //     // setPhase(10.5);
  //     setCurrentView({
  //       ...currentView,
  //       phase: 10.5,
  //     });
  //     setCompletion({ ...completion, 10: true });
  //   } else if (phase === 10.5) {
  //     // setPhase(11);
  //     setCurrentView({
  //       ...currentView,
  //       phase: 11,
  //     });
  //     setCompletion({ ...completion, 10.5: true });
  //   } else {
  //     setCompletion({ ...completion, [phase]: true });
  //     // setPhase(phase + 1);
  //     setCurrentView({
  //       ...currentView,
  //       phase: currentView.phase + 1,
  //     });
  //   }
  // };

  const isDisabled = function () {
    let { section, phase } = currentView;
    if (section === 0) {
      return false;
    } else if (section === 1) {
      if (phase === 0) {
        return !readsValid(reads, 1);
      } else if (phase === 1) {
        return questions[2] !== 1;
      } else {
        return true;
      }
    } else if (section === 2) {
      if (phase === 0) {
        return !readsValid(reads2, 2);
      } else if (phase === 1) {
        return questions[10] !== 1;
      } else if (phase === 2) {
        for (let k in attemptedFalseMutations) {
          let mutations = attemptedFalseMutations[k];

          for (let j in mutations) {
            if (mutations[j] === true) {
              if ((j === "6" && k === "4") || (j === "13" && k === "19")) {
              } else {
                return true;
              }
            }
          }
        }
        return !(
          !!attemptedFalseMutations?.[4]?.[6] &&
          !!attemptedFalseMutations?.[19]?.[13]
        );
      } else if (phase === 3) {
        return questions[4] !== 0;
      }
    } else if (section === 3) {
      if (phase === 0) {
        for (let id = 1; id <= 20; id++) {
          for (let i = 0; i < 15; i++) {
            if (alternateIsError(id, i, !!attemptedMutations?.[id]?.[i])) {
              return true;
            }
          }
        }
        return false;
      } else if (phase === 1) {
        return questions[6] !== 2;
      } else if (phase === 2) {
        return questions[8] !== 1;
      }
    }
    return true;
  };

  useEffect(() => {
    if (resetCallback) {
      setS3Reset(() => () => resetCallback());
    }
  }, []);

  const handleBack = function () {
    let { section, phase } = currentView;
    if (section === 0) {
      if (phase === 0) {
        return;
      }
    }
    if (section === 1) {
      if (phase === 0) {
        setCurrentView({ ...currentView, section: 0, phase: 2 });
        return;
      }
    }
    if (section === 2) {
      if (phase === 0) {
        setCurrentView({ ...currentView, section: 1, phase: 1 });
        return;
      }
    }
    if (section === 3) {
      if (phase === 0) {
        setCurrentView({ ...currentView, section: 2, phase: 3 });
        return;
      }
    }
    setCurrentView({ ...currentView, phase: phase - 1 });
  };

  const handleClick = function () {
    let { section, phase } = currentView;
    if (section === 0) {
      setCompletion({
        ...completion,
        [section]: {
          ...completion[section],
          [phase]: true,
        },
      });
      if (phase === 2) {
        setCurrentView({ ...currentView, section: 1, phase: 0 });
      } else {
        setCurrentView({ ...currentView, phase: phase + 1 });
      }
    }
    if (section === 1) {
      if (phase === 0) {
        setCompletion({
          ...completion,
          1: { ...completion[1], [phase]: true },
        });
        setCurrentView({ ...currentView, phase: phase + 1 });
        return;
      } else if (phase === 1) {
        setCompletion({
          ...completion,
          1: { ...completion[1], [phase]: true },
        });
        setCurrentView({ ...currentView, section: 2, phase: 0 });
        return;
      }
    } else if (section === 2) {
      if (phase === 0) {
        setCurrentView({ ...currentView, phase: 1 });
        setCompletion({
          ...completion,
          2: { ...completion[2], [phase]: true },
        });
      } else if (phase === 1) {
        setCompletion({
          ...completion,
          2: { ...completion[2], [phase]: true },
        });
        setCurrentView({ ...currentView, phase: 2 });

        // if (completion?.[2]?.[2]) {
        //   setCurrentView({ ...currentView, phase: 3 });
        // } else {
        //   setCurrentView({ ...currentView, phase: 2 });
        // }
      } else if (phase === 2) {
        setCompletion({
          ...completion,
          2: { ...completion[2], [phase]: true },
        });
        setCurrentView({ ...currentView, phase: 3 });
      } else if (phase === 3) {
        setCompletion({
          ...completion,
          2: { ...completion[2], [phase]: true },
        });
        setCurrentView({ ...currentView, section: 3, phase: 0 });
        return;
      }
    } else if (section === 3) {
      setCompletion({
        ...completion,
        3: { ...completion[3], [phase]: true },
      });
      setCurrentView({ ...currentView, phase: currentView.phase + 1 });
    }
  };

  const getText = () => {
    if (phase === 1 || phase === 2 || phase === 5 || phase === 6) {
      return "Run";
    }
    if (phase === 11) {
      return "Finish";
    }
    return "Next";
  };

  const getProgressionText = function () {
    let result = {
      primaryText: "",
      secondaryText: "",
    };
    let { module, section, phase } = currentView;
    if (section === 0) {
      if (phase === 0) {
        // return "Background";
        result.primaryText = "Background";
      } else if (phase === 1) {
        result.primaryText = "Goal";
      } else if (phase >= 2) {
        result.primaryText = "Instructions";
      }
    } else {
      result.primaryText = `Step ${section}`;
      if (section === 1) {
        if (phase === 0) {
          result.secondaryText = "1 / 2";
        } else if (phase === 1) {
          result.secondaryText = "2 / 2";
        }
      } else if (section === 2) {
        if (phase === 0) {
          result.secondaryText = "1 / 3";
        } else if (phase === 1) {
          result.secondaryText = "2 / 3";
        } else if (phase > 1) {
          result.secondaryText = "3 / 3";
        }
      } else if (section === 3) {
      }
    }
    return result;
  };

  function getNextStep() {
    let { module, section, phase } = currentView;
    if (
      (section === 0 && phase === 2) ||
      (section === 1 && phase === 1) ||
      (section === 2 && phase === 3) ||
      (section === 3 && phase === 5) ||
      (section === 4 && phase === 2) ||
      (section === 5 && phase === 2) ||
      (section === 6 && phase === 2)
    ) {
      return section + 1;
    }
  }

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
            <span className="ml-2 mt-1">Reset</span>
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
              Enable Hints
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
            <svg
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
            </svg>
          </button>
          <div
            className="flex translate-y-0.5 flex-col  gap-x-8
        overflow-hidden py-1 md:flex-row lg:gap-x-16
        "
          >
            {/* <button
            onClick={() => {
              setAttemptedMutations({});
              setAttemptedFalseMutations({});
              setCompletion(RESET);
            }}
          >
            RESETa
          </button> */}
            <button
              className=" my-auto  hidden gap-2 md:inline-flex"
              onClick={() => {
                setResetConfirmOpen(true);
                // resetCallback();
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
              <span className="ml-2 mt-1">Reset</span>
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
                Enable Hints
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
              {/* {getProgressionText().secondaryText
                ? getProgressionText().secondaryText
                : "1"} */}
            </span>
          </div>
          <button
            onClick={() => {
              handleBack();
            }}
            // onClick={() => {
            //   if (phase >= 5 && phase <= 7.5) {
            //     // setPhase(4);
            //     setCurrentView({
            //       ...currentView,
            //       phase: 4,
            //     });
            //   } else if (phase === 11) {
            //     // setPhase(10.5);
            //     setCurrentView({
            //       ...currentView,
            //       phase: 10.5,
            //     });
            //   } else if (phase === 10.5) {
            //     // setPhase(9.5);
            //     setCurrentView({
            //       ...currentView,
            //       phase: 9.5,
            //     });
            //   } else if (phase === 10) {
            //     // setPhase(9.5);
            //     setCurrentView({
            //       ...currentView,
            //       phase: 9.5,
            //     });
            //   } else if (phase === 9.5) {
            //     // setPhase(8);
            //     setCurrentView({
            //       ...currentView,
            //       phase: 8,
            //     });
            //   } else if (phase === 8) {
            //     // setPhase(7.5);
            //     setCurrentView({
            //       ...currentView,
            //       phase: 7.5,
            //     });
            //   } else if (phase === 7.5) {
            //     // setPhase(7);
            //     setCurrentView({
            //       ...currentView,
            //       phase: 7,
            //     });
            //   } else {
            //     // setPhase(phase - 1);
            //     setCurrentView({
            //       ...currentView,
            //       phase: currentView.phase - 1,
            //     });
            //   }
            // }}
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
            disabled={isDisabled()}
            onClick={() => {
              handleClick();
            }}
            // disabled={nextIsDisabled}
            // className={`col-start-4  px-6 disabled:invisible mx-auto md:ml-0 ${
            //   !nextIsDisabled && phaseIsComplete
            //     ? "fill-yellow-400"
            //     : "fill-current"
            // }`}
            className={`col-start-4 mx-auto pr-2 text-yellow-400 disabled:invisible md:ml-0`}
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
                    : isDisabled() || !getNextStep()
                    ? "invisible w-0"
                    : "visible w-auto"
                } ml-2 block translate-y-1 text-nowrap text-current underline underline-offset-2`}
              >
                {/* Next */}
                Step {getNextStep()}
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <ControlPanelWrapper fixed resetCallback={resetCallback}>
      <div className="mx-auto flex max-w-6xl justify-end">
        <div className="-translate-y-2">
          <label htmlFor="hints" className="mr-4 text-white">
            Enable Hints
          </label>
          <input
            onChange={(e) => {
              setHintsEnabled(!hintsEnabled);
            }}
            checked={hintsEnabled}
            id="hints"
            className="mb-1"
            type="checkbox"
          />
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl justify-between">
        {phase <= 4 ? (
          <PrimaryButton
            first
            callback={() => {
              setResetConfirmOpen(true);
            }}
            disabled={resetConfirmOpen}
            className="bg-orange-500 text-white"
            text="Reset"
          />
        ) : (
          <PrimaryButton
            first
            callback={() => {
              if (phase >= 5 && phase <= 7.5) {
                // setPhase(4);
                setCurrentView({
                  ...currentView,
                  phase: 4,
                });
              } else if (phase === 11) {
                // setPhase(10.5);
                setCurrentView({
                  ...currentView,
                  phase: 10.5,
                });
              } else if (phase === 10.5) {
                // setPhase(9.5);
                setCurrentView({
                  ...currentView,
                  phase: 9.5,
                });
              } else if (phase === 10) {
                // setPhase(9.5);
                setCurrentView({
                  ...currentView,
                  phase: 9.5,
                });
              } else if (phase === 9.5) {
                // setPhase(8);
                setCurrentView({
                  ...currentView,
                  phase: 8,
                });
              } else if (phase === 8) {
                // setPhase(7.5);
                setCurrentView({
                  ...currentView,
                  phase: 7.5,
                });
              } else if (phase === 7.5) {
                // setPhase(7);
                setCurrentView({
                  ...currentView,
                  phase: 7,
                });
              } else {
                // setPhase(phase - 1);
                setCurrentView({
                  ...currentView,
                  phase: currentView.phase - 1,
                });
              }
            }}
            className="bg-primaryGreen text-white"
            text="Back"
            disabled={phase === 1}
          />
        )}
        {phase < 14 && (
          <PrimaryButton
            callback={() => {
              if (!isDisabled()) {
                handleClick();
              }
            }}
            className={`${
              getText() === "Finish" ? "bg-primaryBlue" : "bg-primaryGreen"
            } text-white`}
            text={getText()}
            disabled={isDisabled()}
          />
        )}
      </div>
    </ControlPanelWrapper>
  );
}
