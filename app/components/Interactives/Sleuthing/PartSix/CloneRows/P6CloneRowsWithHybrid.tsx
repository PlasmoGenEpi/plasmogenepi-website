import CloneElement from "@/components/Interactives/Shared/CloneRow/CloneElement";
import CloneRow from "@/components/Interactives/Shared/CloneRow/CloneRow";
import { fixedData } from "@/data/Interactives/fixedData";
import {
  partSixCloneRowsAtom,
  partSixCompletionAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import { P6CloneRowButtonColors, P6CloneRowColors } from "./P6MHPCloneRows";
import LabelRow from "../../PartOne/CloneRowTable/LabelRow";
import SNPHybridClone from "../Comparators/SNPs/SNPHybridClone";

export default function P6CloneRowsWithHybrid({
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
          return (
            <CloneRow
              key={idx}
              label={idx + 1}
              classNames={{
                wrapper: `transition-all
                ${
                  phase === 12
                    ? cloneRow.id === 3
                      ? " hidden"
                      : cloneRow.id === 2
                        ? "hidden"
                        : cloneRow.id === 1
                          ? ""
                          : ""
                    : phase === 13 || phase === 13.5
                      ? cloneRow.id === 3
                        ? " hidden"
                        : cloneRow.id === 2
                          ? ""
                          : cloneRow.id === 1
                            ? "hidden"
                            : ""
                      : phase === 14
                        ? cloneRow.id === 3
                          ? ""
                          : cloneRow.id === 2
                            ? "hidden"
                            : cloneRow.id === 1
                              ? "hidden"
                              : ""
                        : ""
                }`,
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
      <SNPHybridClone />
    </div>
  );
}
