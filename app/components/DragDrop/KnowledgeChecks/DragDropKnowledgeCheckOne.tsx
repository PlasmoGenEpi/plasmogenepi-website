"use client";
import KnowledgeCheck from "../../Shared/KnowledgeCheck/KnowledgeCheck";
import { dragDropQuestionsAtom } from "@/store";
import { useAtom } from "jotai";

export default function DragDropKnowledgeCheckOne({ cols }: { cols: number }) {
  const [dragDropQuestions, setDragDropQuestions] = useAtom(
    dragDropQuestionsAtom,
  );
  return (
    <div
      className={
        cols
          ? "fadeIn500Delay500 grid grid-cols-2 gap-8 pb-8"
          : "fadeIn500Delay500 grid gap-8 pb-8"
      }
    >
      <div className="grid  gap-8">
        <KnowledgeCheck
          // questionClassName="flex flex-col justify-between"
          questionText="How many loci do we have reads for in this example?"
          className="grid grid-cols-2 gap-4"
          hasAnswer={dragDropQuestions[1][1] === 1}
          callback={(idx) => {
            console.log(dragDropQuestions);
            setDragDropQuestions({
              ...dragDropQuestions,
              1: {
                ...dragDropQuestions[1],
                1: idx + 1,
              },
            });
          }}
          questions={[
            {
              checked: dragDropQuestions[1][1] === 1,
              correct: true,
              id: {
                questionNumber: 1,
                idx: 0,
              },
              text: "2",
            },
            {
              checked: dragDropQuestions[1][1] === 2,
              correct: false,
              id: {
                questionNumber: 1,
                idx: 1,
              },
              text: "4",
            },
            {
              checked: dragDropQuestions[1][1] === 3,
              correct: false,
              id: {
                questionNumber: 1,
                idx: 2,
              },
              text: "6",
            },
            {
              checked: dragDropQuestions[1][1] === 4,
              correct: false,
              id: {
                questionNumber: 1,
                idx: 3,
              },
              text: "10",
            },
          ]}
        />
        <div
          className={
            dragDropQuestions[1][1] === 1
              ? "flex flex-col gap-2"
              : " invisible flex-col gap-2"
          }
        >
          <p>Correct!</p>
          <p className="fadeIn500">
            Locus (plural: &quot;loci&quot;) refers to a specific position or
            location on a chromosome where a particular gene or DNA sequence is
            located. In this example, there are two loci that denote the
            location of the sequence generated reads.
          </p>
        </div>{" "}
      </div>
      <div
        className={
          dragDropQuestions[1][1] === 1
            ? "fadeIn500Delay500  grid gap-8"
            : "invisible grid gap-8"
        }
      >
        <KnowledgeCheck
          // questionClassName="flex flex-col justify-between"
          className="grid grid-cols-2 gap-4"
          questionText="How many reads are there in each locus?"
          hasAnswer={dragDropQuestions[1][2] === 2}
          callback={(idx) => {
            setDragDropQuestions({
              ...dragDropQuestions,
              1: {
                ...dragDropQuestions[1],
                2: idx + 1,
              },
            });
          }}
          questions={[
            {
              checked: dragDropQuestions[1][2] === 1,
              correct: false,
              id: {
                questionNumber: 1,
                idx: 0,
              },
              text: "5 in locus 1, 5 in locus 2",
            },
            {
              checked: dragDropQuestions[1][2] === 2,
              correct: true,
              id: {
                questionNumber: 1,
                idx: 1,
              },
              text: "6 in locus 1, 4 in locus 2",
            },
            {
              checked: dragDropQuestions[1][2] === 3,
              correct: false,
              id: {
                questionNumber: 1,
                idx: 2,
              },
              text: "10 in locus 1, 0 in locus 2",
            },
            {
              checked: dragDropQuestions[1][2] === 4,
              correct: false,
              id: {
                questionNumber: 1,
                idx: 3,
              },
              text: "0 in locus 1, 10 in locus 2",
            },
          ]}
        />
        <div
          className={
            dragDropQuestions[1][2] === 2
              ? "flex flex-col gap-2"
              : "invisible flex-col gap-2"
          }
        >
          <p>Correct!</p>
          <p className="fadeIn500">
            This is what we call sequencing depth: we have a depth of 6 reads in
            locus 1 and 4 reads in locus 2. You were able to get these numbers
            because you <span className="font-bold italic">aligned</span> the
            reads to a reference genome.
          </p>
        </div>
      </div>
    </div>
  );
}
