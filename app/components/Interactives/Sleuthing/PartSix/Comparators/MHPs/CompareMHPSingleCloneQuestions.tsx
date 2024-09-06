"use client";

import KnowledgeCheckQuestion from "@/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import FormHeader from "@/components/Interactives/Shared/misc/FormHeader";
import {
  activePairwiseMHPsComboAtom,
  pairwiseCombosMHPsAtom,
  pairwiseMHPCompletionAtom,
  partSixMHPPairwiseQuestionsAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import { RESET } from "jotai/utils";
import { useEffect } from "react";

export default function CompareMHPSingleCloneQuestions() {
  const [activePairwiseMHPsCombo, setActivePairwiseMHPsCombo] = useAtom(
    activePairwiseMHPsComboAtom,
  );
  const [partSixMHPPairwiseQuestions, setPartSixMHPPairwiseQuestions] = useAtom(
    partSixMHPPairwiseQuestionsAtom,
  );
  const [pairwiseCombosMHPs, setPairwiseCombosMHPs] = useAtom(
    pairwiseCombosMHPsAtom,
  );
  const [pairwiseMHPCompletion, setPairwiseMHPCompletion] = useAtom(
    pairwiseMHPCompletionAtom,
  );
  const [phase, setPhase] = useAtom(phaseAtom);

  let correctCount = pairwiseCombosMHPs[activePairwiseMHPsCombo[0]][
    activePairwiseMHPsCombo[1]
  ].filter((val, idx) => {
    return (
      val &&
      val ===
        pairwiseCombosMHPs[activePairwiseMHPsCombo[1]][
          activePairwiseMHPsCombo[0]
        ][idx]
    );
  }).length;

  useEffect(() => {
    if (phase === 23) {
      setActivePairwiseMHPsCombo([1, 2]);
    } else if (phase === 24) {
      setActivePairwiseMHPsCombo([1, 3]);
    } else if (phase === 25) {
      setActivePairwiseMHPsCombo([2, 3]);
    }
  }, [phase]);

  return (
    <div>
      {
        //@ts-ignore
        pairwiseMHPCompletion[activePairwiseMHPsCombo[0]][
          activePairwiseMHPsCombo[1]
        ] && (
          <div className="fadeIn500">
            <FormHeader text={`Questions`} />

            <div className="flex flex-col gap-8">
              <KnowledgeCheckQuestion
                callback={(questionIdx, answerIdx) => {
                  setPartSixMHPPairwiseQuestions({
                    ...partSixMHPPairwiseQuestions,
                    [JSON.stringify(activePairwiseMHPsCombo)]: {
                      ...partSixMHPPairwiseQuestions[
                        JSON.stringify(activePairwiseMHPsCombo)
                      ],
                      [questionIdx]:
                        partSixMHPPairwiseQuestions[
                          JSON.stringify(activePairwiseMHPsCombo)
                        ][questionIdx] !== answerIdx
                          ? answerIdx
                          : null,
                    },
                  });
                }}
                hasAnswer={
                  //@ts-ignore
                  partSixMHPPairwiseQuestions[
                    JSON.stringify(activePairwiseMHPsCombo)
                  ][1] === correctCount
                }
                headerText="How many of the loci match?"
                classNames={{
                  headerText: "mb-4",
                  answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                  answers: "w-4 md:w-3 lg:w-4",
                }}
                questionIdx={1}
                answers={Array(12)
                  .fill(0)
                  .map((el, idx) => {
                    return {
                      checked:
                        idx ===
                        partSixMHPPairwiseQuestions[
                          JSON.stringify(activePairwiseMHPsCombo)
                        ][1],
                      correct:
                        idx ===
                        pairwiseCombosMHPs[activePairwiseMHPsCombo[0]][
                          activePairwiseMHPsCombo[1]
                        ].filter((val, idx) => {
                          return (
                            val &&
                            val ===
                              pairwiseCombosMHPs[activePairwiseMHPsCombo[1]][
                                activePairwiseMHPsCombo[0]
                              ][idx]
                          );
                        }).length,
                      index: idx,
                      text: idx.toString(),
                    };
                  })}
              />
              <KnowledgeCheckQuestion
                callback={(questionIdx, answerIdx) => {
                  setPartSixMHPPairwiseQuestions({
                    ...partSixMHPPairwiseQuestions,
                    [JSON.stringify(activePairwiseMHPsCombo)]: {
                      ...partSixMHPPairwiseQuestions[
                        JSON.stringify(activePairwiseMHPsCombo)
                      ],
                      [questionIdx]:
                        partSixMHPPairwiseQuestions[
                          JSON.stringify(activePairwiseMHPsCombo)
                        ][questionIdx] !== answerIdx
                          ? answerIdx
                          : null,
                    },
                  });
                }}
                hasAnswer={
                  //@ts-ignore
                  partSixMHPPairwiseQuestions[
                    JSON.stringify(activePairwiseMHPsCombo)
                  ][2] === correctCount
                }
                headerText="What is the IBS for these two parasites?"
                classNames={{
                  container:
                    partSixMHPPairwiseQuestions[
                      JSON.stringify(activePairwiseMHPsCombo)
                    ][1] === correctCount
                      ? "fadeIn500"
                      : "hidden",
                  headerText: "mb-4",
                  answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                  answers: "w-4 md:w-3 lg:w-4",
                }}
                questionIdx={2}
                answers={Array(12)
                  .fill(0)
                  .map((el, idx) => {
                    return {
                      checked:
                        idx ===
                        partSixMHPPairwiseQuestions[
                          JSON.stringify(activePairwiseMHPsCombo)
                        ][2],
                      correct:
                        idx ===
                        pairwiseCombosMHPs[activePairwiseMHPsCombo[0]][
                          activePairwiseMHPsCombo[1]
                        ].filter((val, idx) => {
                          return (
                            val &&
                            val ===
                              pairwiseCombosMHPs[activePairwiseMHPsCombo[1]][
                                activePairwiseMHPsCombo[0]
                              ][idx]
                          );
                        }).length,
                      index: idx,
                      text: `${idx.toString()}/12`,
                    };
                  })}
              />
              <KnowledgeCheckQuestion
                callback={(questionIdx, answerIdx) => {
                  setPartSixMHPPairwiseQuestions({
                    ...partSixMHPPairwiseQuestions,
                    [JSON.stringify(activePairwiseMHPsCombo)]: {
                      ...partSixMHPPairwiseQuestions[
                        JSON.stringify(activePairwiseMHPsCombo)
                      ],
                      3:
                        partSixMHPPairwiseQuestions[
                          JSON.stringify(activePairwiseMHPsCombo)
                        ][3] !== answerIdx
                          ? answerIdx
                          : null,
                    },
                  });
                }}
                hasAnswer={
                  //@ts-ignore
                  partSixMHPPairwiseQuestions[
                    JSON.stringify(activePairwiseMHPsCombo)
                  ][3] === 0
                }
                headerText="What is the IBD for these two parasites?"
                classNames={{
                  container:
                    partSixMHPPairwiseQuestions[
                      JSON.stringify(activePairwiseMHPsCombo)
                    ][2] === correctCount
                      ? "fadeIn500"
                      : "hidden",
                  headerText: "mb-4",
                  answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                  answers: "w-4 md:w-3 lg:w-4",
                }}
                questionIdx={3}
                answers={Array(12)
                  .fill(0)
                  .map((el, idx) => {
                    return {
                      checked:
                        idx ===
                        partSixMHPPairwiseQuestions[
                          JSON.stringify(activePairwiseMHPsCombo)
                        ][3],
                      correct: idx === 0,
                      index: idx,
                      text: `${idx.toString()}/12`,
                    };
                  })}
              />
              {/* <div
                className={
                  partSixMHPPairwiseQuestions[
                    JSON.stringify(activePairwiseMHPsCombo)
                  ][3] === 0
                    ? "fadeIn500 bg-primaryBlue/10 p-4 text-sm md:p-6"
                    : "invisible bg-primaryBlue/10 p-4 text-sm md:p-6"
                }
              >
                <p>
                  IBD will be the same for all of the comparisons as before.
                  But, IBS will be on average lower, since there is a 1/8 chance
                  of matching at each loci instead of 1/2.
                </p>
              </div> */}
            </div>
          </div>
        )
      }
    </div>
  );
}
