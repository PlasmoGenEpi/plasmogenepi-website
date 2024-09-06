import StandardLayout from "@/components/Interactives/Shared/misc/StandardLayout";
import MicrohaplotypeComparator from "../Comparators/MHPs/MicrohaplotypeComparators";
import { P6CloneRowColors } from "../CloneRows/P6MHPCloneRows";
import {
  pairwiseCombosMHPsAtom,
  partSevenCompletionAtom,
  partSixCloneRowsMHPsAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { atom, useAtom, useAtomValue } from "jotai";
import SquareMicrohaplotype from "@/components/Interactives/Shared/Microhaplotypes/SquareMicrohaplotype";
import GenotypeComparator from "../Comparators/MHPs/GenotypeComparator";
import KnowledgeCheckQuestion from "@/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import { atomWithStorage } from "jotai/utils";
import RedBlueGenotype from "../../PartSeven/Genotypes/RedBlueGenotype";
import FormHeader from "@/components/Interactives/Shared/misc/FormHeader";
import QuestionResponseText from "@/components/Interactives/Shared/misc/QuestionResponseText";
import MultiRowLayout from "@/components/Interactives/Shared/misc/MultiRowLayout";
import BlueGreenGenotype from "../../PartSeven/Genotypes/BlueGreenGenotype";

export const identicalGenotypeAtom = atomWithStorage<boolean[]>(
  "identicalGenotypeAtom",
  Array(12).fill(false),
);

export const identicalGenotype2Atom = atomWithStorage<boolean[]>(
  "identicalGenotype2Atom",
  Array(12).fill(false),
);

export const P6Step2QuestionsAtom = atomWithStorage<{
  // [key: number]: null | number;
  [key: number]:
    | number
    | null
    | {
        [key: number]: null | number;
      };
}>("P6Step2QuestionsAtom", {
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
  6: null,
  7: null,
  8: {
    1: null,
    2: null,
    3: null,
    4: null,
  },
  9: null,
  10: null,
  11: null,
});

let x = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
];
let y = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]];

export function countPolyclonalAlleles(
  matrix1: number[][],
  matrix2: number[][],
) {
  let newArr = Array(12)
    .fill(0)
    .map((el, idx) => {
      return [];
    });

  let x = matrix1.forEach((arr, idx) => {
    arr.forEach((el, idx2) => {
      newArr[idx2].push(el);
    });
  });

  let newArr2 = Array(12)
    .fill(0)
    .map((el, idx) => {
      return [];
    });

  let y = matrix2.forEach((arr, idx) => {
    arr.forEach((el, idx2) => {
      newArr2[idx2].push(el);
    });
  });
  let results = [];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr2[i].length; j++) {
      if (newArr[i].includes(newArr2[i][j])) {
        results.push(i);
        break;
      }
    }
  }
  return results;
}

