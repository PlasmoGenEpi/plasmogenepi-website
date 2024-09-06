import Microhaplotype from "@/components/Interactives/Shared/Microhaplotypes/Microhaplotype";
import MicrohaplotypeGenotypeColumn from "@/components/Interactives/Shared/Microhaplotypes/MicrohaplotypeGenotypeTable/MicrohaplotypeGenotypeColumn";
import MicrohaplotypeGenotypeTable from "@/components/Interactives/Shared/Microhaplotypes/MicrohaplotypeGenotypeTable/MicrohaplotypeGenotypeTable";
import MicrohaplotypeSkeleton from "@/components/Interactives/Shared/Microhaplotypes/MicrohaplotypeSkeleton";
import MicrohaplotypeTable from "@/components/Interactives/Shared/Microhaplotypes/MicrohaplotypeTable/MicrohaplotypeTable";
import MicrohaplotypeTableRow, {
  microhaplotypeColorMap,
} from "@/components/Interactives/Shared/Microhaplotypes/MicrohaplotypeTable/MicrohaplotypeTableRow";
import { fixedData } from "@/data/Interactives/fixedData";
import {
  MHPGenotypeHintsAtom,
  activeRowColumnTransformAtom,
  hintsEnabledAtom,
  partThreeCompletionAtom,
  partThreePositiveControlBoardsAtom,
  phaseAtom,
  selectedPositiveControlBoardAtom,
} from "@/data/Interactives/interactiveStore";
import {
  MicroId,
  compareMatrices,
  compareOrderedArrays,
  getIndexArrayOfPrimitives,
} from "@/helpers/helpers";
import { useAtom, useAtomValue } from "jotai";
import { RESET } from "jotai/utils";
import { useEffect } from "react";

let mhpBlock: MicroId[] = [
  [0, 0, 0],
  [0, 0, 1],
  [0, 1, 1],
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 0],
  [1, 0, 1],
  [0, 1, 0],
] as unknown as MicroId[];

