"use client";

import KnowledgeCheckQuestion from "@/app/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";
import {
  activePairwiseComboAtom,
  pairwiseCombosAtom,
  pairwiseCompletionAtom,
  partSixPairwiseQuestionsAtom,
  phase2Atom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";

export default function CompareSNPSingleCloneQuestions() {
  const [activePairwiseCombo, setActivePairwiseCombo] = useAtom(
    activePairwiseComboAtom,
  );
  const [partSixPairwiseQuestions, setPartSixPairwiseQuestions] = useAtom(
    partSixPairwiseQuestionsAtom,
  );
  const [pairwiseCombos, setPairwiseCombos] = useAtom(pairwiseCombosAtom);
  const pairwiseCompletion = useAtomValue(pairwiseCompletionAtom);
  const [phase, setPhase] = useAtom(phase2Atom);

  let correctCount = pairwiseCombos[activePairwiseCombo[0]][
    activePairwiseCombo[1]
  ].filter((val, idx) => {
    return (
      val &&
      val ===
        pairwiseCombos[activePairwiseCombo[1]][activePairwiseCombo[0]][idx]
    );
  }).length;

  // useEffect(() => {
  //   setActivePairwiseCombo([1, 2]);
  //   setPhase(3);
  // }, [setActivePairwiseCombo, setPhase]);

  // useEffect(() => {
  //   if (
  //     partSixPairwiseQuestions[JSON.stringify(activePairwiseCombo)][3] === 0
  //   ) {
  //     window.scrollTo({
  //       top: 1000,
  //       behavior: "smooth",
  //     });
  //   }
  // }, [partSixPairwiseQuestions, activePairwiseCombo]);

  return (
    <div>
      <div>
        {
          //@ts-ignore
          pairwiseCompletion[activePairwiseCombo[0]][
            activePairwiseCombo[1]
          ] && (
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
                    container: `${
                      partSixPairwiseQuestions[
                        JSON.stringify(activePairwiseCombo)
                      ][1] !== correctCount
                        ? "fadeIn500"
                        : ""
                    }`,
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
                          pairwiseCombos[activePairwiseCombo[0]][
                            activePairwiseCombo[1]
                          ].filter((val, idx) => {
                            return (
                              val &&
                              val ===
                                pairwiseCombos[activePairwiseCombo[1]][
                                  activePairwiseCombo[0]
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
                          pairwiseCombos[activePairwiseCombo[0]][
                            activePairwiseCombo[1]
                          ].filter((val, idx) => {
                            return (
                              val &&
                              val ===
                                pairwiseCombos[activePairwiseCombo[1]][
                                  activePairwiseCombo[0]
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
                    window.scrollTo({
                      top: 10000,
                      behavior: "smooth",
                    });
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
                    ][3] === 0
                  }
                  headerText="What is the IBD for these two parasites?"
                  classNames={{
                    container:
                      partSixPairwiseQuestions[
                        JSON.stringify(activePairwiseCombo)
                      ][3] === 0
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
                        correct: idx === 0,
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
    </div>
  );
}
