import { SetStateAction } from "jotai";
import KnowledgeCheckbox from "./KnowledgeCheckbox";
import { Dispatch } from "react";

export default function KnowledgeCheck({
  questionText,
  questions,
  callback,
  className,
  style = { gridGap: "16px", gridColumns: 1, gridRows: "auto" },
  hasAnswer,
  questionClassName,
}: {
  questionClassName?: string;
  hasAnswer: boolean;
  style?: {
    gridGap: number | string;
    gridColumns: number | string;
    gridRows: number | string;
  };
  className?: string;
  callback?: Dispatch<SetStateAction<any>>;
  questionText: string;
  questions: {
    checked: boolean | null;
    text: string;
    id: {
      questionNumber: number;
      idx: number;
    };
    correct: boolean;
  }[];
}) {
  return (
    <div role="radiogroup" className={questionClassName}>
      <h3 className="mb-4">{questionText}</h3>
      <div className={className}>
        {questions.map((questionObj, idx) => {
          return (
            <KnowledgeCheckbox
              hasAnswer={hasAnswer}
              callback={callback}
              id={questionObj.id}
              key={idx}
              checked={questionObj.checked}
              isAnswer={questionObj.correct}
              text={questionObj.text}
            />
          );
        })}
      </div>
    </div>
  );
}
