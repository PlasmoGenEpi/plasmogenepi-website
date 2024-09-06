import CloneElement from "@/components/Interactives/Shared/CloneRow/CloneElement";
import CloneRow, {
  cloneRowButtonColors,
  cloneRowColors,
} from "@/components/Interactives/Shared/CloneRow/CloneRow";
import PositiveControlBoard from "@/components/Interactives/Shared/PositiveControlBoard/PositiveControlBoard";
import { fixedData } from "@/data/Interactives/fixedData";
import {
  cloneRowsAtom,
  hintsEnabledAtom,
  partOneCompletionAtom,
  phaseAtom,
  positiveControlBoardsAtom,
  selectedPositiveControlBoardAtom,
} from "@/data/Interactives/interactiveStore";
import { compareUnorderedArrays, switchValues } from "@/helpers/helpers";
import { useAtom, useAtomValue } from "jotai";

const refValues = fixedData[1].refValues;
const altValues = fixedData[1].altValues;

export default function P1PositiveControlBoard() {
  const [boards, setBoards] = useAtom(positiveControlBoardsAtom);
  const activeBoard = useAtomValue(selectedPositiveControlBoardAtom);
  const currentBoard = boards[activeBoard];
  const completion = useAtomValue(partOneCompletionAtom);
  const cloneRows = useAtomValue(cloneRowsAtom);
  const phase = useAtomValue(phaseAtom);
  const hintsEnabled = useAtomValue(hintsEnabledAtom);

  function getHint() {
    if (!currentBoard.rows.length || !hintsEnabled || currentBoard.valid) {
      return "";
    }
    if (phase === 2) {
      if (
        (activeBoard >= 5 && currentBoard.rows.length !== 4) ||
        ((activeBoard === 3 || activeBoard === 4) &&
          currentBoard.rows.length !== 2) ||
        ((activeBoard === 1 || activeBoard === 2) &&
          currentBoard.rows.length !== 1)
      ) {
        return "Hint: make sure you are using the right number of clones according to the MOI.";
      }
    }
    let otherBoard = boards[switchValues(activeBoard)];
    if (
      currentBoard.rows.length &&
      compareUnorderedArrays(currentBoard.rows, otherBoard.rows)
    ) {
      return "Hint: positive controls must be unique.";
    }
  }

  const handleClick = function (id: number) {
    if (phase === 2) {
      let targetIndex = currentBoard.rows.indexOf(id);
      if (targetIndex !== null) {
        let newRow: number[] = [];
        newRow = newRow.concat(
          currentBoard.rows
            .slice(0, targetIndex)
            .concat(
              currentBoard.rows.slice(
                targetIndex + 1,
                currentBoard.rows.length,
              ),
            ),
        );
        setBoards({
          ...boards,
          [activeBoard]: {
            ...currentBoard,
            valid: false,
            rows: newRow,
          },
        });
        // console.log(newRow);
      }
    }
  };
  return (
    <PositiveControlBoard>
      <div className="min-h-full w-full">
        <div className="flex min-h-full w-full flex-col gap-2 lg:scale-75">
          {currentBoard.rows.map((rowId, idx) => {
            if (completion[phase] || currentBoard.valid) {
              return (
                <CloneRow
                  key={idx}
                  classNames={{
                    button: cloneRowButtonColors[rowId],
                    row: cloneRowColors[rowId],
                  }}
                  id={rowId}
                >
                  {cloneRows[rowId].vals.map((val, idx) => {
                    return (
                      <CloneElement
                        animation={false}
                        className={"bg-white"}
                        possibleValues={{
                          reference: refValues[idx],
                          alternate: altValues[idx],
                        }}
                        val={val}
                        key={idx}
                      />
                    );
                  })}
                </CloneRow>
              );
            } else {
              return (
                <button
                  className="transition-all focus-within:outline-offset-2 hover:scale-105 focus:scale-105"
                  type="button"
                  onClick={() => {
                    handleClick(rowId);
                  }}
                  key={rowId}
                >
                  <CloneRow
                    key={rowId}
                    classNames={{
                      button: cloneRowButtonColors[rowId],
                      row: cloneRowColors[rowId],
                    }}
                    id={rowId}
                  >
                    {cloneRows[rowId].vals.map((val, idx2) => {
                      return (
                        <CloneElement
                          animation={false}
                          className={"bg-white"}
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
          {getHint() && (
            <div
              style={{
                animationDelay: "2000ms",
              }}
              key={getHint()}
              data-tip={getHint()}
              className="fadeIn500 tooltip tooltip-bottom tooltip-open absolute top-[85%] ml-4 w-1/2 border-black  [--tooltip-color:#ffffff] [--tooltip-font-size:12px] [--tooltip-tail:1rem] [--tooltip-text-color:black] before:max-w-full before:px-2 before:pb-2 before:pt-4 before:text-base before:ring-1   before:ring-black after:top-[-.65rem] after:z-10 after:translate-x-full after:ring-white md:top-full md:scale-125 "
            ></div>
          )}
        </div>
      </div>
    </PositiveControlBoard>
  );
}
