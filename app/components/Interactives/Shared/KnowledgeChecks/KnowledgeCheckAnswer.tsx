import { useRef } from "react";

export default function KnowledgeCheckAnswer({
  answerObj,
  questionIdx,
  hasAnswer,
  callback,
  className,
  disabled,
}: {
  disabled?: boolean;
  className?: string;
  answerObj: {
    text: string;
    index: number;
    correct: boolean;
    checked: boolean;
  };
  questionIdx: number;
  hasAnswer: boolean;
  callback: (questionIdx: number, answerIdx: number) => void;
}) {
  const answerRef = useRef<null | HTMLInputElement>(null);
  let id = JSON.stringify([questionIdx, answerObj.index]);
  return (
    <li className="flex gap-2 ">
      <input
        onChange={(e) => {
          if (disabled || hasAnswer) {
            return;
          }
          callback(questionIdx, answerObj.index);
        }}
        tabIndex={disabled ? undefined : 0}
        id={id}
        ref={answerRef}
        type="checkbox"
        checked={answerObj.checked}
        disabled={hasAnswer && !answerObj.correct}
        className={`${
          answerObj.correct
            ? " dark:accent-emerald-600 [--chkbg:#14828C]"
            : "accent-microRed [--chkbg:#E61048]"
        } h-4 w-4 md:h-[14px] md:w-[14px]`}
      ></input>
      <label
        className={`${
          hasAnswer && !answerObj.correct ? "text-gray-500" : ""
        }  text-sm`}
        htmlFor={id}
      >
        {answerObj.text}
      </label>
    </li>
  );
}
