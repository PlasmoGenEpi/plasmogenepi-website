import KnowledgeCheckQuestion from "@/app/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";
import {
  pairwiseCombosMHPsAtom,
  pairwiseMHPCompletionAtom,
  partSixMHPPairwiseQuestionsAtom,
  phase2Atom,
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
  lang,
}: {
  lang: "EN" | "FR" | "PT";

  activePairwiseCombo: [number, number];
}) {
  const phase = useAtomValue(phase2Atom);
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
            <div className=" flex flex-col">
              {/* <FormHeader text={`Questions`} /> */}
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
                    headerText={
                      lang === "EN"
                        ? "How many of the loci match?"
                        : lang === "FR"
                        ? "Combien de loci correspondent?"
                        : lang === "PT"
                        ? "Quantos dos loci correspondem?"
                        : ""
                    }
                    classNames={{
                      container:
                        questions[JSON.stringify(activePairwiseCombo)][1] ===
                        correctCount
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
                    headerText={
                      lang === "EN"
                        ? "What is the IBS for these two parasites?"
                        : lang === "FR"
                        ? "Quel est l'IBS pour ces deux parasites?"
                        : lang === "PT"
                        ? "Qual é o SCI para estes dois parasitas?"
                        : ""
                    }
                    classNames={{
                      container:
                        questions[JSON.stringify(activePairwiseCombo)][2] ===
                        correctCount
                          ? ""
                          : questions[
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
                    headerText={
                      lang === "EN"
                        ? "What is the IBD for these two parasites?"
                        : lang === "FR"
                        ? "Quel est l'IBD pour ces deux parasites?"
                        : lang === "PT"
                        ? "Qual é a DII para estes dois parasitas?"
                        : "What is the IBD for these two parasites?"
                    }
                    classNames={{
                      container:
                        questions[JSON.stringify(activePairwiseCombo)][3] ===
                        (phase === 32 ? 0 : 6)
                          ? ""
                          : questions[
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
                            questions[JSON.stringify(activePairwiseCombo)][3],
                          correct: phase === 32 ? idx === 0 : idx === 6,
                          index: idx,
                          text: `${idx.toString()}/12`,
                        };
                      })}
                  />
                  {/* <div
                    className={` bg-primaryBlue/10 p-4 md:p-6 ${phase === 30 && questions["[1,4]"][3] !== 6 ? "hidden" : phase === 31 && questions["[2,4]"][3] !== 6 ? "hidden" : phase === 32 && questions["[3,4]"][3] !== 0 ? "hidden" : ""}`}
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
                  {lang === "EN" ? (
                    <div
                      className={
                        phase === 31 && questions["[3,4]"][3] === 0
                          ? ""
                          : "hidden"
                      }
                    >
                      <Image
                        alt=""
                        height={400}
                        width={600}
                        src="/InteractiveAssets/M5_sluething_histogram_MHs_MOI1_IBD0.5.svg"
                      ></Image>
                      <div className=" mt-4 bg-interactiveBlue/10 p-4 text-sm md:p-6">
                        <p>
                          Most of the time, we expect to see somewhere between 6
                          and 8 matches, but we may get 9/12 matches about 2% of
                          the time. Unlike with SNPs, we are very unlikely to
                          see 10 or more matches – less than 0.3% of the time.
                        </p>
                      </div>
                    </div>
                  ) : lang === "FR" ? (
                    <div
                      className={
                        phase === 31 && questions["[3,4]"][3] === 0
                          ? ""
                          : "hidden"
                      }
                    >
                      <Image
                        alt=""
                        height={400}
                        width={600}
                        src="/InteractiveAssets/M5_sluething_histogram_MHs_MOI1_IBD0.5.svg"
                      ></Image>
                      <div className=" mt-4 bg-interactiveBlue/10 p-4 text-sm md:p-6">
                        <p>
                          La plupart du temps, nous nous attendons à voir entre
                          6 et 8 correspondances, mais nous pourrions obtenir
                          9/12 correspondances environ 2 % du temps.
                          Contrairement aux SNP, il est très peu probable que
                          nous voyions 10 correspondances ou plus : moins de
                          0,3 % du temps.
                        </p>
                      </div>
                    </div>
                  ) : lang === "PT" ? (
                    <div
                      className={
                        phase === 31 && questions["[3,4]"][3] === 0
                          ? ""
                          : "hidden"
                      }
                    >
                      <Image
                        alt=""
                        height={400}
                        width={600}
                        src="/InteractiveAssets/M5_sluething_histogram_MHs_MOI1_IBD0.5.svg"
                      ></Image>
                      <div className=" mt-4 bg-interactiveBlue/10 p-4 text-sm md:p-6">
                        <p>
                          Na maioria das vezes, esperamos ver entre 6 e 8
                          correspondências, mas podemos obter 9/12
                          correspondências cerca de 2% das vezes. Ao contrário
                          dos SNPs, é muito improvável que vejamos 10 ou mais
                          correspondências - menos de 0,3% das vezes.
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
              )}
              {phase === 32 && (
                <div className="">
                  <KnowledgeCheckQuestion
                    questionIdx={1}
                    classNames={{
                      container: finalHybridQ === 0 ? "" : "fadeIn500",
                      answersContainer: "grid gap-4 mt-4",
                    }}
                    answers={[
                      {
                        checked: finalHybridQ === 0,
                        correct: true,
                        index: 0,
                        text:
                          lang === "EN"
                            ? "IBD would be 0 and IBS would be the same as comparing any completely unrelated clones, usually between 0 and 4 matches"
                            : lang === "FR"
                            ? "L'IBD serait de 0 et l'IBS serait le même que la comparaison de clones complètement non apparentés, généralement entre 0 et 4 correspondances"
                            : lang === "PT"
                            ? "A DII seria 0 e o SCI seria o mesmo que comparar quaisquer clones completamente não relacionados, geralmente entre 0 e 4 correspondências"
                            : "",
                      },
                      {
                        checked: finalHybridQ === 1,
                        correct: false,
                        index: 1,
                        text:
                          lang === "EN"
                            ? "IBD would be 1 and IBS would be the same as comparing any completely unrelated clones, usually between 0 and 4 matches."
                            : lang === "FR"
                            ? "L'IBD serait de 1 et l'IBS serait le même que la comparaison de clones complètement non apparentés, généralement entre 0 et 4 correspondances."
                            : lang === "PT"
                            ? "A DII seria 1 e o SCI seria o mesmo que comparar quaisquer clones completamente não relacionados, geralmente entre 0 e 4 correspondências."
                            : "",
                      },
                      {
                        checked: finalHybridQ === 2,
                        correct: false,
                        index: 2,
                        text:
                          lang === "EN"
                            ? "IBD would be 0 and IBS would be slightly higher, somewhere between 5 and 8 matches"
                            : lang === "FR"
                            ? "L'IBD serait de 0 et l'IBS serait légèrement plus élevé, quelque part entre 5 et 8 correspondances"
                            : lang === "PT"
                            ? "A DII seria 0 e o SCI seria ligeiramente superior, algures entre 5 e 8 correspondências"
                            : "",
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
                    headerText={
                      lang === "EN"
                        ? "What do you think you would see if you compared our hybrid lab clone 4 to clone 3, which is not its parent?"
                        : lang === "FR"
                        ? "Que pensez-vous que vous verriez si vous compariez notre clone de laboratoire hybride 4 au clone 3, qui n'est pas son parent ?"
                        : lang === "PT"
                        ? "O que pensa que veria se comparasse o nosso clone de laboratório híbrido 4 ao clone 3, que não é o seu progenitor?"
                        : ""
                    }
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
