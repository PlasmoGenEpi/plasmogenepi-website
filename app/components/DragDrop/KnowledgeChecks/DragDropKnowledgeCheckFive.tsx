"use client";
import KnowledgeCheck from "../../Shared/KnowledgeCheck/KnowledgeCheck";
import { dragDropQuestionsAtom } from "@/store";
import { useAtom } from "jotai";

export default function DragDropKnowledgeCheckFive({ cols }: { cols: number }) {
  const [dragDropQuestions, setDragDropQuestions] = useAtom(
    dragDropQuestionsAtom,
  );
  return (
    <div
      className={
        cols
          ? "fadeIn500Delay500 grid gap-8 pb-8 "
          : "fadeIn500Delay500 grid gap-8 pb-8"
      }
    >
      <div className="grid  gap-8">
        <KnowledgeCheck
          // questionClassName="flex flex-col justify-between"
          questionText="Assuming that there are errors in these sequences, what do you think is a more accurate estimation of the MOI?"
          className="grid grid-cols-2 gap-4"
          hasAnswer={dragDropQuestions[5][1] === 3}
          callback={(idx) => {
            setDragDropQuestions({
              ...dragDropQuestions,
              5: {
                ...dragDropQuestions[5],
                1: idx + 1,
              },
            });
          }}
          questions={[
            {
              checked: dragDropQuestions[5][1] === 1,
              correct: false,
              id: {
                questionNumber: 1,
                idx: 0,
              },
              text: "1",
            },
            {
              checked: dragDropQuestions[5][1] === 2,
              correct: false,
              id: {
                questionNumber: 1,
                idx: 1,
              },
              text: "2",
            },
            {
              checked: dragDropQuestions[5][1] === 3,
              correct: true,
              id: {
                questionNumber: 1,
                idx: 2,
              },
              text: "3",
            },
            {
              checked: dragDropQuestions[5][1] === 4,
              correct: false,
              id: {
                questionNumber: 1,
                idx: 3,
              },
              text: "4",
            },
            {
              checked: dragDropQuestions[5][1] === 5,
              correct: false,
              id: {
                questionNumber: 1,
                idx: 4,
              },
              text: "5",
            },
            {
              checked: dragDropQuestions[5][1] === 6,
              correct: false,
              id: {
                questionNumber: 1,
                idx: 5,
              },
              text: "6",
            },
            {
              checked: dragDropQuestions[5][1] === 7,
              correct: false,
              id: {
                questionNumber: 1,
                idx: 6,
              },
              text: "7",
            },
          ]}
        />
        <div
          className={
            dragDropQuestions[5][1] === 3
              ? "flex flex-col gap-2"
              : " invisible flex-col gap-2"
          }
        >
          <p>Correct!</p>
          <p className="fadeIn500">
            In this case, we could consider that a variant that was observed
            only once, at the bottom, could be a sequencing error, and that it
            was the same sequence as the one above it, but with an error. Thus,
            we have 3 alleles in locus 1, and the estimated MOI would be 3.
          </p>
        </div>{" "}
      </div>
    </div>
  );
}
