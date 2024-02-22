import { SetStateAction } from "jotai";
import { Dispatch, useMemo } from "react";

export default function KnowledgeCheckbox({
  text,
  checked,
  isAnswer,
  callback,
  id,
  hasAnswer,
}: {
  hasAnswer: boolean;
  id: {
    questionNumber: number;
    idx: number;
  };
  callback?: Dispatch<SetStateAction<any>>;
  text: string;
  checked: boolean | null;
  isAnswer: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <input
        disabled={hasAnswer && !isAnswer}
        onChange={(e) => {
          if (isAnswer && hasAnswer) {
            return false;
          }
          if (callback) {
            callback(id.idx);
          }
        }}
        className={`${isAnswer && hasAnswer ? "accent-primaryGreen pointer-events-none" : "accent-[red]"} w-4 h-4  bg-gray-100 border-gray-300 rounded`}
        checked={checked ?? false}
        type="checkbox"
        id={JSON.stringify([id.questionNumber, id.idx])}
      ></input>
      <label
        className={`${hasAnswer && !isAnswer ? "text-gray-500" : "text-black"} ms-2 text-sm font-medium  translate-y-0.5`}
        htmlFor={JSON.stringify([id.questionNumber, id.idx])}
      >
        {text}
      </label>
    </div>
  );
}
