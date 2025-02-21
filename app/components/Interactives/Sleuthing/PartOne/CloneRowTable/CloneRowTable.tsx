"use client";
import CloneRow, {
  cloneRowButtonColors,
  cloneRowColors,
} from "@/app/components/Interactives/Shared/CloneRow/CloneRow";
import { fixedData } from "@/data/Interactives/fixedData";
import {
  cloneRowsAtom,
  partOneCompletionAtom,
  positiveControlBoardsAtom,
  selectedPositiveControlBoardAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import { RESET } from "jotai/utils";
import { useCallback, useEffect } from "react";
import LabelRow from "./LabelRow";
import CloneElement from "@/app/components/Interactives/Shared/CloneRow/CloneElement";
import { findFirstFocusableElement } from "@/app/components/Interactives/helpers";
// import { findFirstFocusableElement } from "@/helpers/helpers";

const refValues = fixedData[1].refValues;
const altValues = fixedData[1].altValues;

const createCloneRow = () => {
  let newRow = refValues.map((val, idx) => {
    return Math.round(Math.random());
  }) as (0 | 1)[];
  let microIds = [];
  for (let i = 0; i < 12; i += 3) {
    microIds.push(newRow.slice(i, i + 3).join(""));
  }
  return {
    vals: newRow,
    microIds: microIds,
  };
};

export default function CloneRowTable({
  phase,
  forwards,
}: {
  phase: number;
  forwards?: boolean;
}) {
  const [cloneRows, setCloneRows] = useAtom(cloneRowsAtom);
  const [completion, setCompletion] = useAtom(partOneCompletionAtom);
  const [boards, setBoards] = useAtom(positiveControlBoardsAtom);
  const activeBoard = useAtomValue(selectedPositiveControlBoardAtom);
  const currentBoard = boards[activeBoard];
  const handleClick = (id: number) => {
    if (phase === 1) {
      let x = { ...createCloneRow(), id: id };
      let newCloneRows = { ...cloneRows };
      newCloneRows[id] = x;
      setCloneRows(newCloneRows);
    } else if (phase === 2) {
      let currentBoardCopy = { ...currentBoard };
      let currentRows = [...currentBoardCopy.rows];
      if (currentRows.includes(id)) {
        return;
      } else {
        currentRows.push(id);
        setBoards({
          ...boards,
          [activeBoard]: {
            ...currentBoard,
            rows: currentRows,
            valid: false,
          },
        });
      }
    }
  };

  // useEffect(() => {
  //   setCloneRows(RESET);
  // }, []);

  useEffect(() => {
    if (activeBoard === 1 && !currentBoard.valid && phase === 2) {
      let x: HTMLElement | undefined = findFirstFocusableElement(
        document.getElementById("form-interactive"),
      );
      x?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  return (
    <div
      className={`flex max-w-[500px] grow flex-col gap-1 dark:brightness-75`}
    >
      <div className="grid gap-1 [grid-template-columns:8%_auto]">
        <div className="col-start-2">
          <LabelRow />
        </div>
      </div>
      {Object.values(cloneRows).map((cloneRow, idx) => {
        if (completion[phase] || (phase === 2 && currentBoard.valid)) {
          return (
            <CloneRow
              label={cloneRow.id}
              key={idx}
              classNames={{
                wrapper:
                  phase === 2 && !completion[2]
                    ? currentBoard.rows.includes(cloneRow.id)
                      ? "hidden"
                      : "visible"
                    : currentBoard.rows.includes(cloneRow.id) && phase === 2
                    ? "hidden invisible delay-300"
                    : "fadeIn500 visible",
                button: cloneRowButtonColors[cloneRow.id],
                row: cloneRowColors[cloneRow.id],
              }}
            >
              {cloneRow.vals.map((val, idx2) => {
                return (
                  <CloneElement
                    animation={phase === 1 && forwards}
                    className={"bg-white text-black dark:bg-white/50"}
                    possibleValues={{
                      reference: refValues[idx2],
                      alternate: altValues[idx2],
                    }}
                    val={val}
                    key={idx2}
                  />
                );
              })}
            </CloneRow>
          );
        } else {
          return (
            <button
              disabled={currentBoard.rows.includes(cloneRow.id)}
              type="button"
              className={`transition-all focus-within:outline-offset-2 hover:scale-105 hover:transition-all ${
                phase === 2 && currentBoard.rows.includes(cloneRow.id)
                  ? "hidden"
                  : "fadeIn500 visible"
              } `}
              onClick={() => {
                handleClick(cloneRow.id);
              }}
              aria-label={`lab clone ${cloneRow.id}`}
              key={idx}
            >
              <CloneRow
                label={cloneRow.id}
                key={idx}
                classNames={{
                  button: cloneRowButtonColors[cloneRow.id],
                  row: cloneRowColors[cloneRow.id],
                }}
              >
                {cloneRow.vals.map((val, idx2) => {
                  return (
                    <CloneElement
                      animation={phase === 1 && forwards}
                      className={"bg-white text-black dark:bg-white/50"}
                      possibleValues={{
                        reference: refValues[idx2],
                        alternate: altValues[idx2],
                      }}
                      val={val}
                      key={idx2}
                    />
                  );
                })}
              </CloneRow>
            </button>
          );
        }
      })}
    </div>
  );
}
