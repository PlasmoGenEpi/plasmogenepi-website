import CloneElement from "@/components/Interactives/Shared/CloneRow/CloneElement";
import CloneRow from "@/components/Interactives/Shared/CloneRow/CloneRow";
import {
  getRowConfiguration,
  microhaplotypeColorMap,
} from "@/components/Interactives/Shared/Microhaplotypes/MicrohaplotypeTable/MicrohaplotypeTableRow";
import SquareMicrohaplotype from "@/components/Interactives/Shared/Microhaplotypes/SquareMicrohaplotype";
import { fixedData } from "@/data/Interactives/fixedData";
import {
  partSixCloneRowsAtom,
  partSixCloneRowsMHPsAtom,
  partSixCompletionAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import { RESET } from "jotai/utils";
import { useEffect } from "react";
import MHPHybridClone from "../Comparators/MHPs/MHPHybridClone";

export const P6CloneRowButtonColors: { [key: number]: string } = {
  1: "to-cloneRed via-cloneRed border border-microRed",
  2: "to-cloneBlue via-cloneBlue border border-microBlue",
  3: "to-cloneGreen via-cloneGreen border border-microGreen",
};

export const P6CloneRowColors: { [key: number]: string } = {
  1: "bg-cloneRed border border-microRed",
  2: "bg-cloneBlue border border-microBlue",
  3: "bg-cloneGreen border border-microGreen",
  4: "bg-gradient-to-r from-cloneRed to-cloneBlue via-[#FFB0B0_50%,#B8E6FA_50%] border-red-blue-rounded-sm",
};

export default function P6MHPCloneRows({
  order,
  classNames,
}: {
  order?: number[];
  classNames?: {
    [key: number]: string;
  };
}) {
  const [cloneRowsMHPs, setCloneRowsMHPs] = useAtom(partSixCloneRowsMHPsAtom);
  const [completion, setCompletion] = useAtom(partSixCompletionAtom);
  const phase = useAtomValue(phaseAtom);

  return (
    <div className="flex max-w-[500px] flex-col gap-1">
      <div className="grid gap-1 [grid-template-columns:8%_auto]">
        <div className="col-start-2 grid grid-cols-12 px-1">
          {Array(12)
            .fill(0)
            .map((el, idx) => {
              return (
                <label
                  className="text-center text-xs first-letter:text-sm"
                  key={idx}
                >
                  L{idx + 1}
                </label>
              );
            })}
        </div>
      </div>
      {Object.values(cloneRowsMHPs)
        .filter((cloneRow) => {
          return cloneRow.id !== 4;
        })
        .map((cloneRow, idx) => {
          if (phase === 22 && !completion[phase]) {
            return (
              <button
                // onClick={() => {
                //   setCloneRowsMHPs({
                //     ...cloneRowsMHPs,
                //     [cloneRow.id]: {
                //       ...cloneRowsMHPs[cloneRow.id as 1 | 2 | 3],
                //       vals: Array(12)
                //         .fill(0)
                //         .map((el, idx) => {
                //           return Math.floor(Math.random() * 8);
                //         }),
                //     },
                //   });
                // }}
                onClick={() => {
                  let randomArr = Array(12)
                    .fill(0)
                    .map(() => {
                      return Math.floor(Math.random() * 8);
                    });
                  let hybrid: (number | null)[] = [];
                  if (cloneRow.id === 1) {
                    hybrid = hybrid
                      .concat(randomArr.slice(0, 6))
                      .concat(cloneRowsMHPs[4].vals.slice(6, 12));
                    console.log(hybrid);
                  } else if (cloneRow.id === 2) {
                    hybrid = hybrid
                      .concat(cloneRowsMHPs[4].vals.slice(0, 6))
                      .concat(randomArr.slice(6, 12));
                    console.log(hybrid);
                  }
                  if (hybrid.length) {
                    setCloneRowsMHPs({
                      ...cloneRowsMHPs,
                      [idx + 1]: {
                        id: idx + 1,
                        vals: randomArr,
                      },
                      4: {
                        id: 4,
                        vals: hybrid,
                      },
                    });
                  } else {
                    setCloneRowsMHPs({
                      ...cloneRowsMHPs,
                      [idx + 1]: {
                        id: idx + 1,
                        vals: randomArr,
                      },
                    });
                  }
                }}
                key={cloneRow.id}
              >
                <CloneRow
                  label={cloneRow.id}
                  classNames={{
                    button: P6CloneRowButtonColors[cloneRow.id],
                    row: P6CloneRowColors[cloneRow.id],
                  }}
                  key={cloneRow.id}
                >
                  {cloneRow.vals.map((val, idx2) => {
                    if (val === null) {
                      return (
                        <div
                          key={idx2}
                          className="aspect-square bg-white shadow-sm shadow-black"
                        ></div>
                      );
                    }
                    return (
                      <SquareMicrohaplotype
                        className="fadeIn300"
                        id={val}
                        key={idx2}
                      />
                    );
                  })}
                </CloneRow>
              </button>
            );
          }
          return (
            <CloneRow
              label={cloneRow.id}
              classNames={{
                wrapper: `transition-all
                ${
                  phase === 23
                    ? cloneRow.id === 3
                      ? " hidden"
                      : cloneRow.id === 2
                        ? ""
                        : cloneRow.id === 1
                          ? ""
                          : ""
                    : phase === 24
                      ? cloneRow.id === 3
                        ? ""
                        : cloneRow.id === 2
                          ? " hidden"
                          : cloneRow.id === 1
                            ? ""
                            : ""
                      : phase === 25
                        ? cloneRow.id === 3
                          ? ""
                          : cloneRow.id === 2
                            ? ""
                            : cloneRow.id === 1
                              ? "hidden"
                              : ""
                        : ""
                }`,
                button: P6CloneRowButtonColors[cloneRow.id],
                row: P6CloneRowColors[cloneRow.id],
              }}
              key={cloneRow.id}
            >
              {cloneRow.vals.map((val, idx2) => {
                if (val === null) {
                  return (
                    <div
                      key={idx2}
                      className="aspect-square bg-white shadow-sm shadow-black"
                    ></div>
                  );
                }
                return (
                  <SquareMicrohaplotype id={val} key={idx2} />
                  // <div
                  //   key={idx2}
                  //   className={`aspect-square border-2 shadow ${microhaplotypeColorMap.get(JSON.stringify(getRowConfiguration(val)))}`}
                  // >
                  //   <div className="h-full w-full bg-white/80"></div>
                  // </div>
                );
              })}
            </CloneRow>
          );
        })}
    </div>
  );
}
