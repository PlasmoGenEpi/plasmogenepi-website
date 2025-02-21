"use client";
import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import {
  partThreePositiveControlBoardsAtom,
  phaseAtom,
  selectedPositiveControlBoardAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import PartThreeMicrohaplotypeGenotyping from "../Genotyping/PartThreeMicrohaplotypeGenotyping";
import MicrohaplotypeGenotypeTable from "@/app/components/Interactives/Shared/Microhaplotypes/MicrohaplotypeGenotypeTable/MicrohaplotypeGenotypeTable";
import { fixedData } from "@/data/Interactives/fixedData";
import { useEffect } from "react";
import { cloneRowColors } from "@/app/components/Interactives/Shared/CloneRow/CloneRow";
import KnowledgeCheckQuestion from "@/app/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import { countMHPs } from "@/helpers/helpers";
import PartThreeQuestions from "../PartThreeQuestions";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";

export default function PartThreeKnowledgeCheck() {
  const [selectedBoard, setSelectedBoard] = useAtom(
    selectedPositiveControlBoardAtom,
  );
  const phase = useAtomValue(phaseAtom);
  const [boards, setBoards] = useAtom(partThreePositiveControlBoardsAtom);
  const currentBoard = boards[selectedBoard];

  useEffect(() => {
    setSelectedBoard(1);
  }, [setSelectedBoard]);

  return (
    <StandardLayout>
      <div>
        <FormHeader text={`Genotype`} />
        <div className="-translate-y-6 text-center text-base md:text-left">
          <label className="[fontSize:15px]">
            MOI = {selectedBoard > 4 ? 4 : selectedBoard > 2 ? 2 : 1}
          </label>
        </div>
        <div className="fadeIn500">
          <MicrohaplotypeGenotypeTable
            disabled={true}
            possibleVals={{
              reference: fixedData[1].refValues,
              alternate: fixedData[1].altValues,
            }}
            microIdsMatrix={currentBoard.inputs}
          ></MicrohaplotypeGenotypeTable>{" "}
        </div>
      </div>
      <div>
        <FormHeader text="Questions" />
        <PartThreeQuestions />
      </div>
    </StandardLayout>
  );
}
