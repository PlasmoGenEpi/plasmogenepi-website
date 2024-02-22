import KnowledgeCheck from "../../Shared/KnowledgeCheck/KnowledgeCheck";
import { dragDropQuestionsAtom } from "@/store";
import { useAtom } from "jotai";

export default function DragDropKnowledgeCheckThree({
  cols,
}: {
  cols: number;
}) {
  const [dragDropQuestions, setDragDropQuestions] = useAtom(
    dragDropQuestionsAtom,
  );
  return (
    <div
      className={
        cols
          ? "fadeIn500Delay500 grid gap-8 pb-8"
          : "fadeIn500Delay500 grid gap-8 pb-8"
      }
    >
      <div
        className={
          dragDropQuestions[2][1] === 2
            ? "fadeIn500Delay500  grid gap-8"
            : "invisible grid gap-8"
        }
      >
        <KnowledgeCheck
          // questionClassName="flex flex-col justify-between"
          className="grid grid-cols-4 gap-4"
          questionText="How many reads are there in each locus?"
          hasAnswer={dragDropQuestions[2][2] === 1}
          callback={(idx) => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            setDragDropQuestions({
              ...dragDropQuestions,
              2: {
                ...dragDropQuestions[2],
                2: idx + 1,
              },
            });
          }}
          questions={[
            {
              checked: dragDropQuestions[2][2] === 1,
              correct: true,
              id: {
                questionNumber: 1,
                idx: 0,
              },
              text: "4 on the left 2 on the right",
            },
            {
              checked: dragDropQuestions[2][2] === 2,
              correct: false,
              id: {
                questionNumber: 1,
                idx: 1,
              },
              text: "2 on the left and 3 on the right",
            },
            {
              checked: dragDropQuestions[2][2] === 3,
              correct: false,
              id: {
                questionNumber: 1,
                idx: 2,
              },
              text: "1 on the left and 1 on the right",
            },
          ]}
        />
        <div
          className={
            dragDropQuestions[2][2] === 1
              ? "flex flex-col gap-2"
              : "invisible flex-col gap-2"
          }
        >
          <p>Correct!</p>
          <p className="fadeIn500">
            You have previously seen microhaplotypes represented differently, as
            a summary of the SNPs in one locus. These reads correspond to the
            microhaplotypes shown above.
          </p>
        </div>
      </div>
    </div>
  );
}
