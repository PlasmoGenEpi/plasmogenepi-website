"use client";
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { useCallback, useEffect, useRef, useState } from "react";
import { p1ResetAtom } from "../../Sleuthing/PartOne/PartOneControlPanel";
import { p2ResetAtom } from "../../Sleuthing/PartTwo/PartTwoControlPanel";
import { p3ResetAtom } from "../../Sleuthing/PartThree/PartThreeControlPanel";
import { p4ResetAtom } from "../../Sleuthing/PartFour/PartFourControlPanel";
import { p5ResetAtom } from "../../Sleuthing/PartFive/PartFiveControlPanel";
import {
  s6ResetAtom,
  stepSixCompletionAtom,
} from "../../Sleuthing/StepSix/StepSix";
import {
  currentView1Atom,
  currentView2Atom,
  currentView3Atom,
} from "../InteractiveViewer/InteractiveViewer";
import ResetModalRow from "./ResetModalRow";
import {
  partEightCompletionAtom,
  partFiveCompletionAtom,
  partFourCompletionAtom,
  partOneCompletionAtom,
  partSevenCompletionAtom,
  partSixCompletionAtom,
  partThreeCompletionAtom,
  partTwoCompletionAtom,
} from "@/data/Interactives/interactiveStore";
import { partZeroCompletionAtom } from "../../Sleuthing/PartZero/PartZero";
import { atomWithStorage, RESET } from "jotai/utils";
import { s2p0CompletionAtom } from "./InteractiveControlPanel2";
// import ReactModal from "react-modal";

export const resetConfirmOpenAtom = atom(false);
export const globalResetCallbackAtom = atom(() => () => {
  console.log("works");
});

