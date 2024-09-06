import { fixedData } from "@/data/Interactives/fixedData";
import Microhaplotype from "../Microhaplotype";
import MicrohaplotypeGenotypeColumn from "./MicrohaplotypeGenotypeColumn";
import { microhaplotypeColorMap } from "../MicrohaplotypeTable/MicrohaplotypeTableRow";
import { MicroId, getIndexArrayOfPrimitives } from "@/helpers/helpers";
import MicrohaplotypeSkeleton from "../MicrohaplotypeSkeleton";
import {
  MHPGenotypeHintsAtom,
  hintsEnabledAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtomValue } from "jotai";

export default function MicrohaplotypeGenotypeTable({
  microIdsMatrix,
  className,
  classNames,
  possibleVals,
  activeColumn,
  setActiveColumn,
  microhaplotypeCallback,
  disabled,
  ariaLabel,
  noLocusLabel,
  skeletonOnly,
}: {
  skeletonOnly?: boolean;
  className?: string;
  noLocusLabel?: boolean;
  ariaLabel?: string;
  disabled?: boolean;
  microhaplotypeCallback?: (colNum: number, targetMicroId: MicroId) => void;
  setActiveColumn?: (colNum: 0 | 1 | 2 | 3) => void;
  activeColumn?: 0 | 1 | 2 | 3;
  possibleVals: {
    reference: string[];
    alternate: string[];
  };
  microIdsMatrix: MicroId[][];
  classNames?: {
    microhaplotypes: string;
  };
}) {
  const hintsEnabled = useAtomValue(hintsEnabledAtom);
  const MHPGenotypeHints = useAtomValue(MHPGenotypeHintsAtom);

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

  console.log(MHPGenotypeHints);

  return (
    <div className={`flex flex-col ${className ? className : ""}`}>
      {!noLocusLabel && (
        <div className="flex justify-center gap-0.5">
          {Array(4)
            .fill(0)
            .map((el, idx) => {
              return (
                <div className={`basis-28 text-center`} key={idx}>
                  <span className="inline-block text-center text-xs first-letter:text-sm">
                    L{idx + 1}
                  </span>
                </div>
              );
            })}
        </div>
      )}
      <div className=" flex justify-center gap-0.5">
        {microIdsMatrix.map((microIdArr, colNum) => {
          return (
            <MicrohaplotypeGenotypeColumn
              setActiveColumn={setActiveColumn}
              colNum={colNum as 0 | 1 | 2 | 3}
              key={colNum}
              active={
                activeColumn !== undefined ? activeColumn === colNum : null
              }
            >
              {microIdArr.map((microId, idx2) => {
                if (microhaplotypeCallback) {
                  return (
                    <button
                      className={
                        hintsEnabled &&
                        containsHint(microId, colNum as 0 | 1 | 2 | 3, false)
                          ? " outline outline-[3px] outline-offset-4 outline-orange-400"
                          : ""
                      }
                      key={idx2}
                      aria-label={
                        ariaLabel +
                        (hintsEnabled &&
                        containsHint(microId, colNum as 0 | 1 | 2 | 3, false)
                          ? "incorrect"
                          : "")
                      }
                      disabled={disabled}
                      onClick={(e) => {
                        if (microhaplotypeCallback && colNum === activeColumn) {
                          microhaplotypeCallback(colNum, microId);
                        }
                      }}
                    >
                      {skeletonOnly ? (
                        <MicrohaplotypeSkeleton microId={microId} />
                      ) : (
                        <Microhaplotype
                          childClassNames={{
                            shared: `bg-white bg-opacity-80 ${classNames?.microhaplotypes}`,
                          }}
                          className={`border-2 ${microhaplotypeColorMap.get(JSON.stringify(microId))}`}
                          vals={microId}
                          possibleVals={microId.map((char, idx3) => {
                            return {
                              reference:
                                possibleVals.reference[colNum * 3 + idx3],
                              alternate:
                                possibleVals.alternate[colNum * 3 + idx3],
                            };
                          })}
                        />
                      )}
                    </button>
                  );
                } else {
                  return skeletonOnly ? (
                    <MicrohaplotypeSkeleton microId={microId} />
                  ) : (
                    <Microhaplotype
                      childClassNames={{
                        shared: `bg-white bg-opacity-80 ${classNames?.microhaplotypes}`,
                      }}
                      className={`border-2 ${microhaplotypeColorMap.get(JSON.stringify(microId))}`}
                      vals={microId}
                      possibleVals={microId.map((char, idx3) => {
                        return {
                          reference: possibleVals.reference[colNum * 3 + idx3],
                          alternate: possibleVals.alternate[colNum * 3 + idx3],
                        };
                      })}
                    />
                  );
                }
              })}
            </MicrohaplotypeGenotypeColumn>
          );
        })}
      </div>
      {activeColumn !== undefined && (
        <div className="mt-4 flex justify-center">
          <div className="h-8 basis-[454px]">
            <svg
              style={{
                marginLeft: `calc(${activeColumn * 25}% + 12.5% - 8px)`,
              }}
              className="fill-primaryBlue transition-all"
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
