import { ExtractAtomValue, useAtom, useAtomValue } from "jotai";
import KnowledgeCheck from "../../Shared/KnowledgeChecks/KnowledgeCheck";
import KnowledgeCheckQuestion from "../../Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import PartThreePositiveControlBoard from "./PositiveControlBoard/PartThreePositiveControlBoard";
import {
  partThreeCompletionAtom,
  partThreePositiveControlBoardsAtom,
  phase1Atom,
  selectedPositiveControlBoardAtom,
} from "@/data/Interactives/interactiveStore";
import { useEffect } from "react";
import QuestionResponseText from "../../Shared/misc/QuestionResponseText";
import { countMHPs } from "../../helpers";

export default function PartThreeQuestions() {
  const [boards, setBoards] = useAtom(partThreePositiveControlBoardsAtom);
  const selectedBoard = useAtomValue(selectedPositiveControlBoardAtom);
  const currentBoard = boards[selectedBoard];
  const [complete, setComplete] = useAtom(partThreeCompletionAtom);
  const phase = useAtomValue(phase1Atom);
  let mhpCount = countMHPs(currentBoard.inputs);

  // useEffect(() => {
  //   setBoards({
  //     ...boards,

  //     [6]: {
  //       ...boards[6],
  //       questions: {
  //         1: null,
  //         2: null,
  //         3: null,
  //       },
  //       questionsValid: false,
  //     },
  //   });
  //   setComplete({ ...complete, [phase]: false });
  // }, []);

  if (selectedBoard === 1) {
    return (
      <div className="flex flex-col gap-8">
        <KnowledgeCheckQuestion
          classNames={{
            container: `fadeIn500`,
            headerText: "mb-4",
            answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          answers={Array(5)
            .fill(0)
            .map((el, idx) => {
              return {
                checked: currentBoard.questions[1] === idx,
                correct:
                  Object.values(mhpCount).filter((locus, idx2) => {
                    return locus === 1;
                  }).length === idx,
                index: idx,
                text: idx.toString(),
              };
            })}
          callback={(questionIdx: number, answerIdx: number) => {
            let newBoards = { ...boards };
            let newQuestionObj = { ...currentBoard.questions };
            if (newQuestionObj[questionIdx] !== answerIdx) {
              newQuestionObj[questionIdx] = answerIdx;
            } else {
              newQuestionObj[questionIdx] = null;
            }
            setBoards({
              ...newBoards,
              [selectedBoard]: {
                ...currentBoard,
                questions: newQuestionObj,
              },
            });
          }}
          hasAnswer={currentBoard.questions[1] === 4}
          headerText={`How many loci in positive control 1 (MOI = 1) have a single allele?`}
          questionIdx={1}
        />
        <KnowledgeCheckQuestion
          classNames={{
            container: `${
              currentBoard.questions[1] !== 4 ? "invisible" : "fadeIn500"
            }`,
            headerText: "mb-4",
            answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          answers={Array(5)
            .fill(0)
            .map((el, idx) => {
              return {
                checked: currentBoard.questions[2] === idx,
                correct:
                  Object.values(mhpCount).filter((locus, idx2) => {
                    return locus > 1;
                  }).length === idx,
                index: idx,
                text: idx.toString(),
              };
            })}
          callback={(questionIdx: number, answerIdx: number) => {
            let newBoards = { ...boards };
            let newQuestionObj = { ...currentBoard.questions };
            if (newQuestionObj[questionIdx] !== answerIdx) {
              newQuestionObj[questionIdx] = answerIdx;
            } else {
              newQuestionObj[questionIdx] = null;
            }
            setBoards({
              ...newBoards,
              [selectedBoard]: {
                ...currentBoard,
                questions: newQuestionObj,
              },
            });
          }}
          hasAnswer={currentBoard.questions[2] === 0}
          headerText={`How many loci in positive control 1 have have more than 1 allele?`}
          questionIdx={2}
        />
      </div>
    );
  } else if (selectedBoard === 2) {
    return (
      <div className="flex flex-col gap-8">
        <KnowledgeCheckQuestion
          classNames={{
            container: `fadeIn500`,
            headerText: "mb-4",
            answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          answers={Array(5)
            .fill(0)
            .map((el, idx) => {
              return {
                checked: currentBoard.questions[1] === idx,
                correct:
                  Object.values(mhpCount).filter((locus, idx2) => {
                    return locus === 1;
                  }).length === idx,
                index: idx,
                text: idx.toString(),
              };
            })}
          callback={(questionIdx: number, answerIdx: number) => {
            let newBoards = { ...boards };
            let newQuestionObj = { ...currentBoard.questions };
            if (newQuestionObj[questionIdx] !== answerIdx) {
              newQuestionObj[questionIdx] = answerIdx;
            } else {
              newQuestionObj[questionIdx] = null;
            }
            setBoards({
              ...newBoards,
              [selectedBoard]: {
                ...currentBoard,
                questions: newQuestionObj,
              },
            });
          }}
          hasAnswer={currentBoard.questions[1] === 4}
          headerText={`How many loci in positive control 2 (MOI = 1) have a single allele?`}
          questionIdx={1}
        />
        <KnowledgeCheckQuestion
          classNames={{
            container: `${
              currentBoard.questions[1] !== 4 ? "invisible" : "fadeIn500"
            }`,
            headerText: "mb-4",
            answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          answers={Array(5)
            .fill(0)
            .map((el, idx) => {
              return {
                checked: currentBoard.questions[2] === idx,
                correct:
                  Object.values(mhpCount).filter((locus, idx2) => {
                    return locus > 1;
                  }).length === idx,
                index: idx,
                text: idx.toString(),
              };
            })}
          callback={(questionIdx: number, answerIdx: number) => {
            let newBoards = { ...boards };
            let newQuestionObj = { ...currentBoard.questions };
            if (newQuestionObj[questionIdx] !== answerIdx) {
              newQuestionObj[questionIdx] = answerIdx;
            } else {
              newQuestionObj[questionIdx] = null;
            }
            setBoards({
              ...newBoards,
              [selectedBoard]: {
                ...currentBoard,
                questions: newQuestionObj,
              },
            });
          }}
          hasAnswer={currentBoard.questions[2] === 0}
          headerText={`How many loci in positive control 2 have have more than 1 allele?`}
          questionIdx={2}
        />
      </div>
    );
  } else if (selectedBoard === 3) {
    return (
      <div className="flex flex-col gap-8">
        <KnowledgeCheckQuestion
          classNames={{
            container: `fadeIn500`,
            headerText: "mb-4",
            answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          answers={Array(5)
            .fill(0)
            .map((el, idx) => {
              return {
                checked: currentBoard.questions[1] === idx,
                correct:
                  Object.values(mhpCount).filter((locus, idx2) => {
                    return locus === 1;
                  }).length === idx,
                index: idx,
                text: idx.toString(),
              };
            })}
          callback={(questionIdx: number, answerIdx: number) => {
            let newBoards = { ...boards };
            let newQuestionObj = { ...currentBoard.questions };
            if (newQuestionObj[questionIdx] !== answerIdx) {
              newQuestionObj[questionIdx] = answerIdx;
            } else {
              newQuestionObj[questionIdx] = null;
            }
            setBoards({
              ...newBoards,
              [selectedBoard]: {
                ...currentBoard,
                questions: newQuestionObj,
              },
            });
          }}
          hasAnswer={
            currentBoard.questions[1] ===
            Object.values(mhpCount).filter((locus, idx2) => {
              return locus === 1;
            }).length
          }
          headerText={`How many loci in positive control 3 (MOI = 2) have a single allele?`}
          questionIdx={1}
        />
        <KnowledgeCheckQuestion
          classNames={{
            container: `${
              currentBoard.questions[1] !==
              Object.values(mhpCount).filter((locus, idx2) => {
                return locus === 1;
              }).length
                ? "invisible"
                : "fadeIn500"
            }`,
            headerText: "mb-4",
            answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          answers={Array(5)
            .fill(0)
            .map((el, idx) => {
              return {
                checked: currentBoard.questions[2] === idx,
                correct: Math.max(...Object.values(mhpCount)) === idx,
                index: idx,
                text: idx.toString(),
              };
            })}
          callback={(questionIdx: number, answerIdx: number) => {
            let newBoards = { ...boards };
            let newQuestionObj = { ...currentBoard.questions };
            if (newQuestionObj[questionIdx] !== answerIdx) {
              newQuestionObj[questionIdx] = answerIdx;
            } else {
              newQuestionObj[questionIdx] = null;
            }
            setBoards({
              ...newBoards,
              [selectedBoard]: {
                ...currentBoard,
                questions: newQuestionObj,
              },
            });
          }}
          hasAnswer={
            currentBoard.questions[2] === Math.max(...Object.values(mhpCount))
          }
          headerText={`What is the highest number of alleles seen at a given locus in positive control 3?`}
          questionIdx={2}
        />
        <KnowledgeCheckQuestion
          classNames={{
            container: `${
              currentBoard.questions[2] !== Math.max(...Object.values(mhpCount))
                ? "invisible"
                : "fadeIn500"
            }`,
            headerText: "mb-4",
            answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          answers={Array(5)
            .fill(0)
            .map((el, idx) => {
              return {
                checked: currentBoard.questions[3] === idx,
                correct: idx === 0,
                index: idx,
                text: idx.toString(),
              };
            })}
          callback={(questionIdx: number, answerIdx: number) => {
            let newBoards = { ...boards };
            let newQuestionObj = { ...currentBoard.questions };
            newQuestionObj[questionIdx] = answerIdx;
            setBoards({
              ...newBoards,
              [selectedBoard]: {
                ...currentBoard,
                questions: newQuestionObj,
              },
            });
          }}
          hasAnswer={currentBoard.questions[3] === 0}
          headerText={`How many loci have more than two alleles in positive control 3?`}
          questionIdx={3}
        />
      </div>
    );
  } else if (selectedBoard === 4) {
    return (
      <div className="flex flex-col gap-8">
        <KnowledgeCheckQuestion
          classNames={{
            container: `fadeIn500`,
            headerText: "mb-4",
            answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          answers={Array(5)
            .fill(0)
            .map((el, idx) => {
              return {
                checked: currentBoard.questions[1] === idx,
                correct:
                  Object.values(mhpCount).filter((locus, idx2) => {
                    return locus === 1;
                  }).length === idx,
                index: idx,
                text: idx.toString(),
              };
            })}
          callback={(questionIdx: number, answerIdx: number) => {
            let newBoards = { ...boards };
            let newQuestionObj = { ...currentBoard.questions };
            newQuestionObj[questionIdx] = answerIdx;
            setBoards({
              ...newBoards,
              [selectedBoard]: {
                ...currentBoard,
                questions: newQuestionObj,
              },
            });
          }}
          hasAnswer={
            currentBoard.questions[1] ===
            Object.values(mhpCount).filter((locus, idx2) => {
              return locus === 1;
            }).length
          }
          headerText={`How many loci in positive control 4 (MOI = 2) have a single allele?`}
          questionIdx={1}
        />
        <KnowledgeCheckQuestion
          classNames={{
            container: `${
              currentBoard.questions[1] !==
              Object.values(mhpCount).filter((locus, idx2) => {
                return locus === 1;
              }).length
                ? "invisible"
                : "fadeIn500"
            }`,
            headerText: "mb-4",
            answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          answers={Array(5)
            .fill(0)
            .map((el, idx) => {
              return {
                checked: currentBoard.questions[2] === idx,
                correct: Math.max(...Object.values(mhpCount)) === idx,
                index: idx,
                text: idx.toString(),
              };
            })}
          callback={(questionIdx: number, answerIdx: number) => {
            let newBoards = { ...boards };
            let newQuestionObj = { ...currentBoard.questions };
            newQuestionObj[questionIdx] = answerIdx;
            setBoards({
              ...newBoards,
              [selectedBoard]: {
                ...currentBoard,
                questions: newQuestionObj,
              },
            });
          }}
          hasAnswer={
            currentBoard.questions[2] === Math.max(...Object.values(mhpCount))
          }
          headerText={`What is the highest number of alleles seen at a given locus in positive control 4?`}
          questionIdx={2}
        />
        <QuestionResponseText
          visible={
            currentBoard.questions[2] === Math.max(...Object.values(mhpCount))
          }
          text={`Are you starting to notice any relationship between MOI and the number of alleles detected? What do you think you will see when you genotype the next 2 controls with MOI of 4?`}
        />
      </div>
    );
  } else if (selectedBoard === 5) {
    return (
      <div className="flex flex-col gap-8">
        <KnowledgeCheckQuestion
          classNames={{
            container: `fadeIn500`,
            headerText: "mb-4",
            answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          answers={Array(5)
            .fill(0)
            .map((el, idx) => {
              return {
                checked: currentBoard.questions[1] === idx,
                correct:
                  Object.values(mhpCount).filter((locus, idx2) => {
                    return locus === 1;
                  }).length === idx,
                index: idx,
                text: idx.toString(),
              };
            })}
          callback={(questionIdx: number, answerIdx: number) => {
            let newBoards = { ...boards };
            let newQuestionObj = { ...currentBoard.questions };
            newQuestionObj[questionIdx] = answerIdx;
            setBoards({
              ...newBoards,
              [selectedBoard]: {
                ...currentBoard,
                questions: newQuestionObj,
              },
            });
          }}
          hasAnswer={
            currentBoard.questions[1] ===
            Object.values(mhpCount).filter((locus, idx2) => {
              return locus === 1;
            }).length
          }
          headerText={`How many loci in positive control 5 (MOI = 4) have a single allele?`}
          questionIdx={1}
        />
        <KnowledgeCheckQuestion
          classNames={{
            headerText: "mb-4",

            container: `${
              currentBoard.questions[1] !==
              Object.values(mhpCount).filter((locus, idx2) => {
                return locus === 1;
              }).length
                ? "invisible"
                : "fadeIn500"
            }`,
            answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          answers={Array(5)
            .fill(0)
            .map((el, idx) => {
              return {
                checked: currentBoard.questions[2] === idx,
                correct: Math.max(...Object.values(mhpCount)) === idx,
                index: idx,
                text: idx.toString(),
              };
            })}
          callback={(questionIdx: number, answerIdx: number) => {
            let newBoards = { ...boards };
            let newQuestionObj = { ...currentBoard.questions };
            newQuestionObj[questionIdx] = answerIdx;
            setBoards({
              ...newBoards,
              [selectedBoard]: {
                ...currentBoard,
                questions: newQuestionObj,
              },
            });
          }}
          hasAnswer={
            currentBoard.questions[2] === Math.max(...Object.values(mhpCount))
          }
          headerText={`What is the highest number of alleles seen at a given locus in positive control 5?`}
          questionIdx={2}
        />
        <KnowledgeCheckQuestion
          classNames={{
            headerText: "mb-4",

            container: `${
              currentBoard.questions[2] !== Math.max(...Object.values(mhpCount))
                ? "invisible"
                : "fadeIn500"
            }`,
            answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          answers={Array(5)
            .fill(0)
            .map((el, idx) => {
              return {
                checked: currentBoard.questions[3] === idx,
                correct:
                  Object.values(mhpCount).filter((count) => {
                    return count === Math.max(...Object.values(mhpCount));
                  }).length === idx,
                index: idx,
                text: idx.toString(),
              };
            })}
          callback={(questionIdx: number, answerIdx: number) => {
            let newBoards = { ...boards };
            let newQuestionObj = { ...currentBoard.questions };
            if (newQuestionObj[questionIdx] !== answerIdx) {
              newQuestionObj[questionIdx] = answerIdx;
            } else {
              newQuestionObj[questionIdx] = null;
            }
            setBoards({
              ...newBoards,
              [selectedBoard]: {
                ...currentBoard,
                questions: newQuestionObj,
              },
            });
          }}
          hasAnswer={
            currentBoard.questions[3] ===
            Object.values(mhpCount).filter((count) => {
              return count === Math.max(...Object.values(mhpCount));
            }).length
          }
          headerText={`How many loci have this highest number of alleles?`}
          questionIdx={3}
        />
      </div>
    );
  } else if (selectedBoard === 6) {
    return (
      <div className="flex flex-col">
        <KnowledgeCheckQuestion
          classNames={{
            container: `fadeIn500`,
            headerText: "mb-4",
            answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          answers={Array(5)
            .fill(0)
            .map((el, idx) => {
              return {
                checked: currentBoard.questions[1] === idx,
                correct: Math.max(...Object.values(mhpCount)) === idx,
                index: idx,
                text: idx.toString(),
              };
            })}
          callback={(questionIdx: number, answerIdx: number) => {
            let newBoards = { ...boards };
            let newQuestionObj = { ...currentBoard.questions };
            if (newQuestionObj[questionIdx] !== answerIdx) {
              newQuestionObj[questionIdx] = answerIdx;
            } else {
              newQuestionObj[questionIdx] = null;
            }
            setBoards({
              ...newBoards,
              [selectedBoard]: {
                ...currentBoard,
                questions: newQuestionObj,
              },
            });
          }}
          hasAnswer={
            currentBoard.questions[1] === Math.max(...Object.values(mhpCount))
          }
          headerText={`What is the highest number of alleles seen at a given locus in positive control 6? (MOI = 4)`}
          questionIdx={1}
        />
        {/* w-[calc(100%+16px)] -translate-x-2  */}
        <QuestionResponseText
          className="mt-4 mb-8"
          trigger={
            currentBoard.questions[1] === Math.max(...Object.values(mhpCount))
          }
          visible={
            currentBoard.questions[1] === Math.max(...Object.values(mhpCount))
          }
          text="Do the results for controls 5 and 6, with MOI of 4, match your
            prediction? Why or why not? Take a moment to think about this
            question."
        />
        <div
          role="radiogroup"
          style={{
            animationDelay: !complete[phase] ? "3000ms" : "0ms",
          }}
          className={`${
            currentBoard.questions[1] === Math.max(...Object.values(mhpCount))
              ? "fadeIn500"
              : "invisible"
          }`}
        >
          <h4 className={`[font-size:15px] text-pretty`}>
            Why don&apos;t all the loci in positive control 5 and positive
            control 6 have 4 alleles detected, even though the MOI = 4?
          </h4>
          <div className={`mt-4 flex flex-col gap-4`}>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  disabled={currentBoard.questions[2] === 3}
                  onChange={(e) => {
                    setBoards({
                      ...boards,
                      [selectedBoard]: {
                        ...currentBoard,
                        questions: {
                          ...currentBoard["questions"],
                          2: currentBoard["questions"][2] === 1 ? null : 1,
                        },
                      },
                    });
                  }}
                  checked={currentBoard.questions[2] === 1}
                  className="h-4 w-4 accent-[red] [--chkbg:red] md:h-[14px] md:w-[14px]"
                  id={"interactive-q2-a1"}
                  type="checkbox"
                ></input>
                <label
                  className={`text-sm ${
                    currentBoard.questions[2] !== 3 ? "" : "text-gray-500"
                  }`}
                  htmlFor="interactive-q2-a1"
                >
                  The genotyping is wrong.
                </label>
              </div>
              {/* <p
                className={`${currentBoard.questions[2] === 1 ? "fadeIn500" : "invisible max-h-0"} overflow-hidden  bg-cloneRed/10 p-6 text-sm `}
              >
                Not correct, fortunately in this exercise we are assuming
                genotyping is perfect. This will not always be the case in
                reality though!
              </p> */}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  disabled={currentBoard.questions[2] === 3}
                  onChange={(e) => {
                    setBoards({
                      ...boards,
                      [selectedBoard]: {
                        ...currentBoard,
                        questions: {
                          ...currentBoard["questions"],
                          2: currentBoard["questions"][2] === 2 ? null : 2,
                        },
                      },
                    });
                  }}
                  checked={currentBoard.questions[2] === 2}
                  className="h-4 w-4 accent-[red] [--chkbg:red] md:h-[14px] md:w-[14px]"
                  id={"interactive-q2-a2"}
                  type="checkbox"
                ></input>
                <label
                  className={`text-sm ${
                    currentBoard.questions[2] !== 3 ? "" : "text-gray-500"
                  }`}
                  htmlFor="interactive-q2-a2"
                >
                  There aren&apos;t 4 possible alleles at each locus.
                </label>
              </div>
              {/* <p
                className={`${currentBoard.questions[2] === 2 ? "fadeIn500" : "invisible max-h-0"} overflow-hidden bg-cloneRed/10 p-6 text-sm `}
              >
                Not true, there are actually eight possible alleles for every
                locus, as you identified during the genotyping process.
              </p> */}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  onChange={(e) => {
                    setBoards({
                      ...boards,
                      [selectedBoard]: {
                        ...currentBoard,
                        questions: {
                          ...currentBoard["questions"],
                          2: 3,
                        },
                      },
                    });
                  }}
                  checked={currentBoard.questions[2] === 3}
                  className="h-4 w-4 dark:accent-emerald-400 md:h-[14px] md:w-[14px]"
                  type="checkbox"
                  id="interactive-q2-a3"
                ></input>
                <label className={`text-sm`} htmlFor="interactive-q2-a3">
                  Sometimes alleles in different strains will match by chance,
                  even if diversity is high
                </label>
              </div>
              {/* <div className="min-h-32 dark:text-emerald-400 dark:bg-zinc-900/50 bg-interactiveBlue/10">
                <p
                  key={currentBoard.questions[2]}
                  className={`${
                    currentBoard.questions[2] === 3
                      ? "bg-primaryBlue/10"
                      : currentBoard.questions[2] !== null
                      ? "bg-cloneRed/10"
                      : "invisible"
                  } ${
                    currentBoard.questions[2] !== null ? "fadeIn500" : ""
                  }  mt-6  text-pretty p-6 text-sm md:px-8 md:py-6`}
                >
                  {currentBoard.questions[2] === 3
                    ? `That is correct! Even with eight possible alleles, as in this
                exercise, there is a reasonable chance that some of them will
                match if you have 4 of them. If you pick nine of them, it is
                certain that at least 2 will be the same!`
                    : currentBoard.questions[2] === 2
                    ? `Not true, there are actually eight possible alleles for every
                locus, as you identified during the genotyping process.`
                    : currentBoard.questions[2] === 1
                    ? `Not correct, fortunately in this exercise we are assuming
                      genotyping is perfect. This will not always be the case in
                reality though!`
                    : ``}
                </p>
              </div> */}
              <QuestionResponseText
                key={currentBoard.questions[2]}
                visible={!!currentBoard.questions[2]}
                className="mt-4"
                content={
                  currentBoard.questions[2] === 3 ? (
                    <div
                      className={
                        "text-pretty bg-interactiveBlue/10 dark:bg-zinc-900/50 dark:text-emerald-400 p-4 leading-[23px] md:p-6 md:px-8"
                      }
                    >
                      <p>
                        That is correct! Even with eight possible alleles, as in
                        this exercise, there is a reasonable chance that some of
                        them will match if you have 4 of them. If you pick nine
                        of them, it is certain that at least 2 will be the same!
                      </p>
                    </div>
                  ) : currentBoard.questions[2] ? (
                    <div
                      className={
                        "text-pretty bg-cloneRed/20 dark:bg-zinc-900/50 dark:border-microRed dark:text-white dark:border-2 p-4 leading-[23px] md:p-6 md:px-8"
                      }
                    >
                      <p>
                        {currentBoard.questions[2] === 2
                          ? `Not true, there are actually eight possible alleles for every
                locus, as you identified during the genotyping process.`
                          : currentBoard.questions[2] === 1
                          ? `Not correct, fortunately in this exercise we are assuming
                      genotyping is perfect. This will not always be the case in
                reality though!`
                          : null}
                      </p>
                    </div>
                  ) : null
                }
              />
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
}

// export const partThreeQuestions = function (selectedBoard: number) {
//   let x: {
//     [key: number]: {
//       [key: number]: {
//         text: string;
//         count: number[],
//       };
//     };
//   } = {
//     1: {
//       1: {
//         text: `How many loci in positive control ${selectedBoard} have a single allele?`,
//         count: [1],
//       },
//       2: `How many loci in positive control ${selectedBoard} have have more than 1 allele?`,
//     },
//     2: {
//       1: "",
//       2: "",
//     },
//     3: {
//       1: "",
//       2: "",
//     },
//     4: {
//       1: "",
//       2: "",
//     },
//     5: {
//       1: "",
//       2: "",
//     },
//     6: {
//       1: "",
//       2: "",
//       3: "",
//     },
//   };
//   return x[selectedBoard];
// };