export const s2Reset1Atom = atom<any>(null);
export const s2Reset2Atom = atom<any>(null);
export const s2Reset3Atom = atom<any>(null);
export const s3ResetAtom = atom<any>(null);
export default function ResetPrompt({
  currentModule,
}: {
  currentModule: string;
}) {
  // const resetCallback = useAtomValue(globalResetCallbackAtom);
  const [resetConfirmOpen, setResetConfirmOpen] = useAtom(resetConfirmOpenAtom);
  const [currentView1, setCurrentView1] = useAtom(currentView1Atom);
  const [currentView2, setCurrentView2] = useAtom(currentView2Atom);
  const [completion0, setCompletion0] = useAtom(partZeroCompletionAtom);
  const completion1 = useAtomValue(partOneCompletionAtom);
  const completion2 = useAtomValue(partTwoCompletionAtom);
  const completion3 = useAtomValue(partThreeCompletionAtom);
  const completion4 = useAtomValue(partFourCompletionAtom);
  const completion5 = useAtomValue(partFiveCompletionAtom);
  const completion6 = useAtomValue(stepSixCompletionAtom);
  const completion7 = useAtomValue(partSixCompletionAtom);
  const completion8 = useAtomValue(partSevenCompletionAtom);
  const completion9 = useAtomValue(partEightCompletionAtom);
  const s3Reset = useAtomValue(s3ResetAtom);
  const [currentView3, setCurrentView3] = useAtom(currentView3Atom);
  const [s2p0, setS2p0] = useAtom(s2p0CompletionAtom);

  const completionObjects: {
    [key: number]: {
      [key: number]: boolean;
    };
  } = {
    1: completion1,
    2: completion2,
    3: completion3,
    4: completion4,
    5: completion5,
    6: completion6,
  };

  const completionObjects2: {
    [key: number]: {
      [key: number]: Boolean;
    };
  } = {
    1: completion7,
    2: completion8,
    3: completion9,
  };

  const p1Reset = useAtomValue(p1ResetAtom);
  const p2Reset = useAtomValue(p2ResetAtom);
  const p3Reset = useAtomValue(p3ResetAtom);
  const p4Reset = useAtomValue(p4ResetAtom);
  const p5Reset = useAtomValue(p5ResetAtom);
  const p6Reset = useAtomValue(s6ResetAtom);
  const s2Reset1 = useAtomValue(s2Reset1Atom);
  const s2Reset2 = useAtomValue(s2Reset2Atom);
  const s2Reset3 = useAtomValue(s2Reset3Atom);
  const [resetCallbackSelected, setResetCallbackSelected] = useState<{
    [key: number]: boolean;
  }>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  // useEffect(() => {
  //   if (window !== undefined && document) {
  //     let x = document.querySelector("main");
  //     if (x) {
  //       ReactModal.setAppElement(x);
  //     }
  //   }
  // }, []);

  const prevStepIsResetting = useCallback(
    (step: number) => {
      return Object.entries(resetCallbackSelected)
        .filter((entry) => {
          return parseInt(entry[0]) < step;
        })
        .map((entry) => {
          return entry[1];
        })
        .includes(true);
    },
    [resetCallbackSelected]
  );

  function handleConfirmReset() {
    if (currentModule === "2.6") {
      if (prevStepIsResetting(7)) {
        console.log("calling 6 reset");
        if (p6Reset) {
          p6Reset();
          setCurrentView1({
            module: "2.6",
            section: 6,
            phase: 0,
          });
        }
      }
      if (prevStepIsResetting(6)) {
        console.log("calling 5 reset");
        if (p5Reset) {
          p5Reset();
          setCurrentView1({
            module: "2.6",
            section: 5,
            phase: 0,
          });
        }
      }
      if (prevStepIsResetting(5)) {
        console.log("calling 4 reset");
        if (p4Reset) {
          p4Reset();
          setCurrentView1({
            module: "2.6",
            section: 4,
            phase: 0,
          });
        }
      }
      if (prevStepIsResetting(4)) {
        console.log("calling 3 reset");
        if (p3Reset) {
          p3Reset();
          setCurrentView1({
            module: "2.6",
            section: 3,
            phase: 0,
          });
        }
      }
      if (prevStepIsResetting(3)) {
        console.log("calling 2 reset");
        if (p2Reset) {
          p2Reset();
          setCurrentView1({
            module: "2.6",
            section: 2,
            phase: 0,
          });
        }
      }
      if (prevStepIsResetting(2)) {
        console.log("calling 1 reset");
        if (p1Reset) {
          p1Reset();
          setCompletion0(RESET);
          setCurrentView1({
            module: "2.6",
            section: 0,
            phase: 0,
          });
        }
      }
    } else if (currentModule === "5.6") {
      console.log("RESET");
      if (prevStepIsResetting(4)) {
        console.log("calling 3 reset");
        if (s2Reset3) {
          s2Reset3();
          setCurrentView2({
            module: "5.6",
            section: 3,
            phase: 1,
          });
        }
      }
      if (prevStepIsResetting(3)) {
        console.log("calling 2 reset");
        if (s2Reset2) {
          s2Reset2();
          setCurrentView2({
            module: "5.6",
            section: 2,
            phase: 0,
          });
        }
      }
      if (prevStepIsResetting(2)) {
        console.log("calling 1 reset");
        setS2p0(RESET);
        if (s2Reset1) {
          console.log("S2 RESET 1");
          s2Reset1();
          // setCompletion0(RESET);
        }
        setCurrentView2({
          module: "5.6",
          section: 0,
          phase: 0,
        });
      }
    } else if (currentModule === "4.4") {
      s3Reset();
      setCurrentView3({
        ...currentView3,
        section: 0,
        phase: 0,
      });
      setResetConfirmOpen(false);
    }

    setResetConfirmOpen(false);
    // if (prevStepIsResetting(1)) {
    //   console.log("calling 1 reset");
    // }

    // p1Reset();
    // p2Reset();
    // p3Reset();
    // p4Reset();
    // p5Reset();
    // p6Reset();
  }

  useEffect(() => {
    return () =>
      setResetCallbackSelected({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
      });
  }, [resetConfirmOpen]);

  if (!resetConfirmOpen) {
    return null;
  }

  return (
    <dialog
      className={`modal font-helvetica z-[9999] ${
        resetConfirmOpen ? "modal-open" : "hidden"
      }`}
    >
      <div className="modal-box h-fit max-w-sm md:max-w-lg dark:text-gray-200 dark:font-normal dark:bg-zinc-800 overflow-hidden">
        <h3 className="text-xl text-center pb-4 border-b border-b-black/50 dark:border-b-white/50">
          Are you sure?
        </h3>
        <p className="py-8 text-base text-center text-pretty">
          Resetting will clear data for your current activity and any others
          that depend on it.
        </p>
        <div className="grid/ mb-4">
          {currentModule === "2.6"
            ? Array(6)
                .fill(0)
                .map((el, idx) => {
                  console.log(completionObjects);
                  return (
                    <ResetModalRow
                      requires={
                        idx === 0
                          ? false
                          : Object.values(completionObjects[idx]).includes(
                              false
                            )
                      }
                      completion={completionObjects[idx + 1]}
                      id={idx + 1}
                      checked={
                        resetCallbackSelected[idx + 1] ||
                        prevStepIsResetting(idx + 1)
                      }
                      key={idx}
                      disabled={
                        idx === 2 || idx === 0
                          ? false
                          : prevStepIsResetting(idx + 1) ||
                            Object.values(completionObjects[idx]).includes(
                              false
                            )
                      }
                      callback={() => {
                        setResetCallbackSelected({
                          ...resetCallbackSelected,
                          [idx + 1]: !resetCallbackSelected[idx + 1],
                        });
                      }}
                    />
                  );
                })
            : currentModule === "4.4"
            ? ""
            : Array(3)
                .fill(0)
                .map((el, idx) => {
                  return (
                    <ResetModalRow
                      requires={
                        idx === 0
                          ? false
                          : idx === 1
                          ? !completion7[33.5]
                          : idx === 2
                          ? !completion8[17]
                          : false
                      }
                      // requires={
                      //   (idx === 1 && !completion8[0]) || idx === 2}
                      // requires={
                      //   idx === 0
                      //     ? false
                      //     : Object.values(completionObjects2[idx]).includes(
                      //         false
                      //       )
                      // }
                      completion={completionObjects[idx + 1]}
                      id={idx + 1}
                      checked={
                        resetCallbackSelected[idx + 1] ||
                        prevStepIsResetting(idx + 1)
                      }
                      key={idx}
                      disabled={
                        idx === 0 ? false : prevStepIsResetting(idx + 1)
                      }
                      callback={() => {
                        setResetCallbackSelected({
                          ...resetCallbackSelected,
                          [idx + 1]: !resetCallbackSelected[idx + 1],
                        });
                      }}
                    />
                  );
                })}
          {/* <div className="flex mx-auto/ px-2 py-4 md:col-start-1 gap-24 justify-between ">
            <label htmlFor="interactive-reset-1">Step 1</label>
            <input
              id="interactive-reset-1"
              onChange={() => {
                setResetCallbackSelected({
                  ...resetCallbackSelected,
                  1: !resetCallbackSelected[1],
                });
              }}
              checked={resetCallbackSelected[1]}
              type="checkbox"
              className="m-4/ mb-auto accent-orange-400"
            />
          </div>
          <div className="flex mx-auto/ px-2 py-4 md:col-start-1 gap-24 justify-between ">
            <label htmlFor="interactive-reset-2">Step 2</label>
            <input
              id="interactive-reset-2"
              onChange={() => {
                setResetCallbackSelected({
                  ...resetCallbackSelected,
                  2: !resetCallbackSelected[2],
                });
              }}
              checked={resetCallbackSelected[2] || prevStepIsResetting(2)}
              disabled={prevStepIsResetting(2)}
              type="checkbox"
              className="m-4/ mb-auto accent-orange-400"
            />
          </div>
          <div className="flex mx-auto/ px-2 py-4 md:col-start-1 gap-24 justify-between ">
            <label htmlFor="interactive-reset-3">Step 3</label>
            <input
              id="interactive-reset-3"
              onChange={() => {
                setResetCallbackSelected({
                  ...resetCallbackSelected,
                  3: !resetCallbackSelected[3],
                });
              }}
              checked={resetCallbackSelected[3] || prevStepIsResetting(3)}
              disabled={prevStepIsResetting(3)}
              type="checkbox"
              className="m-4/ mb-auto accent-orange-400"
            />{" "}
          </div>
          <div className="flex mx-auto/ px-2 py-4 md:col-start-2 md:row-start-1 gap-24 justify-between ">
            <label htmlFor="interactive-reset-4">Step 4</label>
            <input
              id="interactive-reset-4"
              onChange={() => {
                setResetCallbackSelected({
                  ...resetCallbackSelected,
                  4: !resetCallbackSelected[4],
                });
              }}
              checked={resetCallbackSelected[4] || prevStepIsResetting(4)}
              disabled={prevStepIsResetting(4)}
              className="m-4/ mb-auto accent-orange-400"
              type="checkbox"
            />
          </div>
          <div className="flex mx-auto/ px-2 py-4 md:col-start-2 md:row-start-2 gap-24 justify-between ">
            <label htmlFor="interactive-reset-5">Step 5</label>
            <input
              id="interactive-reset-5"
              onChange={() => {
                setResetCallbackSelected({
                  ...resetCallbackSelected,
                  5: !resetCallbackSelected[5],
                });
              }}
              checked={resetCallbackSelected[5] || prevStepIsResetting(5)}
              disabled={prevStepIsResetting(5)}
              className="m-4/ mb-auto accent-orange-400"
              type="checkbox"
            />{" "}
          </div>
          <div className="flex mx-auto/ px-2 py-4 md:col-start-2 md:row-start-3 gap-24 justify-between ">
            <label htmlFor="interactive-reset-6">Step 6</label>
            <input
              id="interactive-reset-6"
              onChange={() => {
                setResetCallbackSelected({
                  ...resetCallbackSelected,
                  6: !resetCallbackSelected[6],
                });
              }}
              checked={resetCallbackSelected[6] || prevStepIsResetting(6)}
              disabled={prevStepIsResetting(6)}
              className="m-4/ mb-auto accent-orange-400"
              type="checkbox"
            />{" "}
          </div> */}
        </div>

        <div className="flex justify-between">
          <button
            autoFocus
            onClick={() => {
              setResetConfirmOpen(false);
            }}
            className=" px-4 py-1 "
          >
            {" "}
            <span className="translate-y-0.5 block">Cancel</span>
          </button>
          <button
            disabled={currentModule === "4.4" ? false : !prevStepIsResetting(7)}
            onClick={() => {
              handleConfirmReset();
            }}
            className={`bg-orange-500/70 text-white px-6 py-2 disabled:opacity-20`}
          >
            <span className="translate-y-0.5 block">Reset</span>
          </button>
        </div>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button
          onClick={() => {
            setResetConfirmOpen(false);
          }}
          className="outline-none focus-within:outline-none focus-within:ring-0 ring-0"
        >
          close
        </button>
      </form>
    </dialog>
  );
}
