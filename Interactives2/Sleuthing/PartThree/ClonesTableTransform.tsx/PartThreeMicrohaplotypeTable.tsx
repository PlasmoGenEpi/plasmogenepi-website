"use client";

import MicrohaplotypeTable from "@/app/components/Interactives/Shared/Microhaplotypes/MicrohaplotypeTable/MicrohaplotypeTable";
import { fixedData } from "@/data/Interactives/fixedData";
import {
  activeRowColumnTransformAtom,
  cloneRowsAtom,
  clonesTableTransformAttemptedAtom,
  hintsEnabledAtom,
  partThreeCompletionAtom,
  transformMatrixAtom,
} from "@/data/Interactives/interactiveStore";
import { MicroId, findNextRowColumnTupleInMatrix } from "@/helpers/helpers";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useMemo } from "react";

export default function PartThreeMicrohaplotypeTable() {
  const [[row, col], setActiveTuple] = useAtom(activeRowColumnTransformAtom);
  const [transformMatrix, setTransformMatrix] = useAtom(transformMatrixAtom);
  const cloneRows = useAtomValue(cloneRowsAtom);
  const completion = useAtomValue(partThreeCompletionAtom);
  const setWiggle = useSetAtom(clonesTableTransformAttemptedAtom);
  const hints = useAtomValue(hintsEnabledAtom);

  let targetMicroId = useMemo(() => {
    if (!transformMatrix[row][col] && hints) {
      return cloneRows[row].vals.slice(
        col * 3,
        col * 3 + 3,
      ) as unknown as MicroId;
    }
  }, [cloneRows, row, col, hints, transformMatrix]);

  console.log(targetMicroId);

  return (
    <MicrohaplotypeTable
      disabled={completion[1]}
      hint={targetMicroId}
      callback={(arrConfig: MicroId) => {
        if (
          JSON.stringify(cloneRows[row].vals.slice(col * 3, col * 3 + 3)) ===
          JSON.stringify(arrConfig)
        ) {
          if (transformMatrix[row][col] === true) {
            return;
          }
          let newMatrix = { ...transformMatrix };
          let newRow = [...newMatrix[row]];
          newRow[col] = true;
          newMatrix[row] = newRow;
          setTransformMatrix(newMatrix);
          let z = findNextRowColumnTupleInMatrix(newMatrix);
          if (z) {
            //@ts-ignore
            setActiveTuple(z);
          }
        } else {
          setWiggle(true);
        }
      }}
      activeColumn={col}
      alternateAlleles={fixedData[1].altValues}
      referenceAlleles={fixedData[1].refValues}
    />
  );
}
