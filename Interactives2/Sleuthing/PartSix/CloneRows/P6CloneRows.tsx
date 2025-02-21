import CloneElement from "@/app/components/Interactives/Shared/CloneRow/CloneElement";
import CloneRow from "@/app/components/Interactives/Shared/CloneRow/CloneRow";
import { fixedData } from "@/data/Interactives/fixedData";
import {
  partSixCloneRowsAtom,
  partSixCompletionAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import { P6CloneRowButtonColors, P6CloneRowColors } from "./P6MHPCloneRows";
import LabelRow from "../../PartOne/CloneRowTable/LabelRow";

export default function P6CloneRows({
  forwards,
  label = true,
}: {
  forwards?: boolean;
  label?: boolean;
}) {
  const completion = useAtomValue(partSixCompletionAtom);
  const phase = useAtomValue(phaseAtom);
  const [cloneRows, setCloneRows] = useAtom(partSixCloneRowsAtom);

  return (
    <div className="flex max-w-[500px] flex-col gap-1">
      {label && (
        <div className="grid w-full [grid-template-columns:8%_auto]">
          <div></div>
          <LabelRow />
        </div>
      )}
      {Object.values(cloneRows)
        .filter((cloneRow) => {
          return cloneRow.id !== 4;
        })
        .map((cloneRow, idx) => {
          if (!completion[1] && phase === 1) {
            return (
              <button
                className={`transition-all hover:scale-105 hover:transition-all`}
                aria-label={`lab clone ${cloneRow.id}`}
                onClick={() => {
                  console.log(cloneRows);
                  let randomArr = Array(12)
                    .fill(0)
                    .map(() => {
                      return Math.random() > 0.5 ? 1 : 0;
                    });
                  let hybrid: (0 | 1 | null)[] = [];
                  if (cloneRow.id === 1) {
                    hybrid = hybrid
                      .concat(randomArr.slice(0, 6))
                      .concat(cloneRows[4].vals.slice(6, 12));
                    console.log(hybrid);
                  } else if (cloneRow.id === 2) {
                    hybrid = hybrid
                      .concat(cloneRows[4].vals.slice(0, 6))
                      .concat(randomArr.slice(6, 12));
                    console.log(hybrid);
                  }
                  if (hybrid.length) {
                    setCloneRows({
                      ...cloneRows,
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
                    setCloneRows({
                      ...cloneRows,
                      [idx + 1]: {
                        id: idx + 1,
                        vals: randomArr,
                      },
                    });
                  }
                }}
                key={idx}
              >
                <CloneRow
                  label={idx + 1}
                  classNames={{
                    button: P6CloneRowButtonColors[idx + 1],
                    row: P6CloneRowColors[idx + 1],
                  }}
                >
                  {Array(12)
                    .fill(0)
                    .map((el, idx2) => {
                      return (
                        <CloneElement
                          animation={phase === 1 && forwards}
                          className="bg-white"
                          val={cloneRow.vals[idx2]}
                          key={idx2}
                          possibleValues={{
                            alternate: fixedData[6].altValues[idx2],
                            reference: fixedData[6].refValues[idx2],
                          }}
                        />
                      );
                    })}
                </CloneRow>
              </button>
            );
          }
          return (
            <CloneRow
              key={idx}
              label={idx + 1}
              classNames={{
                wrapper: `transition-all  ${
                  phase === 3
                    ? cloneRow.id === 3
                      ? "hidden"
                      : cloneRow.id === 2
                      ? ""
                      : cloneRow.id === 1
                      ? ""
                      : ""
                    : phase === 4
                    ? cloneRow.id === 3
                      ? ""
                      : cloneRow.id === 2
                      ? "- hidden"
                      : cloneRow.id === 1
                      ? ""
                      : ""
                    : phase === 5
                    ? cloneRow.id === 3
                      ? ""
                      : cloneRow.id === 2
                      ? ""
                      : cloneRow.id === 1
                      ? "hidden"
                      : ""
                    : ""
                }
                `,
                // ${
                //   phase === 3
                //     ? cloneRow.id === 3
                //       ? "-translate-y-[calc(200%+8px)] fadeOut500"
                //       : cloneRow.id === 2
                //         ? "translate-y-[calc(100%+4px)]"
                //         : cloneRow.id === 1
                //           ? "translate-y-[calc(100%+4px)]"
                //           : ""
                //     : phase === 4
                //       ? cloneRow.id === 3
                //         ? ""
                //         : cloneRow.id === 2
                //           ? "-translate-y-[calc(100%+4px)] fadeOut500"
                //           : cloneRow.id === 1
                //             ? "translate-y-[calc(100%+4px)]"
                //             : ""
                //       : phase === 5
                //         ? cloneRow.id === 3
                //           ? ""
                //           : cloneRow.id === 2
                //             ? ""
                //             : cloneRow.id === 1
                //               ? "fadeOut500"
                //               : ""
                //         : ""
                // }
                button: P6CloneRowButtonColors[cloneRow.id],
                row: P6CloneRowColors[cloneRow.id],
              }}
            >
              {Array(12)
                .fill(0)
                .map((el, idx2) => {
                  return (
                    <CloneElement
                      animation={phase === 1 && forwards}
                      className="bg-white"
                      val={cloneRow.vals[idx2]}
                      key={idx2}
                      possibleValues={{
                        alternate: fixedData[6].altValues[idx2],
                        reference: fixedData[6].refValues[idx2],
                      }}
                    />
                  );
                })}
            </CloneRow>
          );
        })}
    </div>
  );
}