export default function Genotypes({
  first,
  second,
  currentClone = 1,
}: {
  currentClone: number;
  first: number;
  second: number;
}) {
  const cloneRowsMHPs = useAtomValue(partSixCloneRowsMHPsAtom);
  const pairwiseCombosMHPs = useAtomValue(pairwiseCombosMHPsAtom);
  const phase = useAtomValue(phaseAtom);
  const [questions, setQuestions] = useAtom(P6Step2QuestionsAtom);
  const completion = useAtomValue(partSevenCompletionAtom);
  const [identicalGenotype, setIdenticalGenotype] = useAtom(
    identicalGenotypeAtom,
  );
  const [identicalGenotype2, setIdenticalGenotype2] = useAtom(
    identicalGenotype2Atom,
  );

  return (
    <MultiRowLayout
      topRight={
        phase === 5 ? (
          <div className="fadeIn500 md:row-span-2">
            <FormHeader text="Questions" />
            <div className="flex flex-col gap-8">
              <KnowledgeCheckQuestion
                classNames={{
                  headerText: "mb-4",
                  answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                  answers: "w-4 md:w-3 lg:w-4",
                }}
                answers={Array(13)
                  .fill(0)
                  .map((el, idx) => {
                    return {
                      checked: questions[1] === idx,
                      correct:
                        countPolyclonalAlleles(
                          [cloneRowsMHPs[1].vals, cloneRowsMHPs[2].vals],
                          [cloneRowsMHPs[3].vals],
                        ).length === idx,
                      index: idx,
                      text: idx.toString(),
                    };
                  })}
                callback={(questionIdx, answerIdx) => {
                  if (questions[questionIdx] === answerIdx) {
                    setQuestions({ ...questions, [questionIdx]: null });
                  } else {
                    setQuestions({ ...questions, [questionIdx]: answerIdx });
                  }
                }}
                hasAnswer={
                  questions[1] ===
                  countPolyclonalAlleles(
                    [cloneRowsMHPs[1].vals, cloneRowsMHPs[2].vals],
                    [cloneRowsMHPs[3].vals],
                  ).length
                }
                headerText="How many of the loci match?"
                questionIdx={1}
              />
              {questions[1] ===
                countPolyclonalAlleles(
                  [cloneRowsMHPs[1].vals, cloneRowsMHPs[2].vals],
                  [cloneRowsMHPs[3].vals],
                ).length && (
                <KnowledgeCheckQuestion
                  classNames={{
                    container: "fadeIn500",
                    headerText: "mb-4",
                    answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                    answers: "w-4 md:w-3 lg:w-4",
                  }}
                  answers={Array(13)
                    .fill(0)
                    .map((el, idx) => {
                      return {
                        checked: questions[2] === idx,
                        correct:
                          countPolyclonalAlleles(
                            [cloneRowsMHPs[1].vals, cloneRowsMHPs[2].vals],
                            [cloneRowsMHPs[3].vals],
                          ).length === idx,
                        index: idx,
                        text: idx.toString() + "/12",
                      };
                    })}
                  callback={(questionIdx, answerIdx) => {
                    if (questions[questionIdx] === answerIdx) {
                      setQuestions({ ...questions, [questionIdx]: null });
                    } else {
                      setQuestions({ ...questions, [questionIdx]: answerIdx });
                    }
                  }}
                  hasAnswer={
                    countPolyclonalAlleles(
                      [cloneRowsMHPs[1].vals, cloneRowsMHPs[2].vals],
                      [cloneRowsMHPs[3].vals],
                    ).length === questions[2]
                  }
                  headerText="What is the IBS for these two samples?"
                  questionIdx={2}
                />
              )}
              {countPolyclonalAlleles(
                [cloneRowsMHPs[1].vals, cloneRowsMHPs[2].vals],
                [cloneRowsMHPs[3].vals],
              ).length === questions[2] && (
                <KnowledgeCheckQuestion
                  classNames={{
                    container: "fadeIn500",
                    headerText: "mb-4",
                    answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                    answers: "w-4 md:w-3 lg:w-4",
                  }}
                  answers={Array(13)
                    .fill(0)
                    .map((el, idx) => {
                      return {
                        checked: questions[3] === idx,
                        correct: idx === 0,
                        index: idx,
                        text: idx.toString() + "/12",
                      };
                    })}
                  callback={(questionIdx, answerIdx) => {
                    if (questions[questionIdx] === answerIdx) {
                      setQuestions({ ...questions, [questionIdx]: null });
                    } else {
                      setQuestions({ ...questions, [questionIdx]: answerIdx });
                    }
                  }}
                  hasAnswer={questions[3] === 0}
                  headerText="What is the IBD for these two samples?"
                  questionIdx={3}
                />
              )}
            </div>
          </div>
        ) : phase === 7 ? (
          <div className="fadeIn500 md:row-span-2">
            <FormHeader text="Questions" />
            <div className="flex flex-col gap-8">
              <KnowledgeCheckQuestion
                classNames={{
                  headerText: "mb-4",
                  answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                  answers: "w-4 md:w-3 lg:w-4",
                }}
                answers={Array(13)
                  .fill(0)
                  .map((el, idx) => {
                    return {
                      checked: questions[4] === idx,
                      correct:
                        countPolyclonalAlleles(
                          [cloneRowsMHPs[2].vals, cloneRowsMHPs[3].vals],
                          [cloneRowsMHPs[1].vals],
                        ).length === idx,
                      index: idx,
                      text: idx.toString(),
                    };
                  })}
                callback={(questionIdx, answerIdx) => {
                  if (questions[questionIdx] === answerIdx) {
                    setQuestions({ ...questions, [questionIdx]: null });
                  } else {
                    setQuestions({ ...questions, [questionIdx]: answerIdx });
                  }
                }}
                hasAnswer={
                  questions[4] ===
                  countPolyclonalAlleles(
                    [cloneRowsMHPs[2].vals, cloneRowsMHPs[3].vals],
                    [cloneRowsMHPs[1].vals],
                  ).length
                }
                headerText="How many of the loci match?"
                questionIdx={4}
              />
              {questions[4] ===
                countPolyclonalAlleles(
                  [cloneRowsMHPs[2].vals, cloneRowsMHPs[3].vals],
                  [cloneRowsMHPs[1].vals],
                ).length && (
                <KnowledgeCheckQuestion
                  classNames={{
                    container: "fadeIn500",
                    headerText: "mb-4",
                    answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                    answers: "w-4 md:w-3 lg:w-4",
                  }}
                  answers={Array(13)
                    .fill(0)
                    .map((el, idx) => {
                      return {
                        checked: questions[5] === idx,
                        correct:
                          countPolyclonalAlleles(
                            [cloneRowsMHPs[2].vals, cloneRowsMHPs[3].vals],
                            [cloneRowsMHPs[1].vals],
                          ).length === idx,
                        index: idx,
                        text: idx.toString() + "/12",
                      };
                    })}
                  callback={(questionIdx, answerIdx) => {
                    if (questions[questionIdx] === answerIdx) {
                      setQuestions({ ...questions, [questionIdx]: null });
                    } else {
                      setQuestions({ ...questions, [questionIdx]: answerIdx });
                    }
                  }}
                  hasAnswer={
                    questions[5] ===
                    countPolyclonalAlleles(
                      [cloneRowsMHPs[2].vals, cloneRowsMHPs[3].vals],
                      [cloneRowsMHPs[1].vals],
                    ).length
                  }
                  headerText="What is the IBS for these two samples?"
                  questionIdx={5}
                />
              )}
              {questions[5] ===
                countPolyclonalAlleles(
                  [cloneRowsMHPs[2].vals, cloneRowsMHPs[3].vals],
                  [cloneRowsMHPs[1].vals],
                ).length && (
                <KnowledgeCheckQuestion
                  classNames={{
                    container: "fadeIn500",
                    headerText: "mb-4",
                    answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                    answers: "w-4 md:w-3 lg:w-4",
                  }}
                  answers={Array(13)
                    .fill(0)
                    .map((el, idx) => {
                      return {
                        checked: questions[6] === idx,
                        correct: idx === 0,
                        index: idx,
                        text: idx.toString() + "/12",
                      };
                    })}
                  callback={(questionIdx, answerIdx) => {
                    if (questions[questionIdx] === answerIdx) {
                      setQuestions({ ...questions, [questionIdx]: null });
                    } else {
                      setQuestions({ ...questions, [questionIdx]: answerIdx });
                    }
                  }}
                  hasAnswer={questions[6] === 0}
                  headerText="What is the IBD for these two samples?"
                  questionIdx={6}
                />
              )}
            </div>
          </div>
        ) : phase === 11 ? (
          <div className="fadeIn500 md:row-span-2">
            <FormHeader text="Questions" />
            <div className="flex flex-col gap-8">
              <KnowledgeCheckQuestion
                classNames={{
                  headerText: "mb-4",
                  answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                  answers: "w-4 md:w-3 lg:w-4",
                }}
                answers={Array(13)
                  .fill(0)
                  .map((el, idx) => {
                    return {
                      checked: questions[9] === idx,
                      correct: 12 === idx,
                      index: idx,
                      text: idx.toString(),
                    };
                  })}
                callback={(questionIdx, answerIdx) => {
                  if (questions[questionIdx] === answerIdx) {
                    setQuestions({ ...questions, [questionIdx]: null });
                  } else {
                    setQuestions({ ...questions, [questionIdx]: answerIdx });
                  }
                }}
                hasAnswer={questions[9] === 12}
                headerText="How many of the loci match?"
                questionIdx={9}
              />
              {questions[9] === 12 && (
                <KnowledgeCheckQuestion
                  classNames={{
                    container: "fadeIn500",
                    headerText: "mb-4",
                    answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                    answers: "w-4 md:w-3 lg:w-4",
                  }}
                  answers={Array(13)
                    .fill(0)
                    .map((el, idx) => {
                      return {
                        checked: questions[10] === idx,
                        correct: 12 === idx,
                        index: idx,
                        text: idx.toString() + "/12",
                      };
                    })}
                  callback={(questionIdx, answerIdx) => {
                    if (questions[questionIdx] === answerIdx) {
                      setQuestions({ ...questions, [questionIdx]: null });
                    } else {
                      setQuestions({ ...questions, [questionIdx]: answerIdx });
                    }
                  }}
                  hasAnswer={questions[10] === 12}
                  headerText="What is the IBS for these two samples?"
                  questionIdx={10}
                />
              )}
              {questions[10] === 12 && (
                <KnowledgeCheckQuestion
                  classNames={{
                    container: "fadeIn500",
                    headerText: "mb-4",
                    answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                    answers: "w-4 md:w-3 lg:w-4",
                  }}
                  answers={Array(13)
                    .fill(0)
                    .map((el, idx) => {
                      return {
                        checked: questions[11] === idx,
                        correct: idx === 12,
                        index: idx,
                        text: idx.toString() + "/12",
                      };
                    })}
                  callback={(questionIdx, answerIdx) => {
                    if (questions[questionIdx] === answerIdx) {
                      setQuestions({ ...questions, [questionIdx]: null });
                    } else {
                      setQuestions({ ...questions, [questionIdx]: answerIdx });
                    }
                  }}
                  hasAnswer={questions[11] === 12}
                  headerText="What is the IBD for these two samples?"
                  questionIdx={11}
                />
              )}
            </div>
          </div>
        ) : phase === 15 ? (
          <div className="fadeIn500 md:row-span-2">
            <FormHeader text="Questions" />
            <div className="flex flex-col gap-8">
              <KnowledgeCheckQuestion
                classNames={{
                  headerText: "mb-4",
                  answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                  answers: "w-4 md:w-3 lg:w-4",
                }}
                answers={Array(13)
                  .fill(0)
                  .map((el, idx) => {
                    return {
                      checked: questions[12] === idx,
                      correct: 12 === idx,
                      index: idx,
                      text: idx.toString(),
                    };
                  })}
                callback={(questionIdx, answerIdx) => {
                  if (questions[questionIdx] === answerIdx) {
                    setQuestions({ ...questions, [questionIdx]: null });
                  } else {
                    setQuestions({ ...questions, [questionIdx]: answerIdx });
                  }
                }}
                hasAnswer={questions[12] === 12}
                headerText="How many of the loci match?"
                questionIdx={12}
              />
              {questions[12] === 12 && (
                <KnowledgeCheckQuestion
                  classNames={{
                    container: "fadeIn500",
                    headerText: "mb-4",
                    answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                    answers: "w-4 md:w-3 lg:w-4",
                  }}
                  answers={Array(13)
                    .fill(0)
                    .map((el, idx) => {
                      return {
                        checked: questions[13] === idx,
                        correct: 12 === idx,
                        index: idx,
                        text: idx.toString() + "/12",
                      };
                    })}
                  callback={(questionIdx, answerIdx) => {
                    if (questions[questionIdx] === answerIdx) {
                      setQuestions({ ...questions, [questionIdx]: null });
                    } else {
                      setQuestions({ ...questions, [questionIdx]: answerIdx });
                    }
                  }}
                  hasAnswer={questions[13] === 12}
                  headerText="What is the IBS for these two samples?"
                  questionIdx={13}
                />
              )}
              {/* {questions[10] === 12 && (
                <KnowledgeCheckQuestion
                  classNames={{
                    container: "fadeIn500",
                    headerText: "mb-4",
                    answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                    answers: "w-4 md:w-3 lg:w-4",
                  }}
                  answers={Array(13)
                    .fill(0)
                    .map((el, idx) => {
                      return {
                        checked: questions[11] === idx,
                        correct: idx === 12,
                        index: idx,
                        text: idx.toString() + "/12",
                      };
                    })}
                  callback={(questionIdx, answerIdx) => {
                    if (questions[questionIdx] === answerIdx) {
                      setQuestions({ ...questions, [questionIdx]: null });
                    } else {
                      setQuestions({ ...questions, [questionIdx]: answerIdx });
                    }
                  }}
                  hasAnswer={questions[11] === 12}
                  headerText="What is the IBD for these two samples?"
                  questionIdx={11}
                />
              )} */}
            </div>
          </div>
        ) : (
          <div></div>
        )
      }
      topLeft={
        <div>
          <FormHeader text="Polyclonal Genotype Comparisons" />
          {
            <div className="grid max-w-[500px] gap-1 [grid-template-columns:8%_auto]">
              <div className="col-start-2 grid grid-cols-12 place-items-center text-xs">
                {Array(12)
                  .fill(0)
                  .map((el, idx) => {
                    return (
                      <span className="first-letter:text-sm" key={idx}>
                        L{idx + 1}
                      </span>
                    );
                  })}
              </div>
            </div>
          }
          {
            <div>
              {phase < 6 && <RedBlueGenotype className="" />}
              {phase >= 6 && phase < 10 && <BlueGreenGenotype className="" />}
              {phase >= 10 && phase < 16 && <RedBlueGenotype className="" />}

              <GenotypeComparator
                vals={
                  phase === 14 || phase === 15
                    ? identicalGenotype2
                    : phase === 10 || phase === 11
                      ? identicalGenotype
                      : undefined
                }
                setter={
                  phase === 14 || phase === 15
                    ? (idx) => {
                        let newGenotype = [...identicalGenotype2];
                        newGenotype[idx] = !newGenotype[idx];
                        setIdenticalGenotype2(newGenotype);
                      }
                    : phase === 10 || phase === 11
                      ? (idx) => {
                          let newGenotype = [...identicalGenotype];
                          newGenotype[idx] = !newGenotype[idx];
                          setIdenticalGenotype(newGenotype);
                        }
                      : undefined
                }
                currentClone={currentClone}
                activeCombo={[
                  JSON.stringify([first, second]),
                  phase === 57 ? 3 : 1,
                ]}
              />
            </div>
          }
        </div>
      }
      bottomLeft={
        <div>
          {
            <QuestionResponseText
              complete={completion[phase]}
              trigger={
                phase === 5
                  ? questions[3] === 0
                  : phase === 7
                    ? questions[6] === 0
                    : phase === 11
                      ? questions[11] === 12
                      : phase === 15
                        ? questions[13] === 12
                        : undefined
              }
              visible={
                (phase === 5 && questions[3] === 0) ||
                (phase === 7 && questions[6] === 0) ||
                (phase === 11 && questions[11] === 12) ||
                (phase === 15 && questions[13] === 12)
              }
              text={
                phase === 5
                  ? `Even though the number of matches may be higher than before
          since one of your samples is polyclonal, it does not change
          the fact that none of the parasites between the two samples
          are related by ancestry. Since they are completely unrelated,
          IBD is 0.`
                  : phase === 7
                    ? "The same as the previous comparison - Since they are completely unrelated, IBD is 0"
                    : phase === 11
                      ? "You have a genetically identical parasite in both samples – clone 1 (the red color parasite), so IBD is 1.0 or 100%."
                      : phase === 15
                        ? "You should have found that IBS is 1.0 - is this what you expected?"
                        : undefined
              }
            />
          }
        </div>
      }
    >
      {phase === 5 && (
        <div className="fadeIn500">
          <FormHeader text="Questions" />
          <div className="flex flex-col gap-8">
            <KnowledgeCheckQuestion
              classNames={{
                headerText: "mb-4",
                answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                answers: "w-4 md:w-3 lg:w-4",
              }}
              answers={Array(13)
                .fill(0)
                .map((el, idx) => {
                  return {
                    checked: questions[1] === idx,
                    correct:
                      countPolyclonalAlleles(
                        [cloneRowsMHPs[1].vals, cloneRowsMHPs[2].vals],
                        [cloneRowsMHPs[3].vals],
                      ).length === idx,
                    index: idx,
                    text: idx.toString(),
                  };
                })}
              callback={(questionIdx, answerIdx) => {
                if (questions[questionIdx] === answerIdx) {
                  setQuestions({ ...questions, [questionIdx]: null });
                } else {
                  setQuestions({ ...questions, [questionIdx]: answerIdx });
                }
              }}
              hasAnswer={
                questions[1] ===
                countPolyclonalAlleles(
                  [cloneRowsMHPs[1].vals, cloneRowsMHPs[2].vals],
                  [cloneRowsMHPs[3].vals],
                ).length
              }
              headerText="How many of the loci match?"
              questionIdx={1}
            />
            {questions[1] ===
              countPolyclonalAlleles(
                [cloneRowsMHPs[1].vals, cloneRowsMHPs[2].vals],
                [cloneRowsMHPs[3].vals],
              ).length && (
              <KnowledgeCheckQuestion
                classNames={{
                  container: "fadeIn500",
                  headerText: "mb-4",
                  answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                  answers: "w-4 md:w-3 lg:w-4",
                }}
                answers={Array(13)
                  .fill(0)
                  .map((el, idx) => {
                    return {
                      checked: questions[2] === idx,
                      correct:
                        countPolyclonalAlleles(
                          [cloneRowsMHPs[1].vals, cloneRowsMHPs[2].vals],
                          [cloneRowsMHPs[3].vals],
                        ).length === idx,
                      index: idx,
                      text: idx.toString() + "/12",
                    };
                  })}
                callback={(questionIdx, answerIdx) => {
                  if (questions[questionIdx] === answerIdx) {
                    setQuestions({ ...questions, [questionIdx]: null });
                  } else {
                    setQuestions({ ...questions, [questionIdx]: answerIdx });
                  }
                }}
                hasAnswer={
                  countPolyclonalAlleles(
                    [cloneRowsMHPs[1].vals, cloneRowsMHPs[2].vals],
                    [cloneRowsMHPs[3].vals],
                  ).length === questions[2]
                }
                headerText="What is the IBS for these two samples?"
                questionIdx={2}
              />
            )}
            {countPolyclonalAlleles(
              [cloneRowsMHPs[1].vals, cloneRowsMHPs[2].vals],
              [cloneRowsMHPs[3].vals],
            ).length === questions[2] && (
              <KnowledgeCheckQuestion
                classNames={{
                  container: "fadeIn500",
                  headerText: "mb-4",
                  answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                  answers: "w-4 md:w-3 lg:w-4",
                }}
                answers={Array(13)
                  .fill(0)
                  .map((el, idx) => {
                    return {
                      checked: questions[3] === idx,
                      correct: idx === 0,
                      index: idx,
                      text: idx.toString() + "/12",
                    };
                  })}
                callback={(questionIdx, answerIdx) => {
                  if (questions[questionIdx] === answerIdx) {
                    setQuestions({ ...questions, [questionIdx]: null });
                  } else {
                    setQuestions({ ...questions, [questionIdx]: answerIdx });
                  }
                }}
                hasAnswer={questions[3] === 0}
                headerText="What is the IBD for these two samples?"
                questionIdx={3}
              />
            )}
          </div>
        </div>
      )}
      {/* {phase === 7 && (
        <div className="fadeIn500">
          <FormHeader text="Questions" />
          <div className="flex flex-col gap-8">
            <KnowledgeCheckQuestion
              classNames={{
                headerText: "mb-4",
                answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                answers: "w-4 md:w-3 lg:w-4",
              }}
              answers={Array(13)
                .fill(0)
                .map((el, idx) => {
                  return {
                    checked: questions[4] === idx,
                    correct:
                      countPolyclonalAlleles(
                        [cloneRowsMHPs[2].vals, cloneRowsMHPs[3].vals],
                        [cloneRowsMHPs[1].vals],
                      ).length === idx,
                    index: idx,
                    text: idx.toString(),
                  };
                })}
              callback={(questionIdx, answerIdx) => {
                if (questions[questionIdx] === answerIdx) {
                  setQuestions({ ...questions, [questionIdx]: null });
                } else {
                  setQuestions({ ...questions, [questionIdx]: answerIdx });
                }
              }}
              hasAnswer={
                questions[4] ===
                countPolyclonalAlleles(
                  [cloneRowsMHPs[2].vals, cloneRowsMHPs[3].vals],
                  [cloneRowsMHPs[1].vals],
                ).length
              }
              headerText="How many of the loci match?"
              questionIdx={4}
            />
            <KnowledgeCheckQuestion
              classNames={{
                headerText: "mb-4",
                answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                answers: "w-4 md:w-3 lg:w-4",
              }}
              answers={Array(13)
                .fill(0)
                .map((el, idx) => {
                  return {
                    checked: questions[5] === idx,
                    correct:
                      countPolyclonalAlleles(
                        [cloneRowsMHPs[2].vals, cloneRowsMHPs[3].vals],
                        [cloneRowsMHPs[1].vals],
                      ).length === idx,
                    index: idx,
                    text: idx.toString() + "/12",
                  };
                })}
              callback={(questionIdx, answerIdx) => {
                if (questions[questionIdx] === answerIdx) {
                  setQuestions({ ...questions, [questionIdx]: null });
                } else {
                  setQuestions({ ...questions, [questionIdx]: answerIdx });
                }
              }}
              hasAnswer={
                questions[5] ===
                countPolyclonalAlleles(
                  [cloneRowsMHPs[2].vals, cloneRowsMHPs[3].vals],
                  [cloneRowsMHPs[1].vals],
                ).length
              }
              headerText="What is the IBS for these two samples?"
              questionIdx={5}
            />
            <KnowledgeCheckQuestion
              classNames={{
                headerText: "mb-4",
                answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                answers: "w-4 md:w-3 lg:w-4",
              }}
              answers={Array(13)
                .fill(0)
                .map((el, idx) => {
                  return {
                    checked: questions[6] === idx,
                    correct: idx === 0,
                    index: idx,
                    text: idx.toString() + "/12",
                  };
                })}
              callback={(questionIdx, answerIdx) => {
                if (questions[questionIdx] === answerIdx) {
                  setQuestions({ ...questions, [questionIdx]: null });
                } else {
                  setQuestions({ ...questions, [questionIdx]: answerIdx });
                }
              }}
              hasAnswer={questions[6] === 0}
              headerText="What is the IBD for these two samples?"
              questionIdx={6}
            />
            {questions[6] === 0 && (
              <div className="fadeIn500 bg-primaryBlue/10 p-4 lg:p-8">
                <p>
                  Even though the number of matches may be higher than before
                  since one of your samples is polyclonal, it does not change
                  the fact that none of the parasites between the two samples
                  are related by ancestry. Since they are completely unrelated,
                  IBD is 0.
                </p>
              </div>
            )}
          </div>
        </div>
      )} */}
      {phase === 59 && (
        <div>
          <div className="mb-8 text-center text-xl font-bold md:text-left">
            <h2>Questions</h2>
          </div>
          <div className="flex flex-col gap-8">
            <KnowledgeCheckQuestion
              classNames={{
                headerText: "mb-4",
                answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                answers: "w-4 md:w-3 lg:w-4",
              }}
              answers={Array(13)
                .fill(0)
                .map((el, idx) => {
                  return {
                    checked: questions[9] === idx,
                    correct: idx === 12,
                    index: idx,
                    text: idx.toString(),
                  };
                })}
              callback={(questionIdx, answerIdx) => {
                if (questions[questionIdx] === answerIdx) {
                  setQuestions({ ...questions, [questionIdx]: null });
                } else {
                  setQuestions({ ...questions, [questionIdx]: answerIdx });
                }
              }}
              hasAnswer={questions[9] === 12}
              headerText="How many of the loci match?"
              questionIdx={9}
            />
            <KnowledgeCheckQuestion
              classNames={{
                headerText: "mb-4",
                answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                answers: "w-4 md:w-3 lg:w-4",
              }}
              answers={Array(13)
                .fill(0)
                .map((el, idx) => {
                  return {
                    checked: questions[10] === idx,
                    correct: idx === 12,
                    index: idx,
                    text: idx.toString() + "/12",
                  };
                })}
              callback={(questionIdx, answerIdx) => {
                if (questions[questionIdx] === answerIdx) {
                  setQuestions({ ...questions, [questionIdx]: null });
                } else {
                  setQuestions({ ...questions, [questionIdx]: answerIdx });
                }
              }}
              hasAnswer={questions[10] === 12}
              headerText="What is the IBS for these two samples?"
              questionIdx={10}
            />
            <KnowledgeCheckQuestion
              classNames={{
                headerText: "mb-4",
                answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                answers: "w-4 md:w-3 lg:w-4",
              }}
              answers={Array(13)
                .fill(0)
                .map((el, idx) => {
                  return {
                    checked: questions[11] === idx,
                    correct: idx === 12,
                    index: idx,
                    text: idx.toString() + "/12",
                  };
                })}
              callback={(questionIdx, answerIdx) => {
                if (questions[questionIdx] === answerIdx) {
                  setQuestions({ ...questions, [questionIdx]: null });
                } else {
                  setQuestions({ ...questions, [questionIdx]: answerIdx });
                }
              }}
              hasAnswer={questions[11] === 12}
              headerText="What is IBD for these two samples? Since there could be several ways to interpret IBD when samples are polyclonal, let's consider the maximum IBD for any parasites between the 2 samples, i.e. the IBD of the most related parasites."
              questionIdx={11}
            />
            {questions[11] === 12 && (
              <div className="fadeIn500 bg-primaryBlue/10 p-8">
                <p>
                  You have a genetically identical parasite in both samples
                  &ndash; clone 1 (the red color parasite), so IBD is 1.0 or
                  100%. Note that this comparison of lab clones would be similar
                  to a situation in which a person was infected with 2 parasite
                  clones (MOI of 2) and a mosquito passed one of those two
                  clones on to another person, without any recombination
                  occurring. IBD and IBS would both be 1 just like with the lab
                  clones, since one parasite is being passed on from one person
                  to another.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </MultiRowLayout>
  );
}
