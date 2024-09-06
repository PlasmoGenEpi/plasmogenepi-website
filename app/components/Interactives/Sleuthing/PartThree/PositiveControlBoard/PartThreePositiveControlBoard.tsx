import CloneRow, {
  cloneRowButtonColors,
  cloneRowColors,
} from "@/components/Interactives/Shared/CloneRow/CloneRow";
import Microhaplotype from "@/components/Interactives/Shared/Microhaplotypes/Microhaplotype";
import { microhaplotypeColorMap } from "@/components/Interactives/Shared/Microhaplotypes/MicrohaplotypeTable/MicrohaplotypeTableRow";
import PositiveControlBoard from "@/components/Interactives/Shared/PositiveControlBoard/PositiveControlBoard";
import { fixedData } from "@/data/Interactives/fixedData";
import {
  cloneRowsAtom,
  hintsEnabledAtom,
  partThreeCompletionAtom,
  partThreePositiveControlBoardsAtom,
  phaseAtom,
  selectedPositiveControlBoardAtom,
} from "@/data/Interactives/interactiveStore";
import {
  compareUnorderedArrays,
  MicroId,
  switchValues,
} from "@/helpers/helpers";
import { useAtom, useAtomValue } from "jotai";
import { RESET } from "jotai/utils";
import { useEffect } from "react";

export default function PartThreePositiveControlBoard() {
  const [selectedBoard, setSelectedBoard] = useAtom(
    selectedPositiveControlBoardAtom,
  );
  const completion = useAtomValue(partThreeCompletionAtom);
  const [boards, setBoards] = useAtom(partThreePositiveControlBoardsAtom);
  const cloneRows = useAtomValue(cloneRowsAtom);
  const currentBoard = boards[selectedBoard];
  const phase = useAtomValue(phaseAtom);
  const hintsEnabled = useAtomValue(hintsEnabledAtom);

  // useEffect(() => {
  //   setBoards(RESET);
  // }, []);

  function getHint() {
    if (!currentBoard.rows.length || !hintsEnabled || currentBoard.valid) {
      return "";
    }
    if (phase === 2) {
      if (
        (selectedBoard >= 5 && currentBoard.rows.length !== 4) ||
        ((selectedBoard === 3 || selectedBoard === 4) &&
          currentBoard.rows.length !== 2) ||
        ((selectedBoard === 1 || selectedBoard === 2) &&
          currentBoard.rows.length !== 1)
      ) {
        return "Hint: make sure you are using the right number of clones according to the MOI.";
      }
    }
    let otherBoard = boards[switchValues(selectedBoard)];
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
          [selectedBoard]: {
            ...currentBoard,
            valid: false,
            rows: newRow,
          },
        });
        // console.log(newRow);
      }
    }
  };

  useEffect(() => {
    if (!completion[phase]) {
      setSelectedBoard(1);
    }
  }, [setSelectedBoard, completion, phase]);

  return (
    <PositiveControlBoard>
      <div className="min-h-[236px] w-full">
        <div className="flex min-h-full w-full max-w-[500px] scale-90 flex-col gap-2 lg:scale-75">
          {currentBoard.rows.map((rowNum, idx1) => {
            if (currentBoard.valid || completion[phase]) {
              return (
                <CloneRow
                  key={idx1}
                  id={rowNum}
                  classNames={{
                    row: cloneRowColors[rowNum],
                    button: cloneRowButtonColors[rowNum],
                  }}
                >
                  {Array(4)
                    .fill(0)
                    .map((el, idx) => {
                      let vals = cloneRows[rowNum].vals.slice(
                        idx * 3,
                        idx * 3 + 3,
                      ) as unknown as MicroId;
                      return (
                        <Microhaplotype
                          key={idx}
                          possibleVals={[
                            {
                              reference: fixedData[1].refValues[idx * 3],
                              alternate: fixedData[1].altValues[idx * 3],
                            },
                            {
                              reference: fixedData[1].refValues[idx * 3 + 1],
                              alternate: fixedData[1].altValues[idx * 3 + 1],
                            },
                            {
                              reference: fixedData[1].refValues[idx * 3 + 2],
                              alternate: fixedData[1].altValues[idx * 3 + 2],
                            },
                          ]}
                          vals={vals}
                          className={`col-span-3 border-2 ${microhaplotypeColorMap.get(JSON.stringify(vals))}`}
                        />
                      );
                    })}
                </CloneRow>
              );
            }
            return (
              <button
                className="transition-all hover:scale-105 focus:scale-105"
                type="button"
                onClick={() => {
                  handleClick(rowNum);
                }}
                key={rowNum}
              >
                <CloneRow
                  key={idx1}
                  id={rowNum}
                  classNames={{
                    row: cloneRowColors[rowNum],
                    button: cloneRowButtonColors[rowNum],
                  }}
                  callback={handleClick}
                >
                  {Array(4)
                    .fill(0)
                    .map((el, idx) => {
                      let vals = cloneRows[rowNum].vals.slice(
                        idx * 3,
                        idx * 3 + 3,
                      ) as unknown as MicroId;
                      return (
                        <Microhaplotype
                          key={idx}
                          possibleVals={[
                            {
                              reference: fixedData[1].refValues[idx * 3],
                              alternate: fixedData[1].altValues[idx * 3],
                            },
                            {
                              reference: fixedData[1].refValues[idx * 3 + 1],
                              alternate: fixedData[1].altValues[idx * 3 + 1],
                            },
                            {
                              reference: fixedData[1].refValues[idx * 3 + 2],
                              alternate: fixedData[1].altValues[idx * 3 + 2],
                            },
                          ]}
                          vals={vals}
                          className={`col-span-3 border-2 ${microhaplotypeColorMap.get(JSON.stringify(vals))}`}
                        />
                      );
                    })}
                </CloneRow>
              </button>
            );
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
          {/* <CloneRow
          label={"1"}
          classNames={{
            button: cloneRowButtonColors[1],
            row: cloneRowColors[1],
          }}
        >
          {Array(4)
            .fill(0)
            .map((el, idx) => {
              let vals: [0 | 1, 0 | 1, 0 | 1] = [0, 0, 0];
              return (
                <Microhaplotype
                  childClassNames={{
                    shared: "bg-white bg-opacity-80",
                  }}
                  className={`col-span-3 border-2 ${microhaplotypeColorMap.get(JSON.stringify(vals))}`}
                  vals={vals}
                  key={idx}
                  possibleVals={[
                    {
                      reference: fixedData[1].refValues[idx * 3],
                      alternate: fixedData[1].altValues[idx * 3],
                    },
                    {
                      reference: fixedData[1].refValues[idx * 3 + 1],
                      alternate: fixedData[1].altValues[idx * 3 + 1],
                    },
                    {
                      reference: fixedData[1].refValues[idx * 3 + 2],
                      alternate: fixedData[1].altValues[idx * 3 + 2],
                    },
                  ]}
                />
              );
            })}
        </CloneRow> */}
        </div>
      </div>
    </PositiveControlBoard>
  );
}
