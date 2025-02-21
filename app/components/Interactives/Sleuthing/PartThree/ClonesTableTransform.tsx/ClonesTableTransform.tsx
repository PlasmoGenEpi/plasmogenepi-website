"use client";
import CloneRow, {
  cloneRowButtonColors,
  cloneRowColors,
} from "@/app/components/Interactives/Shared/CloneRow/CloneRow";
import ClonesTableTransformElement from "./ClonesTableTransformElement";
import {
  activeRowColumnTransformAtom,
  cloneRowsAtom,
  partThreeCompletionAtom,
  partThreePositiveControlBoardsAtom,
  phase1Atom,
  selectedPositiveControlBoardAtom,
  transformMatrixAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import Microhaplotype from "@/app/components/Interactives/Shared/Microhaplotypes/Microhaplotype";
import { useEffect } from "react";
import { RESET } from "jotai/utils";
import {
  getRowConfiguration,
  microhaplotypeColorMap,
} from "@/app/components/Interactives/Shared/Microhaplotypes/MicrohaplotypeTable/MicrohaplotypeTableRow";

export default function ClonesTableTransform({
  referenceAlleles,
  alternateAlleles,
  classNames,
  microCallbackWithMatrix,
  wrapperOnlyCloneRows,
  cloneRowCallback,
}: {
  cloneRowCallback?: (rowNumber: number) => void;
  wrapperOnlyCloneRows?: boolean;
  microCallbackWithMatrix?: (rowNum: number, colNum: number) => void;
  classNames?: {
    cloneRows: string;
  };
  referenceAlleles: string[];
  alternateAlleles: string[];
}) {
  const phase = useAtomValue(phase1Atom);
  const boards = useAtomValue(partThreePositiveControlBoardsAtom);
  const selectedBoard = useAtomValue(selectedPositiveControlBoardAtom);
  const [[row, col], setActiveRowColumnTransformTuple] = useAtom(
    activeRowColumnTransformAtom,
  );
  const completion = useAtomValue(partThreeCompletionAtom);
  const transformMatrix = useAtomValue(transformMatrixAtom);
  const cloneRows = useAtomValue(cloneRowsAtom);

  // useEffect(() => {
  //   setTransformMatrix(RESET);
  // }, []);

  return (
    <div className="fadeIn500 mx-auto flex w-full max-w-[500px] flex-col gap-1 dark:brightness-75 md:mx-0 [&>*]:mx-auto [&>*]:w-full md:[&>*]:mx-0 md:[&>*]:w-auto">
      <div>
        <div className="ml-[calc(8%+8px)] grid grid-cols-4 px-1 text-center">
          {Array(4)
            .fill(0)
            .map((el, idx) => {
              return (
                <span
                  className="inline-block text-center text-xs first-letter:text-sm"
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
        .map((el, idx2) => {
          return (
            <CloneRow
              key={idx2}
              id={idx2 + 1}
              label={idx2 + 1}
              classNames={{
                button: cloneRowButtonColors[idx2 + 1],
                row: cloneRowColors[idx2 + 1],
              }}
            >
              {Array(4)
                .fill(0)
                .map((el, idx) => {
                  if (transformMatrix[(idx2 + 1) as 1 | 2 | 3 | 4 | 5][idx]) {
                    const vals = cloneRows[idx2 + 1].vals.slice(
                      idx * 3,
                      idx * 3 + 3,
                    ) as [0 | 1, 0 | 1, 0 | 1];
                    if (phase === 1) {
                      return (
                        <button
                          onClick={() => {
                            setActiveRowColumnTransformTuple([
                              (idx2 + 1) as 1 | 2 | 3 | 4 | 5,
                              idx as 0 | 1 | 2 | 3,
                            ]);
                          }}
                          className={`col-span-3 ${
                            idx === col ? "opacity-100" : "opacity-50"
                          }`}
                          key={idx}
                        >
                          <Microhaplotype
                            childClassNames={{
                              shared: "bg-white bg-opacity-80 text-black",
                            }}
                            className={`col-span-3 border-2 ${microhaplotypeColorMap.get(
                              JSON.stringify(vals),
                            )}`}
                            vals={vals}
                            possibleVals={[
                              {
                                reference: referenceAlleles[idx * 3],
                                alternate: alternateAlleles[idx * 3],
                              },
                              {
                                reference: referenceAlleles[idx * 3 + 1],
                                alternate: alternateAlleles[idx * 3 + 1],
                              },
                              {
                                reference: referenceAlleles[idx * 3 + 2],
                                alternate: alternateAlleles[idx * 3 + 2],
                              },
                            ]}
                          />
                        </button>
                      );
                    }
                    return (
                      <Microhaplotype
                        childClassNames={{
                          shared: "bg-white bg-opacity-80 text-black",
                        }}
                        className={`col-span-3 border-2 ${microhaplotypeColorMap.get(
                          JSON.stringify(vals),
                        )}`}
                        vals={vals}
                        key={idx}
                        possibleVals={[
                          {
                            reference: referenceAlleles[idx * 3],
                            alternate: alternateAlleles[idx * 3],
                          },
                          {
                            reference: referenceAlleles[idx * 3 + 1],
                            alternate: alternateAlleles[idx * 3 + 1],
                          },
                          {
                            reference: referenceAlleles[idx * 3 + 2],
                            alternate: alternateAlleles[idx * 3 + 2],
                          },
                        ]}
                      />
                    );
                  } else {
                    return (
                      // <button key={idx}>
                      <ClonesTableTransformElement
                        callback={() => {
                          setActiveRowColumnTransformTuple([
                            (idx2 + 1) as 1 | 2 | 3 | 4 | 5,
                            idx as 0 | 1 | 2 | 3,
                          ]);
                        }}
                        active={row === idx2 + 1 && col === idx}
                        key={idx}
                        col={idx}
                        row={idx2 + 1}
                      />
                      // </button>
                    );
                  }
                })}
            </CloneRow>
          );
        })}
      {phase === 1 && (
        <div className=" mt-4">
          <div className=" ml-[calc(8%+4px)] flex h-8 basis-[448px]">
            <svg
              style={{
                marginLeft: `calc(${col * 25}% + 12.5% - 10px)`,
              }}
              className="fill-black transition-all dark:fill-current"
              width="16pt"
              height="16pt"
              version="1.1"
              viewBox="0 0 1200 1200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m600 0-525 525h300v675h450v-675h300z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
