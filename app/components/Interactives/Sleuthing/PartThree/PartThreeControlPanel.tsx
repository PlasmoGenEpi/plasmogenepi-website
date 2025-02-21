"use client";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import ControlPanelWrapper from "../../Shared/ControlPanel/ControlPanelWrapper";
import PrimaryButton from "../../Shared/ControlPanel/PrimaryButton";
import {
  MHPGenotypeHintsAtom,
  VERSION_CONTROL,
  activeRowColumnTransformAtom,
  cloneRowsAtom,
  currentVersionAtom,
  hintsEnabledAtom,
  partThreeCompletionAtom,
  partThreePositiveControlBoardsAtom,
  phase1Atom,
  selectedPositiveControlBoardAtom,
  transformMatrixAtom,
  versionControlAtom,
} from "@/data/Interactives/interactiveStore";
import { resetConfirmOpenAtom } from "../../Shared/ControlPanel/ResetModal";
import { atomWithStorage, RESET } from "jotai/utils";
// import {
//   MicroId,
//   compareMatrices,
//   compareUnorderedArrays,
//   countMHPs,
//   getDifferenceBetweenMatrices,
//   switchValues,
// } from "@/helpers/helpers";
import { useCallback, useEffect, useMemo } from "react";
import { atom, ExtractAtomValue } from "jotai/vanilla";
import {
  compareUnorderedArrays,
  countMHPs,
  getDifferenceBetweenMatrices,
  MicroId,
  switchValues,
} from "../../helpers";
import { currentView1Atom } from "../../Shared/InteractiveViewer/InteractiveViewer";
import { currentNextCallbackAtom } from "../../Shared/ControlPanel/InteractiveControlPanel";
import { P3KCQuestions2Atom } from "./Phases/PartThreeKnowledgeCheck2";

const P3CurrentVersionAtom = atomWithStorage("P3CurrentVersionAtom", "1.1.1");
export const p3ResetAtom = atom<null | (() => void)>(null);

