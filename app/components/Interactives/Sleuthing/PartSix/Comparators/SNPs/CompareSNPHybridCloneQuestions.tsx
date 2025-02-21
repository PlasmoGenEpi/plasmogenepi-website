"use client";

import CloneElement from "@/app/components/Interactives/Shared/CloneRow/CloneElement";
import CloneRow from "@/app/components/Interactives/Shared/CloneRow/CloneRow";
import KnowledgeCheckQuestion from "@/app/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import { fixedData } from "@/data/Interactives/fixedData";
import {
  activePairwiseComboAtom,
  pairwiseCombosAtom,
  pairwiseCompletionAtom,
  partSixCloneRowsAtom,
  partSixCompletionAtom,
  partSixPairwiseQuestionsAtom,
  phase2Atom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import { RESET } from "jotai/utils";
import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  P6CloneRowButtonColors,
  P6CloneRowColors,
} from "../../CloneRows/P6MHPCloneRows";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";

let randomArr = Array(12)
  .fill(0)
  .map((el, idx) => {
    return Math.random() > 0.5 ? 0 : 1;
  });

export default function CompareSNPHybridCloneQuestions({
  activePairwiseCombo,
}: {
  activePairwiseCombo: [number, number];
}) {
  // const [activePairwiseCombo, setActivePairwiseCombo] = useAtom(
  //   activePairwiseComboAtom,
  // );
  const [partSixPairwiseQuestions, setPartSixPairwiseQuestions] = useAtom(
    partSixPairwiseQuestionsAtom,
  );
  const [pairwiseCombos, setPairwiseCombos] = useAtom(pairwiseCombosAtom);
  const pairwiseCompletion = useAtomValue(pairwiseCompletionAtom);
  const [phase, setPhase] = useAtom(phase2Atom);
  const [completion, setCompletion] = useAtom(partSixCompletionAtom);
  const cloneRows = useAtomValue(partSixCloneRowsAtom);

  const [first, second] = activePairwiseCombo;

  let responseRef = useRef<HTMLDivElement | null>(null);
  let responseRef2 = useRef<HTMLDivElement | null>(null);
  let responseRef3 = useRef<HTMLDivElement | null>(null);

  let correctCount = pairwiseCombos[first][second].filter((val, idx) => {
    return val && val === pairwiseCombos[second][first][idx];
  }).length;

  // useEffect(() => {
  //   setPartSixPairwiseQuestions(RESET);
  //   setCompletion(RESET);
  // }, []);

  // useEffect(() => {
  //   if (
  //     partSixPairwiseQuestions[JSON.stringify(activePairwiseCombo)][3] === 0
  //   ) {
  // window.scrollTo({
  //   top: 1000,
  //   behavior: "smooth",
  // });
  //   }
  // }, [partSixPairwiseQuestions, activePairwiseCombo]);

  return (
    <div>
      <div>
        {
          //@ts-ignore
          pairwiseCompletion[first][second] && (
            <div className=" flex flex-col">
              {/* <FormHeader text={`Questions`} /> */}

              <div className="flex flex-col gap-8">
                <KnowledgeCheckQuestion
                  callback={(questionIdx, answerIdx) => {
                    setPartSixPairwiseQuestions({
                      ...partSixPairwiseQuestions,
                      [JSON.stringify(activePairwiseCombo)]: {
                        ...partSixPairwiseQuestions[
                          JSON.stringify(activePairwiseCombo)
                        ],
                        [questionIdx]:
                          partSixPairwiseQuestions[
                            JSON.stringify(activePairwiseCombo)
                          ][questionIdx] !== answerIdx
                            ? answerIdx
                            : null,
                      },
                    });
                  }}
                  hasAnswer={
                    //@ts-ignore
                    partSixPairwiseQuestions[
                      JSON.stringify(activePairwiseCombo)
                    ][1] === correctCount
                  }
                  headerText="How many of the loci match?"
                  classNames={{
                    container:
                      partSixPairwiseQuestions[
                        JSON.stringify(activePairwiseCombo)
                      ][1] === correctCount
                        ? ""
                        : "fadeIn500",
                    headerText: "mb-4",
                    answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                    answers: "w-4 md:w-3 lg:w-4",
                  }}
                  questionIdx={1}
                  answers={Array(13)
                    .fill(0)
                    .map((el, idx) => {
                      return {
                        checked:
                          idx ===
                          partSixPairwiseQuestions[
                            JSON.stringify(activePairwiseCombo)
                          ][1],
                        correct:
                          idx ===
                          pairwiseCombos[first][second].filter((val, idx) => {
                            return (
                              val && val === pairwiseCombos[second][first][idx]
                            );
                          }).length,
                        index: idx,
                        text: idx.toString(),
                      };
                    })}
                />
                <KnowledgeCheckQuestion
                  callback={(questionIdx, answerIdx) => {
                    setPartSixPairwiseQuestions({
                      ...partSixPairwiseQuestions,
                      [JSON.stringify(activePairwiseCombo)]: {
                        ...partSixPairwiseQuestions[
                          JSON.stringify(activePairwiseCombo)
                        ],
                        [questionIdx]:
                          partSixPairwiseQuestions[
                            JSON.stringify(activePairwiseCombo)
                          ][questionIdx] !== answerIdx
                            ? answerIdx
                            : null,
                      },
                    });
                  }}
                  hasAnswer={
                    //@ts-ignore
                    partSixPairwiseQuestions[
                      JSON.stringify(activePairwiseCombo)
                    ][2] === correctCount
                  }
                  headerText="What is the IBS for these two parasites?"
                  classNames={{
                    container:
                      partSixPairwiseQuestions[
                        JSON.stringify(activePairwiseCombo)
                      ][2] === correctCount
                        ? ""
                        : partSixPairwiseQuestions[
                            JSON.stringify(activePairwiseCombo)
                          ][1] === correctCount
                        ? "fadeIn500"
                        : "hidden",
                    headerText: "mb-4",
                    answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                    answers: "w-4 md:w-3 lg:w-4",
                  }}
                  questionIdx={2}
                  answers={Array(13)
                    .fill(0)
                    .map((el, idx) => {
                      return {
                        checked:
                          idx ===
                          partSixPairwiseQuestions[
                            JSON.stringify(activePairwiseCombo)
                          ][2],
                        correct:
                          idx ===
                          pairwiseCombos[first][second].filter((val, idx) => {
                            return (
                              val && val === pairwiseCombos[second][first][idx]
                            );
                          }).length,
                        index: idx,
                        text: `${idx.toString()}/12`,
                      };
                    })}
                />
                <KnowledgeCheckQuestion
                  callback={(questionIdx, answerIdx) => {
                    if (
                      ((phase === 12 || phase === 13) && answerIdx === 6) ||
                      (phase === 14 && answerIdx === 0)
                    ) {
                      setTimeout(() => {
                        responseRef.current?.scrollIntoView({
                          block: "center",
                          behavior: "smooth",
                        });
                      }, 100);
                    }
                    setPartSixPairwiseQuestions({
                      ...partSixPairwiseQuestions,
                      [JSON.stringify(activePairwiseCombo)]: {
                        ...partSixPairwiseQuestions[
                          JSON.stringify(activePairwiseCombo)
                        ],
                        3:
                          partSixPairwiseQuestions[
                            JSON.stringify(activePairwiseCombo)
                          ][3] !== answerIdx
                            ? answerIdx
                            : null,
                      },
                    });
                  }}
                  hasAnswer={
                    //@ts-ignore
                    partSixPairwiseQuestions[
                      JSON.stringify(activePairwiseCombo)
                    ][3] === (phase === 14 ? 0 : 6)
                  }
                  headerText="What is the IBD for these two parasites?"
                  classNames={{
                    container:
                      partSixPairwiseQuestions[
                        JSON.stringify(activePairwiseCombo)
                      ][3] === (phase === 14 ? 0 : 6)
                        ? ""
                        : partSixPairwiseQuestions[
                            JSON.stringify(activePairwiseCombo)
                          ][2] === correctCount
                        ? "fadeIn500"
                        : "hidden",
                    headerText: "mb-4",
                    answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                    answers: "w-4 md:w-3 lg:w-4",
                  }}
                  questionIdx={3}
                  answers={Array(13)
                    .fill(0)
                    .map((el, idx) => {
                      return {
                        checked:
                          idx ===
                          partSixPairwiseQuestions[
                            JSON.stringify(activePairwiseCombo)
                          ][3],
                        correct: phase === 14 ? idx === 0 : idx === 6,
                        index: idx,
                        text: `${idx.toString()}/12`,
                      };
                    })}
                />
              </div>
            </div>
          )
        }
      </div>
      {/* <div
        ref={responseRef}
        className={
          partSixPairwiseQuestions[JSON.stringify(activePairwiseCombo)][3] ===
          (phase === 14 ? 0 : 6)
            ? " mt-8 bg-primaryBlue/10 p-8"
            : "invisible  mt-8 bg-primaryBlue/10 p-8"
        }
      >
        {phase === 12 && (
          <p className="text-sm">
            That&apos;s right &ndash; again we have the privilege of knowing the
            true relatedness by ancestry of these lab clones. Since clone 4 is a
            child of clone 1 and shares exactly 50% of it&apos;s genome by
            ancestry &ndash; the red part &ndash; IBD is 0.5 or 50%.
          </p>
        )}
        {phase === 13 && (
          <p className="text-sm">
            That&apos;s right &ndash; Just like before, IBD is 0.5 since the
            hybrid clone shares 50% of its genome with the parent, in this case
            the blue part.
          </p>
        )}
        {phase === 14 && (
          <p className="text-sm">
            That&apos;s right &ndash; again we have the privilege of knowing the
            true relatedness by ancestry of these lab clones. Since clone 4 is
            not a child of clone 3 and shares none of it&apos;s genome by
            ancestry IBD is 0%. This is the same situation as our initial
            comparisons of lab clones 1, 2, and 3.
          </p>
        )}
      </div> */}
      {/* {phase === 13 && (
        <div
          className={
            phase === 13
              ? partSixPairwiseQuestions[
                  JSON.stringify(activePairwiseCombo)
                ][3] === 6
                ? " mt-8"
                : "hidden"
              : "hidden"
          }
        >
          <KnowledgeCheckQuestion
            callback={(questionIdx, answerIdx) => {
              if (answerIdx === 3) {
                responseRef2.current?.scrollIntoView({
                  block: "center",
                  behavior: "smooth",
                });
              }
              // window.scrollTo({
              //   top: 10000,
              //   behavior: "smooth",
              // });
              setPartSixPairwiseQuestions({
                ...partSixPairwiseQuestions,
                [JSON.stringify(activePairwiseCombo)]: {
                  ...partSixPairwiseQuestions[
                    JSON.stringify(activePairwiseCombo)
                  ],
                  4:
                    partSixPairwiseQuestions[
                      JSON.stringify(activePairwiseCombo)
                    ][3] !== answerIdx
                      ? answerIdx
                      : null,
                },
              });
            }}
            hasAnswer={
              //@ts-ignore
              partSixPairwiseQuestions[
                JSON.stringify(activePairwiseCombo)
              ][4] === 3
            }
            headerText="Both of the previous comparisons had the same IBD &ndash; 0.5 &ndash; since the hybrid clone is 50% related to each parent. Did you get the same IBS result each time? What do you think you would find if you did similar experiments looking at other, similarly related clones?"
            classNames={{
              container:
                partSixPairwiseQuestions[
                  JSON.stringify(activePairwiseCombo)
                ][2] === correctCount
                  ? ""
                  : "hidden",
              headerText: "mb-4",
              answersContainer: "grid grid-cols-2 gap-8 md:gap-4",
              answers: "w-4 md:w-3 lg:w-4",
            }}
            questionIdx={4}
            answers={[
              {
                checked:
                  partSixPairwiseQuestions[
                    JSON.stringify(activePairwiseCombo)
                  ][4] === 0,
                correct: false,
                index: 0,
                text: "0, or close to 0 matches",
              },
              {
                checked:
                  partSixPairwiseQuestions[
                    JSON.stringify(activePairwiseCombo)
                  ][4] === 1,
                correct: false,
                index: 1,
                text: "Approximately 25% matches",
              },
              {
                checked:
                  partSixPairwiseQuestions[
                    JSON.stringify(activePairwiseCombo)
                  ][4] === 2,
                correct: false,
                index: 2,
                text: "Approximately 50% matches",
              },
              {
                checked:
                  partSixPairwiseQuestions[
                    JSON.stringify(activePairwiseCombo)
                  ][4] === 3,
                correct: true,
                index: 3,
                text: "Approximately 75% matches",
              },
              {
                checked:
                  partSixPairwiseQuestions[
                    JSON.stringify(activePairwiseCombo)
                  ][4] === 4,
                correct: false,
                index: 4,
                text: "100%, or close to 100% matches",
              },
            ]}
          />
          <div
            ref={responseRef2}
            className={`${phase !== 13 ? "hidden" : ""} ${
              partSixPairwiseQuestions[
                JSON.stringify(activePairwiseCombo)
              ][4] === 3
                ? ""
                : "invisible"
            } mt-8 bg-primaryBlue/10 p-8 text-sm`}
          >
            <p>
              You would expect them to have roughly the same IBS, around 9/12 or
              75%. SNPs in the related half of the genome should always match
              perfectly, unless there are mutations or genotyping errors.
              However, since matches in the unrelated part are random, the
              overall number of matches can vary.
            </p>
            {phase === 13 && (
              <div className="mt-8 hidden p-4 text-center outline outline-2 outline-primaryBlue sm:block md:hidden">
                <Image
                  className="max-w-full"
                  src={"/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.5.svg"}
                  height={400}
                  width={600}
                  alt="SNP IBD 75/25% distribution diagram"
                />
              </div>
            )}
            <p className="hidden sm:mt-8 sm:block">
              Most of the time, we expect to see somewhere between 7 and 11
              matches, but we may get 12/12 matches about 2% of the time. In all
              of these cases, IBD would be 0.5, but IBS could vary from 0.5 to
              1.0 due to chance.
            </p>
          </div>
          {phase === 13 && (
            <div>
              <div className="mt-8 block p-4 text-center outline outline-2 outline-primaryBlue sm:hidden">
                <Image
                  src={"/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.5.svg"}
                  className="max-w-full"
                  height={400}
                  width={600}
                  alt="SNP IBD 75/25% distribution diagram"
                />
              </div>
              <div className="mt-8 bg-primaryBlue/10 p-8 sm:hidden">
                <p className="text-sm">
                  Most of the time, we expect to see somewhere between 7 and 11
                  matches, but we may get 12/12 matches about 2% of the time. In
                  all of these cases, IBD would be 0.5, but IBS could vary from
                  0.5 to 1.0 due to chance.
                </p>
              </div>
            </div>
          )}
        </div>
      )} */}
      {/* {phase === 14 &&
        partSixPairwiseQuestions[JSON.stringify(activePairwiseCombo)][3] ===
          0 && (
          <div ref={responseRef3} className=" mt-8">
            <p>
              At the other extreme, what if we compare two parasites which are
              completely related to each other, in other words they are
              genetically identical?
            </p>
            <div className=" mt-8  flex max-w-[500px] origin-top scale-90 flex-col gap-1 p-2 md:scale-75">
              <CloneRow
                label={"X"}
                classNames={{
                  button:
                    "bg-radial-gradient from-white via-[white_20%] to-cloneOrange",
                  row: "bg-cloneOrange",
                }}
              >
                {randomArr.map((val, idx) => {
                  return (
                    <CloneElement
                      className="bg-white"
                      key={idx}
                      possibleValues={{
                        reference: fixedData[6].refValues[idx],
                        alternate: fixedData[6].altValues[idx],
                      }}
                      val={val}
                    />
                  );
                })}
              </CloneRow>
              <CloneRow
                label={"X"}
                classNames={{
                  button:
                    "bg-radial-gradient from-white via-[white_20%] to-cloneOrange",
                  row: "bg-cloneOrange",
                }}
              >
                {randomArr.map((val, idx) => {
                  return (
                    <CloneElement
                      className="bg-white"
                      key={idx}
                      possibleValues={{
                        reference: fixedData[6].refValues[idx],
                        alternate: fixedData[6].altValues[idx],
                      }}
                      val={val}
                    />
                  );
                })}
              </CloneRow>
            </div>
            <div className="mt-4 flex flex-col gap-8">
              <KnowledgeCheckQuestion
                classNames={{
                  headerText: "mb-4",
                  answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                  answers: "w-4 md:w-3 lg:w-4",
                  container: "mt-8",
                }}
                answers={Array(13)
                  .fill(0)
                  .map((el, idx) => {
                    return {
                      checked:
                        partSixPairwiseQuestions[JSON.stringify([3, 4])][4] ===
                        idx,
                      correct: idx === 12,
                      index: idx,
                      text: idx.toString() + "/12",
                    };
                  })}
                callback={(questionIdx, answerIdx) => {
                  // setTimeout(() => {
                  //   responseRef.current?.scrollIntoView({
                  //     block: "center",
                  //     behavior: "smooth",
                  //   });
                  // }, 100);
                  if (answerIdx === 12) {
                    setTimeout(() => {
                      window.scrollTo({
                        top: 10000,
                        behavior: "smooth",
                      });
                    }, 100);
                  }
                  setPartSixPairwiseQuestions({
                    ...partSixPairwiseQuestions,
                    [JSON.stringify(activePairwiseCombo)]: {
                      ...partSixPairwiseQuestions[
                        JSON.stringify(activePairwiseCombo)
                      ],
                      4:
                        partSixPairwiseQuestions[
                          JSON.stringify(activePairwiseCombo)
                        ][4] !== answerIdx
                          ? answerIdx
                          : null,
                    },
                  });
                }}
                hasAnswer={
                  partSixPairwiseQuestions[JSON.stringify([3, 4])][4] === 12
                }
                headerText="What is the IBS in this case?"
                questionIdx={4}
              />
              <KnowledgeCheckQuestion
                classNames={{
                  headerText: "mb-4",
                  answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                  answers: "w-4 md:w-3 lg:w-4",
                  container:
                    partSixPairwiseQuestions[JSON.stringify([3, 4])][4] === 12
                      ? ""
                      : "hidden",
                }}
                answers={Array(13)
                  .fill(0)
                  .map((el, idx) => {
                    return {
                      checked:
                        partSixPairwiseQuestions[JSON.stringify([3, 4])][5] ===
                        idx,
                      correct: idx === 12,
                      index: idx,
                      text: idx.toString() + "/12",
                    };
                  })}
                callback={(questionIdx, answerIdx) => {
                  // setTimeout(() => {
                  //   responseRef.current?.scrollIntoView({
                  //     block: "center",
                  //     behavior: "smooth",
                  //   });
                  // }, 100);
                  if (answerIdx === 12) {
                    setTimeout(() => {
                      window.scrollTo({
                        top: 10000,
                        behavior: "smooth",
                      });
                    }, 100);
                  }
                  setPartSixPairwiseQuestions({
                    ...partSixPairwiseQuestions,
                    [JSON.stringify(activePairwiseCombo)]: {
                      ...partSixPairwiseQuestions[
                        JSON.stringify(activePairwiseCombo)
                      ],
                      5:
                        partSixPairwiseQuestions[
                          JSON.stringify(activePairwiseCombo)
                        ][5] !== answerIdx
                          ? answerIdx
                          : null,
                    },
                  });
                }}
                hasAnswer={
                  partSixPairwiseQuestions[JSON.stringify([3, 4])][5] === 12
                }
                headerText="What is the IBD?"
                questionIdx={5}
              />
            </div>
          </div>
        )}
      {phase === 14 &&
        partSixPairwiseQuestions[JSON.stringify([3, 4])][5] === 12 && (
          <div className="mt-8">
            <div className=" mt-8 p-4 outline outline-2 outline-primaryBlue md:hidden">
              <Image
                src="/assets/M5_sluething_histogram_SNPs_MOI1_IBD1.svg"
                alt="SNP IBD 100% match distribution diagram"
                className="max-w-full"
                width={600}
                s
                height={400}
              ></Image>
            </div>
            <div className="mt-8 bg-primaryBlue/10 p-4 md:p-8">
              <p className="text-sm">
                That&apos;s right &ndash; if the parasites are identical, the
                entire genome is related, so IBD is 100% or 1.0, and all the
                loci will match. As long as your genotyping is accurate, you
                will get 12/12 matches every time!
              </p>
            </div>
          </div>
        )} */}
    </div>
  );
}
