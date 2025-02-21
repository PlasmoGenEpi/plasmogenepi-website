import { CSSProperties, ReactNode, useEffect, useRef } from "react";
import KnowledgeCheckAnswer from "./KnowledgeCheckAnswer";

export default function KnowledgeCheckQuestion({
  headerText,
  classNames,
  answers,
  callback,
  questionIdx,
  hasAnswer,
  disabled,
  children,
  trigger,
  triggerEnd,
  style,
}: {
  style?: CSSProperties;
  triggerEnd?: boolean;
  trigger?: boolean;
  children?: ReactNode;
  disabled?: boolean;
  hasAnswer: boolean;
  questionIdx: number;
  callback: (questionIdx: number, answerIdx: number) => void;
  answers: {
    text: string;
    index: number;
    correct: boolean;
    checked: boolean;
  }[];
  headerText: string;
  classNames?: {
    container?: string;
    headerText?: string;
    answersContainer?: string;
    answers?: string;
  };
}) {
  const questionRef = useRef<null | HTMLDivElement>(null);

  // useEffect(() => {
  //   if (
  //     (trigger === undefined || trigger) &&
  //     !hasAnswer &&
  //     questionRef.current !== null &&
  //     !questionRef.current.contains(document.activeElement)
  //   ) {
  //     questionRef.current.focus();
  //     questionRef.current.scrollIntoView({
  //       block: triggerEnd ? "end" : "start",
  //       // block: "start",
  //       behavior: "smooth",
  //     });
  //   }
  // }, [hasAnswer, trigger, triggerEnd]);

  return (
    <div
      style={!hasAnswer && style ? style : undefined}
      ref={questionRef}
      tabIndex={0}
      role="radiogroup"
      aria-roledescription="radiogroup"
      className={
        classNames?.container + ` focus-within:outline-offset-8 scroll-my-48`
      }
      aria-label={headerText}
    >
      <h6
        className={`${
          classNames?.headerText ? classNames?.headerText : ""
        } text-pretty leading-[23px] [fontSize:15px]`}
      >
        {headerText}
      </h6>
      {children}
      <ol className={`${classNames?.answersContainer}`}>
        {answers.map((answerObj, answerIdx) => {
          return (
            <KnowledgeCheckAnswer
              disabled={disabled}
              className={classNames?.answers}
              answerObj={answerObj}
              key={answerIdx}
              callback={callback}
              hasAnswer={hasAnswer}
              questionIdx={questionIdx}
            />
          );
        })}
      </ol>
    </div>
  );
}