export default function PartThreeControlPanel({ fixed }: { fixed: boolean }) {
  const [phase, setPhase] = useAtom(phase1Atom);
  const cloneRows = useAtomValue(cloneRowsAtom);
  const [resetConfirmOpen, setResetConfirmOpen] = useAtom(resetConfirmOpenAtom);
  const [completion, setCompletion] = useAtom(partThreeCompletionAtom);
  const [boards, setBoards] = useAtom(partThreePositiveControlBoardsAtom);
  const [transformMatrix, setTransformMatrix] = useAtom(transformMatrixAtom);
  const [activeTuple, setActiveTuple] = useAtom(activeRowColumnTransformAtom);
  const [hintsEnabled, setHintsEnabled] = useAtom(hintsEnabledAtom);
  const [MHPGenotypeHints, setMHPGenotypeHints] = useAtom(MHPGenotypeHintsAtom);
  const [selectedBoard, setSelectedBoard] = useAtom(
    selectedPositiveControlBoardAtom
  );
  const [currentVersion, setCurrentVersion] = useAtom(P3CurrentVersionAtom);
  const [currentView, setCurrentView] = useAtom(currentView1Atom);
  const setCurrentNextCallback = useSetAtom(currentNextCallbackAtom);
  const [finalQuestions, setFinalQuestions] = useAtom(P3KCQuestions2Atom);
  const setReset = useSetAtom(p3ResetAtom);

  const resetCallback = useCallback(() => {
    setHintsEnabled(false);
    setFinalQuestions(RESET);
    setTransformMatrix({
      1: [false, false, false, false],
      2: [false, false, false, false],
      3: [false, false, false, false],
      4: [false, false, false, false],
      5: [false, false, false, false],
    });
    setActiveTuple([1, 0]);
    setCompletion(RESET);
    setBoards(RESET);
    setSelectedBoard(1);
  }, []);

  useEffect(() => {
    if (resetCallback) {
      setReset(() => () => resetCallback());
    }
  }, []);

  useEffect(() => {
    let x = localStorage.getItem("P3CurrentVersionAtom");
    if (JSON.parse(x) !== VERSION_CONTROL) {
      setCurrentVersion(VERSION_CONTROL);
      resetCallback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentBoard = boards[selectedBoard];
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

  const cloneRowMicroIds = useMemo(() => {
    let cloneRowMicroIds: MicroId[][] = [[], [], [], []];
    for (let k in cloneRows) {
      let row = cloneRows[k].vals;
      for (let i = 0; i < 4; i++) {
        cloneRowMicroIds[i].push(
          row.slice(i * 3, i * 3 + 3) as unknown as MicroId
        );
      }
    }
    return cloneRowMicroIds;
    // for (let z = 0; z < currentBoard.rows.length; z++) {
    //   let rowId = currentBoard.rows[z];
    // for (let i = 0; i < 4; i++) {
    //   cloneRowMicroIds[i].push(cloneRows[rowId].vals.slice(i * 3, i * 3 + 3));
    // }
    // }
    // return cloneRowMicroIds;
  }, [cloneRows]);

  const isDisabled = function (phase: number) {
    if (phase === 0) {
      return false;
    }
    // return false;
    if (phase === 1) {
      for (let i = 1; i <= 5; i++) {
        if (transformMatrix[i as 1 | 2 | 3 | 4 | 5].includes(false)) {
          return true;
        }
      }
      return false;
    } else if (phase === 2) {
      if (currentBoard.valid) {
        return false;
      }
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
      if (currentBoard.inputValid) {
        return false;
      }
      let cloneRowMicroIds = [[], [], [], []];
      for (let z = 0; z < currentBoard.rows.length; z++) {
        let rowId = currentBoard.rows[z];
        for (let i = 0; i < 4; i++) {
          cloneRowMicroIds[i].push(
            //@ts-ignore
            cloneRows[rowId].vals.slice(i * 3, i * 3 + 3)
          );
        }
      }
      let x = getDifferenceBetweenMatrices(
        cloneRowMicroIds,
        currentBoard.inputs
      );
      console.log(x);
      let flag = true;
      for (let i = 0; i < x.length; i++) {
        if (x[i].extra.length !== 0 || x[i].missing.length !== 0) {
          flag = false;
        }
      }
      if (flag === true) {
        return false;
      }
    } else if (phase === 4) {
      if (currentBoard.questionsValid) {
        return false;
      }
      let mhpCount = countMHPs(currentBoard.inputs);
      if (selectedBoard === 1 || selectedBoard === 2) {
        if (currentBoard.questions[2] === 0) {
          return false;
        }
      } else if (selectedBoard === 3) {
        return currentBoard.questions[3] !== 0;
      } else if (selectedBoard === 4) {
        return (
          currentBoard.questions[2] !== Math.max(...Object.values(mhpCount))
        );
      } else if (selectedBoard === 5) {
        return (
          currentBoard.questions[3] !==
          Object.values(mhpCount).filter((count) => {
            return count === Math.max(...Object.values(mhpCount));
          }).length
        );
      } else if (selectedBoard === 6) {
        return currentBoard.questions[2] !== 3;
      }
    } else if (phase === 5) {
      if (finalQuestions[4]) {
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    let cloneRowMicroIds = [[], [], [], []];
    for (let z = 0; z < currentBoard.rows.length; z++) {
      let rowId = currentBoard.rows[z];
      for (let i = 0; i < 4; i++) {
        cloneRowMicroIds[i].push(
          //@ts-ignore
          cloneRows[rowId].vals.slice(i * 3, i * 3 + 3)
        );
      }
    }
    let x = getDifferenceBetweenMatrices(cloneRowMicroIds, currentBoard.inputs);
    setMHPGenotypeHints(x);
  }, [
    cloneRows,
    currentBoard.inputs,
    currentBoard,
    setMHPGenotypeHints,
    selectedBoard,
  ]);

  const handleClick = function (phase: number) {
    console.log("handleClick3");

    if (phase === 1) {
    } else if (phase === 2) {
      let nextBoardId = Math.min.apply(
        null,
        Object.values(boards)
          .filter((board, idx) => {
            return !board.valid;
          })
          .map((invalidBoard) => {
            return invalidBoard.id;
          })
      );
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
      setCompletion({ ...completion, [phase]: true });
      setCurrentView({ ...currentView, section: 4, phase: 0 });
      return;
    }
    setCompletion({ ...completion, [phase]: true });
    // setPhase(phase + 1);
    setCurrentView({
      ...currentView,
      phase: currentView.phase + 1,
    });
    // return;
  };

  useEffect(() => {
    if (completion[phase] === false) {
      window.scrollTo({
        top: 0,
      });
    }
  }, [phase, completion]);

  // console.log(transformMatrix);

  useEffect(() => {
    // setCurrentPhaseIsComplete(completion[phase]);
    if (currentView.section === 3 && currentView.module === "2.6") {
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
    finalQuestions,
    phase,
    completion,
    cloneRows,
    boards,
    transformMatrix,
    activeTuple,
    hintsEnabled,
    MHPGenotypeHints,
    selectedBoard,
    currentView,
  ]);

  return null;

  return (
    <ControlPanelWrapper resetCallback={resetCallback} fixed={fixed}>
      <div>
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
        <div className="relative mx-auto flex max-w-6xl justify-between ">
          {/* {
          <div className="absolute bottom-[calc(100%+20px)] right-0 flex gap-2 bg-white py-2 pl-2 pr-4">
            <label htmlFor="hints">Enable Hints</label>
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
        } */}
          {phase === 1 ? (
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
                // setPhase(phase - 1);
                setCurrentView({
                  ...currentView,
                  phase: currentView.phase - 1,
                });
              }}
              className="bg-primaryGreen text-white"
              text="Back"
              disabled={phase === 1}
            />
          )}
          <PrimaryButton
            callback={() => {
              if (!isDisabled(phase)) {
                handleClick(phase);
              }
            }}
            className={`${
              getText() === "Finish" ? "bg-primaryBlue" : "bg-primaryGreen"
            } text-white`}
            text={getText()}
            disabled={isDisabled(phase)}
          />
        </div>
      </div>
    </ControlPanelWrapper>
  );
}
