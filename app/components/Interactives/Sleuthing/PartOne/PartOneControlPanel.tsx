"use client";
import {
  cloneRowsAtom,
  initialBoardState,
  partOneCompletionAtom,
  positiveControlBoardsAtom,
  selectedPositiveControlBoardAtom,
  hintsEnabledAtom,
  genotypeHintsAtom,
  transformMatrixAtom,
  partThreePositiveControlBoardsAtom,
  partThreeCompletionAtom,
  activeRowColumnTransformAtom,
  VERSION_CONTROL,
  phase1Atom,
} from "@/data/Interactives/interactiveStore";
import ControlPanelWrapper from "../../Shared/ControlPanel/ControlPanelWrapper";
import PrimaryButton from "../../Shared/ControlPanel/PrimaryButton";
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { resetConfirmOpenAtom } from "../../Shared/ControlPanel/ResetModal";
import { atomWithStorage, RESET } from "jotai/utils";
// import {
//   compareGenotypeWithClones,
//   compareUnorderedArrays,
//   countSNPs,
//   switchValues,
// } from "@/helpers/helpers";
import { useCallback, useEffect } from "react";
import {
  interactiveSectionAtom,
  interactiveViewAtom,
} from "../../Shared/Layout/Viewer/Viewer";
import {
  compareGenotypeWithClones,
  compareUnorderedArrays,
  countSNPs,
  switchValues,
} from "../../helpers";
import {
  currentView1Atom,
  currentViewAtom,
} from "../../Shared/InteractiveViewer/InteractiveViewer";
import { newP1QuestionsAtom } from "./Phases/P1KnowledgeCheck2";
import ControlPanel, {
  currentNextCallbackAtom,
  currentPhaseIsCompleteAtom,
} from "../../Shared/ControlPanel/InteractiveControlPanel";
import InteractiveControlPanel from "../../Shared/ControlPanel/InteractiveControlPanel";

const P1CurrentVersionAtom = atomWithStorage(
  "P1CurrentVersionAtom",
  "1.1.1",
  undefined,
  { getOnInit: true }
);

export const p1ResetAtom = atom<null | (() => void)>(null);

