"use client";
import KnowledgeCheck from "../../Shared/KnowledgeCheck/KnowledgeCheck";
import { dragDropQuestionsAtom } from "@/store";
import { useAtom } from "jotai";

export default function DragDropKnowledgeCheckTwo({ cols }: { cols: number }) {
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
          questionText="How many SNPs are there in total?"
          className="grid grid-cols-1 gap-4"
          hasAnswer={dragDropQuestions[2][1] === 2}
          callback={(idx) => {
            setDragDropQuestions({
              ...dragDropQuestions,
              2: {
                ...dragDropQuestions[2],
                1: idx + 1,
              },
            });
          }}
          questions={[
            {
              checked: dragDropQuestions[2][1] === 1,
              correct: false,
              id: {
                questionNumber: 1,
                idx: 0,
              },
              text: "30",
            },
            {
              checked: dragDropQuestions[2][1] === 2,
              correct: true,
              id: {
                questionNumber: 1,
                idx: 1,
              },
              text: "7",
            },
            {
              checked: dragDropQuestions[2][1] === 3,
              correct: false,
              id: {
                questionNumber: 1,
                idx: 2,
              },
              text: "2",
            },
            {
              checked: dragDropQuestions[2][1] === 4,
              correct: false,
              id: {
                questionNumber: 1,
                idx: 3,
              },
              text: "0",
            },
          ]}
        />
        <div
          className={
            dragDropQuestions[2][1] === 2
              ? "flex flex-col gap-2"
              : " invisible flex-col gap-2"
          }
        >
          <p>Correct!</p>
          {/* <p className="fadeIn500">
            Locus (plural: &quot;loci&quot;) refers to a specific position or
            location on a chromosome where a particular gene or DNA sequence is
            located. In this example, there are two loci that denote the
            location of the sequence generated reads.
          </p> */}
        </div>{" "}
      </div>
    </div>
  );
}
