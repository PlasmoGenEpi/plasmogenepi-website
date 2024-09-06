import KnowledgeCheckQuestion from "@/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import FormHeader from "@/components/Interactives/Shared/misc/FormHeader";
import {
  pairwiseCombosMHPsAtom,
  pairwiseMHPCompletionAtom,
  partSixMHPPairwiseQuestionsAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import { atomWithStorage } from "jotai/utils";
import Image from "next/image";

export const finalHybridQAtom = atomWithStorage<null | number>(
  "finalHybridQAtom",
  null,
);

export default function CompareMHPHybridCloneQuestions({
  activePairwiseCombo,
}: {
  activePairwiseCombo: [number, number];
}) {
  const phase = useAtomValue(phaseAtom);
  const [questions, setQuestions] = useAtom(partSixMHPPairwiseQuestionsAtom);
  const [pairwiseCombos, setPairwiseCombos] = useAtom(pairwiseCombosMHPsAtom);
  const pairwiseCompletion = useAtomValue(pairwiseMHPCompletionAtom);
  const [finalHybridQ, setFinalHybridQ] = useAtom(finalHybridQAtom);

  const [first, second] = [...activePairwiseCombo];

  let correctCount = pairwiseCombos[first][second].filter((val, idx) => {
    return val && val === pairwiseCombos[second][first][idx];
  }).length;

  return (
    <div>
      <div>
        {
          //@ts-ignore
          (phase === 32 || pairwiseCompletion[first][second]) && (
            <div className="fadeIn500 flex flex-col">
              <FormHeader text={`Questions`} />
              {phase !== 32 && (
                <div className="flex flex-col gap-8">
                  <KnowledgeCheckQuestion
                    callback={(questionIdx, answerIdx) => {
                      setQuestions({
                        ...questions,
                        [JSON.stringify(activePairwiseCombo)]: {
                          ...questions[JSON.stringify(activePairwiseCombo)],
                          [questionIdx]:
                            questions[JSON.stringify(activePairwiseCombo)][
                              questionIdx
                            ] !== answerIdx
                              ? answerIdx
                              : null,
                        },
                      });
                    }}
                    hasAnswer={
                      //@ts-ignore
                      questions[JSON.stringify(activePairwiseCombo)][1] ===
                      correctCount
                    }
                    headerText="How many of the loci match?"
                    classNames={{
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
                            questions[JSON.stringify(activePairwiseCombo)][1],
                          correct:
                            idx ===
                            pairwiseCombos[first][second].filter((val, idx) => {
                              return (
                                val &&
                                val === pairwiseCombos[second][first][idx]
                              );
                            }).length,
                          index: idx,
                          text: idx.toString(),
                        };
                      })}
                  />
                  <KnowledgeCheckQuestion
                    callback={(questionIdx, answerIdx) => {
                      setQuestions({
                        ...questions,
                        [JSON.stringify(activePairwiseCombo)]: {
                          ...questions[JSON.stringify(activePairwiseCombo)],
                          [questionIdx]:
                            questions[JSON.stringify(activePairwiseCombo)][
                              questionIdx
                            ] !== answerIdx
                              ? answerIdx
                              : null,
                        },
                      });
                    }}
                    hasAnswer={
                      //@ts-ignore
                      questions[JSON.stringify(activePairwiseCombo)][2] ===
                      correctCount
                    }
                    headerText="What is the IBS for these two parasites?"
                    classNames={{
                      container:
                        questions[JSON.stringify(activePairwiseCombo)][1] ===
                        correctCount
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
                            questions[JSON.stringify(activePairwiseCombo)][2],
                          correct:
                            idx ===
                            pairwiseCombos[first][second].filter((val, idx) => {
                              return (
                                val &&
                                val === pairwiseCombos[second][first][idx]
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
                        // setTimeout(() => {
                        //   responseRef.current?.scrollIntoView({
                        //     block: "center",
                        //     behavior: "smooth",
                        //   });
                        // }, 100);
                      }
                      setQuestions({
                        ...questions,
                        [JSON.stringify(activePairwiseCombo)]: {
                          ...questions[JSON.stringify(activePairwiseCombo)],
                          3:
                            questions[
                              JSON.stringify(activePairwiseCombo)
                            ][3] !== answerIdx
                              ? answerIdx
                              : null,
                        },
                      });
                    }}
                    hasAnswer={
                      //@ts-ignore
                      questions[JSON.stringify(activePairwiseCombo)][3] ===
                      (phase === 32 ? 0 : 6)
                    }
                    headerText="What is the IBD for these two parasites?"
                    classNames={{
                      container:
                        questions[JSON.stringify(activePairwiseCombo)][2] ===
                        correctCount
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
                            questions[JSON.stringify(activePairwiseCombo)][3],
                          correct: phase === 32 ? idx === 0 : idx === 6,
                          index: idx,
                          text: `${idx.toString()}/12`,
                        };
                      })}
                  />
                  {/* <div
                    className={`fadeIn500 bg-primaryBlue/10 p-4 md:p-6 ${phase === 30 && questions["[1,4]"][3] !== 6 ? "hidden" : phase === 31 && questions["[2,4]"][3] !== 6 ? "hidden" : phase === 32 && questions["[3,4]"][3] !== 0 ? "hidden" : ""}`}
                  >
                    <p className="text-sm">
                      {phase === 30
                        ? `That’s right – again we have the privilege of knowing the
                    true relatedness by ancestry of these lab clones. Since
                    clone 4 is a child of clone 1 and shares exactly 50% of it’s
                    genome by ancestry – the red part – IBD is 0.5 or 50%.`
                        : phase === 31
                          ? `That’s right – Just like before, IBD is 0.5 since the hybrid clone shares 50% of its genome with the parent, this time the blue part. Both of the previous comparisons had the same IBD – 0.5 – since the hybrid clone is 50% related to each parent. What do you think you would find if you did similar experiments looking at other, similarly related clones?  Microhaplotypes, just like SNPs, in the related half of the genome should always match perfectly, unless there are mutations or genotyping error. However, since matches in the unrelated part are random, the overall number of matches can vary.`
                          : ""}
                    </p>
                  </div> */}
                  <div
                    className={
                      phase === 31 && questions["[3,4]"][3] === 0
                        ? "fadeIn500"
                        : "hidden"
                    }
                  >
                    <Image
                      alt=""
                      height={400}
                      width={600}
                      src="/assets/M5_sluething_histogram_MHs_MOI1_IBD0.5.svg"
                    ></Image>
                    <div className="fadeIn500 mt-4 bg-primaryBlue/10 p-4 text-sm md:p-6">
                      <p>
                        Most of the time, we expect to see somewhere between 6
                        and 8 matches, but we may get 9/12 matches about 2% of
                        the time. Unlike with SNPs, we are very unlikely to see
                        10 or more matches – less than 0.3% of the time.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {phase === 32 && (
                <div className="fadeIn500">
                  <KnowledgeCheckQuestion
                    questionIdx={1}
                    classNames={{
                      answersContainer: "grid gap-4 mt-4",
                    }}
                    answers={[
                      {
                        checked: finalHybridQ === 0,
                        correct: true,
                        index: 0,
                        text: "IBD would be 0 and IBS would be the same as comparing any completely unrelated clones, usually between 0 and 4 matches",
                      },
                      {
                        checked: finalHybridQ === 1,
                        correct: false,
                        index: 1,
                        text: "IBD would be 1 and IBS would be the same as comparing any completely unrelated clones, usually between 0 and 4 matches.",
                      },
                      {
                        checked: finalHybridQ === 2,
                        correct: false,
                        index: 2,
                        text: "IBD would be 0 and IBS would be slightly higher, somewhere between 5 and 8 matches",
                      },
                    ]}
                    callback={(questionIdx, answerIdx) => {
                      if (finalHybridQ === answerIdx) {
                        setFinalHybridQ(null);
                      } else {
                        setFinalHybridQ(answerIdx);
                      }
                    }}
                    hasAnswer={finalHybridQ === 0}
                    headerText="What do you think you would see if you compared our hybrid lab clone 4 to clone 3, which is not its parent?"
                  />
                </div>
              )}
            </div>
          )
        }
      </div>
    </div>
  );
}
