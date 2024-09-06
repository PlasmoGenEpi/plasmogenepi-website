"use client";
import {
  cloneRowsAtom,
  initialBoardState,
  partOneCompletionAtom,
  phaseAtom,
  positiveControlBoardsAtom,
  selectedPositiveControlBoardAtom,
  hintsEnabledAtom,
  genotypeHintsAtom,
  transformMatrixAtom,
  partThreePositiveControlBoardsAtom,
  partThreeCompletionAtom,
  activeRowColumnTransformAtom,
  VERSION_CONTROL,
} from "@/data/Interactives/interactiveStore";
import ControlPanelWrapper from "../../Shared/ControlPanel/ControlPanelWrapper";
import PrimaryButton from "../../Shared/ControlPanel/PrimaryButton";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { resetConfirmOpenAtom } from "../../Shared/ControlPanel/ResetModal";
import { atomWithStorage, RESET } from "jotai/utils";
import {
  compareGenotypeWithClones,
  compareUnorderedArrays,
  countSNPs,
  switchValues,
} from "@/helpers/helpers";
import { useCallback, useEffect } from "react";

const P1CurrentVersionAtom = atomWithStorage("P1CurrentVersionAtom", "1.1.1");

export default function PartOneControlPanel({ fixed }: { fixed?: boolean }) {
  const [phase, setPhase] = useAtom(phaseAtom);
  const [completion, setPartOneCompletion] = useAtom(partOneCompletionAtom);
  const [cloneRows, setCloneRows] = useAtom(cloneRowsAtom);
  const [boards, setBoards] = useAtom(positiveControlBoardsAtom);
  const [selectedBoard, setSelectedBoard] = useAtom(
    selectedPositiveControlBoardAtom,
  );
  let currentBoard = boards[selectedBoard];
  const [resetConfirmOpen, setResetConfirmOpen] = useAtom(resetConfirmOpenAtom);
  const [hintsEnabled, setHintsEnabled] = useAtom(hintsEnabledAtom);
  const [genotypeHints, setGenotypeHints] = useAtom(genotypeHintsAtom);
  const setTransformMatrix = useSetAtom(transformMatrixAtom);
  const setBoardsP3 = useSetAtom(partThreePositiveControlBoardsAtom);
  const setCompletionP3 = useSetAtom(partThreeCompletionAtom);
  const [currentVersion, setCurrentVersion] = useAtom(P1CurrentVersionAtom);

  const resetCallback = useCallback(() => {
    setHintsEnabled(false);
    setGenotypeHints(
      Array(12)
        .fill(0)
        .map((el) => null),
    );
    setSelectedBoard(1);
    setCloneRows(RESET);
    setPartOneCompletion(RESET);
    setBoards(RESET);

    // P3
    setTransformMatrix({
      1: [false, false, false, false],
      2: [false, false, false, false],
      3: [false, false, false, false],
      4: [false, false, false, false],
      5: [false, false, false, false],
    });
    setCompletionP3(RESET);
    setBoardsP3(RESET);
  }, []);

  useEffect(() => {
    let x = localStorage.getItem("P1CurrentVersionAtom");
    if (JSON.parse(x) !== VERSION_CONTROL) {
      setCurrentVersion(VERSION_CONTROL);
      resetCallback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isDisabled = function (phase: number) {
    if (phase === 1) {
      let vals = Object.values(cloneRows).map((cloneRow) => {
        return cloneRow.vals;
      });
      console.log(vals);
      for (let i = 0; i < vals.length; i++) {
        if (vals[i][0] === null) {
          return true;
        }
      }
      return false;
    } else if (phase === 2) {
      let otherBoard = boards[switchValues(selectedBoard)];
      console.log(currentBoard, otherBoard);
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
    }
    return true;
  };

  useEffect(() => {
    let clonesMatrix = currentBoard.rows.map((rowId) => {
      return cloneRows[rowId].vals;
    });
    setGenotypeHints(
      //@ts-ignore
      compareGenotypeWithClones(currentBoard.inputs, clonesMatrix),
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
    if (phase === 2) {
      let nextBoardId = Math.min.apply(
        null,
        Object.values(boards)
          .filter((board, idx) => {
            return !board.valid;
          })
          .map((invalidBoard) => {
            return invalidBoard.id;
          }),
      );
      console.log(nextBoardId);
      // let valids = Object.values(boards).map((board, idx) => {
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
          }),
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
          }),
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
    }

    if (!completion[phase]) {
      setPartOneCompletion({ ...completion, [phase]: true });
    }
    setPhase(phase + 1);
  };

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
              className="bg-primaryGreen text-white"
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
            className={`${phase === 5 ? "hidden" : ""} ${getText() === "Finish" ? "bg-primaryBlue" : "bg-primaryGreen"} text-white`}
            text={getText()}
            disabled={isDisabled(phase)}
          />
        </div>
      </div>
    </ControlPanelWrapper>
  );
}
