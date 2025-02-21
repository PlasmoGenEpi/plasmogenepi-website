import CloneRow, {
  cloneRowButtonColors,
  cloneRowColors,
} from "@/app/components/Interactives/Shared/CloneRow/CloneRow";
import Microhaplotype from "@/app/components/Interactives/Shared/Microhaplotypes/Microhaplotype";
import { microhaplotypeColorMap } from "@/app/components/Interactives/Shared/Microhaplotypes/MicrohaplotypeTable/MicrohaplotypeTableRow";
import { fixedData } from "@/data/Interactives/fixedData";
import {
  cloneRowsAtom,
  partThreeCompletionAtom,
  partThreePositiveControlBoardsAtom,
  selectedPositiveControlBoardAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";

export default function P3CloneRows() {
  const cloneRows = useAtomValue(cloneRowsAtom);
  const [boards, setBoards] = useAtom(partThreePositiveControlBoardsAtom);
  const selectedBoard = useAtomValue(selectedPositiveControlBoardAtom);
  const currentBoard = boards[selectedBoard];
  const completion = useAtomValue(partThreeCompletionAtom);
  const referenceAlleles = fixedData[1].refValues;
  const alternateAlleles = fixedData[1].altValues;

  return (
    <div
      style={{
        maxWidth: "500px",
      }}
      className="fadeIn500 mx-auto flex w-full flex-col gap-1 text-black dark:brightness-75 md:mx-0 [&>*]:mx-auto [&>*]:w-full md:[&>*]:mx-0 md:[&>*]:w-auto"
    >
      <div className="grid gap-1 [grid-template-columns:8%_auto]">
        <div className="col-start-2 grid grid-cols-4 text-center">
          {Array(4)
            .fill(0)
            .map((el, idx) => {
              return (
                <span
                  className="inline-block text-center text-xs first-letter:text-sm dark:text-white"
                  key={idx + 1}
                >
                  M{idx + 1}
                </span>
              );
            })}
        </div>
      </div>
      {Array(5)
        .fill(0)
        .map((el, idx) => {
          let rowNum = idx + 1;
          if (completion[2] || currentBoard.valid) {
            return (
              <CloneRow
                key={rowNum}
                classNames={{
                  wrapper: !completion[2]
                    ? currentBoard.rows.includes(rowNum)
                      ? "hidden"
                      : "visible"
                    : currentBoard.rows.includes(rowNum)
                    ? "hidden"
                    : "fadeIn500 visible",
                  button: cloneRowButtonColors[rowNum],
                  row: cloneRowColors[rowNum],
                }}
                label={rowNum}
              >
                {Array(4)
                  .fill(0)
                  .map((el, colNum) => {
                    let vals = cloneRows[rowNum].vals.slice(
                      colNum * 3,
                      colNum * 3 + 3,
                    ) as [0 | 1, 0 | 1, 0 | 1];
                    return (
                      <Microhaplotype
                        key={colNum}
                        possibleVals={[
                          {
                            reference: fixedData[1].refValues[colNum * 3],
                            alternate: fixedData[1].altValues[colNum * 3],
                          },
                          {
                            reference: fixedData[1].refValues[colNum * 3 + 1],
                            alternate: fixedData[1].altValues[colNum * 3 + 1],
                          },
                          {
                            reference: fixedData[1].refValues[colNum * 3 + 2],
                            alternate: fixedData[1].altValues[colNum * 3 + 2],
                          },
                        ]}
                        vals={vals}
                        childClassNames={{
                          shared: "bg-white bg-opacity-80",
                        }}
                        className={`col-span-3 border-2 ${microhaplotypeColorMap.get(
                          JSON.stringify(vals),
                        )}`}
                      />
                    );
                  })}
              </CloneRow>
            );
          }
          return (
            <button
              type="button"
              onClick={() => {
                if (!currentBoard.rows.includes(rowNum)) {
                  let newRow = [...currentBoard.rows];
                  newRow.push(rowNum);
                  setBoards({
                    ...boards,
                    [selectedBoard]: {
                      ...currentBoard,
                      rows: newRow,
                    },
                  });
                }
              }}
              className={`transition-all hover:scale-105 hover:transition-all
              ${
                currentBoard.rows.includes(rowNum)
                  ? "hidden"
                  : "fadeIn500 visible"
              }
            `}
              key={rowNum}
            >
              <CloneRow
                classNames={{
                  button: cloneRowButtonColors[rowNum],
                  row: cloneRowColors[rowNum],
                }}
                label={rowNum}
              >
                {Array(4)
                  .fill(0)
                  .map((el, colNum) => {
                    let vals = cloneRows[rowNum].vals.slice(
                      colNum * 3,
                      colNum * 3 + 3,
                    ) as [0 | 1, 0 | 1, 0 | 1];
                    return (
                      <Microhaplotype
                        key={colNum}
                        possibleVals={[
                          {
                            reference: fixedData[1].refValues[colNum * 3],
                            alternate: fixedData[1].altValues[colNum * 3],
                          },
                          {
                            reference: fixedData[1].refValues[colNum * 3 + 1],
                            alternate: fixedData[1].altValues[colNum * 3 + 1],
                          },
                          {
                            reference: fixedData[1].refValues[colNum * 3 + 2],
                            alternate: fixedData[1].altValues[colNum * 3 + 2],
                          },
                        ]}
                        vals={vals}
                        childClassNames={{
                          shared: "bg-white bg-opacity-80",
                        }}
                        className={`col-span-3 border-2 ${microhaplotypeColorMap.get(
                          JSON.stringify(vals),
                        )}`}
                      />
                    );
                  })}
              </CloneRow>
            </button>
          );
        })}
    </div>
  );
}
