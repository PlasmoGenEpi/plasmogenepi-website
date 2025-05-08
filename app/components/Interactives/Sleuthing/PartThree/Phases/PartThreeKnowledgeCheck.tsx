"use client";
import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import {
  partThreePositiveControlBoardsAtom,
  phase1Atom,
  selectedPositiveControlBoardAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import PartThreeMicrohaplotypeGenotyping from "../Genotyping/PartThreeMicrohaplotypeGenotyping";
import MicrohaplotypeGenotypeTable from "@/app/components/Interactives/Shared/Microhaplotypes/MicrohaplotypeGenotypeTable/MicrohaplotypeGenotypeTable";
import { fixedData } from "@/data/Interactives/fixedData";
import { useEffect } from "react";
import { cloneRowColors } from "@/app/components/Interactives/Shared/CloneRow/CloneRow";
import KnowledgeCheckQuestion from "@/app/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
// import { countMHPs } from "@/helpers/helpers";
import PartThreeQuestions from "../PartThreeQuestions";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";
import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";
import P3AlleleDistribution from "../P3AlleleDistribution/P3AlleleDistribution";

export default function PartThreeKnowledgeCheck({
  lang,
}: {
  lang: "EN" | "FR" | "PT";
}) {
  const [selectedBoard, setSelectedBoard] = useAtom(
    selectedPositiveControlBoardAtom,
  );
  const phase = useAtomValue(phase1Atom);
  const [boards, setBoards] = useAtom(partThreePositiveControlBoardsAtom);
  const currentBoard = boards[selectedBoard];

  useEffect(() => {
    setSelectedBoard(1);
  }, [setSelectedBoard]);

  return (
    <InteractivePrimaryLayout
      leftHeader={
        <div className="text-center @4xl/main:col-start-1 @4xl/main:text-left">
          <h4 className="text-balance text-center text-lg  font-semibold @2xl/main:text-wrap @2xl/main:text-left">
            {lang === "EN"
              ? `Genotype`
              : lang === "FR"
              ? `Génotype`
              : `Genótipo`}
            <label className="text-sm">
              <br></br>
              {lang === "EN"
                ? `Positive Control`
                : lang === "FR"
                ? `Contrôle positif`
                : `Controlo positivo`}{" "}
              {selectedBoard} (MOI ={" "}
              {selectedBoard > 4 ? 4 : selectedBoard > 2 ? 2 : 1})
            </label>
          </h4>
          {/* <br></br>
          <label className="[fontSize:15px]">
            MOI = {selectedBoard > 4 ? 4 : selectedBoard > 2 ? 2 : 1}
          </label> */}
        </div>
      }
      leftContent={
        <div className="fadeIn500 dark:brightness-75">
          <div className="min-h-[164px]">
            <MicrohaplotypeGenotypeTable
              disabled={true}
              possibleVals={{
                reference: fixedData[1].refValues,
                alternate: fixedData[1].altValues,
              }}
              microIdsMatrix={currentBoard.inputs}
            ></MicrohaplotypeGenotypeTable>{" "}
          </div>
          <div className="mt-8 w-full">
            <P3AlleleDistribution lang={lang} />
          </div>
        </div>
      }
      rightHeader={
        lang === "EN"
          ? `Questions`
          : lang === "FR"
          ? `Des questions`
          : `Questões`
      }
      rightContent={<PartThreeQuestions lang={lang} />}
    />
  );

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