export default function PartThreeMicrohaplotypeGenotyping() {
  const [selectedBoard, setSelectedBoard] = useAtom(
    selectedPositiveControlBoardAtom,
  );
  const phase = useAtomValue(phaseAtom);
  const completion = useAtomValue(partThreeCompletionAtom);
  const [boards, setBoards] = useAtom(partThreePositiveControlBoardsAtom);
  const currentBoard = boards[selectedBoard];
  const [[row, col], setActiveTuple] = useAtom(activeRowColumnTransformAtom);
  const hintsEnabled = useAtomValue(hintsEnabledAtom);
  const MHPGenotypeHints = useAtomValue(MHPGenotypeHintsAtom);

  useEffect(() => {
    setActiveTuple([1, 0]);
  }, [selectedBoard, setActiveTuple, phase]);

  const containsHint = (
    microId: MicroId,
    colNum: 0 | 1 | 2 | 3,
    missing: boolean,
  ) => {
    if (missing === false) {
      for (let i = 0; i < MHPGenotypeHints[colNum].extra.length; i++) {
        if (
          JSON.stringify(MHPGenotypeHints[colNum].extra[i]) ===
          JSON.stringify(microId)
        ) {
          return true;
        }
      }
    } else {
      for (let i = 0; i < MHPGenotypeHints[colNum].missing.length; i++) {
        if (
          JSON.stringify(MHPGenotypeHints[colNum].missing[i]) ===
          JSON.stringify(microId)
        ) {
          return true;
        }
      }
      return false;
    }
  };

  return (
    <div className="fadeIn500">
      <div className="grid origin-top-left grid-cols-4 gap-2 lg:scale-90">
        {Array(4)
          .fill(0)
          .map((el, colNum) => {
            return (
              <div key={colNum} className="flex flex-col gap-12">
                <div
                  key={colNum}
                  className="grid grid-cols-1 gap-x-1 gap-y-0.5"
                >
                  <h5 className="text-center text-xs first-letter:text-sm">
                    L{colNum + 1}
                  </h5>
                  {mhpBlock.map((microId, idx) => {
                    return (
                      <button
                        className={`${getIndexArrayOfPrimitives(currentBoard.inputs[colNum], microId) !== false ? "opacity-20" : ""} transition-all`}
                        disabled={completion[phase] || currentBoard.inputValid}
                        aria-label={`add microhaplotype ${microId.join("")}`}
                        onClick={(e) => {
                          if (
                            getIndexArrayOfPrimitives(
                              currentBoard.inputs[colNum],
                              microId,
                            ) !== false
                          ) {
                            return;
                          } else {
                            let newInputRow = [...currentBoard.inputs[colNum]];
                            newInputRow.push(microId);
                            let newInputs = [...currentBoard.inputs];
                            newInputs[colNum] = newInputRow;
                            setBoards({
                              ...boards,
                              [selectedBoard]: {
                                ...currentBoard,
                                inputs: newInputs,
                                // inputs:
                                // [col]
                              },
                            });
                          }
                        }}
                        // disabled={completion[phase]}

                        key={idx}
                      >
                        <Microhaplotype
                          childClassNames={{
                            shared: "bg-white bg-opacity-80",
                          }}
                          className={`my-0.5 grow border-2 ${microhaplotypeColorMap.get(JSON.stringify(microId))} ${hintsEnabled && containsHint(microId, colNum as 0 | 1 | 2 | 3, true) ? " outline outline-[4px] -outline-offset-4  outline-black" : ""}`}
                          vals={microId}
                          possibleVals={Array(3)
                            .fill(0)
                            .map((el2, idx2) => {
                              return {
                                reference:
                                  fixedData[1].refValues[colNum * 3 + idx2],
                                alternate:
                                  fixedData[1].altValues[colNum * 3 + idx2],
                              };
                            })}
                        />
                      </button>
                    );
                  })}
                </div>
                <div className=" min-h-40   pb-4">
                  <h5 className="w-full text-center text-xs first-letter:text-sm">
                    L{colNum + 1}
                  </h5>{" "}
                  <MicrohaplotypeGenotypeColumn
                    active={null}
                    // setActiveColumn={setActiveColumn}
                    colNum={colNum as 0 | 1 | 2 | 3}
                    key={colNum}
                    // active={
                    //   activeColumn !== undefined ? activeColumn === colNum : null
                    // }
                  >
                    {currentBoard.inputs[colNum].map((microId, idx2) => {
                      if (!currentBoard.inputValid) {
                        return (
                          <button
                            className={
                              hintsEnabled &&
                              containsHint(
                                microId,
                                colNum as 0 | 1 | 2 | 3,
                                false,
                              )
                                ? " outline outline-[4px] -outline-offset-4  outline-black"
                                : ""
                            }
                            key={idx2}
                            aria-label={
                              hintsEnabled &&
                              containsHint(
                                microId,
                                colNum as 0 | 1 | 2 | 3,
                                false,
                              )
                                ? "incorrect"
                                : ""
                            }
                            disabled={currentBoard.inputValid}
                            onClick={(e) => {
                              // if (microhaplotypeCallback && colNum === activeColumn) {
                              //   microhaplotypeCallback(colNum, microId);
                              // }
                              let x = getIndexArrayOfPrimitives(
                                currentBoard.inputs[colNum],
                                microId,
                              );
                              if (x === false) {
                                return;
                              }
                              let newInputs = [...currentBoard.inputs];
                              let newInputRow = [...newInputs[colNum]];
                              newInputRow = newInputRow
                                .slice(0, x)
                                .concat(
                                  newInputRow.slice(x + 1, newInputRow.length),
                                );
                              newInputs[colNum] = newInputRow;
                              let z = {
                                ...boards,
                                [selectedBoard]: {
                                  ...currentBoard,
                                  inputs: newInputs,
                                },
                              };
                              setBoards(z);
                            }}
                          >
                            <Microhaplotype
                              key={idx2}
                              childClassNames={{
                                shared: `bg-white bg-opacity-80`,
                              }}
                              className={`border-2 ${microhaplotypeColorMap.get(JSON.stringify(microId))}`}
                              vals={microId}
                              possibleVals={microId.map((char, idx3) => {
                                return {
                                  reference:
                                    fixedData[1].refValues[colNum * 3 + idx3],
                                  alternate:
                                    fixedData[1].altValues[colNum * 3 + idx3],
                                };
                              })}
                            />
                          </button>
                        );
                      }
                      return (
                        <Microhaplotype
                          key={idx2}
                          childClassNames={{
                            shared: `bg-white bg-opacity-80`,
                          }}
                          className={`border-2 ${microhaplotypeColorMap.get(JSON.stringify(microId))}`}
                          vals={microId}
                          possibleVals={microId.map((char, idx3) => {
                            return {
                              reference:
                                fixedData[1].refValues[colNum * 3 + idx3],
                              alternate:
                                fixedData[1].altValues[colNum * 3 + idx3],
                            };
                          })}
                        />
                      );
                    })}
                  </MicrohaplotypeGenotypeColumn>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );

  return (
    <div className="fadeIn500">
      <div className="mx-auto w-full max-w-[500px] ">
        <div className="mb-2 text-center text-sm">
          <label className="">Microhaplotype Locus {col + 1}</label>
        </div>
        {/* <div className="flex">
          {Array(4)
            .fill(0)
            .map((el, colNum) => {
              return (
                <div
                  key={colNum}
                  className="mb-12 grid w-[25%] scale-75 grid-cols-1 gap-x-1 gap-y-0.5"
                >
                  {[
                    [0, 0, 0],
                    [0, 0, 1],
                    [0, 1, 1],
                    [1, 1, 1],
                    [1, 1, 0],
                    [1, 0, 0],
                    [1, 0, 1],
                    [0, 1, 0],
                  ].map((microId, idx) => {
                    return (
                      <button
                        className={`${getIndexArrayOfPrimitives(currentBoard.inputs[colNum], microId) !== false ? "fadeOut300 invisible delay-500" : ""} transition-all`}
                        disabled={completion[phase] || currentBoard.inputValid}
                        aria-label={`add microhaplotype ${microId.join("")}`}
                        onClick={(e) => {
                          if (
                            getIndexArrayOfPrimitives(
                              currentBoard.inputs[colNum],
                              microId,
                            ) !== false
                          ) {
                            return;
                          } else {
                            let newInputRow = [...currentBoard.inputs[colNum]];
                            newInputRow.push(microId as [0 | 1, 0 | 1, 0 | 1]);
                            let newInputs = [...currentBoard.inputs];
                            newInputs[colNum] = newInputRow;
                            setBoards({
                              ...boards,
                              [selectedBoard]: {
                                ...currentBoard,
                                inputs: newInputs,
                                // inputs:
                                // [col]
                              },
                            });
                          }
                        }}
                        // disabled={completion[phase]}

                        key={idx}
                      >
                        <Microhaplotype
                          childClassNames={{
                            shared: "bg-white bg-opacity-80",
                          }}
                          className={`my-0.5 grow border-2 ${microhaplotypeColorMap.get(JSON.stringify(microId))} ${hintsEnabled && containsHint(microId as [0 | 1, 0 | 1, 0 | 1], true) ? " outline o4tline-[4px] -outline-offset-3  outline-black" : ""}`}
                          vals={microId as (0 | 1)[]}
                          possibleVals={Array(3)
                            .fill(0)
                            .map((el2, idx2) => {
                              return {
                                reference:
                                  fixedData[1].refValues[colNum * 3 + idx2],
                                alternate:
                                  fixedData[1].altValues[colNum * 3 + idx2],
                              };
                            })}
                        />
                      </button>
                    );
                  })}
                </div>
              );
            })}
        </div> */}
        <div className="mb-12 grid grid-cols-2 gap-x-1 gap-y-0.5 md:grid-cols-4">
          {mhpBlock.map((microId, idx) => {
            return (
              <button
                className={`${getIndexArrayOfPrimitives(currentBoard.inputs[col], microId) !== false ? "fadeOut300 invisible delay-500" : ""} transition-all`}
                disabled={completion[phase] || currentBoard.inputValid}
                aria-label={`add microhaplotype ${microId.join("")}`}
                onClick={(e) => {
                  if (
                    getIndexArrayOfPrimitives(
                      currentBoard.inputs[col],
                      microId,
                    ) !== false
                  ) {
                    return;
                  } else {
                    let newInputRow = [...currentBoard.inputs[col]];
                    newInputRow.push(microId);
                    let newInputs = [...currentBoard.inputs];
                    newInputs[col] = newInputRow;
                    setBoards({
                      ...boards,
                      [selectedBoard]: {
                        ...currentBoard,
                        inputs: newInputs,
                        // inputs:
                        // [col]
                      },
                    });
                  }
                }}
                // disabled={completion[phase]}

                key={idx}
              >
                <Microhaplotype
                  childClassNames={{
                    shared: "bg-white bg-opacity-80",
                  }}
                  className={`my-0.5 grow border-2 ${microhaplotypeColorMap.get(JSON.stringify(microId))} ${hintsEnabled && containsHint(microId, col, true) ? " outline outline-[4px] -outline-offset-4  outline-black" : ""}`}
                  vals={microId}
                  possibleVals={Array(3)
                    .fill(0)
                    .map((el2, idx2) => {
                      return {
                        reference: fixedData[1].refValues[col * 3 + idx2],
                        alternate: fixedData[1].altValues[col * 3 + idx2],
                      };
                    })}
                />
              </button>
            );
          })}
        </div>
      </div>
      <MicrohaplotypeGenotypeTable
        disabled={completion[phase] || currentBoard.inputValid}
        aria-label={`add microhaplotype`}
        microhaplotypeCallback={(colNum: number, targetMicroId: MicroId) => {
          let x = getIndexArrayOfPrimitives(
            currentBoard.inputs[colNum],
            targetMicroId,
          );
          if (x === false) {
            return;
          }
          let newInputs = [...currentBoard.inputs];
          let newInputRow = [...newInputs[colNum]];
          newInputRow = newInputRow
            .slice(0, x)
            .concat(newInputRow.slice(x + 1, newInputRow.length));
          newInputs[colNum] = newInputRow;
          let z = {
            ...boards,
            [selectedBoard]: {
              ...currentBoard,
              inputs: newInputs,
            },
          };
          setBoards(z);
        }}
        setActiveColumn={(colNum: 0 | 1 | 2 | 3) => {
          setActiveTuple([row, colNum]);
        }}
        activeColumn={col}
        possibleVals={{
          reference: fixedData[1].refValues,
          alternate: fixedData[1].altValues,
        }}
        microIdsMatrix={currentBoard.inputs}
      ></MicrohaplotypeGenotypeTable>
    </div>
  );
}
