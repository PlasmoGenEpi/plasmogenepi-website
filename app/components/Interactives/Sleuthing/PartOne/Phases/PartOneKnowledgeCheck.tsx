"use client";
import GenotypeResult from "@/app/components/Interactives/Shared/Genotyping/GenotypeResult";
import KnowledgeCheckQuestion from "@/app/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import { fixedData } from "@/data/Interactives/fixedData";
import {
  positiveControlBoardsAtom,
  selectedPositiveControlBoardAtom,
} from "@/data/Interactives/interactiveStore";
// import { countSNPs } from "@/helpers/helpers";
import { useAtom, useAtomValue } from "jotai";
import { countSNPs } from "@/app/components/Interactives/helpers";
import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";
import AlleleDistribution from "../AlleleDistribution/AlleleDistribution";

export default function PartOneKnowledgeCheck({
  forwards,
}: {
  forwards: boolean;
}) {
  const selectedBoard = useAtomValue(selectedPositiveControlBoardAtom);
  const [boards, setBoards] = useAtom(positiveControlBoardsAtom);
  const currentBoard = boards[selectedBoard];

  let { singles, pairs } = countSNPs(currentBoard.inputs);

  return (
    <InteractivePrimaryLayout
      leftHeader={
        <div className="@4xl/main:col-start-1 @4xl/main:text-left text-center">
          <h4 className="@2xl/main:text-wrap @2xl/main:text-left text-balance  text-center text-lg font-semibold">
            Genotype
            <label className="text-sm ">
              <br></br>
              Positive Control {selectedBoard} (MOI ={" "}
              {selectedBoard < 3 ? "1" : selectedBoard < 5 ? "2" : "4"})
            </label>
          </h4>
        </div>
      }
      leftContent={
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
          <div className="mt-24">
            <AlleleDistribution />
          </div>
        </div>
      }
      rightHeader={`Questions`}
      rightContent={
        <div>
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
            headerText={`How many loci in positive control ${selectedBoard}               (MOI = ${
              selectedBoard < 3 ? "1" : selectedBoard < 5 ? "2" : "4"
            })
have a single allele?`}
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
            headerText={`How many loci in positive control ${selectedBoard} have two alleles?`}
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
      }
    />
  );
}
