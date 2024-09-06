"use client";
import PositiveControlBoard from "@/components/Interactives/Shared/PositiveControlBoard/PositiveControlBoard";
import PositiveControlLabel from "@/components/Interactives/Shared/PositiveControlBoard/PositiveControlLabel";
import {
  cloneRowsAtom,
  genotypeHintsAtom,
  hintsEnabledAtom,
  partOneCompletionAtom,
  positiveControlBoardsAtom,
  selectedPositiveControlBoardAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";
import RefRow from "../CloneRowTable/RefRow";
import AlternateRow from "../CloneRowTable/AlternateRow";
import { fixedData } from "@/data/Interactives/fixedData";
import CloneElement from "@/components/Interactives/Shared/CloneRow/CloneElement";
import Genotyping from "@/components/Interactives/Shared/Genotyping/Genotyping";
import { RESET } from "jotai/utils";
import { compareGenotypeWithClones } from "@/helpers/helpers";
import P1PositiveControlBoard from "../PositiveControlBoard/P1PositiveControlBoard";
import StandardLayout from "@/components/Interactives/Shared/misc/StandardLayout";
import PartOneControlPanel from "../PartOneControlPanel";

export default function P1Genotyping({ forwards }: { forwards?: boolean }) {
  const [selectedBoard, setSelectedBoard] = useAtom(
    selectedPositiveControlBoardAtom,
  );
  const cloneRows = useAtomValue(cloneRowsAtom);
  const [boards, setBoards] = useAtom(positiveControlBoardsAtom);
  const currentBoard = boards[selectedBoard];
  const completion = useAtomValue(partOneCompletionAtom);

  let matrix = currentBoard.rows.map((rowId) => {
    return cloneRows[rowId].vals;
  });

  return (
    <StandardLayout part={1} complete={false}>
      {" "}
      <div className="flex flex-col gap-12 pb-8">
        {/* <P1PositiveControlBoard /> */}
      </div>
      <div>
        <Genotyping
          disabled={currentBoard.inputValid}
          boardNumber={selectedBoard}
          possibleValues={fixedData[1].refValues.map((refValue, idx) => {
            return {
              reference: refValue,
              alternate: fixedData[1].altValues[idx],
            };
          })}
          callback={(idx, ref) => {
            let newInputs = [...boards[selectedBoard].inputs].map(
              (inputObj) => {
                return { ...inputObj };
              },
            );
            if (ref) {
              newInputs[idx].reference = !newInputs[idx].reference;
            } else {
              newInputs[idx].alternate = !newInputs[idx].alternate;
            }
            setBoards({
              ...boards,
              [selectedBoard]: {
                ...boards[selectedBoard],
                inputs: newInputs,
              },
            });
            // console.log(id);
          }}
          valObjs={currentBoard.inputs}
        />
      </div>
    </StandardLayout>
  );
}
