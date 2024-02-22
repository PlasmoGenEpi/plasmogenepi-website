"use client";
import KnowledgeCheck from "../../Shared/KnowledgeCheck/KnowledgeCheck";
import { dragDropQuestionsAtom } from "@/store";
import { useAtom } from "jotai";

export default function DragDropKnowledgeCheckFour({ cols }: { cols: number }) {
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
          questionText="If this was data resulting from sequencing a real sample, what is the MOI in this sample?"
          className="grid grid-cols-2 gap-4"
          hasAnswer={dragDropQuestions[4][1] === 4}
          callback={(idx) => {
            setDragDropQuestions({
              ...dragDropQuestions,
              4: {
                ...dragDropQuestions[4],
                1: idx + 1,
              },
            });
          }}
          questions={[
            {
              checked: dragDropQuestions[4][1] === 1,
              correct: false,
              id: {
                questionNumber: 1,
                idx: 0,
              },
              text: "1",
            },
            {
              checked: dragDropQuestions[4][1] === 2,
              correct: false,
              id: {
                questionNumber: 1,
                idx: 1,
              },
              text: "2",
            },
            {
              checked: dragDropQuestions[4][1] === 3,
              correct: false,
              id: {
                questionNumber: 1,
                idx: 2,
              },
              text: "3",
            },
            {
              checked: dragDropQuestions[4][1] === 4,
              correct: true,
              id: {
                questionNumber: 1,
                idx: 3,
              },
              text: "4",
            },
            {
              checked: dragDropQuestions[4][1] === 5,
              correct: false,
              id: {
                questionNumber: 1,
                idx: 4,
              },
              text: "5",
            },
            {
              checked: dragDropQuestions[4][1] === 6,
              correct: false,
              id: {
                questionNumber: 1,
                idx: 5,
              },
              text: "6",
            },
            {
              checked: dragDropQuestions[4][1] === 7,
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
            dragDropQuestions[4][1] === 4
              ? "flex flex-col gap-2"
              : " invisible flex-col gap-2"
          }
        >
          <p>Correct!</p>
          <p className="fadeIn500">
            The most likely explanation for this is that there are 4 parasites
            in the sample, each with a different allele in locus 1, while some
            of them share the same allele in locus 2. Thus, the MOI is 4.
          </p>
        </div>{" "}
      </div>
    </div>
  );
}
