"use client";
import GenotypeResult from "@/app/components/Interactives/Shared/Genotyping/GenotypeResult";
import KnowledgeCheckQuestion from "@/app/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import { fixedData } from "@/data/Interactives/fixedData";
import {
  partOneCompletionAtom,
  phaseAtom,
  positiveControlBoardsAtom,
  selectedPositiveControlBoardAtom,
} from "@/data/Interactives/interactiveStore";
import { countSNPs } from "@/helpers/helpers";
import { useAtom, useAtomValue } from "jotai";
import { useEffect, useMemo } from "react";
import P1GenotypingHeader from "../Genotyping/P1GenotypingHeader";
import QuestionsHeader from "@/app/components/Interactives/Shared/KnowledgeChecks/QuestionsHeader";
import PartOneControlPanel from "../PartOneControlPanel";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";

export default function PartOneKnowledgeCheck({
  forwards,
}: {
  forwards: boolean;
}) {
  const phase = useAtomValue(phaseAtom);
  const [selectedBoard, setSelectedBoard] = useAtom(
    selectedPositiveControlBoardAtom,
  );
  const [boards, setBoards] = useAtom(positiveControlBoardsAtom);
  const completion = useAtomValue(partOneCompletionAtom);
  const currentBoard = boards[selectedBoard];

  let { singles, pairs } = countSNPs(currentBoard.inputs);

  return (
    <StandardLayout part={1} complete={false}>
      {" "}
      <div>
        <FormHeader text={`Genotype`} />

        <div className="fadeIn500 max-w-[500px]">
          <GenotypeResult
            id={selectedBoard ?? 1}
            possibleValues={fixedData[1].refValues.map((refValue, idx) => {
              return {
                reference: refValue,
                alternate: fixedData[1].altValues[idx],
              };
            })}
            vals={currentBoard.inputs}
          />{" "}
        </div>
      </div>
      <div>
        <FormHeader text={`Questions`} />
        <KnowledgeCheckQuestion
          hasAnswer={currentBoard.questions[1] === singles}
          answers={Array(13)
            .fill(0)
            .map((el, idx) => {
              return {
                checked: currentBoard.questions[1] === idx,
                correct: idx === singles,
                index: idx,
                text: idx.toString(),
              };
            })}
          classNames={{
            headerText: "mb-4",
            answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          headerText={`How many loci in positive control ${selectedBoard} have a single allele?`}
          questionIdx={1}
          callback={(questionIdx: number, answerIdx: number) => {
            let newBoards = { ...boards };
            let newQuestionObj = { ...currentBoard.questions };
            if (newQuestionObj[questionIdx] === answerIdx) {
              newQuestionObj[questionIdx] = null;
            } else {
              newQuestionObj[questionIdx] = answerIdx;
            }
            setBoards({
              ...newBoards,
              [selectedBoard]: {
                ...currentBoard,
                questions: newQuestionObj,
              },
            });
            console.log(newQuestionObj);
          }}
        />
        <KnowledgeCheckQuestion
          hasAnswer={currentBoard.questions[2] === pairs}
          answers={Array(13)
            .fill(0)
            .map((el, idx) => {
              return {
                checked: currentBoard.questions[2] === idx,
                correct: idx === pairs,
                index: idx,
                text: idx.toString(),
              };
            })}
          classNames={{
            container:
              currentBoard.questions[1] === singles
                ? "visible fadeIn500 mt-8"
                : "invisible m-8",
            headerText: "mb-4",

            answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          headerText={`How many loci in positive control ${selectedBoard} have 2 alleles?`}
          questionIdx={2}
          callback={(questionIdx: number, answerIdx: number) => {
            let newBoards = { ...boards };
            let newQuestionObj = { ...currentBoard.questions };
            if (newQuestionObj[questionIdx] === answerIdx) {
              newQuestionObj[questionIdx] = null;
            } else {
              newQuestionObj[questionIdx] = answerIdx;
            }
            setBoards({
              ...newBoards,
              [selectedBoard]: {
                ...currentBoard,
                questions: newQuestionObj,
              },
            });
            console.log(newQuestionObj);
          }}
        />
      </div>
    </StandardLayout>
  );
}