export default function PartOneControlPanel({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (prev: boolean) => void;
}) {
  const [phase, setPhase] = useAtom(phase1Atom);
  const [completion, setPartOneCompletion] = useAtom(partOneCompletionAtom);
  const [cloneRows, setCloneRows] = useAtom(cloneRowsAtom);
  const [boards, setBoards] = useAtom(positiveControlBoardsAtom);
  const [selectedBoard, setSelectedBoard] = useAtom(
    selectedPositiveControlBoardAtom
  );
  let currentBoard = boards[selectedBoard];
  const [resetConfirmOpen, setResetConfirmOpen] = useAtom(resetConfirmOpenAtom);
  const [hintsEnabled, setHintsEnabled] = useAtom(hintsEnabledAtom);
  const [genotypeHints, setGenotypeHints] = useAtom(genotypeHintsAtom);
  const setTransformMatrix = useSetAtom(transformMatrixAtom);
  const setBoardsP3 = useSetAtom(partThreePositiveControlBoardsAtom);
  const setCompletionP3 = useSetAtom(partThreeCompletionAtom);
  const [currentVersion, setCurrentVersion] = useAtom(P1CurrentVersionAtom);
  const [currentView, setCurrentView] = useAtom(currentView1Atom);
  const [newQuestions, setNewQuestions] = useAtom(newP1QuestionsAtom);
  const setCurrentNextCallback = useSetAtom(currentNextCallbackAtom);
  const [currentPhaseIsComplete, setCurrentPhaseIsComplete] = useAtom(
    currentPhaseIsCompleteAtom
  );
  const setReset = useSetAtom(p1ResetAtom);

  const resetCallback = function () {
    console.log("p1 reset was CALLED");
    setNewQuestions(RESET);
    setHintsEnabled(false);
    setGenotypeHints(
      Array(12)
        .fill(0)
        .map((el) => null)
    );
    setSelectedBoard(1);
    setCloneRows(RESET);
    setPartOneCompletion(RESET);
    setBoards(RESET);
    setTransformMatrix({
      1: [false, false, false, false],
      2: [false, false, false, false],
      3: [false, false, false, false],
      4: [false, false, false, false],
      5: [false, false, false, false],
    });
    setCompletionP3(RESET);
    setBoardsP3(RESET);
    // setCurrentView({
    //   ...currentView,
    //   section: 1,
    //   phase: 0,
    // });
  };

  useEffect(() => {
    if (resetCallback) {
      setReset(() => () => resetCallback());
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView.phase]);

  // useEffect(() => {
  //   let x = localStorage.getItem("P1CurrentVersionAtom");
  //   if (JSON.parse(x) !== VERSION_CONTROL) {
  //     setCurrentVersion(VERSION_CONTROL);
  //     resetCallback();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const isDisabled = function (phase: number) {
    if (phase === 0) {
      return false;
    }
    if (phase === 1) {
      let vals = Object.values(cloneRows).map((cloneRow) => {
        return cloneRow.vals;
      });
      for (let i = 0; i < vals.length; i++) {
        if (vals[i][0] === null) {
          return true;
        }
      }
      return false;
    } else if (phase === 2) {
      let otherBoard = boards[switchValues(selectedBoard)];
      if (compareUnorderedArrays(currentBoard.rows, otherBoard.rows)) {
        return true;
      }
      if (
        (selectedBoard === 1 || selectedBoard === 2) &&
        currentBoard.rows.length === 1
      ) {
        return false;
      } else if (
        (selectedBoard === 3 || selectedBoard === 4) &&
        currentBoard.rows.length === 2
      ) {
        return false;
      } else if (
        (selectedBoard === 5 || selectedBoard === 6) &&
        currentBoard.rows.length === 4
      ) {
        return false;
      }
    } else if (phase === 3) {
      let clonesMatrix = currentBoard.rows.map((rowId) => {
        return cloneRows[rowId].vals;
      });
      for (let i = 0; i < genotypeHints.length; i++) {
        if (genotypeHints[i] !== null) {
          return true;
        }
      }
      return false;
      // setGenotypeHints(z);
      // if (hintsEnabled) {
      // }
      // if (compareGenotypeWithClones(currentBoard.inputs, clonesMatrix)) {
      //   return false;
      // }
    } else if (phase === 4) {
      let { singles, pairs } = countSNPs(currentBoard.inputs);
      if (currentBoard.questions[2] === pairs) {
        return false;
      }
    } else if (phase === 5) {
      if (newQuestions[8] === 1) {
        return false;
      }
      // return
    }
    return true;
  };

  useEffect(() => {
    let clonesMatrix = currentBoard.rows.map((rowId) => {
      return cloneRows[rowId].vals;
    });
    setGenotypeHints(
      //@ts-ignore
      compareGenotypeWithClones(currentBoard.inputs, clonesMatrix)
    );
  }, [setGenotypeHints, currentBoard.inputs, currentBoard.rows, cloneRows]);

  const getText = () => {
    if (phase === 2) {
      if (!currentBoard.valid) {
        return "Submit";
      }
    } else if (phase === 3) {
      if (!currentBoard.inputValid) {
        return "Submit";
      }
    } else if (phase === 4) {
      if (
        !Object.values(boards)
          .map((board, idx) => {
            return board.questionsValid;
          })
          .includes(false)
      )
        return "Finish";
    }
    return "Next";
  };

  const handleClick = function (phase: number) {
    console.log("handleClick1");

    if (phase === 2) {
      let nextBoardId = Math.min.apply(
        null,
        Object.values(boards)
          .filter((board, idx) => {
            return !board.valid;
          })
          .map((invalidBoard) => {
            return invalidBoard.id;
          })
      ); // let valids = Object.values(boards).map((board, idx) => {
      //   return board.valid;
      // });
      if (nextBoardId > 0 && nextBoardId !== Infinity) {
        if (currentBoard.valid === false) {
          setBoards({
            ...boards,
            [selectedBoard]: {
              ...boards[selectedBoard],
              valid: true,
            },
          });
          if (selectedBoard < 6) {
            setSelectedBoard(selectedBoard + 1);
          }
          return;
        } else {
          setSelectedBoard(nextBoardId);
          return;
        }
      }
    } else if (phase === 3) {
      let nextBoardId = Math.min.apply(
        null,
        Object.values(boards)
          .filter((board, idx) => {
            return !board.inputValid;
          })
          .map((invalidBoard) => {
            return invalidBoard.id;
          })
      );
      if (nextBoardId > 0 && nextBoardId !== Infinity) {
        if (currentBoard.inputValid === false) {
          setBoards({
            ...boards,
            [selectedBoard]: {
              ...boards[selectedBoard],
              inputValid: true,
            },
          });
          if (selectedBoard < 6) {
            setSelectedBoard(selectedBoard + 1);
          }
          return;
        } else {
          setSelectedBoard(nextBoardId);
          return;
        }
      }
    } else if (phase === 4) {
      let nextBoardId = Math.min.apply(
        null,
        Object.values(boards)
          .filter((board, idx) => {
            return !board.questionsValid;
          })
          .map((invalidBoard) => {
            return invalidBoard.id;
          })
      );
      if (nextBoardId > 0 && nextBoardId !== Infinity) {
        if (currentBoard.questionsValid === false) {
          setBoards({
            ...boards,
            [selectedBoard]: {
              ...boards[selectedBoard],
              questionsValid: true,
            },
          });
          if (selectedBoard < 6) {
            setSelectedBoard(selectedBoard + 1);
          }
          return;
        } else {
          setSelectedBoard(nextBoardId);
          return;
        }
      }
    } else if (phase === 5) {
      setPartOneCompletion({ ...completion, [phase]: true });
      setCurrentView({
        ...currentView,
        section: 2,
        phase: 0,
      });
      return;
    }

    if (!completion[phase]) {
      setPartOneCompletion({ ...completion, [phase]: true });
    }
    // setPhase(phase + 1);
    setCurrentView({
      ...currentView,
      phase: currentView.phase + 1,
    });
  };

  useEffect(() => {
    // setCurrentPhaseIsComplete(completion[phase]);
    if (currentView.section === 1 && currentView.module === "2.6") {
      setCurrentNextCallback(() =>
        isDisabled(phase)
          ? null
          : () => {
              if (!isDisabled(phase)) {
                handleClick(phase);
              }
            }
      );
    }
    // return () => {
    //   setCurrentNextCallback(null);
    // };
  }, [
    phase,
    completion,
    cloneRows,
    boards,
    selectedBoard,
    genotypeHints,
    newQuestions,
    currentView,
  ]);

  return null;

  return (
    <InteractiveControlPanel
      backCallback={() => {
        if (phase === 0) {
          setCurrentView({
            ...currentView,
            section: 0,
            phase: 3,
          });
        } else {
          setCurrentView({
            ...currentView,
            phase: phase - 1,
          });
        }
      }}
      backIsDisabled={false}
      nextCallback={() => {
        handleClick(phase);
      }}
      description={`Step 1`}
      nextIsDisabled={isDisabled(phase)}
      phaseIsComplete={completion[phase]}
      progression={`${phase} / 5`}
    />
  );

  return (
    <ControlPanelWrapper resetCallback={resetCallback}>
      <div className="max-w-6xl text-zinc-300 mx-auto w-full grid grid-cols-[min-content,1fr_auto_auto] ">
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
            className="fill-current my-auto"
          >
            <path d="m869.52 355.32c-185.28 4.6797-370.44 9.3594-555.72 13.918-46.199 1.1992-46.441 73.199 0 72 185.28-4.6797 370.44-9.2383 555.72-13.922 46.199-1.0781 46.441-73.078 0-71.996z" />
            <path d="m871.44 550.8c-179.64 7.8008-359.4 13.559-539.16 17.16-46.32 0.96094-46.441 72.961 0 72 179.76-3.6016 359.52-9.3594 539.16-17.16 46.078-2.0391 46.438-74.039 0-72z" />
            <path d="m332.28 771.48c-46.32-0.48047-46.441 71.52 0 72 184.68 1.6797 369.24 1.3203 553.92-1.1992 46.32-0.60156 46.441-72.602 0-72-184.68 2.5195-369.24 3-553.92 1.1992z" />
          </svg>
        </button>
        <div className="flex flex-col md:flex-row mx-auto  text-center  w-full  col-start-2 row-start-1 py-1 translate-y-0.5 h-[calc(2lh+24px)] md:h-full">
          <button
            className=" gap-2  my-auto hidden md:inline-flex"
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
            <span className="mt-1 ml-2">Reset</span>
          </button>
          <button
            className="hidden"
            onClick={() => {
              setResetConfirmOpen(true);
            }}
          >
            <svg
              width="24pt"
              height="24pt"
              version="1.1"
              viewBox="0 0 1200 1200"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current mx-auto"
            >
              <path
                d="m287.73 350c72.848-90.875 184.54-149.27 309.9-149.99 1.7227-0.011718 3.4375-0.011718 5.1562 0 106.71 0.73047 203.5 43.242 274.8 111.99 4.1406 3.9883 8.1914 8.0664 12.156 12.234 67.055 70.43 108.7 165.28 110.21 269.84 0.066406 4.1406 0.0625 8.2812-0.003906 12.426-1.6523 103.7-42.77 197.81-108.98 267.98-5.2891 5.6055-10.742 11.059-16.359 16.363-70.281 66.383-164.61 107.57-268.54 109.11-3.8359 0.0625-7.6797 0.0625-11.523 0.011719-201.55-2.6953-367.12-154.46-391.46-350.07-3.4102-27.398-25.469-49.898-53.082-49.898s-50.258 22.441-47.504 49.914c1.6914 16.859 4.2344 33.574 7.6055 50.086 17.723 86.824 58.344 168.01 118.48 234.73 82.77 91.844 196.63 149.77 319.6 162.57 122.97 12.816 246.32-20.383 346.25-93.191 99.93-72.805 169.34-180.05 194.83-301.03 25.488-120.98 5.25-247.11-56.809-354.05-62.055-106.93-161.53-187.09-279.21-224.98-117.68-37.895-245.24-30.84-358.03 19.801-77.801 34.93-144.77 88.891-195.21 156.14v-100c0-27.613-22.387-50-50-50s-50 22.387-50 50v250h250c27.613 0 50-22.387 50-50s-22.387-50-50-50z"
                fillRule="evenodd"
              />
            </svg>
            {/* <span className="mt-auto block">Reset</span> */}
          </button>
          <div className="my-auto hidden md:inline-flex mx-12">
            <input
              onChange={(e) => {
                setHintsEnabled(!hintsEnabled);
              }}
              checked={hintsEnabled}
              id="hints"
              className=" dark:accent-emerald-400"
              type="checkbox"
            />
            <label htmlFor="hints" className="mt-1 ml-4  ">
              Enable Hints
            </label>
          </div>
          <div className="flex flex-col md:flex-row mx-auto  text-center grow">
            <h6 className="self-center my-auto md:mb-0 md:mt-1 md:mr-4">
              Step 1
            </h6>
            <span
              className={`${
                phase > 0 ? "" : "hidden"
              } align-bottom mb-auto md:mb-0 md:self-center md:mt-1 md:mr-4`}
            >{`${phase} / 5`}</span>
          </div>
          {/* <span>{`&frac${phase}/5`}</span> */}
        </div>
        <button
          onClick={() => {
            if (phase === 0) {
              setCurrentView({
                ...currentView,
                section: 0,
                phase: 3,
              });
            } else {
              setCurrentView({
                ...currentView,
                phase: phase - 1,
              });
            }
          }}
          className="col-start-3 bg-zinc-950/50 px-6  mx-auto md:mr-0"
        >
          <svg
            className={` rotate-90 fill-white aspect-square h-12 md:h-8 mx-auto`}
            version="1.1"
            viewBox="0 0 1200 1200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m562.88 812.12-300-300c-20.5-20.504-20.5-53.746 0-74.25 20.504-20.5 53.746-20.5 74.25 0l262.88 262.88 262.88-262.88c20.504-20.5 53.746-20.5 74.25 0 20.5 20.504 20.5 53.746 0 74.25l-300 300c-20.504 20.5-53.746 20.5-74.25 0z" />
          </svg>
        </button>
        <button
          disabled={isDisabled(phase)}
          className={`col-start-4 bg-zinc-950/50 px-6 disabled:invisible mx-auto md:ml-0 ${
            !isDisabled(phase) && !completion[phase]
              ? "fill-yellow-400"
              : "fill-current"
          }`}
          onClick={() => {
            handleClick(phase);
          }}
        >
          <svg
            className={` -rotate-90 aspect-square h-12 md:h-8 mx-auto`}
            version="1.1"
            viewBox="0 0 1200 1200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m562.88 812.12-300-300c-20.5-20.504-20.5-53.746 0-74.25 20.504-20.5 53.746-20.5 74.25 0l262.88 262.88 262.88-262.88c20.504-20.5 53.746-20.5 74.25 0 20.5 20.504 20.5 53.746 0 74.25l-300 300c-20.504 20.5-53.746 20.5-74.25 0z" />
          </svg>
        </button>
      </div>
      {/* <div className="grid grid-cols-[60px_auto_60px] md:grid-cols-[24rem_auto_auto] md:grid-rows-1 px-2 w-full h-full place-items-center">
        <div className="flex h-full items-center justify-center w-full ">
          <div className="my-auto ml-auto">
            <label htmlFor="hints" className="my-auto mr-4 text-white">
              Enable Hints
            </label>
            <input
              onChange={(e) => {
                setHintsEnabled(!hintsEnabled);
              }}
              checked={hintsEnabled}
              id="hints"
              className="my-auto"
              type="checkbox"
            />
          </div>
          <button
            disabled={currentView.phase === 1}
            aria-label="Back"
            className="disabled:invisible ml-auto"
          >
            <svg
              className={`mx-auto mb-auto rotate-90 fill-white aspect-square h-12 md:h-8`}
              version="1.1"
              viewBox="0 0 1200 1200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m562.88 812.12-300-300c-20.5-20.504-20.5-53.746 0-74.25 20.504-20.5 53.746-20.5 74.25 0l262.88 262.88 262.88-262.88c20.504-20.5 53.746-20.5 74.25 0 20.5 20.504 20.5 53.746 0 74.25l-300 300c-20.504 20.5-53.746 20.5-74.25 0z" />
            </svg>
          </button>
        </div>
        <div className="w-full h-full flex flex-col md:flex-row gap-x-8 text-white text-center pt-2 text-xl md:max-w-sm md:col-start-1 row-start-1 col-start-2 md:justify-center md">
          <span className="block translate-y-0.5">Step 1</span>{" "}
          <span className="block translate-y-0.5">
            {currentView.phase + " / 5"}
          </span>
        </div>
        <button
          onClick={() => {
            if (!isDisabled(phase)) {
              handleClick(phase);
            }
          }}
          aria-label="Next"
          className={`disabled:invisible ${
            isDisabled(phase) ? "invisible" : ""
          }`}
        >
          <svg
            className={`mx-auto mb-auto -rotate-90 fill-white  aspect-square h-12 md:h-8`}
            version="1.1"
            viewBox="0 0 1200 1200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m562.88 812.12-300-300c-20.5-20.504-20.5-53.746 0-74.25 20.504-20.5 53.746-20.5 74.25 0l262.88 262.88 262.88-262.88c20.504-20.5 53.746-20.5 74.25 0 20.5 20.504 20.5 53.746 0 74.25l-300 300c-20.504 20.5-53.746 20.5-74.25 0z" />
          </svg>
        </button>
      </div> */}
    </ControlPanelWrapper>
  );

  return (
    <ControlPanelWrapper resetCallback={resetCallback} fixed={fixed}>
      <div className="fixed bottom-0 z-50 w-[100vw] border-t-2 bg-interactiveGreen">
        <div className="mx-auto max-w-6xl p-2">
          <div className="flex gap-12 px-2 text-white">
            <p className="my-auto">{`Step 1`}</p>
            <p className="my-auto">{`${phase} / 5`}</p>
            <div className="my-auto ml-auto">
              <label htmlFor="hints" className="my-auto mr-4 text-white">
                Enable Hints
              </label>
              <input
                onChange={(e) => {
                  setHintsEnabled(!hintsEnabled);
                }}
                checked={hintsEnabled}
                id="hints"
                className="my-auto"
                type="checkbox"
              />
            </div>
            <button
              onClick={() => {
                setPhase(phase - 1);
              }}
              className="bg-interactiveGreen text-white disabled:invisible"
              // text="Back"
              disabled={phase === 1}
            >
              <svg
                width="24pt"
                height="24pt"
                className={`mx-auto mb-auto rotate-90 fill-white`}
                version="1.1"
                viewBox="0 0 1200 1200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m562.88 812.12-300-300c-20.5-20.504-20.5-53.746 0-74.25 20.504-20.5 53.746-20.5 74.25 0l262.88 262.88 262.88-262.88c20.504-20.5 53.746-20.5 74.25 0 20.5 20.504 20.5 53.746 0 74.25l-300 300c-20.504 20.5-53.746 20.5-74.25 0z" />
              </svg>
            </button>
            <button
              onClick={() => {
                if (!isDisabled(phase)) {
                  handleClick(phase);
                }
              }}
              className={`${phase === 5 ? "" : ""} ${
                getText() === "Finish"
                  ? "bg-primaryBlue"
                  : "bg-interactiveGreen disabled:invisible"
              } text-white`}
              // text={getText()}
              disabled={isDisabled(phase)}
            >
              <svg
                width="24pt"
                height="24pt"
                className={`mx-auto mb-auto -rotate-90 fill-white duration-500`}
                version="1.1"
                viewBox="0 0 1200 1200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m562.88 812.12-300-300c-20.5-20.504-20.5-53.746 0-74.25 20.504-20.5 53.746-20.5 74.25 0l262.88 262.88 262.88-262.88c20.504-20.5 53.746-20.5 74.25 0 20.5 20.504 20.5 53.746 0 74.25l-300 300c-20.504 20.5-53.746 20.5-74.25 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* <div>
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
        <div className="relative mx-auto flex max-w-6xl justify-between">
          {phase === 1 ? (
            <PrimaryButton
              type="button"
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
              type="button"
              first
              callback={() => {
                setPhase(phase - 1);
              }}
              className="bg-interactiveGreen text-white"
              text="Back"
              disabled={phase === 1}
            />
          )}
          <PrimaryButton
            type="submit"
            callback={() => {
              if (!isDisabled(phase)) {
                handleClick(phase);
              }
            }}
            className={`${phase === 5 ? "hidden" : ""} ${getText() === "Finish" ? "bg-primaryBlue" : "bg-interactiveGreen"} text-white`}
            text={getText()}
            disabled={isDisabled(phase)}
          />
        </div>
      </div> */}
    </ControlPanelWrapper>
  );
}
